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
## Update 2021-01-04 12:41:31


 | [![](/img/valedalama/battery_diagram.png)](/img/valedalama/battery_diagram.png)|
 |:--:|
 | **Figure 1.** Snapshot of battery level for the remote sensor node.  |

In **Figure 1**, we see the battery voltage of the remote node over a period of 17 days.  The daily voltage signature of the impact of light energy on the solar panel -- wherein the panel and charging circuitry cause the battery voltage to fluctuate above 'baseline' for a period of time each day -- is indicated using dotted rectangles.  

On Dec 18, 20, and 21, it appears as though the solar panel was receiving significant light energy.  Sarting on December 22nd, the solar panel seems to have received less energy -- whether due to cloudy days, or the orientation of the panel.

A straight line has also been drawn associated with the initial 'baseline' voltage at the start of this timespan (around 4.28 V).   

It appears as though up through about Dec 22nd -- when the panel was receiving significant light energy -- the baseline battery voltage remained exceedingly flat (no change to within 0.01 V).  

After Dec 22nd, we can observe a slow decrease in baseline battery voltage, as the panel was less effective at recharging the battery as the sensor operated. One might estimate the decrease in battery voltage as about 0.01 or 0.02 Volts.

The minimum voltage at which the sensor might still function is probably around 3.5 or 3.6 Volts (perhaps as low as 3.5 V).  

The discharge rate for lithium ion batteries is non-linear (see **Fig 2** below), so it's not straightforward to predict the rate of discharge -- it would be best to simply let the sensor run with a panel completely obscured, and see how long it lasted.  

| [![](/img/valedalama/lion_discharge_curve.jpg)](/img/valedalama/lion_discharge_curve.jpg) |
 |:--:|
 | **Figure 2.** Typical Li-Ion discharge curve.  |

But one could reasonably estimate, I think, that this sensor would continue to operate for at least another 10 days (likely much longer!) on minimal solar energy.  








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

