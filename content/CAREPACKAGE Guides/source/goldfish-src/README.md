# Goldfish care package source

`../goldfish.html` is generated. Edit the fragments here, then run:

    python3 build.py

`build.py` assigns page numbers in document order from the `<!--PAGE key-->` markers,
resolves `{{P:key}}` cross-references and `<!--FOOT key-->` footers, generates the
contents page from its `SECTIONS` map, and embeds the cover photo. It fails the build on
a duplicate page key, a page missing from the contents, a contents entry with no page, an
unknown `{{P:key}}`, a leftover placeholder, or an em or en dash.

Splitting a page means adding a `<!--PAGE key-->` / `<!--FOOT key-->` pair and one line in
`SECTIONS`. Every number downstream follows on its own.

After any change, run the overflow check from `../../TEMPLATE_GUIDE.md`. Content cut to
make pages fit goes in `../../notes/goldfish-v4-notes.md`, never in the bin.
