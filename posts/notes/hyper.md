---
pageTitle: Experiments with the Hyper Protocol 
layout: layout.njk
date: 2020-10-09
updated: 2020-10-09
tags: notes 
image: img/airpipe.png
blurb: Experiments with the Hyper Protocol
---

---

## Hyperssh

The following is all based on the excellent [hyperssh](https://github.com/mafintosh/hyperssh) NodeJs package by @mafintosh.

### Installing hyperssh on Ubuntu 18.04

1. First install openssh-server if not present:

> ```sudo apt-get install openssh-server```

2. Grab the hyperssh repo:

> ```git clone https://github.com/mafintosh/hyperssh.git```

3. Enter the hyperssh directory; then install it:

> ```cd hyperssh```

> ```npm install```

4. Create symbolic links for nicer command-line usage:

> ```npm link```

### Using hyperssh

(Copied from the [Hyperssh README](https://github.com/mafintosh/hyperssh))

On a server or some laptop with ssh-server running run

```sh
hyperssh-server
```

This will print out the ssh fingerprint and start announcing the server
on the Hyperswarm network under this fingerprint.

To connect to the server on another computer simply pass in the fingerprint
and the user you want to connect as to hyperssh

```sh
hyperssh ssh-ed25519 AAAA.... maf
```


---

## Misc. Hyper resources & tools

[Hyper-git](https://github.com/noffle/hypergit)

[hyper sshuttle](https://github.com/joehand/hypersshuttle)

[hyper ssh](https://github.com/mafintosh/hyperssh)

[airpipe](https://github.com/noffle/airpipe)

[Hyperspace](https://blog.hypercore-protocol.org/posts/hyperspace/)

[Talk about Hyperbee](https://twitter.com/feross/status/1305612758667259904?s=20)