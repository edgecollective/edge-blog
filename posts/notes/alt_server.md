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
- Add CSV export
- Add JSON export (already there mostly)
- Add simple graphing
- Add simple metrics (size of file, timespan of datafile, num datapoints)
- Add human-readable timestamp (at least e.g. in CSV export)

---

25 OCT 2020

Making a python PUT script.

Reference on python requests [here](https://requests.readthedocs.io/en/master/user/authentication/).

Setting the authorization header in curl [here](https://stackoverflow.com/questions/3044315/how-to-set-the-authorization-header-using-curl).

Issue: when using basic auth in current basicAuth branch, it is putting the username password authentication method on top of *every* request -- need to do it just for the home page.

Guide to using basic auth [here](https://github.com/fastify/fastify-basic-auth).

Combining fastify static with fastify basic auth [here](https://github.com/fastify/help/issues/190).

Using multiple authentication options with fastify [here](https://github.com/fastify/fastify-auth#usage)

addhook onresponse by route [here](https://github.com/fastify/fastify/issues/1828)

fastify and mongodb [here](https://www.fastify.io/docs/v3.4.x/Getting-Started/)

Might just need to find a way to serve up web page from directly in fastify, using basicAuthFix branch

Nice [getting started with fastify](https://www.fastify.io/docs/v3.4.x/Getting-Started/) document.

Currently the action is in 'main.js' ... 

Looks like there is a way to addHook to specific routes [here](https://github.com/fastify/fastify/blob/master/docs/Hooks.md#onroute)

latest idea:  keep basicAuth branch as-is, but use multiple authentication methods in 'PUT' script

'ctrl shift i' will insert timestamp in VS Code given installation of an extension [here](https://stackoverflow.com/questions/38780057/how-to-insert-current-date-time-in-vscode#:~:text=To%20insert%20current%20date%20and,Insert%20DateTime%20then%20press%20Enter%20.&text=By%20default%20you%20don't%20have%20to%20set%20anything.)

Adding multiple authorization headers via postman [here](https://stackoverflow.com/questions/29282578/multiple-http-authorization-headers)

Combining multiple authorizations via curl [here](https://stackoverflow.com/questions/22229996/basic-http-and-bearer-token-authentication)

Setting multiple headers in curl -- useful! -- [here](https://www.shellhacks.com/curl-add-header-multiple-headers-authorization/)

issues:

1. can't use multiple authorization schemes, in particular not if one of them is Basic Auth
2. not sure how to combine basic auth with fastify-static

interesting angle mentioned in ["Transform response of fastify-static served files"](https://stackoverflow.com/questions/64201513/transform-response-of-fastify-static-served-files), which led to fastify [point-of-view templates idea](https://github.com/fastify/point-of-view).

Ah -- I think I've got it working with the basicAuth branch, now!

---
2020-11-29 08:51:40

Adding authentication to NodeJS, [here](https://www.youtube.com/watch?v=Ud5xKCYQTjM)

Using Auth0 and Fastify [here](https://medium.com/better-programming/how-to-add-authentication-to-your-fastify-rest-api-using-auth0-cddc7eacc90) -- ah, blocked --

But there's a repo, [here](https://github.com/nearform/fastify-auth0-verify).


---
2020-11-29 16:43:16

[Jupyter dashboard](https://blog.jupyter.org/a-gallery-of-voil%C3%A0-examples-a2ce7ef99130) via voila -- [gallery of examples](https://blog.jupyter.org/a-gallery-of-voil%C3%A0-examples-a2ce7ef99130)

gesis notebooks, [here](https://notebooks.gesis.org/)

guide to voila, [here](https://analyticsindiamag.com/complete-guide-to-voila-to-turn-a-jupyter-notebook-into-a-standalone-web-application/)

Dashboarding options in Jupyter discussed [here](https://medium.com/informatics-lab/jupyter-dashboarding-some-thoughts-on-voila-panel-and-dash-b84df9c9482f)

User authentication with nodejs and passport [here](https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/)

Rolling your own authentication, [here](https://developer.okta.com/blog/2019/10/03/painless-node-authentication).

React and Auth0 ...
- [Third party guide here](https://www.smashingmagazine.com/2020/11/authenticating-react-apps-auth0/)
and
- [Auth0 guide here](https://auth0.com/blog/complete-guide-to-react-user-authentication/)

---
2020-12-05 14:21:37

## Node + Express + Postgresql

[react + node + express + postgresql](https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/) -- short tutorial

[react + node + express + postgresql](https://bezkoder.com/react-node-express-postgresql/) -- thorough tutorial

[express + postgresql](https://expressjs.com/en/guide/database-integration.html#postgresql) -- from node guide

[Creating a web application in your home with a Raspberry Pi, Express and PostgreSQL](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372) -- this looks like a great place to begin!

[Getting started with authentication in Node.js with Passport and PostgresQL](https://medium.com/@timtamimi/getting-started-with-authentication-in-node-js-with-passport-and-postgresql-2219664b568c)

[Sequelize](https://sequelize.org/) -- JSON that creates a database table

[suggestion to use multi-row inserts to save time](https://stackoverflow.com/questions/43436755/best-way-to-save-data-that-keeps-coming-every-1-second-to-postgres-using-node-js)

[designing a restful api with node and postgres](https://mherman.org/blog/designing-a-restful-api-with-node-and-postgres/)

[ahhh -- part of a great series that seems to do all the things!  including graphing!](https://rike.dev/2019/04/20/setup-postgresql-database-and-api-for-node-js) -- the series is [here](https://rike.dev/2019/02/11/smart-home-setup-to-track-indoor-temperatures-and-humidity-with-sensors-raspberry-pi-mqtt-node-js-vue-js-and-chart-js)

[using mqtt vs REST](https://www.mathworks.com/help/thingspeak/choose-between-rest-and-mqtt.html#:~:text=REST%20is%20a%20representational%20state,can%20be%20secured%20with%20SSL.)

---
2020-12-05 20:47:42

following tutorial [here](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372), putting in Documents/able

> sudo apt-get install postgresql

psuser
psps

> sensor2=# INSERT INTO users (username, password) VALUES ('user1', 'bubbles');

> INSERT INTO sensors (name) values ('NodeMCU  ESP32');

---
2020-12-15 08:53:18

[Building a simple API with Nodejs, Expressjs, PostgreSQL DB, and JWT - 3](https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-postgresql-db-and-jwt-3-mke10c5c5)

[node + postgresql -- nice tutorial](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

[node + postgresql + jwt](https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66)

---

2020-12-15 15:12:26

Begin here:
- [CRUD](https://bezkoder.com/node-express-sequelize-postgresql/)

then add security here:
- [adding jwt](https://bezkoder.com/node-js-jwt-authentication-postgresql/)

Update: actually, begin with second tutorial ...

Installing postgresql on ubuntu [here](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)

React + node + express + mongo w/ login page [here](https://bezkoder.com/react-node-mongodb-auth/)

---
2020-12-15 15:53:43

Okay, here's the real deal:

[Node.js Express & PostgreSQL: CRUD Rest APIs example with Sequelize](https://bezkoder.com/node-express-sequelize-postgresql/)

Prior exapmel: 

node, express, postgresql using sequelize [here](https://medium.com/codingtown/node-express-and-postgresql-using-sequelize-in-ubuntu-18-04-3-lts-bc8d2cde3796)

Wow, really simple example [here](https://rike.dev/2019/04/20/setup-postgresql-database-and-api-for-node-js)

postgres and ubuntu tutorial [here](https://itsfoss.com/install-postgresql-ubuntu/)

---
2020-12-15 17:12:48

nodejs express mongodb jwt [here](https://www.npmjs.com/package/node-express-mongodb-jwt-rest-api-skeleton)

---
2020-12-16 11:26:24

as another approach w/ node + postgres, trying out [this tutorial](https://rike.dev/2019/04/20/setup-postgresql-database-and-api-for-node-js)

Nice intro tutorial on nodejs and postgres [here](https://stackabuse.com/using-postgresql-with-nodejs-and-node-postgres/)

try out the github code [here](https://github.com/jkasun/sa-node-postgres)

worked.

New homework!  This is the thing to try: 

"creating a web application in your home using nodes, rpi, express, postgresql" -- [here](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372)

NOTE:  'createdb -0 username dbname' should have -O instead of -0

Associated github repo is [here](https://github.com/RhettTrickett/habitat)

Grand. And then can add users / JWT with something like [this post](https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-postgresql-db-and-jwt-3-mke10c5c5)

The first post for that series is [here](https://www.codementor.io/@olawalealadeusi896/building-simple-api-with-es6-krn8xx3k6)

Full code for the latter is [here](https://github.com/olawalejarvis/reflection_app_server)

And perhaps this shows how to combine the above with a front end -- [here](https://bezkoder.com/react-express-authentication-jwt/)

### Good example!

The following pairing of backend and frontend seems to work as a baseline structure. Running both, they even find one another on the proper ports.

#### Backend w/ node + express + postgresql + JWT 

Tutorial [here](https://bezkoder.com/node-js-jwt-authentication-postgresql/) with associated code on github [here](https://github.com/bezkoder/node-js-jwt-authentication-postgresql)

#### Frontend 

React front end [here](https://bezkoder.com/react-jwt-auth/), with github repo [here](https://github.com/bezkoder/react-jwt-auth)

## Node + Express + Postgres + Sequelize

Tutorial [here](https://www.robinwieruch.de/postgres-express-setup-tutorial).  Nice explanation. 

Another nice tutorial [here](https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api), with associated code on github [here](https://github.com/didinj/node-express-postgresql-sequelize.git)

Ahhhh, really nice tutorial on using sequelize, [here](https://blog.echobind.com/a-guide-for-restful-apis-with-node-sequelize-postgres-63636d026d5d)

---
2020-12-16 13:31:56

using quasar, vue, and chartjs [here](https://rike.dev/2019/02/11/display-smart-home-data-in-a-quasar-vue-js-and-chart-js-powered-web-application)

---

## Key links

https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-sequelize-setup

https://bezkoder.com/node-js-jwt-authentication-postgresql/

https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-and-postgresql-db-masuu56t7

---
2020-12-17 08:04:23

arg for postgresql for iot [here](https://blog.timescale.com/blog/choose-postgresql-for-iot-19688efc60ca/)





