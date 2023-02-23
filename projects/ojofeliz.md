---
pageTitle: Water Storage Monitoring in New Mexico 
layout: layout.njk
date: 2023-02-22
tags: projects
updated: 2023-02-22
image: /img/ojofeliz/twintowers.jpeg
blurb: Developing an open source, satellite modem-based water level monitoring system with Grass Nomads LLC.  
---

# Background

[![](/img/ojofeliz/ofr7.jpeg)](/img/ojofeliz/ofr7.jpeg)

[Grass Nomads, LLC](https://www.grassnomads.com/) leases a 120,000 acre high elevation ranch in New Mexico, where they run a cow-calf operation with an extensive water system. Several key storage tanks in their system are the first indication of a leak or failure, and driving to them takes hours. Remote water monitoring would save them time, vehicle wear, and water.

<!--
| [![](/img/ojofeliz/ofr_map.png)](/img/ojofeliz/ofr_map.png) |
|:--:|
|**Fig 1.** The Ojo Felix ranch, a 200 square mile lease, shwoing the location of the three key water storage tanks to be monitored -- 'Twin Towers', 'Casias', and 'Marsh Wells'. Not shown are planned pipelines to be installed in 2023.   |
-->

In particular, there is an interest in collecting ongoing water level data from three key water storage tanks on the ranch is of particular interest: 'Twin Towers' (Fig. 1), 'Casias' (Fig 2), and 'Marsh Wells'.  

| [![](/img/ojofeliz/twintowers.jpeg)](/img/ojofeliz/twintowers.jpeg) |
|:--:|
|**Fig 1.** The 'Twin Towers' water storage tank on Ojo Feliz Ranch, one of the tanks to be monitored.|

| [![](/img/ojofeliz/casias.png)](/img/ojofeliz/casias.png) |
|:--:|
|**Fig 2.** The 'Casias' water storage tank on Ojo Feliz Ranch, another of the tanks to be monitored.|

# Planned monitoring strategy

Because of the remote location of the water storage tanks and uncertain cellular coverage, we have decided to develop a satellite modem-based monitoring system.  Currently, we are unsure as to whether the satellite modem (and accompanying solar panel) would best be situated directly on top / next to the storage tank, or whether a location 100+ feet away might better optimize solar energy and minimize obstacles to satellite coverage. 

| [![](/img/ojofeliz/system_overview.png)](/img/ojofeliz/system_overview.png) |
|:--:|
|**Fig 3.** The overall approach to monitoring the water storage tanks. |

We are therefore designing the system to include a 'low-power, remote radio (LoRa) depth sensor node', which will be situated on the tank, and relay its data to a 'LoRa-satellite-modem gateway' somewhere within radio range (Fig 3). 

The satellite modem will then send water level data to an online database, allowing Grass Nomads LLC to access up-to-date water level over the internet or on their phones, anywhere they have access to internet or cellular service. 

# Core hardware components for the design

Except for the custom PCBs we will be designing, nearly every component of the system consists of off-the-shelf hardware, including the satellite modem (Fig 4), ultrasonic water sensor (Fig 5), and microcontroller + LoRa radio (Fig 6).

We've evaluated the [satellite modem data plan pricing](https://docs.rockblock.rock7.com/docs/iridium-contract-costs), and believe that if we send one water level update per day from each storage tank (with a message containing measurements at 4 hour intervals for the previous 24 hours), the associated cost of the satellite data service will be the same as or less than a comporable cellular data plan.  

<!--
| [![](/img/ojofeliz/ultrasonic_housing.jpg)](/img/ojofeliz/ultrasonic_housing.jpg) |
|:--:|
|**Fig 7.** Close-up of the housing for the ultrasonic water level sensor. |

-->

| [![](/img/ojofeliz/rockblock.jpg)](/img/ojofeliz/rockblock.jpg) |
|:--:|
|**Fig 4.** The [Rockblock 9602 Satellite Modem](https://www.sparkfun.com/products/13745), available e.g. from Sparkfun for $300 USD |

| [![](/img/ojofeliz/max7092.jpg)](/img/ojofeliz/max7092.jpg) |
|:--:|
|**Fig 5.** The [Maxbotix MB7092](https://www.adafruit.com/product/1137), available e.g. from Adafruit for $100 |

| [![](/img/ojofeliz/feather_m0.jpg)](/img/ojofeliz/feather_m0.jpg) |
|:--:|
|**Fig 6.** The [Feather M0 LoRa microcontroller](https://www.adafruit.com/product/3178), available e.g. from Adafruit for $35 |

| [![](/img/ojofeliz/adafruit_solar.jpg)](/img/ojofeliz/adafruit_solar.jpg) |
|:--:|
|**Fig 6.** Image from Adafruit LLC depicting the [solar charging circuit](https://www.adafruit.com/product/4755) ($15), we'll be using in our design, as well as a similar [solar panel](https://www.adafruit.com/product/2747) ($80), and [6600 mAh lithium ion battery](https://www.adafruit.com/product/353) ($25) to those we intend to deploy at Ojo Feliz. |

We'll be designing a simple, easy-to-solder through-hole PCB (printed circuit board) to integrate these components and allows them to be easily mounted inside a weatherproof enclosure, and connected to a solar panel, battery, and associated solar charging circuitry.

# Prior work

At Edge Collective we have previously developed and worked with most of the non-satellite components of this system, collecting data from a solar-powered ultrasonic water level sensor (Fig 7) via local LoRa radio connection to a LoRa-wifi gateway, and sending it periodically to an online database (Fig 8).  

| [![](/img/ojofeliz/chappy_proto.png)](/img/ojofeliz/chappy_proto.png) |
|:--:|
|**Fig 7.** A previous, LoRa-based ultrasonic water level sensor prototype built by Edge Collective. |

| [![](/img/ojofeliz/sonar_data.png)](/img/ojofeliz/sonar_data.png) |
|:--:|
|**Fig 8.** Data from an initial deployment of a LoRa-based ultrasonic sensor |

Another example of a version of the (open source) online database system we'd previously developed (in this case, used for chicken coop temperatures) is [here](http://bayou.pvos.org/data/834ksnvaq3hn?plot_param=temperature_c).

Edge Collective had also previously developed an [open source LoRa radio + satellite modem gateway] in a previous design (see Figs 9 and 10), which was designed to relay data from field sensor relay nodes in a very similar manner to the planned system for this project. 

| [![](/img/ojofeliz/quahog_schem.png)](/img/ojofeliz/quahog_schem.pdf) |
|:--:|
|**Fig 9.** Schematic for the 'Quahog', a wifi + LoRa + satellite gateway design by Edge Collective, which shares many features with the planned gateway for the Ojo Feliz project.  The precise microcontroller may differ, but is also likely to be wifi-enabled. |

| [![](/img/ojofeliz/quahog_plugged.jpeg)](/img/ojofeliz/quahog_plugged.jpeg) |
|:--:|
|**Fig 10.** Previous Edge Collective gateway design, the 'Quahog', which incorporates satellite modem (left), as well LoRa radio and wifi-enabled microcontroller (right).  |

Edge Collective had also designed a low-power, battery-powered LoRa relay node (Figs 11 and 12) and antenna inside an off-the-shelf weatherproof enclosure for a previous project involving an Acclima soil moisture sensor.  The design of that relay node has significant overlap with the relay node we intend to design for the ultrasonic relay node.

| [![](/img/ojofeliz/acclima.JPG)](/img/ojofeliz/acclima.JPG) |
|:--:|
|**Fig 11.** A previous Edge Collective sensor LoRa relay design (right); in this case, for capturing data from an Acclima soil moisture sensor (left) and relaying data via LoRa to a LoRa-wifi gateway. |

| [![](/img/ojofeliz/relay_node.png)](/img/ojofeliz/relay_node.png) |
|:--:|
|**Fig 12.** Closeup of the Edge Collective LoRa relay node, showing the custom circuitboard, indicator LEDs, screw terminal connectors, and Feather LoRa microcontroller daughterboard.  |

Several Edge Collective projects have been deployed in the field for long-term, low-power monitoring projects using solar panels and off-the-shelf weatherproof enclosures -- including standard 'electrical conduit boxes' from Home Depot (Fig 13).

| [![](/img/ojofeliz/gateway_node.png)](/img/ojofeliz/gateway_node.png) |
|:--:|
|**Fig 13.** Enclosure setup for a previous Edge Collective field-based gateway project, demonstrating the use of weatherproof pass-throughs and solar panels on an off-the-shelf Home Depot electrical conduit box.  |


# Current status 

We currently have a working breadboard prototype (Fig 14) of a satellite modem + ultrasonic water level device, which is posting its data to an online database.  Next steps include designing and producing a batch of integrative PCBs for these devices, optimizing the firmware for power, and adding in the 'LoRa relay' node circuitry if necessary.

| [![](/img/ojofeliz/breadboard.jpeg)](/img/ojofeliz/breadboard.jpeg) |
|:--:|
|**Fig 14.** Breadboard prototype demonstrating integrated functionality of ultrasonic sensor, microcontroller, and satellite modem functionality. |

# More images of Ojo Feliz Ranch

[![](/img/ojofeliz/ofr1.jpeg)](/img/ojofeliz/ofr1.jpeg)

[![](/img/ojofeliz/ofr3.jpeg)](/img/ojofeliz/ofr3.jpeg)

[![](/img/ojofeliz/ofr4.jpeg)](/img/ojofeliz/ofr4.jpeg)

[![](/img/ojofeliz/ofr5.jpeg)](/img/ojofeliz/ofr5.jpeg)

[![](/img/ojofeliz/ofr6.jpeg)](/img/ojofeliz/ofr6.jpeg)

[![](/img/ojofeliz/ofr2.jpeg)](/img/ojofeliz/ofr2.jpeg)

[![](/img/ojofeliz/horseback.jpeg)](/img/ojofeliz/horseback.jpeg)