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


