---
pageTitle: Flood / Tide Sensor
layout: layout.njk
date: 2021-01-19
updated: 2020-01-19
tags: notes
#image: img/ec_flower_logo_small.png
image: /img/placeholder.png
blurb: Flood / tide sensor prototyping

---

---
2021-01-19 12:28:28

First pass at board:

![](/img/flood/tideboard.png)

Design files here: [https://github.com/edgecollective/tide-board](https://github.com/edgecollective/tide-board)

1/4 watt -- 10 mm or 0.4 inches 

---
2021-01-24 09:16:27

Dave S. in Belfast's successful test of the Maxbotix Ultrasonice + Heltec Wifi Lora 32 v2 -- [video](https://youtu.be/KpKlBCJnksk)

![](/img/flood/heltec_maxbotix.png)

---
2021-01-24 09:24:36

Possible RTCZero support on the IBM4? [https://github.com/arduino-libraries/RTCZero/pull/66](https://github.com/arduino-libraries/RTCZero/pull/66).

Issue prior: because the IBM4 is a 'crystal-less' design (I think the IBM0, too? But not the Feather version of these boards?) there was some additional code that needed to be written ... but looks like the above pull request purports to fix it ... worth trying!


