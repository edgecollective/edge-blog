---
pageTitle: DIY CO2 Monitoring
layout: layout.njk
date: 2020-09-29
updated: 2020-10-23
tags: notes 
image: /img/co2/rev_a_proto.jpeg
blurb: Notes on inexpensive CO2 monitoring options
---

## Background

The following is a development notebook for constructing a DIY CO2 monitor.  

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








