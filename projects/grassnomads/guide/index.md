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

The guide below covers the following topics:

- [Overview](#overview) -- the background context and motivation for our design
- [Design Process](#collaboration) -- techniques for remote collaboration that we found useful
- [Current Design](#design) -- the current state of the design, with a simplified build guide and link to design files
- [Next Steps](#development) -- current development goals and improvements that we're working on.

| ![](/img/ojofeliz/system_overview.png) |
|:--:|
| 'system_overview.png' |

# <a name="overview"></a> Background 

## Why is remote water monitoring useful?

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

## Why publish this guide?

By publishing the details of our design, we also hope to encourage others to build their own, similar systems, encouraging the development of a larger community of users who might share resources, innovations, and insights with one another.

# <a name="collaboration"></a> Our remote collaboration process

The ranch we are designing for is in New Mexico; the bulk of technical development is being done in Massachusetts.  The entire development process to-date has therefore had to occur remotely.  We have found the following practices useful for ensuring a smooth and productive remote collaboration process:

## Frequent exchange of short videos and photos

This allowed for easy illustration of the field context for which the system is being designs, as well as quick explanations of the developing design and its components.

## Audio message exchanges

Because of differences in timezone and schedule, asynchronous exchange of recorded audio messages allowed for easy, free-form exchange of ideas without having to schedule calls.

## WhatsApp or the equivalent

This has been useful for sending rapid-fire back-and-forth brainstorming and troubleshooting messages to and from the field, as well as providing an easy way to quickly record and store questions and ideas for later reference.

## Google docs or equivalent

For easy shared text editing and information exchange.

# <a name="design"></a> The current design

## System overview and cost summary

The current water monitoring system consists of three main parts:

1. An **ultrasonic water level sensor**, which measures the height of the water level in a tank
2. A open source **transmitter board** which reads the sensor values, and sends them via satellite modem to the internet
3. An open source **online data repository**, which can store, graph, and display the data.

| ![](/img/ojofeliz/tank_combo.jpeg) | 
|:--:|
| 'tank_combo.png' |

The ultrasonic sensor is the [Maxbotix 7850 Tank Sensor](https://maxbotix.com/products/mb7850), which is specially designed to avoid problems with condensation that are common with ultrasonic measurements inside tanks and retails for $180.

The open source transmitter board consists of an open source, custom circuit board, populated with widely-available electronics components.  Building the board requires approximately $550, $300 of which is the cost of the satellite modem.

The data fees for sending satellite data from one transmitter via Ground Control's online service. at a rate of twice per day for a year, are approximately $100.

(cf. Ground Control's [pricing schedule](https://docs.rockblock.rock7.com/docs/iridium-contract-costs)).

The cost of maintaining the online database for a year is about $20 per month, or $240 per year. 

## The ultrasonic sensor

 | ![](/img/ojofeliz/mb7850.png)  | 
|:--:|
| 'mb7850.png' |

The [Maxbotix 7850 Tank Sensor](https://maxbotix.com/products/mb7850) 

## The transmitter board

 | ![](/img/ojofeliz/sp_schem_v0.3.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/sweet-p-v0.3-3d.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/sp_plain.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/sp_annot.png) | 
|:--:|
| '' |

## Satellite modem and service

 | ![](/img/ojofeliz/rockblock.jpg) | 
|:--:|
| '' |

## Online data repository

 | ![](/img/ojofeliz/bayou_overview.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/tank_drop.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/gallons.png) | 
|:--:|
| '' |

## Field applications and testing 

 | ![](/img/ojofeliz/marsh_applied.jpeg) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/twin_closeup.jpeg) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/casias.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/marsh_deploy.jpeg) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/tank_depletion_refill.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/initial_marsh_test.jpeg) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/marsh_mineral.jpeg) | 
|:--:|
| '' |

 | ![](/img/twintowers.jpeg) | 
|:--:|
| '' |

# <a name="development"></a> Next Steps in Development

## Dealing with condensation issues

 | ![](/img/ojofeliz/max7092.jpg) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/ojo_freeze.png) | 
|:--:|
| '' |

 | ![](/img/ojofeliz/sensor_freeze_2.jpeg) | 
|:--:|
| '' |


