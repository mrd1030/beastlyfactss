#!/usr/bin/env python3
"""Assemble the Rabbit care package, edition 3.0 (Oryctolagus cuniculus).

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
SRC = os.path.normpath(os.path.join(HERE, "..", "rabbit.html"))
# The cover photo every edition has carried: a rabbit, extracted unchanged from
# the 2.1 HTML. Embedded as base64 only, never resized or re-encoded
# (md5 745f7e38dbce8ccfd5d2240f64076eb6).
COVER = os.path.normpath(os.path.join(HERE, "..", "..", "images", "rabbit-cover-1.jpg"))

EDITION = "3.0"

# TOC: (section label, [(key, title), ...])
SECTIONS = [
    ("Getting Started", [
        ("howto", "How to Use This Package"),
    ]),
    ("Section 01 &middot; Profile", [
        ("profile", "Quick Profile &amp; Cost Overview"),
        ("species", "The Species, Breeds, Size &amp; Lifespan"),
    ]),
    ("Section 02 &middot; Housing &amp; Environment", [
        ("enclosure", "Enclosure Size, Type &amp; Where It Goes"),
        ("flooring", "Flooring, the Litter Box &amp; Litter"),
        ("temperature", "Temperature, Heat &amp; Cold"),
        ("outdoors", "Indoors Versus Outdoors"),
        ("proofing", "Rabbit-Proofing the Room"),
        ("cleaning", "Cleaning &amp; Hygiene"),
    ]),
    ("Section 03 &middot; Feeding", [
        ("diet", "Diet by Age"),
        ("hay", "Hay: the Base of the Diet"),
        ("greens", "Greens, Vegetables &amp; Pellets"),
        ("treats", "Treats, the Never-Feed List &amp; Water"),
        ("growth", "Growth, Weight &amp; Body Condition"),
    ]),
    ("Section 04 &middot; Handling &amp; Behavior", [
        ("handling", "Handling &amp; Building Trust"),
        ("behavior", "Body Language &amp; Normal Behavior"),
        ("enrichment", "Enrichment &amp; Common Mistakes"),
        ("company", "Companionship &amp; Bonding"),
    ]),
    ("Section 05 &middot; Arrival &amp; Life Stages", [
        ("arrival", "Choosing a Rabbit, Quarantine &amp; the First Vet Visit"),
        ("neuter", "Sexing, Spay &amp; Neuter"),
        ("molt", "Molting, Grooming &amp; Nails"),
    ]),
    ("Section 06 &middot; The Law", [
        ("legal", "Is a Rabbit Legal Where You Live?"),
    ]),
    ("Section 07 &middot; Health &amp; Common Issues", [
        ("redflags", "Red Flags &amp; Finding a Vet"),
        ("stasis", "GI Stasis: What It Is &amp; Why Rabbits Get It"),
        ("signs", "GI Stasis: Signs, What to Do &amp; Prevention"),
        ("dental", "Dental Disease"),
        ("flystrike", "Flystrike &amp; Snuffles"),
        ("conditions", "Sore Hocks, Bladder Stones, Uterine Cancer &amp; a Parasite"),
        ("vaccine", "Rabbit Hemorrhagic Disease Vaccine &amp; Antibiotics"),
        ("droppings", "Reading Droppings &amp; Cecotropes"),
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
        ("outage", "Power Outages &amp; Heat Waves"),
        ("travel", "Leaving Town, Transport &amp; Moving"),
        ("sitter", "Pet-Sitter Sheet"),
        ("ownerlog", "Owner Log"),
        ("equiplog", "Care, Vet &amp; Bonding Log"),
        ("enrichlog", "Enrichment Checklist &amp; Log"),
    ]),
    ("Reference", [
        ("glossary", "Glossary, A to G"),
        ("glossary2", "Glossary, H to Z"),
        ("sources", "Sources"),
        ("disagree", "Where the Sources Disagree"),
        ("about", "Version History &amp; About"),
    ]),
]

FOOT = ('<div class="pagefoot"><span class="brand">Beastly Facts</span>'
        '<span>Rabbit Care Package &middot; Edition ' + EDITION + '</span><span>%d</span></div>')

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
    # The Sources page quotes published titles, which keep their own spelling.
    no_sources = re.sub(r"<!--PAGE sources-->.*?<!--FOOT sources-->", "", body, flags=re.S)
    text = re.sub(r"<[^>]+>", " ", no_sources)
    for word in (r"\bhob\b", r"\btorch", r"\bmains\b", r"power cut", r"fortnight", r"skirting",
                 r"\bcolour", r"behaviour", r"\bgrey\b", r"\bmum\b", r"\btyre", r"\bcentre\b",
                 r"\borganis", r"\bprogramme", r"\bfavour", r"\bmetre", r"\blitre", r"\bfibre",
                 r"\bodour", r"\bsynthesis[ei]",r"\bmould", r"\bcatalogue",
                 r"faec", r"anaesth", r"haemo", r"diarrhoea", r"\bspiralling", r"\bmetres", r"\blitres"):
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
