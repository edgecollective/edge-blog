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

---
2021-03-18 17:43:02

Working url for bayou w/ gridsquares for now: http://192.168.1.163:5000/data/srercz3pjhsu/gridsquare/2

---
2021-03-19 13:39:45

1.54 in e-ink -- [ali express](https://www.aliexpress.com/item/33044560386.html?src=google&albch=shopping&acnt=708-803-3821&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&&albagn=888888&isSmbAutoCall=false&needSmbHouyi=false&albcp=1582410664&albag=59754279756&trgt=743612850874&crea=en33044560386&netw=u&device=c&albpg=743612850874&albpd=en33044560386&gclid=Cj0KCQjwl9GCBhDvARIsAFunhskAztz-CQQkCjD1O8Lmx1vdRxf57xUijdA-lED-6VsmU3RzPM0chX0aAle7EALw_wcB&gclsrc=aw.ds)

---
2021-03-19 16:54:40

SSD1306 power saving -- https://forum.arduino.cc/index.php?topic=565996.0

Article on OLED with powersave: [https://bengoncalves.wordpress.com/2015/10/01/oled-display-and-arduino-with-power-save-mode/](https://bengoncalves.wordpress.com/2015/10/01/oled-display-and-arduino-with-power-save-mode/)

---
2021-03-19 21:16:33

Added a gridsquare demo repo codebase here: 

[https://github.com/edgecollective/leaflet-gridsquare](https://github.com/edgecollective/leaflet-gridsquare)

---
2021-03-20 11:27:36

Gps sleep for NEO-6M -- [https://forum.arduino.cc/index.php?topic=497410.0](https://forum.arduino.cc/index.php?topic=497410.0)

Sending sleep command to Adafruit GPS [https://forums.adafruit.com/viewtopic.php?f=19&t=28121](https://forums.adafruit.com/viewtopic.php?f=19&t=28121)

Really great thread here: GPS sleep mode described here: [https://forums.adafruit.com/viewtopic.php?f=31&p=547903](https://forums.adafruit.com/viewtopic.php?f=31&p=547903)

---
2021-03-20 11:45:37

Distances, deg minute sec [https://www.usgs.gov/faqs/how-much-distance-does-a-degree-minute-and-second-cover-your-maps?qt-news_science_products=0#qt-news_science_products](https://www.usgs.gov/faqs/how-much-distance-does-a-degree-minute-and-second-cover-your-maps?qt-news_science_products=0#qt-news_science_products)

---
2021-03-21 11:10:33

e-ink feather friend [https://learn.adafruit.com/assets/86035](https://learn.adafruit.com/assets/86035)

selection guide -- https://www.amazon.com/Waveshare-Resolution-Electronic-Controller-Three-Color/dp/B074P3LWJQ/ref=sr_1_3?dchild=1&keywords=1.54+in+eink+raw&qid=1616340057&sr=8-3

black and white e-ink supports partial refresh, can refresh in 2 sec rather than 8 sec ... 

sparkfun ublox library [https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library](https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library)

adafruit gfx library [https://learn.adafruit.com/adafruit-gfx-graphics-library/graphics-primitives](https://learn.adafruit.com/adafruit-gfx-graphics-library/graphics-primitives)

---
2021-03-22 09:50:48

advantages of e-ink [https://www.electronicdesign.com/technologies/embedded-revolution/article/21805149/11-myths-about-epaper-displays](https://www.electronicdesign.com/technologies/embedded-revolution/article/21805149/11-myths-about-epaper-displays)

UTM method for topographic maps [https://www.usgs.gov/faqs/what-does-term-utm-mean-utm-better-or-more-accurate-latitudelongitude?qt-news_science_products=0#qt-news_science_products](https://www.usgs.gov/faqs/what-does-term-utm-mean-utm-better-or-more-accurate-latitudelongitude?qt-news_science_products=0#qt-news_science_products)

exploring options for diy waterproofing [https://hackaday.com/2017/12/26/exploring-options-for-diy-waterproofing/](https://hackaday.com/2017/12/26/exploring-options-for-diy-waterproofing/)

---
2021-03-24 10:48:02

[https://github.com/noopkat/avrgirl-arduino](https://github.com/noopkat/avrgirl-arduino)

[https://github.com/spaceneedle/Chromeduino](https://github.com/spaceneedle/Chromeduino)

[http://meow.noopkat.com/the-avrgirl-project-an-introduction/](http://meow.noopkat.com/the-avrgirl-project-an-introduction/)


[https://chrome.google.com/webstore/detail/avrchick/kpbgbcocfgjbmnpplcjlcammjdkgogba?hl=en](https://chrome.google.com/webstore/detail/avrchick/kpbgbcocfgjbmnpplcjlcammjdkgogba?hl=en)

[https://github.com/noopkat/oled-js](https://github.com/noopkat/oled-js)

[https://github.com/avrxml/AS6-Devices-XML/blob/master/ATmega1284P.xml](https://github.com/avrxml/AS6-Devices-XML/blob/master/ATmega1284P.xml)

[http://archive.fabacademy.org/2016/fablabkamplintfort/students/125/exercise14.html](http://archive.fabacademy.org/2016/fablabkamplintfort/students/125/exercise14.html)

compiled .hex using arduino ideo for 1284p

boards.js of avrgirl-arduino:

(pretty sure pageSize is correct; not sure about numPages ... just trying to get to 128K )

```
  {
    name: '1284p',
    baud: 115200,
    signature: Buffer.from([0x1e, 0x97, 0x05]),
    pageSize: 256,
    numPages: 500,
    timeout: 400,
    //productId: ['0x0043', '0x7523', '0x0001', '0xea60', '0x6015'],
    //productPage: 'https://store.arduino.cc/arduino-uno-rev3',
    protocol: 'stk500v1'
  },
```

command:

```
node cli.js flash -f Blink_1284.hex -a 1284p -p /dev/ttyUSB0
```

---
2021-03-24 13:20:30

reading software serial RX as pin 13 on 128p4.  

---
2021-03-24 13:50:33

neo 6m sleep: 
- [https://github.com/JoepSchyns/Low_power_TTGO_T-beam](https://github.com/JoepSchyns/Low_power_TTGO_T-beam)

The t-beam gps chip (Neo-6m) can be put into sleep by commisioning a power save command using proprietary UBX protocol over Neo's RX TX pins. In normal mode of operation the chip sends out location using NMEA protocol. Switching between these protocols can be done via pin 14 and 15 (see Data Sheet 1.15). However, as can be seen in the image below, these pins are not connected on the T-beam. During testing is established that the Neo does execute UBX commands in NMEA mode but does not send back acknowledgements. Therefore UBX commands, such as the sleep command, that do not require acknowledgements work out of the box. Nonetheless, protocols switching pins 14 and 15 are exposed on the t-beam. Thus the pins could be soldered to two GPIO pins by hand. By connectings these pins UBX acknowledgements could be enabled, this is however not an necessity.

analyzing neo6m module [http://forum.espruino.com/conversations/332295/](http://forum.espruino.com/conversations/332295/)

nice video on setup for neo 6m [https://www.youtube.com/watch?v=pHu2yvsFFgw](https://www.youtube.com/watch?v=pHu2yvsFFgw)

power saving for ublox [https://ukhas.org.uk/guides:ublox_psm](https://ukhas.org.uk/guides:ublox_psm) <-- this is the relevant guide!

[https://github.com/MCUdude/MightyCore](https://github.com/MCUdude/MightyCore)

[https://hackaday.io/project/25677-chirppp-serial-over-lora](https://hackaday.io/project/25677-chirppp-serial-over-lora) serial over lora

---
2021-03-25 08:31:45

Mightyduino [https://www.eevblog.com/forum/projects/mightyduino-diy-arduino-with-atmega644patmega1284p/](https://www.eevblog.com/forum/projects/mightyduino-diy-arduino-with-atmega644patmega1284p/)

universal power cord adapter [https://www.amazon.com/YIKU-Universal-5-5x2-1mm-Charging-Connector/dp/B0825SD9ZM/ref=asc_df_B0825SD9ZM/?tag=hyprod-20&linkCode=df0&hvadid=416794793908&hvpos=&hvnetw=g&hvrand=16523120492126351854&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001876&hvtargid=pla-973096075837&psc=1&tag=&ref=&adgrpid=95587149484&hvpone=&hvptwo=&hvadid=416794793908&hvpos=&hvnetw=g&hvrand=16523120492126351854&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001876&hvtargid=pla-973096075837](https://www.amazon.com/YIKU-Universal-5-5x2-1mm-Charging-Connector/dp/B0825SD9ZM/ref=asc_df_B0825SD9ZM/?tag=hyprod-20&linkCode=df0&hvadid=416794793908&hvpos=&hvnetw=g&hvrand=16523120492126351854&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001876&hvtargid=pla-973096075837&psc=1&tag=&ref=&adgrpid=95587149484&hvpone=&hvptwo=&hvadid=416794793908&hvpos=&hvnetw=g&hvrand=16523120492126351854&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001876&hvtargid=pla-973096075837)

-- 6ft 3 pack usb to barrel jack [https://www.amazon.com/3-Pack-2-1mm-Power-Barrel-Connector/dp/B07JGR7JJQ/ref=sr_1_3?dchild=1&keywords=5.5x2.1+mm+usb&qid=1616687264&s=industrial&sr=1-3](https://www.amazon.com/3-Pack-2-1mm-Power-Barrel-Connector/dp/B07JGR7JJQ/ref=sr_1_3?dchild=1&keywords=5.5x2.1+mm+usb&qid=1616687264&s=industrial&sr=1-3)

SRAM chip to place [https://www.digikey.com/en/products/detail/microchip-technology/23K256-I-SN/2001113](https://www.digikey.com/en/products/detail/microchip-technology/23K256-I-SN/2001113)

standby current: 4 uA

breakout for max m8q -- https://store.uputronics.com/index.php?route=product/product&product_id=84

sam m8q digikey [https://www.digikey.com/en/products/detail/u-blox-america-inc/SAM-M8Q-0-10/7393573?utm_adgroup=RF%20Receivers&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID&utm_term=&utm_content=RF%20Receivers&gclid=CjwKCAjw6fCCBhBNEiwAem5SO5nA43zsTMDsK6kBg4TkfYGYzt2dmapmRLDrsuMZJhlDdbG03UjLMhoCxygQAvD_BwE](https://www.digikey.com/en/products/detail/u-blox-america-inc/SAM-M8Q-0-10/7393573?utm_adgroup=RF%20Receivers&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID&utm_term=&utm_content=RF%20Receivers&gclid=CjwKCAjw6fCCBhBNEiwAem5SO5nA43zsTMDsK6kBg4TkfYGYzt2dmapmRLDrsuMZJhlDdbG03UjLMhoCxygQAvD_BwE)

sam m8q datasheet [https://www.u-blox.com/en/docs/UBX-16012619](https://www.u-blox.com/en/docs/UBX-16012619)

WOAH:

clone of adafruit featherwing using sam m8q [https://github.com/PaulZC/SAM-M8Q_GPS_FeatherWing/blob/master/LEARN.md](https://github.com/PaulZC/SAM-M8Q_GPS_FeatherWing/blob/master/LEARN.md)

clone of adafruti featherwing using max m8q [https://github.com/PaulZC/MAX-M8Q_GPS_FeatherWing](https://github.com/PaulZC/MAX-M8Q_GPS_FeatherWing)

interesting projects from paulzc [https://github.com/PaulZC?tab=repositories](https://github.com/PaulZC?tab=repositories)

hookup guide for sam m8q [https://learn.sparkfun.com/tutorials/sparkfun-gps-breakout-zoe-m8q-and-sam-m8q-hookup-guide/all](https://learn.sparkfun.com/tutorials/sparkfun-gps-breakout-zoe-m8q-and-sam-m8q-hookup-guide/all)

---
2021-03-25 14:30:50

gps basics written by sparkfun [https://learn.sparkfun.com/tutorials/gps-basics](https://learn.sparkfun.com/tutorials/gps-basics)

sam m8q breakout from sparkun schematic: [https://cdn.sparkfun.com/assets/3/c/2/2/e/SparkFun_Ublox_SAM-M8Q.pdf](https://cdn.sparkfun.com/assets/3/c/2/2/e/SparkFun_Ublox_SAM-M8Q.pdf)

sam m8q feather wing schematic: [https://github.com/PaulZC/SAM-M8Q_GPS_FeatherWing/blob/master/SAM-M8Q_GPS_FeatherWing.pdf](https://github.com/PaulZC/SAM-M8Q_GPS_FeatherWing/blob/master/SAM-M8Q_GPS_FeatherWing.pdf)

En is a true 'power disable' control line you can use to completely cut power to the SAM-M8Q. This is good if you need to run at ultra-low-power modes. By default this is pulled low (enabled). So pull high (to 3V) to disable the SAM-M8Q.

data on hot start / warm start neo 6m: [https://portal.u-blox.com/s/question/0D52p00008HKEEpCAP/i-have-been-using-a-neo-6m-how-do-i-ensure-that-it-always-performs-a-hot-start-every-time-it-powers-up](https://portal.u-blox.com/s/question/0D52p00008HKEEpCAP/i-have-been-using-a-neo-6m-how-do-i-ensure-that-it-always-performs-a-hot-start-every-time-it-powers-up)

p channel mosfet

[https://www.digikey.com/en/products/detail/diodes-incorporated/DMG3415U-7/2052768](https://www.digikey.com/en/products/detail/diodes-incorporated/DMG3415U-7/2052768)

eink friend schematic [https://cdn-learn.adafruit.com/assets/assets/000/057/645/original/adafruit_products_schem.png?1531712746](https://cdn-learn.adafruit.com/assets/assets/000/057/645/original/adafruit_products_schem.png?1531712746)

---
2021-03-26 19:41:58

eink friend: [https://cdn-learn.adafruit.com/assets/assets/000/086/035/original/adafruit_products_Feather_eInk_Friend_sch.png?1576774972](https://cdn-learn.adafruit.com/assets/assets/000/086/035/original/adafruit_products_Feather_eInk_Friend_sch.png?1576774972)

eink feather friend: [https://cdn-learn.adafruit.com/assets/assets/000/086/035/original/adafruit_products_Feather_eInk_Friend_sch.png?1576774972](https://cdn-learn.adafruit.com/assets/assets/000/086/035/original/adafruit_products_Feather_eInk_Friend_sch.png?1576774972)

[https://hackaday.com/2015/07/24/it-keeps-on-going-and-arduino-edition/](https://hackaday.com/2015/07/24/it-keeps-on-going-and-arduino-edition/)



```
70 μA is a huge amount of current for a sleeping microcontroller. In a well-designed system, sleep currents under 1μA should be quite possible. I haven’t watched the whole video, but here are some general strategies, in no particular order:

* Turn off all unnecessary clocks, and run necessary clocks as slow as possible while sleeping. If you can get by with just waking up on an external interrupt, all clocks can be off while asleep. If you need to wake up periodically, use a low-power RC oscillator (like the one for the watchdog timer on the mega328p). When powered on, there is a tradeoff: a faster clock requires more power, but means that the work can be finished and the chip can go back to sleep sooner.

* Use the power reduction registers to turn off all unused peripherals all the time, and used peripherals when they are not needed, especially if there isn’t a long reinitialization time when powering them back on.

* Turn on the pull-up resistors on all unused GPIO pins. If they are left floating, the inputs might flip back and forth randomly, needlessly consuming power.

* Turn off brownout detection if you can. It consumes a significant amount of power. If erratic behavior (and possible memory corruption) is intolerable when your batteries are dying, some microcontrollers have a sampled BOD mode that uses much less power. You can also implement this yourself in software with an ADC and bandgap (or other stable reference), checking your system voltage only periodically (like once a day) and shutting down before it gets too low.

* Voltage dividers, like the one for the photocell in this project, consume power—current flows from power to ground through the two series resistors. Size the resistors as large as practically possible, and bias the voltage divider with a GPIO pin that can be turned off when the sensor is not needed rather than just tying it to Vcc.

* Voltage regulators can have significant quiescent current draw. If at all possible, power the circuit directly from batteries without a regulator. A pair of AAs, or a CR2032 coin cell are both good 3V supplies, and most microcontrollers are very happy with this. If regulators must be used, specifically choose ones with very low quiescent draw.

* Electrolytic capacitors can also have high leakage currents—avoid them in power supplies or choose low-leakage versions.

* Rechargeable batteries are generally a poor choice for long-life low power applications. Self-discharge rates can often be higher than the load of the circuit itself! Non-rechargeable lithium batteries are a good in these applications.

* Generally, less power is consumed at lower voltages, so running as low as is practical can be advantageous. However, often sensors and other devices will have higher voltage requirements than the MCU, and the complexity (and additional power draw) of translating between multiple voltages often isn’t worth it, nor is regulating down from whatever battery voltages are available (unless it’s a significant drop and you’re using good switching regulators). Depending on your battery chemistry, running at the minimum voltage might also mean that you can only run your battery down so far before you start browning out.
```

```
Instead of a transistor I prefer a (second) LDO with low quiescent current draq like the TPS 783xx with enable input. So you can power-off all external components not needed.
I do a lot of low power applications at work (with MSP, never had to handle Atmel for low power) and with the “usual” tricks you and bdm mentioned >1uA applications are no problem
So here we go, throw your AA batteries out of the desing an go with a cr2302 cell, easy as 123 :D
```

tps783xx [https://www.ti.com/lit/ds/symlink/tps783.pdf?ts=1616850726580&ref_url=https%253A%252F%252Fwww.google.com%252F](https://www.ti.com/lit/ds/symlink/tps783.pdf?ts=1616850726580&ref_url=https%253A%252F%252Fwww.google.com%252F)

total supply on device needed: 
- gps: 67 mA
- 

so: 
- use MCP1702/3 for main LDO
- use ap2112k-3.3 to power subcircuit
- uno might only do eink and gps
- atmega adds sd card and lora
- pinouts for other displays?

uno-based version that uses oled and gps and uno and is all dip

smt version should use SAM or CAM M8Q

---
2021-03-27 19:36:11

[https://www.eevblog.com/forum/beginners/potting-a-battery/](https://www.eevblog.com/forum/beginners/potting-a-battery/)

```
Have you considered using AA batteries ? 

You can get lithium based AA batteries like Energizer Ultimate Lithium that have something like 3500mAh at around 1.4v..1.7v ... see : http://data.energizer.com/pdfs/l91.pdf
They're not cheap at around 2-3$ each but it's way cheaper than your 14$ battery. 
Regular alkaline AA batteries get close to 2500-2800 mAh and discharge down to around 1..1.2v

You can buy battery holders that solder to the circuit board and then you can pot everything leaving just the battery contacts on the outside. Then insert battery and use hot glue or that selastic / flexible gunk / whatever... something to lock it in the battery holder to prevent vibrations from breaking contact.


There are microcontrollers that run from battery but if you need 3v, why not just use a very efficient voltage doubler IC... would be over 95% efficient at a few mA of current.
Here's some examples: 
1. TPS6031x series : 0.9v..1.8v , 2 outputs,  1: 2xVin max 40mA, 2: regulated 3.3v 20mA  up to 90% efficiency : http://www.ti.com/lit/ds/symlink/tps60310.pdf
2. TPS6030x series : pretty much same thing? http://www.ti.com/lit/ds/symlink/tps60300.pdf

The above are ~ 1.7$ in 10pcs or higher and need only 5 ceramic capacitors to work. This + battery is still way cheaper than 14$

There's also very efficient switching regulators.. here's ex

<1$ / 10+ pcs TLV61225 - min 0.7v in, fixed 3.3v out, 94% efficiency, needs only 2 ceramic caps and inductor  : http://www.ti.com/lit/ds/symlink/tlv61225.pdf
There's also TLV61224, 

TPS61261 - min 0.8v, fixed 3.3v out or adjustable options, up to 95% efficiency, same min. parts : http://www.ti.com/lit/ds/symlink/tps61260.pdf

Even when you add the price of a surface mounted ceramic inductor and a bunch of ceramic capacitors, you're still below 2$.

There's loads of microcontrollers from Microchip that use less power and can run at lower voltages (like 1.8v..3.6v for example). There's also Silicon Labs with their BusyBee micros that can work at low voltages and they're quite nice micros.
```

[https://www.ti.com/lit/ds/symlink/tlv61225.pdf](https://www.ti.com/lit/ds/symlink/tlv61225.pdf)

[https://www.e-education.psu.edu/geog585/node/708](https://www.e-education.psu.edu/geog585/node/708)

multiple spi buses in the atmega1284p [https://feilipu.me/2015/02/17/avr-atmega-usart-spi-mspim/](https://feilipu.me/2015/02/17/avr-atmega-usart-spi-mspim/)

---
2021-03-28 17:51:24

Rotary position switch digikey [https://www.digikey.com/en/products/detail/grayhill-inc/94HBB16T/726321](https://www.digikey.com/en/products/detail/grayhill-inc/94HBB16T/726321)

nice rotary switch SMT digikey [https://www.digikey.com/en/products/detail/nidec-copal-electronics/SH-7010TB/2057868](https://www.digikey.com/en/products/detail/nidec-copal-electronics/SH-7010TB/2057868)

through hole, black, nice color [https://www.digikey.com/en/products/detail/nidec-copal-electronics/SD-2010/948380](https://www.digikey.com/en/products/detail/nidec-copal-electronics/SD-2010/948380) <---- this is the one to get!!

1000 uF capacitor [https://www.digikey.com/en/products/detail/nichicon/UVZ1A102MPD1TD/4342138?utm_adgroup=Aluminum%20Electrolytic%20Capacitors&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_Capacitors_NEW&utm_term=&utm_content=Aluminum%20Electrolytic%20Capacitors&gclid=Cj0KCQjw0oCDBhCPARIsAII3C_EvNOyYeWGjdHGnfCCgVUi6RgGF35Gjn5o3K1FT3lty7302KYbdnSgaAj5EEALw_wcB](https://www.digikey.com/en/products/detail/nichicon/UVZ1A102MPD1TD/4342138?utm_adgroup=Aluminum%20Electrolytic%20Capacitors&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_Capacitors_NEW&utm_term=&utm_content=Aluminum%20Electrolytic%20Capacitors&gclid=Cj0KCQjw0oCDBhCPARIsAII3C_EvNOyYeWGjdHGnfCCgVUi6RgGF35Gjn5o3K1FT3lty7302KYbdnSgaAj5EEALw_wcB)

garmin foretex [https://www.amazon.com/Garmin-010-01772-00-Foretrex-601-inches/dp/B073NXKWYN/ref=psdc_2230642011_t1_B07RTD2PMT?th=1](https://www.amazon.com/Garmin-010-01772-00-Foretrex-601-inches/dp/B073NXKWYN/ref=psdc_2230642011_t1_B07RTD2PMT?th=1)

military grid reference system [https://en.wikipedia.org/wiki/Military_Grid_Reference_System](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)

mgrs vs maidenhead [https://www.usna.edu/Users/oceano/pguth/md_help/html/mgrs_utm.htm](https://www.usna.edu/Users/oceano/pguth/md_help/html/mgrs_utm.htm)

---
2021-03-29 09:10:01

![](/img/eink/signal-2021-03-29-090916.jpeg)

---
2021-03-31 08:37:52

espruino discussion on nordic chip [here](http://forum.espruino.com/conversations/351086/)

discussion of nrf52840 [here](https://forum.arduino.cc/index.php?topic=636292.0)

continued [here](https://forum.arduino.cc/index.php?topic=673224.0) --- 

---
2021-03-31 09:05:26

Cave pearl post on the atmega1284p [https://thecavepearlproject.org/2020/05/11/build-an-atmega-1284p-based-data-logger/](https://thecavepearlproject.org/2020/05/11/build-an-atmega-1284p-based-data-logger/)

---
2021-03-31 09:25:20

dual screens [https://thecavepearlproject.org/2020/11/15/adding-two-oled-displays-to-your-arduino-logger-with-no-library/](https://thecavepearlproject.org/2020/11/15/adding-two-oled-displays-to-your-arduino-logger-with-no-library/)

espruino firmware esp32 [http://www.esp32learning.com/information/espruino-on-an-esp32.php](http://www.esp32learning.com/information/espruino-on-an-esp32.php)

[https://www.espruino.com/ESP32](https://www.espruino.com/ESP32)

---
2021-03-31 13:01:06

ESP32-S2 -- circuitpython -- sleep! Magtag -- [https://www.adafruit.com/product/4800][https://www.adafruit.com/product/4800]

adafruit magtag -[https://www.digikey.com/catalog/en/partgroup/adafruit-magtag-2-9-grayscale-e-ink-wi-fi-display/113912](https://www.digikey.com/catalog/en/partgroup/adafruit-magtag-2-9-grayscale-e-ink-wi-fi-display/113912)

on digikey [https://www.digikey.com/en/products/detail/adafruit-industries-llc/4800/13616787?s=N4IgjCBcoLQBxVAYygMwIYBsDOBTANCAPZQDa4ArAEwIC6AvvYVWSACxwAMnIDQA](https://www.digikey.com/en/products/detail/adafruit-industries-llc/4800/13616787?s=N4IgjCBcoLQBxVAYygMwIYBsDOBTANCAPZQDa4ArAEwIC6AvvYVWSACxwAMnIDQA)

itsy bitsy bluefruit [https://learn.adafruit.com/adafruit-itsybitsy-nrf52840-express](https://learn.adafruit.com/adafruit-itsybitsy-nrf52840-express)

meshtastic dicussion around keyboard [https://meshtastic.discourse.group/t/autonomous-device-with-q10-keyboard-and-ili9341/438/13](https://meshtastic.discourse.group/t/autonomous-device-with-q10-keyboard-and-ili9341/438/13)

nice docs for lora communicator project [https://github.com/manacake/docs.greycat.co/](https://github.com/manacake/docs.greycat.co/)

nice github repo for blackberry keyboard [https://github.com/arturo182/BBQ10KBD](https://github.com/arturo182/BBQ10KBD)

blackberry q10 adafruit description [https://blog.adafruit.com/2019/01/14/interfacing-a-blackberry-q10-keyboard-into-your-microcontroller-project-blackberry-arduino-microcontroller/](https://blog.adafruit.com/2019/01/14/interfacing-a-blackberry-q10-keyboard-into-your-microcontroller-project-blackberry-arduino-microcontroller/)

and arduino thread [https://forum.arduino.cc/index.php?topic=355709.0](https://forum.arduino.cc/index.php?topic=355709.0)


q10 keyboard on ebay [https://www.ebay.com/c/1731749316](https://www.ebay.com/c/1731749316)

and on eevblog here [https://www.eevblog.com/forum/beginners/how-to-connect-to-a-very-very-challanging-blackberry-q10-keyboard-connector/msg735622/#msg735622](https://www.eevblog.com/forum/beginners/how-to-connect-to-a-very-very-challanging-blackberry-q10-keyboard-connector/msg735622/#msg735622)

stm32 bootloader vis espruino [http://www.espruino.com/Serial+Bootloader](http://www.espruino.com/Serial+Bootloader)

---
2021-03-31 17:18:40

ble uart [https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer/ble-uart-example](https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer/ble-uart-example)

Q10 on Ebay [https://www.ebay.com/c/1731749316](https://www.ebay.com/c/1731749316)

nice library for ublox modules [https://github.com/loginov-rocks/UbxGps](https://github.com/loginov-rocks/UbxGps)

sam m8q on digikey [https://www.digikey.com/en/products/detail/u-blox/SAM-M8Q-0-10/7393574](https://www.digikey.com/en/products/detail/u-blox/SAM-M8Q-0-10/7393574) -- $25

max m8q on digikey [https://www.digikey.com/en/products/detail/u-blox/MAX-M8Q-0/6150636](https://www.digikey.com/en/products/detail/u-blox/MAX-M8Q-0/6150636) -- $21 

ble uart [https://learn.adafruit.com/bluefruit-le-connect](https://learn.adafruit.com/bluefruit-le-connect)

[https://www.hackster.io/mitchwongho/read-phone-notifications-using-esp-eb0ad4](https://www.hackster.io/mitchwongho/read-phone-notifications-using-esp-eb0ad4)

[https://play.google.com/store/apps/details?id=com.lianhezhuli.btnotification](https://play.google.com/store/apps/details?id=com.lianhezhuli.btnotification)

[https://play.google.com/store/apps/details?id=com.lhzl.mtwearpro](https://play.google.com/store/apps/details?id=com.lhzl.mtwearpro)

---
2021-04-07 20:31:34

images over lora

https://github.com/javl/slowimage
and -- oh goodness!  https://ieeexplore.ieee.org/document/8875321
both on transmitting images via lora
￼
and -- oooh! https://blog.adafruit.com/2020/11/24/transmitting-sound-and-image-over-a-lora-link-lora-radio/
https://github.com/bwhitman/loracamera
