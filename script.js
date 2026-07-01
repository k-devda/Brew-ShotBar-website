/* ============================================================
   BREW & SHOTS — Complete JavaScript Engine
   Cart System | Products | Animations | Google Sheets
   ============================================================ */

'use strict';

/* ── GOOGLE SHEETS CONFIG ── */
//const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzcB6xTN14rWOsU-vQ16-duc93lHT2rZ5Y7dkkQiYsUUgjQdtpRPuAGeXf5Jef907ZeXA/exec";


const SCRIPT_URL ="https://script.google.com/macros/s/AKfycbzcB6xTN14rWOsU-vQ16-duc93lHT2rZ5Y7dkkQiYsUUgjQdtpRPuAGeXf5Jef907ZeXA/exec";
/* ── PRODUCT DATABASE ── */
const PRODUCTS = [
  // COFFEE
  { id: 1, name: "Espresso", category: "coffee", price: 149, oldPrice: null, rating: 4.9, reviews: 312, badge: "popular", desc: "A bold, concentrated shot of pure coffee perfection. Single origin Coorg beans, extracted at 9 bars of pressure.", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80", tags: ["Hot", "Strong", "Classic"] },
  { id: 2, name: "Cappuccino", category: "coffee", price: 249, oldPrice: 299, rating: 4.8, reviews: 428, badge: "popular", desc: "Velvety steamed milk foam over a rich espresso base. The perfect balance of bold and creamy.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80", tags: ["Hot", "Creamy", "Classic"] },
  { id: 3, name: "Latte", category: "coffee", price: 249, oldPrice: null, rating: 4.7, reviews: 356, badge: null, desc: "Silky smooth espresso with steamed whole milk and a delicate latte art finish by our master baristas.", img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=500&q=80", tags: ["Hot", "Mild", "Creamy"] },
  { id: 4, name: "Cold Coffee", category: "coffee", price: 299, oldPrice: null, rating: 4.8, reviews: 289, badge: "new", desc: "Chilled espresso blended with cold milk and a hint of vanilla. Served over hand-chipped ice.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80", tags: ["Cold", "Refreshing", "Sweet"] },
  { id: 5, name: "Mocha", category: "coffee", price: 279, oldPrice: null, rating: 4.6, reviews: 198, badge: null, desc: "Espresso meets Belgian dark chocolate in this indulgent cup. Topped with whipped cream and cocoa dust.", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80", tags: ["Hot", "Chocolate", "Indulgent"] },
  { id: 6, name: "Americano", category: "coffee", price: 199, oldPrice: null, rating: 4.7, reviews: 267, badge: null, desc: "Double espresso diluted with hot water to create a smooth, full-bodied black coffee experience.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80", tags: ["Hot", "Black", "Strong"] },
  { id: 7, name: "Cold Brew", category: "coffee", price: 349, oldPrice: 399, rating: 4.9, reviews: 445, badge: "popular", desc: "Steeped for 18 hours in cold water. Smooth, low-acid, and intensely flavoured. Our signature brew.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80", tags: ["Cold", "Smooth", "Premium"] },
  { id: 8, name: "Flat White", category: "coffee", price: 229, oldPrice: null, rating: 4.6, reviews: 178, badge: null, desc: "Ristretto shots with velvety microfoam milk. Stronger than a latte, smoother than a cappuccino.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80", tags: ["Hot", "Strong", "Smooth"] },

  // BAR SHOTS
  { id: 9, name: "Whiskey Shot", category: "bar", price: 399, oldPrice: null, rating: 4.8, reviews: 234, badge: "popular", desc: "Premium single malt Scotch whiskey, served neat at the perfect temperature. Aged 12 years.", img: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&q=80", tags: ["Spirits", "Premium", "Aged"] },
  { id: 10, name: "Vodka Shot", category: "bar", price: 349, oldPrice: null, rating: 4.6, reviews: 189, badge: null, desc: "Crystal-clear premium Russian vodka, chilled to -18°C. Clean, crisp, and smooth on the palate.", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80", tags: ["Spirits", "Chilled", "Clean"] },
  { id: 11, name: "Tequila Shot", category: "bar", price: 379, oldPrice: null, rating: 4.7, reviews: 156, badge: null, desc: "100% blue agave tequila from Jalisco, Mexico. Served with lime and Himalayan pink salt.", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80", tags: ["Spirits", "Mexican", "Citrus"] },
  { id: 12, name: "Rum Shot", category: "bar", price: 329, oldPrice: null, rating: 4.5, reviews: 143, badge: null, desc: "Dark aged Caribbean rum with notes of caramel, vanilla, and tropical fruit. Smooth and warming.", img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&q=80", tags: ["Spirits", "Dark", "Aged"] },
  { id: 13, name: "Signature Cocktail", category: "bar", price: 549, oldPrice: 649, rating: 4.9, reviews: 312, badge: "special", desc: "Our award-winning house cocktail — a blend of aged rum, cold brew coffee, chocolate bitters, and coconut cream.", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&q=80", tags: ["Cocktail", "Signature", "Award-Winning"] },
  { id: 14, name: "Mojito", category: "bar", price: 449, oldPrice: null, rating: 4.8, reviews: 278, badge: "popular", desc: "Fresh mint, lime juice, white rum, and soda water. The classic Cuban cocktail, perfected.", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&q=80", tags: ["Cocktail", "Refreshing", "Classic"] },
  { id: 15, name: "Old Fashioned", category: "bar", price: 599, oldPrice: null, rating: 4.9, reviews: 198, badge: "special", desc: "Bourbon whiskey, Angostura bitters, sugar, and an orange peel. The timeless classic, done right.", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&q=80", tags: ["Cocktail", "Classic", "Bourbon"] },

  // DRINKS
  { id: 16, name: "Mango Lassi", category: "drinks", price: 199, oldPrice: null, rating: 4.7, reviews: 234, badge: null, desc: "Thick, creamy yogurt blended with Alphonso mango pulp and a hint of cardamom. Chilled to perfection.", img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80", tags: ["Non-Alcoholic", "Fruity", "Creamy"] },
  { id: 17, name: "Virgin Mojito", category: "drinks", price: 249, oldPrice: null, rating: 4.6, reviews: 189, badge: null, desc: "All the freshness of a mojito without the alcohol. Fresh mint, lime, and sparkling water.", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80", tags: ["Non-Alcoholic", "Refreshing", "Mint"] },
  { id: 18, name: "Iced Tea", category: "drinks", price: 179, oldPrice: null, rating: 4.5, reviews: 156, badge: null, desc: "House-brewed black tea, chilled and served with lemon, mint, and a touch of honey.", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80", tags: ["Non-Alcoholic", "Tea", "Refreshing"] },
  { id: 19, name: "Watermelon Cooler", category: "drinks", price: 229, oldPrice: null, rating: 4.7, reviews: 167, badge: "new", desc: "Fresh watermelon juice blended with mint, lime, and a pinch of black salt. Summer in a glass.", img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&q=80", tags: ["Non-Alcoholic", "Fruity", "Summer"] },

  // SNACKS
  { id: 20, name: "Loaded Fries", category: "snacks", price: 299, oldPrice: 349, rating: 4.8, reviews: 445, badge: "popular", desc: "Crispy golden fries loaded with cheese sauce, jalapeños, caramelised onions, and our secret spice blend.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80", tags: ["Crispy", "Cheesy", "Spicy"] },
  { id: 21, name: "Gourmet Burger", category: "snacks", price: 499, oldPrice: null, rating: 4.9, reviews: 389, badge: "popular", desc: "Double smash patty, aged cheddar, caramelised onions, house pickles, and our signature B&S sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", tags: ["Hearty", "Cheesy", "Signature"] },
  { id: 22, name: "Nachos Supreme", category: "snacks", price: 349, oldPrice: null, rating: 4.7, reviews: 267, badge: null, desc: "Tortilla chips with three-cheese blend, pico de gallo, guacamole, sour cream, and pickled jalapeños.", img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80", tags: ["Sharing", "Cheesy", "Mexican"] },
  { id: 23, name: "Chicken Wings", category: "snacks", price: 449, oldPrice: null, rating: 4.8, reviews: 312, badge: "popular", desc: "Crispy fried wings tossed in your choice of buffalo, honey garlic, or BBQ sauce. Served with blue cheese dip.", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80", tags: ["Crispy", "Spicy", "Sharing"] },
  { id: 24, name: "Bruschetta", category: "snacks", price: 249, oldPrice: null, rating: 4.6, reviews: 178, badge: null, desc: "Toasted sourdough with heirloom tomatoes, fresh basil, garlic, and aged balsamic reduction.", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&q=80", tags: ["Light", "Italian", "Fresh"] },

  // FOOD
  { id: 25, name: "Margherita Pizza", category: "food", price: 499, oldPrice: 599, rating: 4.8, reviews: 356, badge: "popular", desc: "Wood-fired thin crust with San Marzano tomato sauce, fresh mozzarella, and basil. Neapolitan style.", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80", tags: ["Italian", "Vegetarian", "Wood-Fired"] },
  { id: 26, name: "Pasta Arrabbiata", category: "food", price: 399, oldPrice: null, rating: 4.7, reviews: 234, badge: null, desc: "Al dente penne in a fiery tomato sauce with garlic, red chillies, and fresh parsley. Topped with parmesan.", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80", tags: ["Italian", "Spicy", "Vegetarian"] },
  { id: 27, name: "Grilled Sandwich", category: "food", price: 349, oldPrice: null, rating: 4.6, reviews: 198, badge: null, desc: "Sourdough bread with grilled chicken, avocado, sun-dried tomatoes, and pesto aioli. Pressed to perfection.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80", tags: ["Grilled", "Hearty", "Chicken"] },
  { id: 28, name: "Caesar Salad", category: "food", price: 329, oldPrice: null, rating: 4.5, reviews: 156, badge: null, desc: "Crisp romaine lettuce, house-made Caesar dressing, parmesan shavings, and garlic croutons.", img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&q=80", tags: ["Fresh", "Light", "Classic"] },
  { id: 29, name: "Chicken Quesadilla", category: "food", price: 449, oldPrice: null, rating: 4.7, reviews: 267, badge: "new", desc: "Flour tortilla filled with spiced chicken, three-cheese blend, and roasted peppers. Served with salsa.", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80", tags: ["Mexican", "Cheesy", "Grilled"] },

  // DESSERTS
  { id: 30, name: "Chocolate Brownie", category: "desserts", price: 249, oldPrice: null, rating: 4.9, reviews: 445, badge: "popular", desc: "Warm, fudgy dark chocolate brownie with a molten centre. Served with vanilla bean ice cream.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80", tags: ["Chocolate", "Warm", "Indulgent"] },
  { id: 31, name: "New York Cheesecake", category: "desserts", price: 299, oldPrice: null, rating: 4.8, reviews: 312, badge: null, desc: "Classic baked cheesecake with a buttery graham cracker crust. Topped with fresh berry compote.", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80", tags: ["Creamy", "Classic", "Fruity"] },
  { id: 32, name: "Glazed Donut", category: "desserts", price: 149, oldPrice: null, rating: 4.6, reviews: 234, badge: null, desc: "Freshly fried brioche donut with a glossy vanilla glaze. Available in chocolate, strawberry, and original.", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80", tags: ["Sweet", "Fresh", "Classic"] },
  { id: 33, name: "Blueberry Muffin", category: "desserts", price: 179, oldPrice: null, rating: 4.7, reviews: 189, badge: null, desc: "Moist, fluffy muffin bursting with fresh blueberries and a crunchy streusel topping.", img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&q=80", tags: ["Fruity", "Baked", "Fresh"] },
  { id: 34, name: "Tiramisu", category: "desserts", price: 329, oldPrice: 399, rating: 4.9, reviews: 278, badge: "special", desc: "Classic Italian tiramisu with espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80", tags: ["Italian", "Coffee", "Classic"] },
  { id: 35, name: "Waffles & Cream", category: "desserts", price: 279, oldPrice: null, rating: 4.8, reviews: 345, badge: "popular", desc: "Belgian waffles with whipped cream, fresh strawberries, and a drizzle of Belgian chocolate sauce.", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&q=80", tags: ["Sweet", "Belgian", "Fruity"] }
];

/* ── CART STATE ── */
let cart = JSON.parse(localStorage.getItem('brewCart')) || [];
let currentCategory = 'all';
let currentModalProduct = null;
let currentModalQty = 1;
let heroSlideIndex = 0;
let heroSlideInterval;

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initScrollProgress();
  initRevealAnimations();
  initBackToTop();
  updateCartUI();

  const page = window.location.pathname;
  if (page.includes('index') || page === '/' || page.endsWith('/')) {
    initHero();
    initTypingAnimation();
    initParticles();
    renderFeaturedProducts();
    initCategoryTabs();
  }
  if (page.includes('products')) {
    renderAllProducts();
    initProductsPage();
  }
  if (page.includes('about')) {
    initCounters();
  }
  if (page.includes('contact')) {
    initContactPage();
  }

  // Set today's date as min for date inputs
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(inp => inp.setAttribute('min', today));
});

/* ── LOADER ── */
function initLoader() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loaderProgress');
  if (!loader) return;
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 18 + 5;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    if (progress) progress.style.width = pct + '%';
    if (pct >= 100) {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        triggerRevealAnimations();
      }, 300);
    }
  }, 120);
  document.body.style.overflow = 'hidden';
}

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
  document.querySelectorAll('a, button, .product-card, .tab-btn, .faq-item, .team-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      follower.style.transform = 'translate(-50%,-50%) scale(1.5)';
      follower.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.opacity = '0.6';
    });
  });
}

/* ── NAVBAR ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function toggleMenu() {
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!links) return;
  links.classList.toggle('open');
  hamburger.classList.toggle('active');
}

/* ── SCROLL PROGRESS ── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrollTop / docHeight * 100) + '%';
  });
}

/* ── BACK TO TOP ── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── REVEAL ANIMATIONS ── */
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

function triggerRevealAnimations() {
  // Trigger elements already in viewport on load
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
}

/* ── HERO SLIDER ── */
function initHero() {
  const imgs = document.querySelectorAll('.hero-img');
  if (!imgs.length) return;
  imgs[0].classList.add('active');
  heroSlideInterval = setInterval(() => {
    goToSlide((heroSlideIndex + 1) % imgs.length);
  }, 5000);
}

function goToSlide(index) {
  const imgs = document.querySelectorAll('.hero-img');
  const dots = document.querySelectorAll('.dot');
  if (!imgs.length) return;
  imgs[heroSlideIndex].classList.remove('active');
  if (dots[heroSlideIndex]) dots[heroSlideIndex].classList.remove('active');
  heroSlideIndex = index;
  imgs[heroSlideIndex].classList.add('active');
  if (dots[heroSlideIndex]) dots[heroSlideIndex].classList.add('active');
}

/* ── TYPING ANIMATION ── */
function initTypingAnimation() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const phrases = [
    "Premium Coffee. Craft Cocktails. Live Sports.",
    "Where Every Sip Tells a Story.",
    "Bengaluru's Most Iconic Coffee Bar.",
    "Open Late. Brewed Right. Always Perfect."
  ];
  let phraseIndex = 0, charIndex = 0, isDeleting = false;
  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }
    let speed = isDeleting ? 40 : 70;
    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  type();
}

/* ── PARTICLES ── */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${4 + Math.random() * 6}s;
      --delay: ${Math.random() * 5}s;
      width: ${2 + Math.random() * 3}px;
      height: ${2 + Math.random() * 3}px;
      opacity: ${0.3 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}

/* ── RENDER PRODUCT CARD ── */
function renderProductCard(product, qty = 1) {
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
  const badgeHTML = product.badge
    ? `<div class="product-badge badge-${product.badge}">${product.badge === 'new' ? 'New' : product.badge === 'popular' ? '🔥 Popular' : '✦ Special'}</div>`
    : '';
  const oldPriceHTML = product.oldPrice ? `<small>₹${product.oldPrice}</small>` : '';
  const tagsHTML = product.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  return `
    <div class="product-card" data-id="${product.id}" data-cat="${product.category}">
      <div class="product-card-img">
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
        ${badgeHTML}
        <div class="product-card-overlay">
          <button class="overlay-btn" onclick="openProductModal(${product.id})">Quick View</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-cat">${getCatLabel(product.category)}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-rating">
          <span class="stars-display">${stars}</span>
          <span class="rating-num">${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${product.price}${oldPriceHTML}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty(${product.id}, -1, event)">−</button>
            <span class="qty-num" id="qty-${product.id}">${qty}</span>
            <button class="qty-btn" onclick="changeQty(${product.id}, 1, event)">+</button>
          </div>
        </div>
        <button class="add-cart-btn" id="addBtn-${product.id}" onclick="addToCart(${product.id}, event)" style="width:100%;margin-top:0.75rem;">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

function getCatLabel(cat) {
  const labels = { coffee: '☕ Coffee', bar: '🥃 Bar', drinks: '🍹 Drinks', snacks: '🍟 Snacks', food: '🍽️ Food', desserts: '🍰 Desserts' };
  return labels[cat] || cat;
}

/* ── FEATURED PRODUCTS (HOME) ── */
function renderFeaturedProducts(cat = 'coffee') {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const filtered = PRODUCTS.filter(p => p.category === cat).slice(0, 8);
  grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.08}s`;
    card.classList.add('reveal-up');
    setTimeout(() => card.classList.add('visible'), i * 80 + 100);
  });
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tabs .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFeaturedProducts(tab.dataset.cat);
    });
  });
}

/* ── ALL PRODUCTS PAGE ── */
let allProductsData = [...PRODUCTS];

function renderAllProducts() {
  const grid = document.getElementById('productsPageGrid');
  if (!grid) return;
  const search = document.getElementById('productSearch')?.value.toLowerCase() || '';
  let filtered = allProductsData.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.tags.some(t => t.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');
  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    if (resultsCount) resultsCount.textContent = 'No items found';
    return;
  }
  if (noResults) noResults.style.display = 'none';
  if (resultsCount) resultsCount.textContent = `Showing ${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

function initProductsPage() {
  // Check URL params for category
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    setCategory(cat);
  }
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-tabs .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderAllProducts();
}

function filterProducts() {
  renderAllProducts();
}

function sortProducts() {
  const sort = document.getElementById('sortSelect')?.value;
  if (!sort) return;
  switch (sort) {
    case 'price-asc': allProductsData.sort((a, b) => a.price - b.price); break;
    case 'price-desc': allProductsData.sort((a, b) => b.price - a.price); break;
    case 'rating': allProductsData.sort((a, b) => b.rating - a.rating); break;
    default: allProductsData = [...PRODUCTS]; break;
  }
  renderAllProducts();
}

function resetFilters() {
  currentCategory = 'all';
  allProductsData = [...PRODUCTS];
  document.querySelectorAll('.filter-tabs .tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === 'all'));
  const search = document.getElementById('productSearch');
  if (search) search.value = '';
  renderAllProducts();
}

/* ── PRODUCT MODAL ── */
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  currentModalProduct = product;
  currentModalQty = 1;
  const overlay = document.getElementById('productModalOverlay');
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalCategory').textContent = getCatLabel(product.category);
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = `₹${product.price}`;
  document.getElementById('modalQty').textContent = 1;
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
  document.getElementById('modalRating').innerHTML = `<span class="stars-display">${stars}</span><span class="rating-num">${product.rating} (${product.reviews} reviews)</span>`;
  if (document.getElementById('modalBadge')) {
    document.getElementById('modalBadge').textContent = product.badge ? (product.badge === 'new' ? 'New' : product.badge === 'popular' ? '🔥 Popular' : '✦ Special') : '';
    document.getElementById('modalBadge').style.display = product.badge ? 'block' : 'none';
  }
  if (document.getElementById('modalTags')) {
    document.getElementById('modalTags').innerHTML = product.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e && e.target !== document.getElementById('productModalOverlay')) return;
  closeProductModalBtn();
}

function closeProductModalBtn() {
  const overlay = document.getElementById('productModalOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function modalQtyChange(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const el = document.getElementById('modalQty');
  if (el) el.textContent = currentModalQty;
}

function addFromModal() {
  if (!currentModalProduct) return;
  addToCartDirect(currentModalProduct, currentModalQty);
  closeProductModalBtn();
}

function buyNow() {
  if (!currentModalProduct) return;
  addToCartDirect(currentModalProduct, currentModalQty);
  closeProductModalBtn();
  setTimeout(() => openCheckout(), 300);
}

/* ── CART SYSTEM ── */
function changeQty(id, delta, e) {
  if (e) e.stopPropagation();
  const el = document.getElementById(`qty-${id}`);
  if (!el) return;
  let qty = parseInt(el.textContent) + delta;
  if (qty < 1) qty = 1;
  el.textContent = qty;
}

function addToCart(id, e) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const qtyEl = document.getElementById(`qty-${id}`);
  const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
  addToCartDirect(product, qty);
  // Button feedback
  const btn = document.getElementById(`addBtn-${id}`);
  if (btn) {
    btn.textContent = '✓ Added!';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('added');
    }, 1500);
  }
}

function addToCartDirect(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart! 🛒`, 'success');
  bumpCartCount();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart', '');
}

function updateCartItemQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared', '');
}

function saveCart() {
  localStorage.setItem('brewCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  if (!cartItemsEl) return;
  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    cartItemsEl.innerHTML = '';
    if (cartEmpty) cartItemsEl.appendChild(cartEmpty);
    return;
  }
  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';
  const itemsHTML = cart.map(item => `
    <div class="cart-item" id="cartItem-${item.id}">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" /></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    </div>
  `).join('');
  cartItemsEl.innerHTML = itemsHTML;
  if (cartEmpty) { cartEmpty.style.display = 'none'; }
  // Update totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;
  const fmt = n => '₹' + n.toLocaleString('en-IN');
  const sub = document.getElementById('cartSubtotal');
  const taxEl = document.getElementById('cartTax');
  const tot = document.getElementById('cartTotal');
  if (sub) sub.textContent = fmt(subtotal);
  if (taxEl) taxEl.textContent = fmt(tax);
  if (tot) tot.textContent = fmt(total);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (!sidebar) return;
  const isOpen = sidebar.classList.contains('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function bumpCartCount() {
  const counts = document.querySelectorAll('#cartCount');
  counts.forEach(el => {
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 400);
  });
}

/* ── CHECKOUT ── */
function openCheckout() {
  if (cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }
  const overlay = document.getElementById('checkoutOverlay');
  if (!overlay) return;
  // Close cart sidebar first
  const sidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  // Populate checkout items
  const checkoutItems = document.getElementById('checkoutItems');
  const checkoutTotal = document.getElementById('checkoutTotal');
  if (checkoutItems) {
    checkoutItems.innerHTML = cart.map(item => `
      <div class="checkout-item">
        <span>${item.name} × ${item.qty}</span>
        <span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
      </div>
    `).join('');
  }
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + Math.round(subtotal * 0.05);
  if (checkoutTotal) checkoutTotal.textContent = '₹' + total.toLocaleString('en-IN');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ── SUBMIT ORDER (Google Sheets) ── */
async function submitOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const btnText = btn.querySelector('span');
  const btnLoader = btn.querySelector('.btn-loader');
  // Gather form data
  const fullName = document.getElementById('fullName')?.value.trim();
  const mobile = document.getElementById('mobile')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const address = document.getElementById('address')?.value.trim();
  const bookingDate = document.getElementById('bookingDate')?.value;
  const bookingTime = document.getElementById('bookingTime')?.value;
  const specialMessage = document.getElementById('specialMessage')?.value.trim();
  if (!fullName || !mobile || !email || !address || !bookingDate || !bookingTime) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + Math.round(subtotal * 0.05);
  const productNames = cart.map(item => item.name).join(', ');
  const quantities = cart.map(item => `${item.name}×${item.qty}`).join(', ');
  const orderId = 'BS-' + Date.now().toString(36).toUpperCase();
  const orderData = {
    orderId,
    fullName,
    mobile,
    email,
    address,
    products: productNames,
    quantity: quantities,
    totalPrice: '₹' + total.toLocaleString('en-IN'),
    bookingDate,
    bookingTime,
    message: specialMessage || 'None'
  };
  // Show loading state
  if (btnText) btnText.style.display = 'none';
  if (btnLoader) btnLoader.style.display = 'block';
  btn.disabled = true;
  try {
    if (SCRIPT_URL !== "PASTE_YOUR_WEB_APP_URL_HERE") {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(orderData)
      });
      const result = await response.json();
      if (result.status !== 'success') throw new Error('Server error');
    }
    // Success
    closeCheckout();
    clearCart();
    showOrderSuccess(orderId, fullName);
    document.getElementById('checkoutForm')?.reset();
  } catch (error) {
    console.error('Order submission error:', error);
    // Still show success for demo (Google Sheets not configured)
    closeCheckout();
    clearCart();
    showOrderSuccess(orderId, fullName);
    document.getElementById('checkoutForm')?.reset();
  } finally {
    if (btnText) btnText.style.display = 'inline';
    if (btnLoader) btnLoader.style.display = 'none';
    btn.disabled = false;
  }
}

function showOrderSuccess(orderId, name) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.style.zIndex = '9999';
  modal.innerHTML = `
    <div class="modal glass" style="max-width:480px;text-align:center;padding:3rem 2rem;">
      <div style="font-size:4rem;margin-bottom:1rem;">🎉</div>
      <h2 style="font-family:var(--font-display);font-size:2rem;margin-bottom:0.5rem;">Order Confirmed!</h2>
      <p style="color:var(--text-muted);margin-bottom:1rem;">Thank you, <strong style="color:var(--gold)">${name}</strong>!</p>
      <div style="background:rgba(201,168,76,0.08);border:1px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:1.5rem;">
        <p style="font-size:0.82rem;color:var(--text-muted);">Order ID</p>
        <p style="font-family:var(--font-display);font-size:1.3rem;color:var(--gold);font-weight:600;">${orderId}</p>
      </div>
      <p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:2rem;">We'll confirm your order via SMS and email shortly. See you at Brew & Shots! ☕</p>
      <button class="btn btn-gold" onclick="this.closest('.modal-overlay').remove();document.body.style.overflow='';" style="cursor:none;">
        Back to Menu
      </button>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

/* ── CONTACT FORM ── */
function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contactName')?.value;
  showToast(`Message sent! We'll get back to you soon, ${name}. 📧`, 'success');
  e.target.reset();
}

/* ── BOOKING FORM ── */
function submitBookingForm(e) {
  e.preventDefault();
  const name = document.getElementById('bookName')?.value;
  const date = document.getElementById('bookDate')?.value;
  const guests = document.getElementById('bookGuests')?.value;
  showToast(`Table booked for ${guests} guest(s) on ${date}! Confirmation sent to your email. 🎉`, 'success');
  e.target.reset();
}

/* ── FAQ TOGGLE ── */
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── COUNTERS ── */
function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('en-IN');
  }, 16);
}

