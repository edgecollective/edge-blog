---
layout: front.njk
pageTitle: Intro to Mesh Radio Kit — Edge Collective Shop
---

<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css" />

<style>
.product-page { max-width: 800px; margin: 0 auto; }
.product-page-header { text-align: center; margin-bottom: 24px; }
.product-page-header h2 { margin: 0 0 4px; }
.product-page-image { text-align: center; margin-bottom: 24px; }
.product-page-image img { max-width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px; border: 1px solid #ddd; }
.product-page-price { font-size: 24px; font-weight: 600; color: #2a7a5a; margin: 0 0 16px; text-align: center; }
.product-page-details { font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 24px; }
.product-page-actions { text-align: center; margin-bottom: 24px; }
.snipcart-add-item { display: inline-block; background: #2a7a5a; color: #fff !important; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; text-decoration: none !important; }
.snipcart-add-item:hover { background: #1f5c44; }
.cart-button { display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #ccc; padding: 8px 18px; border-radius: 999px; font-size: 14px; font-weight: 500; color: #333; cursor: pointer; margin-bottom: 16px; }
.cart-button:hover { background: #f0f0f0; }
.badge-tag { display: inline-block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; background: lightblue; color: #333; padding: 2px 8px; border-radius: 999px; margin-bottom: 8px; }
.back-link { display: inline-block; margin-bottom: 16px; font-size: 14px; }

/* ── Configuration / Options ── */
.product-options {
  background: #f9f9f7;
  border: 1px solid #e0e0dc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}
.product-options h3 {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  text-align: center;
  background: none;
  border: none;
  padding: 0;
  width: auto;
}
.option-group {
  margin-bottom: 14px;
}
.option-group:last-of-type {
  margin-bottom: 18px;
}
.option-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 4px;
}
.option-group select,
.option-group input[type="number"] {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background: #fff;
  color: #333;
}
.option-group input[type="number"] {
  width: 80px;
}
.options-add-btn {
  text-align: center;
}
</style>

<div class="product-page">

<a href="/shop/" class="back-link">&larr; Back to Shop</a>

<div style="text-align: center; margin-bottom: 8px;">
<button class="cart-button snipcart-checkout">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
  Cart (<span class="snipcart-items-count">0</span>) &mdash; $<span class="snipcart-total-price">0.00</span>
</button>
</div>

<div class="product-page-header">
<span class="badge-tag">Kit</span>

## Intro to Mesh Radio Kit

</div>

<div class="product-page-image">
<img src="/img/mesh/mesh_starter_kit.png" alt="Intro to Mesh Radio Kit: MeshCore repeater (Heltec V3) plus two MeshCore clients with GPS (Heltec V4)" />
</div>

<div class="product-page-price">$120.00</div>

<!-- ── Configuration & Add to Cart ── -->
<div class="product-options">
<h3>Configure Your Order</h3>

<div class="option-group">
  <label for="qty-intro">Quantity</label>
  <input type="number" id="qty-intro" min="1" max="5" value="1" onchange="document.getElementById('intro-btn').setAttribute('data-item-quantity', this.value)" />
</div>

<div class="options-add-btn">
  <button class="snipcart-add-item" id="intro-btn"
    data-item-id="intro-mesh-radio-kit"
    data-item-name="Intro to Mesh Radio Kit"
    data-item-price="120.00"
    data-item-url="/shop/intro-mesh-radio-kit/"
    data-item-description="Three-node MeshCore starter kit: two Heltec V4 client nodes with GPS and battery, plus a Heltec V3 repeater"
    data-item-image="/img/mesh/mesh_starter_kit_4x3.png"
    data-item-weight="700"
    data-item-quantity="1"
    data-item-max-quantity="5">
    Add to Cart
  </button>
</div>
</div>

<div class="product-page-details">

The fastest way to get started with off-grid mesh radio: a complete **three-node MeshCore network in a box**. Two GPS-equipped, battery-powered client nodes travel with you — one for each person — while a dedicated repeater extends your range from a window, rooftop, or hilltop. You'll see encrypted messages and position reports hopping across a real mesh from day one. No cell towers, no internet, no subscriptions.

**2× Client node (Heltec WiFi LoRa 32 V4) — MeshCore companion firmware:**

- ESP32-S3 dual-core microcontroller, SX1262 LoRa radio (915 MHz, up to 28dBm TX)
- Quectel L76K GNSS (GPS) module for live position reporting on the mesh
- Rechargeable battery — runs untethered for days of normal mesh use
- OLED display, USB-C charging, SMA LoRa antenna + GNSS antenna
- USB-C cable included with each node

**1× Repeater node (Heltec WiFi LoRa 32 V3) — MeshCore repeater firmware:**

- ESP32-S3 microcontroller, SX1262 LoRa radio (915 MHz)
- 0.96" OLED display showing repeater status
- USB-C powered — plug it in near a window (or up high) and leave it on
- SMA LoRa antenna, USB-C cable, and charger dongle included

**How it works:** The two V4 clients come pre-loaded with MeshCore companion firmware — pair your phone to one over Bluetooth and you can exchange end-to-end encrypted messages and watch each other's GPS positions on the map. The V3 comes pre-loaded with MeshCore repeater firmware: unlike a client, its whole job is to relay traffic, so parking it in a window or on a rooftop meaningfully stretches how far apart the two clients can roam. This is MeshCore's core architecture — dedicated repeaters in good locations, lightweight clients in your pocket — and your kit demonstrates it out of the box.

- Range: 1–5 km line-of-sight per hop (varies with terrain and antenna placement); the repeater doubles your effective client-to-client range
- Frequency: 915 MHz (US ISM band)
- Works with the wider MeshCore network — your three nodes are the seed of a neighborhood-scale mesh

</div>

<!-- Repeat Add to Cart at bottom -->
<div class="product-page-actions">
<button class="snipcart-add-item"
  data-item-id="intro-mesh-radio-kit"
  data-item-name="Intro to Mesh Radio Kit"
  data-item-price="120.00"
  data-item-url="/shop/intro-mesh-radio-kit/"
  data-item-description="Three-node MeshCore starter kit: two Heltec V4 client nodes with GPS and battery, plus a Heltec V3 repeater"
  data-item-image="/img/mesh/mesh_starter_kit_4x3.png"
  data-item-weight="700"
  data-item-max-quantity="5">
  Add to Cart
</button>
</div>

</div>

{% include 'snipcart.html' %}
