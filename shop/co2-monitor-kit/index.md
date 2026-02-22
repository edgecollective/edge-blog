---
layout: front.njk
pageTitle: CO2 Monitor Kit — Edge Collective Shop
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
<span class="badge-tag">Hardware</span>

## CO2 Monitor Kit

</div>

<div class="product-page-image">
<img src="/img/ec_flower_logo_small.png" alt="CO2 Monitor Kit" />
</div>

<div class="product-page-price">$35.00</div>

<!-- ── Configuration & Add to Cart ── -->
<div class="product-options">
<h3>Configure Your Order</h3>

<div class="option-group">
  <label for="qty-co2">Quantity</label>
  <input type="number" id="qty-co2" min="1" max="10" value="1" onchange="document.getElementById('co2-btn').setAttribute('data-item-quantity', this.value)" />
</div>

<div class="option-group">
  <label for="opt-display">Display</label>
  <select id="opt-display">
    <option value="0.96 inch OLED (included)">0.96" OLED (included)</option>
    <option value="1.3 inch OLED upgrade[+5.00]">1.3" OLED upgrade (+$5)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-enclosure-co2">Enclosure</label>
  <select id="opt-enclosure-co2">
    <option value="3D-printed enclosure (included)">3D-printed enclosure (included)</option>
    <option value="Laser-cut wood enclosure[+10.00]">Laser-cut wood enclosure (+$10)</option>
    <option value="No enclosure[-3.00]">No enclosure (-$3)</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-wifi">WiFi Data Logging</label>
  <select id="opt-wifi">
    <option value="Display-only firmware">Display-only firmware</option>
    <option value="WiFi logging firmware">WiFi logging firmware</option>
  </select>
</div>

<div class="option-group">
  <label for="opt-cable">USB-C Cable</label>
  <select id="opt-cable">
    <option value="1m USB-C cable (included)">1m USB-C cable (included)</option>
    <option value="3m USB-C cable[+3.00]">3m USB-C cable (+$3)</option>
  </select>
</div>

<div class="options-add-btn">
  <button class="snipcart-add-item" id="co2-btn"
    data-item-id="co2-monitor-kit"
    data-item-name="CO2 Monitor Kit"
    data-item-price="35.00"
    data-item-url="/shop/co2-monitor-kit/"
    data-item-description="DIY CO2 indoor air quality monitor kit"
    data-item-image="/img/ec_flower_logo_small.png"
    data-item-weight="150"
    data-item-quantity="1"
    data-item-max-quantity="10"
    data-item-custom1-name="Display"
    data-item-custom1-options="0.96 inch OLED (included)|1.3 inch OLED upgrade[+5.00]"
    data-item-custom2-name="Enclosure"
    data-item-custom2-options="3D-printed enclosure (included)|Laser-cut wood enclosure[+10.00]|No enclosure[-3.00]"
    data-item-custom3-name="WiFi Data Logging"
    data-item-custom3-options="Display-only firmware|WiFi logging firmware"
    data-item-custom4-name="USB-C Cable"
    data-item-custom4-options="1m USB-C cable (included)|3m USB-C cable[+3.00]">
    Add to Cart
  </button>
</div>
</div>

<div class="product-page-details">

Build your own indoor air quality monitor. CO2 levels are one of the best indicators of ventilation quality — important for classrooms, offices, and homes, especially during cold and flu season.

**What's included:**

- Sensirion SCD40 CO2 sensor
- ESP32-C3 microcontroller
- 0.96" OLED display
- 3D-printed enclosure
- USB-C cable
- Pre-loaded firmware
- Assembly guide

**Specifications:**

- CO2 range: 400–5,000 ppm
- Also measures: temperature and relative humidity
- Accuracy: ±50 ppm + 5% of reading
- Display: real-time CO2 level with color-coded indicator
- Power: USB-C (5V)
- Optional: WiFi data logging to a local server

**Background:** This design grew out of Edge Collective's work on DIY Corsi-Rosenthal boxes and air quality monitoring. It's been used in schools and community spaces to help people understand when they need to improve ventilation. The firmware is open source and supports both a simple display mode and a data-logging mode.

</div>

<div class="product-page-actions">
<button class="snipcart-add-item"
  data-item-id="co2-monitor-kit"
  data-item-name="CO2 Monitor Kit"
  data-item-price="35.00"
  data-item-url="/shop/co2-monitor-kit/"
  data-item-description="DIY CO2 indoor air quality monitor kit"
  data-item-image="/img/ec_flower_logo_small.png"
  data-item-weight="150"
  data-item-max-quantity="10"
  data-item-custom1-name="Display"
  data-item-custom1-options="0.96 inch OLED (included)|1.3 inch OLED upgrade[+5.00]"
  data-item-custom2-name="Enclosure"
  data-item-custom2-options="3D-printed enclosure (included)|Laser-cut wood enclosure[+10.00]|No enclosure[-3.00]"
  data-item-custom3-name="WiFi Data Logging"
  data-item-custom3-options="Display-only firmware|WiFi logging firmware"
  data-item-custom4-name="USB-C Cable"
  data-item-custom4-options="1m USB-C cable (included)|3m USB-C cable[+3.00]">
  Add to Cart
</button>
</div>

</div>

<script>
document.querySelectorAll('.product-options select').forEach(function(sel) {
  sel.addEventListener('change', function() {
    var btn = document.getElementById('co2-btn');
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
