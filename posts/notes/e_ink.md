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

---
2021-02-27 16:30:18

Note that there is a new GxEPD library -- GxEPD2 -- should check it out!

---
2021-03-17 11:41:44

Nice article on hiking and mapping: [https://blog.mapillary.com/community/2017/04/07/mapping-hiking-routes-openstreetmap-mapillary.html](https://blog.mapillary.com/community/2017/04/07/mapping-hiking-routes-openstreetmap-mapillary.html)

---
2021-03-17 11:44:27

Leaflet trails plugin here: [https://github.com/Raruto/leaflet-trails](https://github.com/Raruto/leaflet-trails)

---
2021-03-17 12:01:19

From Dave S.:

Minimalist display lib:

The library I used is the lcdgfx library which should be right in the list of Arduino libraries.

Here's the code.  As you can see, the interface to it is quite different than
the standard 1306 library.  You do a display.fill to clear the display
and then use the display.printFixed function to write strings at a specific row/column location (those coordinates are in pixels with column followed by row.  I'll put the whole code below but here are the include and some of the display functions I used in setup() to show an startup message:


```
#include "lcdgfx.h"

DisplaySSD1306_128x64_I2C display(-1); // This line is suitable for most platforms by default

setup() {
display.setFixedFont( ssd1306xled_font6x8 );
display.begin();
display.fill(0x00);
display.setFixedFont(ssd1306xled_font6x8);
display.printFixed (0,  8, "Starting...", STYLE_NORMAL);
}
```

Here's the full sketch:

```

----------------------------------

#include <LowPower.h>

#include <SPI.h>
#include <Wire.h>
#include <RH_RF95.h>
#include "lcdgfx.h"
#include <SoftwareSerial.h>

SoftwareSerial Serial1(3, 4); // RX, TX

DisplaySSD1306_128x64_I2C display(-1); // This line is suitable for most platforms by default

// radio pins for mothbot
#define RFM95_CS 8
#define RFM95_RST 7
#define RFM95_INT 2

// Change to 434.0 or other frequency, must match RX's freq!
#define RF95_FREQ 434.0

// Singleton instance of the radio driver
RH_RF95 rf95(RFM95_CS, RFM95_INT);

#define LED 14

void types(String a) { Serial.println("it's a String"); }
void types(int a) { Serial.println("it's an int"); }
void types(char *a) { Serial.println("it's a char*"); }
void types(float a) { Serial.println("it's a float"); }
void types(bool a) { Serial.println("it's a bool"); }

void setup()
{
  pinMode(LED, OUTPUT);

  pinMode(RFM95_RST, OUTPUT);
  digitalWrite(RFM95_RST, HIGH);

  Serial.begin(115600);
  //  while (!Serial) {
  //    delay(1);
  //  }
  Serial1.begin(9600);
  delay(100);
  display.setFixedFont( ssd1306xled_font6x8 );
  display.begin();
  display.fill(0x00);
  display.setFixedFont(ssd1306xled_font6x8);
  display.printFixed (0,  8, "Starting...", STYLE_NORMAL);
  Serial.println("Starting...");
//  display.printFixed (0, 16, "Line 2. Bold text", STYLE_BOLD);
//  display.printFixed (0, 24, "Line 3. Italic text", STYLE_ITALIC);
//  display.printFixedN (0, 32, "Line 4. Double size", STYLE_BOLD, FONT_SIZE_2X);

  delay(1000);
  
  // manual reset
  digitalWrite(RFM95_RST, LOW);
  delay(10);
  digitalWrite(RFM95_RST, HIGH);
  delay(10);

  while (!rf95.init()) {
    Serial.println(F("LoRa radio init failed"));
    Serial.println(F("Uncomment '#define SERIAL_DEBUG' in RH_RF95.cpp for detailed debug info"));
    while (1);
  }
  Serial.println(F("LoRa radio init OK!"));

  // Defaults after init are 434.0MHz, modulation GFSK_Rb250Fd250, +13dbM
  if (!rf95.setFrequency(RF95_FREQ)) {
    Serial.println(F("setFrequency failed"));
    while (1);
  }
  Serial.print(F("Set Freq to: ")); Serial.println(RF95_FREQ);

  // Defaults after init are 434.0MHz, 13dBm, Bw = 125 kHz, Cr = 4/5, Sf = 128chips/symbol, CRC on

  // The default transmitter power is 13dBm, using PA_BOOST.
  // If you are using RFM95/96/97/98 modules which uses the PA_BOOST transmitter pin, then
  // you can set transmitter powers from 5 to 23 dBm:
  rf95.setTxPower(5, false);
}

int16_t packetnum = 0;  // packet counter, we increment per xmission

void loop()
{
  //LowPower.idle(SLEEP_8S, ADC_OFF, TIMER2_OFF, TIMER1_OFF, TIMER0_OFF, 
  //        SPI_OFF, USART0_OFF, TWI_OFF);
   // LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF);  
  int start_time = millis();
  // read battery voltage and convert to 10ths of volts
  int voltsX10 = round(10* 2 * 3.3 *analogRead(A3)/1023);
  voltsX10=25; //  *** REMOVE THIS WHEN BATTERY USED ***
  // read temp/humid/press

  int countBuffer = 0;
  // Empty the software serial buffer
  while (Serial1.available()) {
    Serial1.read();
    countBuffer++;
  }

  Serial.print(F("Cleared Buffer: "));
  Serial.println(countBuffer);
  
  // wait for an R
  while (!Serial1.available() || Serial1.read() != 'R')
  {
    //Wait for an 'R' that significes the start of a message
    //  from the Maxbotix
  }
  //Read the distance measurement
  char buff[5]="    ";
  int count = 0;
  while (count < 4) {
    char c = Serial1.read();
    if (int(c) == -1) {
      continue;
    }else {
      buff[count] = c;
      count++;
    }   
  }
  buff[4] = 0;
  display.fill(0x00);
  digitalWrite(LED, HIGH);
  delay(5);
  digitalWrite(LED, LOW);
  char radiopacket[25] = "D";
  //itoa(packetnum, radiopacket + 13, 10);
  strcat(radiopacket, buff);
  strcat(radiopacket, "mm");
  char voltStr[3];
  itoa(voltsX10, voltStr, 10);
  strcat(radiopacket, voltStr);
  strcat(radiopacket, "v");
  char seq[2];
  itoa(packetnum%10, seq, 10);
  strcat(radiopacket, seq);
  packetnum++;
  Serial.print(F("Sending Msg: "));
  Serial.println(radiopacket);
  delay(10);
  display.printFixed (0,  0, "Sending...", STYLE_NORMAL);
  display.printFixed (0, 8, radiopacket, STYLE_NORMAL);
  
  radiopacket[19] = 0;
  rf95.send((uint8_t *)radiopacket, 20);

  delay(10);
  rf95.waitPacketSent();
  

  // Now wait for a reply
  uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
  uint8_t len = sizeof(buf);

  if (rf95.waitAvailableTimeout(1000))
  {
    // Should be a reply message for us now
    if (rf95.recv(buf, &len))
    {
      // delay(500);
      digitalWrite(LED, HIGH);
      delay(5);
      digitalWrite(LED, LOW);
      display.printFixed (0,  24, "Reply:", STYLE_NORMAL);
      display.printFixed (0, 36, (char*)buf, STYLE_NORMAL);
      display.printFixed (0, 48, "RSSI:", STYLE_NORMAL);
      char rs[5];
      itoa(rf95.lastRssi(), rs,10);
      display.printFixed (40, 48, rs, STYLE_NORMAL);
      digitalWrite(LED, LOW);
    }
    else
    {
      Serial.println(F("Receive failed"));
    }
  }
  else
  {
    Serial.println(F("No reply, is there a listener around?"));
    display.printFixed (0, 24, "No Reply", STYLE_NORMAL);
    display.printFixed (0, 36, "Anyone There?", STYLE_NORMAL);
  }
  delay(1000);
  display.fill(0x00);
  delay(8000);           
  int end_time = millis();
  Serial.print(F("Loop duration: "));Serial.println(end_time - start_time);
}
```

Article comparing libraries: [https://www.best-microcontroller-projects.com/ssd1306.html](https://www.best-microcontroller-projects.com/ssd1306.html)

---
2021-03-17 12:12:23

Nice overview of leaflet layers: [https://leaflet-extras.github.io/leaflet-providers/preview/](https://leaflet-extras.github.io/leaflet-providers/preview/)

Another implementation of Maidenhead in Leaflet: [https://gitlab.com/IvanSanchez/leaflet.maidenhead](https://gitlab.com/IvanSanchez/leaflet.maidenhead)

Nice explanation of the gridsquare formula here: [https://ham.stackexchange.com/questions/221/how-can-one-convert-from-lat-long-to-grid-square](https://ham.stackexchange.com/questions/221/how-can-one-convert-from-lat-long-to-grid-square)

Way of converting code to the bounds of the square here: [https://ham.stackexchange.com/questions/6114/convert-maidenhead-grid-square-to-lat-long-in-excel](https://ham.stackexchange.com/questions/6114/convert-maidenhead-grid-square-to-lat-long-in-excel)

lat: =(CODE(MID(A1,2,1))-65)*10 + VALUE(MID(A1,4,1)) + (CODE(MID(A1,6,1))-97)/24 + 1/48 - 90

lon: =(CODE(MID(A1,1,1))-65)*20 + VALUE(MID(A1,3,1))*2 + (CODE(MID(A1,5,1))-97)/12 + 1/24 - 180

---
2021-03-18 16:38:49

Working version of mothboth trip here: [https://github.com/edgecollective/mothbot-trip/tree/2183b1aae56f516f98a047230a68cd2553ea982e/ver_0.1-alpha/mothbot_getLoc](https://github.com/edgecollective/mothbot-trip/tree/2183b1aae56f516f98a047230a68cd2553ea982e/ver_0.1-alpha/mothbot_getLoc)

---
2021-03-18 17:29:40

Bayou with gridsquares: [https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/34ef9184bed1363f8898ec28e746165d1d451f58](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/34ef9184bed1363f8898ec28e746165d1d451f58)

Mothbot w/ gridsquares: [https://github.com/edgecollective/mothbot-trip/tree/bb1cc43d0a44d89632f710a618f8f8e894ab33a2](https://github.com/edgecollective/mothbot-trip/tree/bb1cc43d0a44d89632f710a618f8f8e894ab33a2)