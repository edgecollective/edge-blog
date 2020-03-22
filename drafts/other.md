---
pageTitle: Other stuff
layout: layout.njk
date: 2019-06-30
image: /img/rvol1/feather_board.png
blurb:
---

---

# Misc Notes

[How to create a BOM in Kicad](https://forum.kicad.info/t/how-to-create-a-bill-of-materials-bom/12346)

-----

# Notes on Pressure Sensors 

- BMP180 -- 0.17 meters, tiny package
- MPL3115A2 -- easy package, .3 meters / 1.5 Pascal
- LPS35HW -- 0.1% hPa
- 
- BMP280 12 Pascal / 1 meters

## BMP388

[datasheet](https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BMP388-DS001.pdf)

Footprint:

<img src="/img/rvol1/bmp388_wiring.png">

Relative accuracy:  +- 8 Pa / +- 0.66 m

Abs accuracy: +- 50 Pa

## LPS35HW

[datasheet](https://www.st.com/resource/en/datasheet/lps35hw.pdf)

Footprint:

<img src="/img/rvol1/LPS35HW_foot.png">

Relative accuracy:  800-1100 hPa

Abs accuracy:  +- 1 hPa

## Notes

Conclusion -- seems like we could make extended pads for the BMP388, and it's not going to be so much harder to solder than the LPS35HW. And we can pot it ourselves if need be.  So this might be a reason for a first foray into kicad footprint construction.

## Quahog ordering

22 uF on backorder

Ordered TIP42 PNPs from Mouser. Need to find SMT equiv.

[Barrel connector](https://www.sparkfun.com/datasheets/Prototyping/Barrel-Connector-PJ-202A.pdf)

[PJ202A on Digikey](https://www.digikey.com/product-detail/en/cui-inc/PJ-202A/CP-202A-ND/252007)

[PJ202AH on Digikey](https://www.digikey.com/product-detail/en/cui-inc/PJ-202AH/CP-202AH-ND/408450) --- 5 Amp rating

[Coin battery holder](https://www.digikey.com/product-detail/en/keystone-electronics/3000TR/36-3000CT-ND/1532229) is a Keystone 3000, intended for 12 mm coin cell batteries -- 1216, 1220, 1225 

-----

## Projects

Urban agriculture.

What's the FAO study on the prevalence / importance / role of urban agriculture world-wide?

Find argument (in Twitter thread) that urban agriculture and gardens should have a greater role.

Idea: combined infrastructure for urban ag, urban disaster-resistence comm, and flooding -- community - owned.

Focus on satellite communications, next.

Next design sprints:

- Redesign cellular module add-on for Quahog
- Feather Decagon breakout board
- Footprint for BMP388
- Satellite module design (based on cellular)
- PyRu board

Down the line:

- A nicer solar charging solution
- Electric fence module

**classes**

KiCad
SMT
Milling

P2P

---

## Four Probe

[Four Point Probe instruments](http://four-point-probes.com/)

---

## Knuth

The Adafruit Feather headers are 11.43 mm apart, measured from pin centers

<img src="/img/rvol1/feather_foot.png">

<img src="/img/rvol1/feather_board.png">

<img src="/img/rvol1/feather_schem.png">

---