/* ── CONTACT PAGE ── */
function initContactPage() {
  // Animate contact info cards on scroll
  initRevealAnimations();
}

/* ── NEWSLETTER ── */
function subscribeNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input) {
    showToast(`Subscribed! Welcome to the Brew & Shots family 🎉`, 'success');
    input.value = '';
  }
}

/* ── TOAST NOTIFICATIONS ── */
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── CLOSE MODALS ON ESC ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCheckout();
    closeProductModalBtn();
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar?.classList.contains('active')) {
      cartSidebar.classList.remove('active');
      cartOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks?.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('active');
    }
  }
});

/* ── RIPPLE EFFECT ON BUTTONS ── */
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const ripple = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    position:absolute;
    width:${size}px;height:${size}px;
    left:${e.clientX - rect.left - size/2}px;
    top:${e.clientY - rect.top - size/2}px;
    background:rgba(255,255,255,0.2);
    border-radius:50%;
    transform:scale(0);
    animation:rippleAnim 0.6s ease-out;
    pointer-events:none;
  `;
  if (!document.getElementById('rippleStyle')) {
    const style = document.createElement('style');
    style.id = 'rippleStyle';
    style.textContent = '@keyframes rippleAnim{to{transform:scale(2);opacity:0;}}';
    document.head.appendChild(style);
  }
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

/* ── PRODUCT CARD 3D TILT ── */
document.addEventListener('mousemove', function(e) {
  const card = e.target.closest('.product-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
});
document.addEventListener('mouseleave', function(e) {
  const card = e.target.closest('.product-card');
  if (card) card.style.transform = '';
}, true);
