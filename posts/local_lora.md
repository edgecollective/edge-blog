---
pageTitle: Local First Lora Networks
layout: layout.njk
date: 2020-05-02
updated: 2020-05-02
image: img/local_first_lora/local_first_snap.png
blurb: Developing a design for a 'local first' approach to farm networking.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q7oVNl8lRqY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The LoRa radio protocol has emerged in recent years as a long-range, low-power, inexpensive approach to capture sensor data.  Usually, farmers and resource managers have been deploying LoRa gateways that send their data directly to the cloud.  There are many cases, however, in which it is desirable to store data locally, on-site, before sending it the cloud via internet:  the site may not have a reliable internet connection;  the cloud-based database may be unreliable, or unavailable; or the user may be concerned about their data privacy.

We're working to develop a <b>'local-first'</b> LoRa / WiFi sensor gateway for use in farming, water / flood monitoring, and other related applications where an internet connection is sometimes intermittent or unavailable.
- Sensor data is always stored first locally (to solid state drive)
- Data is always accessible locally via as CSV / JSON / simple live graphs
- If internet is available, data can be sent to a user-chosen cloud service (FarmOS, Google Sheets, etc)

You can watch the <a href="https://www.youtube.com/embed/Q7oVNl8lRqY">video linked above</a> for an explanation of how 'local first' compares to 'cloud first'. 



