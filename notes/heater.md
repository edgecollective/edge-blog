---
pageTitle: Off-grid heat
layout: layout.njk
date: Last Modified
updated: 2021-11-09
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


