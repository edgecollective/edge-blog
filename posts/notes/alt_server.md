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

----

### (HICCUP IN NOTES FLOW)

---
2020-12-15 17:31:58

[make your own iot data platform](https://www.digitaljunky.io/make-your-own-data-platform-for-the-internet-of-things-using-node-js-and-express-js/)

mern stack [here](https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack)

mean stack jwt [here](https://www.youtube.com/watch?v=T8qepiTbJi4)

MERN full stack [here](https://github.com/praveenscience/JWT-MERN-FullStack)

ooooooh this is good MERN! [here](https://github.com/praveenscience/JWT-MERN-FullStack)

another good example [here](https://github.com/vishalnagda1/mern-jwt-auth)

this worked!

https://github.com/vishalnagda1/mern-jwt-auth

broader tutorial on MERN [here](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/)


MERN CRUD app tutorial [here](https://github.com/SinghDigamber/react-mernstack-crud)

this looks like a nice example, using postgres -- [here](https://github.com/adrach/starter-postgres-express-react)

---

MERN:

okay so this tutorial lets you create student records and view them -- [here](https://github.com/SinghDigamber/react-mernstack-crud)

whereas [this tutorial](https://github.com/vishalnagda1/mern-jwt-auth) does user login stuff.


---
2020-12-15 20:59:54

this pair of server (node + mongo + jwt) + client (angular) worked:
- server [tutorial](https://jasonwatmore.com/post/2020/06/17/nodejs-mongodb-api-jwt-authentication-with-refresh-tokens) and [code](https://github.com/cornflourblue/node-mongo-jwt-refresh-tokens-api)
- client [tutorial](https://github.com/cornflourblue/angular-9-jwt-refresh-tokens) and [code](https://github.com/cornflourblue/angular-9-jwt-refresh-tokens)

reading about fastify [here](https://medium.com/@tarusharora/how-to-build-a-node-js-api-with-fastify-mongodb-docker-and-postman-f1ffab912ece)

---
2020-12-16 09:25:10

this might be my starting place -- node express postgresql ubuntu [here](https://medium.com/codingtown/node-express-and-postgresql-using-sequelize-in-ubuntu-18-04-3-lts-bc8d2cde3796)

also see post [here](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)

doing this in ~/Documents/postgres-express-react-node-tutorial

notes on postgres and user auth [here](https://stackoverflow.com/questions/11919391/postgresql-error-fatal-role-username-does-not-exist)

used this technique to change postgres password to 'i8buddha':
linked [here](https://serverfault.com/questions/110154/whats-the-default-superuser-username-password-for-postgres-after-a-new-install)

sequelize import is not a function' -- https://stackoverflow.com/questions/62917111/sequelize-import-is-not-a-function

associated github repo is [here](https://github.com/waiyaki/postgres-express-node-tutorial)

---
2020-12-16 10:16:16

In the end, a nice codebase for postgres express and node is [here](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-sequelize-setup).  Note that this blog post is based on an earlier blog post by Michael Herman, [here](https://mherman.org/blog/node-postgres-sequelize/).


with the github repo [here](https://github.com/waiyaki/postgres-express-node-tutorial)

used this technique to change postgres password to 'i8buddha':
linked [here](https://serverfault.com/questions/110154/whats-the-default-superuser-username-password-for-postgres-after-a-new-install)

which needed to be changed in server/config/config.json as per:

{
  "development": {
    "username": "postgres",
    "password": "i8buddha",
    "database": "todos-dev",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "i8buddha",
    "database": "todos-test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}

this was the only change needed in the github repo above.

clone, then install with npm install, and run with npm run start:dev

result: working todo api w/ sequelize. 

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
2020-12-16 13:02:19

ingesting real time data w/ nodejs and timescale db [here](https://stephanefrechette.dev/posts/ingest-real-time-streaming-data-for-time-series-analysis/)

rike in berlin [here](https://dev.to/frankanka)

getting a csv download from nodejs [here](https://dev.to/frankanka/get-a-csv-download-out-of-postgresql-or-lowdb-database-on-node-js-45k2)

rike -- project -- maybe she'd help with corona -- [here](https://rike.dev/)

----

multiple users and reflections [here](https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-postgresql-db-and-jwt-3-mke10c5c5)

this is a meaty post [here](https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-and-postgresql-db-masuu56t7)

## Key links

https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-sequelize-setup

https://bezkoder.com/node-js-jwt-authentication-postgresql/

https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-and-postgresql-db-masuu56t7

this adds content to the node + express + postgres + sequelize [here](https://bezkoder.com/node-express-sequelize-postgresql/) w/ associated github repo [here](https://github.com/bezkoder/node-express-sequelize-postgresql)

follow this first!  
and see if you can make it appropriate for sensors ...

and maybe if you can do a front end for it ...
looks like they do have a front end in React example at the end [here](https://bezkoder.com/react-node-express-postgresql/) -- w/ associated github repo [here](https://github.com/bezkoder/react-crud-web-api)

NOTE: have changed default port to something other than 8080, should go back to that ...

so, plan of attack:
1. return to that [.bio tutorial](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372) on sensors, and see how they set up the tables.  use that as an inspiration for how to create the postgresql table structure. 
2. figure out best next thing to implement above; 'todo' or 'tutorials' examples; with or without jwt
3. add jwt + users using the other tutorial.

postgres tutorial [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

```
sudo -i -u postgres
```

psql

\q

---
2020-12-16 21:08:14

next steps:
- try to 'sequelize' the .bio example above, in order to understand how sequelize works ...
- send sensor data to it
- build it out like the 'tutorials' codebase that was associated with a react frontend
- find a way to add JWT

latest running code experimented with was [here](node-js-jwt-authentication-postgresql).

going to experiment with the '.bio' code asap.

[.bio tutorial](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372)

creating new tables

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   username VARCHAR(50),
   password VARCHAR(255),
   is_admin BOOLEAN DEFAULT FALSE
);


CREATE TABLE feeds(
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    private_key VARCHAR(255)
);

CREATE TABLE measurements(
    id SERIAL PRIMARY KEY,
    feed_id INT,
    celcius FLOAT,
    humidity FLOAT,
    created TIMESTAMP DEFAULT NOW(),
    CONSTRAINT feed
        FOREIGN KEY(feed_id)
            REFERENCES feeds(feed_id)
);

INSERT INTO users (username, password) VALUES ('bob', 'jones');

INSERT INTO feeds (name) values ('NodeMCU  ESP32');

checking string status [here](https://stackoverflow.com/questions/60117067/javascript-regex-how-to-check-if-a-string-only-contains-letters-numbers-dash)

---
2020-12-17 20:03:39

newfeed branch is [here](https://github.com/edgecollective/habitat/pull/new/newfeed)

going to try for csv next using tutorial [here](https://dev.to/frankanka/get-a-csv-download-out-of-postgresql-or-lowdb-database-on-node-js-45k2)

another tutorial on exporting csv w/ node and express [here](https://kb.objectrocket.com/postgresql/postgresql-export-csv-with-node-959)

nice bezcoder tutorial [here](https://bezkoder.com/node-js-export-postgresql-csv-file/)

---
2020-12-17 22:09:41

'heltec' is the latest branch.  accepts data from a heltec; includes firmware.

![](/img/alt_server/feed_data.png)

Server code is [here](https://github.com/edgecollective/habitat/tree/heltec); firmware is in 'firmware' directory.

---
2020-12-18 16:23:00


ah, interesting code snippet:

// https://github.com/auth0/express-jwt
// Secure "protected" endpoints with JWT middleware
app.use('/protected', jwtMiddleware({
  secret: SECRET_TOKEN, // Use the same token that we used to sign the JWT above
  // Let's allow our clients to provide the token in a variety of ways
  getToken: function (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer g1jipjgi1ifjioj
      // Handle token presented as a Bearer token in the Authorization header
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      // Handle token presented as URI param
      return req.query.token;
    } else if (req.cookies && req.cookies.token) {
      // Handle token presented as a cookie parameter
      return req.cookies.token;
    }
    // If we return null, we couldn't find a token.
    // In this case, the JWT middleware will return a 401 (unauthorized) to the client for this request
    return null; 
  }
}));

// A simple protected route for demo purposes
app.get('/protected/data', function (req, res) {
  console.log(req.user); // => { _id: <S

----
2020-12-18 16:26:03

[Secure Rest api in nodejs](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs)

[using OAuth](https://stormpath.com/blog/express-sample-api-key-management)


[node api key](https://github.com/arkerone/api-key-auth#readme)

api keys [here](https://dev.to/nagarjun/best-practices-to-generate-and-store-api-keys-using-nodejs-534d)

nice tutorial on development of the stack [here](https://www.robinwieruch.de/node-express-server-rest-api)

very nice tutorial on postgres + express dev [here](https://www.robinwieruch.de/postgres-express-setup-tutorial/)

basic passport api key [here](http://www.passportjs.org/packages/passport-headerapikey/)

passport and nestjs integration [here](https://medium.com/@Dee_Mayoor/apikey-authentication-for-nestjs-using-passport-js-6db467fc31f7)

this looks like a good strategy [here](https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/)

nice strategy for token authentication and whatnot [here](https://gist.github.com/laurenfazah/f9343ae8577999d301334fc68179b485)

--

bezcode node + postgresql + express + react [here](https://bezkoder.com/node-js-jwt-authentication-postgresql/)

---
2020-12-19 11:35:42

inserting html form data into postgresql using nodejs [here](https://stackoverflow.com/questions/63618597/insert-html-form-data-into-heroku-postgresql-database-using-node-js)


---
2021-01-08 15:34:05

capturing form data with nodejs and express [here](https://stackoverflow.com/questions/15568851/node-js-how-to-send-data-from-html-to-express)


working with forms in express [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms)


## Forms example #1 
even better version, with working code, [here](https://www.sitepoint.com/forms-file-uploads-security-node-express/)

github repo [here](https://github.com/sitepoint-editors/node-forms)

---
2021-01-08 15:57:43

This is the code to use and modify for habitat, [here](https://github.com/dwblair/node-forms/tree/finished), when trying to get forms up and running.

Next step is to get habitat up and running -- the 'heltec' code -- which will likely require reconnecting / reconfiguring the postgres database ...

---
2021-01-08 19:32:35

## Forms exmaple with SQLITE3

![](/img/alt-server/adding_a_feed.png)

[Read HTML Form Data Using GET and POST Method in Node.js](https://medium.com/swlh/read-html-form-data-using-get-and-post-method-in-node-js-8d2c7880adbf)

forking their example [here](https://github.com/dwblair/crudApp_htmlForm)

issue with sqlite3 -- covered [here](https://github.com/jansmolders86/mediacenterjs/issues/191)

seems that [this approach](https://github.com/jansmolders86/mediacenterjs/issues/191#issuecomment-202340822) worked, i.e.:

> npm install -g node-pre-gyp
> npm install sqlite3 --save-dev

---
2021-01-09 16:40:05

Capturing which button was pressed in form submit [here](https://stackoverflow.com/questions/2066162/how-can-i-get-the-button-that-caused-the-submit-from-the-form-submit-event)

Got basic forms working in the 'form' branch:

[https://github.com/edgecollective/habitat/tree/form](https://github.com/edgecollective/habitat/tree/form)

Going to try templates next. Also:


understandin gnodejs express templating engines
- [digitalocean](https://www.digitalocean.com/community/tutorials/nodejs-express-template-engines)

---
2021-01-09 17:44:55

Got basic templating working: [https://github.com/edgecollective/habitat/tree/template](https://github.com/edgecollective/habitat/tree/template)

TODOS:
- need to extract and show 'feed ID' (via POSTGRESQL commands) to user when creating new feed (currently only show name and private key)
- might want option of generating a hash for the feed id, rather than a simple incremented integer
- need to handle case where the requested feed ID doesn't exist (will require looking up in database)
- render a landing page for a new data feed that explains private key, allows for downloading the key id and private key, shows an example CURL, and links to online arduino examples.

Going to need to figure out how to create a new table, and new fields.  Follow tutorial by Trickett (habitat creator) [here](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372)



----
2021-01-10 10:57:12

setting up postgresql server ... creating tables ...

- install postgresql [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

then follow instructions [here](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372)

> sudo -i -u postgres
> psql

can exit via \q

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   username VARCHAR(50),
   password VARCHAR(255),
   is_admin BOOLEAN DEFAULT FALSE
);


CREATE TABLE feeds(
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255),
    private_key VARCHAR(255)
);

CREATE TABLE measurements(
    id SERIAL PRIMARY KEY,
    feed_id INT,
    co2 FLOAT,
    tempC FLOAT,
    humidity FLOAT,
    mic FLOAT,
    auxPressure FLOAT,
    auxTempC FLOAT,
    aux001 FLOAT,
    aux002 FLOAT,    
    created TIMESTAMP DEFAULT NOW(),
    CONSTRAINT feed
        FOREIGN KEY(feed_id)
            REFERENCES feeds(feed_id)
);

INSERT INTO users (username, password) VALUES ('bob', 'jones');

INSERT INTO feeds (name) values ('NodeMCU  ESP32');

pcat999

how to handle: relation does not exist -- [here](https://stackoverflow.com/questions/19941922/error-relation-does-not-exist)

---
2021-01-10 12:09:36

update: relation didn't exist b/c hadn't created the tables in the proper database.

PORT=3000
DB_NAME=hab1
DB_USER=postgres
DB_PASSWORD=pcat999
DB_HOST=localhost
DB_PORT=5432

---
2021-01-10 12:30:59

Created a 'feed creation' landing page in the 'createfeed-landing' branch of habitat on github.com/edgecollective

---
2021-01-10 12:48:01

using serial primary keys postgresql [here](https://www.postgresqltutorial.com/postgresql-serial/)

postgresql random primary key [here](https://stackoverflow.com/questions/20890129/postgresql-random-primary-key)

unique identifier in your postgresql database [here](https://itnext.io/how-to-have-unique-identifier-in-your-postgresql-database-using-primary-key-and-foreign-key-9d2ddd4efce2)

advice here is not to use the public key as the unique identifier -- [here](https://dba.stackexchange.com/questions/94203/random-unguessable-primary-key-which-preserves-correct-order)

---
2021-01-11 11:06:05

error handling in express [here](https://expressjs.com/en/guide/error-h)

TODO: refactor things based on the suggestions in that post. 

in particular:

```
app.get('/user/:id', async function (req, res, next) {
  var user = await getUserById(req.params.id)
  res.send(user)
})
```

---
2021-01-11 11:16:08

notes on api keys:

nice article [here](https://stoplight.io/blog/api-keys-best-practices-to-authenticate-apis/)

carto's policy [here](https://carto.com/developers/auth-api/guides/how-to-send-API-Keys/)

maybe should now have authorization key in the header.  should just be a matter of checking on the "POST" ... getting a header.  can implement it after this round.

---
2021-01-11 11:25:41

changing name of table in postgres

```
ALTER TABLE table_name 
RENAME COLUMN column_name TO new_column_name;
```
tests:
- case of incoming JSON matter? (likely yes) -- YES
- case of postgres request matter? (likely no)
- what if we don't send all the params?

---
2021-01-11 12:23:53

writing an async function [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

guide to async programming [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

---
2021-01-11 12:32:41

'use-pubkey' is the latest branch.  

using 'async await' in express [here](https://zellwk.com/blog/async-await-express/)

and: definition of 'async / await' [here](https://zellwk.com/blog/async-await)

w/ postgresql [here](https://stackoverflow.com/questions/53910835/using-async-await-with-node-postgres)

started to use promises ...

even better now would be to create a 'getFeedPrivateKey() function and use that in postNewMeasurement()

---
2021-01-11 17:13:28

have now started some 'async' code in branch 'async'. that's the latest working branch.

TODO:  the 'new feed' api should return JSON; the page we land on after creating a new feed in the form should leverage that api.

---
2021-01-11 17:25:43

beginner's guide to pug [here](https://www.sitepoint.com/a-beginners-guide-to-pug/)

cami -- simon's kid

---
2021-01-12 19:02:12

instructions for setting up postgres for habitat on digitalocean

install postgres

```
sudo apt update
sudo apt install postgresql postgresql-contrib
```

> sudo -i -u postgres
> createdb bay1
> psql
> \c bay1

then:

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   username VARCHAR(50),
   password VARCHAR(255),
   is_admin BOOLEAN DEFAULT FALSE
);


CREATE TABLE feeds(
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255),
    private_key VARCHAR(255)
);

CREATE TABLE measurements(
    id SERIAL PRIMARY KEY,
    feed_id INT,
    co2 FLOAT,
    tempC FLOAT,
    humidity FLOAT,
    mic FLOAT,
    auxPressure FLOAT,
    auxTempC FLOAT,
    aux001 FLOAT,
    aux002 FLOAT,    
    created TIMESTAMP DEFAULT NOW(),
    CONSTRAINT feed
        FOREIGN KEY(feed_id)
            REFERENCES feeds(feed_id)
);

check that all is well:

> \dt

change the user password:

> ALTER USER postgres WITH PASSWORD 'pcat999'

> \q
> exit

see better guide [here](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372)

need to make sure .env file is proper:

PORT=3000
DB_NAME=hab1
DB_USER=postgres
DB_PASSWORD=pcat999
DB_HOST=localhost
DB_PORT=5432

key guide [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)
for deploying nodejs server on digitalocean.

has section for adding additional apps on other ports!

setting up nginx on digitalocean guide [here](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

how to set up a firewall on ubuntu [here](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server)

---
2021-01-13 08:05:11

 Its creation was motivated by recent work (e.g. by <a href="https://www.medrxiv.org/content/10.1101/2020.06.15.20132027v2">Jimenez et al.</a>) indicating that monitoring indoor CO2 levels can (in some contexts) help to assess the risk of airborne SARS-CoV-2 transmission.

---
2021-01-13 11:59:26

html to jade thing [here](https://html2jade.org/)

---
2021-01-13 19:20:23

Interesting way to do a drop-down menu via Pug, here:

div(class="choices")
        h2
        p I'm voting for:
        select(class="form-control")
            option 1
            option 2
            option 3
            option 4
            option 5

---
2021-01-14 08:49:52

good example of chart setup here: [view-source:https://www.chartjs.org/samples/latest/charts/line/basic.html](view-source:https://www.chartjs.org/samples/latest/charts/line/basic.html)

Reference for p2p-farm-server chartjs setup [here](https://gitlab.com/dwblair/p2p-farm-server/-/blob/fixhop/public/js/drive.js)

perhaps-useful chartjs formatting [here](https://embed.plnkr.co/JOI1fpgWIS0lvTeLUxUp/)

---
2021-01-21 11:20:38

Structure for a basic todo list app here: [https://codeburst.io/creating-a-todo-app-with-node-js-express-and-postgresql-database-6dbf80c3fe9c](https://codeburst.io/creating-a-todo-app-with-node-js-express-and-postgresql-database-6dbf80c3fe9c)

Associated code on github here: [https://github.com/chisom5/nodejs-todoList](https://github.com/chisom5/nodejs-todoList)


Idea:  
- Make a similar system to Bayou
- Each 'map' has an associated image file, a list of feeds, feed locations
- So everything is indexed by the map, instead of the feed.  The map gets a 'mapkey' and a 'writekey'
- Once you have a mapkey, you can add new feeds to the map, and change the map's metadata

Idea: add nodemon for auto restart of bayou while developing

Using React-like library 'Riot' here: [https://hub.packtpub.com/simple-todo-list-web-application-nodejs-express-and-riot/](https://hub.packtpub.com/simple-todo-list-web-application-nodejs-express-and-riot/), with associated code here: [https://github.com/revington/riot-express-todo-list}](https://github.com/revington/riot-express-todo-list)

Drawing a grid on a canvas here [https://codereview.stackexchange.com/questions/114702/drawing-a-grid-on-canvas](https://codereview.stackexchange.com/questions/114702/drawing-a-grid-on-canvas)

postgres tutorial again here: [https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372](https://able.bio/rhett/creating-a-web-application-in-your-home-with-a-raspberry-pi-express-and-postgresql--3c90a372)

---
2021-01-21 11:38:40


Simpler todo app approach here -- these are the elements I think I need -- [https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f](https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f)

And on github: [https://github.com/missating/nodejs-todo](https://github.com/missating/nodejs-todo)

Okay -- TODO: redo that last repo, using pug.
Then create feedmaps -- the equiv of bayou but by pulling in new feeds from various sources.  depending on the type of feed, can have various functionality.  so, add a 'feed type' variable -- e.g. bayou-co2 is one such type.

---
2021-01-21 12:10:58

Iteration in pug here: [https://pugjs.org/language/iteration.html](https://pugjs.org/language/iteration.html)

---
2021-01-21 12:42:26

feed-map can now display a simple list of feeds here: [https://github.com/edgecollective/feed-map/commit/4d3a522ba01f0bae15721fe0420100dcf76fd1a8](https://github.com/edgecollective/feed-map/commit/4d3a522ba01f0bae15721fe0420100dcf76fd1a8)

![](/img/alt-server/feemap1.png)

---
2021-01-21 17:22:56

Creating dynamic ides in a loop with pug here [https://www.dev-tips-and-tricks.com/create-dynamic-ids-in-a-loop-with-pug-jade](https://www.dev-tips-and-tricks.com/create-dynamic-ids-in-a-loop-with-pug-jade)

Update: this commit shows the basic functionality!

[https://github.com/edgecollective/feed-map/commit/765a9eec9b101e0e507075ec3b0e6aae8b9fec3b](https://github.com/edgecollective/feed-map/commit/765a9eec9b101e0e507075ec3b0e6aae8b9fec3b)

![](/img/alt-server/feedmap1.png)

Added nicer formatting:

![](/img/alt-server/feedmap2.png)

Associated git commit is here: [https://github.com/edgecollective/feed-map/commit/6f449c02024013035f1d42cd264505fb0066018e](https://github.com/edgecollective/feed-map/commit/6f449c02024013035f1d42cd264505fb0066018e)

---
2021-01-21 18:28:59

Nice reference for doing the map, via p2p-server code, here:

[https://gitlab.com/dwblair/p2p-farm-server/-/blob/mappin/public/console.html](https://gitlab.com/dwblair/p2p-farm-server/-/blob/mappin/public/console.html)

---
2021-01-21 18:39:13

Got image map working!  at this commit -- [https://github.com/edgecollective/feed-map/commit/72e90916c5bf5b21d748a5e4e54451f93a25c654](https://github.com/edgecollective/feed-map/commit/72e90916c5bf5b21d748a5e4e54451f93a25c654)

---
2021-01-21 18:46:53

Got markers working! commit -- [https://github.com/edgecollective/feed-map/commit/2e4281fc405246c231ce817b35ee4f99f7d9b80c](https://github.com/edgecollective/feed-map/commit/2e4281fc405246c231ce817b35ee4f99f7d9b80c)

---
2021-01-21 19:01:20

More formatting tweaks -- [https://github.com/edgecollective/feed-map/commit/2b81f2f1154ddf1e6ffa11d2d5cd1b8ecb0260ce](https://github.com/edgecollective/feed-map/commit/2b81f2f1154ddf1e6ffa11d2d5cd1b8ecb0260ce)

![](/img/alt-server/feedmap3.png)

---
2021-01-22 11:16:31

Created a 'checkbox' functionality, and also have charts graphed separately, in this commit and branch: [https://github.com/edgecollective/feed-map/commit/e75252d43b287c398a6e82fa02e1599dfe307711](https://github.com/edgecollective/feed-map/commit/e75252d43b287c398a6e82fa02e1599dfe307711)

![](/img/alt-server/exploded.png)

---
2021-01-22 14:14:58

Note: this is the nodejs-todo app I built feedmap upon, which has a nice 'delete note' functionality: [https://github.com/missating/nodejs-todo](https://github.com/missating/nodejs-todo)

This code might be useful re: deleting items in postgres: [https://codeburst.io/creating-a-todo-app-with-node-js-express-and-postgresql-database-6dbf80c3fe9c](https://codeburst.io/creating-a-todo-app-with-node-js-express-and-postgresql-database-6dbf80c3fe9c)

Here's a nice guide on using knex -- [https://medium.com/@tobie.tsuzuki/getting-started-with-node-js-express-and-knex-5640f595df98](https://medium.com/@tobie.tsuzuki/getting-started-with-node-js-express-and-knex-5640f595df98)

Interesting post on sequelize vs knex vs objection.js here: [https://stackoverflow.com/questions/56028287/how-is-node-js-knex-similar-different-to-sequelize](https://stackoverflow.com/questions/56028287/how-is-node-js-knex-similar-different-to-sequelize)

And an interesting link here: [https://www.jakso.me/blog/objection-to-orm-hatred](https://www.jakso.me/blog/objection-to-orm-hatred) -- looks like objection.js might be a great idea.

---
2021-01-22 14:31:57

Overlay line on chart.js [https://stackoverflow.com/questions/28076525/overlay-line-on-chart-js-graph](https://stackoverflow.com/questions/28076525/overlay-line-on-chart-js-graph)

---
2021-01-22 14:43:27

Good example of chartjs datasets: [https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/#2-line-chart](https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/#2-line-chart)

---
2021-01-22 18:34:46

Now plotting multiple co2 plots!  at this commit: [https://github.com/edgecollective/feed-map/commit/91adae48079a21fcf9fcc286ccd85a7ac2a68e91](https://github.com/edgecollective/feed-map/commit/91adae48079a21fcf9fcc286ccd85a7ac2a68e91)

![](/img/alt-server/feedmap4.png)

---
2021-01-22 18:42:23

Hosting via google drive here: [https://stackoverflow.com/questions/10311092/displaying-files-e-g-images-stored-in-google-drive-on-a-website](https://stackoverflow.com/questions/10311092/displaying-files-e-g-images-stored-in-google-drive-on-a-website)

---
2021-01-22 18:56:25

Add asylum map:

![](/img/alt-server/feedmap_asylum.png)

git commit: [https://github.com/edgecollective/feed-map/commit/fce79dc266a8ee5696a7da75c2a7177722128f80](https://github.com/edgecollective/feed-map/commit/fce79dc266a8ee5696a7da75c2a7177722128f80)

---
2021-01-23 10:15:25

Revisiting my own documentation / repo for a minimal node + sqlite endpoint here [https://github.com/edgecollective/nodejs-sqlite-endpoint](https://github.com/edgecollective/nodejs-sqlite-endpoint)

---
2021-01-23 15:38:16

Good tutorial for sqlite3: [https://www.sqlitetutorial.net/sqlite-nodejs/query/](https://www.sqlitetutorial.net/sqlite-nodejs/query/)

---
2021-01-23 15:52:07

Using sqlite3 with async await here: [https://www.scriptol.com/sql/sqlite-async-await.php](https://www.scriptol.com/sql/sqlite-async-await.php)

---
2021-01-23 16:12:29

Switching back to postgres:

Installing postgres:

```
sudo apt update
sudo apt install postgresql postgresql-contrib
```

Then:

```
sudo -i -u postgres
createdb feedmap1;
psql feedmap1
```

then:

```
CREATE TABLE feedmaps(
    feedmap_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255),
    private_key VARCHAR(255),
    map_url VARCHAR(255)
);

CREATE TABLE feeds(
    id SERIAL PRIMARY KEY,
    feedmap_id INT,
    feed_base_url VARCHAR(255),
    feed_public_key VARCHAR(255),
    added TIMESTAMP DEFAULT NOW(),
    CONSTRAINT feedmap
        FOREIGN KEY(feedmap_id)
            REFERENCES feedmaps(feedmap_id)
);
```

---
2021-01-23 22:14:02

New branch -- postgres -- mimics features of Bayou-CO2.

Basic working setup here: [https://github.com/edgecollective/feed-map/commit/6dd02a33311bcdbaed57a3bdf54b0070a342d6a1](https://github.com/edgecollective/feed-map/commit/6dd02a33311bcdbaed57a3bdf54b0070a342d6a1)

![](/img/alt-server/feedmap_manage.png)

Notes:

- Can do similar forms to 'create' and 'manage' a feedmap; to 'manage', need to enter pubkey and privkey -- can follow format of bayou-CO2 ...

Flow:
- Create a feedmap
- Then, you get sent to the 'manage' page.  
- You can also get to the 'manage' page by entering a pubkey and privkey for a feed. 
- Perhaps there is a 'manage' button on the feed landing page, which then prompts for a privatekey, then takes you to the 'manage' page.
- Would be nice to be able to change the map, and modify the feeds; but at first, okay if it's 'throwaway' and you need to start over ...

---
2021-01-26 14:53:50

Adding x,y coord display over image, here: [https://stackoverflow.com/questions/7414984/how-could-i-display-x-y-coordinates-on-image-in-real-time-to-the-user-when-the](https://stackoverflow.com/questions/7414984/how-could-i-display-x-y-coordinates-on-image-in-real-time-to-the-user-when-the)

---
2021-01-26 20:59:05

Getting close w/ feedmaps! [https://gitlab.com/p-v-o-s/co2/feedmap/-/commit/15b5d91c469c17b3fbbd03ba5ab6b6eaf0b70869](https://gitlab.com/p-v-o-s/co2/feedmap/-/commit/15b5d91c469c17b3fbbd03ba5ab6b6eaf0b70869)

![](/img/alt-server/manage_feeds.png)

The issue now is that we need to add "shortname" and "coords" to each feed listed in the feedmap database.  
Need to modify the database.

Also: need to remove "name" from the bayou-co2. Perhaps just use the first few chars as the "name".  

---
2021-01-27 11:14:20

![](/img/alt-server/manage_feeds_c.png)

---
2021-01-27 19:55:39

Feedmap hacking:
[http://192.168.1.163:4006/feedmap/manage/7a66feb586010296bb03fc01967a89ac7b1f9b41388db6ff/1f79e0a2d7159495e9be3cb545c83911147035130a2b9fba](http://192.168.1.163:4006/feedmap/manage/7a66feb586010296bb03fc01967a89ac7b1f9b41388db6ff/1f79e0a2d7159495e9be3cb545c83911147035130a2b9fba)

---
2021-01-29 22:14:01


# Setting up postgres on the Pi

## Installing

> sudo apt update
> sudo apt install postgresql postgresql-contrib

## Creating DB

 > sudo -i -u postgres
 > postgres@raspberrypi:~$ createdb hab1
 > postgres@raspberrypi:~$ psql hab1

CREATE TABLE feeds(
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
     public_key VARCHAR(255),
     private_key VARCHAR(255)
;

CREATE TABLE measurements(
id SERIAL PRIMARY KEY,
feed_id INT,
co2 FLOAT,
tempC FLOAT,
humidity FLOAT,
mic FLOAT,
auxPressure FLOAT,
auxTempC FLOAT,
aux001 FLOAT,
aux002 FLOAT,    
created TIMESTAMP DEFAULT NOW(),
CONSTRAINT feed
 FOREIGN KEY(feed_id)
REFERENCES feeds(feed_id)
;

(exit psql and postgres with "exit" )

## Changing password

> sudo -i -u postgres
> psql
> postgres=# ALTER USER postgres WITH PASSWORD 'pcat999'

---
2021-02-04 09:23:33

"Part 1: Create an application using PostgreSQL, Express, React and Node.js stack"

[https://medium.com/javascript-in-plain-english/create-a-fullstack-banking-application-using-react-e8c96d74cd39](https://medium.com/javascript-in-plain-english/create-a-fullstack-banking-application-using-react-e8c96d74cd39)

---
2021-02-07 11:54:58

DATA STRUCTURE REDESIGN NOTES:

Here's a slight database redesign (I think I can do this in a day or so) that, based on your investigations thus far, might improve usability.

A 'gaggle' consists of the data feeds coming from a wifi-lora gateway, plus up to 8 remote nodes that are associated with it.  

Node IDs are fixed on the remote nodes using hardware switches that admit of 8 possible states.

Each node ID will always get the same 'color' in the graph; i.e. Node 0 is 'blue', Node 1 is 'red'.  

Instead of creating individual 'feeds' on Bayou, you will now create 'gaggles'.  You'll get a pub + priv key pair, which goes into that gaggles' gateway node's configuration file ("config.h"). 

We now also introduce the concept of "local lora group ID" -- a short, random key of 3 chars, which the gateway and lora nodes both share, independent of the gaggle pub + priv key.

Gateways only process lora data from their own "lora group", rejecting any other lora info coming in.  (This avoids lora conflicts at Library HQ, when setting up multiple 'gaggles').

When you want to switch a gateway to a new gaggle, you create a new gaggle on Bayou, and reprogram the gateway with the new gaggle pub_key and priv_key, but you keep the lora group_key ... so that you don't need to reprogram the associated lora nodes at all.

---

In other words, the setup sequence is:

1. Create a new 'gaggle' on Bayou, giving you a new gaggle pub_key and priv_key pair.
2. Choose a local 'lora group' shortkey to identify your local lora network.
3. Program the gaggle pub_key and priv_key, as well as the lora group key, into the gateway.
4. Program the lora group key into all of the remote nodes.
5. Set the 'hardware switches' on the remote nodes to indicate which node number they are on the network.

If you want to create a new gaggle, you just create a new gaggle on Bayou, and reprogram the gateway with the new gaggle pub_key and priv_key, but keep the lora group key the same.  That way the remote nodes don't need to be reprogrammed.

Each remote node, on boot, 'measures' its local hardware node ID number.  When it broadcasts, it sends its lora group key and its node ID along with its sensor data. 

The gateway only listens for lora messages from lora nodes within its lora group.  When it receives a lora message from its group, it sends it along to Bayou.  

----

So the gateway config file will look like:

const char *SSID = "pvosPi";
const char *WiFiPassword = "12345678";
const char* bayou_base_url = "192.168.4.1:3000/co2/data";
const char* gaggle_pub_key = "62be3698ed7917a7da588750de28d0ac2030c1c12a5c1c6d";
const char* gaggle_priv_key = "f02d003674065fb2e9199bf39d602532324fdc1d5a041ab4";
char char* lora_groupkey = "a1c";
const int interval_sec = 10;
const int forcePPM = 400;

And the remote config files (all identical to one another, but specific to this lora group) will look like:

char char* lora_group_key = "a1c";
const int interval_sec = 10;
const int forcePPM = 400;

```
sudo -i -u postgres
createdb feedmap1;
psql feedmap1
```

then:

```
CREATE TABLE feeds(
    gaggle_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255),
    private_key VARCHAR(255)
);

CREATE TABLE feeds(
    id SERIAL PRIMARY KEY,
    gaggle_id INT,
    node_id INT,
    added TIMESTAMP DEFAULT NOW(),
    CONSTRAINT gaggle
        FOREIGN KEY(gaggle_id)
            REFERENCES gaggles(gaggle_id)
);


CREATE TABLE measurements(
id SERIAL PRIMARY KEY,
feed_id INT,
co2 FLOAT,
tempC FLOAT,
humidity FLOAT,
mic FLOAT,
auxPressure FLOAT,
auxTempC FLOAT,
aux001 FLOAT,
aux002 FLOAT, 
log VARCHAR(255),   
created TIMESTAMP DEFAULT NOW(),
CONSTRAINT feed
 FOREIGN KEY(feed_id)
REFERENCES feeds(feed_id)
;

```

Retrying ...

```
CREATE TABLE feeds(
    gaggle_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255),
    private_key VARCHAR(255)
);

CREATE TABLE feeds(
    id SERIAL PRIMARY KEY,
    gaggle_id INT,
    node_id INT,
    added TIMESTAMP DEFAULT NOW(),
    CONSTRAINT gaggle
        FOREIGN KEY(gaggle_id)
            REFERENCES gaggles(gaggle_id)
);


CREATE TABLE measurements(
id SERIAL PRIMARY KEY,
feed_id INT,
co2 FLOAT,
tempC FLOAT,
humidity FLOAT,
mic FLOAT,
auxPressure FLOAT,
auxTempC FLOAT,
aux001 FLOAT,
aux002 FLOAT, 
log VARCHAR(255),   
created TIMESTAMP DEFAULT NOW(),
CONSTRAINT feed
 FOREIGN KEY(feed_id)
REFERENCES feeds(feed_id)
;

```

```
CREATE TABLE feeds(
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255),
    private_key VARCHAR(255)
;

CREATE TABLE measurements(
id SERIAL PRIMARY KEY,
feed_id INT,
co2 FLOAT,
tempC FLOAT,
humidity FLOAT,
mic FLOAT,
auxPressure FLOAT,
auxTempC FLOAT,
aux001 FLOAT,
aux002 FLOAT,    
created TIMESTAMP DEFAULT NOW(),
CONSTRAINT feed
 FOREIGN KEY(feed_id)
REFERENCES feeds(feed_id)
;
```

----
2021-02-07 18:11:34

Nano ID here: [https://medium.com/javascript-in-plain-english/you-might-not-need-uuid-v4-for-generating-random-identifiers-89e8a28a7d77](https://medium.com/javascript-in-plain-english/you-might-not-need-uuid-v4-for-generating-random-identifiers-89e8a28a7d77)

short uuid -- [https://www.npmjs.com/package/short-uuid](https://www.npmjs.com/package/short-uuid)

[https://gist.github.com/6174/6062387](https://gist.github.com/6174/6062387) -- generate random string in short and fast way 

nice collection of resources [here](https://www.xspdf.com/resolution/59806960.html)

short unique id [here](https://shortunique.id/)

this seems v good! https://shortunique.id/

https://betterexplained.com/articles/the-quick-guide-to-guids/

user-facing unique uuids -- https://dev.to/yeo_alexandra/creating-user-facing-short-unique-ids-what-are-the-options-8mn

generate a unique short id here: https://gnugat.github.io/2018/06/15/short-identifier.html

oooh this is a pretty good argument: https://neilmadden.blog/2018/08/30/moving-away-from-uuids/

good list of unique id thingies: https://github.com/grantcarthew/awesome-unique-id

nanoid -- https://github.com/ai/nanoid/

https://stackoverflow.com/questions/54338808/how-to-generate-unique-numeric-short-id-in-nodejs

good reading here: https://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js

looks like using nanoid w/ 11 characters would be the thing!

https://zelark.github.io/nano-id-cc/

---

using the unique constraint: https://www.postgresqltutorial.com/postgresql-unique-constraint/

using indexes: https://www.postgresql.org/docs/9.1/indexes-intro.html

---
2021-02-08 09:11:55

back to basics ...

## Creating DB

```
sudo -i -u postgres
postgres@raspberrypi:~$ createdb hab3
postgres@raspberrypi:~$ psql hab3


CREATE TABLE feeds(
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255) UNIQUE,
    private_key VARCHAR(255) 
);

CREATE TABLE measurements(
id SERIAL PRIMARY KEY,
feed_id INT,
co2 FLOAT,
tempC FLOAT,
humidity FLOAT,
mic FLOAT,
auxPressure FLOAT,
auxTempC FLOAT,
aux001 FLOAT,
aux002 FLOAT,
log VARCHAR(255),    
created TIMESTAMP DEFAULT NOW(),
CONSTRAINT feed
 FOREIGN KEY(feed_id)
REFERENCES feeds(feed_id)
);

```

---
2021-02-08 09:35:02

installing nano-id:  [https://github.com/ai/nanoid](https://github.com/ai/nanoid)

ah, here's an async approach:

[https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function](https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function)


deleting rows in the table!

https://www.postgresqltutorial.com/postgresql-delete/

with some condition here: [https://stackoverflow.com/questions/5170546/how-do-i-delete-a-fixed-number-of-rows-with-sorting-in-postgresql](https://stackoverflow.com/questions/5170546/how-do-i-delete-a-fixed-number-of-rows-with-sorting-in-postgresql)

---
2021-02-08 13:52:07

Shortened keys, and added ability to delete a feed of historical data!

----
2021-02-08 15:15:31

adding feedmaps2

```
CREATE TABLE feedmaps(
    feedmap_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    public_key VARCHAR(255) UNIQUE,
    private_key VARCHAR(255),
    map_url VARCHAR(255)
);

CREATE TABLE feeds(
    id SERIAL PRIMARY KEY,
    feedmap_id INT,
    feed_base_url VARCHAR(255),
    feed_public_key VARCHAR(255),
    added TIMESTAMP DEFAULT NOW(),
    CONSTRAINT feedmap
        FOREIGN KEY(feedmap_id)
            REFERENCES feedmaps(feedmap_id)
);
```

---

okay, latest to play with is here:

http://192.168.1.163:4000/feedmap/manage/bda90e5b319c2e8b15e882ca950e7baf96bc362366828283/5693cc45409f6d89adc293489e1154f0430c7d723ccb2a05

---
2021-02-08 21:02:13

![](/img/co2/colors.png)

---
2021-02-09 12:27:25

Setting up a nodejs server for production [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

---
2021-02-09 12:30:29

Additional entry points via nginx here: [https://snapshooter.io/blog/how-to-run-nodejs-server-with-nginx](https://snapshooter.io/blog/how-to-run-nodejs-server-with-nginx)

---
2021-02-09 13:03:10

setting up server with nodejs

first added an A record for 'subdomain' at pvos, pointing to IP address of new droplet.

then on new droplet:

ufw: [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04)

setting up nodejs for production [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)

generating a new ssh key [https://docs.gitlab.com/ee/ssh/README.html#generate-an-ssh-key-pair](https://docs.gitlab.com/ee/ssh/README.html#generate-an-ssh-key-pair)

set up pm2

set up nginx [https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

after running nginx, i basically just tweaked the default

```
sudo vi /etc/nginx/sites-available/default
```

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        # SSL configuration
        #
        # listen 443 ssl default_server;
        # listen [::]:443 ssl default_server;
        #
        # Note: You should disable gzip for SSL traffic.
        # See: https://bugs.debian.org/773332
        #
        # Read up on ssl_ciphers to ensure a secure configuration.
        # See: https://bugs.debian.org/765782
        #
        # Self signed certs generated by the ssl-cert package
        # Don't use them in a production server!
        #
        # include snippets/snakeoil.conf;

        root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                #try_files $uri $uri/ =404;
                proxy_pass http://localhost:4000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

        # pass PHP scripts to FastCGI server
        #
        #location ~ \.php$ {
        #       include snippets/fastcgi-php.conf;
        #
        #       # With php-fpm (or other unix sockets):
        #       fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        #       # With php-cgi (or other tcp sockets):
        #       fastcgi_pass 127.0.0.1:9000;
        #}
```
---
2021-02-09 15:03:51

working demo here [https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/4698789d79c3dd6b9c3a8fa88651ba4909c66e9d](https://gitlab.com/p-v-o-s/co2/feedmap/-/tree/4698789d79c3dd6b9c3a8fa88651ba4909c66e9d)

