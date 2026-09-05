#!/usr/bin/env python3
"""Assemble the russian-tortoise care package.

Content files carry <!--PAGE key--> markers. Page numbers are assigned in
document order, {{P:key}} tokens are resolved to those numbers, the TOC is
generated from SECTIONS, and each page gets its footer. Splitting or adding a
page only means editing the content and SECTIONS; every number follows.
"""
import base64
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, "..", "russian-tortoise.html"))
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "russian-tortoise-cover-3.jpg"))

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Quick Profile", [
        ("profile", "Quick Profile &amp; Cost Overview"),
    ]),
    ("Section 02 &middot; Full Care Guide", [
        ("housing", "Enclosure Size, Type &amp; the Table Question"),
        ("heat", "Temperature, Basking &amp; Night Lows"),
        ("uvb", "UVB, Lighting &amp; the Equipment That Controls It"),
        ("humidity", "Humidity, Substrate &amp; the Moist Hide"),
        ("outdoor", "Outdoor Housing &amp; Escape-Proofing"),
        ("handling", "Handling, Temperament &amp; Why Males Live Alone"),
        ("diet", "Diet: What a Steppe Grazer Actually Eats"),
        ("weeds", "Weeds, Grazing &amp; Growing Your Own"),
        ("never", "Fruit, Protein, Supplements &amp; the Never-Feed List"),
        ("mistakes", "Common Mistakes &amp; Enrichment"),
        ("sexing", "Sexing, Growth &amp; Body Condition"),
        ("eggs", "Females, Eggs &amp; Egg Binding"),
    ]),
    ("Section 03 &middot; Health &amp; Common Issues", [
        ("redflags", "Health Red Flags &amp; What to Tell the Vet"),
        ("mbd", "Metabolic Bone Disease &amp; Pyramiding"),
        ("respiratory", "Respiratory Infection &amp; Herpesvirus"),
        ("shell", "Shell Rot, Trauma &amp; Abscesses"),
        ("parasites", "Parasites, the Fecal Test &amp; Quarantine"),
        ("minor", "Vitamin A Deficiency, Cloacoliths &amp; Beak Overgrowth"),
        ("brumation", "Brumation: the Decision and the Protocol"),
        ("poop", "Reading Droppings, Urates &amp; Hydration"),
    ]),
    ("Section 04 &middot; Quick Reference", [
        ("legal", "The Law &amp; the Four-Inch Rule"),
        ("checklist", "Setup Checklist &amp; Targets"),
        ("emergency", "Emergency &amp; Quick Targets Card"),
    ]),
    ("Section 05 &middot; Owner Tools", [
        ("budget", "Budget &amp; Shopping List"),
        ("first30", "First 30 Days Checklist"),
        ("symptoms", "Symptom Quick Reference"),
        ("routine", "Daily, Weekly &amp; Seasonal Routine"),
        ("outage", "Power Outages, Travel &amp; Transport"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Equipment, Supplement &amp; Vet Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary"),
        ("sources", "Sources"),
        ("disagree", "Where the Sources Disagree &amp; Version History"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>Russian Tortoise Care Package</span><span>%d</span></div>')

PAGE_FILES = ("pages_1.html", "pages_2.html", "pages_3.html", "pages_4.html", "pages_5.html", "pages_6.html")


def main():
    head = open(os.path.join(HERE, "head.html"), encoding="utf-8").read()
    body = "".join(
        open(os.path.join(HERE, n), encoding="utf-8").read() for n in PAGE_FILES
    )

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

    # Embed the cover photo.
    uri = "data:image/jpeg;base64," + base64.b64encode(open(COVER, "rb").read()).decode()
    if html.count("{{COVER_IMAGE_DATA_URI}}") != 1:
        sys.exit("cover placeholder not found exactly once")
    html = html.replace("{{COVER_IMAGE_DATA_URI}}", uri)

    left = re.findall(r"\{\{[A-Za-z_:0-9]+\}\}", html)
    if left:
        sys.exit("unresolved placeholders: %s" % sorted(set(left)))
    for bad in ("—", "–"):
        if bad in html:
            sys.exit("em or en dash present in output")

    open(SRC, "w", encoding="utf-8").write(html)
    print("wrote %s (%d pages, %d bytes)" % (SRC, total, len(html)))
    for label, entries in SECTIONS:
        print("  %s: %s" % (label.replace("&middot;", "-").replace("&amp;", "&"),
                            ", ".join("%s=%d" % (k, nums[k]) for k, _ in entries)))


if __name__ == "__main__":
    main()
