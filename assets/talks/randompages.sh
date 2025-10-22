#!/usr/bin/env bash
# Usage: randompages.sh input.pdf num_pages output.pdf
# Example: ./randompages.sh mydoc.pdf 5 random5.pdf

set -euo pipefail

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 input.pdf num_pages output.pdf"
  exit 1
fi

input="$1"
n="$2"
output="$3"

# Ensure input exists
if [ ! -f "$input" ]; then
  echo "Error: file '$input' not found."
  exit 1
fi

# Get total number of pages
total_pages=$(pdftk "$input" dump_data | awk '/NumberOfPages/ {print $2}')

if [ -z "$total_pages" ]; then
  echo "Error: couldn't determine number of pages in '$input'."
  exit 1
fi

if [ "$n" -gt "$total_pages" ]; then
  echo "Error: requested $n pages, but PDF only has $total_pages."
  exit 1
fi

# Pick random unique pages, sort numerically, and make a clean list
pages=$(shuf -i 1-"$total_pages" -n "$n" | sort -n | tr '\n' ' ' | xargs)

echo "📄 Selected pages (in order): $pages"

# Extract in sorted order
pdftk "$input" cat $pages output "$output"

echo "✅ Created '$output' with $n random pages (in ascending order)."
