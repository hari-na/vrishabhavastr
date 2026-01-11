import './style.css'

// Create and show loading screen
const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';
loadingScreen.innerHTML = `
  <div class="loader-content">
    <h1 class="loader-brand">VRISHABHA<span style="color: #d4af37">VASTR</span></h1>
    <div class="spinner"></div>
  </div>
`;
document.body.appendChild(loadingScreen);

// Hide loading screen when page is ready
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 800);
});

document.querySelector('#app').innerHTML = `
  <header>
    <a href="/" class="brand-logo">VRISHABHA<span>VASTR</span></a>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sarees</a></li>
        <li><a href="#">Dress Materials</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <div class="nav-icons">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-cart-shopping"></i>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-bg">
        <img src="/assets/hero.png" alt="Luxury Saree Hero">
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Timeless Elegance in Every Weave</h1>
        <p>Explore our curated collection of authentic Kanchipuram silk, hand-block prints, and heritage Indian ethnic wear.</p>
        <div class="hero-btns">
          <a href="#" class="btn">Shop Collection</a>
          <a href="#" class="btn btn-outline" style="margin-left: 15px;">Our Story</a>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-title">
        <h2>Curated Collections</h2>
        <div class="divider"></div>
      </div>
      <div class="collections-grid">
        <div class="collection-card">
          <img src="/assets/kanchipuram.png" alt="Heritage Kanchipuram">
          <div class="collection-info">
            <h3>Heritage Silks</h3>
            <p>Authentic Kanchipuram and Banarasi masterpieces.</p>
            <a href="#" class="btn btn-outline btn-sm">View All</a>
          </div>
        </div>
        <div class="collection-card">
          <img src="/assets/handblock.png" alt="Artisanal Prints">
          <div class="collection-info">
            <h3>Artisanal Prints</h3>
            <p>Sophisticated hand-block printed suit sets and Kurtis.</p>
            <a href="#" class="btn btn-outline btn-sm">View All</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section container" style="background: #fff; padding: 100px 40px; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.05);">
      <div class="section-title">
        <h2>New Arrivals</h2>
        <p style="color: #666; margin-top: 10px;">The latest additions to our exquisite wardrobe.</p>
        <div class="divider"></div>
      </div>
      <div class="products-grid">
        ${[1, 2, 3, 4].map(id => `
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" alt="Product ${id}">
              <div class="product-overlay">
                <button class="btn">Add to Cart</button>
              </div>
            </div>
            <div class="product-info">
              <h4>Prussian Blue Silk Saree</h4>
              <p class="product-price">₹12,499.00</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="section" style="background: #1a1a1a; color: #fff; text-align: center;">
      <div class="container">
        <h2 style="font-family: 'Playfair Display'; font-size: 3rem; margin-bottom: 20px;">The Vrishabha Promise</h2>
        <p style="max-width: 700px; margin: 0 auto 40px; color: #aaa;">We believe in preserving the rich heritage of Indian textiles. Every piece in our collection is handpicked for its authenticity, quality, and timeless appeal.</p>
        <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 40px;">
          <div>
            <i class="fa-solid fa-gem" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 15px;"></i>
            <h4>Authentic Weaves</h4>
          </div>
          <div>
            <i class="fa-solid fa-truck-fast" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 15px;"></i>
            <h4>Pan India Delivery</h4>
          </div>
          <div>
            <i class="fa-solid fa-handshake" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 15px;"></i>
            <h4>Ethically Sourced</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Categories Section -->
    <section class="section popular-categories">
      <div class="container">
        <div class="section-title">
          <h2>Our Popular Categories</h2>
          <div class="divider"></div>
        </div>
        <div class="category-grid">
          <div class="category-card">
            <div class="category-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <h3>Kanjivaram Silk Sarees</h3>
            <p>Timeless elegance in pure silk</p>
            <a href="#" class="btn-category">Explore Collection</a>
          </div>
          <div class="category-card">
            <div class="category-icon">
              <i class="fa-solid fa-gem"></i>
            </div>
            <h3>Banaras Sarees</h3>
            <p>Heritage weaves from Varanasi</p>
            <a href="#" class="btn-category">Explore Collection</a>
          </div>
          <div class="category-card">
            <div class="category-icon">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3>Fancy Sarees</h3>
            <p>Contemporary designs for modern women</p>
            <a href="#" class="btn-category">Explore Collection</a>
          </div>
          <div class="category-card">
            <div class="category-icon">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <h3>Kolkata Handloom</h3>
            <p>Artisanal craftsmanship at its finest</p>
            <a href="#" class="btn-category">Explore Collection</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Collection Banner -->
    <section class="featured-banner">
      <div class="featured-overlay"></div>
      <div class="featured-content">
        <h2>Madhuram – Kanchipuram Silk Saree</h2>
        <p>Exquisite Handwoven Masterpieces for Unforgettable Moments</p>
        <a href="#" class="btn">Explore Our Collection</a>
      </div>
    </section>

    <!-- Awards & Stats Section -->
    <section class="section awards-section">
      <div class="container">
        <div class="awards-grid">
          <div class="award-card">
            <i class="fa-solid fa-heart" style="font-size: 2.5rem; color: #EC4899; margin-bottom: 15px;"></i>
            <div class="counter">2,500+</div>
            <p class="award-label">Reviews – Verified by TrustPilot</p>
          </div>
          <div class="award-card">
            <i class="fa-solid fa-smile" style="font-size: 2.5rem; color: #EC4899; margin-bottom: 15px;"></i>
            <div class="counter">98%</div>
            <p class="award-label">Customer Satisfaction</p>
          </div>
          <div class="award-card">
            <i class="fa-solid fa-certificate" style="font-size: 2.5rem; color: #EC4899; margin-bottom: 15px;"></i>
            <div class="counter">100%</div>
            <p class="award-label">Quality Assured</p>
          </div>
          <div class="award-card">
            <i class="fa-solid fa-trophy" style="font-size: 2.5rem; color: #EC4899; margin-bottom: 15px;"></i>
            <div class="counter">Top 1%</div>
            <p class="award-label">Fashion Retailer</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <h2>Stay Connected with Vrishabha Vastr</h2>
        <p>Subscribe to receive exclusive offers, new arrivals, and styling tips</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit" class="btn">Subscribe</button>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <h3 class="brand-logo" style="color: #fff">VRISHABHA<span>VASTR</span></h3>
          <p>Exquisite Indian ethnic wear curated for the modern woman who values tradition. From the heart of India's weaving clusters to your wardrobe.</p>
          <div class="social-links">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-pinterest"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">All Sarees</a></li>
            <li><a href="#">Kanchipuram Silks</a></li>
            <li><a href="#">Dress Materials</a></li>
            <li><a href="#">Kurtis</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Contact</h4>
          <p style="color: #999; font-size: 0.9rem;">
            123 Boutique Lane, <br>
            Heritage Quarter, <br>
            Chennai, India <br><br>
            Email: care@vrishabhavastr.com <br>
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Vrishabha Vastr. All Rights Reserved. Designed for Excellence.</p>
      </div>
    </div>
  </footer>
`
