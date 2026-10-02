#!/usr/bin/env python3
"""Assemble the Bearded Dragon care package, edition 4.0 (Pogona vitticeps).

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
SRC = os.path.normpath(os.path.join(HERE, "..", "bearded-dragon.html"))
# The cover photo every edition since 3.0 has carried: a bearded dragon facing
# left. Embedded as base64 only, never resized or re-encoded. It is the same
# file the 3.2 HTML carried inline (md5 2bd9db0f5997bf39bdf7d6e51e047400).
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "bearded-dragon-cover-3.jpg"))

EDITION = "4.0"

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Profile", [
        ("profile", "Quick Profile &amp; Cost Overview"),
        ("species", "The Species, Morphs, Size &amp; Lifespan"),
    ]),
    ("Section 02 &middot; Housing &amp; Environment", [
        ("enclosure", "Enclosure Size, Type &amp; Where It Goes"),
        ("temperature", "The Temperature Gradient &amp; Heat"),
        ("thermostats", "Thermostats, Probes &amp; Timers"),
        ("uvb", "UVB: Tube, Strength &amp; Mounting Distance"),
        ("substrate", "Substrate, Furnishings &amp; Bioactive Setups"),
        ("cleaning", "Cleaning &amp; Hygiene"),
    ]),
    ("Section 03 &middot; Feeding", [
        ("diet", "Diet by Age"),
        ("insects", "Feeder Insects &amp; Gut-Loading"),
        ("greens", "Safe Greens &amp; Vegetables"),
        ("fruit", "Fruit, Treats &amp; the Never-Feed List"),
        ("supplements", "Supplements: Calcium, Vitamin D3 &amp; Multivitamin"),
        ("growth", "Growth, Weight &amp; Body Condition"),
    ]),
    ("Section 04 &middot; Handling &amp; Behavior", [
        ("handling", "Handling &amp; Taming"),
        ("behavior", "Body Language: Beard, Color, Arm-Wave &amp; Glass Surfing"),
        ("enrichment", "Enrichment &amp; Common Mistakes"),
    ]),
    ("Section 05 &middot; Arrival &amp; Life Stages", [
        ("arrival", "Choosing a Dragon, Quarantine &amp; the First Vet Visit"),
        ("eggs", "Sexing &amp; Females That Lay"),
        ("binding", "Egg Binding"),
        ("brumation", "Brumation"),
    ]),
    ("Section 06 &middot; The Law", [
        ("legal", "Is a Bearded Dragon Legal Where You Live?"),
    ]),
    ("Section 07 &middot; Health &amp; Common Issues", [
        ("redflags", "Red Flags &amp; Finding a Vet"),
        ("mbd", "Metabolic Bone Disease"),
        ("impaction", "Impaction, Dehydration &amp; Prolapse"),
        ("respiratory", "Respiratory Infection, Atadenovirus &amp; Yellow Fungus"),
        ("parasites", "Parasites, Mouth Rot &amp; Eye Problems"),
        ("shedding", "Shedding, Tail and Toe Rot &amp; Burns"),
        ("stool", "Reading Poop, Urates &amp; Hydration"),
    ]),
    ("Section 08 &middot; Quick Reference", [
        ("checklist", "Setup Checklist &amp; Targets"),
        ("emergency", "Emergency &amp; Quick Targets Card"),
    ]),
    ("Section 09 &middot; Owner Tools", [
        ("budget", "Budget &amp; Shopping List"),
        ("first30", "First 30 Days"),
        ("symptoms", "Symptom Quick Reference"),
        ("routine", "Daily, Weekly &amp; Seasonal Routine"),
        ("outage", "Power Outages, Heat Waves, Travel &amp; Transport"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Equipment &amp; Vet Log"),
        ("enrichlog", "Enrichment Checklist &amp; Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary, A to H"),
        ("glossary2", "Glossary, I to Z"),
        ("sources", "Sources"),
        ("about", "Where the Sources Disagree, Version History &amp; About"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>Bearded Dragon Care Package &middot; Edition ' + EDITION + '</span><span>%d</span></div>')

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

    # No external links, and US usage only. Checked on the body, before the
    # cover photo is embedded, so base64 text cannot trip the word list.
    if re.search(r"https?:|www\.|\.com\b", re.sub(r'xmlns="[^"]*"', "", body)):
        sys.exit("external link present in the body")
    text = re.sub(r"<[^>]+>", " ", body)
    for word in (r"\bhob\b", r"\btorch", r"\bmains\b", r"power cut", r"fortnight", r"skirting",
                 r"\bcolour", r"behaviour", r"\bgrey\b", r"\bmum\b", r"\btyre", r"\bcentre\b",
                 r"\borganis", r"\bprogramme", r"\bfavour", r"\bmetre", r"\blitre", r"\bfibre",
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
