#!/usr/bin/env python3
"""Build the dot-matrix markets map from Natural Earth land data.

Usage:  python3 tools/build-map.py LAND_TOPOJSON

LAND_TOPOJSON is world-atlas's land-50m.json (Natural Earth 1:50m land,
public domain): https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-50m.json

Writes assets/img/map-dots.svg: one dot per grid cell whose centre falls on
land, in a window running from the Pacific coast of North America to the
eastern Mediterranean — the corridor the record actually spans (Los Angeles,
Miami Beach, Tel Aviv). The SVG is in GRID units: dot (c, r) sits at (c, r).

The projection is equirectangular with the longitude axis scaled by
cos(34°), the latitude of Los Angeles and roughly of Tel Aviv, so the shapes
read true where the pins are. components/MarketsMap.jsx projects its pins
with the SAME constants — change them together or the pins drift off the land.
"""
import json
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw

LON0, LON1 = -128.0, 48.0      # west / east edge of the window
LAT0, LAT1 = 10.0, 56.0        # south / north edge
STEP = 0.75                    # grid spacing, in degrees of latitude
K = math.cos(math.radians(34))  # longitude compression at the pins' latitude
RASTER = 8                     # mask pixels per grid unit (sub-cell accuracy)
DOT_COLOR = "#8C8C93"
DOT_WIDTH = 0.52               # stroke width in grid units (round caps = dots)


def fail(msg):
    print(f"build-map: {msg}", file=sys.stderr)
    sys.exit(1)


def grid_xy(lon, lat):
    return (lon - LON0) * K / STEP, (LAT1 - lat) / STEP


def decode_arcs(topo):
    sx, sy = topo["transform"]["scale"]
    tx, ty = topo["transform"]["translate"]
    out = []
    for arc in topo["arcs"]:
        x = y = 0
        pts = []
        for dx, dy in arc:
            x += dx
            y += dy
            pts.append((x * sx + tx, y * sy + ty))
        out.append(pts)
    return out


def ring_points(ring, arcs):
    pts = []
    for i in ring:
        seg = arcs[i] if i >= 0 else list(reversed(arcs[~i]))
        pts.extend(seg if not pts else seg[1:])
    return pts


def land_mask(topo, cols, rows):
    arcs = decode_arcs(topo)
    geom = topo["objects"]["land"]
    geoms = geom["geometries"] if geom["type"] == "GeometryCollection" else [geom]
    mask = Image.new("L", (cols * RASTER, rows * RASTER), 0)
    draw = ImageDraw.Draw(mask)
    for g in geoms:
        polys = g["arcs"] if g["type"] == "MultiPolygon" else [g["arcs"]]
        for poly in polys:
            for n, ring in enumerate(poly):
                pts = [grid_xy(lon, lat) for lon, lat in ring_points(ring, arcs)]
                if len(pts) < 3:
                    continue
                draw.polygon([(x * RASTER, y * RASTER) for x, y in pts], fill=255 if n == 0 else 0)
    return mask


def main(argv):
    if len(argv) != 2:
        fail("usage: build-map.py LAND_TOPOJSON")
    try:
        topo = json.loads(Path(argv[1]).read_text())
    except (OSError, ValueError) as e:
        fail(f"cannot read topology: {e}")
    if "land" not in topo.get("objects", {}):
        fail("topology has no 'land' object")

    cols = int((LON1 - LON0) * K / STEP) + 1
    rows = int((LAT1 - LAT0) / STEP) + 1
    mask = land_mask(topo, cols, rows)

    dots = [(c, r) for r in range(rows) for c in range(cols)
            if mask.getpixel((c * RASTER, r * RASTER)) > 0]
    # Relative moves keep the path compact: "M3 5h0m2 0h0…"
    d, px, py = [], 0, 0
    for i, (c, r) in enumerate(dots):
        d.append(f"M{c} {r}h0" if i == 0 else f"m{c - px} {r - py}h0")
        px, py = c, r
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 {cols} {rows}">'
           f'<path d="{"".join(d)}" fill="none" stroke="{DOT_COLOR}" stroke-width="{DOT_WIDTH}" '
           f'stroke-linecap="round"/></svg>\n')
    out = Path(__file__).resolve().parent.parent / "assets" / "img" / "map-dots.svg"
    out.write_text(svg)
    print(f"{len(dots)} dots on a {cols}x{rows} grid -> {out.name} ({len(svg) // 1024} KB)")
    print(f"constants: LON0={LON0} LAT1={LAT1} STEP={STEP} K={K:.6f} cols={cols} rows={rows}")


if __name__ == "__main__":
    main(sys.argv)
