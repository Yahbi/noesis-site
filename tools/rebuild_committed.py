"""Reproduce the committed artifacts without assuming their deployment domain."""
import html
import json
import os
from pathlib import Path
import re
import subprocess
import sys

from site_config import resolve


def config_from_html(source):
    canonical = re.search(r'<link rel="canonical" href="([^"]+)">', source)
    stamp = re.search(r'bundle\.js\?v=([0-9]+)', source)
    if not canonical or not stamp:
        raise ValueError("Committed index.html must contain a canonical URL and bundle cache stamp")
    site_url, base_path = resolve(html.unescape(canonical.group(1)))
    return {"SITE_URL": site_url, "BASE_PATH": base_path, "BUILD_V": stamp.group(1)}


if __name__ == "__main__":
    root = Path(__file__).resolve().parent.parent
    try:
        config = config_from_html((root / "index.html").read_text())
    except (OSError, ValueError) as error:
        sys.exit(str(error))
    if sys.argv[1:] == ["--print-config"]:
        print(json.dumps(config))
    elif sys.argv[1:]:
        sys.exit("Usage: python3 tools/rebuild_committed.py [--print-config]")
    else:
        print(f"Rebuilding {config['SITE_URL']} with BUILD_V={config['BUILD_V']}", flush=True)
        result = subprocess.run(["bash", "build.sh"], cwd=root, env={**os.environ, **config})
        sys.exit(result.returncode)
