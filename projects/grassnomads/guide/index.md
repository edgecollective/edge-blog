---
pageTitle: Building a Remote Water Monitoring System for Large Ranches
layout: layout.njk
date: 2023-09-05
updated: Last Modified 
image: /img/ojofeliz/twintowers.jpeg
blurb: Designing and building a remote monitoring system for water storage tanks on a large ranch.
---

## An open-source, satellite-based water tank monitoring system

This guide describes the construction and use of an open-source, modular system for remotely monitoring the water level in water storage tanks on a large ranch.  Water level data is collected from on-site ultrasonic sensors, and posted to the internet via a satellite modem. Use of a satellite modem means that no cellular or wifi network local to the water tank is required – the data can be collected from anywhere with a clear view of the sky. The water level data is then stored in an open source online database, and made available (as graphs, or as a data summary page) to ranch managers on their computer or smartphone.

## Who is this guide for? How might they use it?

We believe that this system design will be useful for ranchers and land managers who need to keep tabs on water storage distributed across a large landscape.  Daily reports on water level can help to better manage limited water resources, and to catch problems (leaks, blockages, or insufficient water for livestock) early, minimizing their impact.  Automating this reporting avoids the need for frequent in-person trips to remote water storage locations, saving significant personnel time and avoiding unnecessary wear-and-tear on ranch vehicles.

The hardware has been designed so that interested people with a minimal background in electronics can, with little additional training, build their own version of this system.  We believe that the electronics experience acquired in this process can be a useful additions to the rancher's skill set, and might prompt local development of further innovative tools. 

Alternatively, we imagine that interested ranchers who find these tools useful, but don't have the time or interest to build the devices themselves, might support the development of local 'tech cooperatives' which could be responsible for building, deploying, and maintaining such devices.  Such organizations could help customize the system for local needs, as well as teach relevant skills for the modification and maintenance of such systems.

## How this guide is structured

The guide below covers the following topics:

