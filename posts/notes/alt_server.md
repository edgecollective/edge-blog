---
pageTitle: P2P / DIY Server
layout: layout.njk
date: 2020-10-21
updated: 2020-10-21
tags: notes 
image: img/placeholder.png
blurb: P2P Farm server prototyping
---

Repo is [here](https://gitlab.com/dwblair/p2p-farm-server).

A useful associted 'PUT' script is [here](https://gist.github.com/dwblair/4cfbcc993fafcd4d984058ae730ee342)


## ESP32 --> Server

Adding headers to esp32 explanation [here](https://techtutorialsx.com/2018/01/03/esp32-arduino-basic-authentication/)

Making a PUT request [here](https://techtutorialsx.com/2019/01/07/esp32-arduino-http-put-request/).

Using ArduinoJSON with HTTPClient [here](https://arduinojson.org/v6/how-to/use-arduinojson-with-httpclient/).

Creating nested json objects in ArduinoJSON [here](https://arduinojson.org/v5/faq/how-to-create-complex-nested-objects/).

## Work Log

---

21 OCT 2020

Fixed sqlite3 missing module.

Got an ESP32 to post data via JSON, [here](https://github.com/edgecollective/esp32-p2p-farm/tree/main/test_put_json).


---

23 OCT 2020

Trying to use [this fastify basic auth module](https://github.com/fastify/fastify-basic-auth) as part of the codebase.

 ... implemented!

----

24 OCT 2020

Some next steps:
- Make a video explanation of the idea.
- Work out the storage math, and the economics of storage space. 
- This might provide a motivation for using the hyper protocol!
- Put demo code on the site for using Python, and ESP32, CircuitPy, curl to upload data.
- Put it at EC subdomain, or something separate.

