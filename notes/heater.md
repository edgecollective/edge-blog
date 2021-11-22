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