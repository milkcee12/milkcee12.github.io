#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# commit and push build to github
git add -A
git commit -m "Deploy to docs"
git push origin main

cd -