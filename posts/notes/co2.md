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

[Feather Hookup Guide for K30](#feather)

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


