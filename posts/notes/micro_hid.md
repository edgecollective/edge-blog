---
pageTitle: Microcontroller HID input
layout: layout.njk
date: 2020-10-19
updated: 2020-10-19
tags: notes 
image: /img/feedgen.png
blurb: Notes on setting up microcontrollers as HID devices
---

## Misc notes

### HID micro code

Very easy example for keyboard and mouse that works with a Feather M0, no special libraries needed, [here](https://www.arduino.cc/en/Tutorial/BuiltInExamples/KeyboardAndMouseControl).

### HTTP POST requests in browser

HTTP POST in javascript guide [here](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/).

Another nice tutorial [here](https://www.kirupa.com/html5/making_http_requests_js.htm)

A tutorial on fetch in particular is [here](https://stackabuse.com/using-fetch-to-send-http-requests-in-javascript/)

## Browser listening to keyboard presses

jquery approach [here](https://stackoverflow.com/questions/7600892/respond-to-key-press-javascript)

more elaborate description [here](https://www.cryer.co.uk/resources/javascript/script20_respond_to_keypress.htm)

cross-browser support [here](https://medium.com/@uistephen/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a)

## Android listening to keyboard presses

Suggestion of using Accessibility Services, [here](https://stackoverflow.com/questions/2986337/is-it-possible-to-create-an-android-service-that-listens-for-hardware-key-presse)

## Work Log

---
18 OCT 2020

Working example [here](https://github.com/edgecollective/micro-hid) -- presses the 'u' key on a button press. 

Working example for multiple buttons [here](https://github.com/edgecollective/micro-hid/tree/main/key_multi).  Video demo [here](https://www.youtube.com/watch?v=x7i3M5QsfW0).  Or click below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/x7i3M5QsfW0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



