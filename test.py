from pathlib import Path
import re

updated_files = 0
updated_iframes = 0

for path in Path("src/posts").rglob("*.md"):
    original = path.read_text()

    def add_title(match):
        global updated_iframes

        tag = match.group(0)

        if "cloudflarestream.com" not in tag.lower():
            return tag

        # Remove the src attribute before checking for title
        without_src = re.sub(
            r'\bsrc\s*=\s*(["\']).*?\1',
            '',
            tag,
            flags=re.IGNORECASE | re.DOTALL
        )

        if re.search(r'\btitle\s*=', without_src, re.IGNORECASE):
            return tag

        updated_iframes += 1
        return tag.replace("<iframe", '<iframe title="Drink video"', 1)

    updated = re.sub(
        r'<iframe\b[^>]*>',
        add_title,
        original,
        flags=re.IGNORECASE | re.DOTALL
    )

    if updated != original:
        path.write_text(updated)
        updated_files += 1
        print(f"Updated: {path}")

print(f"\nUpdated {updated_iframes} iframes across {updated_files} files.")
