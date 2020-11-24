---
pageTitle: DIY CO2 Monitoring
layout: layout.njk
date: 2020-09-29
updated: 2020-10-23
tags: notes 
image: img/placeholder.png
blurb: Notes on inexpensive CO2 monitoring options
---

## TODO

14 OCT 2020
- set up / test heltec gateway again to send to FarmOS [X]
- also send to custom server on DO;
- get Z19 up and running [X]
- turn off autocalibration on the Z19 []
- turn off autocalibration on the K30 []

## Table of contents

- [Feather Hookup Guide for K30](#feather)
- [Peng and Jimenez paper on CO2 and COVID infection probability](#jimenez)
- [Rev_A build of Feather-based SCD30 board](#rev_a_build)

## Background

Below is a development notebook for constructing a DIY CO2 monitor.  

Click [here](#gatewaysetup) to jump to the latest remote CO2 node + gateway setup.

## CO2METER.COM K30

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

## Ongoing work / research

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

## Ongoing Work Log

As Of 15 OCT 2020 10:42 AM -- K30 is autocalibrating, Z19 is not. 

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

### <a name="rev_a_build"></a>Carbon Dioxide Board Rev_A

Sparkfun SCD30 i2c library is [here](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library).

First version with display, lora, screen, scd30 is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_a/firmware/feather_m0_scd30_batt_lora_display).

![](/img/co2/rev_a_proto.jpeg)

Associated gateway code is [here](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_a/firmware/gateway/heltec_wifi_lora_bayou_farmos).

Online data is currently posting [here](http://159.65.226.222:3000/drives/112a7b2a9d08f492a6736aba33de90c519b7966158f6a2682f9db5eb122c51de).

![](/img/co2/rev_a_data.png)

Quick impression -- seems like we're going to want to average readings over a minute or or more to get some stable value when the CO2 is low -- it fluctuates a lot.  Though, that could've been the wind, too.  Might need to suggest that people get out of wind if they calibrate outside.  Or, to tell folks to wait til the reading stabilizes before hitting calibrate.  Or even have this happen automatically.

### TODO

- Add watchdog to remote node and to gateway
- Add calibration procedure
- switch to set measurement interval?
- dip switch to set node ID

---

2020 NOV 24

Went to bed NOV 23 at around 10:30 PM; woke up and started using computer right next to CO2 sensor at 4:30 AM. Generated this graph as of 4:30 AM:

![](/img/co2/co2_nov23_night.png)

**Comment**. Note the correlation between temperature and CO2.  The temperature pattern likely due to the HVAC system.  Unless the HVAC is in fact bringing in air with higher concentration of CO2, this indicates the range of fluctuation in CO2 reading due to temperature.  Do we expect CO2 to rise with temperature for this NDIR sensor type?






