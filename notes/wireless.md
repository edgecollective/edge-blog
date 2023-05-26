---
pageTitle: Notes on wireless monitoring
layout: layout.njk
date: Last Modified
updated: 2023-05-26
tags: notes 
image: /img/placeholder.png
blurb: Notes on wireless montioring (focused on LoRa).
---

## LoRa

For wireless monitoring of assets, [LoRa](https://en.wikipedia.org/wiki/LoRa) is a technology that emerged over 10 years ago that is now quite mature.  There is a large online community of support, with plenty of documentation.  It is used by both professionals and hobbyists.  This means that you’re likely to find existing code to do most things of interest, and have forums on which to ask questions.

## Business models

If trying to turn a profit on the hardware, then there are certain chips that are a little less accessible, but which have bigger ‘bang for the buck’ – the “STM32” family of chips.  The development environment is more expensive to set up and less friendly, but deployment at scale might be optimized. 

If the business is more focused on providing a service, collecting and interpreting data, and using proprietary algorithms, then it might be better to use hardware that is easier to tinker with, has a larger and existing codebase, and for which it will be easier to find developers.

Note that there exist off-the-shelf devices (cf. LSN50, Draguino) that have enclosures and which could begin by sending temperature and humidity readings, and also likely light and pressure, without too much tweaking or even much coding.  This would give an option for deploying something wireless, quickly – especially if you have someone with coding / web development expertise on board, but don’t yet have an embedded developer.

## FCC restrictions and rules

Note that there are FCC rules that apply to devices deployed in this manner.  (See, e.g. [https://www.sunfiretesting.com/LoRa-FCC-Certification-Guide/](https://www.sunfiretesting.com/LoRa-FCC-Certification-Guide/)). LoRA operates in an ‘unlicensed’ band, but there are constraints on how much power you use can use when transmitting, the duty cycle and duration of transmission, and requirements to ‘frequency hop’.  If you’re experimenting on a small scale with an initial deployment, this isn’t too much of a worry; but if you’re deploying at scale / professionally you’ll want to consider this.  For any design you deploy an industrial context, you’ll need to get your final device FCC certified. (This appears to cost between $1K and $5K for a given final design.) Typically, I think, a system is developed, tested, and refined, and then FCC certified before large-scale deployment.  Cf. https://linxtechnologies.com/wp/ufaqs/how-much-does-fcc-certification-cost/

## LoRaWAN

The ‘LoRaWAN gateway’ architecture handles all of these requirements already.  It is more complicated to set up than a few remote nodes, but it is an easier way to develop an FCC compliant system. (See, e.g. [https://www.thethingsnetwork.org/docs/gateways/](https://www.thethingsnetwork.org/docs/gateways/)).

The tutorials and hardware provided by Adafruit (see, e.g., [https://learn.adafruit.com/the-things-network-for-feather](https://learn.adafruit.com/the-things-network-for-feather)) are exceedingly well-documented.  If you already have a particular suite of sensors you’re working with / have validated, this is the path I would take.  You could e.g. develop the system / deploy it in stages:
- Prototype a few remote nodes sending data to a receiver node, testing range of transmission, battery life for a given duty cycle, etc. Develop a first version of the enclosure, customized to your application.
- Develop a ‘full deployment of notes’, using a LoRaWAN gateway
- Then optimize the remote microcontroller hardware and the enclosure.  

## Further Resources

- Digikey [notes on LoRaWAN](https://www.digikey.com/en/articles/lorawan-part-1-15-km-wireless-10-year-battery-life-iot?utm_adgroup=General&utm_source=google&utm_medium=cpc&utm_campaign=Dynamic%20Search_EN_RLSA_Buyers&utm_term=&utm_content=General&gclid=CjwKCAjwscGjBhAXEiwAswQqNCeuX-HwDE1FBfNjuYFO-cMJTa6cMn_bVn9P9MDfybZkaEpag6xtCRoC1bUQAvD_BwE)

- [Introduction to LoRaWAN](https://virscient.com/resources/technical-notes/introduction-to-lorawan/) 

<iframe width="560" height="315" src="https://www.youtube.com/embed/AYsrtudQdGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZsVhYiX4_6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>





