---
layout: front.njk
pageTitle: Water Quality Sensor Kit — Edge Collective Shop
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
.product-options { background: #f9f9f7; border: 1px solid #e0e0dc; border-radius: 10px; padding: 20px; margin-bottom: 24px; max-width: 420px; margin-left: auto; margin-right: auto; }
.product-options h3 { margin: 0 0 14px; font-size: 15px; font-weight: 600; color: #333; text-align: center; background: none; border: none; padding: 0; width: auto; }
.option-group { margin-bottom: 14px; }
.option-group:last-of-type { margin-bottom: 18px; }
.option-group label { display: block; font-size: 13px; font-weight: 600; color: #555; margin-bottom: 4px; }
.option-group select, .option-group input[type="number"] { width: 100%; padding: 8px 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; background: #fff; color: #333; }
.option-group input[type="number"] { width: 80px; }
.options-add-btn { text-align: center; }
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

## Water Quality Sensor Kit

</div>

<div class="product-page-image">
<img src="/img/ec_flower_logo_small.png" alt="Water Quality Sensor Kit" />
</div>

<div class="product-page-price">$55.00</div>

<!-- ── Configuration & Add to Cart ── -->
<div class="product-options">
<h3>Configure Your Order</h3>

<div class="option-group">
  <label for="qty-water">Quantity</label>
  <input type="number" id="qty-water" min="1" max="10" value="1" onchange="document.getElementById('water-btn').setAttribute('data-item-quantity', this.value)" />
</div>

<div class="option-group">
  <label for="opt-telemetry">Telemetry</label>
  <select id="opt-telemetry">
    <option value="LoRa telemetry (included)">LoRa telemetry (included)</option>
    <option value="No telemetry (standalone)[-10.00]">No telemetry / standalone (-$10)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-probe">Probe Type</label>
  <select id="opt-probe">
    <option value="Conductivity/salinity probe (included)">Conductivity/salinity (included)</option>
    <option value="Temperature probe add-on[+8.00]">Add temperature probe (+$8)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-power-water">Power Option</label>
  <select id="opt-power-water">
    <option value="USB-C powered">USB-C powered</option>
    <option value="Solar charge controller bundle[+24.00]">Solar charge controller bundle (+$24)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-sd">MicroSD Card</label>
  <select id="opt-sd">
    <option value="No microSD card">No microSD card</option>
    <option value="16GB microSD card[+5.00]">16GB microSD card (+$5)</option>
  </select>
</div>

<div class="options-add-btn">
  <button class="snipcart-add-item" id="water-btn"
    data-item-id="water-quality-sensor-kit"
    data-item-name="Water Quality Sensor Kit"
    data-item-price="55.00"
    data-item-url="/shop/water-quality-sensor-kit/"
    data-item-description="DIY water quality sensor with LoRa telemetry"
    data-item-image="/img/ec_flower_logo_small.png"
    data-item-weight="200"
    data-item-quantity="1"
    data-item-max-quantity="10"
    data-item-custom1-name="Telemetry"
    data-item-custom1-options="LoRa telemetry (included)|No telemetry (standalone)[-10.00]"
    data-item-custom2-name="Probe Type"
    data-item-custom2-options="Conductivity/salinity probe (included)|Temperature probe add-on[+8.00]"
    data-item-custom3-name="Power Option"
    data-item-custom3-options="USB-C powered|Solar charge controller bundle[+24.00]"
    data-item-custom4-name="MicroSD Card"
    data-item-custom4-options="No microSD card|16GB microSD card[+5.00]">
    Add to Cart
  </button>
</div>
</div>

<div class="product-page-details">

A DIY conductivity and salinity sensor with optional LoRa telemetry — designed for community-based water quality monitoring in rivers, estuaries, and coastal environments.

**What's included:**

- Conductivity/salinity probe (stainless steel electrodes)
- Signal conditioning board (analog front-end)
- ESP32-S3 microcontroller
- Waterproof enclosure (IP67)
- Cable glands and mounting hardware
- Assembly and calibration guide

**Specifications:**

- Measurement range: 0–50,000 µS/cm (conductivity), 0–35 ppt (salinity)
- Accuracy: ±5% after calibration
- Telemetry: optional LoRa (pairs with our Mesh Radio Kit)
- Power: USB-C or solar (pairs with our Solar Charge Controller)
- Data logging: on-board microSD slot

**Use cases:** This kit was developed for workshops at the Edgewood Sailing School and has been used for salinity monitoring in Narragansett Bay. Ideal for citizen science projects, educational workshops, and community environmental monitoring.

</div>

<div class="product-page-actions">
<button class="snipcart-add-item"
  data-item-id="water-quality-sensor-kit"
  data-item-name="Water Quality Sensor Kit"
  data-item-price="55.00"
  data-item-url="/shop/water-quality-sensor-kit/"
  data-item-description="DIY water quality sensor with LoRa telemetry"
  data-item-image="/img/ec_flower_logo_small.png"
  data-item-weight="200"
  data-item-max-quantity="10"
  data-item-custom1-name="Telemetry"
  data-item-custom1-options="LoRa telemetry (included)|No telemetry (standalone)[-10.00]"
  data-item-custom2-name="Probe Type"
  data-item-custom2-options="Conductivity/salinity probe (included)|Temperature probe add-on[+8.00]"
  data-item-custom3-name="Power Option"
  data-item-custom3-options="USB-C powered|Solar charge controller bundle[+24.00]"
  data-item-custom4-name="MicroSD Card"
  data-item-custom4-options="No microSD card|16GB microSD card[+5.00]">
  Add to Cart
</button>
</div>

</div>

<script>
document.querySelectorAll('.product-options select').forEach(function(sel) {
  sel.addEventListener('change', function() {
    var btn = document.getElementById('water-btn');
    var label = this.previousElementSibling ? this.previousElementSibling.textContent.trim() : '';
    for (var i = 1; i <= 4; i++) {
      if (btn.getAttribute('data-item-custom' + i + '-name') === label) {
        btn.setAttribute('data-item-custom' + i + '-value', this.value);
        break;
      }
    }
  });
});
</script>

<div id="snipcart" data-api-key="YWMwMTNjOGItODA1MS00YmFlLWE0MWYtNmYyNzU3YTg3Y2Y5NjM5MDczMTU2MTI1ODk3MDU1" data-config-modal-style="side" hidden></div>
<script async src="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js"></script>
