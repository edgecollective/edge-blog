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
