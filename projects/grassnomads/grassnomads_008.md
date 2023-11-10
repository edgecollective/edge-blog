---
pageTitle: Marsh Storage Field Deployment 
layout: layout.njk
date: 2023-10-14
updated: Last Modified 
tags: grassnomads 
image: /img/ojofeliz/twintowers.jpeg
blurb: Installation of water sensor at Marsh Storage site. 
---

# Sun Oct 15 09:32:45 PM EDT 2023

![](/img/ojofeliz/marsh_deploy.jpeg)

[http://bayou.pvos.org/grassnomads](http://bayou.pvos.org/grassnomads)

![](/img/ojofeliz/bayou_marsh.jpeg)


# Sat Oct 21 09:27:52 PM EDT 2023

Marsh Storage tank statistics:
- Max height of water is 5 feet 7 inches
- sensor is placed 5 inches above max height
- tank diameter is 16 feet

Changes:
- Mineral tub added for protection of electronics
- Percent full and gallons added to site

![](/img/ojofeliz/marsh_mineral.jpeg)

![](/img/ojofeliz/gallons.png)


# Mon Oct 23 09:54:12 AM EDT 2023

Added to interface:

![](/img/ojofelix/marsh_10_23.png)

Question: how far away from the side of the tank can we operate? 

Current version of sensor:  MB7389-100

Datasheet: [https://maxbotix.com/pages/hrxl-maxsonar-wr-datasheet](https://maxbotix.com/pages/hrxl-maxsonar-wr-datasheet)

![](/img/ojofeliz/mb7389_beam_pattern.png)

Reading maxbotix beam patterns: [https://maxbotix.com/blogs/blog/reading-beam-patterns?utm_term=&utm_source=google&utm_medium=cpc&gclid=CjwKCAjws9ipBhB1EiwAccEi1E-_WkFc-PF6I5SCgpzVYS_pqXphUPzEGTQnkPg3XyyzFECGFfqaghoCMeMQAvD_BwE](https://maxbotix.com/blogs/blog/reading-beam-patterns?utm_term=&utm_source=google&utm_medium=cpc&gclid=CjwKCAjws9ipBhB1EiwAccEi1E-_WkFc-PF6I5SCgpzVYS_pqXphUPzEGTQnkPg3XyyzFECGFfqaghoCMeMQAvD_BwE)

Guidelines for tank installation: [https://www.maxbotix.com/articles/tank-level-monitoring-ultrasonic-sensors.htm](https://www.maxbotix.com/articles/tank-level-monitoring-ultrasonic-sensors.htm)


# Tue Oct 24 07:21:18 PM EDT 2023

Reply from maxbotix on mounting sensor inside a tank:

1. [https://sforce.co/2XhKl2z](https://sforce.co/2XhKl2z)

2. [https://sforce.co/2zdOJrq](https://sforce.co/2zdOJrq)

Latter illustration suggests that we should mount the sensor 2' to 3' away from side wall if possible

Also: tank drop down to 8%:

![](/img/ojofeliz/tank_drop.png)


# Thu Oct 26 12:40:32 PM EDT 2023

Marsh storage starting to refill

![](/img/ojofeliz/tank_depletion_refill.png)

Questions:
- make sensor box easy to mount
- make solar panel easy to mount 
- something that can drill through for easy mounting
- geometry of door -- on side? -- to access electronics ... or perhaps external antenna
- actually, new satellite modem uses cable for connection anyway, can place the transmitter on case edge


# Wed Nov  8 06:37:38 PM EST 2023

- Ordered a Max 7850 'tank sensor' ultrasonic depth sensor from Digikey
- Ordered another Rockblock 9602, from Sparkfun (9603 seems to be out of stock at Adafruit and Sparkfun)

Going to prototype using GPS and timer chip to send messages as close to 5 AM and a particular time in the evening as possible


# Fri Nov 10 02:35:43 PM EST 2023

Self-cleaning maxbotix sensors: [https://maxbotix.com/collections/scxl-maxsonar-wr-products](https://maxbotix.com/collections/scxl-maxsonar-wr-products)

Datasheet for the self-cleaning series: [https://maxbotix.com/pages/scxl-maxsonar-wr-datasheet](https://maxbotix.com/pages/scxl-maxsonar-wr-datasheet)

Nanostation extending wifi network [https://community.ui.com/questions/Configuring-the-NanoStation-M5-to-extend-an-existing-wifi-network/3cf2b7d6-29a2-44a1-97f3-ffd673cb3d57](https://community.ui.com/questions/Configuring-the-NanoStation-M5-to-extend-an-existing-wifi-network/3cf2b7d6-29a2-44a1-97f3-ffd673cb3d57)

[nanonstation repeater mode](https://www.youtube.com/watch?v=U00ke3OAJ8o)

'ap repeater'

or rather, as 'client' [https://community.ui.com/questions/How-i-can-setup-my-nanostation-m5-as-a-receiver/9bfe796c-5ab1-4aaf-9ce1-3d012c8cd61f](https://community.ui.com/questions/How-i-can-setup-my-nanostation-m5-as-a-receiver/9bfe796c-5ab1-4aaf-9ce1-3d012c8cd61f)

update:  nanostation m5 works on the 5 GHz band ...

manual: [https://dl.ubnt.com/guides/NanoStation_M/NanoStation_M_Loco_M_QSG.pdf](https://dl.ubnt.com/guides/NanoStation_M/NanoStation_M_Loco_M_QSG.pdf)

claims: go to 'wireless' link and set it to 'station'

[https://dl.ui.com/guides/airOS/airOS_UG.pdf](https://dl.ui.com/guides/airOS/airOS_UG.pdf):w

in the above document, chapter 4 (p 23) 'wireless' -- use 'station' mode 


# Fri Nov 10 05:29:03 PM EST 2023

Ojo Feliz Ranch weather last 30 days: [https://www.localconditions.com/weather-ojo-feliz-new-mexico/87735/past.php](https://www.localconditions.com/weather-ojo-feliz-new-mexico/87735/past.php)

![](/img/ojofeliz/ojo_freeze.png)


