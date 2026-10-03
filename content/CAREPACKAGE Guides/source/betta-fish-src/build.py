#!/usr/bin/env python3
"""Assemble the Betta Fish care package, edition 3.1 (Betta splendens).

Content files carry <!--PAGE key--> markers. Page numbers are assigned in
document order, {{P:key}} tokens are resolved to those numbers, the TOC is
generated from SECTIONS, and each page gets its footer. Splitting or adding a
page only means editing the content and SECTIONS; every number follows.

The build fails on a duplicate page key, a page missing from the contents, a
contents entry with no page, an unknown {{P:key}}, a leftover placeholder, an
em or en dash (character or entity), a literal "page N" cross-reference,
an external link (http or www), or a British word on the banned list.
"""
import base64
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, "..", "betta-fish.html"))
# The cover photo the 2.x editions carried inline: a betta, mirrored by the cover
# layout. Extracted byte for byte from the 2.2 HTML (md5 3fee27cd57742b58c2f460fc37cd53cd)
# and embedded as base64 only, never resized or re-encoded.
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "betta-fish-cover-2.jpg"))

EDITION = "3.1"

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Profile", [
        ("profile", "Quick Profile &amp; Cost Overview"),
        ("species", "The Species, Size &amp; Lifespan"),
    ]),
    ("Section 02 &middot; Housing &amp; Environment", [
        ("tank", "Tank Size, Type &amp; Where It Goes"),
        ("heat", "Temperature, Heater &amp; Thermometer"),
        ("filter", "Filtration &amp; Gentle Flow"),
        ("cycle", "The Nitrogen Cycle &amp; Fishless Cycling"),
        ("fishin", "Fish-In Cycling &amp; When a Cycle Stalls"),
        ("water", "Water Quality, Testing &amp; Hardness"),
        ("changes", "Water Changes &amp; Conditioner"),
        ("decor", "Substrate, Plants, Light &amp; Decor"),
        ("cleaning", "Cleaning &amp; Hygiene"),
    ]),
    ("Section 03 &middot; Feeding", [
        ("diet", "Diet &amp; Feeding Schedule"),
        ("foods", "Pellets, Protein Foods &amp; the Food Chart"),
        ("treats", "Treats &amp; the Never-Feed List"),
        ("refuse", "Why a Betta Stops Eating"),
        ("growth", "Body Condition &amp; Portion Control"),
    ]),
    ("Section 04 &middot; Handling &amp; Behavior", [
        ("handling", "Handling: Net, Cup &amp; Never Bare Hands"),
        ("behavior", "Body Language, Flaring &amp; Bubble Nests"),
        ("enrichment", "Enrichment: What the Research Says"),
        ("mistakes", "Common Mistakes &amp; Myths"),
    ]),
    ("Section 05 &middot; Arrival &amp; Life Stages", [
        ("arrival", "Choosing a Healthy Betta &amp; Bringing It Home"),
        ("quarantine", "Quarantine &amp; the Hospital Tank"),
        ("tankmates", "Tankmates"),
        ("breeding", "Males, Females, Bubble Nests &amp; Fry"),
    ]),
    ("Section 06 &middot; Health &amp; Common Issues", [
        ("redflags", "Red Flags &amp; Testing the Water First"),
        ("vet", "Finding a Vet &amp; When It Is a Vet's Job"),
        ("finrot", "Fin Rot, Regrowth &amp; Clamped Fins"),
        ("ichvelvet", "Ich &amp; Velvet"),
        ("columnaris", "Columnaris"),
        ("internal", "Swim Bladder, Dropsy &amp; Fish Tuberculosis"),
        ("signs", "Reading Waste, Breathing &amp; Oxygen"),
        ("meds", "Medication Rules &amp; When a Fish Will Not Recover"),
    ]),
    ("Section 07 &middot; Quick Reference", [
        ("checklist", "Setup Checklist &amp; Targets"),
        ("emergency", "Emergency &amp; Quick Targets Card"),
    ]),
    ("Section 08 &middot; Owner Tools", [
        ("budget", "Budget: Setup &amp; Shopping List"),
        ("budget2", "Budget: Running Costs"),
        ("first30", "First 30 Days"),
        ("symptoms", "Symptom Quick Reference"),
        ("routine", "Daily, Weekly &amp; Seasonal Routine"),
        ("outage", "Power Outages"),
        ("transport", "Travel, Transport &amp; Moving"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Equipment, Water Change &amp; Vet Log"),
        ("enrichlog", "Enrichment Checklist &amp; Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary, A to F"),
        ("glossary2", "Glossary, G to M"),
        ("glossary3", "Glossary, N to Z"),
        ("sources", "Sources"),
        ("disagree", "Where the Sources Disagree"),
        ("about", "Version History &amp; About"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>Betta Fish Care Package &middot; Edition ' + EDITION + '</span><span>%d</span></div>')

PAGE_FILES = tuple(sorted(n for n in os.listdir(HERE) if n.startswith("pages_") and n.endswith(".html")))


def main():
    head = open(os.path.join(HERE, "head.html"), encoding="utf-8").read()
    body = "".join(
        open(os.path.join(HERE, n), encoding="utf-8").read() for n in PAGE_FILES
    )

    # Shorthand: a line that starts with "[] " becomes a check-list item.
    body = re.sub(r'^([ \t]*)\[] (.*)$',
                  r'\1<div class="check-item"><div class="box"></div><span>\2</span></div>',
                  body, flags=re.M)

    # No hand-numbered cross-references: every one must be a {{P:key}} token.
    literal = re.findall(r"[Pp]ages? [0-9]+", body)
    if literal:
        sys.exit("literal page reference(s), use {{P:key}}: %s" % sorted(set(literal)))

    # No external links, and US usage only. Checked on the body, before the
    # cover photo is embedded, so base64 text cannot trip the word list.
    if re.search(r"https?:|www\.|\.com\b", re.sub(r'xmlns="[^"]*"', "", body)):
        sys.exit("external link present in the body")
    text = re.sub(r"<[^>]+>", " ", body)
    for word in (r"\bhob\b", r"\btorch", r"\bmains\b", r"power cut", r"fortnight", r"skirting",
                 r"\bcolour", r"behaviour", r"\bgrey\b", r"\bmum\b", r"\btyre", r"\bcentre\b",
                 r"\borganis(?:e|ed|es|ing|ation)\b", r"\bprogramme", r"\bfavour", r"\bmetre", r"\blitre", r"\bfibre",
                 r"\bodour", r"\bsynthesis[ei]",r"\bmould", r"\bcatalogue"):
        if re.search(word, text, re.I):
            sys.exit("British usage %r present" % word)

    # Assign page numbers in document order from the PAGE markers.
    keys = re.findall(r"<!--PAGE\s+([a-z0-9_]+)\s*-->", body)
    if len(keys) != len(set(keys)):
        dupes = sorted(k for k in set(keys) if keys.count(k) > 1)
        sys.exit("duplicate page keys: %s" % dupes)
    nums = {k: i + 1 for i, k in enumerate(keys)}
    total = len(keys)

    # Every TOC entry must exist as a page, and vice versa (cover/contents aside).
    toc_keys = [k for _, entries in SECTIONS for k, _ in entries]
    missing = [k for k in toc_keys if k not in nums]
    if missing:
        sys.exit("TOC references missing pages: %s" % missing)
    untocd = [k for k in keys if k not in toc_keys and k not in ("cover", "contents")]
    if untocd:
        sys.exit("pages missing from the TOC: %s" % untocd)
    if [k for k in keys if k not in ("cover", "contents")] != toc_keys:
        sys.exit("TOC order does not match page order")
    foots = re.findall(r"<!--FOOT\s+([a-z0-9_]+)\s*-->", body)
    if sorted(foots) != sorted(keys):
        sys.exit("PAGE and FOOT markers do not pair up: %s" % sorted(set(keys) ^ set(foots)))

    # Build the TOC.
    toc = []
    for label, entries in SECTIONS:
        toc.append('    <div class="toc-label">%s</div>\n    <table>' % label)
        for key, title in entries:
            toc.append('      <tr><td>%s</td><td class="small" style="text-align:right;">%d</td></tr>'
                       % (title, nums[key]))
        toc.append("    </table>\n")
    body = body.replace("{{TOC}}", "\n".join(toc))

    # Footers: one per page marker, except the cover which carries none.
    def foot(m):
        key = m.group(1)
        return "" if key == "cover" else FOOT % nums[key]
    body = re.sub(r"<!--FOOT\s+([a-z0-9_]+)\s*-->", foot, body)

    # Cross-references.
    def ref(m):
        key = m.group(1)
        if key not in nums:
            sys.exit("unknown cross-reference {{P:%s}}" % key)
        return str(nums[key])
    body = re.sub(r"\{\{P:([a-z0-9_]+)\}\}", ref, body)
    body = body.replace("{{PAGE_COUNT}}", str(total))

    html = head + body

    # Embed the cover photo, as is: base64 only, no resize or re-encode.
    uri = "data:image/jpeg;base64," + base64.b64encode(open(COVER, "rb").read()).decode()
    if html.count("{{COVER_IMAGE_DATA_URI}}") != 1:
        sys.exit("cover placeholder not found exactly once")
    html = html.replace("{{COVER_IMAGE_DATA_URI}}", uri)

    left = re.findall(r"\{\{[A-Za-z_:0-9]+\}\}", html)
    if left:
        sys.exit("unresolved placeholders: %s" % sorted(set(left)))
    for bad in ("—", "–", "&mdash;", "&ndash;", "&#8212;", "&#8211;", "&#x2014;", "&#x2013;"):
        if bad in html:
            sys.exit("em or en dash present in output: %r" % bad)

    open(SRC, "w", encoding="utf-8").write(html)
    print("wrote %s (%d pages, %d bytes)" % (SRC, total, len(html)))
    for label, entries in SECTIONS:
        print("  %s: %s" % (label.replace("&middot;", "-").replace("&amp;", "&"),
                            ", ".join("%s=%d" % (k, nums[k]) for k, _ in entries)))


if __name__ == "__main__":
    main()
