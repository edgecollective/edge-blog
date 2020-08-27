---
pageTitle: Custom Location for Secure Scuttlebutt 
layout: layout.njk
date: 2020-08-27
updated: 2020-08-27
tags: notes 
image: /img/Hermies.png
blurb: How to set up a custom database directory location for Secure Scuttlebutt (SSB) (enabling e.g. storage of SSB on a portable drive). 
---

Goal: to run Secure Scuttlebutt off a USB stick.  

Followed the advice [here](https://github.com/ssbc/patchwork/issues/822) -- seems to work!

**Note**: ran into separate issue when trying to install [Patwork]() on Ubuntu, locally --  got an error when doing an ‘npm install’ -- turns out that I first needed to install these packages:

```
sudo apt install libx11-dev libxkbfile-dev
```

**In any case**, once you have a working local Patchwork install, you can convince it to store its data (in the '.ssb' folder) somewhere other than the default (home directory) by using:

```
npm start -- --path ~/Documents/myssb/.ssb
```

where in this case '~/Documenst/myssb/.ssb' is the custom location (could be external USB drive) for your '.ssb' folder. Seems to work!



 



