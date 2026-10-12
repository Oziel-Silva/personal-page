#!/usr/bin/env bash
# Pulls the image pinned in docker-compose.yml and recreates the site container if it changed.
# Meant for cron on the NAS, e.g.:
#   0 9 * * * /path/to/personal-page/scripts/update.sh >> /var/log/personal-page-update.log 2>&1
set -euo pipefail

export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

cd "$(dirname "$0")/.."

echo "=== $(date '+%Y-%m-%d %H:%M:%S') update ==="
docker compose pull personal-page
docker compose up -d personal-page
