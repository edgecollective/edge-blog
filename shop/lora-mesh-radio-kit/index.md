---
layout: front.njk
pageTitle: LoRa Mesh Radio Kit — Edge Collective Shop
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

## LoRa Mesh Radio Kit

</div>

<div class="product-page-image">
<img src="/img/ec_flower_logo_small.png" alt="LoRa Mesh Radio Kit" />
</div>

<div class="product-page-price">$45.00</div>

<!-- ── Configuration & Add to Cart ── -->
<div class="product-options">
<h3>Configure Your Order</h3>

<div class="option-group">
  <label for="qty-lora">Quantity</label>
  <input type="number" id="qty-lora" min="1" max="10" value="1" onchange="document.getElementById('lora-btn').setAttribute('data-item-quantity', this.value)" />
</div>

<div class="option-group">
  <label for="opt-enclosure">Enclosure</label>
  <select id="opt-enclosure">
    <option value="3D-printed (included)">3D-printed (included)</option>
    <option value="Weatherproof upgrade[+8.00]">Weatherproof upgrade (+$8)</option>
    <option value="No enclosure[-5.00]">No enclosure (-$5)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-antenna">Antenna</label>
  <select id="opt-antenna">
    <option value="3dBi SMA antenna (included)">3dBi SMA antenna (included)</option>
    <option value="6dBi high-gain antenna[+12.00]">6dBi high-gain antenna (+$12)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-battery">Battery</label>
  <select id="opt-battery">
    <option value="No battery (USB-C powered)">No battery (USB-C powered)</option>
    <option value="1200mAh LiPo battery[+9.00]">1200mAh LiPo battery (+$9)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-firmware">Firmware</label>
  <select id="opt-firmware">
    <option value="Meshtastic (pre-loaded)">Meshtastic (pre-loaded)</option>
    <option value="Blank (no firmware)">Blank (no firmware)</option>
  </select>
</div>

<div class="options-add-btn">
  <button class="snipcart-add-item" id="lora-btn"
    data-item-id="lora-mesh-radio-kit"
    data-item-name="LoRa Mesh Radio Kit"
    data-item-price="45.00"
    data-item-url="/shop/lora-mesh-radio-kit/"
    data-item-description="Off-grid mesh radio communicator kit"
    data-item-image="/img/ec_flower_logo_small.png"
    data-item-weight="120"
    data-item-quantity="1"
    data-item-max-quantity="10"
    data-item-custom1-name="Enclosure"
    data-item-custom1-options="3D-printed (included)|Weatherproof upgrade[+8.00]|No enclosure[-5.00]"
    data-item-custom2-name="Antenna"
    data-item-custom2-options="3dBi SMA antenna (included)|6dBi high-gain antenna[+12.00]"
    data-item-custom3-name="Battery"
    data-item-custom3-options="No battery (USB-C powered)|1200mAh LiPo battery[+9.00]"
    data-item-custom4-name="Firmware"
    data-item-custom4-options="Meshtastic (pre-loaded)|Blank (no firmware)">
    Add to Cart
  </button>
</div>
</div>

<div class="product-page-details">

Everything you need to build an off-grid mesh radio communicator. This kit is designed for anyone interested in building resilient, decentralized communication networks — no cell towers or internet required.

**What's included:**

- ESP32-S3 microcontroller board
- SX1262 LoRa radio module (915 MHz)
- 0.96" OLED display
- SMA antenna with 3dBi gain
- 3D-printed enclosure
- Pre-loaded firmware with Meshtastic support
- Assembly guide

**Specifications:**

- Range: 1–5 km line-of-sight (varies with terrain)
- Frequency: 915 MHz (US ISM band)
- Power: USB-C rechargeable, or 3.7V LiPo battery
- Mesh networking: up to 255 nodes per network

**Getting started:** Flash the included firmware, attach the antenna, power up, and you're on the mesh. Pairs with any Meshtastic-compatible device. Full documentation available on our GitHub.

</div>

<!-- Repeat Add to Cart at bottom -->
<div class="product-page-actions">
<button class="snipcart-add-item"
  data-item-id="lora-mesh-radio-kit"
  data-item-name="LoRa Mesh Radio Kit"
  data-item-price="45.00"
  data-item-url="/shop/lora-mesh-radio-kit/"
  data-item-description="Off-grid mesh radio communicator kit"
  data-item-image="/img/ec_flower_logo_small.png"
  data-item-weight="120"
  data-item-max-quantity="10"
  data-item-custom1-name="Enclosure"
  data-item-custom1-options="3D-printed (included)|Weatherproof upgrade[+8.00]|No enclosure[-5.00]"
  data-item-custom2-name="Antenna"
  data-item-custom2-options="3dBi SMA antenna (included)|6dBi high-gain antenna[+12.00]"
  data-item-custom3-name="Battery"
  data-item-custom3-options="No battery (USB-C powered)|1200mAh LiPo battery[+9.00]"
  data-item-custom4-name="Firmware"
  data-item-custom4-options="Meshtastic (pre-loaded)|Blank (no firmware)">
  Add to Cart
</button>
</div>

</div>

<script>
// Sync visible dropdowns with the Snipcart button's custom field values
document.querySelectorAll('.product-options select').forEach(function(sel) {
  sel.addEventListener('change', function() {
    var btn = document.getElementById('lora-btn');
    // Find which custom field this corresponds to by matching the label
    var label = this.previousElementSibling ? this.previousElementSibling.textContent.trim() : '';
    for (var i = 1; i <= 4; i++) {
      var attr = btn.getAttribute('data-item-custom' + i + '-name');
      if (attr === label) {
        btn.setAttribute('data-item-custom' + i + '-value', this.value);
        break;
      }
    }
  });
});
</script>

<div id="snipcart" data-api-key="YWMwMTNjOGItODA1MS00YmFlLWE0MWYtNmYyNzU3YTg3Y2Y5NjM5MDczMTU2MTI1ODk3MDU1" data-config-modal-style="side" hidden></div>
<script async src="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js"></script>
