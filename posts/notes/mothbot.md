---
pageTitle: Mothbot Prototyping
layout: layout.njk
date: 2020-09-02
updated: 2020-09-02
tags: notes
#image: img/ec_flower_logo_small.png
image: /img/mothbot/mothbot.png
blurb: Prototyping the Mothbot -- an Arduino-compatible LoRa node for remote monitoring applications.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/3588DGfwW04" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## First Build of the Mothbot

<iframe width="560" height="315" src="https://www.youtube.com/embed/pFzX0aoHLn4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|[ ![parts.jpg](/img/mothbot/parts.jpg)](/img/mothbot/parts.jpg)|
|:--:|
|  |


## First Build Notes / Revision Ideas

- Should we break out a 0.1" i2c header, compatible with an SSD1306 display?  Maybe that's overkill for this project ...
- The footprints for the resistors should be longer 
- soldermask on the antenna hole -- no good -- need to use another approach for making that hole
- add pinout for the higher-voltage DC-DC?  maybe it feeds directly into the 3.3V LDO, too ... or can add jumpers
- radio configuration where there's a relay that is constantly 'on' on top of a pole ... powered by 12V bat ... 12V bat being the go-to off-grid battery ... 