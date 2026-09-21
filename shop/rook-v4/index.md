---
layout: front.njk
pageTitle: Rook v4 — Edge Collective Shop
---

<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css" />

<style>
.product-page { max-width: 800px; margin: 0 auto; padding: 0 16px; }
.product-page-header { text-align: center; margin-bottom: 24px; }
.product-page-header h2 { margin: 0 0 4px; }
.product-page-image { text-align: center; margin-bottom: 24px; }
.product-page-image img { max-width: 100%; border-radius: 10px; border: 1px solid #e0e0dc; }

/* ── Two product photos, one per variant, aligned with the cards below ── */
.variant-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-bottom: 10px;
}
.variant-photo { margin: 0; text-align: center; }
.variant-photo img {
  display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover;
  border-radius: 10px; border: 1px solid #e0e0dc;
}
.variant-photo figcaption { font-size: 13px; color: #777; margin-top: 6px; }
.product-page-details { font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 28px; }
.back-link { display: inline-block; margin-bottom: 16px; font-size: 14px; color: #2a7a5a !important; text-decoration: none !important; }
.back-link:hover { text-decoration: underline !important; }

.badge-tag {
  display: inline-block; font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; background: lightblue; color: #333; padding: 2px 8px;
  border-radius: 999px; margin-bottom: 6px;
}
.cart-button {
  display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #ccc;
  padding: 8px 18px; border-radius: 999px; font-size: 14px; font-weight: 500; color: #333;
  cursor: pointer; margin-bottom: 24px;
}
.cart-button:hover { background: #f0f0f0; }
.snipcart-add-item {
  display: inline-block; background: #2a7a5a; color: #fff !important; border: none;
  padding: 10px 18px; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer;
  text-align: center; text-decoration: none !important;
}
.snipcart-add-item:hover { background: #1f5c44; }

/* ── Two variants, side by side ── */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-bottom: 28px;
}
.variant {
  background: #f9f9f7;
  border: 1px solid #e0e0dc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.variant h3 {
  margin: 0 0 4px; font-size: 16px; background: none; border: none; padding: 0; width: auto;
}
.variant-price { font-size: 22px; font-weight: 600; color: #2a7a5a; margin: 0 0 10px; }
.variant-desc { font-size: 14px; color: #666; line-height: 1.45; margin: 0 0 14px; flex: 1; }
.variant-desc ul { margin: 8px 0 0; padding-left: 18px; }
.variant-desc li { margin-bottom: 3px; }
.option-group { margin-bottom: 14px; }
.option-group label {
  display: block; font-size: 13px; font-weight: 600; color: #555; margin-bottom: 4px;
}
.option-group input[type="number"] {
  width: 80px; padding: 8px 10px; border: 1px solid #ccc; border-radius: 6px;
  font-size: 14px; background: #fff; color: #333;
}

@media (max-width: 480px) {
  .variant-grid { grid-template-columns: minmax(0, 1fr); }
  .snipcart-add-item { display: block; width: 100%; }
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
<span class="badge-tag">Board</span>

## Rook v4

</div>

<div class="variant-photos">
  <figure class="variant-photo">
    <img src="/img/mesh/rook/rook_v4_assembled.jpg" alt="Rook v4 assembled: LoRa board with OLED display, radio module, and antenna" />
    <figcaption>Assembled</figcaption>
  </figure>
  <figure class="variant-photo">
    <img src="/img/mesh/rook/rook_v4_pcb.jpg" alt="Rook v4 bare PCB, unpopulated" />
    <figcaption>Bare PCB</figcaption>
  </figure>
</div>

<!-- ── Order: two variants ── -->
<div class="variant-grid">

  <div class="variant">
    <h3>Rook v4 — assembled</h3>
    <div class="variant-price">$65.00</div>
    <div class="variant-desc">
      Built, tested, and flashed with MeshCore firmware (915&nbsp;MHz). Power it up
      and it joins the mesh.
      <ul>
        <li>Assembled and functionally tested</li>
        <li>MeshCore firmware pre-loaded</li>
        <li>Ready to deploy as a node or repeater</li>
      </ul>
    </div>
    <div class="option-group">
      <label for="qty-rook-assembled">Quantity</label>
      <input type="number" id="qty-rook-assembled" min="1" max="10" value="1"
        onchange="document.getElementById('rook-assembled-btn').setAttribute('data-item-quantity', this.value)" />
    </div>
    <button class="snipcart-add-item" id="rook-assembled-btn"
      data-item-id="rook-v4-assembled"
      data-item-name="Rook v4 — assembled"
      data-item-price="65.00"
      data-item-url="/shop/rook-v4/"
      data-item-description="Assembled and tested Rook v4 low-power LoRa board, pre-loaded with MeshCore firmware (915 MHz)"
      data-item-image="/img/mesh/rook/rook_v4_assembled_4x3.jpg"
      data-item-weight="60"
      data-item-quantity="1"
      data-item-max-quantity="10">
      Add to Cart
    </button>
  </div>

  <div class="variant">
    <h3>Rook v4 — bare PCB</h3>
    <div class="variant-price">$10.00</div>
    <div class="variant-desc">
      The board on its own, unpopulated. For people who want to source their own
      parts, modify the design, or build a few.
      <ul>
        <li>Bare, unpopulated PCB</li>
        <li>No components, no firmware</li>
        <li>Schematic and layout are open &mdash; see below</li>
      </ul>
    </div>
    <div class="option-group">
      <label for="qty-rook-pcb">Quantity</label>
      <input type="number" id="qty-rook-pcb" min="1" max="20" value="1"
        onchange="document.getElementById('rook-pcb-btn').setAttribute('data-item-quantity', this.value)" />
    </div>
    <button class="snipcart-add-item" id="rook-pcb-btn"
      data-item-id="rook-v4-pcb"
      data-item-name="Rook v4 — bare PCB"
      data-item-price="10.00"
      data-item-url="/shop/rook-v4/"
      data-item-description="Bare, unpopulated Rook v4 PCB — no components, no firmware"
      data-item-image="/img/mesh/rook/rook_v4_pcb.jpg"
      data-item-weight="40"
      data-item-quantity="1"
      data-item-max-quantity="20">
      Add to Cart
    </button>
  </div>

</div><!-- /variant-grid -->

<div class="product-page-details">

**rook** is our small, low-power LoRa board, designed for nodes that have to sit outside on
a battery and keep reporting — mesh repeaters, remote sensors, and anything that needs to
talk a long way without cell service or WiFi.

It is the board inside the [Mesh Radio Water Level Kit](/shop/outdoor-sensor-kit/), and it
runs [MeshCore](https://meshcore.io) firmware out of the box.

**Two ways to buy:**

- **Assembled** — built, tested, and flashed. The right choice if you want a working node.
- **Bare PCB** — for people who solder, want to change the design, or need a handful of
  boards at low cost.

**Open hardware.** Schematics, layout and firmware live at
[github.com/edgecollective/rook](https://github.com/edgecollective/rook) &mdash; the v4
design files are under `hardware/v0.4/`. Build your own, fork it, improve it.

Firmware builds for the board are collected on the [rook page](/rook/).

</div>

</div>

{% include 'snipcart.html' %}
