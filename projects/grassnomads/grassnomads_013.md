---
pageTitle: Further exploring low-temp behavior
layout: layout.njk
date: 2025-01-11
updated: Last Modified 
tags: grassnomads 
image: /img/placeholder.png
blurb: Testing low-temperature fixes we made recently.
---

Sat 11 Jan 2025 11:06:46 PM EST

## Comparison, distance and temperature

### Comparing 'pre-upgrade' to 'post-upgrade' 

In the below charts, you can see how the distance measurements seem to be impacted.  

Note that in December, we were using the 'older' code.  The 'upgraded' code was used in January.

![](/img/ojofeliz/distance_long_span.png)

![](/img/ojofeliz/temperature_long_span.png)

### Focus on 'post-upgrade'

Now we focus only on the 'upgraded' system.  Note that the system seems to register a greater distance when the temperatures are colder ... but that there doesn't seem to be a clear temperature threshold for this behavior.  

Perhaps here we are seeing a condensation effect that tends only to occur overnight? 

![](/img/ojofeliz/distance_short_span.png)

![](/img/ojofeliz/temperature_short_span.png)


# Freezer Test

Sat 18 Jan 2025 06:33:43 PM EST

Placed sensor and transmitter box in freezer overnight.  Battery was external.

Data collected in Google Sheet [here](https://docs.google.com/spreadsheets/d/1mJ8qVnuQJmU5uoP2Sm58hgTvAEl6rDbXpHaZQ1jVGdk/edit?usp=sharing).

| ![](/img/ojofeliz/temp_vs_time_jan17.png) |
|:--:|
| **Temperature in freezer overnight.** Looks like it takes a while for compressor to kick in to knock freezer temp down to around -15. |

| ![](/img/ojofeliz/distance_vs_time_jan17.png) |
|:--:|
| **Distance measurement in freezer overnight.**  Distance changed by 1 cm over course of experiment.  As temperature decreases, speed of sound decreases, so the sensor will think the object is further away; so a 1 cm increase is explained by lack of temperature compensation; but from the timing, it seems as though the increase happened before the temperature really dropped, so this might simply be 'noise'.| 

## TODO

- Add humidity sensor to outdoor setup
- Try putting battery inside freezer


# Sun 09 Feb 2025 09:50:32 AM

Sensor seems to have worked nicely at low temperatures, now.  Main issue is battery chemistry.  Large (car-like) battery worked fine at very low temps;  smaller battery (SLA -- sealed lead acid?) didn't seem to work below 5C.

Next steps:
- create stable mount for satellite monitor, and secure connecting wires
- repogram sensor to send only at 5 AM and 1 PM
- extend power cable to 3'
- create lasercut mount for sensor

# Sat 19 Apr 2025 11:17:17 AM EDT

Issue:  missing some morning readings recently

![](/img/ojofeliz/distance_mar_apr_2025.png)

![](/img/ojofeliz/battery_mar_apr_2025.png)

![](/img/ojofeliz/temperature_mar_apr_2025.png)


