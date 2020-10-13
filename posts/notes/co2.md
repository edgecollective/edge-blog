---
pageTitle: DIY CO2 Monitoring
layout: layout.njk
date: 2020-09-29
updated: 2020-09-29
tags: notes 
image: img/placeholder.png
blurb: Notes on inexpensive CO2 monitoring options
---

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

## Z19 CO2 Sensor

For sale on [Banggood](
https://usa.banggood.com/MH-Z19-MH-Z19B-Infrared-CO2-Sensor-Module-Carbon-Dioxide-Gas-Sensor-for-CO2-Monitor-0-5000ppm-MH-Z19B-NDIR-with-Pin-p-1693604.html) for $20.

Goal as of 13 OCT 2020: get this up and running in parallel to the K30 and see how they compare with the 'ambient' test.

