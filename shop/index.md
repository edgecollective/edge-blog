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

  <!-- Product: Intro to Mesh Radio Kit -->
  <div class="product-card">
    <div class="product-thumb">
      <img src="/img/mesh/mesh_starter_kit_4x3.png" alt="Intro to Mesh Radio Kit: MeshCore repeater and two GPS client nodes" />
    </div>
    <div class="product-body">
      <span class="badge-tag">Kit</span>
      <h3>Intro to Mesh Radio Kit</h3>
      <div class="product-price">$120.00</div>
      <p class="product-desc">
        A complete three-node MeshCore network in a box: two GPS-equipped,
        battery-powered Heltec V4 client nodes plus a Heltec V3 dedicated
        repeater. Power up, pair your phone, and you're on the mesh.
      </p>
      <a href="/shop/intro-mesh-radio-kit/" class="learn-more-link">Learn more</a>
    </div>
  </div>

</div><!-- /product-grid -->

<div class="shop-footer">
  Questions about a product? Reach us at
  <a href="mailto:collaborate@edgecollective.io?subject=Shop%20Question">collaborate@edgecollective.io</a>
</div>

</div><!-- /shop-wrap -->

