#!/usr/bin/env sh

set -e

yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/ben7152000/caa.github.io.git master:gh-pages

cd -
