---
pageTitle: Controlling Greenhouse Temperature at Smithereen Farm 
layout: layout.njk
date: 2023-04-26
updated: 2020-04-26
tags: notes
image: img/smithereen/inkbird.png
blurb: Greenhouse monitoring and temp control at Smithereen Farm. 
---

---

April 26 2023

# Inkbird temp controller 

The [Inkbird ITC-308 temp controller](https://inkbird.com/products/temperature-controller-itc-308) (which, as of 4/26/23, can be purchased for [$35 on Amazon](https://www.amazon.com/dp/B01HXM5UAC?ref=ppx_yo2ov_dt_b_product_details&th=1)) is a sort of 'thermostat' that allows the user to program temperature thresholds that will trigger a fan or a heater to turn on or off.

A brief explanation of how it works is in the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/h8_5VxzxO90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# postgres commands

```

sudo -i -u postgres

psql


```

then list databases

```

\l

```

[add postgres column](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-add-column/)

[listing contents of databases and tables](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/)

[great general reference for postgresql](https://www3.ntu.edu.sg/home/ehchua/programming/sql/PostgreSQL_GetStarted.html)

