---
pageTitle: Ventilation
layout: layout.njk
date: 2020-12-07
updated: 2021-07-22
tags: projects
image: img/co2/ach_combo.png
blurb: DIY ventilation assessment and improvement in order to reduce the risk of airborne disease transmission.
---

# Indoor Ventilation Assessment and Improvement

## Background


<!--
| ![Taoglas Radiation](/img/harold/taoglas_radiation.png) |
|:--:|
|Signal amplification in the horizontal plane.|
-->


## Using CO2 to assess indoor ventilation

### Why is CO2 Monitoring Useful?

CO2 monitoring has long been used for determining the effectiveness of indoor residential ventilation. Changes in indoor CO2 concentration can indicate whether air inside a room has 'refreshed' since its most recent occupants left, or whether there is sufficient space and/or ventilation inside a building that people are unlikely to spread airborne illness. 

### Indoor CO2 PPM and COVID-19 transmission

Recently, [researchers](https://www.medrxiv.org/content/10.1101/2020.09.09.20191676v1.full.pdf) have been exploring CO2 monitoring as factor in the assessment of the relative risk of indoor transmission of [COVID-19](). In the case of airborne illness, there are a few very common questions that CO2 monitoring can help answer:

- How long should people wait for air in a space occupied by another 'pod' to 'turn over' before entering it? 
- How many people can occupy the same indoor space before it is too 'crowded'?
- What techniques (opening a window, modifying the ventilation system) are most effective at refreshing air within a space?  How much ventilation is needed (how many windows need to be opened) in a given space?

By monitoring CO2 levels in a space over the course of a few days, it may be possible to determine patterns that can effectively inform daily practices without requiring futher ongoing CO2 monitoring.  E.g., it may be determined that opening a single window in a room is enough to keep the indoor CO2 PPM at 'fresh air' levels even when fully occupied.  

### DIY CO2 Monitoring

Ongoing notes on development of a free-and-open-source CO2 monitor are posted [here](https://edgecollective.io/posts/notes/co2/).

## References

### Misc

Need to figure out impact of having different sized holes on co2 apparatus.

- Presentation / tropical medicine / effect of room size?

- Recommended ACH for COVID / H-SPH?

- Find space where can measure air flow at vents to test ACH determination method?

- We saw that propane and indoor heating were complications at artisan'     



### Sensiron

[Design-in guidelines for SCD30](https://cdn-learn.adafruit.com/assets/assets/000/098/502/original/Sensirion_SCD30_Design-In_Guidelines_D1.pdf?1609963143)

Seems to argue for larger ventilation holes, smaller inside enclosure.

Might just place holes directly beneath the sensor.

### Dustin 

Main twitter thread on ACH: [https://twitter.com/Poppendieck/status/1366055136859070468?s=20](https://twitter.com/Poppendieck/status/1366055136859070468?s=20)

- need to account for other sources of indoor CO2

- snapshot CO2 measurements don't help you predict impact of additional occupants on concentration, and thus make it hard to know how safe a space is

- Havard School of Public Health suggests at least 5 or 6 air changes per hour

- Recommends getting CO2 level up to 1000 ppm to 1500 ppm

- Can get sense of variation in fit by fitting slightly different regions.  Don't report more than one decimal place.

- ACH can change by factor of 5-10 depending on indoor-outdoor temp difference, windspeed (at least at low ach) [https://twitter.com/Poppendieck/status/1366055181578694657/photo/1](https://twitter.com/Poppendieck/status/1366055181578694657/photo/1)

- Having neighboring connected rooms empty tends to overestimate the ACH; having neighboring connected rooms occupied will tend to underestimate the ACH.

- HVAC can mix rooms with other rooms, adding complication.

- CO2 monitors need to be calibrated frequently to avoid drift in absolute measurements; but relative measurements tend to be solid.

- need to acknowledge additional sources of CO2.

### Menzies et al 1995

Uses precisely the method. Compares windows / doors condition.

Findings:

- use a fan during release of co2 to homogenize measurements throughout room; don't need to do afterward.

> Good mixing of the tracer gas is important to ensure that the
decline in concentration reflects dilution from air exchange and
not simply continued mixing within the room. Evidence of good
mixing was provided by minimal variation between different sites
in the same room in the preliminary study, linear decay of the
log-transformed concentration of CO 2 (log data not shown), and
by reproducibility of repeated measures of air-change rate. All
of these conditions were met when a large fan was operated dur-
ing the release, meaning that this aspect of the protocol was es-
sential to achieve accurate reproducible estimates of air-change
rates. (p 1999)

- They reference the impact of having a practitioner in the room while monitoring decay. Need to review this. Good reason to have data collection remote.

- One of their fitting methods stops within 2 SD of baseline.

### Huang et al 

They do a CO2 experiment with baking soda and etc in dental offices.

One big impact is that they show that this method compares favorably with calculating ACH using CFM assessment at vents.

Stir mixture for 2 minutes, then remove from room. 

Small oscillating fan was used to keep CO2 well-mixed in room.

They use a simpler method for determing the decay -- 'the time needed to remove 63% of excess CO2'.  Method described bottom p 11 top of p 12.

They indicate that the CO2 method is a better measurement than CFM ventilation rate (p 12).

### Roulet et al 

Nice presentaiton of the log fit method

### Escombe / tropical medicine presentation

[https://www.ghdonline.org/uploads/Measuring_Air_Changes.pdf](https://www.ghdonline.org/uploads/Measuring_Air_Changes.pdf)

They use a graph indicating the difference between windows opened and windows closed.

They use fire extinguishers to generate enough CO2.

They also use fans to guarantee mixing.

Can also use jackets.

They stop within 200 ppm of baseline. 

p 8 and 9 are key:  it's not just relative ACH, it's absolute ventilation that is the key determinent of risk. 

### Rhode Island Covid air filtration

[https://covid.ri.gov/covid-19-prevention/indoor-air-circulation](https://covid.ri.gov/covid-19-prevention/indoor-air-circulation)

> Ventilation with recirculated air will not reduce the risk of COVID-19 unless that recirculated air goes through a filter that is made to get rid of tiny particles. A filter’s Minimum Efficiency Reporting Values (MERV) rating describes how well it removes different sized particles in the air. A MERV rating of 13 or higher (MERV 13+) means that the filter gets rid of at least 90% of the particles the size of virus-containing aerosols. High Efficiency Particulate Air (HEPA) filters are designed to exceed the highest MERV rating. A HEPA filter gets rid of at least 99.97% of particles that are even smaller than aerosols.

### Havard School of Public Health Ventilation Assessment guide

[https://schools.forhealth.org/wp-content/uploads/sites/19/2020/08/Harvard-Healthy-Buildings-program-How-to-assess-classroom-ventilation-08-28-2020.pdf](https://schools.forhealth.org/wp-content/uploads/sites/19/2020/08/Harvard-Healthy-Buildings-program-How-to-assess-classroom-ventilation-08-28-2020.pdf)

They describe the CO2 method as well

They recommend at 6+ ACH.

### Tex Air Filters

Improving effectiveness of corsi air box using a shroud: [https://www.texairfilters.com/how-to-improve-the-efficiency-of-the-box-fan-and-merv-13-filter-air-cleaner/](https://www.texairfilters.com/how-to-improve-the-efficiency-of-the-box-fan-and-merv-13-filter-air-cleaner/)

Corsi air box with five filters: [https://www.texairfilters.com/a-variation-on-the-box-fan-with-merv-13-filter-air-cleaner/](https://www.texairfilters.com/a-variation-on-the-box-fan-with-merv-13-filter-air-cleaner/)

Using ppm with filters: [https://www.texairfilters.com/its-all-about-the-air-flow-through-the-filter/](https://www.texairfilters.com/its-all-about-the-air-flow-through-the-filter/) -- makes ppm assessment

Good pics of box fan here [https://www.texairfilters.com/a-variation-on-the-box-fan-with-merv-13-filter-air-cleaner/](https://www.texairfilters.com/a-variation-on-the-box-fan-with-merv-13-filter-air-cleaner/)


### Feigl-Ding

Impact of HEPA filters: [https://twitter.com/DrEricDing/status/1363731992068644864?s=20](https://twitter.com/DrEricDing/status/1363731992068644864?s=20)

Great smoke ventilation video: [https://twitter.com/DrEricDing/status/1363767569996541952?s=20](https://twitter.com/DrEricDing/status/1363767569996541952?s=20)

Students build filters [https://twitter.com/DrEricDing/status/1363868394391539712?s=20](https://twitter.com/DrEricDing/status/1363868394391539712?s=20)

great graph re: impact of purifiers [https://twitter.com/DrEricDing/status/1363638397684842496/photo/1](https://twitter.com/DrEricDing/status/1363638397684842496/photo/1)

### Wired article on CORSI box

[https://www.wired.com/story/could-a-janky-jury-rigged-air-purifier-help-fight-covid-19/](https://www.wired.com/story/could-a-janky-jury-rigged-air-purifier-help-fight-covid-19/)

### Curtius et al -- testing mobile air purifiers

[https://www.tandfonline.com/doi/full/10.1080/02786826.2021.1877257](https://www.tandfonline.com/doi/full/10.1080/02786826.2021.1877257)

### Pirie associates

Nice article with good references [https://www.pirieassociates.com/blog/diy-box-fan-filter](https://www.pirieassociates.com/blog/diy-box-fan-filter)



