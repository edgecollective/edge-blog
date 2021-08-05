---
pageTitle: DIY Air Purification Designs
layout: layout.njk
date: 2021-07-28
updated: 2021-07-28
tags: notes 
image: /img/co2/airbox.png
blurb: Notes on the Corsi / Rosenthal / Comparetto  DIY Air Purifier design -- build instructions, performance evaluation, references
---

## The 'Corsi / Rosenthal / Comparetto' DIY Air Purifier Design

Several researchers and practitioners, working together and in parallel, have come up with a design for an in-room air purifier which can remove a significant amount of COVID-19 virus from the air.

The design involves making a 'box' out of four 20" MERV-13 filters (the 'sides' of the box), a 20" box fan (the 'top' of the box), and a cardboard (the 'bottom' of the box').  Air flows in through the filter sides, removing particulates of the sizes that can transport COVID-19 particles, and then flows out through the fan at the top.

MERV-13 filters are capable of removing about 85% of viral-laden particulates from air; it's therefore a good assumption that about 85% of the air flow out of the fan at the top of the device is free of COVID-19 virus.  Informal tests and analyses using air flow meters and particulate matter sensors indicate that these devices can provide about 600 cubic feet per minute of virus-filtered air to the room.

These devices can be built from parts that cost less than $100 USD total, without any special tools.


![](/img/co2/corsi_assembling.png)

For medium-sized rooms, the performance of this air purifier design means that installing between one and three of these 'air boxes' can boost the local "air changes per hour" (ACH) to the 'minimum recommended' level of 6 ACH, suggested by the Harvard School of Public Health. (Note:  this recommendation was made before the emergence of recent variants; yet greater ventilation rates may now be preferred).

## Sourcing build materials 

20 inch MERV-13 filters are commonly used in HVAC / ventilation systems, and are widely available in retail outlets, e.g.:

- [Lowe's, for $20 each](https://www.lowes.com/pd/Filtrete-1900-MPR-Maximum-Allergen-Common-20-in-x-20-in-x-1-in-Actual-19-6-in-x-19-6-in-x-0-7809-in-Electrostatic-Pleated-Air-Filter/3130393)
- [A pack of 6 for $30 at Home Depot](https://www.homedepot.com/p/ReplacementBrand-20-in-x-20-in-x-1-in-Pleated-Air-Filter-MERV-13-6-Pack-RB-P25S-612020-6-PK/317536277)
- etc

20 inch box fans are also widely availalbe, e.g.: 

- [Walmart: a Lasko Fan for $18](https://www.walmart.com/ip/Lasko-20-Classic-Box-Fan-with-3-Speeds-B20200-White/42388499?wmlspartner=wlpa&selectedSellerId=0&wl13=2902&adid=22222222420449455996&wmlspartner=wmtlabs&wl0=&wl1=g&wl2=c&wl3=501107745824&wl4=aud-1276515988307:pla-293946777986&wl5=9001876&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=local&wl12=42388499&wl13=2902&veh=sem_LIA&gclid=Cj0KCQjw6ZOIBhDdARIsAMf8YyHTVvE6bL4euCAziPpW-BK_3-JQqKUXzYYDCrCg5o2fELSov8oI28YaAi_cEALw_wcB&gclsrc=aw.ds)
- Etc.

## How much can they help?

Because COVID-19 is an 'airborne' pathogen,improving indoor ventilation is an important way to attempt to mitigate the risk of indoor transmission of the virus.

One way of assessing indoor ventilation for a space is in terms of 'air changes per hour' (ACH) -- the number of times that 'all the air in the room' has been replaced (ideally, by outdoor air).  

For comparison: 

- Hospital patient rooms are often kept at **6 ACH**;
- Hospital operating rooms are kept at **20 or more ACH**;
- ASHRAE recommendations for school classrooms are usually around **3 ACH** (actual classrooms are usually less);
- Ventilation in a typical room in a home is **less than 1 ACH**.
- The Harvard School of Public Health has recommended an ACH of **6 or greater** for COVID-19 risk mitigation (note: this recommendation was made *before* recent, more transmissable variants, like Delta).

![](/img/co2/corsi_impact.png)

One of the 'DIY Air filters' described below can typically deliver the equivalent of about **600 CFM** (cubic feet per minute) of 'cleaned' air to a room -- this is also referred to as the "Clean Air Delivery Rate" (CADR).  This estimate is based on the cubic feet per minute that flow through the fan on the device, multiplied by 'removal rate' percentage for the filters. 

When the air purifier 'cleans' this volume of air and recirculates it back into a room, we can think of this as effectively increasing the ACH in the room.

To estimate the equivalent ACH provided by a DIY air purifier, we use the following equation:

``` 
Equivalent ACH = CADR * 60 / Volume_of_room
```

Because these DIY air purifiers have a CADR of about 600 CFM, for a typical room volume -- e.g. 30 foot x 30 foot x 10 foot -- this results in an equivalent ACH of about +3.  

The equivalent ACH provided by air purification is 'additive' -- e.g. in the above scenario, two if you put two purifiers in the room that each have an equivalent ACH of 3, it results in an equivalent ACH of 6.

---

# References / Materials

## Small Poster

[![](/img/co2/corsi2.png)](/img/co2/corsi2.png)

---

## Larger Poster

[![](/img/co2/corsi1.png)](/img/co2/corsi1.png)

---

## This Old House build guide / explanation 

<iframe width="560" height="315" src="https://www.youtube.com/embed/aw7fUMhNov8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Improving efficiency of Corsi Air Box

[https://www.texairfilters.com/how-to-improve-the-efficiency-of-the-box-fan-and-merv-13-filter-air-cleaner/](https://www.texairfilters.com/how-to-improve-the-efficiency-of-the-box-fan-and-merv-13-filter-air-cleaner/)

---

## Effectiveness of Corsi Air Box

![](/img/co2/merv_compare.png)

[https://www.texairfilters.com/its-all-about-the-air-flow-through-the-filter/](https://www.texairfilters.com/its-all-about-the-air-flow-through-the-filter/)

---

## Corsi video presentation on DIY air filtration

<iframe width="722" height="406" src="https://www.youtube.com/embed/MmWQUHswfOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![](/img/co2/box_fan_effectiveness.png)

note: reason that you pull through the filter is that it tends to seal, rather than blow apart

## Pressure effects

Discussion in This Old House video [https://www.youtube.com/watch?v=aw7fUMhNov8](https://www.youtube.com/watch?v=aw7fUMhNov8)

Thicker MERV 13 means less resistance (because more surface area)

Want air flow arrow pointing in ... cardboard on bottom ... 

Fan points up ...

## Michigan video comparing HEPA to DIY Corsi

[https://www.youtube.com/watch?v=kH5APw_SLUU](https://www.youtube.com/watch?v=kH5APw_SLUU)

## Energy vanguard instructions

[https://www.energyvanguard.com/blog/how-make-high-merv-diy-portable-air-cleaner/](https://www.energyvanguard.com/blog/how-make-high-merv-diy-portable-air-cleaner/)

## Philly Inquirer Article

[https://www.inquirer.com/health/coronavirus/covid19-make-your-own-air-filter-diy-trap-particles-fan-20201020.html](https://www.inquirer.com/health/coronavirus/covid19-make-your-own-air-filter-diy-trap-particles-fan-20201020.html)

## Tex-air overview

[https://www.texairfilters.com/iaq-research-practice-in-action-the-corsi-rosenthal-box-air-cleaner/](https://www.texairfilters.com/iaq-research-practice-in-action-the-corsi-rosenthal-box-air-cleaner/)

## Treehugger article

[https://www.treehugger.com/build-own-covid-19-air-filter-5081272](https://www.treehugger.com/build-own-covid-19-air-filter-5081272)


## Percent effectiveness at capturing particles

[https://www.ashrae.org/technical-resources/filtration-and-disinfection-faq](https://www.ashrae.org/technical-resources/filtration-and-disinfection-faq)

--> 85% 

## Calculating ACH from CFM

[https://www.vaniman.com/air-changes-per-hour-calculator/#:~:text=To%20calculate%20Air%20Changes%20Per,to%20get%20your%20total%20ACH.](https://www.vaniman.com/air-changes-per-hour-calculator/#:~:text=To%20calculate%20Air%20Changes%20Per,to%20get%20your%20total%20ACH.)

## Corsi presentation on air box

[https://www.youtube.com/watch?v=MmWQUHswfOs](https://www.youtube.com/watch?v=MmWQUHswfOs)


