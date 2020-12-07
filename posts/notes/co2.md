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

## Table of contents

More or less random bookmarks into the notes file, for reference:

- [Feather Hookup Guide for K30](#feather)
- [Description of remote node + gateway setup](#gatewaysetup).
- [Peng and Jimenez paper on CO2 and COVID infection probability](#jimenez)
- [Rev_A build of Feather-based SCD30 board](#rev_a_build)
- [Thoughts on calibration as of 24 NOV 2020](#calibration)
- [Nov 25 update](#nov25)
- [Initial Microphone Experiment Nov 28](#mic_experiment)
- [Comparing two SCD30 sensors](#compare_scd30)

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











