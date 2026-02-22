---
layout: front.njk
pageTitle: Edge Collective — Shop
---

<style>
/* ── Shop Page Styles ── */
.shop-wrap {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}
.shop-intro {
  text-align: center;
  margin-bottom: 28px;
}
.shop-intro p {
  max-width: 580px;
  margin: 0 auto;
  color: #555;
}

/* Cart button */
.cart-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  margin-bottom: 24px;
}
.cart-button:hover {
  background: #f0f0f0;
}

/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.15s ease;
}
.product-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,.1);
}

.product-thumb {
  aspect-ratio: 4/3;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.product-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-body {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.product-body h3 {
  margin: 0 0 4px;
  font-size: 16px;
  background: none;
  border: none;
  padding: 0;
  width: auto;
}
.product-price {
  font-size: 18px;
  font-weight: 600;
  color: #2a7a5a;
  margin: 0 0 8px;
}
.product-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.45;
  margin: 0 0 14px;
  flex: 1;
}

.badge-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: lightblue;
  color: #333;
  padding: 2px 8px;
  border-radius: 999px;
  margin-bottom: 6px;
  width: fit-content;
}

.snipcart-add-item {
  display: inline-block;
  background: #2a7a5a;
  color: #fff !important;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none !important;
}
.snipcart-add-item:hover {
  background: #1f5c44;
}

.product-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.learn-more-link {
  display: inline-block;
  padding: 10px 18px;
  border: 1px solid #2a7a5a;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #2a7a5a !important;
  text-decoration: none !important;
  text-align: center;
}
.learn-more-link:hover {
  background: rgba(42, 122, 90, 0.08);
}

.shop-footer {
  text-align: center;
  margin-top: 28px;
  padding-top: 16px;
  border-top: 1px solid #ddd;
  color: #888;
  font-size: 14px;
}

@media (max-width: 700px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="shop-wrap">

<div class="shop-intro">

<a href="/">Edge Collective</a>

## Shop

Kits, boards, and hardware for off-grid communication, environmental monitoring, and resilience projects.

</div>

<div class="product-grid">

  <!-- Product 1 -->
  <div class="product-card">
    <div class="product-thumb">
      <img src="/img/ec_flower_logo_small.png" alt="LoRa Mesh Radio Kit" />
    </div>
    <div class="product-body">
      <span class="badge-tag">Kit</span>
      <h3>LoRa Mesh Radio Kit</h3>
      <div class="product-price">$45.00</div>
      <p class="product-desc">
        Everything you need to build an off-grid mesh radio communicator.
        Includes microcontroller, LoRa radio module, OLED display, antenna, and enclosure.
      </p>
      <a href="/shop/lora-mesh-radio-kit/" class="learn-more-link">Learn more</a>
    </div>
  </div>

  <!-- Product 2 -->
  <div class="product-card">
    <div class="product-thumb">
      <img src="/img/ec_flower_logo_small.png" alt="Solar Charge Controller Board" />
    </div>
    <div class="product-body">
      <span class="badge-tag">Board</span>
      <h3>Solar Charge Controller Board</h3>
      <div class="product-price">$28.00</div>
      <p class="product-desc">
        A simple LiFePO4 solar charge controller for small off-grid setups.
        Accepts 6V–20V panels, charges a single 3.2V LiFePO4 cell, and provides
        regulated 3.3V and 5V outputs.
      </p>
      <a href="/shop/solar-charge-controller/" class="learn-more-link">Learn more</a>
    </div>
  </div>

  <!-- Product 3 -->
  <div class="product-card">
    <div class="product-thumb">
      <img src="/img/ec_flower_logo_small.png" alt="Water Quality Sensor Kit" />
    </div>
    <div class="product-body">
      <span class="badge-tag">Kit</span>
      <h3>Water Quality Sensor Kit</h3>
      <div class="product-price">$55.00</div>
      <p class="product-desc">
        DIY conductivity/salinity sensor with LoRa telemetry. Includes probe,
        signal conditioning board, microcontroller, and waterproof enclosure.
      </p>
      <a href="/shop/water-quality-sensor-kit/" class="learn-more-link">Learn more</a>
    </div>
  </div>

  <!-- Product 4 -->
  <div class="product-card">
    <div class="product-thumb">
      <img src="/img/ec_flower_logo_small.png" alt="CO2 Monitor Kit" />
    </div>
    <div class="product-body">
      <span class="badge-tag">Hardware</span>
      <h3>CO2 Monitor Kit</h3>
      <div class="product-price">$35.00</div>
      <p class="product-desc">
        Build your own indoor air quality monitor. Includes SCD40 CO2 sensor,
        microcontroller, OLED display, and 3D-printed enclosure.
      </p>
      <a href="/shop/co2-monitor-kit/" class="learn-more-link">Learn more</a>
    </div>
  </div>

</div><!-- /product-grid -->

<div class="shop-footer">
  Questions about a product? Reach us at
  <a href="mailto:collaborate@edgecollective.io?subject=Shop%20Question">collaborate@edgecollective.io</a>
</div>

</div><!-- /shop-wrap -->

