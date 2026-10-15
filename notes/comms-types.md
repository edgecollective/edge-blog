---
pageTitle: A map of sensor communications
layout: layout.njk
date: Last Modified
updated: 2026-10-15
tags: notes
image: /img/comms/sensor-matrix.png
blurb: Every way we know of to get data out of a sensor, from RS-485 to meteor burst — and the constraint that's easy to forget, the expertise it takes to keep it running.
---

[![Remote sensor links: expertise, durability, ownership, and reach](/img/comms/sensor-matrix.png)](/img/comms/sensor-matrix.png)

When we build a sensor (a water-level monitor, a greenhouse logger, an air-quality box), the measurement is often the easy part. The hard part is **getting the data somewhere useful**. This note is a broad map of the options, grouped by how the data physically travels, followed by the trade-offs we weigh when choosing.

## The trade-off space

Every option below is a compromise among:

- **range**
- **data rate**
- **power draw**
- **recurring cost** (airtime or subscriptions)
- **infrastructure you have to build**
- **latency**
- **licensing**
- **the expertise it demands** from whoever keeps it running. This one is easy to leave off the list; see [the hidden constraint](#hidden-constraint) below.

In practice, many real deployments are **hybrids**: a short-range or wired link carries data to a local gateway, and the gateway uses cellular, satellite, or a mesh for backhaul.

## The full map

### Wired (sensor to logger or gateway)
- **RS-232 / RS-485**, often running **Modbus RTU**: RS-485 is the industrial standard for long runs, up to about 1 km.
- **SDI-12**: the standard bus for environmental and hydrology sensors (soil moisture, water level, weather).
- **4–20 mA current loop**: analog, very noise-tolerant, and common on industrial transducers.
- **1-Wire, I²C, SPI**: short-distance board and bus protocols. 1-Wire can stretch to tens of meters.
- **CAN bus**: robust multi-drop bus used in vehicles and ag equipment.
- **Ethernet / PoE**: carries data and power on one cable, up to about 100 m per segment.
- **Wired M-Bus**: used for utility meters.
- **Powerline communication**: HomePlug, G3-PLC, and PRIME send data over the AC wiring you already have.
- **Phone line / dial-up or DSL modem**: legacy, but still found at remote stations.
- **Fiber**: immune to lightning and EMI, which matters for long runs between buildings.

### Short-range wireless (meters to around 100 m)
- **Bluetooth Low Energy**, including advertising-only "beacon" mode that needs no connection. **Bluetooth Classic** is the older, higher-power version.
- **Wi-Fi (2.4/5 GHz)**: high bandwidth but power-hungry.
- **Wi-Fi HaLow (802.11ah)**: sub-GHz Wi-Fi with roughly 1 km range and low power.
- **ESP-NOW**: Espressif's connectionless peer-to-peer protocol. It's very low-latency and works without a router.
- **Zigbee, Thread/Matter, Z-Wave**: low-power mesh networks from home automation.
- **ANT / ANT+**: used in fitness and sports sensors.
- **EnOcean**: energy-harvesting, batteryless switches and sensors.
- **NFC / RFID**: tap-to-read, including passive sensor tags.
- **UWB**: mainly for ranging and location, with some data capability.
- **Infrared / IrDA**: line of sight. Utility meters still use optical IR ports.
- **Simple ISM-band radios**: 433/868/915 MHz modules (RFM69, CC1101) and 2.4 GHz nRF24. You write your own protocol.

### LPWAN and long-range sub-GHz (kilometers, low data rate)
- **Raw LoRa**: point-to-point, your own protocol.
- **LoRaWAN**: star topology through gateways. You can run a private network or use The Things Network or Helium.
- **Meshtastic / MeshCore**: LoRa mesh with multi-hop relays. Our water-level sensors use MeshCore.
- **Sigfox**, now operated by UnaBiz: ultra-narrowband with tiny payloads.
- **mioty, DASH7, Weightless**: niche LPWAN standards.
- **Wi-SUN**: mesh used for utility smart grids.
- **Wireless M-Bus**: European metering standard.
- **Amazon Sidewalk**: piggybacks on Echo and Ring devices as gateways.

### Cellular
- **LTE-M (Cat-M1)**: low power, supports mobility and voice. It's a good default for IoT in the US.
- **NB-IoT**: even lower power, tiny payloads, and spottier US coverage.
- **LTE Cat-1 / Cat-1bis**: more bandwidth, for things like images.
- **5G RedCap**: the newer mid-tier option.
- **2G/3G**: shut down in the US, so avoid it.
- **SMS**: still a dead-simple transport on most modems.
- **NTN (non-terrestrial network)**: cellular modems that fall back to satellite, such as Skylo.

### Satellite
- **Iridium SBD / Certus**: truly global, including the poles, with short bursts and pricey airtime.
- **Globalstar**: simplex transmit-only units like SmartOne, plus duplex options.
- **ORBCOMM, Viasat/Inmarsat**: established commercial M2M providers.
- **Myriota, Astrocast, Kinéis**: low-cost, low-data IoT constellations. Kinéis also runs the Argos system used for wildlife tracking.
- **LoRa-to-satellite**: EchoStar Lyra, Lacuna, and similar.
- **Starlink**: a full broadband terminal, and power-hungry. Its direct-to-cell service is emerging.
- **GOES DCS**: a free US government channel for environmental and hydrology data. It needs agency sponsorship.
- **Swarm**: wound down after SpaceX acquired it. Check its status before designing around it.

### Licensed, amateur, and other terrestrial radio
- **APRS**: VHF packet radio that carries telemetry frames. There is a big network of igates and digipeaters.
- **AX.25 packet, VARA, Winlink**: ham data modes.
- **JS8Call, FT8, WSPR**: HF weak-signal modes. WSPR is used for telemetry from high-altitude balloons.
- **MURS**: license-free VHF around 151–154 MHz, and data is permitted.
- **Licensed VHF/UHF data radios (Part 90)**: SCADA-style links.
- **Meteor burst**: bounces signals off meteor trails. NRCS SNOTEL stations used it for decades.
- **Point-to-point microwave**: Ubiquiti, Mikrotik, and similar, for backhauling a remote site.
- **TV white space**: unused TV-band spectrum for rural links.
- **HF NVIS**: near-vertical skywave for regional coverage without line of sight.

On the ham bands, remember that **encryption and commercial use are prohibited**.

### Optical, acoustic, and unusual
- **Free-space optical / laser links**: line of sight, high bandwidth.
- **Li-Fi / visible light**: data carried on modulated LED light.
- **Acoustic modems**: the standard for underwater sensors.
- **Through-earth / VLF / magnetic induction**: used in mines, caves, and buried sensors.
- **Audio or ultrasonic tones**: data over sound, sometimes picked up by a phone microphone.

### Store-and-forward and "data mule"
- **Manual retrieval**: swap an SD card or download over USB.
- **Phone or tablet passing nearby**: BLE or NFC sync whenever someone visits.
- **Drone or vehicle collection**: a data mule flies or drives past and pulls data over Wi-Fi, BLE, or LoRa.
- **Delay-tolerant networking**: data hops opportunistically between nodes until it reaches a gateway.
- **Human-readable output**: a display, e-ink screen, or QR code someone photographs, or a dial that someone writes down.

### Opportunistic / crowdsourced networks
- **Apple Find My / Google Find My Device**: OpenHaystack-style tricks can smuggle a few bits per hour through millions of phones.
- **Community LoRaWAN**: TTN and Helium gateways you didn't deploy yourself.
- **Someone else's Wi-Fi or mesh**: with permission, for example a neighbor's network or a farm's existing infrastructure.

## How we tend to choose

A few questions settle most cases:

1. **Does anyone need the data in real time?** If not, a data mule or SD card is cheap, reliable and needs no infrastructure at all.
2. **Is there power?** On batteries or a small solar panel, rule out Wi-Fi and Starlink early; LoRa, BLE and LTE-M stay in.
3. **Is there coverage, and who owns it?** Cellular and satellite depend on someone else's network and a subscription. A LoRa mesh is infrastructure you can build and keep yourself.
4. **How far, and over what terrain?** Hills and trees favor sub-GHz LoRa and HF over 2.4 GHz.
5. **Who will maintain it?** The best link is the one the people on site can understand and fix. This question deserves a section of its own.

<a name="hidden-constraint"></a>
## The hidden constraint: expertise

There's a well-known trap when technologists choose technology for other people: the **curse of knowledge**. Once you know something, it's very hard to imagine not knowing it, so you underestimate how hard it is for everyone else. A few close relatives:

- **Expert blind spot** (Nathan and Petrosino): experts can't see the steps they no longer consciously take. This is the most precise fit.
- **Tacit knowledge** (Michael Polanyi): "we know more than we can tell." Much of what makes a LoRa node feel "easy" is invisible skill: reading a datasheet, knowing which forum to trust, telling a brownout from a firmware bug.
- **Unconscious competence:** the last rung of the competence ladder, where you've forgotten you ever had to learn the thing.

### Making it an engineering constraint

The way to raise this with technologists is to turn it from a soft concern into a design constraint. Engineers already respect failure modes, specs and dependency chains.

- **Count the knowledge stack, not just the parts list.** A bill of materials lists hardware. A **skill BOM** lists everything someone must know to keep the system running: soldering, a toolchain, Linux, the cloud dashboard, the API that changed last year. Each item is a dependency, and dependencies fail.
- **Design for the maintainer, not the builder.** The relevant user is whoever fixes it in February, three years from now, after you've moved on.
- **Run the walk-away test.** If the designer disappears tomorrow, does the system keep working for a year? It's a version of the "bus factor" engineers already know.
- **Set a skill floor.** Name the least-trained person who should be able to diagnose a failure, and make that a spec. "A 12-year-old with a multimeter can tell whether it's power, radio or sensor" is a requirement you can test against.
- **Treat legibility as a feature.** A status LED, labeled connectors, and a paper troubleshooting card taped inside the enclosure. A failure people can see is one they can fix.
- **Degrade gracefully, and prefer repair to replacement.** If the gateway dies, data should keep logging locally to an SD card.
- **Count the recurring dependencies.** Subscriptions, cloud accounts, proprietary apps and vendor lock-in are maintenance liabilities with an expiration date, even if no one is watching it yet.
- **Start small and working.** Gall's law: complex systems that work evolved from simple systems that worked. That's a good argument against deploying the elegant mesh on day one.

The chart at the top of this note is built around this idea: the skill a system demands often matters more than its range or data rate.

## Readings

- **Appropriate technology:** E.F. Schumacher, *Small Is Beautiful*.
- **Tools for Conviviality:** Ivan Illich's idea that a good tool expands the user's autonomy rather than making them depend on experts. This is probably the sharpest frame for community infrastructure.
- **The Innovation Delusion** and the **Maintainers** network: Lee Vinsel and Andrew Russell's argument that we chronically overvalue building and undervalue maintenance.
- **"Pilotitis"** in ICT4D: development-sector research on why tech pilots succeed, then die when the funded experts leave.
