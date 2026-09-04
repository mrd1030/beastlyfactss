#!/usr/bin/env python3
"""Assemble the cockatoo care package.

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
SRC = os.path.normpath(os.path.join(HERE, "..", "cockatoo.html"))
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "cockatoo-cover-1.jpg"))

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Before You Commit", [
        ("profile", "Quick Profile &amp; Cost Overview"),
        ("decision", "Is a Cockatoo Right for You? The Honest Test"),
        ("species", "Which Cockatoo: Size, Price, Noise &amp; Temperament"),
    ]),
    ("Section 02 &middot; Housing &amp; Environment", [
        ("cage", "Cage Size, Bar Gauge, Locks &amp; Placement"),
        ("furnishings", "Perches, Play Stands &amp; Out-of-Cage Space"),
        ("light", "Light, Sleep &amp; the 10 to 12 Hour Rule"),
        ("dust", "Feather Dust, Air Quality &amp; Your Own Lungs"),
        ("hazards", "Household Hazards &amp; Bird-Proofing"),
    ]),
    ("Section 03 &middot; Diet", [
        ("diet", "Diet: Pellets, Seed &amp; Converting a Seed Eater"),
        ("veg", "Safe Vegetables, Greens &amp; Fruit"),
        ("nuts", "Nuts, Treats &amp; the Never-Feed List"),
        ("foraging", "Foraging: Filling the Six-Hour Gap"),
    ]),
    ("Section 04 &middot; Behavior &amp; Handling", [
        ("training", "Training, and Why It Beat Everything Else"),
        ("handling", "Handling, Step-Up, Bites &amp; Sexual Maturity"),
        ("bonding", "Over-Bonding, Separation Anxiety &amp; Independence"),
        ("screaming", "Screaming, Noise &amp; the Household Reality"),
        ("clipping", "Wing Clipping &amp; Flight"),
        ("sexing", "Sexing, Weight &amp; Body Condition"),
        ("eggs", "Hens, Hormones &amp; Chronic Egg Laying"),
    ]),
    ("Section 05 &middot; Health &amp; Common Issues", [
        ("redflags", "Health Red Flags &amp; What to Tell the Vet"),
        ("plucking", "Feather-Destructive Behavior, Molt &amp; the Differential"),
        ("pbfd", "PBFD &amp; Viral Disease"),
        ("liver", "Obesity, Lipomas &amp; Fatty Liver"),
        ("minor", "Psittacosis, Respiratory Disease, Metals &amp; Injuries"),
        ("droppings", "Reading Droppings &amp; Hydration"),
        ("quarantine", "Quarantine &amp; Adding a Second Bird"),
    ]),
    ("Section 06 &middot; The Long View", [
        ("legal", "Legal Status, CITES &amp; State Rules"),
        ("succession", "The Sixty-Year Bird: Succession &amp; Rehoming"),
    ]),
    ("Section 07 &middot; Quick Reference", [
        ("checklist", "Setup Checklist &amp; Targets"),
        ("emergency", "Emergency &amp; Quick Targets Card"),
    ]),
    ("Section 08 &middot; Owner Tools", [
        ("budget", "Budget &amp; Shopping List"),
        ("first30", "First 30 Days Checklist"),
        ("symptoms", "Symptom Quick Reference"),
        ("routine", "Daily, Weekly &amp; Seasonal Routine"),
        ("outage", "Power Outages, Travel &amp; Transport"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Equipment &amp; Vet Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary"),
        ("sources", "Sources &amp; Further Reading"),
        ("about", "Where the Sources Disagree, Version History &amp; About"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>Cockatoo Care Package</span><span>%d</span></div>')

PAGE_FILES = ("pages_1.html", "pages_2.html", "pages_3.html", "pages_4.html", "pages_5.html")


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
