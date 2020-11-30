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