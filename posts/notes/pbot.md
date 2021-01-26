---
pageTitle: PBot
layout: layout.njk
date: 2021-01-26
updated: 2021-01-26
tags: notes 
image: /img/placeholder.png
blurb: <b>Passagassawakeag Bot.</b> Environmental monitoring for education, farming, water montoring.  Free and Open Source, modular; easy to assemble, easy to deploy, easy to redesign with open source tools.
---

([Passagassawakeag_River](https://en.wikipedia.org/wiki/Passagassawakeag_River))

---
2021-01-26 09:17:35


Collection of repositories on gitlab here: [https://gitlab.com/edgecollective/pbot](https://gitlab.com/edgecollective/pbot)

## Philosophizing

Increasing the level of one's technological sovereignty by developing the capacity to 'self-provision' one's own infrastructure is hard to assess in terms of absolute levels of sovereignty.  One might solder a circuit oneself -- but not be able to produce the circuit board itself (or the solder, or the resistor, or the microchip ...).  {TODO: link to Stallman's essay on hardware here.}  

There is an ongoing process of assessing which among the diverse crop of emerging technologies -- many of them produced through industrial processes that might never be possible in a 'DIY' context ... might be useful ... and how they might be encapsulated to make them easier to use, and design with, at the 'local' level.

This project demonstrates some of these issues.  The SAMD21 and SAMD51 are powerful, useful chips; they are small enough, even if their most accessible packages, that they are difficult to solder onto a board design (at least, without a lot of trial and error, practice, and a good assembly setup).  

However, the typical applications in which they might be used -- sensing, control, etc -- involve connecting the devices via only a few wires to external devices -- many of which are themselves relatively easy to solder / assemble.  

The ItsyBitsy design by Adafruit -- similar to their Feather, or the Arduino Pro Mini, the Teensy, and even the Arduino UNO -- takes the most complex, flexible, central, and difficult to solder part of an overall project design -- the microcontroller -- and 'encapsulates' it in a form that makes it far easier for folks to design around.   

We base our 'PBot' design off the ItsyBitsy ...

## Hardware

Designing the device in KiCAD: [https://gitlab.com/edgecollective/pbot/pbot-hardware](https://gitlab.com/edgecollective/pbot/pbot-hardware)

### Itsy Bitsy M4

[IBM4 on Adafruit](https://www.adafruit.com/product/3800)

![](/img/pbot/itsybitsy.jpg)

![](/img/pbot/itsybitsy_back.jpg)

### RFM95 Breakout

[RFM95 Breakout on Adafruit](https://www.adafruit.com/product/3072)

![](/img/pbot/rfm95_breakout.jpg)



