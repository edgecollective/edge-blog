---
pageTitle: Getting ready for first deployment 
layout: layout.njk
date: 2023-08-04
updated: Last Modified 
tags: grassnomads 
image: /img/ojofeliz/twintowers.jpeg
blurb: Testing updated boards; selecting enclosures 
---

Note:  a clear see-through cover might not be ideal for our application, as sunlight might cause too much heating in this configuration.  More convenient might be a plastic cover that can be opened easily.  

Possibilities:

- [hinged opaque cover, various sizes](https://www.amazon.com/dp/B09YXJK1SC/ref=sspa_dk_detail_0?pd_rd_i=B09YXJK1SC&pd_rd_w=upZm5&content-id=amzn1.sym.0d1092dc-81bb-493f-8769-d5c802257e94&pf_rd_p=0d1092dc-81bb-493f-8769-d5c802257e94&pf_rd_r=BNQ9NF9FMKMHYYE5QBDW&pd_rd_wg=j6fgn&pd_rd_r=f08aab85-1e58-4045-a781-4c709edf396a&s=industrial&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&th=1)

- [Even better, with measurements](https://www.amazon.com/Gratury-Stainless-Waterproof-Electrical-290%C3%97190%C3%97140mm/dp/B08282SQPT/ref=sw_ttl_d_sspa_dk_huc_pt_expsub_0?_encoding=UTF8&pd_rd_i=B08282SQPT&pd_rd_w=sfD9l&content-id=amzn1.sym.421156cc-ae17-4608-955b-a8d126cb098e&pf_rd_p=421156cc-ae17-4608-955b-a8d126cb098e&pf_rd_r=C4S9D7505SZCVE3Y9CMQ&pd_rd_wg=dMIio&pd_rd_r=5cbf36fb-8a08-4908-9baa-016075d3ca7d) 

# Wed Aug 16 07:44:26 PM EDT 2023

Datasheet for sensors: [https://maxbotix.com/pages/hrxl-maxsonar-wr-datasheet](https://maxbotix.com/pages/hrxl-maxsonar-wr-datasheet)

Looks like the resistor I'm using triggers a send every 3 minutes.  Going to try to aim for more like 10 minutes, or even 20 minutes. 

If we consider that the 'wake' voltage is about 40 mA, we can calculate how much current is being used for how long.

If the battery is 1000 mAh, and we're awake (because of a bug) for 10 minutes @ 40mA, then we're burning 40% of the battery energy right there ...

But every 'wakeup' also burns battery for some amount of time. 

There's a simple optimization problem here.  

# Thu Aug 17 09:13:11 AM EDT 2023

Bang on! Very solid timing of the satellite monitor.

![](/img/ojofeliz/sat_messages_ontime.png)

Battery charge seems to go to max immediately, then fluctuate by a large amount in the sun ... but, baseline is clearly rising. 
 
![](/img/ojofeliz/solar_charging.png)

via [http://bayou.pvos.org/data/35tmkbqumaz7?plot_param=battery_volts](http://bayou.pvos.org/data/35tmkbqumaz7?plot_param=battery_volts)

One issue: should have the resistor TPL5110 choice such that the wake interval is greater than the maximum awake interval if all satellite attempts are tried ... 

Note that it looks as overnight, with full view of sky and away from house, we sent on first try.

![](/img/ojofeliz/attempt_count.png)

via [http://bayou.pvos.org/data/35tmkbqumaz7?plot_param=aux_3](http://bayou.pvos.org/data/35tmkbqumaz7?plot_param=aux_3)


# Thu Aug 17 02:06:04 PM EDT 2023

Sensor comparison chart: ![](/img/ojofeliz/maxbotix_comparison.png)

Via [https://cdn.shopify.com/s/files/1/0550/8091/0899/files/HRXL-MaxSonar-WR_Datasheet.pdf](https://cdn.shopify.com/s/files/1/0550/8091/0899/files/HRXL-MaxSonar-WR_Datasheet.pdf)


# Fri Aug 18 12:56:26 PM EDT 2023

[https://learn.adafruit.com/circuitpython-display-support-using-displayio/text](https://learn.adafruit.com/circuitpython-display-support-using-displayio/text)

[https://www.reddit.com/r/circuitpython/comments/jp10d1/is_there_a_bdf_font_repo_somewhere/](https://www.reddit.com/r/circuitpython/comments/jp10d1/is_there_a_bdf_font_repo_somewhere/)

[https://github.com/olikraus/u8g2/tree/master/tools/font/bdf](https://github.com/olikraus/u8g2/tree/master/tools/font/bdf)

![](/img/ojofeliz/sensor_options.png) via [https://maxbotix.com/pages/xl-tanksensor-wr-datasheet](https://maxbotix.com/pages/xl-tanksensor-wr-datasheet)

![](/img/ojofeliz/package_types.png) via [file:///home/db/Downloads/PD11838z_-XL-MaxSonar-WR_Datasheet-website.pdf](file:///home/db/Downloads/PD11838z_-XL-MaxSonar-WR_Datasheet-website.pdf)

![](/img/ojofeliz/power_quick.png)


# Sun Aug 20 04:39:59 PM EDT 2023

http://159.65.226.222:4000

digitalocean
edgecollective

iridium-bayou-relay

pubkey: 2ifhwi34ue4j


# Sun Aug 20 09:57:06 PM EDT 2023

link for lora data: 
[http://bayou.pvos.org/data/35tmkbqumaz7?plot_param=battery_volts&limit=10](http://bayou.pvos.org/data/35tmkbqumaz7?plot_param=battery_volts&limit=10)

new link for satellite data:
[http://bayou.pvos.org/data/gcr565avyan2?plot_param=battery_volts&limit=10](http://bayou.pvos.org/data/gcr565avyan2?plot_param=battery_volts&limit=10)

Note: solution to blinking TPL5110 problem was to add a 1000 uF cap across GND + DRIVE on the TPL5110, likely due to the initial current draw from the ESP32

For now, should probably place it on the underside of the board so that it doesn't get jostled when pressing the button


# Mon Aug 28 01:12:16 PM EDT 2023

Quick notes on upgrades before mailing prototype:
- new splash screen
- modify sleep interval to reduce number of iterations before send, to facilitate testing in field?
- test satellite data flow
- how to incorporate the 'sensor height' variable?
- use sweet-p v0.3 for 'wifi receiver' board
- upgrade the feather esp32-tft on the main board (screen broken)
- screw in the satellite modem connector
- solder / heatshrink the solar panel connector


# Tue Aug 29 10:54:10 AM EDT 2023

Currently $0.18 per credit.

Currently every 3 hours = 8 credits per day.

I.e.:  $43 per month

 

