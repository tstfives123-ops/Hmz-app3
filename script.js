/* ========================================
   HAMZA BLOG - JAVASCRIPT
   Premium Tech Blog App
   ======================================== */

// ========================================
// BLOG DATA
// ========================================
const blogPosts = [
  {
    id: 0,
    title: "The Rise of Agentic AI: How Autonomous Agents Are Reshaping Software Development",
    excerpt: "Agentic AI represents a paradigm shift where AI systems can autonomously plan, execute, and iterate on complex tasks. From code generation to system architecture, discover how these agents are transforming the developer workflow.",
    category: "Artificial Intelligence",
    date: "May 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>The landscape of software development is undergoing a seismic shift. Agentic AI—AI systems capable of autonomous planning, reasoning, and execution—is no longer science fiction. It's here, and it's fundamentally changing how we build software.</p>
      <h3>What is Agentic AI?</h3>
      <p>Unlike traditional AI models that respond to single prompts, agentic AI systems can break down complex goals into sub-tasks, execute them sequentially, learn from failures, and adapt their approach in real-time. Think of it as having a junior developer who never sleeps, never gets tired, and can iterate thousands of times per hour.</p>
      <h3>The Impact on Development Workflows</h3>
      <p>From automated code reviews to full-stack application generation, agentic AI is already making waves. Tools like AutoGPT, Devin, and Claude Code are demonstrating that AI agents can handle entire development workflows—from writing tests to deploying applications.</p>
      <p>The implications are profound. Junior developers can now leverage AI agents to accelerate their learning curve, while senior engineers can focus on architecture and strategic decisions rather than boilerplate implementation.</p>
      <h3>Challenges and Considerations</h3>
      <p>However, this technology isn't without its challenges. Hallucinations in code generation, security vulnerabilities in AI-written code, and the need for human oversight remain critical concerns. The key is finding the right balance between automation and human judgment.</p>
      <p>As we move forward, the most successful developers will be those who learn to effectively collaborate with AI agents—treating them as powerful teammates rather than replacements.</p>
    `
  },
  {
    id: 1,
    title: "Understanding Transformers: The Architecture Behind Modern LLMs",
    excerpt: "Dive deep into the transformer architecture that powers GPT, Claude, and Gemini. Learn how attention mechanisms work and why they revolutionized natural language processing.",
    category: "Machine Learning",
    date: "May 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>The transformer architecture, introduced in the seminal paper "Attention Is All You Need" by Vaswani et al. in 2017, has become the backbone of virtually every major language model today. But what makes it so special?</p>
      <h3>The Attention Mechanism</h3>
      <p>At the heart of transformers lies the self-attention mechanism. Unlike recurrent neural networks (RNNs) that process text sequentially, transformers can look at every word in a sentence simultaneously and determine how relevant each word is to every other word.</p>
      <p>This parallel processing capability is what allows transformers to scale to billions of parameters while maintaining computational efficiency during training.</p>
      <h3>Multi-Head Attention</h3>
      <p>Modern transformers use multi-head attention, which means the model can focus on different aspects of the input simultaneously. One head might focus on grammatical relationships, another on semantic meaning, and yet another on contextual dependencies.</p>
      <h3>From BERT to GPT to Claude</h3>
      <p>The transformer architecture has spawned an entire family of models. BERT uses bidirectional encoding for understanding tasks, while GPT uses autoregressive decoding for generation. Each iteration has pushed the boundaries of what's possible with language AI.</p>
      <p>Understanding transformers isn't just academic—it's essential for anyone building with modern AI tools.</p>
    `
  },
  {
    id: 2,
    title: "The Future of Frontend: Beyond React and Into the Component Era",
    excerpt: "Explore how component-driven architecture is evolving beyond React, with new frameworks and approaches that promise faster builds, better performance, and improved developer experience.",
    category: "Web Development",
    date: "May 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>React has dominated frontend development for nearly a decade, but the landscape is shifting. New approaches to component architecture are emerging that challenge React's paradigm and offer compelling alternatives.</p>
      <h3>The Rise of Server Components</h3>
      <p>React Server Components (RSC) represent a fundamental rethinking of how components work. By rendering components on the server, we can reduce client-side JavaScript bundles and improve initial page load times dramatically.</p>
      <h3>Signals and Fine-Grained Reactivity</h3>
      <p>Frameworks like SolidJS, Svelte, and Qwik are pioneering signal-based reactivity—an approach that updates only the specific DOM elements that change, rather than re-rendering entire component trees.</p>
      <p>This fine-grained approach can deliver performance improvements of 10x or more compared to traditional virtual DOM diffing.</p>
      <h3>The Multi-Framework Future</h3>
      <p>Perhaps the most exciting development is the emergence of framework-agnostic component systems. Tools like Astro, Fresh, and Enhance allow developers to mix and match components from different frameworks within a single application.</p>
      <p>The future of frontend isn't about choosing one framework—it's about having the flexibility to use the right tool for each specific problem.</p>
    `
  },
  {
    id: 3,
    title: "Zero Trust Architecture: Building Security for the Cloud-Native Era",
    excerpt: "Learn why Zero Trust has become the gold standard for modern cybersecurity and how to implement it in your cloud infrastructure.",
    category: "Cybersecurity",
    date: "April 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>The traditional perimeter-based security model is dead. In a world where employees work from anywhere, applications run across multiple clouds, and threats are increasingly sophisticated, Zero Trust has emerged as the only viable security strategy.</p>
      <h3>What is Zero Trust?</h3>
      <p>Zero Trust is built on a simple principle: never trust, always verify. Every access request—whether from inside or outside the network—is fully authenticated, authorized, and encrypted before access is granted.</p>
      <h3>Key Principles</h3>
      <p>The core tenets of Zero Trust include least-privilege access, micro-segmentation, continuous verification, and assuming breach. These principles work together to create a security posture that adapts to modern threat landscapes.</p>
      <h3>Implementation Strategies</h3>
      <p>Implementing Zero Trust isn't a single project—it's a journey. Start with identity and access management, then move to network segmentation, device trust, and application-level security controls.</p>
      <p>Tools like Okta, Cloudflare Zero Trust, and Google's BeyondCorp provide building blocks for creating a comprehensive Zero Trust architecture.</p>
    `
  },
  {
    id: 4,
    title: "Kubernetes at Scale: Lessons from Running 10,000+ Clusters",
    excerpt: "Real-world insights from managing massive Kubernetes deployments. Learn about multi-cluster strategies, GitOps workflows, and avoiding common pitfalls.",
    category: "DevOps",
    date: "April 25, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>Running Kubernetes at scale is a different beast entirely from managing a single cluster. After years of operating thousands of clusters across multiple regions and cloud providers, here are the lessons we've learned the hard way.</p>
      <h3>The Multi-Cluster Reality</h3>
      <p>When you reach a certain scale, a single Kubernetes cluster becomes a liability. Blast radius, upgrade strategies, and regional compliance all push you toward a multi-cluster architecture.</p>
      <p>But multi-cluster brings its own challenges: service mesh complexity, cross-cluster networking, and the operational overhead of managing dozens or hundreds of control planes.</p>
      <h3>GitOps at Scale</h3>
      <p>GitOps—using Git as the single source of truth for declarative infrastructure—becomes essential at scale. Tools like ArgoCD and Flux enable automated, auditable deployments across your entire fleet.</p>
      <h3>Observability is Non-Negotiable</h3>
      <p>You can't manage what you can't see. Centralized logging, distributed tracing, and metrics aggregation across clusters are table stakes. We use a combination of Prometheus, Grafana, Loki, and Jaeger to maintain visibility.</p>
      <p>The key insight? Invest in observability early. Retrofitting it later is exponentially more expensive.</p>
    `
  },
  {
    id: 5,
    title: "Edge Computing: Bringing AI to the Periphery",
    excerpt: "How edge computing is enabling real-time AI inference on devices, from smartphones to IoT sensors, and what it means for the future of distributed systems.",
    category: "Cloud Computing",
    date: "April 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>The cloud isn't the only place where AI happens anymore. Edge computing is bringing intelligence directly to devices, enabling real-time inference with millisecond latency and without sending data to remote servers.</p>
      <h3>Why Edge AI Matters</h3>
      <p>Privacy, latency, and bandwidth are the three pillars driving edge AI adoption. Processing data locally means sensitive information never leaves the device. For applications like autonomous driving or industrial automation, every millisecond counts.</p>
      <h3>Model Optimization Techniques</h3>
      <p>Running large models on edge devices requires significant optimization. Quantization, pruning, and knowledge distillation are essential techniques for shrinking models without sacrificing too much accuracy.</p>
      <p>Frameworks like TensorFlow Lite, ONNX Runtime, and Core ML make it possible to deploy sophisticated models on everything from Raspberry Pis to smartphones.</p>
      <h3>The Hybrid Future</h3>
      <p>The most effective architectures combine edge and cloud. Simple, latency-critical inference happens on-device, while complex training and model updates happen in the cloud. This hybrid approach gives you the best of both worlds.</p>
    `
  },
  {
    id: 6,
    title: "Rust in Production: A Practical Guide for Teams",
    excerpt: "Moving beyond the hype—real strategies for adopting Rust in your organization, from team training to migration patterns and tooling.",
    category: "Web Development",
    date: "April 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>Rust has been the "most loved" programming language on Stack Overflow for seven years running. But loving a language and successfully adopting it in production are two very different things.</p>
      <h3>When Rust Makes Sense</h3>
      <p>Rust shines in performance-critical systems, low-level infrastructure, and anywhere memory safety is paramount. Web servers, databases, and systems tools are all excellent candidates for Rust adoption.</p>
      <h3>The Learning Curve is Real</h3>
      <p>The borrow checker is Rust's superpower and its biggest barrier to entry. Plan for a 3-6 month learning curve for experienced developers, and invest in mentorship and pair programming during the transition.</p>
      <h3>Migration Strategies</h3>
      <p>Don't rewrite everything at once. Start with a single service or component. Rust's excellent FFI (Foreign Function Interface) makes it possible to incrementally replace C/C++ components or build new microservices alongside existing ones.</p>
      <p>Tools like cargo, rust-analyzer, and Clippy make the development experience surprisingly pleasant once you're past the initial learning phase.</p>
    `
  },
  {
    id: 7,
    title: "Generative AI for UI Design: From Prompts to Production",
    excerpt: "How AI-powered design tools are changing the workflow for designers and developers, and what this means for the future of digital product design.",
    category: "Artificial Intelligence",
    date: "April 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>The intersection of generative AI and UI design is creating entirely new workflows. Tools like Midjourney, DALL-E, and specialized UI generators are enabling designers to move from concept to prototype in minutes rather than days.</p>
      <h3>The New Design Workflow</h3>
      <p>Imagine describing your ideal interface in natural language and having AI generate multiple design variations instantly. That's the reality tools like Galileo AI, Uizard, and Framer's AI features are creating.</p>
      <h3>From Design to Code</h3>
      <p>The most exciting development is the bridge from AI-generated designs to production code. Tools can now export designs directly to React, Vue, or Tailwind CSS, dramatically shortening the design-to-development handoff.</p>
      <h3>The Human Element Remains Critical</h3>
      <p>AI is a powerful tool, but it doesn't replace human creativity and judgment. The best results come from designers who use AI to accelerate ideation while maintaining creative direction and user-centric thinking.</p>
    `
  },
  {
    id: 8,
    title: "GraphQL vs REST in 2026: The State of API Architecture",
    excerpt: "An updated look at the API landscape. Has GraphQL finally won, or is REST making a comeback with modern enhancements?",
    category: "Web Development",
    date: "April 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>The API architecture debate has evolved significantly since GraphQL's introduction. In 2026, the landscape looks quite different from what early adopters might have predicted.</p>
      <h3>Where GraphQL Excels</h3>
      <p>GraphQL continues to shine in complex, data-rich applications where clients need to fetch exactly the data they require. Mobile apps, dashboards, and content-heavy platforms all benefit from GraphQL's flexible querying.</p>
      <h3>The REST Renaissance</h3>
      <p>REST hasn't gone anywhere. With OpenAPI 3.1, JSON Schema, and modern tooling, REST APIs have become more standardized and self-documenting than ever. For simple CRUD operations, REST often remains the pragmatic choice.</p>
      <h3>Hybrid Approaches</h3>
      <p>Many organizations are adopting hybrid strategies—GraphQL as a gateway layer over existing REST services, or using GraphQL for complex queries while keeping REST for simple operations.</p>
      <p>The key lesson? Choose the right tool for your specific use case rather than defaulting to the latest trend.</p>
    `
  },
  {
    id: 9,
    title: "Quantum Computing: What Developers Need to Know",
    excerpt: "A practical introduction to quantum computing for software engineers. Understanding qubits, quantum algorithms, and when classical computing still wins.",
    category: "Artificial Intelligence",
    date: "April 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
    author: "Hamza",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: `
      <p>Quantum computing has moved from theoretical physics to practical reality. IBM, Google, and startups like Rigetti are building quantum processors with hundreds of qubits, and cloud access to quantum computers is now available to anyone.</p>
      <h3>Qubits vs Bits</h3>
      <p>Unlike classical bits that are either 0 or 1, qubits can exist in superposition—being both 0 and 1 simultaneously. This property, combined with entanglement, allows quantum computers to solve certain problems exponentially faster than classical computers.</p>
      <h3>Current Limitations</h3>
      <p>Despite the hype, quantum computers are still in the NISQ (Noisy Intermediate-Scale Quantum) era. Decoherence, error rates, and the need for extreme cooling mean that practical quantum advantage is limited to specific problem domains.</p>
      <h3>Getting Started</h3>
      <p>For developers interested in quantum computing, frameworks like Qiskit (IBM), Cirq (Google), and Q# (Microsoft) provide accessible entry points. Start with quantum algorithms like Grover's search and Shor's factoring to understand the paradigm shift.</p>
    `
  }
];

const categories = [
  { name: "Artificial Intelligence", count: 42, icon: "layers", description: "Deep dives into AI, LLMs, neural networks, and autonomous systems." },
  { name: "Web Development", count: 38, icon: "monitor", description: "Frontend frameworks, backend architecture, and modern web technologies." },
  { name: "Machine Learning", count: 29, icon: "users", description: "ML algorithms, model training, and data science best practices." },
  { name: "Cybersecurity", count: 21, icon: "shield", description: "Security architecture, threat detection, and compliance frameworks." },
  { name: "Cloud Computing", count: 15, icon: "globe", description: "AWS, Azure, GCP, serverless, and cloud-native architectures." },
  { name: "DevOps", count: 18, icon: "cpu", description: "CI/CD, Kubernetes, infrastructure as code, and SRE practices." },
  { name: "Data Engineering", count: 12, icon: "database", description: "Data pipelines, ETL, warehousing, and real-time analytics." },
  { name: "Mobile Development", count: 10, icon: "smartphone", description: "iOS, Android, React Native, and cross-platform strategies." },
  { name: "Blockchain", count: 8, icon: "link", description: "Web3, smart contracts, DeFi, and distributed ledger technology." }
];

// ========================================
// STATE
// ========================================
let currentPage = 'home';
let displayedPosts = 6;
let currentFilter = null;
let searchQuery = '';

// ========================================
// SPLASH SCREEN
// ========================================
function initSplashScreen() {
  const splash = document.getElementById('splash-screen');

  setTimeout(() => {
    splash.classList.add('hidden');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  }, 2500);
}

// ========================================
// NAVBAR
// ========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Scroll behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ========================================
// PAGE NAVIGATION
// ========================================
function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show target page
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });

  currentPage = page;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-init scroll reveal for new page
  setTimeout(() => {
    initScrollReveal();
  }, 100);

  // Render page-specific content
  if (page === 'blog') {
    renderBlogGrid();
    renderTrendingList();
  } else if (page === 'categories') {
    renderCategoriesFull();
  }
}

// ========================================
// HERO PARTICLES
// ========================================
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.width = (Math.random() * 3 + 2) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    container.appendChild(particle);
  }
}

// ========================================
// SCROLL REVEAL
// ========================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal-up').forEach(el => {
    el.classList.remove('revealed');
    observer.observe(el);
  });
}

// ========================================
// BLOG GRID RENDERING
// ========================================
function renderBlogGrid() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  let posts = [...blogPosts];

  // Apply search filter
  if (searchQuery) {
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply category filter
  if (currentFilter) {
    const filterMap = {
      'AI': 'Artificial Intelligence',
      'Web Dev': 'Web Development',
      'ML': 'Machine Learning',
      'Security': 'Cybersecurity',
      'Cloud': 'Cloud Computing',
      'DevOps': 'DevOps'
    };
    posts = posts.filter(post => post.category === filterMap[currentFilter]);
  }

  const postsToShow = posts.slice(0, displayedPosts);

  if (postsToShow.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
        <p style="color: var(--text-muted); font-size: 1.1rem;">No articles found matching your criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = postsToShow.map(post => `
    <article class="blog-card reveal-up">
      <div class="blog-card-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <span class="blog-card-category">${post.category}</span>
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <div class="blog-card-author">
            <img src="${post.authorImage}" alt="${post.author}">
            <span>${post.author}</span>
          </div>
          <a href="#" class="blog-card-read" onclick="openArticle(${post.id}); return false;">Read →</a>
        </div>
      </div>
    </article>
  `).join('');

  // Update load more button
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = posts.length > displayedPosts ? 'inline-flex' : 'none';
  }

  // Re-init scroll reveal for new cards
  setTimeout(() => {
    initScrollReveal();
  }, 50);
}

function loadMorePosts() {
  displayedPosts += 3;
  renderBlogGrid();
}

// ========================================
// TRENDING LIST
// ========================================
function renderTrendingList() {
  const list = document.getElementById('trending-list');
  if (!list) return;

  const trending = blogPosts.slice(0, 5);

  list.innerHTML = trending.map((post, index) => `
    <a href="#" class="trending-item" onclick="openArticle(${post.id}); return false;">
      <span class="trending-number">0${index + 1}</span>
      <div class="trending-content">
        <h4>${post.title}</h4>
        <span>${post.date} · ${post.readTime}</span>
      </div>
    </a>
  `).join('');
}

// ========================================
// CATEGORIES FULL PAGE
// ========================================
function renderCategoriesFull() {
  const grid = document.getElementById('categories-full-grid');
  if (!grid) return;

  grid.innerHTML = categories.map(cat => `
    <div class="category-full-card reveal-up">
      <div class="category-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          ${getCategoryIcon(cat.icon)}
        </svg>
      </div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
      <span style="display: block; color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1.5rem;">${cat.count} Articles</span>
      <button class="btn btn-outline" onclick="filterByCategoryName('${cat.name}')">Explore Articles</button>
    </div>
  `).join('');

  setTimeout(() => {
    initScrollReveal();
  }, 50);
}

function getCategoryIcon(icon) {
  const icons = {
    layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>'
  };
  return icons[icon] || icons.layers;
}

function filterByCategoryName(categoryName) {
  const filterMap = {
    'Artificial Intelligence': 'AI',
    'Web Development': 'Web Dev',
    'Machine Learning': 'ML',
    'Cybersecurity': 'Security',
    'Cloud Computing': 'Cloud',
    'DevOps': 'DevOps'
  };
  filterByCategory(filterMap[categoryName] || 'AI');
}

// ========================================
// SEARCH & FILTER
// ========================================
function handleSearch(query) {
  searchQuery = query;
  displayedPosts = 6;
  renderBlogGrid();
}

function filterByCategory(category) {
  currentFilter = category;
  searchQuery = '';
  displayedPosts = 6;

  // Clear search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  showPage('blog');
  renderBlogGrid();

  showToast(`Filtered by: ${category}`, 'success');
}

// ========================================
// ARTICLE MODAL
// ========================================
function openArticle(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById('article-modal');
  const body = document.getElementById('article-modal-body');

  body.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <div class="article-content">
      <span class="article-category">${post.category}</span>
      <h2>${post.title}</h2>
      <div class="article-meta">
        <span>${post.date}</span>
        <span>${post.readTime}</span>
        <span>By ${post.author}</span>
      </div>
      ${post.content}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  const modal = document.getElementById('article-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ========================================
// AUTH MODAL
// ========================================
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));

  document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`auth-${tab}`).classList.add('active');
}

function handleAuthSubmit(event, type) {
  event.preventDefault();
  closeAuthModal();
  showToast(type === 'login' ? 'Welcome back!' : 'Account created successfully!', 'success');
}

// ========================================
// FORM HANDLING
// ========================================
function handleSubscribe(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;

  if (email) {
    showToast('Thanks for subscribing! Check your inbox.', 'success');
    form.reset();
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  showToast('Message sent! We will get back to you soon.', 'success');
  event.target.reset();
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success' 
        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
        : '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>'
      }
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeArticle();
    closeAuthModal();
  }
});

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initSplashScreen();
  initNavbar();
  initParticles();
  initScrollReveal();
  renderBlogGrid();
  renderTrendingList();
  renderCategoriesFull();
});
