---
pageTitle: Podcasting Infrastructure
layout: layout.njk
date: 2020-10-18
updated: 2020-10-18
tags: notes 
image: /img/feedgen.png
blurb: Notes on setting up podcasting infrastructure
---

## TODO

- use python feedgen script to print out list of podcasts locally, and descriptions, to test the code.

## Misc notes

[yaml generator in python](https://github.com/yaml/pyyaml)

[pyyaml tutorial](http://zetcode.com/python/yaml/)

[python feedgen](https://github.com/lkiesow/python-feedgen)

[python feedgen documentation](https://feedgen.kiesow.be/api.html)

[python feedgen examples](https://www.programcreek.com/python/example/113191/feedgen.feed.FeedGenerator)

[python feedgen podcast module](https://feedgen.kiesow.be/ext/api.ext.podcast.html)

[podgen](https://podgen.readthedocs.io/en/latest/usage_guide/example.html)

List of itunes podcast categories [here](https://www.podcastinsights.com/itunes-podcast-categories/)

## Work Log

----
18 OCT 2020

add episodes to the 'episodes' folder in YAML format

use './gen_podcast_feed.sh' to generate the feed, which is called 'podcast.xml'