---
layout: post
lang: en
template: English
date: 2021-07-01
timezone: 8
type: ''
tags: 
    - meson
zh-sg: []
zh-tw: []
title: "Meson enhance Arweave"
image: ''
---

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271428715.png)

**How to use Meson to enhance Arweave**

Upload a file to Arweave network and get dataTxId.

```
{“name”: “Top Gun Maverick 2021 New Trailer Paramount Pictures_1080p.mp4”, “size”: 27433229, “lastModifiedDate”: 1624960183753,
“dataTxId”: “-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k”, “dataContentType”: “video/mp4”}
```

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271428159.png)

```
Open it in official gateway:
https://arweave.net/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

**Now, let’s use Meson Network to optimize the global delivery for this file.**

```
The format:
https://coldcdn.com/api/cdn/arweave/ + ‘arweave_file_id’
=>
https://coldcdn.com/api/cdn/arweave/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

The link jumps to a specific node to serve the request, dekiekbbhkceexx is the hash of node.

```
https://arweave-dekiekbbhkceexx.shoppynext.com:1302/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k-redirecter456gt
```

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271430139.png)

**The difference between the storage layer and cache layer**

The design philosophy of the storage layer and cache layer in blockchain world is quite different. The storage layer contains these principles at least:

- Data Integrity: Take a proactive stance to protect referential integrity and reduce instances of redundancy or potential for inconsistency.
- Consistency: The data consistency model specifies a contract between programmer and system, wherein the system guarantees that if the programmer follows the rules, storage will be consistent and the results of reading, writing, or updating storage will be predictable.
- Confidentiality: Clients that desire for their data to be stored privately.

As for the cache layer, focus more on the experience while delivering the data to users, e.g. choose and optimize a better router, the load for the transfer system, the life cycle of the files stored in nodes.

## Meson Mechanism

We have the file-TXID in storage layer(e.g. arweave). The TXID will be mirrored to some meson nodes on the first user request. And if the requests for TXID increase, the TXID will be mirrored to more meson nodes. The auto-scaling mechanism will bring a very fast and good user experience.

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271431356.png)

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271431058.png)

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271432888.png)

![](https://raw.githubusercontent.com/bitruss/img/main/2021/202205271432001.png)

## About Meson Network

Meson Network is committed in creating an efficient bandwidth marketplace on Web3, using blockchain protocol model to replace the traditional labor based sales models, consolidating and monetizing idle bandwidth from long-tail users with low cost. Meson is the foundation of data transmission for decentralized storage, computation and the emerging Web3 dapp ecosystem.