#!/usr/bin/env bash
# Usage: scripts/release.sh 0.0.5
# Bumps the image tag in docker-compose.yml, commits and tags v<version>.
# Push afterwards: git push origin main v<version>
set -euo pipefail

version="${1:?usage: scripts/release.sh <x.y.z>}"
[[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "invalid version: $version" >&2; exit 1; }

cd "$(dirname "$0")/.."
sed -i.bak -E "s#(image: ghcr\.io/oziel-silva/personal-page):.*#\1:${version}#" docker-compose.yml
rm -f docker-compose.yml.bak

git add docker-compose.yml
git commit -m "chore: release v${version}"
git tag "v${version}"
