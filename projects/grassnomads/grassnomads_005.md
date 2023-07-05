---
pageTitle: Stress testing the initial system
layout: layout.njk
date: 2023-07-04
updated: 2023-07-04
tags: grassnomads 
image: /img/ojofeliz/twintowers.jpeg
blurb: Testing the satellite system over a period of a few days; collecting statistics on battery consumption (and learning which statistics to collect).
---

## Base station notes

Might want to add a TPL5111 to the 'EN' pin on the base station, to reset it every X hours

## Satellite modem

NOTE: can't just 'plug in' the satellite modem to the sweet-p board as-is ... 

# Tue Jun 27 03:55:52 PM EDT 2023

Getting some sort of odd 'every-other' error when trying to talk to satellite modem ...

Going to try a simple experiment ...


1.83 = 53063/max_count*3.3

NOTE: seems as though D5's state is somehow correlated with the pins I'm using for satellite RX / TX (D11 / D12) ... so that when I try to access the satellite via those UART pins, D5 is sufficiently triggered that it ends up registering as a 'DONE' signal on the TPL5110.  I don't know if this is internal to the ESP32-S2 Feather, or part of my board circuitry.  But, I switched the 'DONE' pin to A3 (which also seems somewhat isolated on my board), and it now works.  

# Tue Jun 27 09:52:46 PM EDT 2023
    
Looks like the system is working!

[http://bayou.pvos.org/data/pb87ap97vgrr?plot_param=aux_3&limit=175](http://bayou.pvos.org/data/pb87ap97vgrr?plot_param=aux_3&limit=175)

| ![](/img/ojofeliz/sat_sleep_post_sat.png) |
|:--:|
| Fig A. Average sleep current after satellite use was approx 750 uA. With a longer time interval it likely would've decayed further.   | 

| ![](/img/ojofeliz/sat_sleep_post_radio.png) |
|:--:|
| Fig B. Average sleep current after radio-only use was approx 200 uA. |

| ![](/img/ojofeliz/sat_sleep_overnight_a.png) |
|:--:|
| Fig C.  First sequence beginning satellite messaging overnight -- message received as #185 -- only 1 attempt needed.|


# Thu Jun 29 12:45:04 PM EDT 2023

| [![](/img/ojofeliz/satellite_sendcount.png)](/img/ojofeliz/satellite_sendcount.png) | 
|:--:|
| Fig D.  Satellite sendcount over a period of roughly 24 hours. |


# Thu Jun 29 03:49:28 PM EDT 2023

For some reason, A0 doesn't seem to like being an analog input (perhaps it's only useful as a DAC?)  So I'm now measuring the battery using A3, and using A0 to pull the DONE pin.  (Note: the analog pins seem to be un-(less?) affected by the strange 'digital correlations' in the digital GPIO pins which seemed to trigger an unwanted 'DONE' signal when D11 and D12 were used for satellite UART and D5 was used on DONE. Using A0 or A3 for DONE seems to avoid this problem.

Latest code is here: [https://github.com/edgecollective/sweet-p/tree/bc4e251bbd9090e02c6a386bdda4b48e4447549b/firmware/board_ver_0.2/v7.0](https://github.com/edgecollective/sweet-p/tree/bc4e251bbd9090e02c6a386bdda4b48e4447549b/firmware/board_ver_0.2/v7.0)

# Thu Jun 29 04:04:59 PM EDT 2023

![](/img/ojofeliz/sat_power_sequence.png)

Fig E. Power profile of 8 sequential satellite retries

Question: would it be better to simply wait until later to send the satellite message?  

Perhaps let's try it outside first.


# Fri Jun 30 10:42:47 AM EDT 2023

![](/img/ojofeliz/sat_send_count.png)

Fig F.  Number of satellite transmission attempts required over time. Looks like it might indeed be useful to restrict the number of attempts to three or four, then retry the next session.  Will collect more statistics today and then see if we can improve the power consumption pattern.

Figure F. was generated via: [http://bayou.pvos.org/data/pb87ap97vgrr?plot_param=aux_3&limit=350](http://bayou.pvos.org/data/pb87ap97vgrr?plot_param=aux_3&limit=350)

"sat_sender_measure_punt.py" is the code for attempting to send via satellite, and 'punting' to next round if we've reached 'max_sat_send_tries' and haven't been able to send.  

Code I'm testing out is here: [https://github.com/edgecollective/sweet-p/tree/d2a499934004627b3723d4745dc70efc7eabc711/firmware/board_ver_0.2/v7.0](https://github.com/edgecollective/sweet-p/tree/d2a499934004627b3723d4745dc70efc7eabc711/firmware/board_ver_0.2/v7.0)

Going to see if I can collect some statistics on average current consumption for various modes of satellite transmission / sleep.

e.g.:

![](/img/ojofeliz/sat_current_experiment_a.png)

Fig G.  Average system current when attempting to send seven times. Total duration was about 4 minutes, at an average current of 120 mA. 

We can use the data from this experiment to estimate the average current over a 24 hour period for various patterns of satellite transmission.  Can take indoor transmission as likely worst case.  Need also to find a way to estimate recharge rate of solar panel -- perhaps can use current monitor.

![](/img/ojofeliz/sat_current_experiment_b.png)

Fig H.  Ave system current of 125 mA, session of 3.5 minutes, took 6 tries. 

![](/img/ojofeliz/lora_wakeup.png)

Fig I.  Ave system current of 41 mA, session of 12 seconds, to do lora wakeup and shutdown.  

![](/img/ojofeliz/sat_long_attempt.png)

Fig J.  Approx 10 satellite send attempts; ave system current of 143 mA; 6 minutes duration.

# Tue Jul  4 10:59:49 PM EDT 2023

![](/img/ojofeliz/battery_behavior_fourth.png)

Fig K. Battery behavior over the fourth of july

![](/img/ojofeliz/sat_send_stats_fourth.png)

Fig L.  Satellite send tries over the same period as in Fig K.


# Wed Jul  5 12:59:37 PM EDT 2023

![](/img/ojofeliz/aux_3_fifth.png)

Fig M.  Send stats for July 5th

![](/img/ojofeliz/battery_fifth.png)

Fig N.  Battery stats for July 5th

Can see correlation in sending attempts and battery drain.

Can also see that if simply wait another 8 or 16 minutes, satellite conditions are much more favorable.

Conclusion:  if you can't get it in 2 or 3 tries, maybe wait at least 30 minutes ... 

... and that might be what we do anyway if we start transmitting at lower frequencies ...


 
