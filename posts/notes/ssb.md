---
pageTitle: Custom Location for Secure Scuttlebutt Data
layout: layout.njk
date: 2020-08-27
updated: 2020-08-27
tags: notes 
image: /img/Hermies.png
blurb: How to set up a custom database directory location for Secure Scuttlebutt (SSB) (enabling e.g. storage of SSB on a portable drive). 
---

## Setting up a custom SSB database location

[Secure Scuttlebutt](https://scuttlebutt.nz) (SSB) is a peer-to-peer (p2p) social network -- akin to Facebook, but fully decentralized and owned by noone.  Connecting to the SSB network requires a client -- for example, [Patchwork](https://github.com/ssbc/patchwork). 

One feature of this p2p network is that you store all of your peer data (your posts, and posts from friends) on your local drive -- which is neat, because it means that all of your data since your last sync is available even if you're offline.  

One related caveat is that this means storing a lot of data locally; so it's good to have options for where to store it. 

By default, all of your SSB data is stored in your home directory (an obvious location in Linux-based systems; not sure where the default is in Windows / Mac), in a directory called '.ssb'.  

If you'd like to store it elsewhere, you can invoke a local installation of Patchwork (at least installations installed via npm) like so:

```
npm start -- --path ~/Documents/myssb/.ssb
```

where in this case '~/Documenst/myssb/.ssb' is your custom (SSB) data directory location (could be external USB drive) for your '.ssb' folder. Seems to work!

Credit for this method goes to an online discussion thread [here](https://github.com/ssbc/patchwork/issues/822).

(To make this easier to invoke on a regular basis, I've posted a [gist](https://gist.github.com/dwblair/951df80d31d2940e55db70b7fd99e5fe) with the startup script I use.)

## Dependencies for Patchwork on Ubuntu / Linux-based systems

Note: I found a hiccup when trying to install Patchwork via npm on my Ubuntu system via 'npm install'.  It was solved by first installing these dependencies:

```
sudo apt install libx11-dev libxkbfile-dev
```

 ## Further Resources / Links

- [Secure Scuttlebutt](https://scuttlebutt.nz/) -- main site for the p2p networking protocol
 - [Secure Scuttlebutt Pub Servers](https://github.com/ssbc/ssb-server/wiki/pub-servers) -- list of servers you can join with a Secure Scuttlebutt 'client'
 - [Patchwork](https://github.com/ssbc/patchwork) -- a 'client' for Secure Scuttlebutt

---
2021-02-18 16:44:38

```
https://github.com/AsamK/signal-cli/wiki
signal-cli -u +18572850070 send -m "hallo from the cli again!" +17817756406
signal-cli -u +18572850070 receive
```