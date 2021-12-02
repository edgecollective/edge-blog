---
pageTitle: DIY CO2 Monitoring
layout: layout.njk
date: Last Modified
updated: 2020-10-23
tags: notes 
image: /img/co2/rev_a_proto.jpeg
blurb: Notes on inexpensive CO2 monitoring options
---

## Background

The following is a development notebook for constructing a DIY CO2 monitor.  


# Project Updates

---
2021-02-05 10:07:42

## Update 05 Feb 2021

TODOS:
- Pi screen display 
- RTC to keep track of time
- LoRa gateway setup  
- Jupyter install on Pi
- Forced calibration procedure
- Set interval from Pi

---
2021-01-30 08:54:11

## Update 30 Jan 2021


Bayou-CO2 up and running.

Feedmaps prototyped.  Backend needs work.

Pi set up as Bridge.  Can store data locally on Pi without internet connection.

Heltec version, REV_F working.

MicroSD seen as most reliable and accessible way to set up wifi + Bayou credentials on device.  Heltec difficult to set up this way. Pivoting to FeatherESP32 in next PCB design.  

Next design: Feather ESP32-based, and designed as 'bottom plate' for a clear plastic enclosure (1591BT).  Right-angle USB pointing down and buttons on bottom.  (MicroSD on bottom too? Would allow for header to use Adafruit board if useful / option).  Stand-offs for mounting on wall. If doing this, could also put LoRa on bottom, too.  That way the SMT parts get soldered on one side, and can conserve space on other side.)

Lending library design is main focus.  System that can collect data on-site.  Can also think about 'sync', with replication of feeds into the cloud.  

Pi as bridge allows for local data storage, and optional sync to cloud.  Can use hotspot with ethernet jack (widely avail).  

Same design could accomodate a Feather M0 LoRA as a remote node, with different firmware, taking credentials from microSD.  Or the codebase could use ESP32 + LoRa.  Might be easier to do that, with a software 'switch'. Not sure. Can prototype both ways.






---

## Goals for Version 1
(Updated: 2020-12-09 08:31:32)

Key to assessment of work items:
- [X] -- "Done"
- [EASY] -- Won't take much additional effort or time.  A day or two or work.
- [MEDIUM] -- Straightforward, but could take up to a week of work.
- [HARD] -- Will take a lot of time / effort.  May need to reconsider. 

### Hardware + firmware
- Ability to turn of autocalibration [X]
- Ability to trigger calibration value in firmware [X]
- Http PUT/POST to online server [X]
- Gardware for pressure compensation [X]
- Firmware compensation using pressure input [SHORT]
- 'Calibrate' button that works on interrupt & is debounced  [MEDIUM]
- Reasonable first pass at enclosure that respects the scd30 design guidelines [MEDIUM]

### Data server
- Initial prototype using 'nosql' data server with simple public key / private key design for accessing / posting to feeds [X]
- Redo initial prototype using Node + Express + Postgresql server + database backend [MEDIUM]
- Add simple user login to permit data feed creation [HARD]

### Client data viz / analysis
- Initial simple graphing and location of sensors on a floorplan [X]
- Feed graphs can be show in summary graphical form in a 'list' [X]
- Client that takes in multiple data feeds from Bayou [HARD]
- Client can choose which available parameters to display [HARD]
- Feed location on a floorplan / map can be display and 'highlighted' by clicking on / hovering over feed list [MEDIUM]
- Thresholds can be displayed on the graph as lines or bands [SHORT]
- User can define / select thresholds on a per-graph basis [MEDIUM]
- Demo of using Jupyter to download and analyze data [EASY]
- Demo of using R to download and analyze data [MEDIUM] 

### Science / calibration / validation
- Demonstrate calibration with 'fresh air' [EASY]
- Demonstrate calibration with CO2 cannister (and then matching fresh air on later measurement) [HARD]
- Comparison of scd30 modules against one another [EASY]
- Comparison of scd30 modules with k30, z19 [MEDIUM]

---

## Goals for Version 2

### User data viz / analysis workflow
- Client that takes in data feeds from multiple data feed sources (e.g. Adafruit.io)
- Data feed parameters can be overlaid on same graph and compared

### Hardware + firmware
- bluetooth configuration of parameters
- lora gateway + lora remote nodes
- MQTT functionality

### Science / calibration / validation
- Import parameters from various air / infection 'models' and apply as thresholds to graph


---

## Update 2020-12-07

### Hardware and Firmware

Latest accomplishments:
- Several working hardware designs, incorporating variously the Feather M0 LoRa, Feather ESP32, and Heltec Wifi 32 LoRa V2.  Focus is on the Sensiron SCD30 CO2 module, as it is well-reviewed, has straightforward power requirements (3.3V), and is well-documented.
- Current hardware designs incorporate pressure sensor for ambient pressure compensation, and an OLED display.
- Experiments with an electret microphone (using MAX466 amplifier) have been promising.  
- Preliminary light sensor experiment failed due to (we think) to protocol conflicts; may pause on this until a later version. 
- Captured data for overnight, morning and evening activities, and simultaneous deployment of two side-by-side SCD30 sensors, and in process of analyzing / reviewing.

Next steps:
- Working to incoroprate an interrupt-based button activation for 'forced calibration'.  Debouncing code will be necessary for this.  SCD30 library from Sparkfun includes the force calibration code.  
- Currently reviewing best practices around enclosure design, sensor placement, and field calibration for SCD30. 
- Currently out ESP32 micro workflow; a fully-custom PCB based on the ESP32 will be designed to reduce overall costs.
- Deciding on pin breakouts / interfaces.  i2c (including qwiic connector), serial, analog.
- Implementing wifi and feed configuration via local wifi / Bluetooth.
- Backup battery management.  Battery will be useful in cases where sensor must be brought outdoors temporarily for calibration purposes.
- Comparison of 'force calibrated' SCD30 (x2), K30, and Z19 sensors, co-deployed.


### Server

Latest accomplishments:
- Bayou data storage is operation and working solidly.  Uses 'nosql' / 'flat' database scheme (pouchdb / leveldb), and fastify for server.  

Next steps:
- Looking to replace Bayou backend with a node + express + Postgresql alternative.
- Beginning to experiment with a React-based front-end.
- Working on demonstration of Reach-based mapping of sensor location (on map / floorplan) with most recent values and associated historical graphs.

### Data Analysis

Latest accomplishments:
- Have begun experimenting with workflows in Jupyter.

Next steps:
- Basic analysis / workflow leading to identification of peak values, averages, baseline.
- Reproducing the workflow in R.

---
2021-01-16 21:19:52

## REV_E Parts list

