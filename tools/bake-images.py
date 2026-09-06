#!/usr/bin/env python3
"""Bake site imagery from master renders/photographs into the rungs the pages use.

Usage:  python3 tools/bake-images.py MANIFEST.json

The manifest is a JSON object:
  {
    "src_dir": "/abs/path/to/masters",
    "out_dir": "assets/img",                      # relative to the repo root
    "hero": [ {"n": 1, "src": "west-aerial.png", "focus": [0.5, 0.5]} ],
    "band": [ {"name": "city-west", "src": "west-aerial.png"} ]
  }

Hero plates become hero-N-{1400,2000,2600}.jpg, cropped to 16:9 around the focus
point and with the site grade baked in (the scroll hero paints plates without a
CSS filter so the scrub stays cheap). Band/split images become NAME.jpg (2600w),
NAME-w1400.jpg and NAME-w800.jpg at the master's own aspect; the CSS crops them.

Nothing here mutates its inputs; every output is a fresh file. Masters that are
missing, unreadable or smaller than the largest rung fail the run loudly.
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageEnhance

HERO_RUNGS = (1400, 2000, 2600)
BAND_RUNGS = ((None, 2600), ("-w1400", 1400), ("-w800", 800))
HERO_ASPECT = 16 / 9
JPEG_OPTS = {"quality": 86, "optimize": True, "progressive": True, "subsampling": 1}

# Mirrors --grade in styles.css: saturate(.94) contrast(1.03).
GRADE_SATURATION = 0.94
GRADE_CONTRAST = 1.03


def fail(msg):
    print(f"bake-images: {msg}", file=sys.stderr)
    sys.exit(1)


def load_master(path, min_width):
    if not path.is_file():
        fail(f"missing master {path}")
    try:
        im = Image.open(path)
        im.load()
    except OSError as e:
        fail(f"cannot read {path}: {e}")
    if im.width < min_width:
        fail(f"{path.name} is {im.width}px wide; the largest rung needs {min_width}px")
    return im.convert("RGB")


def crop_to_aspect(im, aspect, focus):
    """Return a new image cropped to `aspect`, keeping the focus point in frame."""
    fx, fy = focus
    w, h = im.size
    if w / h > aspect:
        cw, ch = round(h * aspect), h
    else:
        cw, ch = w, round(w / aspect)
    left = min(max(round(fx * w - cw / 2), 0), w - cw)
    top = min(max(round(fy * h - ch / 2), 0), h - ch)
    return im.crop((left, top, left + cw, top + ch))


def grade(im):
    return ImageEnhance.Contrast(ImageEnhance.Color(im).enhance(GRADE_SATURATION)).enhance(GRADE_CONTRAST)


def resize_width(im, width):
    return im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)


def write_jpeg(im, path):
    im.save(path, "JPEG", **JPEG_OPTS)
    print(f"  {path.name:28s} {im.width}x{im.height}  {path.stat().st_size // 1024} KB")


def bake_hero(entry, src_dir, out_dir):
    n = int(entry["n"])
    focus = tuple(entry.get("focus", (0.5, 0.5)))
    master = load_master(src_dir / entry["src"], max(HERO_RUNGS))
    plate = grade(crop_to_aspect(master, HERO_ASPECT, focus))
    print(f"hero-{n} <- {entry['src']}")
    for width in HERO_RUNGS:
        write_jpeg(resize_width(plate, width), out_dir / f"hero-{n}-{width}.jpg")


def bake_band(entry, src_dir, out_dir):
    name = entry["name"]
    master = load_master(src_dir / entry["src"], max(w for _, w in BAND_RUNGS))
    print(f"{name} <- {entry['src']}")
    for suffix, width in BAND_RUNGS:
        write_jpeg(resize_width(master, width), out_dir / f"{name}{suffix or ''}.jpg")


def main(argv):
    if len(argv) != 2:
        fail("usage: bake-images.py MANIFEST.json")
    try:
        manifest = json.loads(Path(argv[1]).read_text())
    except (OSError, ValueError) as e:
        fail(f"bad manifest: {e}")
    repo = Path(__file__).resolve().parent.parent
    src_dir = Path(manifest["src_dir"])
    out_dir = repo / manifest.get("out_dir", "assets/img")
    if not out_dir.is_dir():
        fail(f"output directory {out_dir} does not exist")
    for entry in manifest.get("hero", []):
        bake_hero(entry, src_dir, out_dir)
    for entry in manifest.get("band", []):
        bake_band(entry, src_dir, out_dir)


if __name__ == "__main__":
    main(sys.argv)
