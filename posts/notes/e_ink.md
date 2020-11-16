---
pageTitle: E-Ink Display Prototyping
layout: layout.njk
date: 2020-11-09
updated: 2020-11-09
tags: notes 
image: img/placeholder.png
blurb: Setting up a (low power?) E-Ink display with a micro
---

---

2020 Nov 09

## Youtube tutorial by Techiesms

Nice [tutorial](https://www.youtube.com/watch?v=mySnfyyL4i4) using ESP32 and 4.2 " e-ink display

Associated library, GxEPD is [here](https://github.com/ZinggJM/GxEPD)

Link for project code in the tutorial is [here](https://github.com/techiesms/E-paper-module-using-ESP32)

|[ ![figA2](/img/valedalama/heltec_pinout.png)](/img/valedalama/heltec_pinout.png)|
|:--:|
| Heltec Wifi LoRa v2 pinout. |

Instructions for Adafruit MicroSD are [here](https://www.adafruit.com/product/254).

Formatting a microSD tutorial [here](https://ragnyll.gitlab.io/2018/05/22/format-a-sd-card-to-fat-32linux.html)

Convert to byte array code [here](https://www.briandorey.com/post/bitmap-byte-converter-for-e-ink-display)

converting input images to proper grayscale [here](https://github.com/sqfmi/badgy/tree/master/examples/grayscale)

this conversion pipeline looks great -- [here](https://stackoverflow.com/questions/35797988/converting-images-to-indexed-2-bit-grayscale-bmp)

which is explained along with other code [here](https://github.com/yy502/ePaperDisplay)

## Working code, SD card to itsym0 4.2 in e-ink

Code on github is [here](
https://github.com/edgecollective/eink-map/tree/main/GxEPD_SD_itsym0)

## Converting images

Great little tutorial [here](https://steve.fi/hardware/d1-epaper/)

```
convert Lenna.png -monochrome lenna-1.png
```

```
convert lenna.png -monochrome -resize 200x320\! lenna4.bmp

```
### Compass

Good quality compass offered [here](https://www.amazon.com/gp/product/B07CK8B3R3/ref=ox_sc_saved_title_1?smid=A2LLNHIZM5ZWNT&psc=1)

### Map tiles

Typical map tile size is 256x265 -- reference [here](https://wiki.openstreetmap.org/wiki/Tiles#:~:text=Graphical%20Map%20Tiles,-Map%20tiles%20are&text=512%C3%97512%20pixel%20seems,and%20also%20several%20zoom%20levels.)

Guide to creating your own tiles [here](https://wiki.openstreetmap.org/wiki/Creating_your_own_tiles)

Browsing local tiles guide [here](https://wiki.openstreetmap.org/wiki/OpenLayers_Local_Tiles_Example) <---- this seems like a great guide to dive into.

More basic guide to OSM tiles [here](https://wiki.openstreetmap.org/wiki/Tiles).