- [Background](#overview) -- the background context and motivation for our design
- [System Design](#design) -- the various components of the design, with links to design files and code. 
- [Field Tests](#field) -- how the device has performed in the field for us so far, with planned modifications. 
- [Remote collaboration](#collaboration) -- techniques for remote collaboration that we have found to be useful

---

# <a name="overview"></a> Background 

## Why is remote water monitoring important?

Water for livestock on ranches is often stored in tanks distributed throughout the landscape, and managing this water is a critical task for ranch managers.  Not only is water access crucial for livestock health;  but water leaks and blockages, if not caught immediately, can result in sudden and significant loss of an already-scarce resource.  

The current practice of keeping tabs on water levels in tanks by visiting each of them in-person, however, involves extensive personnel time, as well as wear-and-tear on ranch vehicles.  

## Why use a satellite, and not ground-based long-range radio?

For monitoring remote areas with spotty cellular coverage and no access to local internet, two options are available:  ground-based, and satellite-based -- each with their pros and cons.

A **ground-based** radio solution would collect data from the remote site, and relay it via a series of line-of-sight 'hops' between ground radios, ultimately reaching an internet-connected radio, which would then send the data to an online database.  The advantages of such a system include:
-  once set up, the ground-based system involves no recurring 'data service fees' for ongoing use; and
- the entire system is easily accessible to the user for modification, repair, or improvement.

The disadvantage of a ground-based system, however, is that it involves significant work and on-the-ground expertise to set up:  for varied terrain, line-of-sight 'hops' may require a laborious assessment and installation process.  For particularly hilly terrain, the infrastructure required to successfully relay a radio signal may become prohibitively complex.

In contrast, a *satellite-based** solution sends data from the remote site to a satellite in orbit; it can thus work from anywhere on the surface of the planet.  Once the system has been proven to work at any location, it should work equally at any other location.

Because of the ease of installation of the satellite system, we decided that it would be a useful and simpler place to begin; later, we still intend to experiment with a ground-based system.

## Why not just use an existing commercial solution?

While some commercial systems for automated water monitoring exist, they are predominantly internet- or cellular-based systems, involving infrastructure that is often not available at remote water tank locations.

Commercial solutions also typically require committing to expensive contracts, and result in a dependency on an external company’s proprietary system.  There are many examples of installed systems which are subsequently ‘orphaned’, and no longer work when the company that produced them goes out of business or changes its business focus.

Designing our own water monitoring allows us to customize its features and minimize its costs, resulting in a modular system that has exactly and only the features we require – rather than needing to settle for whatever particular features are available in ‘off-the-shelf’ systems.  It also means that our system is easy to repair, modify, and improve over time, unlike typical proprietary ‘closed’ systems.  And we can be flexible around how and where the data is collected and stored.

---

# <a name="design"></a> System Design

## How the system is structured? How much does it cost?

| ![](/img/ojofeliz/system_overview.png) |
|:--:|
| 'system_overview.png' |

The current water monitoring system consists of three main parts:

1. An **ultrasonic water level sensor**, which measures the height of the water level in a tank. Cost:  $110 (uncovered tank) or $180 (covered tank, avoids condensation issues).
2. A **transmitter board** which reads the sensor values, and sends them via satellite modem to the internet.  Cost:  $550 ($300 of which is the satellite modem).  Sending data from the transmitter twice daily costs about $26 per month in data fees.
3. An **online data repository**, which can store, graph, and display the data.  Typical costs for hosting this service online amount to about $20 per month.

In terms of costs, then:

- Each water tank monitoring setup requires **$660 to $750** in hardware, and about **$26** per month in satellite data fees
- The online data service (useful for storing data from any number of water tank monitors) is about **$20 per month**.


A more detailed description of each of these system components can be found below.

## The ultrasonic sensor

An ultrasonic water level sensor works by sending sound energy down at the water from above, and measuring the time required for the sound signal to return to the sensor after bouncing off the water.

We have field tested the [Maxbotix 7389](https://maxbotix.com/products/mb7389) ($110) ultrasonic sensor inside a covered tank. After experiencing what we believe were condensation issues, we now believe that this sensor is more appropriate for uncovered tanks.

| ![](/img/ojofeliz/mb7389.png) | 
|:--:|
| 'mb7389.png' |

An more expensive ultrasonic sensor which is designed specifically to avoid problems with condensation inside tanks is the [Maxbotix 7850 Tank Sensor](https://maxbotix.com/products/mb7850), which retails for $180.  We are planning on testing this in an enclosed tank soon.

 | ![](/img/ojofeliz/mb7850.png)  | 
|:--:|
| 'mb7850.png' |

The ultrasonic sensor is connected to the transmitter via three wires, and communicates via a simple serial protocol.

| ![](/img/ojofeliz/tank_combo.jpeg) | 
|:--:|
| 'tank_combo.png' |

## The transmitter board

The open source transmitter board consists of an open source, custom circuit board, populated with widely-available electronics components.  Building the board requires approximately $550, $300 of which is the cost of the satellite modem.

The design files for version 0.3 of the board [are available online](https://github.com/edgecollective/sweet-p), as well as the [version 2.0 of the firmware](https://github.com/edgecollective/sweet-p/tree/main/ver_0.3/firmware/grassnomads/v2.0).

The transmitter board is assembled using simple 'through-hole' soldering techniques by adding a short list of components to the board, including:

- A RockBlock satellite modem ("Satellite Modem" in diagram)
- an Adafruit Feather ("Microcontroller")
- an Adafruit ADC breakout board ("ADC")
- an Adafruit Solar Li-on charger breakout ("Solar Battery Charger")
- a microSD card holder ("uSD")
- an Adafruit TPL5110 timer board ("Timer")
- an optional RFM95 LoRa transceiver and antenna ("LoRa" and "LoRa antenna")

After our design is finalized after further testing, we plan to write and record detailed instructions and videos for building the programming the board.

 | ![](/img/ojofeliz/sp_schem_v0.3.png) | 
|:--:|
| 'sp_schem_v0.3.png' |

 | ![](/img/ojofeliz/sweet-p-v0.3-3d.png) | 
|:--:|
| 'sweet-p-v0.3-3d.png' |

 | ![](/img/ojofeliz/sp_plain.png) | 
|:--:|
| 'sp_plain.png' |

 | ![](/img/ojofeliz/sp_labeled_2.png) | 
|:--:|
| 'sp_labeled_2.png' |

## The satellite modem and service

The [RockBlock Mk2 9602 satellite modem](https://www.groundcontrol.com/us/product/rockblock-9602-mk2/) we are using is provided by [Ground Control](https://docs.rockblock.rock7.com/docs) and [retails for $274](https://www.sparkfun.com/products/13745). 

| ![](/img/ojofeliz/rockblock.jpg) | 
|:--:|
| 'rockblock.jpg' |

The data fees for sending satellite data from one transmitter via Ground Control's online service. at a rate of twice per day for a year, are approximately $100 for the year, using Ground Control's [pricing schedule](https://docs.rockblock.rock7.com/docs/iridium-contract-costs)) for purchasing 500 credits at a time. 

In addition, a base monthly fee of $17 is required for each satellite modem 'line'.

 | ![](/img/ojofeliz/iridium_contract_costs.png) | 
|:--:|
| 'iridium_contract_costs.png' via [https://docs.rockblock.rock7.com/docs/iridium-contract-costs](https://docs.rockblock.rock7.com/docs/iridium-contract-costs) |

In sum, this means about $26 per month in data fees per transmitter box equipped with satellite modem.

## The online data repository

The online data repository we are using is called 'Bayou', and is a custom-built, open source server + database system based on Node.js and a PostgresSQL database.  It can be installed on a standard hosting service, and is designed to be simple for users to set up, as well as being an easy endpoint to which to send IoT device data (like our satellite modem system).

The source code and installation instructions for Bayou are open source and located in a [gitlab repository](https://gitlab.com/p-v-o-s/agroeco/bayou).

The user who wants to set up a new data field simply navigates to [bayou.pvos.org](http://bayou.pvos.org), where they will be presented with a button allowing them to create a new feed:

| ![](/img/ojofeliz/welcome_bayou.png) |
|:--:|
| 'welcome_bayou.png' |

After creating a feed, they are presented with a 'public key' and a 'private key':

| ![](/img/ojofeliz/feed_created.png) |
|:--:|
| 'feed_created.png' |

The public key is used to access the data online; both the public and private key are required in order to post data, and are programmed into the field devices.

Posted data is automatically graphed, and historical data can be downloaded as CSV or JSON:

 | ![](/img/ojofeliz/bayou_overview.png) | 
|:--:|
| 'bayou_overview.png' |

For our application, we also created a custom page with summary statistics for a particular water tank:

 | ![](/img/ojofeliz/gallons.png) | 
|:--:|
| 'gallons.png' |

## The satellite-server relay

The Ground Control satellite data system which receives data from the satellite modem allows for one or more 'http endpoints' to be configured to receive the satellite data as an 'HTTP POST'.  We have chosen to set up a 'relay server' to serve as this satellite endpoint and relay it to our Bayou server.  Separating out the 'relay' component of the system this way allows developers to use the relay separately and send their satellite data to non-Bayou endpoints if desired.

The source code for the relay server is located [in a github repository](https://github.com/edgecollective/iridium-bayou-relay).


---

# <a name="field"></a> Field tests

We have built and tested an initial version of the water level monitoring system at an enclosed water storage tank on a ranch in New Mexico.
| [![](/img/ojofeliz/marsh_well.png)](/img/ojofeliz/marsh_well.png) |
|:--:|
| The 'Marsh Well' water storage tank on Ojo Feliz Ranch.|

The system is solar-powered, and the transmitter and solar panel are placed on top of the tank enclosure. For our initial field tests, we used the [Maxbotix 7389](https://maxbotix.com/products/mb7389) ultrasonic sensor.

Initial experiments were performed on-site to validate that the sensor was reading the distance to the water level correctly.

 | ![](/img/ojofeliz/initial_marsh_test.jpeg) | 
|:--:|
| 'initial_marsh_test.jpeg' |

## Sensor placement on tank

Several configurations of sensor placement were tried;  the sensor was ultimately attached to the tank cover and oriented downwards, pointing down at the water level below.

| ![](/img/ojofeliz/marsh_deploy.jpeg) | 
|:--:|
| 'marsh_deploy.jpeg' |

| ![](/img/ojofeliz/marsh_mineral.jpeg) | 
|:--:|
| 'marsh_mineral.jpeg' |

 | ![](/img/ojofeliz/marsh_applied.jpeg) | 
|:--:|
| 'marsh_applied.jpeg' |

## Initial data collection 

We have successfully monitored several cycles of tank filling and depletion using the system.  

 | ![](/img/ojofeliz/tank_depletion_refill.png) | 
|:--:|
| 'tank_depletion_refill.png' |

 ## Data glitch -- condensation?

It was noticed that during certain periods, erratic and non-physical sensor readings were being sent.

 | ![](/img/ojofeliz/ojo_freeze.png) | 
|:--:|
| 'ojo_freeze.png' |

 | ![](/img/ojofeliz/sensor_freeze_2.jpeg) | 
|:--:|
| 'sensor_freeze_2.jpeg' |

After wiping off the surface of the sensor, readings returned to normal;  the same phenomenon occurred several days later.

We believe that this data 'glitch' was caused by condensation on the surface of the sensor -- a well-known problem for ultrasonic sensors located inside enclosed tanks.  

We're therefore going to be upgrading the in-tank sensor to the [Maxbotix 7850 Tank Sensor](https://maxbotix.com/products/mb7850), which is configured to avoid issues with condensation.

## Next steps

In addition to upgrading the sensor to the [Maxbotix 7850](https://maxbotix.com/products/mb7850) for the enclosed tank, we have also developed two additional features for the system in the latest firmware and hardware:

First, we've decided to transmit information twice daily at schedule times -- 5AM and 1PM -- in order to more accurately assess 'livestock drinking pressure' on the water storage tank on a daily basis.

Adding this feature required the addition of a "Real Time Clock" to the system -- a circuit which maintains a local, coin-battery-powered 'clock'.

Second, we've decided to measure and send temperature readings -- as a way of indirectly assessing the likelihood of condensation -- in addition to the water level and battery level readings.  This temperature reading comes from the RTC, which has a built-in temperature sensor intended to account for temperature-induced shifts to the RTC crystal-based timekeeping circuit.  Note: this temperature is in fact the temperature inside the transmitter box, and not inside the tank;  we may need to add an additional temperature sensor probe, to be stuck inside the tank, for more accurate readings.

## Additional locations

Our next planned location involves an uncovered tank.  We believe that this can be accomplished with a lower-cost version of the ultrasonic sensor intended for outdoor use, the [Maxbotix 7389](https://maxbotix.com/products/mb7389), by placing the sensor on an 'arm' located above the water. Our main concern with this setup is the degree to which high winds might impact the ultrasonic sensor readings; we have contacted the sensor manufacturer for their input on this. 

| ![](/img/ojofeliz/twin_towers_span.jpeg) |
|:--:|
| 'twin_towers_span.jpeg' |

 | ![](/img/twintowers.jpeg) | 
|:--:|
| 'twintowers.jpeg' |

| ![](/img/ojofeliz/twin_closeup.jpeg) | 
|:--:|
| 'twin_closeup.jpeg' |

The final intended water tank measurement will be another enclosed tank:

 | ![](/img/ojofeliz/casias.png) | 
|:--:|
| 'casias.png' |

--- 

# <a name="collaboration"></a> Notes on our remote collaboration process

The ranch we are designing for is in New Mexico; the bulk of technical development is being done in Massachusetts.  The entire development process to-date has therefore had to occur remotely.  We have found the following practices useful for ensuring a smooth and productive remote collaboration process:

## Frequent exchange of short videos and photos

This allowed for easy illustration of the field context for which the system is being designs, as well as quick explanations of the developing design and its components.

## Audio message exchanges

Because of differences in timezone and schedule, asynchronous exchange of recorded audio messages allowed for easy, free-form exchange of ideas without having to schedule calls.

## WhatsApp or the equivalent

This has been useful for sending rapid-fire back-and-forth brainstorming and troubleshooting messages to and from the field, as well as providing an easy way to quickly record and store questions and ideas for later reference.

## Google docs or equivalent

For easy shared text editing and information exchange.

