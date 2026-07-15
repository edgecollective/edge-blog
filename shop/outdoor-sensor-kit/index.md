---
layout: front.njk
pageTitle: Outdoor Sensor Kit — Edge Collective Shop
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

/* ── Order box ── */
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
  margin-bottom: 18px;
}
.option-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 4px;
}
.option-group input[type="number"] {
  width: 80px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background: #fff;
  color: #333;
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

## Outdoor Sensor Kit

</div>

<div class="product-page-image">
<img src="/img/mesh/bric/sensor_package_listing.png" alt="Outdoor Sensor Kit: weatherproof enclosure, solar panel, ultrasonic sensor, and 3000mAh battery" />
</div>

<div class="product-page-price">$265.00</div>

<!-- ── Order ── -->
<div class="product-options">
<h3>Order</h3>

<div class="option-group">
  <label for="qty-sensor">Quantity</label>
  <input type="number" id="qty-sensor" min="1" max="5" value="1" onchange="document.getElementById('sensor-btn').setAttribute('data-item-quantity', this.value)" />
</div>

<div class="options-add-btn">
  <button class="snipcart-add-item" id="sensor-btn"
    data-item-id="outdoor-sensor-kit"
    data-item-name="Outdoor Sensor Kit"
    data-item-price="265.00"
    data-item-url="/shop/outdoor-sensor-kit/"
    data-item-description="Solar-powered, weatherproof MeshCore sensor node kit: rook board, ultrasonic sensor, 3000mAh battery, enclosure, and solar panel"
    data-item-image="/img/mesh/bric/sensor_package_listing_4x3.png"
    data-item-weight="1700"
    data-item-quantity="1"
    data-item-max-quantity="5">
    Add to Cart
  </button>
</div>
</div>

<div class="product-page-details">

A solar-powered, weatherproof sensor node that reports over your MeshCore mesh. A rugged outdoor platform with a weatherproof ultrasonic distance sensor — point it at a stream, culvert, tank, or tide line and get continuous level readings relayed across the mesh, no cell service or WiFi required.

**What's in the kit:**

- **rook** LoRa board, pre-loaded with MeshCore firmware (915 MHz)
- Weatherproof ultrasonic distance sensor for water-level and distance monitoring
- 3000mAh lithium-ion battery — rides through nights and cloudy stretches
- Solar panel — keeps the battery topped up indefinitely in reasonable sun
- Weatherproof outdoor enclosure

**How it works:** Mount the node above the water surface (a bridge rail, culvert mouth, or tank lid), aim the sensor downward, and it measures the distance to the surface on a schedule — readings travel over the MeshCore mesh to wherever you are. Because it doubles as a mesh node, every sensor you deploy also strengthens your network's coverage.

- Sensing: ultrasonic ranging, ideal for flood monitoring, tank levels, and tide tracking
- Range: 1–5+ km line-of-sight per mesh hop — extend further with repeaters
- Frequency: 915 MHz (US ISM band)
- Pairs naturally with the [Intro to Mesh Radio Kit](/shop/intro-mesh-radio-kit/)

</div>

<!-- Repeat Add to Cart at bottom -->
<div class="product-page-actions">
<button class="snipcart-add-item"
  data-item-id="outdoor-sensor-kit"
  data-item-name="Outdoor Sensor Kit"
  data-item-price="265.00"
  data-item-url="/shop/outdoor-sensor-kit/"
  data-item-description="Solar-powered, weatherproof MeshCore sensor node kit: rook board, ultrasonic sensor, 3000mAh battery, enclosure, and solar panel"
  data-item-image="/img/mesh/bric/sensor_package_listing_4x3.png"
  data-item-weight="1700"
  data-item-max-quantity="5">
  Add to Cart
</button>
</div>

</div>

{% include 'snipcart.html' %}
