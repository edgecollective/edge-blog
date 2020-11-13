---
pageTitle: DIY Conductivity Sensor
layout: layout.njk
date: 2020-10-02
updated: 2020-10-02
tags: notes 
image: img/placeholder.png
blurb: Notes on development of DIY conductivity sensors
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

## Revision Notes

----

As of 10-02-2020:

- use an OPA281 for the TIA (current measurement)
- use an INA2331 for the INAMP (voltage measurement)
- add the driven shield, snubs, and in-the-loop compensation as per Craig's design & mods
- use through-hole headers for any passives we might want to swap (avoiding the MUX chip for now) to simplify the board

Don's current attempt at the above is [here](https://gitlab.com/p-v-o-s/echem/ec-4p/-/blob/master/v_0.3/pdf/ec-4p.pdf).

----

As of 10-06-2020:

- Made suggested modifications by C.V. & M.B..  Resultant schematic is [version 0.4](https://gitlab.com/p-v-o-s/echem/ec-4p/-/blob/master/v_0.4/pdf/ec-4p.pdf).

As of 10-07-2020:

- Mike: 'Do you want a power supply decoupling cap on the current sense TIA, U3?'
- Craig: 'What's driving P1 in this circuit?  Shouldn't we have some amp here?'

'Adder inputs' section of Craig's 4PSTAT schematic:

|[ ![fig2](/img/conductivity/adder_inputs.png)](/img/conductivity/adder_inputs.png)|
|:--:|
| From Craig's schematic [here](https://gitlab.com/p-v-o-s/echem/4pstat/-/blob/master/kicad-pcb/pdf/4pstat.pdf). |


As of Oct 9 2020:

|[ ![fig2](/img/conductivity/p1_feedback_circuit.png)](/img/conductivity/p1_feedback_circuit.png)|
|:--:|
| Revision A of the 0.4 EC-4P circuit: attempt at a simpler 'conductivity' measurement with adder amp feedback coming directly from the the amp output. See discussion [here](https://gitlab.com/p-v-o-s/echem/ec-4p/-/issues/6#note_427124136). |


[Adder circuit](https://en.wikipedia.org/wiki/Adder_(electronics)) explanation on wikipedia.

Oops.  Above places C16 incorrectly:

Craig:

> It looks like you are shorting out C16.  Instead C16 should go across R21 to the summing junction.

> Think of it this way, your gain at DC for each adder pathway (e0-e3) should be R21/Rn.  What the feedback capacitor C16 does is to short out R21 for high frequency signals where its impedance is small; thus it rolls off the gain at high frequencies, the corner frequency being 1/(2*pi*R21*C16).  Just set that, say 5X, above your highest intended signal frequency and you will have smoothed DAC signals and more stability.

Correction:



|[ ![fig2](/img/conductivity/p1_feedback_circuit_REV-B.png)](/img/conductivity/p1_feedback_circuit_REV-B.png)|
|:--:|
| [Revision B](https://gitlab.com/p-v-o-s/echem/ec-4p/-/blob/d616fd5467dd4cd1d415cf019640ec242f7dc668/v_0.4/pdf/ec-4p.pdf) of the 0.4 EC-4P circuit: attempt at a simpler 'conductivity' measurement with adder amp feedback coming directly from the the amp output. See discussion [here](https://gitlab.com/p-v-o-s/echem/ec-4p/-/issues/6#note_427124136). |



## References / Datasheets

[INA331](https://www.ti.com/lit/ds/symlink/ina2331.pdf?ts=1602019726489&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FINA2331%253Futm_source%253Dgoogle%2526utm_medium%253Dcpc%2526utm_campaign%253Dasc-null-null-GPN_EN-cpc-pf-google-wwe%2526utm_content%253DINA2331%2526ds_k%253DINA2331%2526DCM%253Dyes%2526gclid%253DCjwKCAjwq_D7BRADEiwAVMDdHqgen4POVfQNUaSvv1tTeDEJar15NgWLAQamLzuEf4j7nOT6NZ4iQBoCoFYQAvD_BwE%2526gclsrc%253Daw.ds)

[OPA831 / OPA2381](https://www.ti.com/lit/ds/symlink/opa381.pdf?ts=1602019570296&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FOPA381)

[LMC6484](https://www.ti.com/lit/ds/symlink/lmc6484.pdf?ts=1602019481665)

## Useful misc info

[via Stackoverflow](https://stackoverflow.com/questions/15677439/command-to-get-latest-git-commit-hash-from-a-branch): Command to get latest URL for remote commit:

```git ls-remote git://github.com/<user>/<project>.git```

---

2020 NOV 12

HOBO Freshwater datalogger product page [here](https://www.onsetcomp.com/products/data-loggers/u24-001/).

[![](/img/conductivity/hobo_specs.png)](/img/conductivity/hobo_specs.png)