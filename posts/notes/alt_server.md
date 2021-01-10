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



