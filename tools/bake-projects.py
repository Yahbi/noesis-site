#!/usr/bin/env python3
"""Bake portfolio project photography into the rungs wix()/ENHANCED expect.

Usage:  python3 tools/bake-projects.py MANIFEST.json [--dry-run]

Manifest shape:
  {
    "out_dir": "assets/img",
    "projects": [
      {"slug": "casbah",
       "src_dir": "/abs/path/to/HIGH RES",
       "picks": [22, 0, 4],          # indices into the sorted image listing
       "trim_white": false}          # optional: crop flat white margins first
    ]
  }

Each pick becomes sf-<slug>-<NN>.jpg (master), -w1400.jpg and -w800.jpg, matching
the derivative convention wix() already uses for the ENHANCED map. The site grade
is a CSS filter on gallery images, so it is deliberately NOT baked in here —
baking it would double-apply it in the lightbox.

Inputs are never modified. A source that is missing, unreadable, or narrower than
the master rung fails the run loudly rather than silently shipping a soft image.
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageChops

Image.MAX_IMAGE_PIXELS = None

MASTER_W = 2000
RUNGS = ((None, MASTER_W), ("-w1400", 1400), ("-w800", 800))
JPEG_OPTS = {"quality": 84, "optimize": True, "progressive": True, "subsampling": 1}
IMAGE_SUFFIXES = (".jpg", ".jpeg", ".png")
WHITE_FLOOR = 246          # a pixel this bright on every channel counts as margin


def fail(msg):
    print(f"bake-projects: {msg}", file=sys.stderr)
    sys.exit(1)


def list_sources(src_dir):
    d = Path(src_dir)
    if not d.is_dir():
        fail(f"missing source directory {d}")
    files = sorted(f for f in d.iterdir() if f.suffix.lower() in IMAGE_SUFFIXES)
    if not files:
        fail(f"no images in {d}")
    return files


def trim_white_margins(im):
    """Return a copy with flat near-white borders (PDF page margins) removed."""
    flat = Image.new("RGB", im.size, (255, 255, 255))
    diff = ImageChops.difference(im, flat).convert("L").point(
        lambda v: 255 if v > (255 - WHITE_FLOOR) else 0)
    box = diff.getbbox()
    return im.crop(box) if box else im


def bake_one(master, out_dir, stem, dry_run):
    if master.width < MASTER_W:
        fail(f"{stem}: source is {master.width}px wide, master rung needs {MASTER_W}px")
    written = []
    for suffix, width in RUNGS:
        name = f"{stem}{suffix or ''}.jpg"
        if not dry_run:
            r = master.resize((width, round(master.height * width / master.width)), Image.LANCZOS)
            r.save(out_dir / name, "JPEG", **JPEG_OPTS)
        written.append(name)
    return written


def main(argv):
    args = [a for a in argv[1:] if not a.startswith("--")]
    dry_run = "--dry-run" in argv
    if len(args) != 1:
        fail("usage: bake-projects.py MANIFEST.json [--dry-run]")
    try:
        manifest = json.loads(Path(args[0]).read_text())
    except (OSError, ValueError) as e:
        fail(f"bad manifest: {e}")

    repo = Path(__file__).resolve().parent.parent
    out_dir = repo / manifest.get("out_dir", "assets/img")
    if not out_dir.is_dir():
        fail(f"output directory {out_dir} does not exist")

    index = {}
    total = 0
    for proj in manifest["projects"]:
        slug = proj["slug"]
        files = list_sources(proj["src_dir"])
        keys = []
        for n, pick in enumerate(proj["picks"], start=1):
            if not 0 <= pick < len(files):
                fail(f"{slug}: pick {pick} out of range (source has {len(files)} images)")
            src = files[pick]
            try:
                master = Image.open(src)
                master.load()
                master = master.convert("RGB")
            except OSError as e:
                fail(f"cannot read {src}: {e}")
            if proj.get("trim_white"):
                master = trim_white_margins(master)
            stem = f"sf-{slug}-{n:02d}"
            bake_one(master, out_dir, stem, dry_run)
            keys.append(stem)
            total += 1
            print(f"  {stem}  <- {src.name}  ({master.width}x{master.height})")
        index[slug] = keys

    print(f"\n{total} images, {total * len(RUNGS)} files")
    # The ENHANCED keys the JSX should reference, ready to paste or read back.
    (out_dir.parent.parent / "tools" / "project-index.json").write_text(
        json.dumps(index, indent=2) + "\n")
    print("wrote tools/project-index.json")


if __name__ == "__main__":
    main(sys.argv)
