#!/usr/bin/env python3
"""Assemble the African fat-tailed gecko care package, edition 1.1.

Content files carry <!--PAGE key--> markers. Page numbers are assigned in
document order, {{P:key}} tokens are resolved to those numbers, the TOC is
generated from SECTIONS, and each page gets its footer. Splitting or adding a
page only means editing the content and SECTIONS; every number follows.

The build fails on a duplicate page key, a page missing from the contents, a
contents entry with no page, an unknown {{P:key}}, a leftover placeholder, an
em or en dash (character or entity), or a literal "page N" cross-reference.
"""
import base64
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, "..", "african-fat-tail.html"))
# The owner's cover photo: a close, banded gecko facing left on a rock.
# african-fat-tail-cover-2.jpg is the alternate frame (smaller gecko, more tail).
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "african-fat-tail-cover-1.jpg"))

EDITION = "1.1"

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Profile", [
        ("profile", "Quick Profile &amp; Cost Overview"),
        ("leopard", "Fat-Tail or Leopard Gecko? The Differences"),
    ]),
    ("Section 02 &middot; Housing &amp; Environment", [
        ("enclosure", "A Floor-Space Enclosure &amp; Where It Goes"),
        ("heat", "Belly Heat, the Thermostat &amp; the Probe"),
        ("humidity", "Humidity &amp; the Three Hides"),
        ("lighting", "Light Cycle &amp; UVB (Ultraviolet B) Light"),
        ("substrate", "Substrate for a Burrower, Furnishings &amp; Cleaning"),
    ]),
    ("Section 03 &middot; Feeding", [
        ("diet", "What African Fat-Tailed Geckos Eat"),
        ("schedule", "Feeding Schedule by Age &amp; How Much"),
        ("feeders", "Feeder Insects: Staples, Treats &amp; Never"),
        ("supplements", "Gut-Loading &amp; Calcium Dusting"),
        ("refusal", "Why It Stops Eating &amp; When to Worry"),
    ]),
    ("Section 04 &middot; Handling &amp; Behavior", [
        ("handling", "Handling a Calm Gecko"),
        ("behavior", "Shedding, Seasons, Sounds &amp; Behavior"),
        ("enrichment", "Common Mistakes &amp; Enrichment"),
    ]),
    ("Section 05 &middot; Arrival &amp; Life Stages", [
        ("arrival", "Choosing a Gecko, Quarantine &amp; the Law"),
        ("sexing", "Sexing, Weight &amp; Body Condition"),
        ("eggs", "Females, Eggs &amp; the Laying Box"),
    ]),
    ("Section 06 &middot; Health &amp; Common Issues", [
        ("redflags", "Health Red Flags &amp; Finding a Vet"),
        ("shed", "Retained Shed &amp; Eye Problems"),
        ("mbd", "Metabolic Bone Disease &amp; Vitamin Problems"),
        ("impaction", "Impaction &amp; Respiratory Infection"),
        ("eggbinding", "Egg Binding, Prolapse &amp; Male Problems"),
        ("minor", "Parasites, Mouth Rot, Tail Loss &amp; Burns"),
        ("poop", "Reading Poop &amp; Hydration"),
    ]),
    ("Section 07 &middot; Quick Reference", [
        ("checklist", "Setup Checklist &amp; Targets"),
        ("emergency", "Emergency &amp; Quick Targets Card"),
    ]),
    ("Section 08 &middot; Owner Tools", [
        ("budget", "Budget &amp; Shopping List"),
        ("budget2", "Budget: Yearly Costs"),
        ("first30", "First 30 Days"),
        ("symptoms", "Symptom Quick Reference"),
        ("routine", "Daily, Weekly &amp; Seasonal Routine"),
        ("outage", "Power Outages, Travel &amp; Transport"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Equipment, Supplement &amp; Vet Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary, A to I"),
        ("glossary2", "Glossary, M to Z"),
        ("sources", "Sources"),
        ("disagree", "Where the Sources Disagree"),
        ("about", "Version History &amp; About"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>African Fat-Tailed Gecko Care Package &middot; Edition ' + EDITION + '</span><span>%d</span></div>')

PAGE_FILES = tuple(sorted(n for n in os.listdir(HERE) if n.startswith("pages_") and n.endswith(".html")))


def main():
    head = open(os.path.join(HERE, "head.html"), encoding="utf-8").read()
    body = "".join(
        open(os.path.join(HERE, n), encoding="utf-8").read() for n in PAGE_FILES
    )

    # No hand-numbered cross-references: every one must be a {{P:key}} token.
    literal = re.findall(r"[Pp]ages? [0-9]+", body)
    if literal:
        sys.exit("literal page reference(s), use {{P:key}}: %s" % sorted(set(literal)))

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
    # No links or website calls to action inside the PDF, and US usage only.
    text = re.sub(r"data:[a-z/]+;base64,[A-Za-z0-9+/=]+", "", body)
    text = re.sub(r'xmlns="[^"]*"', "", text)
    for bad in ("http", "www.", ".com", ".org", "beastlyfacts"):
        if bad in text.lower().replace("beastly facts", ""):
            sys.exit("link or site reference in output: %r" % bad)
    for word in (r"\bhobs?\b", r"\btorch", r"\bmains\b", r"power cut", r"fortnight", r"skirting", r"colour", r"\bgrey", r"centre", r"litre", r"metre"):
        if re.search(word, text.lower()):
            sys.exit("non-US usage in output: %r" % word)
    for bad in ("—", "–", "&mdash;", "&ndash;", "&#8212;", "&#8211;"):
        if bad in html:
            sys.exit("em or en dash present in output: %r" % bad)

    open(SRC, "w", encoding="utf-8").write(html)
    print("wrote %s (%d pages, %d bytes)" % (SRC, total, len(html)))
    for label, entries in SECTIONS:
        print("  %s: %s" % (label.replace("&middot;", "-").replace("&amp;", "&"),
                            ", ".join("%s=%d" % (k, nums[k]) for k, _ in entries)))


if __name__ == "__main__":
    main()
