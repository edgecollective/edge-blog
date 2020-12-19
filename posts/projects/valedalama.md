---
pageTitle: Soil and Greenhouse Monitoring at Quinta Vale da Lama in Odiáxere, Faro District (Portugal)
layout: layout.njk
date: 2020-04-13
tags: projects 
updated: 2020-12-19
image: /img/valedalama/cover.JPG
blurb: Prototyping a LoRa- and wifi-based system for Soil moisture and temperature, as well as ambient temperature humidty and soil temperture inside a greenhouse.
---

---
## Update 2020-12-17 17:43:13

Accomplished above, items 1-5. Remote node and gateway are connected to RAK, and remote node is posting data to this feed [here](http://159.65.226.222:3000/drives/b02f7797b045956e79c019f889dfb080cadbfda6b468a9505835a82aadd5762c).


---

## Update 2020-12-17 08:07:06

Getting ready to deploy a remote node in the greenhouse for (hopefully) a longer run.  

Previously, the remote node's process was 'hung up' after some random interval.  Still not sure why (though suspect some oddness around sensor data acquisition).  The attempted solution is to add a 'watchdog timer' to the code, which should mean that if it 'freezes', it will eventually reboot and start from scratch.  This should address any firmware-related issues.  Note that it won't address e.g. insecure sensor wiring, which could also have been the cause of the problem.  But on a test of a few days, it did seem as though the watchdog technique worked.  

What's needed now is code that implements the watchdog timer and also allows the remote node to 'sleep' at low current, in between measurements.  

Also, it would be useful to add a measurement of battery level to the remote node's firmware, so that we know the status of the solar-recharged battery it will be using in the greenhouse.

To do *this*, we also need to reprogram the gateway, to enable it to receive additional parameters (currently it is 'hard coded' to receive only temp and humidity).  This enable us to get e.g. battery voltage now, and will put us in good stead for any modifications we want to make to remote nodes / or adding new remote nodes.

Further:  because some initial programming bug had resulted in the remote node sending data to the server at less than 10 second intervals, we needed to modify the server code in order to graph only a small subset of the data -- skipping intervals in order to display data at approx 10 min intervals.  We'll be changing the remote node to send data every 10 minutes, so we need to 'undo' those changes to the server.

So, **NEXT STEPS** (as of 2020-12-17 08:32:54):
1. Gateway and remote node plugged into RAK (current status).
2. Reprogram the gateway in order to receive arbitrary parameters.
3. Reprogram the remote node with an implementation of the low-power watchdog timer code, sending data every 10 min.
4. Reprogram the server to display data at intervals appropriate to 10 min data received from the remote node.
5. Test this data flow for a few days with the remote node and gateway plugged into the RAK, so that any hiccups can be more easily fixed.
6. Once the system is stable, bring the remote node out to the greenhouse to install.

