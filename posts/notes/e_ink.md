---
pageTitle: E-Ink Map Display Prototyping
layout: layout.njk
date: 2020-11-09
updated: 2020-11-09
tags: notes 
image: /img/eink/map_proto.jpg
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

### PCB Antennas for GPS

Guide [here](https://resources.altium.com/p/gps-antennas-in-your-pcb-design-you-won-t-get-lost-again)


Design considerations for UBlox [here](GNSS-Antennas_AppNote_UBX-15030289.pdf)

|[![](/img/eink/chip_antenna_vs_patch.png)](/img/eink/chip_antenna_vs_patch.png)|
|:--:|
| Fig 9 from the UBlox [App Note](GNSS-Antennas_AppNote_UBX-15030289.pdf) mentioned above.|


### Offline maps

Nice discussion and review [here](https://meshtastic.discourse.group/t/offline-maps-on-meshtastic/137/20)

### Open Map Tiles 

Main project description is [here](https://openmaptiles.com/).

Open map tiles project update is [here](https://www.maptiler.com/news/2020/05/the-future-of-openmaptiles-project/)

OMT is compatible with Stamen's Toner -- post [here](https://www.maptiler.com/news/2020/04/long-live-toner/).

### Grayscale / B&W image

Thread discussion [here](https://www.imagemagick.org/discourse-server/viewtopic.php?t=21264).

Doing it without dithering:

```
convert bone.png -colorspace gray -threshold 80% -type bilevel -resize 200x320\! bone4.bmp
```

## Caltopo 

[Caltopo](https://caltopo.com/)

## E-Ink setup

Link to waveshare guide for 4.2 in e-ink [here](https://www.waveshare.com/wiki/4.2inch_e-Paper_Module)

Datasheet is [here](https://www.waveshare.com/w/upload/6/6a/4.2inch-e-paper-specification.pdf).

## ESP32 Low-power modes

There's a nice description [here](https://lastminuteengineers.com/esp32-sleep-modes-power-consumption/).

Tutorial on using ESP32 deep sleep [here](https://lastminuteengineers.com/esp32-deep-sleep-wakeup-sources/).

In particular, wakeup from external pin [here](https://lastminuteengineers.com/esp32-deep-sleep-wakeup-sources/#ext0-external-wakeup-source). 

## Low-power ESP32:

- TinyPic project is [here](https://www.tinypico.com/), on sale at Amazon [here](https://www.amazon.com/gp/product/B07ZZKZDGQ/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)

- E-Pulse project is [here](https://thingpulse.com/product/epulse-low-power-esp32-development-board/#:~:text=ePulse%2C%20the%20low%20power%20ESP32,and%2035uA%20(at%2012V).


### Eink experiments

![](/img/eink/map_proto.jpg)

### Inspiring projects

Arduino APRS project, [here](http://9w2svt.blogspot.com/2014/12/aprs-arduino-with-map-display.html).

**Key project**. Marinus, and APRS display project, [here](http://hamradioprojects.com/authors/wa5znu/+marinus/). Great set of links, here!

Online code to generate OSM tiles for download is [here](http://hamradioprojects.com/authors/wa5znu/+marinus/osm/).

Ham Radio for Arduino and Picaxe book --- [Description](http://www.arrl.org/shop/Ham-Radio-for-Arduino-and-PICAXE/), [Amazon](https://www.amazon.com/Ham-Radio-Arduino-Picaxe-Arrl/dp/087259324X).

Source code for generating tiles from OSM is [here](http://hamradioprojects.com/authors/wa5znu/+marinus/code/)

Grid square locator on above site is broken; perhaps [this](https://www.k2dsl.com/2008/08/27/finding-grid-square-locators/) works?

Grid square locator [here](http://www.arrl.org/grid-squares).

Computing lat / lon [here](https://stevemorse.org/jcal/latlon.php).

Conant road lat / lon: 42.41158	-71.2983

Grid square utility [here](http://www.levinecentral.com/ham/grid_square.php) works, but doesn't give 10 character grid squares ...

Another tool is [here](https://dxcluster.ha8tks.hu/hamgeocoding/), which generates a nice overlay ... <-- this is the tool to use!

So, the combined tools are:
- identifying your grid square in ham radio, [here](https://dxcluster.ha8tks.hu/hamgeocoding/).
- using a python script to grab the tiles, [here](http://hamradioprojects.com/authors/wa5znu/+marinus/osm/) -- seems to be broken.

Example grid square: 

FN42IK44LP

### Grid Squares

Generator [here](https://dxcluster.ha8tks.hu/hamgeocoding/).  Uses a nice open source [geocoding app](https://nominatim.org/) that works with OSM.  The author, [ha8tks](https://twitter.com/ha8tks?lang=en), has a [repo on github](https://github.com/ha8tks/Leaflet.Maidenhead) that applies the GridSquare layout in Leaflet.

![](/img/eink/gridquare.png)

![](/img/eink/weston.png)

Reference on gridsquares [here](https://www.amsat.org/amsat-new/tools/grids.php)

Ham radio chat on grid squares [here](https://www.youtube.com/watch?v=3w2SPj5Hs5Q).

General term for this is the [Maidenhead Gridsquare System](https://en.wikipedia.org/wiki/Maidenhead_Locator_System).

(Alternative:  the [World Geodetic System](https://en.wikipedia.org/wiki/World_Geodetic_System))

Nice [explanation](https://www.hamradio.in/circuits/grid_locator_system.php) of the grid locator system.

Nice [historical background](http://www.jonit.com/fieldlist/maidenhead.htm) on the system. 

Really nice [video explanation](https://www.youtube.com/watch?v=rlkUAHGw_Sg) of grid squares.

### OSM Tiles

Guide to tiles [here](https://wiki.openstreetmap.org/wiki/Tiles).

Tutorial on how to use OSM tiles in an application, [here](https://switch2osm.org/using-tiles/).

Leaflet providers [here](http://leaflet-extras.github.io/leaflet-providers/preview/) <-- really useful survey of free tile providers.

Good list of [hiking maps](https://wiki.openstreetmap.org/wiki/Hiking_Maps)

---
2020-11-25 10:50:31

Would be nice to include the GridSquare system in an offline map.  Easily switch between a device and a paper printout.  

How would one overlap on a 'regular' map? Might be neat to try to do via features.  Would need same project I suppose. 

Note that there's a TTGO EINK+ESP32 module [here](https://www.amazon.com/WEMS-ESP32-EPaper-Module-Speakers/dp/B07B9V1K7H).

E-ink calendar display project [here](https://github.com/martinberlin/eink-calendar) for ESP32. 

### Quick tally of hardware costs

If custom board:
- pcb: $10
- display: $30
- gps: $5
- micro+passives: $5
- misc: $5
- **total**: $55

can sell for 4X to support project, or around $200? 

If DIY kit:
- pcb: $10
- display: $30
- microcontroller: $20
- SD card: $5
- GPS: $5

Can sell the PCB + SD card + GPS + screen as a kit for (10+30+5+5)*4 = $200 ... hmm. Maybe if also sell a case ...

### GPS

Sparkfun [ublox library](https://www.arduino.cc/reference/en/libraries/sparkfun-ublox-arduino-library/).

Various Sparkfun [ublox products](https://www.sparkfun.com/categories/tags/u-blox).

I think the cheap chip vis a vis ublox is the NEO-6M. That's on the meshtastic, and that's what I'm using via Amazon. E.g. [here](https://www.amazon.com/DIYmall-AeroQuad-Antenna-Arduino-Aircraft/dp/B01H5FNA4K/ref=sr_1_7?dchild=1&keywords=GPS+U-blox+NEO-6M+Module&qid=1606324327&refinements=p_76%3A2661625011&rps=1&sr=8-7).

This is the 'NEO-6M' item I've been using, [here](https://www.amazon.com/DIYmall-AeroQuad-Antenna-Arduino-Aircraft/dp/B01H5FNA4K/ref=pd_lpo_147_t_0/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B01H5FNA4K&pd_rd_r=4c20784f-c1a2-486c-b9dc-aa87c28e8ace&pd_rd_w=oiq9h&pd_rd_wg=sPeQk&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=TE8WSNWNZTAYDY5AT2RK&psc=1&refRID=TE8WSNWNZTAYDY5AT2RK).
### Designing a PCB for the waveshare

Module description is [here](https://www.waveshare.com/4.2inch-e-paper-module.htm).

Dimensions of module are thus:

![](/img/eink/4.2inch-e-Paper-Module-size.jpg)

[5-way tactile switch](https://www.sparkfun.com/products/10063)

Sparfkun [thumb slide joystick](https://www.sparkfun.com/products/9426).

Two-axis analog thumb joystick [from adafruit](https://www.adafruit.com/product/3103?gclid=CjwKCAiAnvj9BRA4EiwAuUMDf3G_fkelMEeerVZsKheGOKmEEHHC8dTNP6ZO3IY1C-4tmHcKU-vbJBoC7bUQAvD_BwE).

---
2021-02-14 11:23:13

Interesting thread on plus codes, MRGR, etc -- [https://news.ycombinator.com/item?id=18646485](https://news.ycombinator.com/item?id=18646485)

The nicest viz of the map: [https://dxcluster.ha8tks.hu/hamgeocoding/](https://dxcluster.ha8tks.hu/hamgeocoding/)


