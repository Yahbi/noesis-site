"""Validate public build URLs before writing generated artifacts."""
import re
import sys
from urllib.parse import urlsplit, urlunsplit


def resolve(site_url, base_path=""):
    url = urlsplit(site_url.strip())
    if (url.scheme != "https" or not url.hostname or url.username or url.password
            or url.query or url.fragment or not re.fullmatch(r"[A-Za-z0-9.:-]+", url.netloc)):
        raise ValueError("SITE_URL must be a public HTTPS URL without credentials, query or fragment")
    path = url.path.rstrip("/") + "/"
    if not re.fullmatch(r"/[A-Za-z0-9_./~-]*", path) or any(p in {".", ".."} for p in path.split("/")):
        raise ValueError("SITE_URL contains an unsupported path")
    if base_path and base_path != path:
        raise ValueError("BASE_PATH must match the path in SITE_URL (or be omitted to derive it)")
    return urlunsplit((url.scheme, url.netloc, path, "", "")), path


if __name__ == "__main__":
    try:
        resolve(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "")
    except ValueError as error:
        sys.exit(str(error))
