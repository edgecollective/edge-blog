---
pageTitle: DIY Conductivity Sensor
layout: layout.njk
date: 2020-10-02
updated: 2020-10-02
tags: notes 
image: img/placeholder.png
blurb: Notes on devlepment of DIY conductivity sensors
---

## Temperature Measurement

[RTD amp](https://learn.adafruit.com/adafruit-max31865-rtd-pt100-amplifier) breakout from Adafruit. 

## Signal Sampling

[Burr Brown App Note](https://www.ti.com/lit/an/sboa068/sboa068.pdf?ts=1601648370947&ref_url=https%253A%252F%252Fwww.google.com%252F) on precision absolute value circuits.

## Signal generation

[Arduino Waveform Generator](https://www.instructables.com/Arduino-Waveform-Generator/)

## Prior Art Among Us

Don's last version in January, based off Craig's 4pstat is [here](https://gitlab.com/p-v-o-s/echem/4pstat/-/blob/4p-v1/kicad-pcb/pdf/4pstat.pdf)

Craig's latest 4pstat is [here](https://gitlab.com/p-v-o-s/echem/4pstat/-/blob/master/kicad-pcb/pdf/4pstat.pdf)

Don's simplified 4 probe based on an earlier design is [here](https://gitlab.com/p-v-o-s/echem/ec-4p/-/blob/master/v_0.1/four_probe.pdf)

## Craig comments

> What I found that seems to work well on the driven shield lines was to use some RC snubbers to ground after the 50 Ohm output resistor.  Values like 10 Ohm and 100nF give you a corner frequency of 160kHz - if your bandwidth is 10kHz that should likely work out.

> Don, if you use my design, there are lots of mods needed to stop it from oscillating.

> If you are doing a virtual ground, I suggest using the [in-the-loop compensation circuit I got from AoE3](https://gitlab.com/p-v-o-s/echem/4pstat/-/issues/7#note_364944285)

|[ ![fig2](/img/intheloop.jpg)](/img/intheloop.jpg)|
|:--:|
| In-the-loop compensation scheme suggested by Craig [here](https://gitlab.com/p-v-o-s/echem/4pstat/-/issues/7#note_364944285). |

> Actually I wonder if the corner frequency is actually 6X lower because of the added 50 Ohm resistor? If that is the case, it might be better to back off the capacitance a bit And what about output resistance from the opamp (Mike, I'm looking at you)? If that's like around 100 Ohm maybe we'd be smart using an even smaller cap. This could be why I did not make my intended bandwidth of 100kHz on the bodged up 4pstat.

## Current Work

As of 10-02-2020:

- use an OPA281 for the TIA (current measurement)
- use an INA2331 for the INAMP (voltage measurement)
- add the driven shield, snubs, and in-the-loop compensation as per Craig's design & mods
- use through-hole headers for any passives we might want to swap (avoiding the MUX chip for now) to simplify the board

Don's current attempt at the above is [here](https://gitlab.com/p-v-o-s/echem/ec-4p/-/blob/master/v_0.3/pdf/ec-4p.pdf).

## References / Datasheets

[INA331](https://www.ti.com/lit/ds/symlink/ina2331.pdf?ts=1602019726489&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FINA2331%253Futm_source%253Dgoogle%2526utm_medium%253Dcpc%2526utm_campaign%253Dasc-null-null-GPN_EN-cpc-pf-google-wwe%2526utm_content%253DINA2331%2526ds_k%253DINA2331%2526DCM%253Dyes%2526gclid%253DCjwKCAjwq_D7BRADEiwAVMDdHqgen4POVfQNUaSvv1tTeDEJar15NgWLAQamLzuEf4j7nOT6NZ4iQBoCoFYQAvD_BwE%2526gclsrc%253Daw.ds)

[OPA831 / OPA2381](https://www.ti.com/lit/ds/symlink/opa381.pdf?ts=1602019570296&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FOPA381)

[LMC6484](https://www.ti.com/lit/ds/symlink/lmc6484.pdf?ts=1602019481665)

