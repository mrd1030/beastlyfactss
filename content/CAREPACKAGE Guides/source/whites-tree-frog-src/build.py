#!/usr/bin/env python3
"""Assemble the White's tree frog care package.

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
SRC = os.path.normpath(os.path.join(HERE, "..", "whites-tree-frog.html"))
# The owner's cover photo. whites-tree-frog-cover-2.jpg is the alternate frame.
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "whites-tree-frog-cover-1.jpg"))

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Quick Profile", [
        ("profile", "Quick Profile &amp; Cost Overview"),
    ]),
    ("Section 02 &middot; Housing &amp; Environment", [
        ("enclosure", "The Vertical Enclosure &amp; Where It Goes"),
        ("temperature", "The Temperature Gradient &amp; Heating"),
        ("humidity", "The Humidity Cycle That Dips"),
        ("water", "The Water That Is Safe to Mist With"),
        ("uvb", "Ultraviolet (UVB) Light &amp; the Day Length"),
        ("substrate", "Substrate, Plants &amp; Furnishings"),
        ("cleaning", "Cleaning Without Soap, and Household Chemicals"),
    ]),
    ("Section 03 &middot; Feeding", [
        ("feeding", "Feeding by Size &amp; Age"),
        ("feeders", "Feeder Insects, Treats &amp; Supplements"),
        ("bodycondition", "Body Condition: Reading the Tympanum Ridges"),
    ]),
    ("Section 04 &middot; Handling, Company &amp; Behavior", [
        ("handling", "Handling With Plain Water &amp; No Soap"),
        ("group", "Group Housing by Size, Sexing &amp; Breeding"),
        ("arrival", "Choosing a Frog, Quarantine &amp; the Law"),
        ("enrichment", "Common Mistakes &amp; Enrichment"),
        ("behavior", "Shedding, Color, Calling &amp; Normal Behavior"),
    ]),
    ("Section 05 &middot; Health &amp; Common Issues", [
        ("redflags", "Health Red Flags &amp; Finding a Vet"),
        ("obesity", "Obesity, Fatty Eyes &amp; Fatty Liver"),
        ("chytrid", "Chytridiomycosis"),
        ("redleg", "Red-Leg Syndrome &amp; Bacterial Infection"),
        ("mbd", "Metabolic Bone Disease &amp; Vitamin A"),
        ("skin", "Skin Injuries, Chemical Exposure &amp; Dehydration"),
        ("minor", "Impaction, Parasites &amp; Shedding Problems"),
    ]),
    ("Section 06 &middot; Quick Reference", [
        ("checklist", "Setup Checklist &amp; Targets"),
        ("emergency", "Emergency &amp; Quick Targets Card"),
    ]),
    ("Section 07 &middot; Owner Tools", [
        ("budget", "Budget &amp; Shopping List"),
        ("first30", "First 30 Days"),
        ("symptoms", "Symptom Quick Reference"),
        ("routine", "Daily, Weekly &amp; Seasonal Routine"),
        ("outage", "Power Outages, Heat Waves, Travel &amp; Transport"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Equipment &amp; Vet Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary"),
        ("sources", "Sources"),
        ("about", "Where the Sources Disagree, Version History &amp; About"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>White\'s Tree Frog Care Package</span><span>%d</span></div>')

PAGE_FILES = ("pages_1.html", "pages_2.html", "pages_3.html", "pages_4.html", "pages_5.html")


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
