#!/bin/bash

git add *
git commit -m 'update'
git push --no-verify
cp -r _site/* ../edgecollective.github.io/
cd ../edgecollective.github.io/
git add *	
git commit -m 'update'
git push
