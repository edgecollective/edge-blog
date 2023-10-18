---
pageTitle: Off-grid heat
layout: layout.njk
date: Last Modified
updated: Last Modified 
tags: notes 
image: /img/heater/temp_plot.png
blurb: Designs for off-grid heating systems
---


---
2021-11-22 10:52:14

```
Terminal type is now 'qt'
gnuplot> set datafile separator ","
gnuplot> plot "output.txt" using 1:2
gnuplot> plot "output.txt" using 0:2
gnuplot> 
```

~/gitwork/offgrid-heater/v1

stepping down at 10 min intervals:

![](/img/heater/temp_plot.png)

next up:
- display in F
- record timestamp

~/gitwork/offgrid-heater/v2

![](/img/heater/exp1.png)

---
2021-11-22 18:37:23

In v3, tried two heaters in parallel. Got:

![](/img/heater/two_parallel_max.png)

Now re-trying one without changing position of temp sensor, for direct comparison ...

![](/img/heater/one_max.png)

Now re-trying with three in parallel ...

![](/img/heater/three_parallel_prelim.png)

Testing linearity by plotting equilibrated temp vs pwm for that temp:

![](/img/heater/equil_temp_vs_pwm_percent.png)

---
2021-11-23 08:03:59

Arduino PID [https://www.teachmemicro.com/arduino-pid-control-tutorial/](https://www.teachmemicro.com/arduino-pid-control-tutorial/)

Three paralllel heaters:

![](/img/heater/three_parallel.png)

Note that as of now (2021-11-23 08:06:17) the battery voltage is approx 12V; early in the experiments it was at 13V.

Now, return to one heater, repeat experiment, see if lower voltage has had an impact ...

---
2021-11-23 11:01:49

Results from one heater experiment. Note that the initial temp was higher, so perhaps easier to reach max temp initially; second run seems to reach lower max temp.

![](/img/heater/one_heater_12v.png)

---
2021-11-23 12:52:43

Next step:  add a diode and test ... and add a fuse?

---
2021-11-23 13:13:26

Nice guide to using N-channel mosfet w/ motor control ... [https://bildr.org/2012/03/rfp30n06le-arduino/](https://bildr.org/2012/03/rfp30n06le-arduino/)


Carbon fiber heating wire: [https://www.walmart.com/ip/Anself-3mm-12K-33-Carbon-Fibre-Heating-Wire-200-High-Temperature-Far-Infrared-Silicon-Rubber-Warm-Floor-Heating-Cable/214637878?wmlspartner=wlpa&selectedSellerId=101001360&&adid=22222222227458777995&wl0=&wl1=g&wl2=c&wl3=538566868938&wl4=pla-1461988039397&wl5=9001876&wl6=&wl7=9002004&wl8=&wl9=pla&wl10=128133340&wl11=online&wl12=214637878&veh=sem&gclid=CjwKCAiA4veMBhAMEiwAU4XRr8JrzrRzHUIx8zmXSVjrAAqEOX5sOsjLmlKgGTlOpF0Q_P1oLxs-eRoCHKsQAvD_BwE&gclsrc=aw.ds](https://www.walmart.com/ip/Anself-3mm-12K-33-Carbon-Fibre-Heating-Wire-200-High-Temperature-Far-Infrared-Silicon-Rubber-Warm-Floor-Heating-Cable/214637878?wmlspartner=wlpa&selectedSellerId=101001360&&adid=22222222227458777995&wl0=&wl1=g&wl2=c&wl3=538566868938&wl4=pla-1461988039397&wl5=9001876&wl6=&wl7=9002004&wl8=&wl9=pla&wl10=128133340&wl11=online&wl12=214637878&veh=sem&gclid=CjwKCAiA4veMBhAMEiwAU4XRr8JrzrRzHUIx8zmXSVjrAAqEOX5sOsjLmlKgGTlOpF0Q_P1oLxs-eRoCHKsQAvD_BwE&gclsrc=aw.ds)

---
2021-11-29 16:59:02

"Motorcyclists make their own heated clothing ..."

[https://www.bimmerforums.com/forum/showthread.php?1563924-Converting-non-heated-seat-to-heated](https://www.bimmerforums.com/forum/showthread.php?1563924-Converting-non-heated-seat-to-heated) 

[https://advrider.com/f/threads/35-00-heated-jacket-liner-diy.514532/](https://advrider.com/f/threads/35-00-heated-jacket-liner-diy.514532/)

Hook-up wire [https://www.mouser.com/c/wire-cable/hook-up-wire/?q=83000](https://www.mouser.com/c/wire-cable/hook-up-wire/?q=83000)

[https://www.youtube.com/results?search_query=diy+heated+jacket+wire](https://www.youtube.com/results?search_query=diy+heated+jacket+wire)

Interesting -- he threads his own nichrome wire into insulation:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SpJZ3bCi8d8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[https://www.instructables.com/Solar-Water-Heater-From-Scratch/](https://www.instructables.com/Solar-Water-Heater-From-Scratch/)

advice on copper coil dimensions:

[https://youtu.be/4JFdDITCH-8?t=388](https://youtu.be/4JFdDITCH-8?t=388)

---

Official design for wood-stove hot tub w/ some specs: [https://islandhottub.com/wood-fired-heater/understanding-thermosiphon](https://islandhottub.com/wood-fired-heater/understanding-thermosiphon)

> To produce thermosiphon circulation, the top circulating tube must rise upward to the tub at a rate of 2-inches per foot or greater for the horizontal distance. The steeper the slope, the faster water circulates. Note: Faster circulation does not produce a faster heating rate.

Subtleties in designing a thermosiphon system: [https://www.greenbuildingadvisor.com/question/thermosiphon-vs-recirculating-pump](https://www.greenbuildingadvisor.com/question/thermosiphon-vs-recirculating-pump)

Article on hot water systems: [http://www.garykleinassociates.com/PDFs/15%20-%20Efficient%20Hot-Water%20Piping-JLC.pdf](http://www.garykleinassociates.com/PDFs/15%20-%20Efficient%20Hot-Water%20Piping-JLC.pdf)

Thermosiphone on appropedia [https://www.appropedia.org/Thermosiphon](https://www.appropedia.org/Thermosiphon)

Hot water heater [https://earthshipbiotecture.com/do-it-yourself-solar-hot-water-heater/](https://earthshipbiotecture.com/do-it-yourself-solar-hot-water-heater/)

Nice review of thermosiphon materials [https://www.sciencedirect.com/topics/engineering/thermosiphon-system](https://www.sciencedirect.com/topics/engineering/thermosiphon-system)

Likely reason for use of silicone in heating elements: its unusually high melting / burning point: [https://silicone.co.uk/news/temperatures-can-silicone-rubber-withstand/](https://silicone.co.uk/news/temperatures-can-silicone-rubber-withstand/)

---
2021-12-16 16:45:58

![](/img/heater/thermosiphon_performance.png)

---
2022-01-16 11:56:19

Cement home stove [https://www.youtube.com/watch?v=tJmzTLlQpLw](https://www.youtube.com/watch?v=tJmzTLlQpLw)

---
2022-03-28 13:12:41

Rocket stove design -- with wire mesh -- [https://www.theartofdoingstuff.com/diy-rocket-stove-outdoor-cooking-needs/](https://www.theartofdoingstuff.com/diy-rocket-stove-outdoor-cooking-needs/)

build a rocket stove -- [https://gardenerd.com/blog/build-a-rocket-stove/](https://gardenerd.com/blog/build-a-rocket-stove/)

rocket stove instructions [https://www.ywambelt.org/wp-content/uploads/Rocket-Stove.pdf](https://www.ywambelt.org/wp-content/uploads/Rocket-Stove.pdf)

# Mon Oct 16 07:39:34 PM EDT 2023

## Hot tubs

[https://saltybarrelhottubs.com/products/wood-fired-coil-kit](https://saltybarrelhottubs.com/products/wood-fired-coil-kit)

<iframe width="560" height="315" src="https://www.youtube.com/embed/DkwQgG65xHQ?si=Djq7ooA9Qgn4CRS3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/nY-Vt7f3tAI?si=xQSWVbbGWUkYmE50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