- **PVOS CO2 Rev_E PCB** -- [oshpark](https://oshpark.com/shared_projects/Sqhe5YpQ) | [github](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_e/atkins)
- [Sensirion SCD30 CO2 sensor](https://www.sparkfun.com/products/15112)
- [Heltec Wifi 32 LoRa V2](https://www.amazon.com/MakerFocus-Development-Bluetooth-0-96inch-Display/dp/B076MSLFC9/ref=sr_1_4?crid=1PRQFMZWK1EA9&dchild=1&keywords=heltec+lora+esp32&qid=1610850196&s=electronics&sprefix=heltec%2Celectronics%2C149&sr=1-4)
- [3.7V Lithitum Rechargeable battery (NOTE! JST1.25 connector)](https://www.amazon.com/gp/product/B07CXNQ3ZR/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
- [Adafruit BMP388](https://www.adafruit.com/product/3966) (optional pressure sensor)
- [Adafruit MAX4466](https://www.adafruit.com/product/1063) (optional mic)
- 2 X [uxcell Momentary PCB Side Mounting Fixed Bracket Pushbutton Push Button Tact Tactile Switch DIP 2 Terminals 6mmx6mmx12mm](https://www.amazon.com/gp/product/B07JKWC6LH/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&psc=1)


## Index

More or less random bookmarks into the notes file, for reference:

- [Feather Hookup Guide for K30](#feather)
- [Description of remote node + gateway setup](#gatewaysetup).
- [Peng and Jimenez paper on CO2 and COVID infection probability](#jimenez)
- [Rev_A build of Feather-based SCD30 board](#rev_a_build)
- [Thoughts on calibration as of 24 NOV 2020](#calibration)
- [Nov 25 update](#nov25)
- [Initial Microphone Experiment Nov 28](#mic_experiment)
- [Comparing two SCD30 sensors](#compare_scd30)
- [Heltec Wifi Lora 32 v 2 -- Schematic and Pinouts](https://community.hiveeyes.org/t/heltec-wifi-lora-32/3125)
- [Making an OpenSCAD enclosure for Rev E](#openscad)
- [New References on CO2 indoor ventilation assessment, March 13 2020](#refs_03_13)

--- 
2020 SEPT 29

## Experiments with K30 from CO2METER.com

[Online description of K30](https://www.co2meter.com/products/k-30-co2-sensor-module)

[K30 Datasheet](http://co2meters.com/Documentation/Datasheets/DS_SE_0118_CM_0024_Revised9%20(1).pdf)

Needs 5V power minimum (actually, looks like it's best run at 6-9V); meanwhile, **Logic levels for the UART are at 3.3V**.

Useful info on logic levels / etc from the datasheet:

|[ ![fig2](/img/co2/logic_levels.png)](/img/co2/logic_levels.png)|
|:--:|
| Table 1 from the [K30 datasheet](http://co2meters.com/Documentation/Datasheets/DS_SE_0118_CM_0024_Revised9%20(1).pdf). |

Meanwhile, though -- good advice on connecting to signals that run at higher voltage from JeeLab, [here](https://jeelabs.org/2010/12/16/voltage-3-3-vs-5/index.html).  Punchline -- can add a 1K resistor in series with signal as protection.

|[ ![fig2](/img/co2/fig2.png)](/img/co2/fig2.png)|
|:--:|
| Figure 2 from the [K30 datasheet](http://co2meters.com/Documentation/Datasheets/DS_SE_0118_CM_0024_Revised9%20(1).pdf). |

- 'G0' -- GND
- 'G+' -- Voltage input (5V to 9V)
- 'TxD, RxD' -- UART
- 'OUT1' -- Analog output (alternative way of getting the data)

Datasheet says: should avoid connecting analog and digital ground pins externally in order to avoid ground loops 

|[ ![fig2](/img/co2/analog_outputs.png)](/img/co2/analog_outputs.png)|
|:--:|
| Analog outputs. |

|[ ![fig2](/img/co2/calibration.png)](/img/co2/calibration.png)|
|:--:|
| Calibration. |

## Connecting to an Arduino

### Via I2C

[Connecting a K30 to an Arduino via I2C](http://www.co2meters.com/Documentation/AppNotes/AN102-K30-Sensor-Arduino-I2C.pdf)

This suggests using 6 to 9V input. (Might be good to upgrade the spec on the MCP1702 voltage reg so we can take > 6V input on the Mothbot).  Needs to be able to provide 500mA.  So: direct from battery power is likely best.

### Notes on using a Feather

[Schematic](https://cdn-learn.adafruit.com/assets/assets/000/032/914/large1024/feather_schem.png?1465421956) of the Feather M0 Lora.

Datasheet for the AP2112-3.3 voltage regulator used on the feather is [here](https://www.diodes.com/assets/Datasheets/AP2112.pdf).


From the AP2112K datasheet -- 6V max allowed on Feather:

|[ ![fig2](/img/co2/feather_voltage_input.png)](/img/co2/feather_voltage_input.png)|
|:--:|
| UART connection. |


### Via UART

Note: **Logic levels for the UART are at 3.3V**.

[Connecting a K30 to an Arduino via UART](http://www.co2meters.com/Documentation/AppNotes/AN126-K3x-sensor-arduino-uart.pdf)

|[ ![fig2](/img/co2/uart_closeup.png)](/img/co2/uart_closeup.png)|
|:--:|
| UART connection. |

|[ ![fig2](/img/co2/first_readings.png)](/img/co2/first_readings.png)|
|:--:|
| First readings. |

|[ ![fig2](/img/co2/breath_test.png)](/img/co2/breath_test.png)|
|:--:|
| Blowing on the sensor and then letting it recover. |

Edge Collective copy of the library for UART connection is [here](https://github.com/edgecollective/co2-kseries) (replica of that provided by CO2 Monitor [here](http://www.co2meters.com/Documentation/AppNotes/AN126-K3x-sensor-arduino-uart.zip)).

## SSD1306 Display

Guide [here](https://randomnerdtutorials.com/guide-for-oled-display-with-arduino/) for hookup to Arduino UNO.

## UART + SSD1306 Display

Example code [here](https://gist.github.com/dwblair/310acc6f8dafa8f82af713200ceda577).

## <a name="gatewaysetup"></a> Remote LoRa CO2 Node and Heltec Gateway sending to FarmOS

Using a [Mothbot](https://edgecollective.io/posts/notes/mothbot/) to connect to the K30 sensor over UART and send via LoRa to a [Heltec](https://www.amazon.com/MakerFocus-Development-Bluetooth-0-96inch-Display/dp/B076MSLFC9) Wifi-LoRa gateway, posting to [FarmOS](https://edgecollective.farmos.net/farm/sensor/heltecone).

Code for remote and gateway is [here](https://github.com/edgecollective/co2-remote-and-gateway).

|[ ![fig2](/img/co2/remote_v1.jpg)](/img/co2/remote_v1.jpg)|
|:--:|
| Mothbot remote node connected to K30 CO2 sensor. |

|[ ![fig2](/img/co2/mothbo.jpg)](/img/co2/mothbo.jpg)|
|:--:|
| Closeup of Mothbot. |

|[ ![fig2](/img/co2/k30.jpg)](/img/co2/k30.jpg)|
|:--:|
| Closeup of K30 CO2 sensor. |

|[ ![fig2](/img/co2/heltec_gateway.jpg)](/img/co2/heltec_gateway.jpg)|
|:--:|
| Heltec Wifi-LoRa gateway |

|[ ![fig2](/img/co2/farmos_graph.png)](/img/co2/farmos_graph.png)|
|:--:|
| Graphing on FarmOS |

## Misc

Would be nice to develop useful ways of connecting to some standard hardware (e.g. Feathers, etc). 

## CO2 and Greenhouses 

[Article](https://www.greenhousegrower.com/production/monitoring-carbon-dioxide-in-the-greenhouse/) on measuring CO2 in greenhouses:

> Until recently, the vast majority of growers in the U.S. did not measure CO2 or use it to enrich their greenhouses. However, during the winter, CO2 levels can quickly become limiting in unventilated greenhouses full of plants on cold and sunny days. Over the past 10 years, we have also seen greenhouse growers seal up their greenhouses in an effort to control their heating bills during the winter. Other growers, especially in northern latitudes, have invested in supplemental lighting because of the numerous benefits, from improved quality and yields to reduced production time. An apparent result of tightly sealing the greenhouse is increased humidity and condensation. A not-so-apparent result of reducing air infiltration is a reduction of CO2 levels within the greenhouse below ambient levels found outdoors.

----

Oct 9 2020:

Maybe a good configuraiton is to have the sensor powered via a 7.4V rechargeable lith-ion, while the micro attached has its separate battery voltage?

----

oct 13 2020:

Recreating the prototype but using a Feather M0 instead ...

now we want to use Hardware Serial instead of Software Serial ...

We noticed a [Twitter thread](https://twitter.com/linseymarr/status/1314582969168920577?s=20) by Linsey Marr on Oct 8 2020 that references using a CO2 monitor to assess activity in a space re: COVID-19; they use the HOBO CO2 monitor pictured in Fig C below.


|[ ![figC](/img/co2/hobo_c02.jpeg)](/img/co2/hobo_c02.jpeg)|
|:--:|
| Fig C. HOBO CO2 Logger used to assess activity level / air turnover in a college gym.  |

Note: some power options (if plugging into the wall):  use a 9V power wall wart, and drop down voltage to 5V; or use a 5V wall wart (more commong), and boost up to 9V.

If the latter, probably need to check on current (mA) requirements of the K30.

Offhand, seems like drop down is easier; boosting to 6V / 9V is a bit odd.


### <a name="feather"></a>Feather Hookup Guide for K30


|[ ![figA2](/img/co2/feather_setup.jpg)](/img/co2/feather_setup.jpg)|
|:--:|
| Fig A2.  Feather M0 connected to a K30 sensor. |


Feather firmware is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/v1/featherm0_K30).

Wiring for test:

- Connect TXD (K30, see Fig A below) to RX0 (Feather);
- Connect RXD (K30, see Fig A below) to TX1 (Feather);
- Connect Feather GND to 6V Battery GND;
- Connect 6V battery Power to Feather to K30 Power in (labeled "5V" in fig A below)
- Power Feather via USB (for initial test)

|[ ![figA](/img/co2/uart_closeup.png)](/img/co2/uart_closeup.png)|
|:--:|
| Fig A.  UART connection on the K30.  When connecting to the Feather, connect TXD (K30) to RX0 (Feather) and RXD (K30) to TX1 (Feather). |


|[ ![figB](/img/co2/feather_co2_decay_test.png)](/img/co2/feather_co2_decay_test.png)|
|:--:|
| Fig B.  Data from Feather, plotted in Arduino plotter utility.  Data shows breathing on sensor at a particular time and and watching decay. Time interval unit is 2 seconds.|

UPDATE: looks like the K30 can be powered by up to 14V.  So a 12V boost, or power supply, could be an option.

Started by closing door, sitting next to sensor.   At 150 time mark, opened door and left room.  Then At 250 time mark, reentered room and closed door. At 280 time mark, started a conversation.

Cf. 'room_test.png'.

'room_test_later.png' -- had a phone call

'room_test_later_2.png' -- left room for a bit with door open, then emilie came back and worked with the door open.

## Reference for typical / expected CO2 values

Nice discussion [here](https://inspectapedia.com/hazmat/CO2_Typical_Levels.php), thanks to Laura P.

## Other CO2 Sensors

### MH-Z14:

Specifically mentions NDIR.

For sale on [Banggood](https://usa.banggood.com/NDIR-CO2-Sensor-MH-Z14A-PWM-NDIR-Infrared-Carbon-Dioxide-Sensor-Module-Serial-Port-0-5000PPM-Controller-p-1248270.html?utm_source=googleshopping&utm_medium=cpc_organic&gmcCountry=US&utm_content=minha&utm_campaign=minha-usg-pc&currency=USD&createTmp=1&utm_source=googleshopping&utm_medium=cpc_bgs&utm_content=frank&utm_campaign=frank-ssc-us-all-1108&ad_id=395572890419&cur_warehouse=CN).
Another option 

### MH-Z19:

Mentions infrared. This is the one that Craig used / that I have in my possession now.

For sale on [Banggood](
https://usa.banggood.com/MH-Z19-MH-Z19B-Infrared-CO2-Sensor-Module-Carbon-Dioxide-Gas-Sensor-for-CO2-Monitor-0-5000ppm-MH-Z19B-NDIR-with-Pin-p-1693604.html) for $20.

Goal as of 13 OCT 2020: get this up and running in parallel to the K30 and see how they compare with the 'ambient' test.

Nice [article](https://www.circuits.dk/testing-mh-z19-ndir-co2-sensor-module/) on testing out the Z19 on a Raspberry Pi.

Update 15 OCT 2020: Just found a fairly official-looking Arduino library for the MH-Z19 [here](https://github.com/WifWaf/MH-Z19) by WifWaf.

In that repo they have some nice notes about calibration.  The Z19 allows us to turn autocalibration off (which seems useful -- otherwise it is using the lowest reading in a 24 hour period as '400 ppm').  Would be good to experiment with this. 

Also, here's [another library for the MH-19](https://github.com/tobiasschuerg/MH-Z-CO2-Sensors) -- looks a bit older.  Going to try the WifWaf one above for now.

Note that the WifWaf github MH-Z19 lib is already in the Arduino online Lib repo, can just install via Library Manager in IDE.

Update 15 OCT 2020:  was able to get the WifWaf lib running on the MothbotV3.  Radiohead + the library ends up generating a 'low memory' warning.  This is fine; we'll likely end up using the Feather; also, we can pare down the full library to just generate raw values, likely.

## Programming the Heltec Gateway

[Guide to using ESP32 in Arduino IDE](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

[Another guide from Sparkfun](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md)

Add this to Boards Manager:

```https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json```

Select 'Heltec Wifi Lora (v2)'

## Programming with Feather

Add this to Boards Manager:

```https://adafruit.github.io/arduino-board-index/package_adafruit_index.json```


## <a name="co2_farmos_overnight"></a> CO2 with K30 to FarmOS

Oct 14 2020

|[ ![figB](/img/co2/co2_farmos.png)](/img/co2/co2_farmos.png)|
|:--:|
| Posting CO2 PPM data from a K30 to FarmOS, measuring overnight from 14 OCT to 15 OCT 2020. |

## Turning off autocalibration in K30

[This article](http://www.yoctopuce.com/EN/article/how-to-calibrate-a-co2-sensor) mentions a technique, using their library.

## CO2 with custom server

(TODO: set up using chappy-server as a model?)

---

15 OCT 2020 10:42 AM 

K30 is autocalibrating, Z19 is not. 

Ah -- looks like the K30 also can give temp, and RH!  Cf the example [here](https://gist.github.com/pkourany/53415d7f0c354a6d1e05). 

How to read the K30 via I2c app note [here](http://www.co2meters.com/Documentation/AppNotes/AN102-K30-Sensor-Arduino-I2C.pdf).

Ahhh here is a library for multiple params by CO2meter for the K30 -- [boom](http://www.co2meters.com/Documentation/AppNotes/AN126-K3x-sensor-arduino-uart.pdf).

need to modify their library so that it doesn't rely on SoftwareSerial (necessarily)

-- but first check whether we can even disable autocalibration?

Reading the [K30 datasheet](https://img.ozdisan.com/ETicaret_Dosya/456729_1584920.PDF)

Useful CO2meter guide to K30 ABC [here](https://www.co2meter.com/blogs/news/7512282-co2-sensor-calibration-what-you-need-to-know).

[i2c communication guide to K series sensors](http://www.warf.com/download/3671_7081_I2C_comm_guide_2_1031.pdf)

-- looks like it can be disabled in EEPROM via I2C, at least ... 

Nice reference on connecting a Teensy to a K30 [here](https://forum.pjrc.com/threads/23963-Teensy-3-0-and-co2-sensor-with-UART)

Reference to a key application note re: K-Series eeprom setup [here](https://www.co2meter.com/blogs/news/9278787-senseair-k-series-sensor-uart-eeprom-ram-access-procedure)

-- need to email them, UART command lib is missing ... 

15 OCT 14:00 -- Interesting link to the [Yoctopuce V2](http://www.yoctopuce.com/EN/products/usb-environmental-sensors/yocto-co2-v2), which uses a 'better sensor' than the K30, they claim ...

The K30-based yoctopuce-c02 is [here](http://www.yoctopuce.com/EN/products/discontinued-products/yocto-co2)

More about the yp-co2-v2 is [here](https://www.yoctopuce.com/EN/article/new-the-yocto-co2-v2)

Yp-co2 (K30) [user's guide](https://www.yoctopuce.com/EN/products/yocto-co2/doc/YCO2MK01.usermanual.html)

## K30 via i2c

this is the serious guide, [here](http://www.warf.com/download/3671_7081_I2C_comm_guide_2_1031.pdf)

simple i2c example [here](http://www.co2meters.com/Documentation/AppNotes/AN102-K30-Sensor-Arduino-I2C.pdf)


## SCD30

The yocto uses the SCD30 -- listed for $54 on [digikey](https://www.digikey.com/en/products/detail/sensirion-ag/SCD30/8445334?utm_adgroup=Sensors%20%26%20Transducers&utm_source=google&utm_medium=cpc&utm_campaign=Dynamic%20Search&utm_term=&utm_content=Sensors%20%26%20Transducers&gclid=CjwKCAjw5p_8BRBUEiwAPpJO63lPqw8gZyFFETPN5SMQElL0quJ5jvgLhi2gGq7jW4WlxdnqgtCC_xoCyLAQAvD_BwE)

Here's the SCD30 [datasheet](https://cdn.sparkfun.com/assets/d/c/0/7/2/SCD30_Interface_Description.pdf)

Arduino library [here](https://www.arduino.cc/reference/en/libraries/sparkfun-scd30-arduino-library/)

And on [github](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library)

annnnd the Sparkfun library has a 'disable calibration' settting [here](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library/tree/master/examples/Example4_DisableCalibrate)

## Summary as of 15 OCt 2020 15:00

K30 seems outdated; won't trust it until we figure out how to turn off the autocalibration ... waiting to hear back from CO2 meter

MH-Z19 is also a bit older;  can at least control the autocal ...

The calibration assumption with these meters seems to be that they use the lowest ppm value over some period and consider it to be 400 ppm -- assumes that all spaces end up getting 'fresh air' at some point in that period.  For the K30, this is et to 7 days.  Not sure for the other sensors. 

Also: readings for NDIR are temp, humidity, and pressure dependent.  My sense is that all the sensors measure these variables and compensate; the SCD30 also allows for feeding it the current ambient pressure and using it for calibration.

My current thought is the SCD30 would be a good one to get, along with an ambient pressure sensor.

----

OCT 16 2020

[Example](https://www.amazon.com/DFROBOT-Gravity-Analog-Sensor-Arduino/dp/B00R5CCH7U/ref=pd_lpo_469_t_0/147-7195648-8919536?_encoding=UTF8&pd_rd_i=B00R5CCH7U&pd_rd_r=8568e96f-b65d-4703-880d-17fe796d82cb&pd_rd_w=zJnfI&pd_rd_wg=LWVMI&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=2CT08KJ5JB9PC3GFSM38&psc=1&refRID=2CT08KJ5JB9PC3GFSM38) of an electrochemical CO2 sensor.

Really [nice collection of references](https://www.co2meter.com/pages/indoor-air-quality-links) from co2meter.com 

----

OCT 21 2020

Looks like the SCD30 can run off 3.3V, requiring max current of 80mA -- that's well within range of Feather LDO I believe!

SCD30 [datasheet](https://cdn.sparkfun.com/assets/1/a/7/9/9/Sensirion_CO2_Sensors_SCD30_Preliminary-Datasheet.pdf) has the following table:

SCD30 [handling and assembly guide](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Assembly_Guideline.pdf)

|[ ![figB](/img/co2/electric_scd30.png)](/img/co2/electric_scd30.png)|
|:--:|
| Electrical characeristics of SCD30. |

Listing for th SCD30 on Amazon, [here](https://www.amazon.com/SCD30-CO2-SENSOR-MODULE-Detection/dp/B07R1KCJ8F). 

And on Digikey, [here](https://www.digikey.com/en/products/detail/sensirion-ag/SCD30/8445334?utm_adgroup=Gas%20Sensors&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_Sensors%2C%20Transducers&utm_term=&utm_content=Gas%20Sensors&gclid=Cj0KCQjwuL_8BRCXARIsAGiC51DYiI4bJ21_4XyMzXfu4_-hHUoTJMfTvMqc2sEJYov2--rf9fmn45IaAsNcEALw_wcB).

Note: should likely pair with a precision pressure sensor like the BME280 or better. 

----

OCT 22 2020

CO2Meter note on calibration [here](https://www.co2meter.com/blogs/news/7512282-co2-sensor-calibration-what-you-need-to-know)

Calibration for the SCD30 sensor document [here](https://cdn.sparkfun.com/assets/d/c/0/7/2/SCD30_Interface_Description.pdf) p. 7 / 10.

|[ ![figB](/img/co2/scd30_calibration.png)](/img/co2/scd30_calibration.png)|
|:--:|
| Calibration of the SCD30, via [this document](https://cdn.sparkfun.com/assets/d/c/0/7/2/SCD30_Interface_Description.pdf)|

Upshot:  seems as though with the ABC algorithm, sensor needs to see at least 1 hour of fresh air daily. 
With the 'manual' mode, can run it for 2 minutes outdoors and press button saying 'calibrate' and set it to '400ppm'.  
Seems like this latter mode would work best. 

### Assembly of SCD30

|[ ![figB](/img/co2/scd30_assembly.png)](/img/co2/scd30_assembly.png)|
|:--:|
| Assembly of SCD30 PCB, via [this doc](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Assembly_Guideline.pdf)|

-----

OCT 23 2020


### SCD30 Field Calibration 

[Field calibration guide for SCD30](/data/CD_AN_SCD30_Field_Calibration_D2.pdf)

#### Manual Field Calibration

|[ ![figB](/img/co2/scd30_frc.png)](/img/co2/scd30_frc.png)|
|:--:|
| Effect of 'forced recalibration' (FRC) of SCD30 as described in the [SCD30 ield calibration guide](/data/CD_AN_SCD30_Field_Calibration_D2.pdf.)|

##### Automatic Field Calibration

|[ ![figB](/img/co2/scd30_asc_calibration.png)](/img/co2/scd30_asc_calibration.png)|
|:--:|
| Effect of automatic self-calibration (ASC) algorithm used in SCD30 as described in the [SCD30 ield calibration guide](/data/CD_AN_SCD30_Field_Calibration_D2.pdf).|

----

OCT 24 2020

Might consider adding a high-precision pressure sensor to any SCD30 breakout board; the SCD30 can compensate for pressure if sent values directly.  E.g. the [BMP388 breakout from Adafruit](https://www.adafruit.com/product/3966).


----

NOV 12 2020

Quick task: Feather-based breakout for SCD30 + BMP388 or equiv. 
- can run on USB or lithium ion battery
- mount for SCD30

Any other useful things to add?  
- i2c and uart breakouts?
- display header -- oled to show graph of last few hours, w/ normal range?

Should we use the ESP32?

If we use Heltec, it could be a remote node *or* a gateway ...

That's an argument for using the Heltec ...

Looks like SCD30 can use i2c ... 
... other sensors can use i2c (break it out!) or UART ...

which library does Sparkfun use?

### SCD30 library and pinout

**Sparkfun SCD30 library** Ah, here's the [Sparkfun SCD30 CO2 Library](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library).  They use i2c, great!

**SCD30 pinout** From the [SCD30 datasheet](https://cdn.sparkfun.com/assets/1/a/7/9/9/Sensirion_CO2_Sensors_SCD30_Preliminary-Datasheet.pdf):

[![](/img/co2/scd30_pinout.png)](/img/co2/scd30_pinout.png)

### Making a breakout

Pinout for [BMP388](https://www.adafruit.com/product/3966), precision temp + pressure ...

[![](/img/co2/bmp388.jpg)](/img/co2/bmp388.jpg)

Current thinking: make a place for the i2c oled displays, both the thin and the larger versions.

Ahhh ... [BM390](https://www.adafruit.com/product/4816) has even greater precision, why not go for that. Looks like same pinout, in fact.

#### BMP390 Pinout

(Same as BMP380)

[![](/img/co2/bmp390.jpg)](/img/co2/bmp390.jpg)

Question -- do we need the INT pin assigned to a feather pin?

Looks like it might only be for SPI -- see Adafruit description of [pinout](https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx/pinouts). In any case, not used in their libraries, so don't assign for now.

#### Feather M0 pinout

[![](/img/co2/feather_m0_pinout.jpg)](/img/co2/feather_m0_pinout.jpg)

#### Adding a second UART to the Feather M0

Guide is [here](https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports/creating-a-new-serial)

They give an example with D10 as TX and D11 as RX.  So, break out those pins.

#### Display

- [Small i2c display] is 38x12mm.

- [Large i2c display](https://www.amazon.com/Dorhea-Display-SSD1306-Self-Luminous-Raspberry/dp/B07WPCPM5H/ref=psdc_306754011_t2_B0761LV1SD) is 27mm x 27mm.

##### Breakout REV A

Current breakout board is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_a/atkins).

[![](/img/co2/co2_3drender.png)](/img/co2/co2_3drender.png)


----

2020 NOV 13

Lithium Ion battery that fits nicely inside of feather, [here](https://www.adafruit.com/product/3898).

Sizing logos in Kicad, article [here](https://www.defproc.co.uk/tutorial/sizing-logos-in-kicad/).

---

2020 NOV 14

Nice guide to trace width [here](https://bayareacircuits.com/picking-the-right-trace-width-for-your-next-pcb-design/).

Trace width calculator link [here](https://www.4pcb.com/trace-width-calculator.html), and [here](https://docs.oshpark.com/design-tools/eagle/design-rules-files/).


### Calculating trace width 

Based on [this link at OSHPark](https://docs.oshpark.com/services/two-layer-hhdc/), the typical copper thickness for a 2-layer board is 2oz. 

Then, 

- For 1 Amp current, we get .4 mm trace width.
- For 200 mA (.2 Amps), we get .04 mm trace width.
- For 20 mA (.02 Amps), we get .002 mm trace width.

I think the CO2 board won't source more than 0.2 Amps. 

Ah!  Note that JLCPCB uses 1 oz copper by default.  This means:

- 1 Amp --> .78 mm trace width
- 200 mA --> .09 mm trace width
- 20 mA --> .004 mm trace width


## CO2 Motherboard REV A

Idea:  develop footprint for K30 and Z19, to co-deploy the sensors and test them out.  

On the other hand: nice to have a board that is smaller, that can connect to these other boards, but is ready to start deploying as its own sensor. 

Here's a version (REV_A) that does the latter.

[![](/img/co2/scd30_breakout_3drender.png)](/img/co2/scd30_breakout_3drender.png)

Now, need to ask again: can we turn off the autocalibration for the Z19 and the K30?

Z19, I believe it's straightforward -- need to review.

K30 -- here are the links sent via email from CO2Meter:

- ['Downloads'](https://www.co2meter.com/pages/downloads
)
- ['K30 Web page'](https://www.co2meter.com/collections/sensors/products/k-30-co2-sensor-module) (cf 'Documents' tab)
- ['connecting K30 to an Arduino'](http://co2meters.com/Documentation/Other/AN_SE_0018_AN_126_Revised8.pdf)

Screenshot of gaslab software from CO2Meter, showing serial interface to turn ABC off:

[![](/img/co2/k30_abc_off.png)](/img/co2/k30_abc_off.png)


Turning off ABC in K30 via i2c (found in ['Communications Protocols Manuals'](http://co2meters.com/Documentation/Other/SenseAirCommGuide.zip), in the i2c folder.  Specific document stored in our archives [here](/img/co2/I2C_comm_guide_2_15.pdf).

[![](/img/co2/abc_control_k30.png)](/img/co2/abc_control_k30.png)


Communicating with K30 via I2C + Arduino guide, [here]().  Example below:

```
// CO2 Meter K-series Example Interface
// Revised by Marv Kausch, 7/2016 at CO2 Meter <co2meter.com>
// Talks via I2C to K30/K22/K33/Logger sensors and displays CO2 values
// 12/31/09
#include <Wire.h>
// We will be using the I2C hardware interface on the Arduino in
// combination with the built-in Wire library to interface.
// Arduino analog input 5 - I2C SCL
// Arduino analog input 4 - I2C SDA
/*
  In this example we will do a basic read of the CO2 value and checksum verification.
  For more advanced applications please see the I2C Comm guide.
*/
int co2Addr = 0x68;
// This is the default address of the CO2 sensor, 7bits shifted left.
void setup() {
  Serial.begin(9600);
  Wire.begin ();
  pinMode(13, OUTPUT); // address of the Arduino LED indicator
  Serial.println("Application Note AN-102: Interface Arduino to K-30");
}
///////////////////////////////////////////////////////////////////
// Function : int readCO2()
// Returns : CO2 Value upon success, 0 upon checksum failure
// Assumes : - Wire library has been imported successfully.
// - LED is connected to IO pin 13
// - CO2 sensor address is defined in co2_addr
///////////////////////////////////////////////////////////////////
int readCO2()
{
  int co2_value = 0;  // We will store the CO2 value inside this variable.

  digitalWrite(13, HIGH);  // turn on LED
  // On most Arduino platforms this pin is used as an indicator light.

  //////////////////////////
  /* Begin Write Sequence */
  //////////////////////////

  Wire.beginTransmission(co2Addr);
  Wire.write(0x22);
  Wire.write(0x00);
  Wire.write(0x08);
  Wire.write(0x2A);

  Wire.endTransmission();

  /////////////////////////
  /* End Write Sequence. */
  /////////////////////////

  /*
    We wait 10ms for the sensor to process our command.
    The sensors's primary duties are to accurately
    measure CO2 values. Waiting 10ms will ensure the
    data is properly written to RAM

  */

  delay(10);

  /////////////////////////
  /* Begin Read Sequence */
  /////////////////////////

  /*
    Since we requested 2 bytes from the sensor we must
    read in 4 bytes. This includes the payload, checksum,
    and command status byte.

  */

  Wire.requestFrom(co2Addr, 4);

  byte i = 0;
  byte buffer[4] = {0, 0, 0, 0};

  /*
    Wire.available() is not nessessary. Implementation is obscure but we leave
    it in here for portability and to future proof our code
  */
  while (Wire.available())
  {
    buffer[i] = Wire.read();
    i++;
  }

  ///////////////////////
  /* End Read Sequence */
  ///////////////////////

  /*
    Using some bitwise manipulation we will shift our buffer
    into an integer for general consumption
  */

  co2_value = 0;
  co2_value |= buffer[1] & 0xFF;
  co2_value = co2_value << 8;
  co2_value |= buffer[2] & 0xFF;


  byte sum = 0; //Checksum Byte
  sum = buffer[0] + buffer[1] + buffer[2]; //Byte addition utilizes overflow

  if (sum == buffer[3])
  {
    // Success!
    digitalWrite(13, LOW);
    return co2_value;
  }
  else
  {
    // Failure!
    /*
      Checksum failure can be due to a number of factors,
      fuzzy electrons, sensor busy, etc.
    */

    digitalWrite(13, LOW);
    return 0;
  }
}
void loop() {

  int co2Value = readCO2();
  if (co2Value > 0)
  {
    Serial.print("CO2 Value: ");
    Serial.println(co2Value);
  }
  else
  {
    Serial.println("Checksum failed / Communication failure");
  }
  delay(2000);
}
```
### CO2 Motherboard Update NOV 14 2020

'Final' REV_A version (ordered on JLCPCB on 14 NOV) is here:

[![](/img/co2/co2_reva_schematic.png)](/img/co2/co2_reva_schematic.png)

[![](/img/co2/co2_reva_3drender.png)](/img/co2/co2_reva_3drender.png)

Repo for REV_A schematic and board file is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_a/atkins). 


----

2020 NOV 16

### <a name="jimenez"></a>Research paper on CO2 and COVID safety by Peng et al

Really nice research paper by Peng and Jimenez that yields CO2 thresholds for indoor activity, with thresholds based on activity / mask use / etc -- linked [here](https://www.medrxiv.org/content/10.1101/2020.09.09.20191676v1.full.pdf).


|[![](/img/co2/jimenez_abstract.png)](https://www.medrxiv.org/content/10.1101/2020.09.09.20191676v1.full.pdf)|
|:--:|
| Abstract from [Peng and Jimenez 2020](https://www.medrxiv.org/content/10.1101/2020.09.09.20191676v1.full.pdf). |

This is the key figure (Fig 2) to understand from the paper:

|[![](/img/co2/peng_fig2_small.png)](/img/co2/peng_fig2.png)|
|:--:|
| Figure 2. from [Peng and Jimenez 2020](https://www.medrxiv.org/content/10.1101/2020.09.09.20191676v1.full.pdf). |


An online aersol transmission calculator based on the paper is [here](https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277).

The tweet broadcasting the tool is [here](https://twitter.com/jljcolorado/status/1275466006312304640).

The lead author on the paper, an expert on aerosol transmission, is [here](https://twitter.com/jljcolorado).

Some of the feedback on the paper & tool was from Linsey Marr, the NYTimes-quoted air expert on COVID transmission.  Her Twitter profile is [here](https://twitter.com/linseymarr).

TODO: 

Need to add buttons!!  For calibration, and other navigation.

Sensiron SCD30 [available on Amazon UK](https://www.amazon.co.uk/X-SCD30-Air-Quality-Sensors/dp/B07WRJD4TN/ref=sr_1_2?dchild=1&keywords=scd30&qid=1605562830&sr=8-2)

NRF52 + LoRa wing setup --

- B / 11 -- RST
- D / 30 -- CS
- E / 27 -- IRQ

[![](/img/co2/nrf52_pinout.jpg)](/img/co2/nrf52_pinout.jpg)

### Button

![](/img/valedalama/kicad_button.png)

![](/img/valedalama/button_wiring.png)

![](/img/co2/sparkfun_pushbutton.png)

---

2020 NOV 17 

### REV_B -- Based on Feather, adds buttons

REVB board 3D rendering:

![](/img/co2/co2_revb_3drender.png)

REV_B KiCAD design files are [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_b/atkins).


----

2020 NOV 18

Heltec version of CO2 board ... 'REV_C' ...

[![](/img/valedalama/heltec_pinout.png)](/img/valedalama/heltec_pinout.png)

Aside -- interesting 'hiveyes' project using the Heltec, might have interesting code associated with it, [here](https://community.hiveeyes.org/t/heltec-wifi-lora-32/3125).  Nice collection of github code [here](https://github.com/hiveeyes), including weight scales!

Interesting radio protocol [here](https://github.com/hiveeyes/beradio).

Radio protocols -- another way in which efficiency might be in tradeoff with legibility. 

### REV_C of board -- based on Heltec 

[![](/img/co2/co2_revc_3drender.png)](/img/co2/co2_revc_3drender.png)

Kicad design files are [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_c/atkins).

Thread [here](https://www.thethingsnetwork.org/forum/t/big-esp32-sx127x-topic-part-1/10247/43) on the battery connector type for the Heltec -- "Micro JST 1.25 mm".


### CO2 Calibration via Gas Cylinder

Example of 1000 ppm cylinder [here](http://www.calgasdirect.com/gasco-17l-37-1000-carbon-dioxide-calibration-gas-co2-1000-ppm-balance-air-in-a-17-liter-steel-disposable-cylinder/)


### Aranet: Bluetooth E-Ink CO2 Sensor

Product [here](https://www.amazon.com/Aranet4-Home-Temperature-Ink-Configuration/dp/B07YY7BH2W/ref=cm_cr_arp_d_product_top?ie=UTF8)

Manual [here](https://images-na.ssl-images-amazon.com/images/I/A1ubqWpxeiL.pdf)

### Moteino M0 

Product page [here](https://lowpowerlab.com/shop/product/184)

Product guide [here](https://lowpowerlab.com/guide/moteino/moteinom0/)

### IQAir monitor

Link on Amazon [here](https://www.amazon.com/dp/B0784TZFRW/ref=syn_sp_syn_da_desktop_2?psc=1&tag=dradisplay-20&ascsubtag=addfab9c56bb6f407e973154a0adf08a_CT&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVFJTSjBDMkJHQlFVJmVuY3J5cHRlZElkPUEwNDIxNTc0Mlc2M1A3VlZHOE05MSZlbmNyeXB0ZWRBZElkPUEwNDA5ODE3MzExTVdEQUZIMjFXWCZ3aWRnZXROYW1lPXNwX3N5bl9kYV9kZXNrdG9wJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==).

### GZair monitor for CO2

Link on Amazon [here](https://www.amazon.com/dp/B0861777SL/ref=syn_sd_onsite_desktop_96?psc=1&uh_it=831b79d927acc84ecbf32f6df054d07c_CT&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVTRMWFREU1pUUzY2JmVuY3J5cHRlZElkPUEwODkxNTcyMzZCWFc3OFZISDdWJmVuY3J5cHRlZEFkSWQ9QTAwNTk2NzcyUVJRR0NaVU80M09ZJndpZGdldE5hbWU9c2Rfb25zaXRlX2Rlc2t0b3AmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl).

---

2020 NOV 23

### <a name="rev_a_build"></a>Carbon Dioxide Board Rev_A

REV_A Boards have arrived in the mail.  Assembly and initial code tests! 

Sparkfun SCD30 i2c library is [here](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library).

First version with display, lora, screen, scd30 is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_a/firmware/feather_m0_scd30_batt_lora_display).

![](/img/co2/rev_a_proto.jpeg)

Associated gateway code is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_a/firmware/gateway/heltec_wifi_lora_bayou_farmos).

Online data is currently posting [here](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).


| [![](/img/co2/rev_a_data.png)](/img/co2/rev_a_data.png) |
|:--:|
| Quick indoor test of REV_A board. |

Also took sensor outside for a few minutes.  It fluctuated a lot.  Seems like we're going to want to average readings over a minute or or more to get some stable value when the CO2 is low.  Might have been due to wind. Might need to suggest that people get out of wind if they calibrate outside.  Or, to tell folks to wait til the reading stabilizes before hitting calibrate.  Or even have this happen automatically.

### TODO

- Add watchdog to remote node and to gateway
- Add calibration procedure
- switch to set measurement interval?
- dip switch to set node ID

---

2020 NOV 24

**Results of overnight test on NOV 23.**  Out of three people in apartment, two went to bed at around 8 PM, the final person at around 10:30 PM.  One person (me) woke up and started using computer right next to CO2 sensor at 4:30 AM. Collecting data in [this Bayou feed](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de), generated these graphs as of 4:30 AM:

| [![](/img/co2/co2_nov23_night.png)](/img/co2/co2_nov23_night.png) |
|:--:|
| CO2 concentration in PPM, 2020 NOV 23 overnight. |

| [![](/img/co2/temp_nov23_night.png)](/img/co2/temp_nov23_night.png) |
|:--:|
| Temperature in C, 2020 NOV 23 overnight. |

**Comment**. Note the correlation between temperature and CO2, with co-occurring peaks around 12 AM and 1:30 AM. The temperature pattern likely due to the HVAC system.  (The spike in CO2 and temperature at 4:30 AM are likely simply due to my presence near the sensor.) Unless the HVAC is in fact bringing in air with higher concentration of CO2, perhaps this indicates the range of fluctuation in CO2 reading due to temperature.  Do we expect CO2 to rise with temperature for this NDIR sensor type?

Found nice reference for effect of temperature and pressure on CO2, [here](https://www.bapihvac.com/application_note/effects-of-temperature-and-barometric-pressure-on-co2-sensors-application-note/).

Key passage:

> The size of the NDIR sampling chamber is fixed and is open to the atmosphere so that air can move in and out.  As explained above, the number of air molecules in a given volume is affected by temperature and air pressure but not the concentration of CO2.  At low pressures or high temperatures, there will be fewer air molecules in the sample chamber, so there will also be fewer CO2 molecules, even though the ppm of CO2 hasn’t changed.  Fewer CO2 molecules “fools” the sensor into thinking that the CO2 concentration is lower than it really is.  At high pressures or low temperatures, there are more air molecules in the sample chamber and more CO2 molecules, even though the CO2 concentration hasn’t changed.  More CO2 molecules “fools” the sensor into thinking that the CO2 concentration is higher than it really is. Therefore a CO2 sensor calibration will only be accurate at one temperature and one air pressure.

This would suggest:
- higher pressures & lower pressures--> more air (and thus more CO2) molecules in the chamber --> higher CO2 readings
- lower pressures & higher temperatures --> less air (and thus less CO2) molecules in chamber --> lower CO2 readings

This fluctuation is due to pressure inside the apartment, when the HVAC system turns on?  Now worth attempting to compensate with external pressure sensor.

**Addendum**.  I've now replaced the above graphs so that we can see the readings from 0430 to 0530, during which time I sat close to sensor.  Note that the temperature rose less than during some of the nightly spikes, but CO2 rose more, as one might expect given my proximity to the sensor. This perhaps leads to more confidence in the temperature-compensation of the SCD30. 

<a name="calibration"></a> 

**Thoughts on calibration, and baselines.**  The key metric in the 2020 paper by [Peng et al](#jimenez) is 'PPM above baseline'.  So, perhaps absolute calibration isn't really an important metric, here; more useful and interesting might be to establish a 'baseline', algorithmically; display it graphically; and allow the user to adjust based on their interpretation. 

Key passage from page one of [Peng et al](#jimenez):

> Indoor CO2 has been suggested as a practical proxy of respiratory infectious disease transmission
risk (8), as pathogen-containing aerosols and CO2 are co-exhaled by those infected (Fig. 1).
Since background (ambient) CO2 level is stable and indoor excess CO2 is usually only from
human exhalation, measurements of indoor CO2 concentration by low-cost CO2 sensors can
often be good indicators of infection risk and suitable for mass deployment (9, 10). 

### Use of microphones to detect ambient activity

- Electret MAX4466 (manual gain) listed on Adafruit, [here](https://www.adafruit.com/product/1063). Note that it's also widely avail on [Amazon](https://www.amazon.com/dp/B08CV2X658/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B08CV2X658&pd_rd_w=e4Wqd&pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&pd_rd_wg=jK4OK&pf_rd_r=0WTC7Z5H34N5NVXD75YE&pd_rd_r=e8a78340-09f3-4f09-a9fe-63e5a2dae57b&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTE85RlYxVU5SWkRZJmVuY3J5cHRlZElkPUEwNjE5ODUyMlE5MEhGNUFEMzlDWSZlbmNyeXB0ZWRBZElkPUEwMzEwMzMxMUxTNEZUR1k2NTJCVCZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)
- Electret MAX9814 (auto gain) listed on Adafruit, [here](https://www.adafruit.com/product/1713).
- Adafruit Silicon MEMS Microphone Breakout - SPW2430, [here](https://www.adafruit.com/product/2716)

 Nice [tutorial](https://learn.adafruit.com/adafruit-microphone-amplifier-breakout/overview) on measuring sound levels using the MAX4466.  This might be the way to go if we're going to use ambient audio data to determine in-room activity. 

 Tutorial on using the [auto-gain](https://learn.adafruit.com/adafruit-agc-electret-microphone-amplifier-max9814) mic, which might be even better ...

 > This fancy microphone amplifier module is a step above the rest, with built in automatic gain control. The AGC in the amplifier means that nearby 'loud' sounds will be quieted so they don't overwhelm & 'clip' the amplifier, and even quiet, far-away sounds will be amplified. This amplifier is great for when you want to record or detect audio in a setting where levels change and you don't want to have to tweak the amplifier gain all the time.

 **Design.**  Using a simple, auto-amplified microphone in this context seems useful.  The raw data can be presented online, and used in an attempt to discern baseline thresholds.  No algorithm needs to be applied at first; or, the user community can supply the algorithm. 

 This leads to an instrument in the following **Designer PCB** configuration:

 - ESP32 ($3)
 - USB chip ($2)
 - Lithium ion charging ($1)
 - OLED display (larger if possible) ($3)
 - microphone (MAX9814 with switch to turn power off) ($2) -- MAX9814 datasheet is [here](https://www.mouser.com/datasheet/2/256/MAX9814-1516143.pdf); chip is listed [here](https://www.mouser.com/ProductDetail/Maxim-Integrated/MAX9814ETD%2BT?qs=1THa7WoU59HUZGorIAH%2Frw%3D%3D&gclid=CjwKCAiA-_L9BRBQEiwA-bm5fu4Xw3jLMp2pgE2Dl_CsuoqKs4_FdG-qEZDOrhAV2GQXbrhy5HwSVRoCcXMQAvD_BwE).
 - SCD30 ($50)
 - BMP388 or 390 ($5)
 - a button or two ($2)
 - PCB ($4)

 Total: $72

This can also be accomplished by a more **DIY Version**:

- ESP32 + OLED + USB (Heltec) ($20)
- microphone (adafruit MAX9814) ($8)
- SCD30 ($50)
- pressure sensor (adafruit BMP388) ($10)
- PCB ($10)

Total: $98

Likely best to produce this latter version immediately, and then take time, if available, to make the inexpensive version.

**Philosophy.**  

This is an open hardware project in the realm of home-based IOT; a highly-contested area around privacy.  In this case, for example, a microphone levels can probably serve a useful proxy for indoor occupancy status. Usually, this would lead to anxieties about privacy.  But because we can produce this device in an open hardware manner, we can avoid an entire class of such concerns.  (Not all such concerns:  there's still the possibility that other surveillance software made it onto the device).  

By making this a FOSS/H project, we allow more eyes onto the design to evaluate.  

Switch on microphone.

Ability to deploy mic without CO2, if just want to monitor activity levels in an area.

Ability to deploy CO2 without mic, in order to secure privacy.

### MAX9814 Adafruit module

Listing for product is [here](https://www.adafruit.com/product/1713).

Schematic is [here](https://cdn-learn.adafruit.com/assets/assets/000/014/290/large1024/adafruit_products_max9814sch.gif?1448049933).

### Note on confounding factors

From page 2 of Peng 2020:

> If there are no other significant CO2 sources/sinks (e.g., gas/coal stove and pets/plants), i.e., if
indoor excess CO2 (relative to the background outdoor level) production is only due to human
exhalation and its loss is ventilation, similar quantities for CO2 can be expressed as follows (see
Materials and Methods for the derivation)

Gas stove or pets can be a source; plants can be a sink.

Indeed, looks like I may have seen this effect using a propane stove on Nov 24 2020, as per experiment above.

---

24 NOV 2020 Update @ 14:30

| [![](/img/co2/nov_24_left_house.png)](/img/co2/nov_24_left_house.png) |
|:--:|
| CO2 (PPM).  Note: made lunch around noon on Nov 24 (gas stove).  Left house around 12:30 / 12:45 on Nov 24. |


### Microphone pinouts

| [![](/img/co2/max9814.jpg)](/img/co2/max9814.jpg) |
|:--:|
| MAX9814 Auto-gain audio board from Adafruit. |

| [![](/img/co2/max4466.jpg)](/img/co2/max4466.jpg) |
|:--:|
| MAX4466 adjustible audio board from Adafruit. |

2020 NOV 24 Update 22:10

| [![](/img/co2/co2_nov24_full.png)](/img/co2/co2_nov24_full.png) |
|:--:|
| Arrived back home at 5:30 PM Nov 24th. Interesting that the ambient CO2 decreased in our absence to a value lower than overnight in the apartment with us sleeping there. |

----

<a name="nov25"></a> 

2020 NOV 25 

| [![](/img/co2/nov25_over.png)](/img/co2/nov25_over.png) |
|:--:|
| **CO2 (PPM) measured on Nov 245th through morning of Nov 25th.**  Spikes on Nov 24th at 7:30 AM, 10:30 AM, 12 PM, and on Nov 25th at 8 AM, are perhaps due to use of propane stove for cooking.  Apartment was unoccupied on Nov 24th from about 12:30 PM until 5:30 PM. |

---
2020-11-27 17:20:40



| [![](/img/co2/co2_nov26_nov27.png)](/img/co2/co2_nov26_nov27.png) |
|:--:|
| **Snapshot from the [Bayou feed](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).**  Left house around 9 AM on Nov 26th.  Visitors likely in house, late morning of Nov 27th. Returned home a little before 5 PM, and started using gas stove. |

### Light sensors

Vishay light sensor [here](https://www.adafruit.com/product/4162).

Simple, cheap analog light sensor breakout [here](https://www.adafruit.com/product/2748).

BH1750 [here](https://www.adafruit.com/product/4681),seemed to be recommended for ambient light sensing ... but difficult to solder.  Note though that this seems widely available on Amazon as breakout boards.  [This description](https://makersportal.com/shop/ambient-light-sensor-bh1750-16-bit) also indicates that it's a good candidate for this application; and in fact, the leads don't look too small.

### Microphones

MEMS mic from Adafruit, the [SPW2430](https://www.adafruit.com/product/2716?gclid=CjwKCAiA5IL-BRAzEiwA0lcWYmVgg-sFYvw2DV5d3ki49VliOATt6F7_MmGSpVRBbz_hWldCvHzw-BoCmDgQAvD_BwE)

Looks like: use the electret verison for the DIY solderable verison; use the SPW2430 or similar for custom PCB.

[MAX4466 from Amazon](https://www.amazon.com/dp/B08CV2X658/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B08CV2X658&pd_rd_w=e4Wqd&pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&pd_rd_wg=jK4OK&pf_rd_r=0WTC7Z5H34N5NVXD75YE&pd_rd_r=e8a78340-09f3-4f09-a9fe-63e5a2dae57b&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTE85RlYxVU5SWkRZJmVuY3J5cHRlZElkPUEwNjE5ODUyMlE5MEhGNUFEMzlDWSZlbmNyeXB0ZWRBZElkPUEwMzEwMzMxMUxTNEZUR1k2NTJCVCZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=):

![](/img/co2/max4466_amazon.png)  

Nice [post](https://www.cuidevices.com/blog/comparing-mems-and-electret-condenser-microphones) on comparing MEMS and Electret microphones.

Tutorial on measuring sound levels with the MAX4466 by Adafruit [here](https://learn.adafruit.com/adafruit-microphone-amplifier-breakout/measuring-sound-levels).

### Design Review 

2020-11-27 20:18:07

Microphones:
- for DIY version: use electret, b/c cheap and widely available. Also use SPW2430 breakout from Adafruit.
- for artisanal verison: use SPW2430.

Light sensors:
- for both DIY and artisanal versions, use BH1750 boards / chips.

### REV_B + MAX4466 Experiment

![](/img/co2/rev_b.jpg)

![](/img/co2/co2_and_mic.jpg)

REV_B appears to work!

Now testing microphone ...

Connecting analog out of mic to A0 on REV_B (one of the button pins) ...

Running overnight on Nov 27th with mic sampling of 10 sec ...

Test code is [here](

Data will appear [here](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).

---

2020-11-28 04:22:39

My impression is that this mic will require additional signal conditioning to pick up ambient noise; perhaps this can be done with an op-amp and a potentiometer that allows experimentation; or maybe a light sensor is the best next step.  Or maybe auto-gain is best, the idea being that it will attempt to acquire *any* signal.  That said, I'd think that 'max gain' on this system would do the trick, if that would work.  All depends on the circuit and the mic.

[MAX4466 Datasheet](https://cdn-shop.adafruit.com/datasheets/MAX4465-MAX4469.pdf).  


Data from the Bayou feed, overnight Nov 27th -- Nov 28th in CSV format has a snapshot [here](https://docs.google.com/spreadsheets/d/11WYxWyIDqpz9qTyOSo6GRbPs4L-iIx42mY1tSCSNI58/edit?usp=sharing). This analysis is necessary because the current graphical display in Bayou is configured to who only every 10th data point;  we'd like to see the higher-density data. 


| [![](/img/co2/mic_morning_nov28.png)](/img/co2/mic_morning_nov28.png) |
|:--:|
| **Snapshot of mic data from the [Bayou feed](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).**  Woke up at 5 AM.  Note that pattern of sampling shown is a bit odd.  Need to dive back in an look at how data is captured and how it should be averaged.|


| [![](/img/co2/mic_sampled_nov28_unix.png)](/img/co2/mic_sampled_nov28_unix.png) |
|:--:|
| **Higher sampling rate of mic data from the [Bayou feed](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).**   Working to convert this to proper dates (see below) ...|


### Aside: converting unix timestamps in Sheets 

Formula for converting unix timestamp to date in Excel / Sheets is discussed [here](https://websiteseochecker.com/blog/what-is-timestamp/);  if the timestamp is in cell 'A1', the formula for the date is:

```
=(((A1/60)/60/24)+DATE(1970,1,1)
``` 

## <a name="mic_experiment"></a> Analysis of Initial CO2 and Microphone Data

| [![](/img/co2/mic_and_co2_unix_hours.png)](/img/co2/mic_and_co2_unix_hours.png) |
|:--:|
| **CO2 and Mic data from the [Bayou feed](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).** Microphone data is "highest p-p amplitude over 10 sec interval".  Note -- entered room with sensor around 4:30 AM.  Generally mic data seems to precipitate rise in CO2 level.  At some point gas stove was used;  from this data, I would surmise around 6:40 AM, but unsure. Need to track this next round. |

### Enclosure options

115 x 90 x 55mm for $10 w/ transparent screw cover [here](ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNlY3TlNQTks4WTY0JmVuY3J5cHRlZElkPUEwMTcyOTc0M1A5OTBMNE1DV0E4SyZlbmNyeXB0ZWRBZElkPUEwNTEwMzQ1SkY1MDYwQ0ZMQzBBJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU).

Popular 200 x120 x56 mm for $15 w/ transparent screw cover [here](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-Enclosure/dp/B07BPPJZBG/ref=pd_sbs_60_1/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07BPPJZBG&pd_rd_r=86924a94-2620-4e15-91d7-f9a01104fb4f&pd_rd_w=VUfCX&pd_rd_wg=tdXB2&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=M5FYKR285RHNS1H54ZFB&psc=1&refRID=M5FYKR285RHNS1H54ZFB)

5.9 x 3.9 x 2.8inch w latching cover [here](https://www.amazon.com/LMioEtool-Dustproof-Waterproof-Electrical-Transparent/dp/B07PK8K8S2/ref=pd_lpo_60_t_2/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07PK8K8S2&pd_rd_r=105ea24a-0322-41f7-8b9f-6d5b31591072&pd_rd_w=xO7n2&pd_rd_wg=5A7XY&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=M5FYKR285RHNS1H54ZFB&psc=1&refRID=M5FYKR285RHNS1H54ZFB)

Would be nice to have 'wings' for mounting ...

This one has wings, [here](https://www.amazon.com/YXQ-83x58x33mm-Junction-Waterproof-Enclosure/dp/B07JH8LNHY/ref=pd_sbs_60_4/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07JH8LNHY&pd_rd_r=86924a94-2620-4e15-91d7-f9a01104fb4f&pd_rd_w=VUfCX&pd_rd_wg=tdXB2&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=M5FYKR285RHNS1H54ZFB&psc=1&refRID=M5FYKR285RHNS1H54ZFB).

In fact, seems to be part of a pretty standard and well-rated series, [here](https://www.amazon.com/Awclub-Junction-Dustproof-Weatherproof-Electrical/dp/B07NSTW7QB/ref=pd_di_sccai_4/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07NSTW7QB&pd_rd_r=a2c81e3d-386a-43ae-a847-00ab2f985575&pd_rd_w=WY4y1&pd_rd_wg=V0jWO&pf_rd_p=c9443270-b914-4430-a90b-72e3e7e784e0&pf_rd_r=HE1G91ZWD43Y8H33FZJ3&psc=1&refRID=HE1G91ZWD43Y8H33FZJ3)

In particular, the [4.5"x3.3"x1.4"(115x85x35mm)](https://www.amazon.com/Awclub-Junction-Dustproof-Weatherproof-Electrical/dp/B07NSV7CSM/ref=pd_di_sccai_4/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07NSTW7QB&pd_rd_r=a2c81e3d-386a-43ae-a847-00ab2f985575&pd_rd_w=WY4y1&pd_rd_wg=V0jWO&pf_rd_p=c9443270-b914-4430-a90b-72e3e7e784e0&pf_rd_r=HE1G91ZWD43Y8H33FZJ3&refRID=HE1G91ZWD43Y8H33FZJ3&th=1) size looks good, for $10.  But: maybe too flat to drill holes for cables. And will require fairly large PCB.

From comments, the comparison is between Awclub and LeMotech on Amazon, favoring LeMotech for quality. Likely to find some analysis of sizes and design in hobby projects online (or better: datasheets) given how popular the brands are. 

Plan: first assess how large the project will likely be by laying out some PCBs, and order an enclosure. 

Review of best projecte enclosures [here](https://diabeteshealthequity.org/arduino-project-enclosure/)

Apparently the 'wings' I'm referring to are termed 'ears'.

E.g.: for the [4.5 x 3.5 x 2.68 inch(115 x 90 x 68 mm) 'ear' Lemotech version](https://www.amazon.com/LeMotech-Junction-Dustproof-Weatherproof-Electrical/dp/B07G58SLB1?th=1), the  PCB is essentially 84 mm by 89 mm.  

This might be a good case size to shoot for.  I think I can accommodate it. A larger PCB might be expensive, anyway.

Datasheet for this enclosure is [here](https://images-na.ssl-images-amazon.com/images/I/61P4XQPyJyL.pdf). 

Need to accommodate a USB cable.

Alright: let's lay out a PCB for testing, and if it looks plausible, order one of these.

Note that the  6.2"x3.5"x1.8" version of LeMotech has a nice drawing by a user. Also has same price as smallest version.  

Suggestion to make panel mounting oneself.  

This is in keeping with previous ideas.

From what I can tell online, the most effective & inexpensive / adaptable approach to enclosures might be:
- design a PCB to be as small as possible, with mounting holes for standard screw sizes
- find a nice inexpensive enclosure design
- make a 'mounting plate' that fits snugly inside the enclosure, with mounting holes for one's PCB

The reason given online for this is that the inexpensive enclosures are often made from 'recycled molds' that have poor tolerances.  So it really isn't a great idea to design a custom PCB for them.  Rather, lasercut inexpensive (ideally, drillable, as backup) mounting plates.


### Large, Flat LeMotech enclosure

> Outside Size (approx.): 6.2"x3.5"x1.8"(158mmx90mmx46mm)/(L*W*H); Inner size (approx.): 5.9"x3.3"x1.6"(151mmx84mmx42mm)/(L*W*H)- - (Allowable Error: 2mm); Screw Thread Size: M4

| [![](/img/co2/larger_lemotech.png)](/img/co2/larger_lemotech.png) |
|:--:|
| Lemotech enclosure, [6.2 x 3.5 x 1.8 inch (158 x 90 x 46 mm)](https://www.amazon.com/LeMotech-Junction-Dustproof-Weatherproof-Electrical/dp/B07G4VT33D?th=1). |

| [![](/img/co2/larger_lemotech_drawing.png)](/img/co2/larger_lemotech_drawing.png) |
|:--:|
| Customer-provided CAD drawings for Lemotech enclosure, [6.2 x 3.5 x 1.8 inch (158 x 90 x 46 mm)](https://www.amazon.com/LeMotech-Junction-Dustproof-Weatherproof-Electrical/dp/B07G4VT33D?th=1). |

### Smallest LeMotech enclosure

> Outside Size (approx.): 4.5"x3.5"x2.68"/(115mmx90mmx68mm)(L*W*H); Inner size (approx.): 4.3"x3.3"x2.44"/(111mmx86mmx62mm) (L*W*H)- -(Allowable Error: 2mm); Screw Thread Dia.: 4mm/0.16"

| [![](/img/co2/smallest_lemotech.png)](/img/co2/smallest_lemotech.png) |
|:--:|
| Lemotech enclosure, [4.5"x3.5"x2.68"/(115mmx90mmx68mm)](https://www.amazon.com/LeMotech-Junction-Dustproof-Weatherproof-Electrical/dp/B07G58SLB1?th=1). |

---
2020-11-28 15:37:00

**Overall framing / todos.**

- Donation-based server setup?  How difficult to arrange for logins?
- How to display threshold guide information (if at all)
- Wifi configuration setup
- Firmware update configuration.  (Perhaps it's best to start with folks who are familiar with Arduino, so that they can help refine / test the workflow.)
- Cheaper artisanal pcb version.  Likely based on ESP32.  using as many SMT parts as possible. 
- Laser-cut mount for electronics. Or something that can be cut out from stiff paper / etc.
- Cardboard enclosure?
- Partnering institutions who'd like to help evaluate and test. Peng et al are an initial candidate. Others?  
- Online documentation for assembly and use of kit.

---
2020-11-29 21:52:45

### Dashboards

[Jupyter dashboard](https://blog.jupyter.org/a-gallery-of-voil%C3%A0-examples-a2ce7ef99130) via voila -- [gallery of examples](https://blog.jupyter.org/a-gallery-of-voil%C3%A0-examples-a2ce7ef99130)

gesis notebooks, [here](https://notebooks.gesis.org/)

guide to voila, [here](https://analyticsindiamag.com/complete-guide-to-voila-to-turn-a-jupyter-notebook-into-a-standalone-web-application/)

Dashboarding options in Jupyter discussed [here](https://medium.com/informatics-lab/jupyter-dashboarding-some-thoughts-on-voila-panel-and-dash-b84df9c9482f)

---
2020-12-01 13:41:41

### REV_D -- ESP32 + RFM95 SMT Version

- FTDI / USB-TTL cable req'd for first version
- mimic pinout of the heltec wifi 32 lora v2
- auto-reset feature from Quahog revision
- leds for mic level?
- mic
- light sensor
- oled display
- ultrasonic distance sensor breakout? or time of flight / i2c breakout?
- qwik connector for i2c breakout for additional sensors

---
2020-12-01 16:17:24

Continuing research for REV_D ...

### Quahog circuit (ESP32 + RFM95) ...

[![](/img/hog32.png)](/img/hog32.pdf)

Some changes that need to be made to the circuit:
- get rid of R4 and C4
- place R1, C3, R2, R3, Q1, and Q2
- need to connect pin 2 to ground (or it can float; but currently it is used in i2c, and is pulled high with a resistor, so we need to connect it to ground)
- need to connect the 'DTR' pin on the CP2104 breakout to the DTR pin on the quahog

### Heltec pinout (ESP32 + RFM95) ...

[![](/img/co2/heltec_wifi_lora_v2_pinout.png)](/img/co2/heltec_wifi_lora_v2_pinout.png)

### Heltec schematic 

[![](/img/co2/heltec_schematic.png)](/img/co2/WIFI_LoRa_32_V2(868-915).PDF)

### Feather ESP32 Schematic

[![](/img/co2/feather_esp32_schem.png)](/img/co2/feather_esp32_schem.png)

### REV_C Notes

Misjudged the header spaceings on the Heltec -- too far apart by one row!

### REV_D Notes

[MMBT2222 NPN Mosfet datasheet](https://www.onsemi.com/pub/Collateral/MMBT2222LT1-D.PDF) -- it's 'BEC' -- 1: BASE, 2: EMITTER, 3: COLLECTOR

### BMP388 / 390

Adafruit guide to BMP388 is [here](https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx).

Breakout schematic:

[![](/img/co2/sensors_BMP390_sch.png)](/img/co2/sensors_BMP390_sch.png)

---
2020-12-01 20:45:59

### REV_D Initial Pass
![](/img/co2/rev_d_3drender.png)

---
2020-12-02 20:41:42

Upshot -- the SPW2430 mic is weak w/out an amplifier -- should check out tutorial for how to add it when doing SMT version ...

Meanwhile, light sensor BH1750 tutorial is [here](https://learn.adafruit.com/adafruit-bh1750-ambient-light-sensor)

Install hp_BH1750 library via Arduino IDE ...

firmware that adds the light sensor is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_b/firmware/remote/feather_m0_scd30_batt_lora_display_max4466_bh1750)

Resultant data feed [here](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de)

### Adding an amplifier to the SPW2430

For reference, Eagle CAD for max4466 is [here](https://github.com/adafruit/Adafruit-MAX4466-Electret-Mic-Amplifier-PCBs) -- can likely use the amp setup they have ...

---
2020-12-03 08:25:40

co2 sensor seems to have stopped last night? and reset on m0 didn't reset it -- needed to power cycle -- do we need a mosfet on it?

if we use esp32 for mic, do we need to worry about analog performance / drift?

Should SEL be floating to ground (or tied to ground) on SCD30? https://forum.sparkfun.com/viewtopic.php?t=48325

issue where bh1750 library hangs [here](https://forum.mysensors.org/topic/9214/bh1750-library-hangs).

tried co2 + bh1750 -- co2 freezes 

can't reset, co2 still 'frozen'

changed firmware to remove bh1750, but kept bh1750 on board, co2 freezes

then removed wires of bh1750, no freezing yet

I wonder if it's an 'address' issue with the bh1750?  can check.  info on the module i'm using is [here](https://www.amazon.com/SMAKN%C2%AE-BH1750-Digital-intensity-Arduino/dp/B014IP9V4I)

BUT:  light sensor is of questionable use for now.  better perhaps to have breakout for i2c.  

real next steps:

- check esp32 feather functionality on rev_b breakout board
- pull in bmp388 parameters [X]
- how to incorprate the max4466 electret, or add amplification to the smt mic module? (the 'sw something')?

Seems like the max4466 board avail on amazon ([here](https://www.amazon.com/uxcell-Electret-Microphone-Amplifier-Adjustable/dp/B07W3HV92Z/ref=sr_1_10?dchild=1&keywords=max4466&qid=1607006487&s=industrial&sr=1-10)) is fairly identical to that sold by Adafruit. wonder if the op-amp is similarly set up.

So, design:
- esp32
- oled
- bmp388
- scd30
- mic (electret or smt)
- buttons 
- leds to show mic level? or just: remove board
- breakouts for avail pins
- qwiic breakout

i like how explicit the mic on the co2 sensor is ...
and it's an analog reading -- if it's removed, just get 'zero' for analog measurement.

that might be the place to start. simplify the design. part is avail on amazon, alternative to adafruit.  

don't even need a switch -- just remove the part.

Nice feature:  basic board that can be produced with SMT parts; then, add adafruit boards for pressure and/or mic as one likes.

### Adding BMP388 functionality to REV_B

Tutorial on Adafruit [here](https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx/arduino).

Actually, confusing way to do the i2c / spi ... not sure how to hook up to Feather's i2c ...

Shifting to Sparkfun library [here](https://www.sparkfun.com/products/17001) ....

which leads to the library [here](https://github.com/MartinL1/BMP388_DEV)

Nice feature:  allows for use with ESP32, has special code for that ... (maybe just picks particular pins?)

---
2020-12-03 10:10:13

Looks like BMP388 code is working (using the lib from MartinL1, 'BMP388_DEV', [here](https://github.com/MartinL1/BMP388_DEV)).

Also: having the device on a Feather LoRa, using a gateway, is a nice system -- can deploy several all over a building, or across a campus, even if no wifi available.  

University systems have issues using wifi.  This way, can use where there is wifi.  Also: get *one* device registered on wifi network, rather than several.  (Typically, for IT on campus, would need to register every one).  

Also note:  might be useful to have a PC with a heltec and a python script. That way the PC can be registered on the network, the heltec can be placed at a height. 

Also: might be good to have a microsd on the heltec.

Need to test soon in a university / high school class setting.

Can we get serial input to a chromebook this way?

---
2020-12-03 15:58:47

Features to add:
- DIP switch to identify the remote node, if feather lora based
- access point signup w/ node id entry

Another reason to do esp32 + rfm95 is to allow for access point configuration of device

---
2020-12-04 22:21:45

|[![](/img/co2/co2_mic_dec4_2020.png)](/img/co2/co2_mic_dec4_2020.png)|
|:--:|
| Red is mic data, blue is CO2.  Spreadsheet is [here](https://docs.google.com/spreadsheets/d/1y74CIL4FuVBikPx3nCTVWIgqVZ9oZfcVcnaa1pv78OU/edit?usp=sharing), based on feed [here](http://159.65.226.222:3000/api/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de/csv?limit=40000) (pulled on eve of Dec 4). |

---
2020-12-06 09:54:24

### Feather ESP32 remote wifi sensor ("REV_B")

All systems go!

![](/img/co2/feather_esp32_data_test.png)

![](/img/co2/feather_esp32_test.jpeg)

Feather ESP32 scd30 code for "rev_b" is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_b/firmware/wifi_sensor/feather_esp32_wifi_bayou_scd30_display)

### Heltec ESP32 + LoRa remote wifi sensor ("REV_C")

SSD1306 with the u8x8 library tutorial [here](https://tronixstuff.com/2019/08/29/ssd1306-arduino-tutorial/)

List of u8x8 fonts [here](https://github.com/olikraus/u8g2/wiki/fntlist8x8)

[Arduino code for heltec-based "rev_c" with bmp388 is here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_c/firmware/wifi_sensor/heltec_wifi_bayou_scd30_display_bmp388)

[without bmp388 is here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_c/firmware/wifi_sensor/heltec_wifi_bayou_scd30_display)


![](/img/co2/co2_rev_c.jpeg)

### Max4466 on ESP32

[Adafruit tutorial](https://learn.adafruit.com/adafruit-microphone-amplifier-breakout/measuring-sound-levels) on Max4466 

---
2020-12-06 14:42:04

Fixed the microphone issue with the Feather ESP32 -- seems to be necessary to refer to A0 by its gpio number for feather esp32 -- i.e., "26" for A0.

Updated code for REV_B Feather ESP32 is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_b/firmware/wifi_sensor/feather_esp32_wifi_bayou_scd30_display)

Posting data from REV_B with Feather esp32 ('wifi sensor' mode) [here](http://159.65.226.222:3000/api/drives/516d21cb12f7e724be7c3d1ea66b7113316fb9f4018d2a9345bacf4b05f00c74/csv).

---
2020-12-06 15:08:54

Parallel tests:

REV_C board (heltec) feed [here](http://159.65.226.222:3000/drives/8b3f9d89866ac91fd748e2d89e8005f96e77e6cdeef10ffd033d74aeff1105ab)

REV_B board (with Feather ESP32) feed [here](http://159.65.226.222:3000/drives/516d21cb12f7e724be7c3d1ea66b7113316fb9f4018d2a9345bacf4b05f00c74)

---
2020-12-06 19:05:45

Jupyter plotting csv file tutorial [here](https://towardsdatascience.com/plotting-with-pandas-an-introduction-to-data-visualization-8bd7c0831650)

Another nice guide [here](https://www.geeksforgeeks.org/python-read-csv-using-pandas-read_csv/)

plotting two data traces on the same graph: 

```
ax = df1.plot()
df2.plot(ax=ax)
```

---
2020-12-06 20:02:10

### <a name="compare_scd30"></a> Comparing two scd30 sensors

**Procedure:** Sensors were placed side-by-side.  No effort was made to calibrate manually.  They had been operating for only a few seconds before data was collected; so the automatic calibration algorithm (which begins at 7 days) had not been in operation.  Next attempt will involve manually calibrating both in same fresh air conditions, and looking at resulting behavior.

|![](/img/co2/scd30_cross/compare_hardware.jpg)|
|:--:|
| Using two SCD30 sensors, side-by-side.  Left: "REV_C" board using Heltec 32 Wifi LoRa v2 as micro. Right: "REV_B" board using Feather ESP32 as micro. | 

|[![](/img/co2/scd30_cross/compare.png)](/img/co2/scd30_cross/compare.png)|
|:--:|
| Comparison of two side-by-side SCD30 CO2 sensors for a given time range.  Jupyter notebook used in the analysis is [here](/img/co2/scd30_cross/compare.ipynb). |

Tweet about aerosol transmission [here](https://twitter.com/kprather88/status/1335738927156588547?s=20).

## Aerosol / virus researchers

- [Don Milton](https://twitter.com/Don_Milton)
- [Kimberly Prather](https://twitter.com/kprather88)
- [David Michaels](https://twitter.com/drdavidmichaels); [on Maddow](https://twitter.com/jksmith34/status/1333297370872819715?s=20)
- [Linsay Marr](https://twitter.com/linseymarr)
- [Florian Krammer](https://twitter.com/florian_krammer)
- [Ian Mackay](https://twitter.com/MackayIM)
- [Joseph Allen](https://twitter.com/j_g_allen) -- 'Health Buildings'
- [Marc Lipstich](https://twitter.com/mlipsitch)


## SCD30 Pressure Correction and Calibration Disable

Sparkfun SCD30 library is [here](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library), and has several relevant examples:
- [Pressure correction](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library/blob/master/examples/Example2_SetOptions/Example2_SetOptions.ino)
- [Disable autocalibration](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library/blob/master/examples/Example4_DisableCalibrate/Example4_DisableCalibrate.ino)
- [Alternative i2c / Wire](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library/blob/master/examples/Example3_WireOptions/Example3_WireOptions.ino)

[SCD30 datasheet](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library/blob/master/documents/Sensirion_CO2_Sensors_SCD30_Preliminary-Datasheet.pdf)

### Forced calibration of SCD30

See 1.3.7 (p. 7) of document:

[SCD30 interface description](https://cdn.sparkfun.com/assets/d/c/0/7/2/SCD30_Interface_Description.pdf)

For implementation, look at Sparkfun library and follow procedure for temperature / altitude compensation.

E.g. altitude compensation code begins [here](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library/blob/0a6ca999ffcb725a9d528f98bc87881ac1688b35/src/SparkFun_SCD30_Arduino_Library.cpp#L139)

```
//Set the altitude compenstation. See 1.3.9.
bool SCD30::setAltitudeCompensation(uint16_t altitude)
{
  return sendCommand(COMMAND_SET_ALTITUDE_COMPENSATION, altitude);
}
```

Can we set this up with a button? Would be nice if it works mid-loop ... test with ESP32?

ESP32 GPIO interrupts guide [here](https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/)

Fork of Sparkfun library [here](https://github.com/edgecollective/SparkFun_SCD30_Arduino_Library)

Experimental feed is [here](http://159.65.226.222:3000/api/drives/5bd89f163a158797ab86668e67ac92736905c4056ec03600b8c37b0296da6763/csv)

Update: the library already includes the functionality!

```
setForcedRecalibrationFactor(int co2_concentration_ppm)
```

the 'calibrate' button on rev_c is pin 36

ESP32 debouncing a button w/ interrupts, [here](https://www.switchdoc.com/2018/04/esp32-tutorial-debouncing-a-button-press-using-interrupts/)

The [ultimate debouncer](https://github.com/craftmetrics/esp32-button) from Hackaday

[Heltec pinout discussion](http://community.heltec.cn/t/wifi-lora-32-v2-pinout-diagram-questions/1762)

Following debounce [here](https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/)

---
2020-12-06 21:37:07

Meanwhile, verify that the forced calibration works.  Expectation:  if we do it after a few loops, the current CO2 value will suddenly appear to be whatever we force it to be.

Force calibrate seems to work!

![](/img/co2/force_calibrate.png) 

Code (still working out a button debounce routine) [here]()

overnight feeds as of 2020-12-06 22:13:47:

[feather esp32 feed](http://159.65.226.222:3000/api/drives/516d21cb12f7e724be7c3d1ea66b7113316fb9f4018d2a9345bacf4b05f00c74/csv)

[heltec (calibrated)](http://159.65.226.222:3000/api/drives/5bd89f163a158797ab86668e67ac92736905c4056ec03600b8c37b0296da6763/csv)

---
2020-12-07 09:35:29

## Plan update

- leaflet floormap

---
2020-12-07 10:23:27

Further reading on temperature / other compensation for the SCD30, ["Low Power Mode for the SCD30"](https://www.mouser.com/pdfdocs/CD_AN_SCD30_Low_Power_Mode_D2.pdf)

Observation: when force calibrating the sensor outdoors in much lower temperature and assuming 410 ppm, it recovered inside to < 400 ppm.  This may be because of temperature effects. There is a temperature compensation function for the sensor.  It requires an external temperature reading for calibration.  This might be done with a 1-wire temp sensor attached to the device.

So, advantages of the pvos device:
- 1-wire external temp sensor compensation (similar in setup to maxbotix)
- external pressure sensor compensation
- microphone data
- i2c and other breakout pins for additional setup
- wifi, bluetooth, lora configurations
- open hardware design

---
2020-12-07 10:37:03

Blog on use of SCD30 [here](https://blog.devmobile.co.nz/tag/scd30/)

TODO: need to find field calibration guide for SCD30.

[SEEED wiki on SCD30](https://wiki.seeedstudio.com/Grove-CO2_Temperature_Humidity_Sensor-SCD30/)

[SCD30 design-in guidelines](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)

![](/img/co2/scd30_protection_from_light.png)

I believe the airflow isolation issue is the reason for seeing such strong fluctuations of measurements when outdoors in wind, and is a strong argument for designing an enclosure:

![](/img/co2/scd30_airflow_isolation.png)

![](/img/co2/scd30_thermal_decoupling.png)

![](/img/co2/scd30_coupling_ambient.png)

![](/img/co2/scd30_auto_self_calibration.png)

---
2020-12-07 11:53:18

Resurrecting the React code ...

![](/img/co2/react_experiments.png)

React sparkines library [here](https://www.google.com/search?q=react+sparklines&oq=react+sparklines&aqs=chrome.0.35i39j69i59j0l5j69i60.1939j0j7&sourceid=chrome&ie=UTF-8)


How to trigger a popup in Leaflet, [here](https://gis.stackexchange.com/questions/88273/triggering-click-event-on-leaflet-map)

[React Leaflet documentation](https://react-leaflet.js.org/docs/example-external-state)

Stack overflow for interacting with leaflet in React [here](https://stackoverflow.com/questions/38730152/popup-always-open-in-the-marker) -- with associated [fiddle](https://jsfiddle.net/jrcoq72t/)

[Victory Chart](https://formidable.com/open-source/victory/docs/victory-chart/)

[pswoodworth's code for poll / leaflet](https://github.com/pswoodworth/poll-watcher/blob/master/pages/index.js)

[How to use React Leaflet](https://blog.logrocket.com/how-to-use-react-leaflet/)

[Using Leaflet for non-map images](https://stackoverflow.com/questions/13110763/is-leaflet-a-good-tool-for-non-map-images)

[Nice tutorial on using leaflet to zoom into images](https://build-failed.blogspot.com/2012/11/zoomable-image-with-leaflet.html) -- has some nice tiling programs!

[Using leaflet to pan and zoom a big image](https://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html)

- working gist [here](https://gist.github.com/longhotsummer/ba9c96bb2abb304e4095ce00df17ae2f) -- nicely works (as 'start.html' in 

## first go at non-geographical imagery 

Based on: ["using leaflet with non-geographical imagery"](http://omarriott.com/aux/leaflet-js-non-geographical-imagery/) tutorial.

Code in 'trial.html' [here](https://github.com/edgecollective/sensor-webclient/blob/main/trial.html)

![](/img/co2/leaflet_crs.png)

leaflet map in a flexbox layout [here](https://stackoverflow.com/questions/27240894/leaflet-map-in-a-flexbox-layout)

See 'side.html' [here](https://github.com/edgecollective/sensor-webclient/blob/main/side.html):

![](/img/co2/leaf_floor.png)

Leaflet guide to non-geographic maps [here](https://leafletjs.com/examples/crs-simple/crs-simple.html)

Using CRS in React-Leaflet [here](https://stackoverflow.com/questions/48185208/set-react-leaflet-map-crs-atribute)

Example with imageoverlay and react-leaflet [here](https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js)

Note: "reg-leaf" branch of spark-leaf repo is a working example.

Jamming on inserting code from [here](https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-forked-n57cu?file=/src/Map.js) into my current setup 

hmm, this approach seems simple [here](https://stackoverflow.com/questions/48185208/set-react-leaflet-map-crs-atribute)

support for non-geographical maps [here](https://github.com/PaulLeCam/react-leaflet/issues/311)

---
2020-12-07 21:23:59

'clicknav' is a working branch.

fetching data in react using hooks [here](https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a)

another article [here](https://dev.to/nicomartin/the-right-way-to-fetch-data-with-react-hooks-48gc)

much nicer guide [here](https://www.pluralsight.com/guides/fetching-data-updating-state-hooks)

working with 'livedata' branch of spark-map currently ...

using react and fetch [here](https://reactjs.org/docs/faq-ajax.html)

---
2020-12-08 10:58:47

### interactive viz of data on map

nice leaflet grid layer code for displaying lat / long [here](https://gist.github.com/letmaik/e71eae5b3ae9e09f8aeb288c3b95230b)

Nice leaflet grid layer [here](http://bl.ocks.org/letmaik/e71eae5b3ae9e09f8aeb288c3b95230b)

---
2020-12-08 12:39:52

running p2p-farm-server locally, branch: 'mappin'

http://localhost:3050/drives/94dc05a75bc3ac9b064cbe1c2ae3264e96ca753ff05aef28303d1c5b752a1f4b/console

reference putscript_local.sh for the appropriate keys and to add more data

![](/img/co2/co2_console.png)

SVG sparklines [here](https://github.com/fnando/sparkline)

keeping popups open in leaflet [here](https://stackoverflow.com/questions/9047931/leaflet-js-open-all-popup-bubbles-on-page-load)

intro to leaflet [here](https://leafletjs.com/examples/quick-start/)

add and remove leaflet circle on click [here](https://gist.github.com/mollietaylor/8564724)

assigning ids to markers in leaflet [here](https://stackoverflow.com/questions/25683871/assign-id-to-marker-in-leaflet)

adding horizontal lines in chartjs [here](https://riptutorial.com/chart-js/example/22333/draw-horizonal-lines)

![](/img/co2/console_demo.png)

above is 'mappin' branch of p2p-farm-server on gitlab

---
2020-12-09 17:39:11

modfiying leaflet icon on mouseover [here](https://gis.stackexchange.com/questions/267400/highlight-l-divicon-on-mouseover-or-programmatically-in-leaflet-map)

### leaflet icon resize

nice working example of buttons and overlap and highlighting [here](https://github.com/edgecollective/leaflet-highlight).

### references for covid 19

https://www.providencejournal.com/story/news/coronavirus/2020/08/14/umass-professor-expands-on-risks-of-covid-19-and-how-to-avoid-them-in-schools/113968580/

https://twitter.com/ErinBromage

https://twitter.com/ErinBromage/status/1336769111922241539

great writings collected here: https://twitter.com/JuliaLMarcus

battery-powered datalogging, for use on e.g. planes?
export to csv ...

---
2020-12-10 11:08:32

## Curated Twitter list of air quality / covid / science

Link [here](https://twitter.com/i/lists/1337064747762642947)

Key organizing tweet by Jose-Luis Jimenez, [here](https://twitter.com/jljcolorado/status/1335025183493599232?s=20) and [here](https://twitter.com/jljcolorado/status/1337066415694733320?s=20).  Jimenez group [here](http://cires1.colorado.edu/jimenez/). 

Jimenez group listing [here](http://cires1.colorado.edu/jimenez-group/)

Aranet4 listing [here](https://www.amazon.com/Aranet4-Home-Temperature-Ink-Configuration/dp/B07YY7BH2W)

Article covering Jimenez int'l org around air quality and covid [here](https://drive.google.com/file/d/1rBToRlgQfRoEPuY1WHhlwmIhcl5WrTye/view?usp=sharing)

Online presentation [here](https://www.aireamos.org/presentacion-online-de-la-nueva-plataforma-aireamos/)

----
2020-12-10 13:42:11

note on next steps:

- see how the two scd30s compare after force calibration procedure, side-by-side (don't need to be calibrated outdoors, just cross-comparison)
- make sure can force calibrate the k30 and z19 and then do cross-comparison -- if they work comparably, can be lower-cost option
- end-to-end demo of tech, including floorplan viz
- (storage to microSD? easy next step)
- kit assembly instructions for heltec version and for feather version
- make a video explaining the project and the status
- show Jupyter and R workflows

---
2020-12-10 17:44:16

## SCD30 Cross-comparison with force calibration

- Heltec + REV_C using [this code](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_c/firmware/wifi_sensor/heltec_wifi_bayou_scd30_display_bmp388_calibrate) posting to [this feed](http://159.65.226.222:3000/api/drives/5bd89f163a158797ab86668e67ac92736905c4056ec03600b8c37b0296da6763/csv)
- Feather ESP32 + REV_B using [this code](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_b/firmware/wifi_sensor/feather_esp32_wifi_bayou_scd30_display_calibrate) posting to [this feed](http://159.65.226.222:3000/api/drives/516d21cb12f7e724be7c3d1ea66b7113316fb9f4018d2a9345bacf4b05f00c74/csv)

Note on experimental setup.  Code is set up to broadcast every 90 seconds; on third round, it force calibrates to 410 ppm; there is a parameter named 'forced' that is '0' initially and then '1' after forced calibration. Both devices were reset simultaneously, hopefully they will be relatively in sync when force calibrated.  need to check difference.  

Update: no, better to force calibrate in beginning.  Send value right after force calibration, then reset to 0.  

---
2020-12-10 20:21:52

- not sure that the force calibrate functions were simultaneous, might need to run again ...
- but as a one-off the data looks spot-on right now ...

---
2020-12-10 22:03:01

- the data was spot on because the devices were force calibrating every cycle :) so they were always at around 410 ppm.
- edited code so that it would force calibrate only once, about 2 minutes into cycle of measuring every 30 sec.  Data is here:

![](/img/co2/co_test.png)

Note that the orange line is the FeatherESP2, and tracking the 'forced' parameter indicates that the device rebooted and then re-force calibrated to 410 ppm.  Not sure why it rebooted -- perhaps the power supply on the Feather is insufficient to handle the SCD30, or the memory?  Note that the readings were more variable for the Feather prior to the reboot.

![](/img/co2/co_test_color.png)

---
2020-12-10 22:12:26

Added legend, and the 'forced' parameter, to make it all more explicit. Here, the red line is the Feather32 data, the blue is the Heltec. The accompanying 'forced' data are shown, multiplied and shifted to show on scale.

New experiment:  restart code, but swap the SCD30 modules.

---
2020-12-10 22:18:31

Update:  swapped the scd30.  heltec didn't start up at first. realized that i placed the scd30, was shorting something.  so there may be some odd data out of the heltec now.  if there was something wrong with the scd30 module associated with the feather, it's on the heltec now.

- Last 'forced' dip before '53000' is beginning of above run.
- 'forced' event in green (feather32) only at '55000', feather32 seemed to reset and then 'force' to 410 (as firmware demands on reset)
- powered off, swapped scd30s, maybe shorted the one that was originally on the feather by plugging it in improperly to heltec.  result is at '56500', shows forced status.  but devices somehow immediately end up 30+ppm apart. So at a little after 57000, did another reset (devices had been powered on).
- now they definitely do hit the same 410 mark, but diverge. could be oddness in enclosure setup -- one is closer to inlet.
- going to readjust and then reset again.
- readjusted box, performed another collective reset now at approx 1607657789

Note -- if this immediate divergence is 'real', it could indicate that small variations in air flow are very important / and/or that one oughtn't to worry about fluctuations on order of approx 50 ppm.

Reasons it might not be 'real' -- one of the sensors is underpowered b/c of a different micro ... the scd30 sampling rate is too high, or we're force calibrating too soon ... others?

---
2020-12-10 22:45:58

![](/img/co2/co_test_color_2.png)

Ah -- after careful readjustment inside enclosure, looks like they did coincide more closely (or could be fluke) on restart (last restart / force calibration before the '80000' mark.) Will now monitor to see whether one of the devices exhibits odd behavior.

Now that I've switched scd30 modules ... if the data from the Feather32 still exhibits odd behavior, then my guess would be that the problem is the power supply / memory of the Feather32.  If the data from the heltec exhibits odd behavior, then the problem may lie with that particular scd30 module.

---
2020-12-10 22:53:13

![](/img/co2/co_test_color_3.png)

Last two resets are after readjusted enclosure. 

---
2020-12-11 06:14:27

Results from overnight, after initial force calibration on both sensors (as per above description):
![](/img/co2/co_test_color_4.png)

Systematic difference (red climbs faster) is perhaps due to placement in box / closer to airflow opening.

Plot of difference between the two traces above:
![](/img/co2/co_test_color_diff.png)

### SCD30 Field Calibration Guide

SCD30 Field Calibration Guide [here](/img/co2/CD_AN_SCD30_Field_Calibration_D2.pdf)

Effects of forced recalibration (from guide):

![](/img/co2/frc_field_calibration.png)

Effects of automatic calibration (from guide):

![](/img/co2/asc_algorithm.png)

---
2020-12-11 08:03:52

Updated scd30 comparison:

![](/img/co2/co_test_color_5.png)

Differences:

![](/img/co2/co2_differences.png)

---
2020-12-11 09:25:16


![](/img/co2/co_test_color_6.png)

![](/img/co2/co2_differences_6.png)

### Jupyter Lab setup

Notebook for above analysis is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/master/analysis/cross_compare.ipynb)

![](/img/co2/jupyter.png)

---
2020-12-11 13:54:30

![](/img/co2/co_test_color_7.png)

![](/img/co2/co2_differences_7.png)

---
2020-12-11 22:33:39

### Revisiting the 'map' interface code

p2p-farm-server/public/console.html is the latest code connected to the p2p-farm-server, which does floorplan side by side with the charts.  

the route to visit is [here](http://0.0.0.0:3050/drives/94dc05a75bc3ac9b064cbe1c2ae3264e96ca753ff05aef28303d1c5b752a1f4b/console). 

It's determined in p2p-farm-server/routes/index.js

meanwhile, the code that connects buttons and highlights leaflet markers is [here](https://github.com/edgecollective/leaflet-highlight).  

---
2020-12-12 10:50:11

## console update

Video of attempt at interactive code [here](https://youtu.be/otHVABif8Rs), and below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/otHVABif8Rs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Relevant code is in 'console.html', [here](https://gitlab.com/dwblair/p2p-farm-server/-/blob/mappin/public/console.html); the routes portion of the server that handles that page is index.js, [here](https://gitlab.com/dwblair/p2p-farm-server/-/blob/mappin/routes/index.js).

Note: was able to resolve CORS errors when prototyping locally by simply referencing the '0.0.0.0' address rather than 'localhost'.

Inspirational map flood network viz [here](https://flood.network/) (link to actual viz seems to be broken).

---
2020-12-12 14:04:25

## Revisiting mic

Adafruit max4466 is [here](https://www.adafruit.com/product/1063). 
- Pinout from 'left to right' when mic is facing viewer and is oriented at 'bottom' is:  VCC GND OUT

Typical Amazon cheaper product is [here](https://www.amazon.com/HiLetgo-Electret-Microphone-Amplifier-Adjustable/dp/B07DRGF8C2/ref=pd_lpo_147_t_0/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07DRGF8C2&pd_rd_r=dc81b1e9-e296-4ec2-8eee-8f102542b805&pd_rd_w=Octxo&pd_rd_wg=EnXDs&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=BYWGQV117YHEYJBE8WNE&psc=1&refRID=BYWGQV117YHEYJBE8WNE)
- Pinout from 'left to right' when mic is facing viewer and is oriented at 'bottom' is also:  VCC GND OUT

![](/img/co2/adafruit_electret_dim.png)

Dimensions of board seem to be about (width x height) (15 mm x 22 mm). 

## qwiic connector, right angle

- listed on adafruit [here](https://www.adafruit.com/product/4208). "JST SH 4-pin" -- 'micro' / 'right angle' version.

![](/img/co2/jst_sh_4_right.png)

## qwiic connector, vertical

listed on adafruit [here](https://www.adafruit.com/product/4328). "JST SH 4-pin" -- 'micro' / 'vertical' version.

![](/img/co2/jst_sh_4_vertical.png)

## tactile switch side / horizontal

amazon listing [here](https://www.amazon.com/uxcell-Momentary-Pushbutton-Terminals-6mmx6mmx12mm/dp/B07JKWC6LH/ref=sr_1_18?dchild=1&keywords=tactile+switch+push&qid=1607805967&s=automotive&sr=1-18)

![](/img/co2/tactile_side.png)

For now: break out A0 and A1 pins to do the button measurement separately on a breakout if need be (to externalize the control, avoid interacting with scd30).  

Aside: nice [neobit project](https://github.com/ppelleti/NeoBit)

## battery for heltec 

micro li-ion board on Amazon [here](https://www.amazon.com/MakerFocus-Rechargable-Protection-Insulated-Development/dp/B07CXNQ3ZR/ref=pd_bxgy_img_2/138-2479136-9655161?_encoding=UTF8&pd_rd_i=B07CXNQ3ZR&pd_rd_r=6e7cfcdc-c293-4378-aa63-5c7473b5b896&pd_rd_w=45JGk&pd_rd_wg=s7u5J&pf_rd_p=f325d01c-4658-4593-be83-3e12ca663f0e&pf_rd_r=YHBZ9KHHR1X6CY0GS3E2&psc=1&refRID=YHBZ9KHHR1X6CY0GS3E2) -- 'jst 1.25 connector 2 pin'

Size: 8.5*25*40（mm）

---
2020-12-13 09:55:51

## buttons

mini pushbutton switch -- tall [via sparkfun](https://www.sparkfun.com/products/8605)

10 mm tall. 

How tall is a typical header?

Assortment of pushbuttons [here](https://www.amazon.com/DaFuRui-250pcs-Tactile-Momentary-Assortment/dp/B07KGR7L9M/ref=asc_df_B07KGR7L9M/?tag=hyprod-20&linkCode=df0&hvadid=312112220877&hvpos=&hvnetw=g&hvrand=4606913672532958917&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9058138&hvtargid=pla-614560844137&psc=1)

Omron B3F datasheet [here](https://4donline.ihs.com/images/VipMasterIC/IC/OMRN/OMRN-S-A0001309768/OMRN-S-A0001309768-1.pdf?hkey=52A5661711E402568146F3353EA87419)

![](/img/co2/tactile_side_connectivity.png)

need to swap out 'dual' switch for a single ..

![](/img/co2/in_progress.png)


## Guide for qwiic connectors

Discussion [here](https://forum.kicad.info/t/hand-soldering-jst-sh-connector/12894)

```
Connectors_JST:JST_SH_SM04B-SRSS-TB_04x1.00mm_Angled
```

Redo for easier hand soldering?

![](/img/co2/rev_e.png)

![](/img/co2/rev_e_3d.png)

![](/img/co2/qwiic_pinout.png)

[Qwiic adapter hookup guide](https://learn.sparkfun.com/tutorials/qwiic-adapter-hookup-guide/all)

![](/img/co2/qwiic_pin_assignment.png)

---
2020-12-14 13:27:09

## enclosure options

[link to smaller enclosure](https://www.amazon.com/LeMotech-Junction-Dustproof-Weatherproof-Electrical/dp/B07G58SLB1?th=1)

![](/img/co2/smaller_enclosure_co2.png)

Datasheet for smaller enclosure is [here](https://images-na.ssl-images-amazon.com/images/I/61P4XQPyJyL.pdf)

---
2020-12-14 21:52:32

## PCB ordering for REV_E

Github repo for REV_E is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_e/)

![](/img/co2/rev_3_3d_render.png)

![](/img/co2/rev_e_jlcpcb_render.png)


Zipped Gerber files for REV_E are [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/master/rev_e/atkins/co2_rev_e_gerber.zip)

## Next steps

- **TOP PRIORITY**: wifi manager setup for heltec gateway
- Attempt force calibration comparison, Z19 / K30 with SCD30
- Online structure for viewing multiple feeds
- Things Network demo code (using RPi) w/ Heltec
- Feather board setup -- enable Things Network by connection i01

---
2020-12-19 08:07:40

## Enclosures

![](/img/co2/lemotech_a.png)

![](/img/co2/lemotech_b.png)

![](/img/co2/lemotech_c.png)

---

## Qwiic

JST SH 4 pin micro -- vertical, [here](https://www.amazon.com/Micro-4-Pin-Connector-100mm-Female/dp/B01L5PSHDA/ref=sr_1_12?crid=J2RDX2QAWXZY&dchild=1&keywords=jst-sh+1.0mm&qid=1608386735&sprefix=jst-sh%2Caps%2C371&sr=8-12)

horizontal (as placed on rev_e) [here](https://www.adafruit.com/product/4208)

or as listed on sparkfun (horizontal) [here](https://www.sparkfun.com/products/14417)

---
2020-12-19 13:18:40



## uFL connector

adafruit uFL connector [here](https://www.adafruit.com/product/1661)

looking at feather m0 lora pcb for uFL connector reference [here](https://github.com/adafruit/Adafruit-Feather-M0-RFM-LoRa-PCB.git)

![](/img/co2/feather_m0_antenna.png)

## BMP3XX

BMP3XX adafruit firmware on github [here](https://github.com/adafruit/Adafruit_BMP3XX)

BMP3XX adafruit hardware design files on github [here](https://github.com/adafruit/Adafruit-BMP3xx-PCB)

## BMP390

BMP390 datasheet [here](/img/co2/bst-bmp390-fl000.pdf)

Adafruit BMP390 schematic:

![](/img/co2/sensors_BMP390_sch.png)

## BMP388

BMP388 datasheet [here](https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BMP388-DS001.pdf)

Adafruit BMP388 schematic:

![](/img/co2/sensors_BMP388_Sch.png)

Question: do we need to add a power supply to board? Seems to be a common way of keeping the power supply clean for the pressure sensor chip.

Reference: [here](https://community.bosch-sensortec.com/t5/MEMS-sensors-forum/BMP388-PCBs/td-p/16815)

![](/img/co2/bmp388_regulator.png)

Looks like we should add a regulator. Default to using the Adafruit part, change if something else seems better. 

Adafruit uses AP2112K-3.3 for the BMP390 breakout (more recent breakout). This also seems to be used for the feather.

Look to see if it's also used for the Feather ESP32 -- and what its specs are -- if it can source sufficient current for the full CO2 board (which are ...?)

Q: 
- what LDO is used on the Feather ESP32?
- what are the current req's for this board?
- footprint to use for AP2112K?  (SOT-23-5 assumed)

## LDO

AP2112K-3.3 on [Digikey](https://www.digikey.com/en/products/detail/diodes-incorporated/AP2112K-3-3TRG1/4470746) and associated [datasheet](https://www.diodes.com/assets/Datasheets/AP2112.pdf)

Looks like it can provide 600 mA. 

max input 6V

Assume SOT-23-5 package on Adafruit 

![](/img/co2/feather_m0_power.png)


## Battery charger

Also add MCP73831.

Feather M0 MCP7831:

![](/img/co2/feather_m0_mcp7831.png)

## FTDI

Do FTDI board separately? yes b/c DTR might be needed 

![](/img/co2/ftdi_plus.png)

## Reset and GPIO0

TODO: Need also to break out the reset and other button, in case ftdi cable someone uses doesn't expose dtr ...

Buttons -- use SW_Push symbol ... with which SMT buttons? use adafruits?

these are the KMR2 buttons from the Feather and etc.  datasheet is [here](https://www.ckswitches.com/media/1479/kmr2.pdf)

look to see how adafruit did it with the huzzah board 

![](/img/co2/huzzah_breakout.png)

Ah, there we go -- GPIO0 is floating:

![](/img/co2/huzzah_pin_schem.png)


## Calibrate / other buttons

TODO: add the side-mounted through-hole buttons that ordered on Amazon, and that were present on REV_E

![](/img/co2/buttons_rev_e.png)

## JST connectors

Add connectors for micro and reg lithium ion?  Might be nice for folks used the world of feathers.

Using standard Adafruit one (2-pin JST PH)

as well as a micro one -- JST SH -- SM02B-SRSS-TB(LF)(SN) -- digikey link [here](https://www.digikey.com/en/products/detail/jst-sales-america-inc/SM02B-SRSS-TB-LF-SN/926708)

![](/img/co2/jst_sh_2_horizontal.png)

## microUSB

this would simplify things. 

Q: Possible to solder? Look at Feather ESP32 schematic / footprint. 

Maybe this is a separate project -- make an ftdi header board.

Need to decide on nice microUSB footprint. SMT would be nice, and fine for this context -- don't need through-hole. feather esp32 part should be fine. see if you can source them on digikey (or which smt parts are easy to source).

Adafruit microUSB part is the 4UConn 20329 v2, datasheet [here](https://cdn-shop.adafruit.com/datasheets/1833_MicroB_20329.pdf)

Link to Adafruit microUSB part [here](https://www.adafruit.com/product/4023?gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IKvJSYo8HQ0puhsz5kJ9BQRWiMQ9BnAQePovzEpwGElwPXCAUFrhMaAl0VEALw_wcB)

MicroUSB B with KiCad footprints:

- 105017-0001 on digikey [here](https://www.digikey.com/en/products/detail/molex/1050170001/2350832)

the microUSB device used on the riffle is [here](https://www.digikey.com/en/products/detail/10104111-0001LF/609-4053-1-ND/2350359); datasheet is [here](https://cdn.amphenol-icc.com/media/wysiwyg/files/documentation/datasheet/inputoutput/io_usb_micro.pdf?__cf_chl_jschl_tk__=c05332b2f0e5b1a38d92708593c5ac3845744461-1608419698-0-ASmLq4QwyzKwGjwO6fdYVigeQ4gjdIX1gZ19ZX1NFBYK5yl0GJQcm1GwAE49yV3B46VJCLx2ZmTwBpWX84x49qPez9a0y5TxePaTPoF9bSIll5gLVEm1KTxXQ3kqQACaxgFW2nphPpOQcES3grOkdJYnxamcMMU7Lt-avOTf-no-QN4kinudAT-iKUxfIYQ40YgmVqNmlEo8KvScG_EaRo2kvadOApWRskv2XRxP_u5PhOz91YzkSa5flpq-PdCqmW0xeskIesEpQssduR1RFk26INRnvE5A39wt3CdFUvG4DYYrYAY-69sdn2puRzdnh346jUmxsGoCcGEnsaRzKZRVBgwYtBTPF2FJtC_ZlKW1cwqEgAPH0W-lPe0l4bZuKawRx4_ZO_QGBgK0SfsjGnnhmZOEOtS47U_3VH-CF6USoGkij080JGCsPQMSHCbWGiA0jl5NNzziUgrNat0vrnE)

![](/img/co2/amphenol_diffs.png)

above left: 10104110; above right: 10104111

some optoins for footprints in kicad:
- Molex 105017-0001 -- [digikey](https://www.digikey.com/en/products/detail/molex/1050170001/2350885); [datasheet](https://www.molex.com/pdm_docs/sd/1050170001_sd.pdf)
- Molex 105133-0001
- Molex 105133-0031
- Molex 47346-0001

A recommended Amphenol part is [here](https://www.digikey.com/en/products/detail/amphenol-icc-fci/10118194-0001LF/2785389)



## Filtering / decoupling

TODO Need to add caps from all relevant sub-circuits:
- subcircuit (reference schem)
- ESP32 (feather esp2)
- RFM95 (feather M0)
- MCP7381 (feather M0)
- BMP388 (adafruit BMP388 breakout)
- power (feather esp32 / m0)

Possible to add footprint for USB chip *and* allow FTDI?

Adafruit Feather ESP32 eagle files [on github](https://github.com/adafruit/Adafruit-HUZZAH32-ESP32-Feather-PCB)

Feather ESP32 schematic:

![](/img/co2/huzzah32_feather_schem.png)

CP2104 subcircuit:

![](/img/co2/cp2104_schem.png)


## microSD

the microSD card used on the Riffle 0.1.8 is [here](https://www.digikey.com/en/products/detail/DM3D-SF/HR1941CT-ND/1786515)

---
2020-12-19 19:00:53

TODO: double check pin order on JST connectors ... 

![](/img/co2/jst_pin_order.png)

DMG3415U p-mosfet used in power circuit for Feather ESP32 [here](https://www.digikey.com/en/products/detail/diodes-incorporated/DMG3415U-7/2052768); [datasheet](https://media.digikey.com/pdf/Data%20Sheets/Diodes%20PDFs/DMG3415U.pdf); SOT23; 

![](/img/co2/dmg3415u_data.png)

to check orientation / pin assign for the pmos as part of the power circuit, here's what we see on the feather esp32:

![](/img/co2/q3_feather_pmos.png)

![](/img/co2/heltec_wifi_lora_v2_pintout.png)

Diode -- MBR120 -- SOD-123FL -- [datasheet](https://www.digikey.com/en/products/detail/on-semiconductor/MBR120VLSFT1G/893861)

Note: used KiCAD 123F rather than 123FL

now I have all of them avail.  seems like sod 123FL is the most pop part on digikey.  but 123 and 123FL are avail. see [here](https://www.digikey.com/en/products/base-product/on-semiconductor/488/MBR120/31292)

---
2020-12-19 20:37:04

latest updates to board design ("REV_D") are [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_d/atkins)

note: need to review and see if there are any remaining changes.

might try to place a microSD on the board and guess at a CS pin; but also break out SPI + optional CS pins. If SPI conflict, might be able to start by only doing LoRa (SPI) OR microSD (SPI) on bus in any given firmware.

TODO: 
- look into adding a mic, or a header for one
- add extension header
- add qwiic connector
- re-measure and redo the oled & scd30 outlines, to ensure enough space

![](/img/co2/rev_d_3drender_dec_19.png)

![](/img/co2/board_rev_d_process.png)


if add a smt mic, add a switch
otherwise: maybe just make it an optional DIP add-on ...

---
2020-12-20 08:21:38

rather than replicate the mosfet on the power supply, maybe just have one at the intake?

alright -- emulate feather 32 instead of heltec. we know that the circuit works, and it's the same esp32 module, with same pins avail.  

iterate to fancier version of batt meas circuit.

check against tinypico for power circuit

nice reference for esp32 pinouts and which pins to use [here](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)

default spi pins on esp32 for lora [here](https://randomnerdtutorials.com/esp32-lora-rfm95-transceiver-arduino-ide/)

![](/img/co2/esp32_lora_random_nerd.png)

Hog 32 schematic:

![](/img/co2/hog32_schem.png)

using the arduino ide + esp32 + sd card [here](http://www.iotsharing.com/2017/05/how-to-use-arduino-esp32-to-store-data-to-sdcard.html)

update: heltec uses gpio5 for lora sck; feather esp32 uses gpio5 for sck; so that's fine. 
default to using feather esp32 pinouts.

pins 34,35,36,39 are input only.  use these on buttons.

ref for using sd card featherwing with feather esp32 [here](https://learn.adafruit.com/adafruit-adalogger-featherwing/using-the-sd-card) -- cs is on gpio33

## BMP388 wiring / connections

nice reference [here](https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx/arduino)

## Qwiic pin arrangement

![](/img/co2/qwiic_arrangement.png)

## Adalogger featherwing pin arrangement

(mimic in rev_d)

![](/img/co2/adalogger_featherwing.png)

## Advice regarding microusb ground

Reference [here](https://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield)

## SOD123 oddness?

TODO: Look into changing footprint ...

## Pad sizes

![](/img/co2/pin_sizes.png)

---
2020-12-22 09:41:59

for low power tests -- look up tinypico schematic

schematic [here](https://cromwell-intl.com/open-source/raspberry-pi/sdr-getting-started.html)

and in our own repo [here](/img/co2/TinyPICO_Schematic.pdf)

key part is the power subcircuit:

![](/img/co2/tinypico_power.png)

This is the regulator they are using on the board [here](https://www.digikey.com/en/products/detail/on-semiconductor/NCP167BMX330TBG/9169761)

and this is the mosfet [here](https://datasheet.lcsc.com/szlcsc/Leshan-Radio-LP0404N3T5G_C172433.pdf)

analysis: looks like we've got essentially an identical circuit; they make a different choice of mosfet, but we can probably dial that in easily ....

---
2020-12-22 10:00:06

battery voltage meas reference on jeenode [here](https://jeelabs.org/2013/05/16/measuring-the-battery-without-draining-it/index.html)

TODO: check reset subcircuit -- match feather 

---
2020-12-24 05:04:43

Test of the co2 board "rev_e"!

Used firmware [here]()

bayou data feed is [here](http://159.65.226.222:3000/drives/493074c83fde57d306e13d972739d8b4d2c7d1d7506835264b1e196f979a87ec)

![](/img/co2/rev_e_test_bayou.png)

---
2020-12-27 08:57:35

Enclosure arriving today linked to on Amazon [here](https://www.amazon.com/gp/product/B07G58SLB1)

![](/img/co2/small_enclose.png)

example enclosure from pac-tec [here](https://www.pactecenclosures.com/product-detail.php?productid=165&seriesid=73&classid=28)

free samples [here](https://www.pactecenclosures.com/free-samples.php)

the OD43 looks good [here](https://www.pactecenclosures.com/product-detail.php?classid=36&seriesid=39&productid=202); drawing [here](https://www.pactecenclosures.com/pdfs/drw_OD43.pdf)

![](/img/co2/rev_e_built.png)

![](/img/co2/rev_e_soldered.png)

![](/img/co2/rev_e_collection.png)

---
2020-12-27 15:55:50

Update:  small enclsoure arrived.  The shape is a bit awkward, and it was anyway broken.  If going with plastic enclosure, might be better to find another / a specific manufacturer.

Rev_f was an attempt to re-spin rev_e in order to fit inside 
New idea:  3d print a nice enclosure, and then also design a cardboard one.  Run them side-by-side for a few days to see any differences.  Humidity might be a factor; but can line inside with tape, and humidity is supposedly compensated for.  

---
2020-12-27 20:24:24

openscad ...

designing a [box](https://www.instructables.com/Creating-a-custom-sized-box-for-3D-printing-with-O/) with openscad

3d printed enclosures with openscad [here](https://scholarslab.lib.virginia.edu/blog/3d-printed-enclosures-with-openscad/)

---
2020-12-28 07:28:38

Test of REV_E system starting [here](http://159.65.226.222:3000/drives/f447b1c81ee96c7c0783fc4a7c1ac379cebe92bef8459803f89665f76b023465)

UPDATE: Looks like it never really went above initial baseline (which started around 8:10 AM on below graph):

![](/img/co2/co2_10_conant.png)


Aside: nice info on openscad shapes / language [here](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#cube)

---
2020-12-28 11:52:02

## <a name="openscad"></a> Making an enclosure for Rev_E using OpenSCAD

Description of process of making an enclosure for Rev_E ([kicad board files for RevE](https://github.com/edgecollective/co2-remote-and-gateway/tree/lay3/rev_e/atkins)) in the below video:


<iframe width="560" height="315" src="https://www.youtube.com/embed/kqvc1j8dmJ8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The associated scad file for this video is:
- [ver1c.scad](https://github.com/edgecollective/co2-remote-and-gateway/blob/lay3/rev_e/enclosure/ver1c.scad)

Some additional files / information:

| [ ![figB](/img/co2/rev_e_measurements.png)](/img/co2/rev_e_measurements.png)|
|:--:|
| Dimensions for PVOS CO2 Rev_E (KiCAD board files are [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/lay3/rev_e/atkins). |


| [ ![figB](/img/co2/ver1c_render.png)](/img/co2/ver1c_render.png)|
|:--:|
| OpenSCAD rendering of an enclosure protype. Scad file is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/lay3/rev_e/enclosure/ver1c.scad). |

| [ ![figB](/img/co2/ver1c_cover.png)](/img/co2/ver1c_cover.png)|
|:--:|
| STL file for cover is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/lay3/rev_e/enclosure/ver1c_cover.stl). |

| [ ![figB](/img/co2/ver1c_bottom.png)](/img/co2/ver1c_bottom.png)|
|:--:|
| STL file for bottom is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/lay3/rev_e/enclosure/ver1c_bottom.stl). |


Separately rendered cover and bottom are here:
- [ver1c_cover.stl](https://github.com/edgecollective/co2-remote-and-gateway/blob/lay3/rev_e/enclosure/ver1c_cover.stl)
- [ver1c_bottom.stl](https://github.com/edgecollective/co2-remote-and-gateway/blob/lay3/rev_e/enclosure/ver1c_bottom.stl)

---
2020-12-28 19:52:34

Craig has now revamped the scad file considerably, allowing everything to be measured in 'pcb coordinates' much more readily.

Latest branch is "ver1d_holes", and the associated scad file is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/ver1d_holes/rev_e/enclosure/ver1d.scad).

| [ ![figB](/img/co2/pcb_place_holes.png)](/img/co2/pcb_place_holes.png)|
|:--:|
| Latest version ("ver1d") of [OpenSCAD enclosure](https://github.com/edgecollective/co2-remote-and-gateway/blob/ver1d_holes/rev_e/enclosure/ver1d.scad). |

---
2020-12-28 20:34:24

Meanwhile, working on box enclosure:

| [ ![figB](/img/co2/box_enclosure.png)](/img/co2/box_enclosure.png)|
|:--:|
| Latest version 'box enclosure template' for REV_E. Scad file is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/ver1d_holes/rev_e/cardboard/ver1.scad)|

---
2020-12-29 10:59:16

![](/img/co2/box_enclosure_printable.png)

![](/img/co2/scad_reworked.png)

---
2020-12-29 13:53:04

latest file with holes for screen, mic, buttons is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/ver1d_holes/rev_e/cardboard/ver1.scad) -- still need to add USB and lora holes

![](/img/co2/screen_hole_cardboard.png)

maybe should make cover a bit narrower to accomodate the bend ends ?

---
2020-12-29 16:59:44

![](/img/co2/with_holes.png)

## REV_E Cardboard enclosure update
2020-12-29 20:13:52

File is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/cardboard/rev_e/cardboard/ver1.scad) (note that it's in the 'cardboard' branch)


![](/img/co2/b1.png)
![](/img/co2/b2.png)
![](/img/co2/b3.png)
![](/img/co2/b4.png)
![](/img/co2/b5.png)

## REV_E 3D printed enclsoure update

File is [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/master/rev_e/enclosure/ver1d.scad).

![](/img/co2/3d_enclosure_render.png)

---
2020-12-30 14:16:53

## Optimizing cardboard designs

The current design worked out better with a thinner cardboard box from Amazon, that has 'A3' and 'FLX' printed prominently on it, and which also had some graphics printed on it. Saving that as "a3_flx.scad" in the 'cardboard' branc.

Going to try also to optimize for the thicker (but I think more standard) Amazon box that has "Z12" and "120" printed on it, saving as 'z12_120.scad'. 

---
2020-12-30 14:55:05

Set up 'router-style' connection on rev_e ...

'heltec_router.ino' ...

---
2020-12-30 15:03:18

## Buttons

TODO: check button status on rev_e -- is "A" connected to LED pin?

Basic button check ...

Buttons check out.  Pin "A" is gpio37, Pin "B" is gpio36.

## Jupyter analysis

Todo!


## WiFi setup with ESP32

Nice tutorial [here](https://www.instructables.com/ESP8266-and-ESP32-With-WiFiManager/)

Ahh -- this is the code I'd found that worked nicely -- from hieromon, [here](https://hieromon.github.io/AutoConnect/gettingstarted.html).


Arduino WiFi module description [here](https://www.arduino.cc/en/Reference/WiFi)


---

captive portal [here](https://arduino.stackexchange.com/questions/77642/esp32-open-captive-portal-on-connected)

wifimanager for esp32 [here](https://github.com/zhouhan0126/WIFIMANAGER-ESP32)

or maybe better library [https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X-99TnVKjVM](https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X-99TnVKjVM)

this seems powerful -- not sure how to use though!

[https://github.com/warmcat/lws-esp32-factory](https://github.com/warmcat/lws-esp32-factory)

[https://github.com/tonyp7/esp32-wifi-manager/](https://github.com/tonyp7/esp32-wifi-manager/) looks like a great option

back to trying [https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X--CfHVKjVM](https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X--CfHVKjVM)

![](/img/co2/library_options.png)

documentation for wifi manager [here](https://github.com/tzapu/WiFiManager)

note: seems that we want the 'development' branch of wifimanger for esp32 -- as per instructions [here](https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X--CfHVKjVM)

tutorial on using wifimanager (with esp8266, but should work here) -- [https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X--CfHVKjVM](https://diyprojects.io/esp32-test-wifimanager-library-manage-wifi-connections/#.X--CfHVKjVM)

---
2021-01-01 15:48:48

OKAY!  working wifi configuration (basic) at [https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/wifi_config_basic_scd30](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/wifi_config_basic_scd30)

---
2021-01-01 18:13:05

migrating from arduinojson5 to 6 article [here](https://arduinojson.org/v6/doc/upgrade/)

---
2021-01-01 19:17:36

okay, current candidates are: wifimanager (dev branch), and hieromon.

latest attempt at getting it to work (which req'd upgrading the ArduinoJSON code) was here: [AutoConnectWithFSParameters_bayou](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnectWithFSParameters_bayou)

customization on wifimanager looks a bit hairy.  
 l
hieromon might work better re: customization.  

trying more with hieromon now ...

for autoconnect, looks like we want to consider autoreconnect to determine behavior if device needs to connect to wifi again. link here: [https://hieromon.github.io/AutoConnect/adconnection.html](https://hieromon.github.io/AutoConnect/adconnection.html)

---
2021-01-01 19:49:31

Here's a thread on how to delete credentials --

[https://github.com/Hieromon/AutoConnect/issues/175](https://github.com/Hieromon/AutoConnect/issues/175)

---
2021-01-01 20:31:46

This code is working fairly nicely!  

[https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display)

Document this tomorrow first thing.

It displays the AP to visit, then once connected, displays the IP.

Need to collect custom paramters ...

---
2021-01-02 10:45:37

autocnnect wifi connect sending to bayou -- sort of an mvp -- [https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30)

---
2021-01-02 11:16:49

basic landing page functionality here: [https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30_landing_page](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30_landing_page)

![](/img/co2/landing_page.png)

---
2021-01-02 12:26:43

Getting data form AutoConnect -- [https://hieromon.github.io/AutoConnect/achandling.html](https://hieromon.github.io/AutoConnect/achandling.html)

---

2021-01-02 13:40:42

use of snprintf: [https://joequery.me/code/snprintf-c/](https://joequery.me/code/snprintf-c/)

---
2021-01-02 14:45:33

A nice basic MVP, here: 

[https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30_landing_page_config](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30_landing_page_config)

![](/img/co2/co2_landing.png)

It allows for configuring wifi. The Bayou credentials are set via 'credentials.h' (requires Arduino IDE).  There's an informative landing page.

This would work for a version where the Bayou feed is flashed before the device is shipped, or by the user.

For a user-config version, a nice starting point might be the code here:

[https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30_landing_page](https://github.com/edgecollective/co2-remote-and-gateway/tree/rev_e_wifi_config/rev_e/firmware/wifi_sensor/AutoConnect_Elements_display_scd30_landing_page)

... where one might use the '/elements' page to capture Bayou feed credentials (and maybe set the measurement interval).

TODO: set the measurement interval in the config file.

Some more todos:

- BUTTON action!  A: wifi settings; B: calibration
- get a nicer URL for bayou?
- figure out how to capture Bayou parameters

Initial rollout:
- pre-flash Bayou credentials
- aim for tweaks by Arduino folks
- simplify the Autoconnect interface
- SMT version soon

Does the SMT need to be part of the rollout?

Add an opencollective tier for:
- hardware
- data service

---
2021-01-02 18:35:56

u8x8 fonts here: [https://github.com/olikraus/u8g2/wiki/fntlist8x8](https://github.com/olikraus/u8g2/wiki/fntlist8x8)

---
2021-01-02 19:17:19

Two button interface video demo [here](https://youtu.be/w6CxT43gUV8)

Code here: [https://github.com/edgecollective/co2-remote-and-gateway/tree/button/rev_e/firmware/wifi_sensor/two_buttons](https://github.com/edgecollective/co2-remote-and-gateway/tree/button/rev_e/firmware/wifi_sensor/two_buttons)

NOTE: LED D1 doesn't seem to work -- perhaps value of resistor? 

---
2021-01-02 21:01:25

Idea: measure every X seconds; average these values; PUT every Y*X seconds so that the PUT interval is 5 or 10 min or more. The averaging will help smooth out the noise.  Every measurement, can blink the LED (optionally) and update the screen.  Indicate on screen when have sent data online.  

Also: can embed videos & other 'heavy' material in the ESP32 landing page by pulling it from online such that it only shows up once there's an internet connection to the outside world ...

---
2021-01-03 10:54:43

cap_params seems to work alright ...

working on cap_params_load ...

retrieving files from SPIFFS -- [https://techexplorations.com/blog/esp32/blog-esp32-how-to-retrieve-a-file-from-the-spiffs/](https://techexplorations.com/blog/esp32/blog-esp32-how-to-retrieve-a-file-from-the-spiffs/)

---
2021-01-03 11:55:47

arduinojson read file -- [https://arduinojson.org/v6/example/config/](https://arduinojson.org/v6/example/config/)

arduinojson read array -- [https://arduinojson.org/v6/api/jsonarray/](https://arduinojson.org/v6/api/jsonarray/)

SPIFFS read and write examples [https://www.esp8266.com/viewtopic.php?f=29&t=8194](https://www.esp8266.com/viewtopic.php?f=29&t=8194)

this is how i want to reference an element of the array i think [https://arduinojson.org/v6/api/jsonarray/subscript/](https://arduinojson.org/v6/api/jsonarray/subscript/)

---
2021-01-03 13:12:57

Okay, this version of the code uses a file, elements.json, on the SPIFFS filesystem of the esp32 to configure things; and it can be modified by the esp32 as well.

[https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/cap_params_load_immediate](https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/cap_params_load_immediate)

---
2021-01-03 13:29:44

Getting closer to capturing parameters data:

[https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/params_fuller](https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/params_fuller)

---
2021-01-03 16:51:47

params_fuller_FS is where it's at!

warning regarding dynamic memory usage in micros here: [https://arduino.stackexchange.com/questions/1013/how-do-i-split-an-incoming-string](https://arduino.stackexchange.com/questions/1013/how-do-i-split-an-incoming-string)

---
2021-01-03 19:02:50

This is getting really close now:

[https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/params_fuller_FS](https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/params_fuller_FS)

Need to get it to make some measurements; but basic interface seems to be in place now.

---
2021-01-04 08:52:08

setting the AutConnect menu items [https://hieromon.github.io/AutoConnect/apiconfig.html#menuitems](https://hieromon.github.io/AutoConnect/apiconfig.html#menuitems)

Captive portal IP address if captive doesn't work: 192.168.10.1

configuration of autoconnect portal [here](https://hieromon.github.io/AutoConnect/apiconfig.html)

customizing menu further [here](https://hieromon.github.io/AutoConnect/menu.html)

IDEA: be able to modify 'force calibrate co2 value' from AutoConnect 

[this](https://hieromon.github.io/AutoConnect/apiconfig.html#menuitems) is what I ended up using to customize the menu 

resulting in [this commit for param_fuller_FS](https://github.com/edgecollective/co2-remote-and-gateway/tree/e49a35e0fe30a4b1170608f16184063047d8f5d6/rev_e/firmware/wifi_sensor/params_fuller_FS)

TODO: 

- combine cap_params_load code (measuring CO2) into params_fuller_FS
- change /mqqt endpoint settings to e.g. 'data'
- force calibration setting in autconnect
- mic on/off in autoconnect
- average co2 readings
- use pressure values to compensate for co2

- redesign through-hole board to match existing case on amazon
- look at specs on amazon case
- redesign SMT board -- with advantages (longer on battery, say, lower cost to produce)

---
2021-01-04 13:30:08

enclosure

free enclosure from pac-tec: 

interesting free enclosure option: 
- page here: [https://www.pactecenclosures.com/product-detail.php?classid=36&seriesid=39&productid=198](https://www.pactecenclosures.com/product-detail.php?classid=36&seriesid=39&productid=198)
- design drawings here: [https://www.pactecenclosures.com/pdfs/drw_OD43.pdf](https://www.pactecenclosures.com/pdfs/drw_OD43.pdf)

PCB size (from design drawing above):

![](/img/co2/pcb_board.png)

Nice plastic enclosure -- hammond -- [https://www.newark.com/hammond/1591btcl/enclosure-multipurpose-pc-clear/dp/50H6344?gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSaA4dpnCVFMKYrILm7lfwtSkz8Ny4HzIejUIkhMuzIm0uqSNvsL_kIaAiK8EALw_wcB&mckv=sFz5B29IT_dc|pcrid|434136793431|plid||kword||match||slid||product|50H6344|pgrid|100464451426|ptaid|pla-917181830621|&CMP=KNC-GUSA-GEN-Shopping-NewStructure-Enclosures-Racks-Cabinets](https://www.newark.com/hammond/1591btcl/enclosure-multipurpose-pc-clear/dp/50H6344?gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSaA4dpnCVFMKYrILm7lfwtSkz8Ny4HzIejUIkhMuzIm0uqSNvsL_kIaAiK8EALw_wcB&mckv=sFz5B29IT_dc|pcrid|434136793431|plid||kword||match||slid||product|50H6344|pgrid|100464451426|ptaid|pla-917181830621|&CMP=KNC-GUSA-GEN-Shopping-NewStructure-Enclosures-Racks-Cabinets)

Some nice options

## Serpac 032C

[https://www.digikey.com/en/products/detail/serpac/032CBK/2286005](https://www.digikey.com/en/products/detail/serpac/032CBK/2286005)

Serpac 032C 
- [here](https://www.serpac.com/userprints/032C_UP.pdf)
- listing on serpace [here](https://www.serpac.com/s-series/032c.aspx)
- circuit board drawing [here](https://www.serpac.com/userprints/circuit-board/330-430-cb.pdf)

detachable wall mount! https://www.serpac.com/accessories/wall-mounts.aspx

## Serpac wall mount

[https://serpac.com/wm-series/wm072rc.aspx](https://serpac.com/wm-series/wm072rc.aspx)

This could actually be cool -- 'main board' on left, 'proto board' on right

--- but it's $20 :)

---


[https://www.digikey.com/en/products/detail/serpac/232CBK/2286017](https://www.digikey.com/en/products/detail/serpac/232CBK/2286017)


hammond tiny enclosure -- [https://vetco.net/products/hammond-1551ltbu-translucent-blue-plastic-enclosure-3-15-in-x-1-58-in-x-0-59-in?gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSbv12vGAESWYlcDZyyMR1AF3k45esmKYOVDSHDajJhLA6uLqX9A1j0aAqqiEALw_wcB](https://vetco.net/products/hammond-1551ltbu-translucent-blue-plastic-enclosure-3-15-in-x-1-58-in-x-0-59-in?gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSbv12vGAESWYlcDZyyMR1AF3k45esmKYOVDSHDajJhLA6uLqX9A1j0aAqqiEALw_wcB)

hammond clear enclosure -- [https://www.digikey.com/en/products/detail/hammond-manufacturing/1591BTCL/1090769?utm_adgroup=Boxes&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Boxes%2C%20Enclosures%2C%20Racks&utm_term=&utm_content=Boxes&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSbbCxZ7-93S11wYu57zYg54tGOrZ8DzqvXXx9VZYEySfmGR_M6y7EwaAtUCEALw_wcB](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591BTCL/1090769?utm_adgroup=Boxes&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Boxes%2C%20Enclosures%2C%20Racks&utm_term=&utm_content=Boxes&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSbbCxZ7-93S11wYu57zYg54tGOrZ8DzqvXXx9VZYEySfmGR_M6y7EwaAtUCEALw_wcB)


octopart enclosure listing [here](https://octopart.com/electronic-parts/tools-and-supplies/enclosures)

bud industries BT-2723 [here](https://www.digikey.com/en/products/detail/bud-industries/BT-2723/1640952)


---

hammond 1551LTBU [here](https://www.digikey.com/en/products/detail/hammond-manufacturing/1551LTBU/2094883?utm_adgroup=Boxes&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Boxes%2C%20Enclosures%2C%20Racks_NEW&utm_term=&utm_content=Boxes&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSZfDv_3hdnA2Bgk4ZCFI5cJm1E6USjf4TUefQBHqM_dZcB09cAH15MaArmaEALw_wcB)

## hammond cheap boxes

multipurpose translucent hammond boxes [here](https://www.hammfg.com/electronics/small-case/plastic/1591t)

accessory plastic flanges avail!! 

hammond 1591S -- 

hammond economical enclosures [here](http://www.hammondmfg.com/dwg2p.htm)

hammond 1591STCL on digikey [here](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591STCL/1646698?WT.z_cid=ref_neda_dkc_buynow&utm_source=ecia&utm_medium=aggregator&utm_campaign=buynow)


really cool series, with accessories! [here](https://www.alliedelec.com/m/d/8e5ceccbb6067db9688b20d9a61de415.pdf)

allows mounting of pc boards horizontally within enclosure [here](https://www.hammfg.com/electronics/small-case/plastic/1591.pdf)


---

shenzen enclosure [here](https://www.alibaba.com/pla/IP65-plastic-transparent-electronic-enclosure_60787051803.html?mark=google_shopping&biz=pla&src=sem_ggl&mark=shopping&cmpgn=11895329719&adgrp=112297194941&locintrst=&locphyscl=9001876&ntwrk=u&device=c&dvcmdl=&position=&pla_adtype=&pla_mrctid=298077247&pla_channel=online&pla_prdid=60787051803&pla_country=US&pla_lang=en&pla_group=1082573610178&pla_localcode=&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSZ_AD4jOo1L0dAIOmYdCqo_sslhj_XRAkzLpZIJt1_IZvwRhUtqrNwaAvWBEALw_wcB#shopping-ads)


this is worth ordering for testing -- enclosures for $4 ea here -- [https://www.alibaba.com/product-detail/IP65-plastic-transparent-electronic-enclosure_60787051803.html](https://www.alibaba.com/product-detail/IP65-plastic-transparent-electronic-enclosure_60787051803.html)



---

top candidates:

hammond 1591STCL / 1591BTCL
serpac  032C 


listing for that whole hammond line is [here](https://www.alliedelec.com/m/d/bfcc0d7ad5cacf7a1b5d441385853eb4.pdf)

avail on amazon!! [here](https://www.amazon.com/HAMMOND-1591ATCL-ENCLOSURE-MULTIPURPOSE-CLEAR/dp/B00CS2YP22)

1591BTCL avail via amazon [here](https://www.amazon.com/HAMMOND-1591BTCL-ENCLOSURE-MULTIPURPOSE-CLEAR/dp/B00CSRW6UU/ref=pd_sbs_328_2/140-4251148-5297717?_encoding=UTF8&pd_rd_i=B00CSRW6UU&pd_rd_r=e29e6723-c035-4a65-b731-5646e915d7fd&pd_rd_w=VJlwF&pd_rd_wg=BhPDO&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=0FXQRA6Z4GJVPHEK1V91&psc=1&refRID=0FXQRA6Z4GJVPHEK1V91)

1591BTCL datasheet is [here](https://www.hammfg.com/files/parts/pdf/1591BTCL.pdf)

hammond page for 1591btcl is [here](https://www.hammfg.com/part/1591BTCL)

the whole 1591 series is listed [here](https://www.hammfg.com/electronics/small-case/plastic/1591t)



1591BTCL is avail for $5.10 ea at Hawk Electronics [here](https://www.hawkusa.com/manufacturers/hammond-mfg/enclosures/1591btcl?gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSaw87aKUqNYWzVMJldf0uB6pPb4Coa40BlF7klpT3ivT919JQ_UndwaAlGpEALw_wcB)


---

1591STCL [here](https://www.hammfg.com/files/parts/pdf/1591STCL.pdf)


1591DTCL -- would fit the REV_E board!

meanwhile I think I can probably redesign and fit the 1591STCL or 1591BTCL (whichever is cheaper)

1591STCL -- $10.50
1591BTCL -- $7.80 
1591DTCL -- $12.02


---

conclusion:


1591BTCL ([datasheet](https://www.hammfg.com/files/parts/pdf/1591BTCL.pdf)) -- this is the target to design for.  
1591DTCL ([datasheet](https://www.hammfg.com/files/parts/pdf/1591DTCL.pdf)) ([octopart](https://octopart.com/1591dtcl-hammond-40152)) ([digikey](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591DTCL/1090771)) -- this is what I can buy to house the REV_E enclosure.

1591DTCL avail via Powell electronics [here](https://www.powell.com/item/Hammond-Manufacturing-1591DTCL-Octoparts/4324663)

DTCL arrives on jan 25 - ish [here](https://www.amazon.com/Enclosures-Boxes-Cases-5-9-Clear/dp/B00HKJ2NIG)


If I do the BTCL, I'll need to find a clever way to include the battery ... maybe on top somehow. 
 
 --


---

$10 aluminum enclosure bud insdustries -- https://www.digikey.com/en/products/detail/bud-industries/AN-1302-A/5804534?utm_adgroup=Boxes&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Boxes%2C%20Enclosures%2C%20Racks&utm_term=&utm_content=Boxes&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSZDrdL__T4EZEguqhJTtaaFs6oxlLmh0ItZ9ZZeMTFqdDHsmJ5U4goaAiZJEALw_wcB

1591STCL [here](https://www.amazon.com/Hammond-1591STCL-Translucent-Polycarbonate-Project/dp/B00D5T2O34/ref=pd_sbs_328_2/140-4251148-5297717?_encoding=UTF8&pd_rd_i=B00D5T2O34&pd_rd_r=814923ec-fe3d-46db-b8d6-240267bf9366&pd_rd_w=KcVgb&pd_rd_wg=PAHvC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=TKVQ1DYPVZ0ZEDP9ZF6Q&psc=1&refRID=TKVQ1DYPVZ0ZEDP9ZF6Q)




 ---
 2021-01-04 22:12:14


 accessory flanges for 1591 series [here](https://www.hammfg.com/electronics/small-case/accessories/1591-flange?referer=1190&itm_type=accessory) -- 

  digikey listing for the flange for the 1591DTCL [here](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591FDBK/2357940)


 1591BSFLBK on newark [here](https://www.newark.com/hammond/1591bsflbk/enclosure-ip54-flanged-lid-multipurpose/dp/59M4600?gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSZz1mDgGKX_sD6WUa7Sgvrvj9-YUlyoIPW0Z32FtEHSTPTfjOehGXUaAmbqEALw_wcB&mckv=sIRXRJZJt_dc|pcrid|434136793431|plid||kword||match||slid||product|59M4600|pgrid|100464451426|ptaid|pla-917181830541|&CMP=KNC-GUSA-GEN-Shopping-NewStructure-Enclosures-Racks-Cabinets)

 adapter card pcb for 1591 series:
 - description [hammond](http://hammondmfg.com/dwg2b.htm)
 - 6 pack [digikey](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591Z6/131165)
 - 50 pack [digikey](https://www.digikey.com/en/products/detail/1591Z50/HM3997-ND/460666?itemSeq=349725590)


1591DTCL enclosure diagram [here](https://www.hammfg.com/files/parts/pdf/1591DTCL.pdf)

associated slot pcb mountings diagram [here](http://hammondmfg.com/dwg2b.htm)

associated plastic flanges listed [here](https://www.hammfg.com/electronics/small-case/accessories/1591-flange?referer=1190&itm_type=accessory)



Likely should order some on Digikey tomorrow.  

Interesting that it gives us some room for prototyping

![](/img/co2/1591DTCL_lifesize.png)

Epidemiologist around rapid testing [here](https://twitter.com/michaelmina_lab)

TODO: add the flange to the digikey order and order tomorrow

flange for the DTCL seems to be the 1591FDBK ([digikey](https://www.digikey.com/en/products/detail/1591FDBK/HM3903-ND/2357940?itemSeq=349727843) [drawing](https://www.digikey.com/en/products/detail/1591FDBK/HM3903-ND/2357940?itemSeq=349727843))

Aside: gorgeous hammond enclosure 1590B die-cast aluminum ([amazon](https://www.amazon.com/HAMMOND-1590B-ENCLOSURE-DIECAST-60-5X112X31MM/dp/B0002BBRA4/ref=pd_sbs_21_3/140-4251148-5297717?_encoding=UTF8&pd_rd_i=B0002BBRA4&pd_rd_r=7b1cb10e-a0d9-4042-9d64-da960c05e6c3&pd_rd_w=4LW1Q&pd_rd_wg=zDW6J&pf_rd_p=d2a3ee7d-5d69-4331-b32f-a3ce40b5e0d3&pf_rd_r=P66MAJQ7KSDNJ98WAMR6&psc=1&refRID=P66MAJQ7KSDNJ98WAMR6))

---
2021-01-05 11:46:04

to get: 

- the spacers 
- 1591BTCL flange in grey and black
- 1591DTCL flange in gray and black

update: gray is on backorder. going with black. 

---
2021-01-05 18:37:37

this seems to be key -- how to set up the captive portal IP address -- need to check whether this works on a laptop [https://hieromon.github.io/AutoConnect/apiconfig.html#gateway](https://hieromon.github.io/AutoConnect/apiconfig.html#gateway)

---
2021-01-05 19:07:15

Finished the AutoConnect switch-over of endpoint names -- now use 'bayou_settings' instead of 'mqtt_setting'.  

Resultant working code is here (note branch): [https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/params_fuller_FS_endpoint](https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_e/firmware/wifi_sensor/params_fuller_FS_endpoint)

---
2021-01-06 16:27:47

1591 enclosure guide for pcb [here](https://www.hammfg.com/files/products/1591/1591z-card-guide-instructions.pdf)

might use a clear lid with a pre-flanged enclosure -- look [here](https://www.hammfg.com/electronics/small-case/plastic/1591)


---
2021-01-06 16:33:46

Black 'B' enclosure with a flange [here](http://hammondmfg.com/pdf/1591BFL.pdf)


direct link for pc board adapter [here](https://www.hammfg.com/part/1591Z6)

and dimensions for pcb board adapter [here](https://www.hammfg.com/files/parts/pdf/1591Z6.pdf)

catalog page for 1591 series [here](http://www.hammondmfg.com/pdf/9c2pg8-9.pdf)

looks here as though the 'C' enclosures come between 'B' and 'D' (surprise) -- [hammond](https://www.hammfg.com/electronics/small-case/accessories/1591-flange)

also: C is just slightly larger than B, it seems

here are the C dimensions [pdf](http://www.hammondmfg.com/pdf/1591C.pdf) -- and on [amazon](https://www.amazon.com/Hammond-Manufacturing-1591CTCL-1591C-POLYCARBONATE/dp/B00CS2TWE8) and [digikey](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591CTCL/1090770?s=N4IgTCBcDaIIwFYCccDCAVVAZEBdAvkA)

---
2021-01-07 11:36:19

Document from Hammond re: the proper PCB size for the 1591B series here: [pdf](/img/co2/1591B_BOX_PCB.pdf) |  [dxf file](1591B_BOX_PCB.dxf) | [dxf file with dim](/img/co2/1591B_BOX_PCB_DIM.dxf)

heltec dimensions 

![](/img/co2/heltec_dimensions.jpg)

---
2021-01-07 14:08:27

![](/img/co2/rev_f_layout.png)

[https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_f/atkins](https://github.com/edgecollective/co2-remote-and-gateway/tree/cap_params/rev_f/atkins)

particular commit here:

[https://github.com/edgecollective/co2-remote-and-gateway/commit/37cfff4540a2506cf84b3bc35e8255eb14a25da0#diff-8b7e3d045d2effcb6738a35190e48460e3f8d084dc97983bb0b740101097caaa](https://github.com/edgecollective/co2-remote-and-gateway/commit/37cfff4540a2506cf84b3bc35e8255eb14a25da0#diff-8b7e3d045d2effcb6738a35190e48460e3f8d084dc97983bb0b740101097caaa)

---
2021-01-07 15:07:44

Update: Pin 34-39 on the ESP32 are not capable of output -- that's why pin 39 wasn't working as an LED control.

looks like scd30 could use a 2.5 mm screw, ish;  the height of the screw would be about 8 mm.  so can guess at a standoff size perhaps.  

nice material heltec [here](https://community.hiveeyes.org/t/heltec-wifi-lora-32/3125)

full heltec tech specs [here](https://heltec.org/project/wifi-lora-32/)

does look in the schematic that there's a battery divider already in place -- see discussion [here](http://community.heltec.cn/t/heltec-battery-power-example-not-working/1234/4)

interesting code for heltec from a lot of perspectives re: optimal use of esp32, includes battery measurement here: [https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/ADC_Read_Voltage/Battery_power/Battery_power.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/ADC_Read_Voltage/Battery_power/Battery_power.ino)

pin 21 is external battery control -- low, ON -- 

special pins on esp32 [here](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)

pin 12 must be low during boot

---
2021-01-07 20:33:35

PIR sensor [here](https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor)

just need 3V, GND, and an input pin ... maybe add a screw terminal? 


"sh1.25" is perhaps the search term for relevant batteries on aliexpress [here](https://www.aliexpress.com/item/32923649233.html)

----
2021-01-08 11:54:39

Rev_F board submitted to JLCPCB, order Order #: Y12-2489114A  // W202101090100951

![](/img/co2/rev_f_board.png)

board files github commit [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/9067113e187eb8cbb6cef703900c8b911c834a40/rev_f/atkins)

zipped gerber files in particular [here](https://github.com/edgecollective/co2-remote-and-gateway/blob/9067113e187eb8cbb6cef703900c8b911c834a40/rev_f/atkins/rev_f_gerbers.zip)

---
2021-01-12 14:40:22

![](/img/co2/bayou_co2.png)

---
2021-01-14 12:54:10

![](/img/co2/bayou_feed.png)

---
2021-01-15 11:25:38

Feed Name: "asdfasdf"
Feed Public Key: 9816e2df7cc14d64698d7012859080757780c73f22213bd1
Feed Private Key: 7e633222f381a99170e370ea7476b43662507a5352077ade
Feed Home Page: http://data.pvos.org/co2/data/9816e2df7cc14d64698d7012859080757780c73f22213bd1

TODO: add a download from the feed page (CSV?)

---
2021-01-15 12:26:46

Hammond flanged enclosures [here](https://www.digikey.com/en/products/detail/hammond-manufacturing/1551NFLBK/2094795?utm_adgroup=Boxes&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Boxes%2C%20Enclosures%2C%20Racks_NEW&utm_term=&utm_content=Boxes&gclid=CjwKCAiAl4WABhAJEiwATUnEF89YZ6J7mwMHrF8YBiMvPcSJYSGLQwPan4NlqhwElw8m3Iptas8XsBoCdrQQAvD_BwE)

Main plastic enclosure page for Hammond [here](https://enclosurehub.com/collections/small-plast)

[1557 series](https://enclosurehub.com/collections/small-plastic-enclosures/products/hammond-type-4-4x-6-6p-polycarbonate-and-abs-plastic-enclosures-1557-series-water-tight-multiple-mounting-features)

Vented sensor enclosure! [here](https://enclosurehub.com/collections/hammond-enclosures/products/abs-plastic-miniature-enclosures-snap-fit-wall-mount-vented-sensor-enclosure)

---
2021-01-15 21:52:47

Latest firmware attempt is [here](https://github.com/p-v-o-s/co2-monitor/commit/1dd94116d17d0d8d63ebd13b496b2d24819e7d22).  Acquires actual CO2 values & uploads them to Bayou-CO2

Test feed on Bayou-CO2 'loft' is at [http://data.pvos.org/co2/data/09b3f0239025e03c386b3f3ccfeba5501f95b8eff0ec9358](http://data.pvos.org/co2/data/09b3f0239025e03c386b3f3ccfeba5501f95b8eff0ec9358)

---
2021-01-17 05:04:02

**Loft test feed** continues: [http://data.pvos.org/co2/data/09b3f0239025e03c386b3f3ccfeba5501f95b8eff0ec9358](http://data.pvos.org/co2/data/09b3f0239025e03c386b3f3ccfeba5501f95b8eff0ec9358)

![](/img/co2/bayou_loft_jan17.png)

Notes on feed above:

**jan 16**
- had vid meeting in loft at 11 AM  (which involved picking up sensor and holding it near me)
- cooking happened in morning and afternoon
- left house for long walk mid-afternoon, return and went up to loft around 5 pm quickly, then left for dinner
- returned back hom after 8 pm, went up to loft to do some work

**jan 17**
- got up at 4 AM went into kitchen / living room 
- went up to loft at 5 AM
- went back down to living room at 5:15 AM

Note that it seems that when I walk around a bit and go upstairs to loft huffing and puffing, there's an initial spike; the co2 calms down when i start to settle and work at computer quietly.  then level decays further when I leave.

UPDATE: after refreshing feed, not sure this is true; the 'spike' isn't that much higher than what is perhaps 'noise'; the CO2 level does seem to be fairly stably higher when I'm up in loft.

Question: I wonder why there's an apparent dip below 'baseline' 6 PM to 830 PM on Jan 16?  Maybe the doors to house were open a bit?  interesting if we can show that baseline shifts considerably when crack open doors (experiment to be done)

---
2021-01-17 08:12:24

Just re-entered loft w/ coleman now ...

went back down, then camb back around 8:30 ...

---
2021-01-18 11:59:52

Working on pulling in parameters ... looks like this is how I did it here:

[https://github.com/edgecollective/co2-remote-and-gateway/blob/cap_params/rev_e/firmware/wifi_sensor/cap_params_load_immediate/cap_params_load_immediate.ino](https://github.com/edgecollective/co2-remote-and-gateway/blob/cap_params/rev_e/firmware/wifi_sensor/cap_params_load_immediate/cap_params_load_immediate.ino)

---
2021-01-18 12:06:20

Requirements in Arduino IDE for CO2 monitor based on ESP32 ...

IDE setup:

- ESP32 board support in Arduino: [https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)
- ESP32 file upload tool: [https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/). Tool is [here](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)

Libraries:

- [Bounce2](https://github.com/thomasfredericks/Bounce2) library (via IDE)
- U8g2 (via IDE)
- PubSubClient // https://github.com/knolleary/pubsubclient
- BMP388_DEV (lindupp, via IDE)
- Sparkfun SCD30 (via IDE)

---
2021-01-18 12:49:59

Test feed here: [http://data.pvos.org/co2/data/cbb8d444591def61d4e59f9b53d3193dd7724a9d8599c6ee](http://data.pvos.org/co2/data/cbb8d444591def61d4e59f9b53d3193dd7724a9d8599c6ee)

---
2021-01-18 13:54:57

Now reading in parameter file and displaying CO2 value with this commit: [https://github.com/p-v-o-s/co2-monitor/commit/39c589e08763c8f280da3e49c05ae70d059a7791](https://github.com/p-v-o-s/co2-monitor/commit/39c589e08763c8f280da3e49c05ae70d059a7791)

Feed is here: [http://data.pvos.org/co2/data/cbb8d444591def61d4e59f9b53d3193dd7724a9d8599c6ee](http://data.pvos.org/co2/data/cbb8d444591def61d4e59f9b53d3193dd7724a9d8599c6ee)

---
2021-01-18 14:10:36

Now show network config on button press [https://github.com/p-v-o-s/co2-monitor/commit/5f05b084ba1b026370a0f2adb9492b0d187b2205](https://github.com/p-v-o-s/co2-monitor/commit/5f05b084ba1b026370a0f2adb9492b0d187b2205)

NOTE: should try to do everything with non-blocking code. This button approach currently delays for 3 sec.  Could instead check every loop for whether enough time has passed, and whether should display which info.

TODO: implement this; also factor out display functions.

---
2021-01-19 04:57:51

Got weird error message -- result seemed to be no wifi connection, but loop still ran and measurement was made / screen updated every measurement interval:

> E (52119735) wifi: esf_buf: t=2 l=76 max:32, alloc:32 no eb, TXQ_BLOCK=0

Really useful post on strings and esp32 and memory [here](https://esp8266life.wordpress.com/2019/01/13/memory-memory-always-memory/)

Looks like free heap is okay.

New test feed is here: [http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9](http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9)

The current version of the code is here: [https://github.com/p-v-o-s/co2-monitor/commit/af6c57182ef2486cf87aedc404f5fca257c330d0](https://github.com/p-v-o-s/co2-monitor/commit/af6c57182ef2486cf87aedc404f5fca257c330d0).

TODO: Reading in measurement interval from param file initially still not working (fix).

TODO: We should implement a watchdog that looks to see if successful post and/or connection and resets if not -- the error message I was seeing might be related to the wifi, apparently

TODO: Should also change the plotting style in Bayou-CO2 to *not* use bezier ...

---
2021-01-19 09:26:43

More TODOS:

- Watchdog ping every loop
- Reset if no wifi connection after one iteration
- autocalibration turn on in bayou settings
- Bayou-CO2 -- download keys as CSV / JSON
- Make a Feather ESP32 option? Can be ESP32 or lora feather

ESP32 power req's ...

Observation -- looks like heap stabilizes ...

```
getFreeHeap(): 250128
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":331,"tempC":22.7,"humidity":23.25,"mic":0,"auxPressure":1008.91,"auxTempC":19.61,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
200
Measurement recorded

getFreeHeap(): 250128
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":328,"tempC":22.52,"humidity":23.64,"mic":0,"auxPressure":1008.86,"auxTempC":19.56,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
200
Measurement recorded

getFreeHeap(): 250128
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":332,"tempC":22.65,"humidity":23.66,"mic":0,"auxPressure":1008.85,"auxTempC":19.59,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
200
Measurement recorded


getFreeHeap(): 250128
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":348,"tempC":22.55,"humidity":24.13,"mic":0,"auxPressure":1008.89,"auxTempC":19.58,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
200
Measurement recorded
```

---
2021-01-19 09:34:25

Get calibration code working ...

TODO: add force calibration value to the Bayou settings

TODO: add field to database indicating whether force calibrated in the last round ...

TODO: pull out configuration values as 'config' file (or put in json param file)

---
2021-01-19 10:40:54

Looks like by default, SCD30 sensor measurement interval is 2 seconds ... and can't go lower.  

SCD30 datasheet reference p 10 of [https://media.digikey.com/pdf/Data%20Sheets/Sensirion%20PDFs/CD_AN_SCD30_Interface_Description_D1.pdf](https://media.digikey.com/pdf/Data%20Sheets/Sensirion%20PDFs/CD_AN_SCD30_Interface_Description_D1.pdf)

Just checked -- in fact, it does work to ask if there is new CO2 data available -- that gives us a delay of about 2 sec.

---
2021-01-19 10:49:03

Added calibration procedure with this commit: [https://github.com/p-v-o-s/co2-monitor/commit/68c467baa1c6b8c20b4b76a5eb5f6a89d55c9508](https://github.com/p-v-o-s/co2-monitor/commit/68c467baa1c6b8c20b4b76a5eb5f6a89d55c9508)

---
2021-01-19 10:56:50

Fixed an interface bug with canceling forced calibration ...

Now, after pressing the calibrate button, in any case we drop into a 'firstLoop' meausurement, so that we make a measurement, display it, and send it.  Probably a good feature anyway to have a way to send a value immediately.  Might want to indicate graphically that data has been sent ("200" on top right of screen or something)

Also looks like the sensor needs at least a few seconds to warm up (check datasheet) ... maybe we should check for startup and display 'warming up' and show measurement every few seconds ..

----
2021-01-20 05:48:45

Stopped working overnight:

```
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":383,"tempC":18.98,"humidity":25.85,"mic":0,"auxPressure":1004.71,"auxTempC":19.74,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
[HTTP] GET... failed, error: connection refused
getFreeHeap(): 250108
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":376,"tempC":18.9,"humidity":25.87,"mic":0,"auxPressure":1004.66,"auxTempC":19.57,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
[HTTP] GET... failed, error: connection refused
getFreeHeap(): 250108
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":368,"tempC":19.02,"humidity":25.47,"mic":0,"auxPressure":1004.64,"auxTempC":19.62,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
[HTTP] GET... failed, error: connection refused
getFreeHeap(): 250108
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":363,"tempC":19.18,"humidity":25.34,"mic":0,"auxPressure":1004.58,"auxTempC":19.96,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
[HTTP] GET... failed, error: connection refused
getFreeHeap(): 250108
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":372,"tempC":19,"humidity":25.77,"mic":0,"auxPressure":1004.47,"auxTempC":19.8,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
[HTTP] GET... failed, error: connection refused
getFreeHeap(): 250108
http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
{"private_key":"13adcd2e8704165a62aea86bee0a3abe2fd3be4d62427a35","co2":377,"tempC":18.9,"humidity":25.87,"mic":0,"auxPressure":1004.4,"auxTempC":19.66,"aux001":0,"aux002":0}http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9
[HTTP] GET... failed, error: connection refused
```

-- is this Bayou, or the monitor?

UPDATE: answer -- it wasn't Bayou.

Pressed reset, and it just worked.  Need to look into this as a bug; but this is another reason to set up a 'reset' if we don't a good connection to the server.

Ah -- it could be that the IP address changes overnight.

Good thread on watchdog style approach here: [https://github.com/espressif/arduino-esp32/issues/653](https://github.com/espressif/arduino-esp32/issues/653)

More on this here: [https://github.com/Hieromon/AutoConnect/issues/292](https://github.com/Hieromon/AutoConnect/issues/292)

This might be the approach to take: [https://github.com/Hieromon/AutoConnect/issues/292#issuecomment-757340418](https://github.com/Hieromon/AutoConnect/issues/292#issuecomment-757340418).  

Skeleton code here: [https://github.com/Hieromon/AutoConnect/issues/292#issuecomment-756634645](https://github.com/Hieromon/AutoConnect/issues/292#issuecomment-756634645)

There is a patched release here: [https://github.com/Hieromon/AutoConnect/issues/292#issuecomment-759202689](https://github.com/Hieromon/AutoConnect/issues/292#issuecomment-759202689) that might address the issue, and apparently release v1.2.3 will fix it?

Another nice post about dropping the wifi here: [https://rntlab.com/question/wifi-connection-drops-auto-reconnect/](https://rntlab.com/question/wifi-connection-drops-auto-reconnect/)

oooh -- and it offers some auto-restart code ... will try that ...

implemented in the 'restart' branch here: [https://github.com/p-v-o-s/co2-monitor/tree/restart/co2monitor](https://github.com/p-v-o-s/co2-monitor/tree/restart/co2monitor)

---
2021-01-20 10:47:23

CORS and associated issues explained [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

---
2021-01-20 11:00:02

Ideas discussed w/ Mike:

Bayou / deployment ideas:
- Mapping out data on a floorplan
- Deploying in various spaces but starting co-located as a test
- Cardboard enclosures
- Lending library
- Classes on how to use / deploy
- Add 'let's encrypt' functionality

Firmware ideas:
- Add a 'LOG' field to Bayou for error messages / etc for a feed -- include calibration events, reset events, bad connection
- Add a 'battery level' indicator in the feed, and on the display

Hardware ideas:
- Label the i2c resistors on the boards
- Do a "Rev G" ...?

Documentation:
- Need to spin up pvos.org landing page, documentation, links
- Need to put in place the web infrastructure on opencollective

---
2021-01-20 11:08:20

How to upload and display an image in NodeJS here: [https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express](https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express)

General impression I'm getting: store image files on file system; store their filenames / references in the relational database.

Oh nice -- can use ImageMagic in NodeJs -- see this link here: [https://stackoverflow.com/questions/12539918/get-the-width-and-height-of-an-image-in-node-js](https://stackoverflow.com/questions/12539918/get-the-width-and-height-of-an-image-in-node-js)

Or you can probe the image size without a full download here: [https://gitehub.com/nodeca/probe-image-size](https://github.com/nodeca/probe-image-size)

One interim solution is: host your own image somewhere, and we can display feed data on top of it via URL ...

How to start a nodejs project here: [https://philna.sh/blog/2019/01/10/how-to-start-a-node-js-project/](https://philna.sh/blog/2019/01/10/how-to-start-a-node-js-project/)

---
2021-01-20 11:40:26

Trying to work in this repo here: [https://github.com/edgecollective/floorplan](https://github.com/edgecollective/floorplan)

This is the file that seems to have been the demo file I was playing with around mapping: [https://gitlab.com/dwblair/p2p-farm-server/-/blob/mappin/public/console.html](https://gitlab.com/dwblair/p2p-farm-server/-/blob/mappin/public/console.html)


Handling CORS [here](https://flaviocopes.com/express-cors/) -- good guide; and:

good guide [here](https://expressjs.com/en/resources/middleware/cors.html#demo), which leads to:
- [https://github.com/troygoode/node-cors-server/blob/master/server.js](https://github.com/troygoode/node-cors-server/blob/master/server.js)

---
2021-01-20 15:24:42

Follwing this example [here](https://www.htmlgoodies.com/beyond/javascript/serve-external-content-from-your-express.js-apps.html)

Guide to pug here: [https://www.sitepoint.com/a-beginners-guide-to-pug/](https://www.sitepoint.com/a-beginners-guide-to-pug/)

---
2021-01-20 16:57:33

Good start on plotting data in separate Node server here: [https://github.com/edgecollective/floorplan/commit/607816a05848093a471966e0b9dd00c1cab90733](https://github.com/edgecollective/floorplan/commit/607816a05848093a471966e0b9dd00c1cab90733)

---
2021-01-20 20:38:45

Latest:  try this link: http://192.168.1.163:4000/map/cbb8d444591def61d4e59f9b53d3193dd7724a9d8599c6ee?key=co2

Some layout details here: [https://coder-coder.com/display-divs-side-by-side/](https://coder-coder.com/display-divs-side-by-side/)

Latest attempt is at this commit of floorplan in the url-load branch, here: [https://github.com/edgecollective/floorplan/commit/4972382b4982f34b75a60b5f8026a180a1591daf](https://github.com/edgecollective/floorplan/commit/4972382b4982f34b75a60b5f8026a180a1591daf)

---
2021-01-20 20:59:49

Ongoing test feed is here: [http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9](http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9)

---
2021-01-22 11:22:08

## NDIR reference circuit

May be very similar to one used in SCD30 ...

"Complete Gas Sensor Circuit Using Nondispersive Infrared (NDIR)":  link: [https://www.analog.com/media/en/analog-dialogue/volume-50/number-4/articles/complete-gas-sensor-circuit.pdf](https://www.analog.com/media/en/analog-dialogue/volume-50/number-4/articles/complete-gas-sensor-circuit.pdf)

![](/img/co2/ad_ndir_ref.png)

Mike B. comments on the SCD30: 

> Looks like a lamp at one end, and two legs are the two wavelengths - sensing, and reference;
> 75mA when measuring implies about 70 Ohms for that lamp.

## NDIR refrence circuit for Alphasense CO2 Sensor

![](/img/co2/alphasense.png)

Link here: [http://www.alphasense.com/WEB1213/wp-content/uploads/2016/01/AAN_202-04.pdf](http://www.alphasense.com/WEB1213/wp-content/uploads/2016/01/AAN_202-04.pdf)e

--
2021-01-22 14:28:56

## Design Review w MB

- Keep constant scale for all graphs, to aid comparison
- Error bars and thresholds (if device is calibration -- maybe, make optional, with warning)
- Several plots overlaid, for easy comparison
- Deploy at least one 'baseline' reference sensor in a room that doesn't have people, if possible, for immediate comparison to 'baseline' 
- Assess impact of pressure on device
- Make a calibration rig, with source of CO2 (or Argon)

---
2021-01-23 11:52:42

Current case for REV_E ... 1591BTCL

- Case [https://www.digikey.com/en/products/detail/hammond-manufacturing/1591BTCL/1090769](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591BTCL/1090769)
- Mounting flange [https://www.digikey.com/en/products/detail/hammond-manufacturing/1591FBBK/2357902](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591FBBK/2357902)
- Adapter inserts [https://www.digikey.com/en/products/detail/hammond-manufacturing/1591Z50/460666](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591Z50/460666)

---
2021-01-25 11:25:35

v0.1-alpha release of the firmware for REV_F!

[https://github.com/p-v-o-s/co2-monitor/releases](https://github.com/p-v-o-s/co2-monitor/releases)

---
2021-01-25 19:14:15

Added more info to the screen!

![](/img/co2/rev_f_mucho_info.png)

---
2021-01-27 07:46:09

Two devices:

![](/img/co2/double_sm.jpg)

ESP-1cfe
posting to: [http://data.pvos.org/co2/data/a00aed3265bf99e1784168ac9b1b509f30adfe9d00a2918d](http://data.pvos.org/co2/data/a00aed3265bf99e1784168ac9b1b509f30adfe9d00a2918d)


and

ESP-2c7e
posting to: [http://data.pvos.org/co2/data/e9d7a2df343e8e6d0bf6c169011be8721ee9c24707ad7347](http://data.pvos.org/co2/data/e9d7a2df343e8e6d0bf6c169011be8721ee9c24707ad7347)

---
2021-01-27 09:24:36

SCD30 enclosure app note [https://www.google.com/url?q=https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Design-In_Guidelines_D1.pdf&sa=D&source=hangouts&ust=1611842158712000&usg=AFQjCNE3z7ACuQZWf6VPmSG4CB_wEYk5Fg](https://www.google.com/url?q=https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Design-In_Guidelines_D1.pdf&sa=D&source=hangouts&ust=1611842158712000&usg=AFQjCNE3z7ACuQZWf6VPmSG4CB_wEYk5Fg)

---
2021-01-27 19:57:10

![](/img/co2/a2.png)

---
2021-01-28 08:21:57

TODOS:
- config.h pull in
- do everything with char instead of strings (later?)
- factor out 'display' function
- present all info on main screen
- unique esp32 ID (later?)
- 'trim' the user input (later?)
- add relevant fields to bayou-co2

---
2021-01-28 14:59:42

Article on airborne covid and CO2 montoring [https://www.aol.com/article/lifestyle/2020/08/12/the-best-ways-to-reduce-the-risk-of-covid-19-indoors/24589315/](https://www.aol.com/article/lifestyle/2020/08/12/the-best-ways-to-reduce-the-risk-of-covid-19-indoors/24589315/)


---
2021-01-28 15:28:17

![](/img/co2/force_fed.png)

---
2021-01-28 17:49:17

Adding microSD functionality to the Heltec ...

[https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)

First get the libraries ...

Maybe it's possible to talk to SCD30 i2c over OLED i2c (as did on Quahog)?  see [https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/SD/SD_Time/SD_Time.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/SD/SD_Time/SD_Time.ino)

Ah, SD card might require resistors!  See answer here: [https://stackoverflow.com/questions/57454066/how-to-use-2-spi-devices-lora-and-sd-card-on-esp32](https://stackoverflow.com/questions/57454066/how-to-use-2-spi-devices-lora-and-sd-card-on-esp32)

Also this info here -- looks like it can get dug out!  [http://ldsrc.blogspot.com/2018/02/micro-sd-card-for-esp32.html](http://ldsrc.blogspot.com/2018/02/micro-sd-card-for-esp32.html)

---
2021-01-29 11:19:51

Switching over to Feather ESP32 ...

Arduino SD Card library + Feather breakout ... [https://learn.adafruit.com/adafruit-adalogger-featherwing/using-the-sd-card](https://learn.adafruit.com/adafruit-adalogger-featherwing/using-the-sd-card)

[Adafruit microsd breakout board](https://www.adafruit.com/product/254)

Trying Examples > SD > Cardinfo

Note: important code for multiple SPI buses (for use later when doing microSD + lora): [https://github.com/jonashoechst/ttgo-lora-sd](https://github.com/jonashoechst/ttgo-lora-sd)

works ...

[1591 Page on Hammond](http://www.hammondmfg.com/dwg2.htm)
[1591BTCL Listing on Digikey](https://www.digikey.com/en/products/detail/hammond-manufacturing/1591BTCL/1090769)
[Enclosure datasheet with screw positions](http://www.hammondmfg.com/pdf/1591B.pdf)

## from datasheet

horizontal cover inside lip: 107.7
horizontal screw distance: 98.3
horizonal span (screw, inside lip): (107.7-98.3)/2 =

vertical screw distance: 48.4
vertical cover inside lip: 57.8
vertical span (screw, inside lip): (57.8-48.4)/2 = 

## sit inside enclosure

horizontal span: 106 mm
horiz screw dist: 98.3
horiz screw center to edge: (106-98.3)/2 = 3.85

vertical span: 56 mm
vert screw dist: 48.4
vert screw center to edge: (56-48.4)/2 = 3.8


x,y:

top left: 3.85,3.8
top right: 3.85+98.3, 3.8 = 102.15,3.8
bottom left: 3.85, 3.8+48.4 = 3.85, 52.2
bottom right: 102.15, 52.2



### USB "up angle"

[Listing on amazon](https://www.amazon.com/StarTech-com-Micro-USB-Cable-Cord/dp/B00ENZDFQ4/ref=sr_1_5?dchild=1&keywords=micro%2Busb%2Bright%2Bangle&qid=1611948044&sr=8-5&th=1)

[![](/img/co2/up_angle.png)](https://www.amazon.com/StarTech-com-Micro-USB-Cable-Cord/dp/B00ENZDFQ4/ref=sr_1_5?dchild=1&keywords=micro%2Busb%2Bright%2Bangle&qid=1611948044&sr=8-5&th=1)

## Pi as Bridge

[https://www.raspberrypi.org/documentation/configuration/wireless/access-point-bridged.md](https://www.raspberrypi.org/documentation/configuration/wireless/access-point-bridged.md)

[https://www.balena.io/blog/turn-a-raspberry-pi-into-a-wi-fi-access-point-or-repeater/](https://www.balena.io/blog/turn-a-raspberry-pi-into-a-wi-fi-access-point-or-repeater/)

[https://medium.com/@brunoamaroalmeida/rogueone-creating-a-rogue-wi-fi-access-point-using-a-raspberry-pi-79e1b7e628c6](https://medium.com/@brunoamaroalmeida/rogueone-creating-a-rogue-wi-fi-access-point-using-a-raspberry-pi-79e1b7e628c6)

[https://gist.github.com/Lewiscowles1986/fecd4de0b45b2029c390](https://gist.github.com/Lewiscowles1986/fecd4de0b45b2029c390)

---
2021-01-29 17:12:36

## deleting partitions using fdisk

[https://www.pidramble.com/wiki/benchmarks/external-usb-drives](https://www.pidramble.com/wiki/benchmarks/external-usb-drives)

This worked nicely: [https://www.nayab.xyz/linux-tools/partitioning-using-fdisk.html](https://www.nayab.xyz/linux-tools/partitioning-using-fdisk.html)

Showing progress while zipping: [https://unix.stackexchange.com/questions/179563/when-i-use-zip-how-can-i-display-the-overall-progress-without-flooding-the-comm](https://unix.stackexchange.com/questions/179563/when-i-use-zip-how-can-i-display-the-overall-progress-without-flooding-the-comm)

Back up raspberry pi image:

> sudo dd bs=4M if=/dev/sdb of=pvosPi.img status=progress

Zipping it afterwards:

> zip -qr - pvosPi.img | pv -bep -s $(du -bs pvosPi.img | awk '{print $1}') > pvosPi.img.zip

---
2021-01-30 10:20:43

![](/img/co2/pushbutton.png)

![](/img/co2/button_wiring.png)

---
2021-01-30 16:30:53

![](/img/co2/right_1.png)

![](/img/co2/right_2.png)

[https://randomnerdtutorials.com/esp32-lora-rfm95-transceiver-arduino-ide/](https://randomnerdtutorials.com/esp32-lora-rfm95-transceiver-arduino-ide/)

Adding additional SPI buses [https://github.com/espressif/arduino-esp32/issues/1219](https://github.com/espressif/arduino-esp32/issues/1219)

[https://forum.arduino.cc/index.php?topic=637121.0](https://forum.arduino.cc/index.php?topic=637121.0)

[https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/spi_master.html](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/spi_master.html)

![](/img/co2/rfm95.png)

---
2021-01-30 21:24:20

Working setup!

[https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/master/v0.1-alpha/feather_esp32/feather_esp32_lora_sd_u8x8_scd30](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/master/v0.1-alpha/feather_esp32/feather_esp32_lora_sd_u8x8_scd30)

---
2021-01-31 09:13:44

Converting a board to a footprint [https://forum.kicad.info/t/converting-board-to-footprint/2781/5](https://forum.kicad.info/t/converting-board-to-footprint/2781/5)

---
2021-01-31 17:08:28

M3 nylon standoffs amazon [here](https://www.amazon.com/SZHKM-Female-Standoff-Assorted-Assortment/dp/B07GCQYWL9/ref=sr_1_1_sspa?dchild=1&gclid=Cj0KCQiAx9mABhD0ARIsAEfpavQ0o24rxhCd0tVNEMhuFTPWDMMGpyovhGK3_XA-5L-Uh4Mjp9ryWHAaAiWNEALw_wcB&hvadid=409997218734&hvdev=c&hvlocphy=9001876&hvnetw=g&hvqmt=b&hvrand=2398038061527121721&hvtargid=kwd-503702966379&hydadcr=294_1012853961&keywords=m3+standoffs+nylon&qid=1612130881&sr=8-1-spons&tag=googhydr-20&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSDU0NlZaRUNNNjcyJmVuY3J5cHRlZElkPUEwMDY2MzQwMldEN1lLQjY0WVBJQiZlbmNyeXB0ZWRBZElkPUEwNjAzMzgxMlMwTThQM0VOTjBTMyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)

---
2021-01-31 17:50:52

Initial version of REV_G!

[https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/dbf0e6c62ef15458e386a3075476108c1461dd43/REV_G](https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/dbf0e6c62ef15458e386a3075476108c1461dd43/REV_G)

---
2021-01-31 19:55:55


Wiring up a microSD [https://components101.com/misc/microsd-card-pinout-datasheet](https://components101.com/misc/microsd-card-pinout-datasheet)

![](/img/co2/microSD_wiring.png)


Featherwing microsd [https://cdn-learn.adafruit.com/assets/assets/000/044/116/original/feather_schem.png?1500667618](https://cdn-learn.adafruit.com/assets/assets/000/044/116/original/feather_schem.png?1500667618)

![](/img/co2/featherwing_microsd.png)

Feather schematic & pintouts [https://cdn-learn.adafruit.com/assets/assets/000/041/630/original/feather_schem.png?1494449413](https://cdn-learn.adafruit.com/assets/assets/000/041/630/original/feather_schem.png?1494449413)

![](/img/co2/featheresp32_pinouts.png)

---
2021-01-31 20:15:51

The code that worked! (?) [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/blob/master/v0.1-alpha/feather_esp32/feather_esp32_lora_sd_u8x8_scd30/feather_esp32_lora_sd_u8x8_scd30.ino](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/blob/master/v0.1-alpha/feather_esp32/feather_esp32_lora_sd_u8x8_scd30/feather_esp32_lora_sd_u8x8_scd30.ino)

```

// SD uses 'regular' SPI pins on Feather ESP32:
#define SD_CS 33
#define SD_SCK 5
#define SD_MOSI 18
#define SD_MISO 19

// LoRa uses a newly-created SPI bus:

#define LORA_IRQ 15
#define LORA_CS 14
#define LORA_SCK 26 //A0
#define LORA_MOSI 21
#define LORA_MISO 25 //A1
#define LORA_RST 27
```

U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 16, /* data=*/ 17, /* reset=*/ 39);

SCD30 on 'regular' i2c for feather esp32:  SCL: 22, SDA: 23

display on SCL: 16, SDA: 17

maybe add qwiik for both?

[max4466](https://www.adafruit.com/product/1063?gclid=Cj0KCQiAx9mABhD0ARIsAEfpavTgcAc8yg27NK51rM2r2O3UslP4p-H1i7dhui8OvhDTnm6ZE0x48z8aAhK3EALw_wcB)

---
2021-01-31 20:29:41

First pass at pin assignments; double check!

Test button functionality ... 

Add DIO1 for LoRaWAN ability?

Button pin assignments?

RESET pin choice for display (no wiring to do for library ... maybe U8X8 can avoid a reset pin?  Or what pin do we assign in order to avoid conflicts?)

Add label / pinout / description for Adafruit microSD card on back

Hirose microSD part DM3D-SF on Digikey: [https://www.digikey.com/en/products/detail/DM3D-SF/HR1941CT-ND/1786515](https://www.digikey.com/en/products/detail/DM3D-SF/HR1941CT-ND/1786515)

---
2021-02-02 17:08:26

Jupyterlab on a Raspberry Pi [https://medium.com/analytics-vidhya/jupyter-lab-on-raspberry-pi-22876591b227#:~:text=Install%20Jupyter%20Lab,to%20install%20jupyter%20lab%20later.&text=Install%20jupyter%20using%20pip3.](https://medium.com/analytics-vidhya/jupyter-lab-on-raspberry-pi-22876591b227#:~:text=Install%20Jupyter%20Lab,to%20install%20jupyter%20lab%20later.&text=Install%20jupyter%20using%20pip3.)

Jupyer Hub on an RPi [https://towardsdatascience.com/setup-your-home-jupyterhub-on-a-raspberry-pi-7ad32e20eed?gi=b0e66a9b10f7](https://towardsdatascience.com/setup-your-home-jupyterhub-on-a-raspberry-pi-7ad32e20eed?gi=b0e66a9b10f7)

The script-based approach to installing Jupyter!  [https://github.com/kleinee/jns](https://github.com/kleinee/jns)

Another nice approach: [https://morioh.com/p/93349454d65a](https://morioh.com/p/93349454d65a)

---
2021-02-03 05:18:10


---
2021-02-03 05:08:58

ESP32 and wifi access point [https://www.google.com/search?q=esp32+can%27t+connect+to+pi+as+access+point&oq=esp32+can%27t+connect+to+pi+as+access+point&aqs=chrome..69i57.8176j0j7&sourceid=chrome&ie=UTF-8](https://www.google.com/search?q=esp32+can%27t+connect+to+pi+as+access+point&oq=esp32+can%27t+connect+to+pi+as+access+point&aqs=chrome..69i57.8176j0j7&sourceid=chrome&ie=UTF-8)

ESP32 and wifi access point 2 [https://www.esp32.com/viewtopic.php?t=18928](https://www.esp32.com/viewtopic.php?t=18928)

ESP32 and RPi connection without internet connection [https://raspberrypi.stackexchange.com/questions/107647/esp-8266-and-raspberry-pi-communication-without-an-internet-connection](https://raspberrypi.stackexchange.com/questions/107647/esp-8266-and-raspberry-pi-communication-without-an-internet-connection)


Update:  just tried connecting my Heltec to my Pi using the identical image, *without* having the ethernet connected, and: "wifi?" but as soon as I plugged the ethernet back in, it connected.  Googling now, this is a known problem:  ESP32 doesn't like to connect to Pi as isolated AP.  I think people have found a fix.

Suggestion to use MQTT here [https://github.com/nhonchu/mqttspooler](https://github.com/nhonchu/mqttspooler)

Setting up a Raspberry Pi as an access point [https://learn.sparkfun.com/tutorials/setting-up-a-raspberry-pi-3-as-an-access-point/all](https://learn.sparkfun.com/tutorials/setting-up-a-raspberry-pi-3-as-an-access-point/all)

Setting up a Pi as an access point in a standalone network -- solid instructions, here: [https://github.com/SurferTim/documentation/blob/6bc583965254fa292a470990c40b145f553f6b34/configuration/wireless/access-point.md](https://github.com/SurferTim/documentation/blob/6bc583965254fa292a470990c40b145f553f6b34/configuration/wireless/access-point.md)

---

Todo: follow instructions [here](https://www.raspberrypi.org/documentation/configuration/wireless/access-point-routed.md) on fresh Pi image install. 

---
2021-02-04 09:04:21

M.B.'s data from overnight, using a REV_E and a Pi w/ Bayou-CO2 installed locally!

[link on google sheets](https://drive.google.com/file/d/1-8k2muwFZ2o-h8TP_cZNHyi6bMyxuS0x/view?usp=sharing)

![](/img/co2/mike_overnight.png)

---
2021-02-04 12:57:13

looks like syntax is:

> var sql = "select * from user order by id desc LIMIT "

---
2021-02-04 15:11:18

![](/img/co2/overlay_test.png)

comparing timestamps in postgresql

[https://stackoverflow.com/questions/19469154/how-to-compare-dates-in-datetime-fields-in-postgresql](https://stackoverflow.com/questions/19469154/how-to-compare-dates-in-datetime-fields-in-postgresql)

[https://popsql.com/learn-sql/postgresql/how-to-query-date-and-time-in-postgresql](https://popsql.com/learn-sql/postgresql/how-to-query-date-and-time-in-postgresql)

---
2021-02-05 10:43:17

Radiohead LoRa on ESP32 Heltec here:

[http://community.heltec.cn/t/lora-32-v2-radio-head-library-sovled/129/2](http://community.heltec.cn/t/lora-32-v2-radio-head-library-sovled/129/2)

Adafruit Radiohead example [https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/rfm9x-test](https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/rfm9x-test)

![](/img/co2/heltec_hello_lora.png)

Arduino array length [https://www.arduino.cc/reference/en/language/variables/data-types/array/](https://www.arduino.cc/reference/en/language/variables/data-types/array/)

---
2021-02-05 13:12:57

Basic lora receive and parse (not yet POST) here:

[https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/68031d85b8880b2cfb599d8558d215604412e519/v0.2-alpha](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/68031d85b8880b2cfb599d8558d215604412e519/v0.2-alpha)

![](/img/co2/lora_config.png)

---
2021-02-07 11:04:31

low power mode of scd30 [https://www.mouser.com/pdfdocs/CD_AN_SCD30_Low_Power_Mode_D2.pdf](https://www.mouser.com/pdfdocs/CD_AN_SCD30_Low_Power_Mode_D2.pdf)

---
2021-02-09 12:26:06

Rev G BOM here: [https://docs.google.com/spreadsheets/d/1lVheEod6zCzNCYa6XvAfB3fSmFhtaZ6GWjAGM3Qgw9o/edit#gid=970277542](https://docs.google.com/spreadsheets/d/1lVheEod6zCzNCYa6XvAfB3fSmFhtaZ6GWjAGM3Qgw9o/edit#gid=970277542)


Rev_G gerbers on Oshpark here: [https://oshpark.com/shared_projects/B5Xvlckj](https://oshpark.com/shared_projects/B5Xvlckj)

![](/img/co2/rev_g_oshpark_top.png)

![](/img/co2/rev_g_oshpark_bottom.png)

![](/img/co2/rev_g_top.png)

![](/img/co2/rev_g_bottom.png)

---
2021-02-09 19:58:22

Create the feed online here: http://co2data.pvos.org/

Arduino firmware is here: https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/blob/master/releases/v0.4-alpha.zip

Examples (of individual feeds):

http://co2data.pvos.org/data/rk8gt2ig7atv

http://co2data.pvos.org/data/kmwfezd45adn

---
2021-02-11 17:31:12

1591 btcl [http://www.hammondmfg.com/pdf/1591B.pdf](http://www.hammondmfg.com/pdf/1591B.pdf)

good thread on pcb hole sizes / placement [https://www.eevblog.com/forum/eda/m3-screw-drill-diameter/](https://www.eevblog.com/forum/eda/m3-screw-drill-diameter/)

Depends how accurate are the hole positions are in what you are mounting it to.
You want accurate size on one side and oversize on the other to allow for tolerance. 
3.5mm would be a generally normal size for an M3 mount, but M3.5 on both pieces may get too sloppy, so you'd normally do 3.2mm on one and 3.5 on the other.  
If it's just a general purpose mount hole with no specifiiic 'other bit', use 3.5mm

[3M Command hooks -- metal](https://www.amazon.com/Command-Damage-Free-Small-without-Packaging/dp/B0751TRS6Y/ref=sr_1_1_sspa?dchild=1&keywords=3m+command+hooks&qid=1613084648&s=home-garden&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNlJGRU5VQjMzVFZMJmVuY3J5cHRlZElkPUEwNzEwNDM1MkRRSUtXRlA1OU5ZUSZlbmNyeXB0ZWRBZElkPUExMDI1NjgxMjBFQ01PRE5DTUpRRSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)

[3M Command hooks -- plastic](https://www.amazon.com/Command-White-Utility-Container-GP003-7NA/dp/B0753NHZVQ/ref=sr_1_4?dchild=1&keywords=3m+command+hooks&qid=1613084745&s=home-garden&sr=1-4)

---
2021-02-11 19:58:23

![](/img/co2/rev_h_draft1.png)

![](/img/co2/rev_h_draft1_back.png)

![](/img/co2/feedmap_codeploy_test.png)

---
2021-02-12 09:58:30

![](/img/co2/rev_g_test.png)

![](/img/co2/rev_g_test_back.png)

![](/img/co2/co2_pubkey.png)

![](/img/co2/uFL_option.png)

---
2021-02-12 20:38:52

common hole / tap sizes:

![](/img/co2/common_hole_sizes.png)

M2 spacers on [amazon](https://www.amazon.com/HVAZI-Male-Female-Spacer-Standoffs-Assortment/dp/B071KDS14D)

---
2021-02-12 21:25:40

Submitted to jlcpcb! Order: Y15-2489114A


Files: [https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/838dbbc5dcd8af392ac3b86d49a4e15efe28e0f8/REV_H](https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/838dbbc5dcd8af392ac3b86d49a4e15efe28e0f8/REV_H)



![](/img/co2/rev_h_jlcpcb_top.png)

![](/img/co2/rev_h_jlcpcb_bottom.png)

---
2021-02-12 21:30:58

Updated code for REV_E and REV_F (Heltec) to show public key on screen here: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/b0f7bae152fd3fedaaca335b2e49ac72dcf17830/v0.4-alpha/pvos_co2_wifi_pubkey](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/b0f7bae152fd3fedaaca335b2e49ac72dcf17830/v0.4-alpha/pvos_co2_wifi_pubkey)


Test code for REV_G (Feather ESP32; should work on REV_H too) here: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/40179ca69b689f22f4f3d207cea9c0f9568a5edf/v0.4-alpha/rev_g](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/40179ca69b689f22f4f3d207cea9c0f9568a5edf/v0.4-alpha/rev_g)

---
2021-02-13 10:23:28

QR codes:

https://github.com/soldair/node-qrcode

Added to feedmaps:

[https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/182e091f08e907bae7640dbb3cbb344c7f8f1961](https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/182e091f08e907bae7640dbb3cbb344c7f8f1961)

![](/img/co2/feedmaps_qr.png)

Added to bayou-co2:

[https://gitlab.com/p-v-o-s/co2/bayou-co2/-/tree/f288bec254317eab2deab5af808de973bf5c4d1e](https://gitlab.com/p-v-o-s/co2/bayou-co2/-/tree/f288bec254317eab2deab5af808de973bf5c4d1e)

![](/img/co2/bayou_qr.png)

download canvas [https://www.purplesquirrels.com.au/2019/10/saving-a-canvas-element-as-an-image/](https://www.purplesquirrels.com.au/2019/10/saving-a-canvas-element-as-an-image/)

---
2021-02-14 11:14:43

canvas to pdf [https://stackoverflow.com/questions/23681325/convert-canvas-to-pdf](https://stackoverflow.com/questions/23681325/convert-canvas-to-pdf)

---
2021-02-25 10:52:39

Code for watchdog timer for esp32 here: [https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Timer/WatchdogTimer/WatchdogTimer.ino](https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Timer/WatchdogTimer/WatchdogTimer.ino)

---
2021-02-27 14:23:17

Going to resurrect the 'lora mesh' idea ...

nootropic design lora mesh: [https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/](https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/)


q:
can we make radiohead lib work with sd card on same spi bus?

can the feather m0 work on a rev_h board? 

simple radio control of stuff remotely as per nu vu ?

---
2021-02-27 19:53:43

basic lora mesh working on both heltecs and a feather: [https://github.com/edgecollective/lora-mesh/tree/master/co2/simple_a](https://github.com/edgecollective/lora-mesh/tree/master/co2/simple_a)

![](/img/co2/mesh_working.png)

one specifies the 'target' node, and one's node id ...

would be nice to have a switch on the remote nodes to change node id

might use feather based board as gateway for now ...

As of Feb 27, here's what we see at A2:

![](/img/co2/a2_asof_feb_27.png)

The story is that there is a heater that turned off on Feb 24th, and turned back on around 3 PM Feb 25th ...

---
2021-02-28 12:07:50

blog post on mesh networking: [https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/](https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/)

Idea:  we can have the nodes mesh, and use a 'test network' to visualize.  We can add a 'next hop' field to the database, as well as a 'last rssi' value, and a 'node id' field.  so then we'll have:

node id   next hop id    rssi to the next hop

we can then start to visualize these networks using a similar approach 

---
2021-02-28 13:08:51

RH_TEST_NETWORK

```
////////////////////////////////////////////////////////////////////
bool RHRouter::recvfromAck(uint8_t* buf, uint8_t* len, uint8_t* source, uint8_t* dest, uint8_t* id, uint8_t* flags)
{  
    uint8_t tmpMessageLen = sizeof(_tmpMessage);
    uint8_t _from;
    uint8_t _to;
    uint8_t _id;
    uint8_t _flags;
    if (RHReliableDatagram::recvfromAck((uint8_t*)&_tmpMessage, &tmpMessageLen, &_from, &_to, &_id, &_flags))
    {
	// Here we simulate networks with limited visibility between nodes
	// so we can test routing
#ifdef RH_TEST_NETWORK
	if (
#if RH_TEST_NETWORK==1
	    // This network looks like 1-2-3-4
	       (_thisAddress == 1 && _from == 2)
	    || (_thisAddress == 2 && (_from == 1 || _from == 3))
	    || (_thisAddress == 3 && (_from == 2 || _from == 4))
	    || (_thisAddress == 4 && _from == 3)
	    
#elif RH_TEST_NETWORK==2
	       // This network looks like 1-2-4
	       //                         | | |
	       //                         --3--
	       (_thisAddress == 1 && (_from == 2 || _from == 3))
	    ||  _thisAddress == 2
	    ||  _thisAddress == 3
	    || (_thisAddress == 4 && (_from == 2 || _from == 3))

#elif RH_TEST_NETWORK==3
	       // This network looks like 1-2-4
	       //                         |   |
	       //                         --3--
	       (_thisAddress == 1 && (_from == 2 || _from == 3))
	    || (_thisAddress == 2 && (_from == 1 || _from == 4))
	    || (_thisAddress == 3 && (_from == 1 || _from == 4))
	    || (_thisAddress == 4 && (_from == 2 || _from == 3))

#elif RH_TEST_NETWORK==4
	       // This network looks like 1-2-3
	       //                           |
	       //                           4
	       (_thisAddress == 1 && _from == 2)
	    ||  _thisAddress == 2
	    || (_thisAddress == 3 && _from == 2)
	    || (_thisAddress == 4 && _from == 2)

#endif
```

```
#if defined(__AVR)
//mothbot
#define RFM95_CS 8
#define RFM95_RST 7
#define RFM95_INT 2
#define LED 4

RH_RF95 rf95(RFM95_CS, RFM95_INT);

#elif defined(HELTEC_WIFI_LORA_32_V2)

// heltec wifi lora 32 v2
#define RFM95_CS 18
#define RFM95_RST 14
#define RFM95_INT 26
#define LED 25

RH_RF95 rf95(RFM95_CS, RFM95_INT);


#elif defined(FEATHER_ESP32)

// feather esp32
#define RFM95_CS 14
#define RFM95_RST 27
#define RFM95_INT 15
#define LED 13

RHSoftwareSPI sx1278_spi;

RH_RF95 rf95(RFM95_CS, RFM95_INT, sx1278_spi);

#endif
```

---
2021-02-28 19:46:46

working!

[https://github.com/edgecollective/lora-mesh/tree/c27a875e3a7859b35bfef8a7fb3ae22eecd751c8/co2/simple_d](https://github.com/edgecollective/lora-mesh/tree/c27a875e3a7859b35bfef8a7fb3ae22eecd751c8/co2/simple_d)

Only the feather m0 and the heltec code works for now I think (easy to make the feather esp32 code work I believe)

NOTE: in order to generate the 'test networks', it has to be done in the RHROUTER.h file in the library itself.

See below, displaying RH_TEST_NETWORK==3:

![](/img/co2/rh_network_test.png)

Documentation on RHMesh [here](https://www.airspayce.com/mikem/arduino/RadioHead/classRHMesh.html)

---
2021-02-28 20:23:29

Nice LoRa tracker project [here](https://www.rcgroups.com/forums/showthread.php?2454546-Arduino-LoRa-Long-Range-Lost-Model-Tracker)

Great thread on using CO2 for indoor ventilation assessment [here](https://twitter.com/Poppendieck/status/1366055136859070468)


---
2021-03-01 13:55:42

from [https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/fatal-errors.html](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/fatal-errors.html):


LoadProhibited, StoreProhibited
This CPU exception happens when application attempts to read from or write to an invalid memory location. The address which was written/read is found in EXCVADDR register in the register dump. If this address is zero, it usually means that application attempted to dereference a NULL pointer. If this address is close to zero, it usually means that application attempted to access member of a structure, but the pointer to the structure was NULL. If this address is something else (garbage value, not in 0x3fxxxxxx - 0x6xxxxxxx range), it likely means that the pointer used to access the data was either not initialized or was corrupted.

Indeed, this is what we're seeing from the stack trace:

```
Rebooting...
RFM95_CS:18
initializing node done
RF95 ready
Guru Meditation Error: Core  1 panic'ed (LoadProhibited). Exception was unhandled.
Core 1 register dump:
PC      : 0x400d0dfa  PS      : 0x00060d30  A0      : 0x800d37cc  A1      : 0x3ffb1f60  
A2      : 0x3ffc0214  A3      : 0x00000004  A4      : 0x3ffc0224  A5      : 0x3ffc08b8  
A6      : 0x00000000  A7      : 0x3ffba264  A8      : 0x800d0dee  A9      : 0x3ffb1f40  
A10     : 0x00000000  A11     : 0x00000001  A12     : 0x00000000  A13     : 0x00000003  
A14     : 0x00000001  A15     : 0x00000000  SAR     : 0x0000000e  EXCCAUSE: 0x0000001c  
EXCVADDR: 0x00000001  LBEG    : 0x400eb508  LEND    : 0x400eb525  LCOUNT  : 0x00000000  

Backtrace: 0x400d0dfa:0x3ffb1f60 0x400d37c9:0x3ffb1fb0 0x40088249:0x3ffb1fd0
```

Is there a way to check whether a pointer is null or not before attempting?

Null pointer material [here](https://stackoverflow.com/questions/4007268/what-exactly-is-meant-by-de-referencing-a-null-pointer)

Checking for null status in Arduino: [https://forum.arduino.cc/index.php?topic=128622.0](https://forum.arduino.cc/index.php?topic=128622.0)

Checked for null pointer first, now it works!

Going to implement in other versions, too ...

---
2021-03-01 14:35:37

Fixed trio! [https://github.com/edgecollective/lora-mesh/tree/50f2046267c6fdc4c8f0d68c1d225a53ddbb854c/co2/simple_e](https://github.com/edgecollective/lora-mesh/tree/50f2046267c6fdc4c8f0d68c1d225a53ddbb854c/co2/simple_e)

Working basic lora mesh relay code.

Now set up to send CO2 data. 

---
2021-03-01 15:15:49

Mesh healing:

![](/img/co2/mesh_healing.png)

Simple mesh + co2 reading code: [https://github.com/edgecollective/lora-mesh/tree/fb1f5d3abc81c1c32d06cecbc9205877d048cef3/co2/simple_f/mesh_featheresp32_hardcoded](https://github.com/edgecollective/lora-mesh/tree/fb1f5d3abc81c1c32d06cecbc9205877d048cef3/co2/simple_f/mesh_featheresp32_hardcoded)

Now need to:
- capture other parameters in struct
- restrict broadcast to lora network defined by public key
- add new fields to bayou database in order to capture next_hop, next_rssi, etc

the remote nodes should be mostly listening and relaying, then periodically sending their data

the gateway should be mostly listening and relaying the value via wifi whenever something comes in

i guess the only difference is that if the gateway sees that it is the target node then it is never broadcasting, only wifi sending ...

for now we'll http POST every incoming data point, see if that can handle the random lora messages; otherwise we can store N incoming messages, then POST

---
2021-03-01 15:26:46

testing gateway setup -- adding wifi to gateway node

Feed Public Key: 7zqjzktfq997
Feed Private Key: 4g5xf5xzzhr8
Feed Home Page: http://co2.pvos.org/data/7zqjzktfq997

(on local database)


Ah -- I might want to use 'recvfromAck' (non-blocking) instead of 'recvfromAckTimeout' on the remote nodes.

sequence:

set up the recvfromAck in the loop (or start it running in setup?)

in remote nodes, periodically send co2 data ...

in the gateway, periodically send the data that has been collected thus far ...

some relevant posts:

[https://forum.arduino.cc/index.php?topic=413182.0](https://forum.arduino.cc/index.php?topic=413182.0)

[https://forum.arduino.cc/index.php?topic=381973.msg2638162#msg2638162](https://forum.arduino.cc/index.php?topic=381973.msg2638162#msg2638162)

example using recvfromAck: [https://github.com/adafruit/RadioHead/blob/master/examples/serial/serial_reliable_datagram_server/serial_reliable_datagram_server.pde](https://github.com/adafruit/RadioHead/blob/master/examples/serial/serial_reliable_datagram_server/serial_reliable_datagram_server.pde)

---
2021-03-01 20:45:29

lora-mesh/co2/simple_g/basic_mesh_system/mesh_heltec seems to work as a basic mesh gateway. 

[https://github.com/edgecollective/lora-mesh/tree/b55e5628df09ec6b0b33c46d75cedad343a5e456/co2/simple_g/basic_mesh_system](https://github.com/edgecollective/lora-mesh/tree/b55e5628df09ec6b0b33c46d75cedad343a5e456/co2/simple_g/basic_mesh_system)

will need to test code for other nodes.

need to think through how to handle; seems like each node sends its pubkey, its privkey, and identifies its network by gateway's pubkey.

somehow we have to identify nodes in the network by simple integers, it seems. need to think that through.

note that the gateway should send its own data via http every X seconds ... 

... so maybe there's a millis() loop, where if you're the remote node, when it triggers, you send your data via lora; if you're the gateway, you send your data to the cloud via wifi. 

the gateway is then set up so that it is listening for chunks of time; if it ever hears anything, it does an http POST of that data; and if it is then also past its own interval, it posts data.

every listen-receive-post re-loops the system

in the limit of many receipts, it simply loops back into another receipt again; but it will always measure itself and send via wifi if it's past time to do so

i.e. something like:


if (millis() > wait interval) {

    if we're the gateway, measure our own CO2 and send via wifi;

    if we're a remote node, measure our own CO2 and send via lora;
}

if recvfromAckTimeout(wait interval) {
    // running this function means that we are relaying any mesh messages
    // if it returns true, then we were the intended recipient
    // in our network, this is only true if we're the gateway; so in that case, post the resultant data to the proper feed.
}


this means that the data struct has to include the pubkey and privkey of the remote node that is sending the data.
the node id would ideally be set in hardware, but we'll do it in the config file in this round.
i don't think there's any need to have an upper limit on # nodes; but each nodeid needs to be unique

we should rename nodeId to node_id

---
2021-03-02 10:41:51

Heating events ...

![](/img/co2/labeled_heating_events.png)

Exponential decay [here](http://cdn.teledynelecroy.com/files/appnotes/lecroy_measuring_exponential_decay_slope.pdf)

fitting using python [here](https://stackoverflow.com/questions/49565152/curve-fit-an-exponential-decay-function-in-python-using-given-data-points)

get slopes of data [here](https://stackoverflow.com/questions/49100471/how-to-get-slopes-of-data-in-pandas-dataframe-in-python/49100744)

adding fields to bayou:

---
2021-03-02 18:20:59

Plan: 

- add node_id, next_hop, and next_rssi to posgres.
- develop on two heltecs to start w/ 'real' code, can just vary node #
- add in two other feather m0 nodes w/ faked co2 data loops

1. adding new column to postgres [https://www.postgresqltutorial.com/postgresql-add-column/](https://www.postgresqltutorial.com/postgresql-add-column/)

```
ALTER TABLE measurements ADD COLUMN node_id INT;
ALTER TABLE measurements ADD COLUMN next_hop INT;
ALTER TABLE measurements ADD COLUMN next_rssi FLOAT;
ALTER TABLE measurements ADD COLUMN light FLOAT;

```

need to remember to optimize strings!

need to add lux to database

string args and string cat -- [https://forum.arduino.cc/index.php?topic=120233.0](https://forum.arduino.cc/index.php?topic=120233.0)

strlcat() -- truncates string if necessary rather than writing outside bounds

---
2021-03-02 21:31:36

Replaced use of strings with chars; put stuff into functions: [https://github.com/edgecollective/lora-mesh/tree/bdec49aedecffb83f29723c3f0fcfdf924c9e2fe/co2/simple_h/mesh_heltec](https://github.com/edgecollective/lora-mesh/tree/bdec49aedecffb83f29723c3f0fcfdf924c9e2fe/co2/simple_h/mesh_heltec) -- basic gateway is working.

Now need to:
- add 'light' to postgres, and set up bayou
- add 'mesh relay/receive (and post if gateway)' logic to heltec



---
2021-03-03 12:43:22

Basic working version for Heltec!

[https://github.com/edgecollective/lora-mesh/tree/f7b27e7f51805341db7ef8874882ed2523eebbb7/co2/simple_j](https://github.com/edgecollective/lora-mesh/tree/f7b27e7f51805341db7ef8874882ed2523eebbb7/co2/simple_j)

Also includes code for a 'dummy' featherm0 node.

Next priorities:

1. Change Bayou so that it display the node_id, next_hop, next_rssi
2. Change Feedmap so that it can display a 'viz' of the network coming through
3. Make code for a simple relay node in the network

---
2021-03-03 17:08:56

sorting javascript objects by key [https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key](https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key)

sorting javascript objects by value [https://stackoverflow.com/questions/1069666/sorting-object-property-by-values](https://stackoverflow.com/questions/1069666/sorting-object-property-by-values)

---
2021-03-03 17:38:11


working!  the "simple_k" arduino version, with associated commits on bayou and feedmap ...

![](/img/co2/feedmap_mesh.png)

bayou code: [https://gitlab.com/p-v-o-s/co2/bayou-co2/-/tree/d738bfcbbd1f4b934a11add33852f7f00267e0fc](https://gitlab.com/p-v-o-s/co2/bayou-co2/-/tree/d738bfcbbd1f4b934a11add33852f7f00267e0fc)

feedmap code: [https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/52820c9e0cdbdb02808a239cf75fe65ff7360391](https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/52820c9e0cdbdb02808a239cf75fe65ff7360391)

arduino firmware: [https://github.com/edgecollective/lora-mesh/tree/731e5e392831f657b3cb9bdfb01c6fe3691d9187/co2/simple_k](https://github.com/edgecollective/lora-mesh/tree/731e5e392831f657b3cb9bdfb01c6fe3691d9187/co2/simple_k)


---
2021-03-04 09:10:42

Data analysis repo here: [https://github.com/p-v-o-s/co2data-analysis/tree/a4879538a447a920785b4d9182a0b38e4830baab/jupyter/heating_mar_04_2020](https://github.com/p-v-o-s/co2data-analysis/tree/a4879538a447a920785b4d9182a0b38e4830baab/jupyter/heating_mar_04_2020)


---
2021-03-04 13:13:30

Repeaters working!

![](/img/co2/repeater.png)

Arduino firmware is 'simple_l' version: [https://github.com/edgecollective/lora-mesh/tree/32dbf22e74e37e31f55ce6855fca599a2c0105f9/co2/simple_l](https://github.com/edgecollective/lora-mesh/tree/32dbf22e74e37e31f55ce6855fca599a2c0105f9/co2/simple_l)

Feedmap version is in the 'mesh' branch: [https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/817f69f4ab2012de69c9be0644be988d19e879e8](https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/817f69f4ab2012de69c9be0644be988d19e879e8)

Bayou-feed version is [https://gitlab.com/p-v-o-s/co2/bayou-co2/-/tree/d738bfcbbd1f4b934a11add33852f7f00267e0fc](https://gitlab.com/p-v-o-s/co2/bayou-co2/-/tree/d738bfcbbd1f4b934a11add33852f7f00267e0fc)

---
2021-03-05 10:15:35

Pandas series to numpy array [https://pandas.pydata.org/pandas-docs/version/0.24.0rc1/api/generated/pandas.Series.to_numpy.html](https://pandas.pydata.org/pandas-docs/version/0.24.0rc1/api/generated/pandas.Series.to_numpy.html)

polyfit: [https://numpy.org/doc/stable/reference/generated/numpy.polyfit.html](https://numpy.org/doc/stable/reference/generated/numpy.polyfit.html)

[https://stackoverflow.com/questions/54313463/pandas-datetime-to-unix-timestamp-seconds](https://stackoverflow.com/questions/54313463/pandas-datetime-to-unix-timestamp-seconds)

![](/img/co2/heating_events_mar_5_annotated.png)

[https://stackoverflow.com/questions/35495045/exponential-fit-of-the-data-python](https://stackoverflow.com/questions/35495045/exponential-fit-of-the-data-python)

[https://numpy.org/doc/stable/reference/generated/numpy.exp.html](https://numpy.org/doc/stable/reference/generated/numpy.exp.html)

---
2021-03-06 08:10:48

Error on the fit in numpy: [https://stackoverflow.com/questions/15721053/whats-the-error-of-numpy-polyfit](https://stackoverflow.com/questions/15721053/whats-the-error-of-numpy-polyfit)

---
2021-03-07 13:19:18

New mesh code here: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/raw/master/releases/v0.7-alpha.zip](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/raw/master/releases/v0.7-alpha.zip)

---
2021-03-10 16:13:42

error in fit: [http://clip.med.yale.edu/courses/brdu/Costa_ODE.pdf](http://clip.med.yale.edu/courses/brdu/Costa_ODE.pdf)

error in slope of linear fit: [https://pages.mtu.edu/~fmorriso/cm3215/UncertaintySlopeInterceptOfLeastSquaresFit.pdf](https://pages.mtu.edu/~fmorriso/cm3215/UncertaintySlopeInterceptOfLeastSquaresFit.pdf)

> SE of regression slope = sb1 = sqrt [ Σ(yi – ŷi)2 / (n – 2) ] / sqrt [ Σ(xi – x)2 ]

https://people.duke.edu/~rnau/mathreg.htm

https://faculty1.coloradocollege.edu/~sburns/LinearFitting/SimpleDataFitting.html

https://newt.phys.unsw.edu.au/~mcba/mcba12.pdf

https://www.ruf.rice.edu/~bioslabs/tools/data_analysis/errors_curvefits.html

https://statisticsbyjim.com/regression/standard-error-regression-vs-r-squared/

https://astrofrog.github.io/py4sci/_static/15.%20Fitting%20models%20to%20data.html

---
2021-03-11 18:17:18

Rework of firmware and bayou for mesh networking ...

- Bayou software: [https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/08b7b44a7fc53e3e3fd1f61d3eb32aee927503e9](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/08b7b44a7fc53e3e3fd1f61d3eb32aee927503e9)

- Arduino firmware -- ver 0.8-alpha: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/96f83332bae148ced8d4809c85f2e35f16c18a85/v0.8-alpha](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/96f83332bae148ced8d4809c85f2e35f16c18a85/v0.8-alpha)

Can now use URL parameters to specify node and parameter to graph:

![](/img/co2/bayou_revamp.png) 

---
2021-03-12 10:05:53

Added overlay functionality to Bayou:

- Bayou system: [https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/72aa49a03ad6e15c572cc50edb022d78b5dfa01d](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/72aa49a03ad6e15c572cc50edb022d78b5dfa01d)

Still associated with ver 0.8-alpha of firmware:

- Arduino firmware -- ver 0.8-alpha: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/96f83332bae148ced8d4809c85f2e35f16c18a85/v0.8-alpha](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/96f83332bae148ced8d4809c85f2e35f16c18a85/v0.8-alpha)


---
2021-03-13 08:42:37

## <a name="refs_03_13"></a> New References on CO2 to assess indoor ventilation

Great presentation on using CO2 for assessing ventilation -- recommends using fans: [https://www.ghdonline.org/uploads/Measuring_Air_Changes.pdf](https://www.ghdonline.org/uploads/Measuring_Air_Changes.pdf)

https://en.wikipedia.org/wiki/Exponential_decay

[International Journal of Ventilation: Simple and Cheap Air Change Rate Measurement Using CO2 Concentration Decays](https://www.researchgate.net/publication/37410259_Simple_and_Cheap_Air_Change_Rate_Measurement_Using_CO2_Concentration_Decays)

[Medrxiv: Ventilation rate assessment by carbon dioxide levels in dental treatment rooms](https://www.medrxiv.org/content/10.1101/2021.02.04.21251153v1.full.pdf) -- note: uses baking soda! Key paper, here.

[Am J Respir Crit Care Med: Measuring ventilation of patient care areas in hospitals. Description of a new protocol](https://pubmed.ncbi.nlm.nih.gov/8520767/)

## Fitting in JS:

[https://stackoverflow.com/questions/54934216/how-to-select-a-point-on-a-line-chart-of-chart-js-using-javascript](https://stackoverflow.com/questions/54934216/how-to-select-a-point-on-a-line-chart-of-chart-js-using-javascript)

[https://stackoverflow.com/questions/31253468/chart-js-get-point-index-from-chart-getpointsatevente](https://stackoverflow.com/questions/31253468/chart-js-get-point-index-from-chart-getpointsatevente)

[https://www.npmjs.com/package/chart.js-rangeslider](https://www.npmjs.com/package/chart.js-rangeslider)

[https://stackoverflow.com/questions/6195335/linear-regression-in-javascript](https://stackoverflow.com/questions/6195335/linear-regression-in-javascript)

[https://github.com/Tom-Alexander/regression-js](https://github.com/Tom-Alexander/regression-js)

---
2021-03-13 10:15:09

Updated bayou to find the existing nodes in a feed, and pull JSON and CSV for them:

[https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/731a1e1564680eb8ec48bab12ca204ac5f2534ee](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/731a1e1564680eb8ec48bab12ca204ac5f2534ee)

Still compatible with latest (ver0.8-alpha) software

Some useful folks to add to the list: [https://twitter.com/rod_escombe/status/1246117208440418304](https://twitter.com/rod_escombe/status/1246117208440418304)

[https://twitter.com/wendyNAIFarbman/status/1246896832363614208?s=20](https://twitter.com/wendyNAIFarbman/status/1246896832363614208?s=20)

---
2021-03-13 13:08:51


["Natural Ventilation for the Prevention of Airborne Contagion"](https://core.ac.uk/download/pdf/13098227.pdf) -- another key paper by Enscombe et al. 

---
2021-03-14 09:00:12

Baking soda and vinegar experiment [https://www.thoughtco.com/equation-for-the-reaction-of-baking-soda-and-vinegar-604043](https://www.thoughtco.com/equation-for-the-reaction-of-baking-soda-and-vinegar-604043)

How to make carbon dioxide [https://sciencing.com/make-carbon-dioxide-6532065.html](https://sciencing.com/make-carbon-dioxide-6532065.html)

Making CO2 w/ DIY bottle system [https://www.co2supermarket.co.uk/diy-co2-kit-setup-instructions-guide-6.html](https://www.co2supermarket.co.uk/diy-co2-kit-setup-instructions-guide-6.html)

CO2 in grow rooms, increasing ppm: [https://www.rollitup.org/t/co2-generated-via-vinegar-and-baking-soda.397247/](https://www.rollitup.org/t/co2-generated-via-vinegar-and-baking-soda.397247/)

CO2 heavier than air, typically we'll need to use a fan to circulate it in the room 

https://antoine.frostburg.edu/chem/senese/101-hidden/gases/faq/co2-from-vinegar-and-baking-soda.shtml

---
2021-03-14 12:09:47

Showing a fit in chartjs [https://stackoverflow.com/questions/42841925/mixed-chart-scatter-plot-with-chart-js](https://stackoverflow.com/questions/42841925/mixed-chart-scatter-plot-with-chart-js)

---
2021-03-14 16:32:35

Select range in chartjs: [https://stackoverflow.com/questions/42855738/how-do-i-selecting-a-date-range-like-onclick-but-drag-select](https://stackoverflow.com/questions/42855738/how-do-i-selecting-a-date-range-like-onclick-but-drag-select)

Chartjs plugin zoom: [https://github.com/chartjs/chartjs-plugin-zoom]

[https://github.com/jjppof/chartjs-plugin-zoom-pan-select](https://github.com/jjppof/chartjs-plugin-zoom-pan-select)

[https://stackoverflow.com/questions/30256695/chart-js-drawing-an-arbitrary-vertical-line](https://stackoverflow.com/questions/30256695/chart-js-drawing-an-arbitrary-vertical-line)

[https://github.com/chartjs/chartjs-plugin-zoom](https://github.com/chartjs/chartjs-plugin-zoom)

---
2021-03-14 19:44:38

Bayou branch that does curve fitting: [https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/6a97681e2cc36e1e41edc2b6800e00858987fa42](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/6a97681e2cc36e1e41edc2b6800e00858987fa42)

Video demo [here](https://youtu.be/og7Ydcvd6qI)

---
2021-03-16 17:26:51

Added live exponential fit! Bayou commit here: [https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/fe7b5ed71be3ebddf4d0be98c3d1bd88fb758d20](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/fe7b5ed71be3ebddf4d0be98c3d1bd88fb758d20)

---
2021-03-17 08:04:41

Nice working prototype of Bayou ACH fit: [https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/1372dc343ec2f9e70449fe0b0628fb26019eac8a](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/1372dc343ec2f9e70449fe0b0628fb26019eac8a)

E.g. [http://192.168.1.163:5000/data/jy5kv5ybwq5j/ach/2](http://192.168.1.163:5000/data/jy5kv5ybwq5j/ach/2)

Video here: [https://youtu.be/AfVbtuXU_sA](https://youtu.be/AfVbtuXU_sA)

---
2021-03-17 09:58:58

Brought back in display of linear fit, along with slope and intercept parameters, in the following commit:

[https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/88f6d5afbd9e33244800946c21719db9db13b627](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/88f6d5afbd9e33244800946c21719db9db13b627)

![](/img/co2/ach_combo.png)

---
2021-03-17 10:11:20

Bayou has format-able canvas size now: 

[https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/0ed7d425ca237134644ebc88445594b18736baf0](https://gitlab.com/p-v-o-s/agroeco/bayou/-/tree/0ed7d425ca237134644ebc88445594b18736baf0)

---
2021-03-17 11:36:09

Nice reference for downloading canvas as a PDF: [https://stackoverflow.com/questions/23681325/convert-canvas-to-pdf](https://stackoverflow.com/questions/23681325/convert-canvas-to-pdf) -- some pretty simple code

---
2021-03-18 19:00:18

# Baking soda exp't #1

Dataset here: [http://bayou.pvos.org/data/6adqqks8f7yb/ach/2](http://bayou.pvos.org/data/6adqqks8f7yb/ach/2)

## In play room -- door closed -- fit one

![](/img/co2/co2_baking_one.png)

## In play room -- door closed -- fit two

![](/img/co2/co2_baking_two.png)

## In play room -- door closed -- fit three

![](/img/co2/co2_baking_three.png)

## ... then door open

![](/img/co2/co2_baking_four_door_open.png)

---
2021-03-18 19:05:04

# Baking soda exp't #2

Dataset here: [http://bayou.pvos.org/data/8fs9k3zwjg4w/](http://bayou.pvos.org/data/8fs9k3zwjg4w/)

---
2021-03-31 14:51:59

barrel jack connector [https://www.sparkfun.com/datasheets/Prototyping/Barrel-Connector-PJ-202A.pdf](https://www.sparkfun.com/datasheets/Prototyping/Barrel-Connector-PJ-202A.pdf)

pos centerpole on 2.1 mm + USB cable from Amazon ...

extension cable from sparkfun for 2.1 mm jack [here](https://www.sparkfun.com/products/11707)

---
2021-04-17 08:49:02

force calibration event at a2:

![](/img/co2/force_calibration_at _a2.png)

[http://bayou.pvos.org/data/8fs9k3zwjg4w](http://bayou.pvos.org/data/8fs9k3zwjg4w)

---
2021-04-17 08:50:02

Current setup idea:

uf2 based board, so we can flash firmware without IDE

microSD card for parameters on gateway; not necessary for remote node, b/c each node can be determined by a switch, and the loranetwork can be set in the firmware -- we can have several options

https://learn.adafruit.com/adafruit-metro-esp32-s2/arduino-ide-setup

---
2021-04-18 10:23:09

uf2 bootloader on feathers2 is not protected. this means that arduino ide upload will likely erase UF2 (way to mitigate this?) and in fact does in my experience.

But 'advanced' users who use Arduino IDE w/ esp32 setup should also likely be able to handle webserial or other modes of re-flashing the bootloader. 

questions:

- can we create a UF2 binary of a compiled arduino IDE feather2 sketch? it seems a bit different from the typical arduino setup -- might need to look into precisely what the arduino ide is doing, what it's uploading and how.
- what are the dynamics of the bootloader? 
- can the feathers2 use radiohead mesh to send packets?
- best way to force calibrate the devices?

tempting to use the itsy bitsy, but sticking with the feather ecosystem if possible seems smart.

esp32-s2 feathers2 as main board seems like a good setup if we can swing it.  means that gateway and remote node are identical setups.  

making uf2s --- https://github.com/blurfl/makeUF2-tool

```
python /home/dwblair/.arduino15/packages/esp32/tools/esptool_py/3.0.0/esptool.py --chip esp32s2 --port /dev/ttyACM0 --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 80m --flash_size detect 0xe000 /home/dwblair/.arduino15/packages/esp32/hardware/esp32/2.0.0-alpha1/tools/partitions/boot_app0.bin 0x1000 /tmp/arduino_build_224941/Blink_S2.ino.bootloader.bin 0x10000 /tmp/arduino_build_224941/Blink_S2.ino.bin 0x8000 /tmp/arduino_build_224941/Blink_S2.ino.partitions.bin 
```

important video to watch: [https://www.youtube.com/watch?v=xmB22q2p40g](https://www.youtube.com/watch?v=xmB22q2p40g)

instructions for loading the uf2 bootloader [https://feathers2.io/install_uf2.html](https://feathers2.io/install_uf2.html)

```
esptool.py --chip esp32s2 -p /dev/cu.usbmodem01 -b 921600 --before=default_reset --after=no_reset write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x1000 bootloader.bin 0x8000 partition-table.bin 0xe000 ota_data_initial.bin 0x410000 tinyuf2.bin
```

options for setting up system:

# remote

option A:
- feather m0 express $25
- lora module $10

option b:
- itsy bitsy m4 $12
- lora $10



# gateway:

option A:
- feather m0 express $25
- airlift wing $13
- lora module $10

----> this is the major thing to test right now


option B:
- itsy bitsy m4 (to enable circuitpy) or m0  $15 / $12
- airlift add-on for ib: $15


samd51 in standby mode -- can use sleepdog library -- https://forum.arduino.cc/t/samd51-sleep-mode/591685 -- get 43 uA

---
2021-04-18 15:14:29

[https://learn.adafruit.com/adafruit-hallowing/using-with-arduino-ide](https://learn.adafruit.com/adafruit-hallowing/using-with-arduino-ide)

[https://github.com/PaulStoffregen/SerialFlash](https://github.com/PaulStoffregen/SerialFlash)

[https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports/creating-a-new-spi](https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports/creating-a-new-spi)


```
SPIClass SPI (&PERIPH_SPI,  PIN_SPI_MISO,  PIN_SPI_SCK,  PIN_SPI_MOSI,  PAD_SPI_TX,  PAD_SPI_RX);
```

---
2021-04-18 16:14:31

core code for project!  M0 + uSD + lora + esp32 wifi breakout (tested on itsybitsy)

[https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/6924c6b2f5f700cc84a04e692b20816c3716f760/v0.9-alpha/ver2](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/6924c6b2f5f700cc84a04e692b20816c3716f760/v0.9-alpha/ver2)

---
2021-04-18 19:14:53

mini ultra -- [https://www.rocketscream.com/blog/product/mini-ultra/](https://www.rocketscream.com/blog/product/mini-ultra/)

mini ultra pro [https://github.com/rocketscream/MiniUltraPro](https://github.com/rocketscream/MiniUltraPro)

samd51 easier part ot solder [https://www.digikey.com/en/products/detail/microchip-technology/ATSAMD51N20A-AUT/7390290](https://www.digikey.com/en/products/detail/microchip-technology/ATSAMD51N20A-AUT/7390290)

[https://twitter.com/marwa_zaatari/status/1383828012022439937?s=20](https://twitter.com/marwa_zaatari/status/1383828012022439937?s=20)  good thread on hvac

---
2021-04-20 13:22:50

adding adalogger to feather m0 lora: [https://forums.adafruit.com/viewtopic.php?f=31&p=856795](https://forums.adafruit.com/viewtopic.php?f=31&p=856795)

This thread indicates that the original Arduino SD library shouldn't be used with more than one device on the SPI bus; use SdFAT instead [https://forum.arduino.cc/t/problem-using-both-spi-library-and-sd-library-in-arduino-uno-program/149775/16](https://forum.arduino.cc/t/problem-using-both-spi-library-and-sd-library-in-arduino-uno-program/149775/16), and making sure to set the relevant pins high or low depending on which device you want to talk to


---
2021-04-24 11:26:44

Ordered CO2 REV_K / REV K from JLCPCB -- git commit is here: [https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/2f2a087edde58be6938c8b4bdc3f76482e28a35f/REV_K/kicad](https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/2f2a087edde58be6938c8b4bdc3f76482e28a35f/REV_K/kicad)


---
2021-04-24 11:37:42

Gateway design:

- hardware uSD (because easier if folks want to use shield)
- virtual LoRa (folks who want to use M0 LoRa, maybe they can figure out code for combining adalogger shield w/ feather m0? )
- hardware airlift

set up 'all breakout' option, so that the basic soldering req'd is:
- headers, and
- lora module

going to work on this using 'gateway' file in co2monitor-firmware v0.91-alpha

NOTE: if someone were to use a feather m0 lora, they'd have to load firmware via arduino ide *anyway* ... so virtual lora connection is fine. 

Need to see if hardware uSD and hardware airlift are compatible ...

But: looks like uSD doesn't 'play nice' with other SPI devices.  so: let's see if we can do hardware lora and hardware airlift; then virtual uSD.

---
2021-04-24 12:22:18

feather m0 express + hardware airlift and hardware lora working in this commit: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/b21eeb06612cf2d21b35c77848c71bd4566b9cc5/v0.91-alpha/gateway/featherm0express_hardware_airlift_ScanNetworks_hardware_lora](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/b21eeb06612cf2d21b35c77848c71bd4566b9cc5/v0.91-alpha/gateway/featherm0express_hardware_airlift_ScanNetworks_hardware_lora)


virtual SPi on m0 reference here: [https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports?gclid=CjwKCAjwg4-EBhBwEiwAzYAlsoaFHbvfOeNx0AQbUp4pAbEmXst8Mpb2HCE15YLEejIkYbjp9jlnWRoC4VkQAvD_BwE](https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports?gclid=CjwKCAjwg4-EBhBwEiwAzYAlsoaFHbvfOeNx0AQbUp4pAbEmXst8Mpb2HCE15YLEejIkYbjp9jlnWRoC4VkQAvD_BwE)

....

challenging to create virtual SPI for uSD ... ?  can't find in library as yet ...

another option might be to do virtual SPI for lora + airlift ...

quick test of that ...

---
2021-04-24 14:32:12

basic test of: featherm0express + hardware_airlift + hardware uSD + virtual LoRa here: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/a0e75274df4518dbe081546bc32aacd0a79d6e80/v0.91-alpha/gateway/featherm0express_airlift_test_hardware_uSD_virtual_LoRa](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/a0e75274df4518dbe081546bc32aacd0a79d6e80/v0.91-alpha/gateway/featherm0express_airlift_test_hardware_uSD_virtual_LoRa)

now try writing to uSD, connecting to wifi, and sending lora packet in loop ...

---
2021-04-24 14:43:32

note: seems like airlift (which includes 3.3V LDO) can do alright on 3.7 lithium ion battery (gets sufficient current)

---
2021-04-24 15:21:12

was able to read config file and then use wifi -- also lora -- now need to write gateway firmware to test! -- commit is here: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/d7d8ad2ac631a02f62a4df86c8642994a86d8005/v0.91-alpha/gateway/featherm0express_airlift_test_hardware_uSD_virtual_LoRa_readcon](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/d7d8ad2ac631a02f62a4df86c8642994a86d8005/v0.91-alpha/gateway/featherm0express_airlift_test_hardware_uSD_virtual_LoRa_readcon)

----
2021-04-26 17:34:57

![](/img/co2/neopixel_8_leds_fabprint.png)

---
2021-04-29 11:22:02

design updates:

base around itsy bitsy m0 / m4
diy version can be hand soldered easily
microsd breakout option
battery power is: cell battery module
force calibrate procedure

then next version: cheaper, SMT

samd51 deep sleep mode: [https://forum.arduino.cc/t/standby-sleep-mode-on-samd51/576584/4](https://forum.arduino.cc/t/standby-sleep-mode-on-samd51/576584/4)

note: we don't really need to worry about the samd51 sleeping -- we'll probably only use it when doing circuitpython, on the gateway, if we want to do that ... but the gateway usually won't be sleeping ... at least not for many applications ... 

---
2021-04-30 10:20:04

IBM4 + uSD (hardware SPI) + esp32 airlift featherwing (hardware SPI) + LoRa (virtual SPI): [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/95aca8ffeebd98583e0790de480f285ef62d94da/v0.91-alpha/ibm4_hardware_airliftwing_hardware_uSD_virtual_LoRa](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/95aca8ffeebd98583e0790de480f285ef62d94da/v0.91-alpha/ibm4_hardware_airliftwing_hardware_uSD_virtual_LoRa)

above, + OLED + SCD30: [https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/59575acfdf487dab619edb50be38fe54dbf7a503/v0.91-alpha/ibm4_hard_airliftwing_hard_uSD_soft_LoRa_i2c_oled_i2c_scd30](https://gitlab.com/p-v-o-s/co2/co2monitor-firmware/-/tree/59575acfdf487dab619edb50be38fe54dbf7a503/v0.91-alpha/ibm4_hard_airliftwing_hard_uSD_soft_LoRa_i2c_oled_i2c_scd30)

note: looks like we have another reason for using the IBM4 -- we need the extra pins?

pinouts for esp32 airlift featherwing -- [https://learn.adafruit.com/adafruit-airlift-featherwing-esp32-wifi-co-processor-featherwing/pinouts](https://learn.adafruit.com/adafruit-airlift-featherwing-esp32-wifi-co-processor-featherwing/pinouts)

upgrading firmware [https://learn.adafruit.com/adafruit-airlift-featherwing-esp32-wifi-co-processor-featherwing/upgrade-external-esp32-airlift-firmware](https://learn.adafruit.com/adafruit-airlift-featherwing-esp32-wifi-co-processor-featherwing/upgrade-external-esp32-airlift-firmware)

okay -- need a pint on GPIO0 ---

## Rotary coded switch

"SD-2010"

![](/img/co2/rotary_coded_switch.png)

Part from digikey here: [https://www.digikey.com/en/products/detail/nidec-copal-electronics/SD-2010/948380](https://www.digikey.com/en/products/detail/nidec-copal-electronics/SD-2010/948380)

Datasheet: [https://www.nidec-copal-electronics.com/e/catalog/switch/sd-1000&sd-2000.pdf](https://www.nidec-copal-electronics.com/e/catalog/switch/sd-1000&sd-2000.pdf)


![](/img/co2/coded_rotary_switch_simple_wiring.png)

---
2021-05-01 12:19:15

[https://docs.google.com/spreadsheets/d/1tf-k_AHOju78dKrg6N9kK3bM163Hrda-1mUbevxc0zM/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1tf-k_AHOju78dKrg6N9kK3bM163Hrda-1mUbevxc0zM/edit?usp=sharing))

![](/img/co2/position_analysis.png)

---
2021-05-01 13:43:06

maxim unique id chip [https://www.digikey.com/en/products/detail/maxim-integrated/DS2401/956992](https://www.digikey.com/en/products/detail/maxim-integrated/DS2401/956992)

[https://preshing.com/20110504/hash-collision-probabilities/](https://preshing.com/20110504/hash-collision-probabilities/)

![](/img/co2/probabilities.png)


> So the probability of no collisions is exp(-1/2) or about 60%, which means there’s a 40% chance of at least one collision. As a rule of thumb, a hash function with range of size N can hash on the order of √N values before running into collisions.

[https://crypto.stackexchange.com/questions/39641/what-are-the-odds-of-collisions-for-a-hash-function-with-256-bit-output](https://crypto.stackexchange.com/questions/39641/what-are-the-odds-of-collisions-for-a-hash-function-with-256-bit-output)

[https://learn.sparkfun.com/tutorials/cryptographic-co-processor-atecc508a-qwiic-hookup-guide/all](https://learn.sparkfun.com/tutorials/cryptographic-co-processor-atecc508a-qwiic-hookup-guide/all)

---
2021-05-01 14:46:31

using spi flash on feather m0 express: [https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/using-spi-flash](https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/using-spi-flash)

---
2021-05-01 17:28:23

airlift featherwing esp32 schematic [https://cdn-learn.adafruit.com/assets/assets/000/076/198/original/adafruit_products_AirLift_FeatherWing_Sch.png?1559155254](https://cdn-learn.adafruit.com/assets/assets/000/076/198/original/adafruit_products_AirLift_FeatherWing_Sch.png?1559155254)

best practices for neopixels [https://learn.adafruit.com/adafruit-neopixel-uberguide/best-practices](https://learn.adafruit.com/adafruit-neopixel-uberguide/best-practices)

---
2021-05-01 17:45:25

![](/img/co2/neopixels_Wiring-Diagram.png)

---
2021-05-01 17:52:23

esp32 wroom antenna placement options [https://www.espressif.com/sites/default/files/documentation/esp-wroom-02_pcb_design_and_module_placement_guide_0.pdf](https://www.espressif.com/sites/default/files/documentation/esp-wroom-02_pcb_design_and_module_placement_guide_0.pdf)

---
2021-05-01 18:19:20

esp32 add-on for itsy bitsy schematic: [https://cdn-learn.adafruit.com/assets/assets/000/080/457/original/adafruit_products_schematic.png?1567623352](https://cdn-learn.adafruit.com/assets/assets/000/080/457/original/adafruit_products_schematic.png?1567623352)

ibm4 EXPRESS [https://cdn-learn.adafruit.com/assets/assets/000/055/481/original/adafruit_products_schem.png?1529261754](https://cdn-learn.adafruit.com/assets/assets/000/055/481/original/adafruit_products_schem.png?1529261754)

DS2401 -- maxim through-hole serial # chip: [https://www.digikey.com/en/products/detail/maxim-integrated/DS2401/956992](https://www.digikey.com/en/products/detail/maxim-integrated/DS2401/956992) 

- powering that chip: [https://forum.arduino.cc/t/reading-serial-from-ds-2401-using-arduino-uno/410373/3](https://forum.arduino.cc/t/reading-serial-from-ds-2401-using-arduino-uno/410373/3)

maxim additional chip: [https://www.digikey.com/en/products/detail/maxim-integrated/DS28CM00R-A00-T/1197555](https://www.digikey.com/en/products/detail/maxim-integrated/DS28CM00R-A00-T/1197555)

---
2021-05-01 19:03:10

incorporated latest changes to REV_L here: [https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/064aa5c7a90d85fe930543ed271bc1fce1ff6d45/REV_L/kicad](https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/tree/064aa5c7a90d85fe930543ed271bc1fce1ff6d45/REV_L/kicad)

---
2021-05-02 10:24:28

![](/img/co2/neopixel_8_dimensions.png)

Board files on github: [https://github.com/adafruit/NeoPixel-Sticks](https://github.com/adafruit/NeoPixel-Sticks)

---
2021-05-02 19:12:47

Latest REV_K is here: 
[https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/commit/acc99be30c98ecd960c28571723e39a166e170a5](https://gitlab.com/p-v-o-s/co2/co2monitor-hardware/-/commit/acc99be30c98ecd960c28571723e39a166e170a5)

---
2021-05-05 11:26:02

## motors

motor for dump truck: 

[https://www.youtube.com/watch?v=XSUyETpCy9M](https://www.youtube.com/watch?v=XSUyETpCy9M)

linear actuator from scratch [https://www.hackster.io/news/a-linear-actuator-made-from-scratch-b89c3c389003](https://www.hackster.io/news/a-linear-actuator-made-from-scratch-b89c3c389003)

---
2021-05-05 14:32:02

itsy bitsy m4 pinout:

![](/img/co2/ibm4_pintout.jpg)

interesting ref on partitioning esp32 here: [https://towardsdatascience.com/tensorflow-meet-the-esp32-3ac36d7f32c7](https://towardsdatascience.com/tensorflow-meet-the-esp32-3ac36d7f32c7)

---
2021-06-26 08:10:10

Working on REV_L with Mike, Craig, and Brett ...

[Indoor ACH experiment w/ CO2 (in Spanish)](https://www.youtube.com/watch?v=raPGrFgsiUk)

Working on getting the ACH fitting working again on Bayou ...

# Craig's feed / setup

Craig's bayou feed: [http://bayou.pvos.org/data/sj5ppfn94meh](http://bayou.pvos.org/data/sj5ppfn94meh)

# Mike's feed / setup

Mike's bayou feed: [http://bayou.pvos.org/data/kurqr92abvua](http://bayou.pvos.org/data/kurqr92abvua)

![](/img/co2/mike_initial_data.png)

![](/img/co2/mike_hotspot_gateway.jpg)

![](/img/co2/mike_hot_gateway_2.jpg)

![](/img/co2/mike_nist.jpg)

![](/img/co2/mike_nist_2.jpg)

![](/img/co2/mike_nist_3.jpg)

---
2021-06-26 09:46:48

Video explaining current interface for assessing ACH using Bayou: [https://youtu.be/xXAM4NldULA](https://youtu.be/xXAM4NldULA)

Todos: 
- ability to select range of historical data (start / stop) rather than 'most recent N datapoints'
- less buggy 'refit' -- currently need to refresh page when doing another fit, or else odd artefacts appear

---
2021-06-26 13:03:46

Mike's 'box test':

![](/img/co2/box_test.jpg)

![](/img/co2/hot_box_experiments_3.png)

Quick video showing ACH analysis for node #2: [https://youtu.be/7Rr_agMS50k](https://youtu.be/7Rr_agMS50k)

---
2021-07-22 21:15:55


| [![REV_L Response Test](/img/co2/step_rev_L_co2_response_time_comparison_annotated.png)](/img/co2/step_rev_L_co2_response_time_comparison_annotated.png) |
|:--:|
| **ENCLOSURE ON:** **A.** Force calibrated outdoors; then transported sensor indoors into small room; **B.** CO2 injection into room; **C.**  Transport of sensor outdoors (< 10 seconds transport duration); **D**. Return sensor to small room (which still has high CO2 concentration).  **E**. Remove enclosure.  **ENCLOSURE OFF:** **F**. Transport sensor outdoors (< 10 seconds transport time). |

---
2021-07-23 10:58:04

![](/img/co2/coupling.png)



[Design-in guidelines for SCD30](https://cdn-learn.adafruit.com/assets/assets/000/098/502/original/Sensirion_SCD30_Design-In_Guidelines_D1.pdf?1609963143)

Seems to argue for larger ventilation holes, smaller inside enclosure.

Might just place holes directly beneath the sensor.

---
2021-07-25 11:29:17

# Enclosure experiments

## Option A

![](/img/co2/A_1.png)

![](/img/co2/A_2.png)


Sensor inside enclosure, sensor close to 'pcb'; square hole cut out as per build-in guidelines; no tape around sensor.

![](/img/co2/enclosure_config_a.png)

Ambient CO2 level;  brought from inside out to outside in < 5 seconds.  Same outside to inside, but ambient CO2 indoors may have been lower; then people entered room.

## Option B

![](/img/co2/B_1.png)

![](/img/co2/B_2.png)

![](/img/co2/B_3.png)

No enclosure; sensor close to 'pcb'; no tape around board.

Comparison of option A and option B:

![](/img/co2/enc_option_a_vs_b.png)

Note that when we'd calibrated using the 'slow' enclosure, it looks as though we didn't actually give the sensor enough time to reach ambient; when the enclosure is removed, we dropped down to ambient.

## Option C

![](/img/co2/C_1.png)

![](/img/co2/C_2.png)

No enclosure; sensor close to 'pcb', tape around sensor to create 'small enclosure'

![](/img/co2/enc_options_a_b_c.png)

(graphic shows events for options a, b, c from left to right)

## Option D

![](/img/co2/D_1.png)

![](/img/co2/D_2.png)

Enclosure; sensor close to 'pcb', tape around sensor to create 'small enclosure'.

Note that there are CO2 intakes on top and bottom of sensor.  The top of the sensor is not taped.  The below behavior in fact indicates that by having the bottom exposed only to the outside, and the top exposed only to the outside, we are somewhat 'averaging' the measurement (with a slow leak).

(graphic shows events for options a,b,c,d from left to right)

![](/img/co2/enc_options_a_b_c_d_longer.png)

## Option E

![](/img/co2/E_1.png)

![](/img/co2/E_2.png)


Enclosure; sensor close to 'pcb', tape around sensor to create 'small enclosure'; also covered 'top' of sensor to avoid intake on top.

Note that what appears to be happening is that I've sealed in a slightly higher CO2 env on the top, by putting tape on top of the intakes.  Also, the sensor responds a bit slower with only the bottom intakes (perhaps the time constant is 'half' as fast as with top and bottom intakes exposed?).  

So: as per Mike's suggestion, let's create the tightest enclosure around the sensor that *also* allows air to flow up over the intakes ...

(Note: I think spike on far right is me exhaling towards sensor accidentally while writing these notes ...)

(graphic shows events for options b,c,d from left to right; option a is only partially visible on left)

![](/img/co2/enc_option_b_c_d_e.png)

## Option F

![](/img/co2/F_1.png)

![](/img/co2/F_2.png)

![](/img/co2/F_3.png)

![](/img/co2/F_4.png)

Made a "small box" that has some finite volume but still allows air flow over the top part of the sensor.

Note that the ends of the response (drop down and rise up) seem a bit more rounded / slower ... perhaps because of the small reservoir of gas inside the enclosure ...

(options a,b,c,d,e,f from left to right below:)

![](/img/co2/enc_a_b_c_d_e_f_longer.png)

## Conclusion

![](/img/co2/pcb_experiment.png)

Looks like the sensor is about 9 or 10 mm peak off board, with sides around 5 mm; the intakes on the 'top' would still have some breathing room if tape was put over the top;  so 8.5 mm headers could work pretty well as 'sides' 

---
2021-07-25 16:51:24

## Bug via Dave S.

![](/img/co2/dave_bug.png)

---
2021-07-27 19:56:53

Summary of PCB ventilation experiment ...

---
2021-07-28 19:52:05

Final report TU Delft comparing CO2 sensor technologies: [https://repository.tudelft.nl/islandora/object/uuid:6957a1c1-6ece-41b9-9802-2674c9365339/datastream/OBJ/download](https://repository.tudelft.nl/islandora/object/uuid:6957a1c1-6ece-41b9-9802-2674c9365339/datastream/OBJ/download)

Crodeon deployment of SCD30 [https://www.crodeon.com/products/covid-co2-kit](https://www.crodeon.com/products/covid-co2-kit)

---
2021-07-28 19:56:28

SCD40 [https://www.semiconductorstore.com/blog/2021/SCD4x-CO2-Sensor-Frequently-Asked-Questions-Symmetry-Blog/4380/](https://www.semiconductorstore.com/blog/2021/SCD4x-CO2-Sensor-Frequently-Asked-Questions-Symmetry-Blog/4380/)

SCD40 design-in guidelines [https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD4x_design-in_guide.pdf](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD4x_design-in_guide.pdf)


---
2021-08-08 20:57:45

Notes on Corsi interview:

don't ever get worse results, but might be waste of time ... 

keep devices 3ft away from walls / out of corners -- to avoid recirculation 

don't want to put e.g. in front of window

look at classroom -- where is air coming in, where is air flowing out -- don't put device close to where air is flowing out 

in general -- would try to put two boxes diagonally apart in the classroom 

next to each other -- 'short circuiting' 

600 700 800 900 

- Make sure that it's well-sealed around the edges

- Remove at 6 months -- bag them in big plastic bag, toss them in dumpster, wash hands after.

sucks in through filters and out through fan 

air blow vertically upward -- good -- want circulating flow up and diagonally across 

weird fluid flow phenomena -- suck air in corners at filter

pleated merv 13 means greater surface area, less resistance, lower average velocity, reduces resistance on fan 

filters as designed are capturing particles on surface of filter -- there's no barrier -- so:
- avoid having someone bump it in case it breaks the seal -- won't have as much air going through filter
- avoid bumps also b/c don't want to dislodge 'dust cake' -- can send viral particles back into room -- resuspension of particles into the air which could be inhaled 

CO2 Monitor notes:  
- analyzing the data isn't as simple as some people think it is
- CO2 levels are a rough indicator -- if really high, you have a problem; if they're really low, that's really good; middle ground is ambiguous. 
- Particle filtration doesn't reduce CO2

Airboxes are imporant when you can't get better ventilation -- i.e. poor mechanical systems or 

36:00 -- The true metric using CO2 is the 'rebreathe fraction' -- how much you're breating other people's breath.  If you have a rebreathe fraction of 5% -- really high, bad.  Rebreathe fraction of .5% is much better.  Rebreathe fraction is: (CO2 concentration in room - CO2 concentration outdoors) / CO2 concentration on typical human breath -- also a function of who is the space -- dynamics are important ... 

Building boxes lowers aerosol particle levels in the classroom

---
2021-08-19 12:54:18

co2 monitor --

feather m4 express, because:
- uf2 bootloader
- battery charging
- m4 chip for circuitpython + airlift

esp32 airlift, because:
- cheaper
- easier to replace w/ ubiquitous chip
- more likely to be avail

add a buzzer

---
2021-09-07 13:28:29

## CO2 sensors useful in schools generally

[https://twitter.com/DavidElfstrom/status/1435290656608501765?s=20](https://twitter.com/DavidElfstrom/status/1435290656608501765?s=20)

---
2021-09-09 20:12:37

Another way to do the ACH experiment -- recess! [https://twitter.com/DavidElfstrom/status/1435986466887372800?s=20](https://twitter.com/DavidElfstrom/status/1435986466887372800?s=20)

---
2021-09-16 08:49:12

![](/img/co2/REV_R_proto.png)

---
2021-09-19 10:02:48

Aranet4 plotter

Example data here: [https://github.com/tverbeiren/co2plot/blob/main/example/toestel1_2021-01-08T17_57_51.csv](https://github.com/tverbeiren/co2plot/blob/main/example/toestel1_2021-01-08T17_57_51.csv)

New github repo here: [https://github.com/edgecollective/aranet4-plotter](https://github.com/edgecollective/aranet4-plotter)

Loading CSV into browser here: [https://stackoverflow.com/questions/22823355/javascript-load-csv-file-and-print-it-to-page](https://stackoverflow.com/questions/22823355/javascript-load-csv-file-and-print-it-to-page)

Convert CSV to json here: [https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript](https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript)

and here: [http://techslides.com/convert-csv-to-json-in-javascript](http://techslides.com/convert-csv-to-json-in-javascript)

---
2021-09-19 14:02:21

![](/img/co2/response_two_covers.png)

![](/img/co2/response_closeup.png)

---
2021-09-20 12:36:06

![](/img/co2/rev_t_proto.png)

[https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/0d36b15741bcd6cc3896b1ab90e52b8515a0bc79/REV_T/hardware/kicad](https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/0d36b15741bcd6cc3896b1ab90e52b8515a0bc79/REV_T/hardware/kicad)

---
2021-09-22 20:28:19

![](/img/co2/rev_t_proto_final_back.png)

![](/img/co2/rev_t_proto_final.png)

![](/img/co2/rev_t_cover.png)

---
2021-10-14 11:52:02

```
screen /dev/tty.usbmodem* 115200
```

One of the boards for which deep sleep is supported: the adafruit nrf express [https://www.adafruit.com/product/4062](https://www.adafruit.com/product/4062)

so maybe: feather s2, or nrf express, might be better choice for python, now ... esp if they can deep-sleep in circuitpython ... the sleep current of the nrf chip in particular is likely quite low ... and then bluetooth might be an option! 

Primary guide to the nrf52840, [here](https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather)

---
2021-10-19 13:31:15

Learn guide for adafruit scd30 module: [https://learn.adafruit.com/adafruit-scd30](https://learn.adafruit.com/adafruit-scd30)

scd30 lib: https://github.com/adafruit/Adafruit_CircuitPython_SCD30

notes: 
- might be nice to move JST a bit to allow for duct tape on sides
- might want to re-expose the reset button 

also! didn't realize -- we can use bluetooth with the esp32 module via circuitpython! can configure over bluetooth ...

getting cpy wifi up and running:

https://github.com/adafruit/Adafruit_CircuitPython_ESP32SPI

read-only issue:
[https://learn.adafruit.com/adafruit-circuit-playground-express/troubleshooting](https://learn.adafruit.com/adafruit-circuit-playground-express/troubleshooting)

oled

[https://learn.adafruit.com/micropython-hardware-ssd1306-oled-display](https://learn.adafruit.com/micropython-hardware-ssd1306-oled-display)

(deprecated? see:)

[https://learn.adafruit.com/adafruit-oled-featherwing/python-circuitpython-wiring](https://learn.adafruit.com/adafruit-oled-featherwing/python-circuitpython-wiring)


example fonts 
[https://github.com/adafruit/Adafruit_CircuitPython_Bitmap_Font/tree/main/examples/fonts](https://github.com/adafruit/Adafruit_CircuitPython_Bitmap_Font/tree/main/examples/fonts)

---
2021-10-19 17:08:39

Basic working version for circuitpy is here: [https://gitlab.com/p-v-o-s/co2/co2-monitor/-/blob/36659313a245c6dbeeff2610fb8ea737f8958a48/REV_T/firmware/co2_cpy_v0/poster_oled.py](https://gitlab.com/p-v-o-s/co2/co2-monitor/-/blob/36659313a245c6dbeeff2610fb8ea737f8958a48/REV_T/firmware/co2_cpy_v0/poster_oled.py)


---
2021-10-27 11:14:49

Belfast ... baseline?

![](/img/co2/belfast_baseline.png)

---
2021-10-28 19:51:18

Dave's co2 analysis repo associated with Belfast PiE experiments: [https://github.com/DaveSprague/co2-analysis](https://github.com/DaveSprague/co2-analysis)

Hasbrouck main office data feed [http://bayou.pvos.org/data/kurqr92abvua](http://bayou.pvos.org/data/kurqr92abvua)

Added '?ambient' param to [https://github.com/edgecollective/aranet4-plotter](https://github.com/edgecollective/aranet4-plotter)

---
2021-10-29 14:50:55

deleting all items from table before a given date:

```
sudo -i -u postgres
psql bayou3
delete from measurements where feed_id=16 and timestamp < '2021-10-28';
```

![](/img/co2/co2_ppm_hasbrouck.png)

---
2021-11-07 10:21:03

upgrading firmware on the wifi module ...

see this issue here:
[https://github.com/adafruit/Adafruit_CircuitPython_ESP32SPI/issues/123](https://github.com/adafruit/Adafruit_CircuitPython_ESP32SPI/issues/123)

which relates to v1.2.2 of the esp32 firmware (which I seem to have).

fix is to upgrade firmware as per:

[https://learn.adafruit.com/upgrading-esp32-firmware/upgrade-an-external-esp32#upload-serial-passthrough-code-for-feather-or-itsybitsy-3055058-4](https://learn.adafruit.com/upgrading-esp32-firmware/upgrade-an-external-esp32#upload-serial-passthrough-code-for-feather-or-itsybitsy-3055058-4)

link to needed uf2 was broken, see better link here:

[https://github.com/adafruit/Adafruit_Learning_System_Guides/tree/main/Adafruit_ESP32_Arduino_Demos/SerialESPPassthrough](https://github.com/adafruit/Adafruit_Learning_System_Guides/tree/main/Adafruit_ESP32_Arduino_Demos/SerialESPPassthrough)


---
2021-11-08 13:48:04

NOTE: looks like the ESP32 labeled pins on the IBM Airlift add-on are swapped around -- need to check schematic

Watchdog implementation for REV_L (only need to modify ESP32 pins for REV_T):

[https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/956dc86badf6ef1f36e176b83c7ba1b82f4dc5ff/REV_L/firmware/CPY/v2](https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/956dc86badf6ef1f36e176b83c7ba1b82f4dc5ff/REV_L/firmware/CPY/v2)

---
2021-11-10 16:08:45

Just pulled out CO2 REV_L test a few minutes ago ...

Going to add calibration code

Following tutorial [here](https://learn.adafruit.com/adafruit-scd30?gclid=Cj0KCQiAsqOMBhDFARIsAFBTN3eeLoluaVmGvJqaC6NMumw3hFXWo92L1jzzbz-9ZtfCTePbVDlEyTAaApX3EALw_wcB)

---
2021-11-10 16:33:50

Checking for watchdog resets -- looks like there was one at 12 PM today:

[http://bayou.pvos.org/data/5wa9caat8kn7?plot_param=aux_1&limit=20000](http://bayou.pvos.org/data/5wa9caat8kn7?plot_param=aux_1&limit=20000)

![](/img/co2/watchdog_reset.png)

Note: the event at around 4 PM was when I manually disconnected and reconnected sensor ...

---
2021-11-10 17:47:29

Trying out CPY version of firmware for logger featherwing on a feather m0 ... wondering if there's enough memory ...

featherwing here: [https://www.adafruit.com/product/2922](https://www.adafruit.com/product/2922)

updated to CPY 7.0

following tutorial here: [https://learn.adafruit.com/adafruit-adalogger-featherwing/circuitpython](https://learn.adafruit.com/adafruit-adalogger-featherwing/circuitpython)

assembling rev_t -- quick review -- is the dc-dc oriented properly?

cui dvx785-500 datasheet: [https://www.cui.com/product/resource/vx78-500.pdf](https://www.cui.com/product/resource/vx78-500.pdf)

![](/img/co2/cui_data_pic.png)

Also for reference -- TRACO power modules w/ same footprint: [https://cdn-shop.adafruit.com/datasheets/tsr1.pdf](https://cdn-shop.adafruit.com/datasheets/tsr1.pdf)

![](/img/co2/traco_power.png)

---
2021-11-11 13:37:53

microsd in circuitpy -- [https://learn.adafruit.com/adafruit-adalogger-featherwing/circuitpython](https://learn.adafruit.com/adafruit-adalogger-featherwing/circuitpython)


Note!  This might be key to having lora and sdcard on the same spi bus -- sd card needs to be initialized first!

![](/img/co2/sdcard_recognized_first.png)

---
2021-11-11 14:00:03

Update: memory allocation failed on M0 

![](/img/co2/memory_fail_m0.png)

---
2021-11-12 16:40:59

In order to log to flash, need to use GPIO pin on board ...
[https://learn.adafruit.com/circuitpython-essentials/circuitpython-storage](https://learn.adafruit.com/circuitpython-essentials/circuitpython-storage)

---
2021-11-12 17:42:38

Update: initial experiment with bluetooth plotting, logging to microsd, logging to flash, on REV_T:

[https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/2ea8089adfd2fc055184a8705f148077478ad24b/REV_T/firmware/CPY/v2](https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/2ea8089adfd2fc055184a8705f148077478ad24b/REV_T/firmware/CPY/v2)

Mostly using the Nordic chip for this; note that it also has an accelerometer, mic, compass, light meter, pressure sensor ... so, e.g.:
- use mic / light meter to correlate with room activity
- use pressure compensation for CO2
- use accel to rotate screen

---
2021-11-17 17:53:25

REV_U ordered.

Commit is here:

[https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/e286b657255531f015475fce3e62600b8b4c85bc/REV_U/hardware](https://gitlab.com/p-v-o-s/co2/co2-monitor/-/tree/e286b657255531f015475fce3e62600b8b4c85bc/REV_U/hardware)

---
2021-11-18 13:50:03

Note: ran out of storage space on NRF Sense, and it 'froze' system -- wasn't able to access historical file, code.py was erased, odd behavior.  Might be safer to log to microsd for this reason.  Or at least: need to show warnings, check remaining space if logging to local flash.

---
2021-12-02 17:15:11

Low power mode for the SCD30 [https://www.mouser.com/pdfdocs/CD_AN_SCD30_Low_Power_Mode_D2.pdf](https://www.mouser.com/pdfdocs/CD_AN_SCD30_Low_Power_Mode_D2.pdf)

Smart citizen ref on co2 sensor [https://docs.smartcitizen.me/Guides/calibration/SCD30%20CO2%20sensor/](https://docs.smartcitizen.me/Guides/calibration/SCD30%20CO2%20sensor/)

Ideas around running CO2 sensor on low power [https://afterhourscoding.wordpress.com/2021/09/](https://afterhourscoding.wordpress.com/2021/09/)

---
2021-12-02 17:28:09

IBM4 diode input selection:

![](/img/co2/diode_selector.png)

Feather M4 diode scenario:

![](/img/co2/featherm4_diode.png)









