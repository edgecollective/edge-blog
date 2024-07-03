---
pageTitle: UV Spectrophotometry
layout: layout.njk
date: Last Modified
updated: 2024-02-25
tags: notes 
image: /img/uvf/uvf.png
blurb: Designing a DIY UV Spectrophotometer
---

# Quick links

- [Research Notes Google Document](https://docs.google.com/document/d/1ZTH2Vkg3hWePBxur50EYWW4nV6wBEourCjJxaZh9Z6s/edit)
- ['uv-water' gitlab repo](https://gitlab.com/edgecollective/uv-water)

# Background

Kearns et al have been working to develop lower-cost methods of testing that leverage a particular feature of biochar (and similar filters):  some contaminants adbsorb much more easily than others.  It turns out that the presence of one class of more weakly-adsorbed contaminants -- dissolved organic matter -- is relatively easy to assess with a lower-cost laboratory method:  UV spectrophotometry. 

The details of this approach are laid out in a 2020 article by Kearns et al:

- "Biochar Water Treatment for Control of Organic Micropollutants with UVA Surrogate Monitoring" -- [https://www.liebertpub.com/doi/full/10.1089/ees.2020.0173](https://www.liebertpub.com/doi/full/10.1089/ees.2020.0173) | [PDF](https://www.liebertpub.com/doi/pdf/10.1089/ees.2020.0173) | [local PDF](/img/biochar/kearns-et-al-2021-biochar-water-treatment-for-control-of-organic-micropollutants-with-uva-surrogate-monitoring.pdf)

And specific instructions for performing the UV absorbance test are laid out in the supplementary section, here:  

- "Supplementary data describing UV254 measurement": [docx](https://www.liebertpub.com/doi/suppl/10.1089/ees.2020.0173/suppl_file/Supp_Data.docx) | [pdf](/img/biochar/kearns_2021_uva_surrogate_supplement.pdf)

Further:  while commercial UV spectrophotometers used in such tests are usually over $2000, there are several designs available for DIY forms of the instrument, costing under $100 in parts.  We found one design to be particularly simple and well-characterized:

- "An accurate, precise, and affordable light emitting diode spectrophotometer for drinking water and other testing with limited resources" -- [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6988917/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6988917/)

Our aim is to build a working prototype of this UV spectrophotometer, compare its performance to similar commercial instruments used in a laboratory, and then see if such an instrument might be easy to build and use in a community workshop setting.

# Misc notes

- Josh Kearns [substack piece](https://joshkearns.substack.com/p/new-paper-published-available-for) on Kearns et. al, "Leveraging DOM UV absorbance and fluorescence to accurately predict and monitor short-chain PFAS removal by fixed-bed carbon adsorbers"

- Analog Devices article by L. Orozco, ["Synchronous Detectors Facilitate Precision Low-Level Measurements"](https://www.analog.com/en/resources/analog-dialogue/articles/synchronous-detectors-facilitate-precision.html)

- ["How do I model an LED with Spice?"](https://electronics.stackexchange.com/questions/9510/how-do-i-model-an-led-with-spice)

- [Diode-fitting tool](https://wuyongzheng.github.io/diode-fitting/diode-fitting.html)

- [IN-C35PPCTGU0 3535 UVC LED](https://www.inolux-corp.com/datasheet/Inolux%20UV/IN-C35PPCTGU0_v1.0.pdf)



# Sun Mar  3 08:35:31 PM EST 2024

## Building the circuit

[Precision voltage to current converter](https://wiki.analog.com/university/courses/electronics/text/chapter-4)

Adafruit 4-pin jumper cable [here](https://www.adafruit.com/product/4936)

Adafruit 4-pin jst ph stemma [here](https://www.adafruit.com/product/3950?)

Adafruit JST 4-pin jst ph stemma SMD [here](https://www.adafruit.com/product/4392)
- diagram [here](https://cdn-shop.adafruit.com/product-files/4392/4392_C13927-001_CW2001-04T-H01-BD-A.PDF)

 

# Mon Mar 11 05:20:16 PM EDT 2024

LED polarity ![](/img/uvf/led_polarity.png)

uv detector IN-C35PPCTGU0

datasheet [here](https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/318/SD008-2171-112.pdf)

custom footprint:

 ![](/img/uvf/custom_footprint.png)


emitter v_0.1 ordered 3/11/24

![](/img/uvf/emitter_v0.1_3d.png)


detector v_0.1 ordered 3/12/24

![](/img/uvf/uva_detect_v0.1_3d.png)


# Fri Mar 15 11:00:43 AM EDT 2024

[instructrable on 555 as switch mode supply](https://www.instructables.com/Two-circuits-of-switched-mode-power-supply-based-o/)

[![](/img/uvf/555_switcher_boost_circuit_1.bmp)](/img/uvf/555_switcher_boost_circuit_1.bmp)


# Sat Mar 23 03:52:20 PM EDT 2024

Solder mask goof-up on UV emitter part!

![](/img/uvf/photo_1.png)

![](/img/uvf/photo_2.png)

![](/img/uvf/photo_3.png)

Reference for UV emitter [IN-C35PPCTGU0](https://www.digikey.com/en/products/detail/inolux/IN-C35PPCTGU0/16965314?s=N4IgjCBcoCwAxVAYygMwIYBsDOBTANCAPZQDaIMArAOxxzUgC6hADgC5QgDKbATgJYA7AOYgAvmMIAmMiCEBaJAGZKLFkjajGYoA)

Also: two pins on Q1 on emitter are 'flipped' -- need to fix pins -- was able to solder 'upside-down' anyway to fix

# Mon Mar 25 08:17:39 PM EDT 2024

Made a quick 3d enclosure using openscad:

openscad and stl files are [here](https://gitlab.com/edgecollective/uv-water/-/tree/1164b3f61c16f32ebf238acea9b2f93215b57da2/enclosure/openscad)

![](/img/uvf/uvf_enc_1.png)

![](/img/uvf/uvf_enc_2.png)

![](/img/uvf/uvf_enc_cover.png)


# Fri Mar 29 08:57:08 PM EDT 2024

Water filtering, 1 micron

Selection at McMaster [here](https://www.mcmaster.com/products/~/removes-particle-size-down-to~less-than~50~%CE%BCm/removes-particle-size-down-to~less-than~50~%CE%BCm/removes-particle-size-down-to~less-than~50~%CE%BCm/filter-cartridges-for-reducing-rust-particles-and-sediment-in-water-9/)

Nice pairing on Amazon:
- filter housing [here](https://www.amazon.com/Transparent-Standard-Filtration-Mounting-Hardware/dp/B01N4RFXGS)
- filter [here](https://www.amazon.com/Cartridges-Filtration-Polypropylene-WELL-MATCHED-WFPFC5002/dp/B07ZHN8KMM)

## Most recent prototype

![](/img/uvf/uvf_mike_proto_a.jpg)

![](/img/uvf/uvf_mike_proto.jpg)


# Fri Apr  5 08:31:52 PM EDT 2024

Working on detector v_0.2 ...

Sub-schematic that will be moved to a 'control board':

![](/img/uvf/blue_led_voltage_ref.png)

Version 0.1 footprint assignments:

![](/img/uvf/footprints_detector_ver_0.1.png)

Version 0.1 pinout:

![](/img/uvf/detect_v_0.1_pinout.png)

(need to add 2.5V ref)

![](/img/uvf/v_0.2_board_draft.png)

# Fri Apr  5 11:01:04 PM EDT 2024

## Detector schematic:

[![](/img/uvf/uv_ver0.2_detector_schem.png)](/img/uvf/UV-Detector-v0.2.pdf)

## Emitter schematic:

[![](/img/uvf/uv_emitter_v0.1_schem.png)](/img/uvf/UV-LED-source.pdf)

---

# Revision 0.2 of emitter and detector

### Sat Apr  6 10:25:06 PM EDT 2024

Edited footprint for LED (remove solder mask from center pad) 

Revising mosfet pin assignment on emitter ...

[2N7000 datasheet](https://rocelec.widen.net/view/pdf/orqxwkxkq1/ONSM-S-A0003544006-1.pdf?t.download=true&u=5oefqw)

2N7000 pinout:

![](/img/uvf/2N7000.png)

---

# emitter ver 0.2 

### Sat Apr  6 10:22:42 PM EDT 2024

## board layout:

![](/img/uvf/uva_emitter_v0.2-board.png)

## schematic:

[![](/img/uvf/uva-emitter-v0.2-schematic.png)](/img/uvf/UV-LED-source.pdf))

## board files: 

- [emitter ver 0.2 kicad files, JLCPCB order April 6 2024](https://gitlab.com/edgecollective/uv-water/-/archive/01dbf736686276510b7202d938a0762d491ce514/uv-water-01dbf736686276510b7202d938a0762d491ce514.zip?path=uv-water-sensor/UV-LED-source/v_0.2)

---

# detector ver 0.2 

### Sat Apr  6 10:22:55 PM EDT 2024

## board layout:

![](/img/uvf/uva-detector-v0.2-board.png)

## schematic:

[![](/img/uvf/uv_detector_ver_0.2_schematic.png)](/img/uvf/UV-Detector-v0.2.pdf))

## board files: 

- [detector ver 0.2 kicad files, JLCPCB order April 7 2024](https://gitlab.com/edgecollective/uv-water/-/archive/01dbf736686276510b7202d938a0762d491ce514/uv-water-01dbf736686276510b7202d938a0762d491ce514.zip?path=uv-water-sensor/UV-Detector/v_0.2)


# Mon Apr 15 08:18:11 PM EDT 2024

Collecting water samples and filtering through 1 um filter ...

3/4" NPT male + 3/4" barb fitting [on Amazon](https://www.amazon.com/JUWO-Barb-Brass-Fitting-1-Pack/dp/B0BNPT7HNQ)

electric water transfer pump [on Amazon](https://www.amazon.com/Water-Transfer-Pump-DEKOPRO-Electric/dp/B0CB64B8CF)

calibration of total organic carbon / uv254, EPA document [pdf](https://cfpub.epa.gov/si/si_public_file_download.cfm?p_download_id=525073&Lab=NERL)

[uva254 go](https://www.photonicmeasurements.com/go-the-uv254-monitor-)

'request a quote' for uva254 go [here](https://www.labunlimited.com/s/ALL/6-UV254GO-UVTA/Photonic-UV254-Go!-Handheld-UVT-UVA-Analyser)

might want to search for 'total organic carbon' (TOC)

[An easy spectrophotometric acid-base titration protocol for dissolved organic matter](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9112109/)

correlating uv254 to TOC, BOD, and COD [video](https://www.youtube.com/watch?v=gqqIAzbyQjM)

Great paper on UV254 methods and applications.  Note: correlations between uv254 and disinfection byproducts! references [here](https://downloads.regulations.gov/EPA-HQ-OW-2014-0408-0008/content.pdf) 


# Mon Apr 29 09:29:59 PM EDT 2024

[UV-Vis spec of Organic Compounds](https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_Structure_and_Reactivity_in_Organic_Biological_and_Inorganic_Chemistry_(Schaller)/Structure_and_Reactivity_in_Organic_Biological_and_Inorganic_Chemistry_II%3A_Practical_Aspects_of_Structure_-_Purification_and_Spectroscopy/02%3A_Ultraviolet-Visible_Spectroscopy/2.03%3A_UV-Visible_Spectroscopy_of_Organic_Compounds)

[UV-Vis spec, student resources](https://edu.rsc.org/resources/students-resource-uv-/-visible-spectroscopy/282.article#:~:text=UV%2Dvisible%20spectroscopy%20is%20a,a%20mechanism%20can%20be%20proposed.)

[Nice chapter on uv absorbance](https://www.intechopen.com/chapters/78677)

[Nice general reference on uv-vis spec](https://www2.chemistry.msu.edu/faculty/reusch/virttxtjml/spectrpy/uv-vis/spectrum.htm)

[Some UV-Vis chemistry examples](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Map%3A_Organic_Chemistry_(Wade)_Complete_and_Semesters_I_and_II/Map%3A_Organic_Chemistry_(Wade)/16%3A_Conjugated_Systems_Orbital_Symmetry_and_Ultraviolet_Spectroscopy/16.10%3A_Interpreting_Ultraviolet_Spectra_-_The_Effect_of_Conjugation#:~:text=Molecules%20or%20parts%20of%20molecules,a%20%CF%80%20%2D%20%CF%80*%20transition.)



# Sun May  5 02:54:23 PM EDT 2024

## Notes on testing v0.2

idea: place all non-emitter/detector components on 'bottom' of board to allow easy access during testing

use voltage doubler on emitter board, as per this part [here](https://www.analog.com/en/products/max1682.html)

replace the 5K R15 on detector board with R15 = 619 ohms

add current sense breakout above R2 on emitter board 

add 555 boost and 555 emitter input on external feather board

add usb socket to motherboard for power


```
I was getting a measly 1.0V at the "2V5" reference pin - some buffoon (that is, me) seems to have chosen poorly the value of R15. I have replaced the 5K with a 619 Ohm resistor - and much better! I get 2.5Vreference.

And the signal at "leak" seems to act as I expected, in room light anyway. I still have to set up the LED and test a blank and wet cuvette ...

so, that T-network has a nice high gain!

And the input signal is 2.491 to 2.517 at 1kHz

Implies the equivalent feedback R is about 53.8Meg

There about 26nApp into the the stage with this test

So , 26mVpp into 1Meg for test current, and about 1.4Vpp output

Now to find what I did wrong at the LED stage ...

With 130us rise time that's about 2.7kHz tia bandwidth

Don't run the LED at 10kHz ..

OK I have a solid 0.5Vpp signal at "leak" node when I ping the LED board with 0V to 3V square wave at 500 Hz. On that emitter pcb I had to swap out R1 (was 49.9K) to 49.9 Ohms, and R2 (was 24.9K) to 24.9 Ohms. So, no cuvette, in the opto-mechanical system Craig designed, I see 0.5Vpp signal. Not bad.

less nice, I see some noise - I think that high gain TIA is also picking up 60Hz, and some other crap. more scope-ing to figure this out .... maybe we want a metal box ?
```
![](/img/uvf/mike_test_v0.2.jpg)

![](/img/uvf/craig_PD.jpg)


# Fri May 10 03:39:30 PM EDT 2024

![](/img/uvf/uvf_meeting_may10.png)


# Fri May 17 08:25:56 PM EDT 2024

Version 0.2 of hardware does indeed work!

Input: 1 kHz square wave, 50% duty cycle, 3.3V pp

| [![](/img/uvf/initial_expt_cover.png)](https://drive.google.com/file/d/1ddht_ipYdlvbi5xdmDQ5ARPbd5Wk6Hx-/view?usp=sharing) |
|:--:|
| Video of initial test with cuvette filled with distilled water.  Interesting: voltage at DETECT slightly higher with liquid-filled cuvette than without any cuvette ... lens effect? |

| ![](/img/uvf/raw_battery_sag.jpg) |
|:--:|
| Raw battery sag is about 0.2V |

| ![](/img/uvf/urea_setup.jpg) |
|:--:|
| Test setup | 

| ![](/img/uvf/leak_blocked.jpg) |
|:--:|
| LEAK blocked | 

| ![](/img/uvf/leak_unblocked.jpg) |
|:--:|
| LEAK unblocked | 

| ![](/img/uvf/rect_blocked.jpg) |
|:--:|
| RECT blocked | 

| ![](/img/uvf/rect_unblocked_ac.jpg) |
|:--:|
| RECT unblocked | 

| ![](/img/uvf/detect_blocked.jpg) |
|:--:|
| DETECT blocked | 

| ![](/img/uvf/detect_unblocked.jpg) |
|:--:|
| DETECT unblocked | 

![](/img/uvf/dilution.jpg)

## Initial 'linearity test' attempt using tannin powder

![](/img/uvf/tannin.jpg)

| [![](/img/uvf/droplet_experiment_cover.png)](https://drive.google.com/file/d/1vx4ERz3yq5KiWA97wVG02OwWjmjgoKUb/view?usp=sharing) | 
|:--:|
| Video of initial tannin test. Initial solution: 25 mg tannin powder in 5 mL of distilled water (this dropped DETECT signal to 'zero'); then diluted 5 mL of that solution into 25 mL of distilled water. |

## Next steps:

- DC-DC boost noise reduction via 555-based circuit
- test of linearity of circuit
- 555-based 1 kHz input
- respin case to enhance internal light collimation
- ground plane on board and 60 Hz shielding


# Sun May 19 06:02:51 PM EDT 2024

Similar platform: [https://iorodeo.com/products/uv-open-colorimeter](https://iorodeo.com/products/uv-open-colorimeter)
- colorimeter product guide: [https://blog.iorodeo.com/open-colorimeter-product-guide/](https://blog.iorodeo.com/open-colorimeter-product-guide/)
- uv sensor board in particular [https://iorodeo.com/products/as7331-uv-sensor-board?pr_prod_strat=e5_desc&pr_rec_id=037acace2&pr_rec_pid=7328730316915&pr_ref_pid=7363616571507&pr_seq=uniform](https://iorodeo.com/products/as7331-uv-sensor-board?pr_prod_strat=e5_desc&pr_rec_id=037acace2&pr_rec_pid=7328730316915&pr_ref_pid=7363616571507&pr_seq=uniform)
- current-controlled LED board [https://github.com/iorodeo/i_control_led](https://github.com/iorodeo/i_control_led)

What would be required to make their system work for UV254? 


# Sun May 26 01:51:00 PM EDT 2024

## 555-based boost circuit design

Reference is circuit 1 from [this tutorial](https://www.instructables.com/Two-circuits-of-switched-mode-power-supply-based-o/)

Power mosfet IRF2907Z datasheet [here](https://www.infineon.com/dgdl/Infineon-IRF2907Z-DataSheet-v01_01-EN.pdf?fileId=5546d462533600a4015355ded98f1902)

op-amp is LT1716

[![](/img/uvf/555_switcher_boost_circuit_1.png)](/img/uvf/555_switcher_boost_circuit_1.png)

![](/img/uvf/555_pinout.webp)


# Sat Jun 15 03:28:33 PM EDT 2024

generating a 500 hz signal on a feather m4 ...

start with silly blink example

.002 second delay ... 


# Tue Jun 18 05:51:13 PM EDT 2024

Great description of method for UV254 here: [https://images.hach.com/asset-get.download.jsa?code=50588](https://images.hach.com/asset-get.download.jsa?code=50588)

"use a glass fiber filter with no organic binder"

As well as here: [https://assets.thermofisher.com/TFS-Assets/LPD/Application-Notes/an_uva_e_1020_rev_b_rev_web.pdf](https://assets.thermofisher.com/TFS-Assets/LPD/Application-Notes/an_uva_e_1020_rev_b_rev_web.pdf)

Kearns et al methods suggest 1 um filter; 
Looks from last link there that .45 um filters are also acceptable	

Getting some good results here -- [https://www.amazon.com/s?k=glass+fiber+syringe+filter&i=industrial&crid=3FR5VDYJW4RHQ&sprefix=glass+fiber+syringe+filter%2Cindustrial%2C105&ref=nb_sb_noss_1](https://www.amazon.com/s?k=glass+fiber+syringe+filter&i=industrial&crid=3FR5VDYJW4RHQ&sprefix=glass+fiber+syringe+filter%2Cindustrial%2C105&ref=nb_sb_noss_1)

... need to figure out what diameter filter to try


# Fri Jun 28 02:33:07 PM EDT 2024

Another 555 boost circuit [here](https://circuitdigest.com/electronic-circuits/a-simple-boost-converter-circuit-using-555-timer-ic)

[https://www.eevblog.com/forum/projects/555-timer-boost-converter-(and-buck-converter)-switching-power-regulator/](https://www.eevblog.com/forum/projects/555-timer-boost-converter-(and-buck-converter)-switching-power-regulator/)

And yet another here: [https://www.instructables.com/Simple-DC-DC-Boost-Converter-Using-555/](https://www.instructables.com/Simple-DC-DC-Boost-Converter-Using-555/)

[https://www.researchgate.net/publication/359257240_DC_to_DC_Boost_Converter_using_555_Timer_IC](https://www.researchgate.net/publication/359257240_DC_to_DC_Boost_Converter_using_555_Timer_IC)

From [https://www.researchgate.net/figure/DC-to-DC-Boost-Converter-using-555-timer-IC-6-to-24_fig1_359257240](https://www.researchgate.net/figure/DC-to-DC-Boost-Converter-using-555-timer-IC-6-to-24_fig1_359257240) -- ![](/img/uvf/dc_dc_555_boost.png)

![](/img/uvf/simple_boost_555.png) via [https://www.youtube.com/watch?v=fuXH-cQjYwo](https://www.youtube.com/watch?v=fuXH-cQjYwo)

also: [https://how2electronics.com/dc-dc-converter-using-555-timer/](https://how2electronics.com/dc-dc-converter-using-555-timer/)

simplest: [https://www.circuits-diy.com/boost-converter-circuit-using-555-timer-ic/](https://www.circuits-diy.com/boost-converter-circuit-using-555-timer-ic/)

555 oscillator circuit explained here: [https://www.electronics-tutorials.ws/waveforms/555_oscillator.html](https://www.electronics-tutorials.ws/waveforms/555_oscillator.html)

simplest 555 oscillator circuit [https://www.555-timer-circuits.com/simplest-555-oscillator.html](https://www.555-timer-circuits.com/simplest-555-oscillator.html)

good explanation of desgining a 555 oscillator: [https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-555-timer#:~:text=mS,Niobium%20Oxide%20Capacitors](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-555-timer#:~:text=mS,Niobium%20Oxide%20Capacitors)

BCN547 reference [https://components101.com/transistors/bc547-transistor-pinout-datasheet](https://components101.com/transistors/bc547-transistor-pinout-datasheet)


# Sun Jun 30 05:40:21 PM EDT 2024

Used this circuit to make a mostly 50% duty cycle oscillator: [https://www.electronics-tutorials.ws/waveforms/555-circuits-part-1.html](https://www.electronics-tutorials.ws/waveforms/555-circuits-part-1.html) -- using the 'Simple 555 Oscillator' ... could improve by using diodes in lower circuits on that page ('exact 50% duty cycle'), but waiting on diode supply.  used R=5.5K, C=.1uF ... freq should be 1.3KHz, got more like 580 Hz.  

Now going to try to build this: [https://www.researchgate.net/profile/Muhammad-Ameer-Hamza-2/publication/359257240/figure/fig1/AS:1134177667817474@1647420436729/DC-to-DC-Boost-Converter-using-555-timer-IC-6-to-24.ppm](https://www.researchgate.net/profile/Muhammad-Ameer-Hamza-2/publication/359257240/figure/fig1/AS:1134177667817474@1647420436729/DC-to-DC-Boost-Converter-using-555-timer-IC-6-to-24.ppm) 

... or this: [https://how2electronics.com/dc-dc-converter-using-555-timer/https://how2electronics.com/dc-dc-converter-using-555-timer/](https://how2electronics.com/dc-dc-converter-using-555-timer/)


Review of 555 timer [https://electronics.stackexchange.com/questions/152432/555-timer-boost-converter-doesnt-meet-spec](https://electronics.stackexchange.com/questions/152432/555-timer-boost-converter-doesnt-meet-spec)

Flyback converter for dummies [https://www.dos4ever.com/flyback/flyback.html](https://www.dos4ever.com/flyback/flyback.html) -- great explanation 

Nice notes on 555 boost converters [https://github.com/tardate/LittleArduinoProjects/blob/master/Electronics101/555Timer/NixiePowerSupply/README.md](https://github.com/tardate/LittleArduinoProjects/blob/master/Electronics101/555Timer/NixiePowerSupply/README.md)

This instructable might be derivative [https://www.instructables.com/High-Voltage-Power-Supply-for-Nixie-and-Valve-Tube/](https://www.instructables.com/High-Voltage-Power-Supply-for-Nixie-and-Valve-Tube/) -- with a better circuit to follow

Very clear circuit diagrams:
- [https://www.instructables.com/High-Voltage-Power-Supply-for-Nixie-and-Valve-Tube/](https://www.instructables.com/High-Voltage-Power-Supply-for-Nixie-and-Valve-Tube/)
- [https://github.com/tardate/LittleArduinoProjects/blob/master/Electronics101/555Timer/NixiePowerSupply/README.md](https://github.com/tardate/LittleArduinoProjects/blob/master/Electronics101/555Timer/NixiePowerSupply/README.md)

this seems like a very similar circuit [https://www.eleccircuit.com/wp-content/uploads/2012/08/dc-to-dc-converter-using-ic-ne555.jpg](https://www.eleccircuit.com/wp-content/uploads/2012/08/dc-to-dc-converter-using-ic-ne555.jpg)

problem -- if use single 555, the output voltage will drop as the battery voltage drops. using another 555 can compensate.  [https://www.eevblog.com/forum/beginners/boost-converter-using-555/](https://www.eevblog.com/forum/beginners/boost-converter-using-555/)

... unless, i think, there's some feedback mechanism -- which an op-amp, or another 555, can provide.
  

# Mon Jul  1 05:23:37 PM EDT 2024

Might try the IRF740 as a power mosfet ... [https://www.vishay.com/docs/91054/91054.pdf](https://www.vishay.com/docs/91054/91054.pdf)

why / why not use an op-amp as a comparator?  nice app note: [https://www.analog.com/media/en/technical-documentation/application-notes/an-849.pdf](https://www.analog.com/media/en/technical-documentation/application-notes/an-849.pdf)

second circuit uses the BC557 PNP transistor [https://www.mouser.com/datasheet/2/308/BC556BTA_D-2310029.pdf](https://www.mouser.com/datasheet/2/308/BC556BTA_D-2310029.pdf)

trying the first circuit

using the tlv2462 as a comparator, datasheet [here](https://www.ti.com/lit/ds/symlink/tlv2462.pdf?ts=1719855288428&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FTLV2462%253Fbm-verify%253DAAQAAAAJ_____7t_iiCZs2-0IXoUu_7mYbVf72gUi9_Ko-Vr6kyE7u3yaZwWkwcX_3-3XyM--l5cbybllQ09BX9Fosc2bSl5SVAUcYE8BgTvwibsRHt4BKdv4NuSec8KGih_O17wKTFpGevutg1ad4qYDMjPZtobhp5b2fbQ_4If76jp7igw1qe93F_nBcqs4jYqnXtlSvpIJPny889ZlSpN-7ylR0VzY-NkOYZutNP2wDUlyvxAzlIi2YEOAEdgT_3B1BaiT2L2jmYh6CH8_l4focJHkLdDmHthJ2MIVf5KYlvIosmgsWHE_nobYb7TyPBUOA)

![](/img/uvf/tlv2462_pinout.png)

![](/img/uvf/irf740.png) 

Post debug with Mike:

- replaced IRF29072 with IRF740
- for voltage ref, replaced 1N750 with 1N4732A (4.7V) Zener  ... 4.7V was too close to 5V ... so then used 1N4727A (3V) Zener ... whatever voltage we generate via D1, implies proper value of voltage divider R6 & R7 to get us to 7.5 Volts  
- Remove D3 & D9
- Place C3, but might not need to populate
- replaced DFLS220L with IN5817


- tested with 3 x 1K resistor load in parallel (replacing R5); still very smooth output, no droop  


# Tue Jul  2 05:26:31 PM EDT 2024

LM358ADR digikey $0.40 [here](https://www.digikey.com/en/products/detail/texas-instruments/LM358ADR/555540?utm_adgroup=&utm_source=google&utm_medium=cpc&utm_campaign=Pmax_Shopping_Boston%20Metro%20Category%20Awareness&utm_term=&utm_content=&utm_id=go_cmp-20837509568_adg-_ad-__dev-c_ext-_prd-555540_sig-CjwKCAjwyo60BhBiEiwAHmVLJX4WQ_9Vm3RCA1vSrYdf1WwBZ7y5ZAuo139o7Uyq6VomeHFqisBuNhoC9SUQAvD_BwE&gad_source=1&gclid=CjwKCAjwyo60BhBiEiwAHmVLJX4WQ_9Vm3RCA1vSrYdf1WwBZ7y5ZAuo139o7Uyq6VomeHFqisBuNhoC9SUQAvD_BwE) 

Package: 8-SOIC (0.154", 3.90mm Width)

What input voltage is ideal for the LEDs?

Try to get to 7.5 volts ...

Okay ...

Got to 7.5 volts with the combination I have

![](/img/uvf/555_input_555_boost.jpeg)

Replicated the basic setup with 555 timer input

![](/img/uvf/555_50_50.png)

![](/img/uvf/noisy_555_pwm.jpeg)

Reference: see "555 Circuits Part 1 – An Improved Duty Cycle" ,  at [https://www.electronics-tutorials.ws/waveforms/555-circuits-part-1.html](https://www.electronics-tutorials.ws/waveforms/555-circuits-part-1.html)

Used:  NE555 timer, RA = RB = 5.5K; C = 0.1 uF;  got freq of 1.15 kHz;   used 100 nF from pin 5 to ground
 
555 output was a little noisy / shaky, not sure whether that's important / something to address. 

1.15 kHz seemed to result in stronger detector signal than 660 Hz, from what I could tell ...

Meanwhile, the circuit I'm using to generate 7.5 volts is the first circuit [here](https://www.instructables.com/Two-circuits-of-switched-mode-power-supply-based-o/)

- Used LM358P for comparator
- Used NE555 for 555
- R1 is 10K
- D1 is a 1N4727A ... the voltage drop across it seemed to be around 2.2 V
- R6 is 10K (9.69K when measured)
- R7 is 4.2K
- replaced IRF29072 with IRF740
- Remove D3 & D9
- Place C3, but might not need to populate
- replaced DFLS220L with IN5817

seemed to generate around 7.5 volts.  Might want to place an optional potentiometer to dial in the proper voltage ... 





 
