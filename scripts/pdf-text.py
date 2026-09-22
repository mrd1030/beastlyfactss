#!/usr/bin/env python3
"""Read a PDF on stdin, write its text to stdout. Nothing else.

Called by scripts/check-legal-sources.mjs, once per PDF source. It exists
because 52 of the 208 primary sources are PDFs and 828 cells rest on them,
which is 31% of the matrix with no quote verification at all until the bytes
can be turned into words.

Hand-rolling this was tried first, inflating FlateDecode streams with zlib and
reading Tj/TJ operators. It worked on five of eight test files and returned
font binary or control bytes on the rest, because statute PDFs use subset
fonts with custom encodings and object streams. pypdf handles all of that.

Exit 2 means pypdf is not installed, which the caller treats as "hash only",
exactly as it behaved before this existed. Exit 1 means the file would not
parse. Neither is fatal: a PDF whose text cannot be read is no worse off than
it was.
"""
import io
import logging
import sys
import warnings

warnings.filterwarnings('ignore')
logging.disable(logging.CRITICAL)

try:
    from pypdf import PdfReader
except Exception as err:  # noqa: BLE001
    sys.stderr.write(f'pypdf unavailable: {err}\n')
    sys.exit(2)

data = sys.stdin.buffer.read()

try:
    reader = PdfReader(io.BytesIO(data), strict=False)
except Exception as err:  # noqa: BLE001
    sys.stderr.write(f'parse failed: {err}\n')
    sys.exit(1)

pages = []
for page in reader.pages:
    # One unreadable page should not lose the other four hundred.
    try:
        pages.append(page.extract_text() or '')
    except Exception:  # noqa: BLE001
        pass

sys.stdout.write('\n'.join(pages))
