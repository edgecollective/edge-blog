---
pageTitle: Misc Electronics Notes
layout: layout.njk
date: Last Modified
updated: 2021-11-12
tags: notes 
image: /img/tronics/multimeter.png
blurb: General notes on electronics and related equipment
---

---
2021-11-12 18:32:19

Checking fuse / replacing fuse on multimeters: [https://www.youtube.com/watch?v=-SRz7kR4ovQ](https://www.youtube.com/watch?v=-SRz7kR4ovQ)

User manual for AstroAI WH5000A: [https://d3gqasl9vmjfd8.cloudfront.net/788585cc-f098-4448-b840-a22477ad9b5e.pdf](https://d3gqasl9vmjfd8.cloudfront.net/788585cc-f098-4448-b840-a22477ad9b5e.pdf)

---
2022-02-05 18:46:22

Jupyter in the browser:

[https://jupyterlite.readthedocs.io/en/latest/_static/lab/index.html](https://jupyterlite.readthedocs.io/en/latest/_static/lab/index.html)

[https://blog.jupyter.org/jupyterlite-jupyter-%EF%B8%8F-webassembly-%EF%B8%8F-python-f6e2e41ab3fa](https://blog.jupyter.org/jupyterlite-jupyter-%EF%B8%8F-webassembly-%EF%B8%8F-python-f6e2e41ab3fa)

---
2022-02-08 12:05:58

Accessing FarmOS via jupyterlite ...

Using oauth via fetch: [https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/](https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/)

https://farmos.org/development/farmos-py/

https://farmos.discourse.group/t/csv-importers-in-v2-x/942/33

pip3 install farmOS~=1.0.0b

https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module

https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/creating-new-resources-post

https://github.com/farmOS/farmOS.py

https://github.com/jupyterlite/jupyterlite/discussions/412

https://pyodide.org/en/stable/usage/faq.html#how-can-i-use-fetch-with-optional-arguments-from-python    

https://stackoverflow.com/questions/64789154/how-can-i-use-the-post-api-using-pyodide

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials

https://farmos.discourse.group/t/api-problem-with-curl/317/9

authorization and token URLS:

https://mstenta.github.io/farmOS/development/api/changes/

combine these discussions with: https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/ <-- key discussion!

https://github.com/farmOS/farmOS.js?files=1

---
2022-02-08 12:14:35

This looks like key line in farmOS.py -- [https://github.com/farmOS/farmOS.py/blob/f13afa0450fe49144d28c60ff7dc133d47e29f2f/farmOS/session.py#L53](https://github.com/farmOS/farmOS.py/blob/f13afa0450fe49144d28c60ff7dc133d47e29f2f/farmOS/session.py#L53)

API problem with CURL [https://farmos.discourse.group/t/api-problem-with-curl/317](https://farmos.discourse.group/t/api-problem-with-curl/317)

[https://farmos.org/development/api/authentication/](https://farmos.org/development/api/authentication/)

[https://github.com/farmOS/farmOS.py/blob/f13afa0450fe49144d28c60ff7dc133d47e29f2f/farmOS/__init__.py#L85](https://github.com/farmOS/farmOS.py/blob/f13afa0450fe49144d28c60ff7dc133d47e29f2f/farmOS/__init__.py#L85)

curl -X POST -d "grant_type=password&username=username&password=test&client_id=farm&scope=user_access" http://localhost/oauth/token

[https://farmos.org/development/farmos-py/client_2x/](https://farmos.org/development/farmos-py/client_2x/)

![](/img/farmos/land.png)

information about farmos 2.0: [https://farmos.org/development/api/changes/](https://farmos.org/development/api/changes/)

Getting data into jupyterlite [https://github.com/jupyterlite/jupyterlite/issues/119](https://github.com/jupyterlite/jupyterlite/issues/119)