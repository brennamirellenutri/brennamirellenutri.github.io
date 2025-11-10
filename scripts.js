// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
});

// Function to close menu when a link is clicked
function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
 }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Desktop menu active
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('.desktop-menu a');

    function setActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para considerar o topo do header
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
});
// Mobile menu active
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const desktopMenuLinks = document.querySelectorAll('.desktop-menu a');
    const mobileMenuLinks = document.querySelectorAll('.menu-link-mobile');

    function setActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para considerar o topo do header
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Atualizar links do Desktop Menu
        desktopMenuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });

        // Atualizar links do Mobile Menu
        mobileMenuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.menu-link-mobile');

    // Abrir o menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impede o scroll
    });

    // Fechar o menu
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Reativa o scroll
    });

    // Fechar o menu ao clicar em um link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Reativa o scroll
        });
    });
});
// Cloudflare protection script movido do index.html
(function(){
    function c(){
        var b=a.contentDocument||a.contentWindow.document;
        if(b){
            var d=b.createElement('script');
            d.innerHTML="window.__CF$cv$params={r:'934f951c079d6f8b',t:'MTc0NTQzNDYwMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if(document.body){
        var a=document.createElement('iframe');
        a.height=1;
        a.width=1;
        a.style.position='absolute';
        a.style.top=0;
        a.style.left=0;
        a.style.border='none';
        a.style.visibility='hidden';
        document.body.appendChild(a);
        if('loading'!==document.readyState)c();
        else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
        else{
            var e=document.onreadystatechange||function(){};
            document.onreadystatechange=function(b){
                e(b);
                'loading'!==document.readyState&&(document.onreadystatechange=e,c())
            }
        }
    }
})();

function animateNumbers() {
  document.querySelectorAll('.selo-numero').forEach(function(el) {
    const target = +el.getAttribute('data-numero');
    let count = 0;
    const increment = Math.ceil(target / 40);
    function update() {
      count += increment;
      if (count >= target) {
        el.textContent = '+' + target;
      } else {
        el.textContent = '+' + count;
        requestAnimationFrame(update);
      }
    }
    update();
  });
}
window.addEventListener('DOMContentLoaded', animateNumbers);

// Recommendations (merged from recomend site) - namespaced and scoped to #recomendacoes
function initRecomendacoes() {
    const section = document.getElementById('recomendacoes');
    if (!section) return;

    // Tabs
    const tabButtons = section.querySelectorAll('.reco-tab-btn');
    const tabContents = section.querySelectorAll('.reco-tab-content');

    function showTab(name) {
        tabButtons.forEach(btn => {
            if (btn.getAttribute('data-tab') === name) btn.classList.add('reco-tab-active');
            else btn.classList.remove('reco-tab-active');
        });
        tabContents.forEach(c => {
            if (c.classList.contains('reco-tab-' + name)) c.classList.remove('hidden');
            else c.classList.add('hidden');
        });
        // If switching to recommendations, ensure product filters initialized
        if (name === 'recomendacoes') {
            initializeRecomendacoesFilters();
        }
    }

    // Tab button click listeners
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const t = btn.getAttribute('data-tab');
            showTab(t);
            // scroll to section when switching tabs on mobile
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // If nav link to section is clicked, open coupons by default
    document.querySelectorAll('a[href="#recomendacoes"]').forEach(a => {
        a.addEventListener('click', () => {
            // prefer coupons when navigating to the section
            showTab('coupons');
        });
    });

    // Coupons: copy buttons
    function initCouponButtons() {
        const copyBtns = section.querySelectorAll('.reco-copy-btn');
        copyBtns.forEach(btn => {
            btn.addEventListener('click', async () => {
                const card = btn.closest('.reco-coupon-card');
                if (!card) return;
                const codeEl = card.querySelector('.font-mono');
                const code = codeEl ? codeEl.textContent.trim() : '';
                try {
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        await navigator.clipboard.writeText(code);
                    } else {
                        const ta = document.createElement('textarea');
                        ta.value = code;
                        document.body.appendChild(ta);
                        ta.select();
                        document.execCommand('copy');
                        ta.remove();
                    }
                    const previous = btn.textContent;
                    btn.textContent = 'Copiado!';
                    setTimeout(() => btn.textContent = previous, 1200);
                } catch (e) {
                    console.warn('Copy failed', e);
                }
            });
        });
    }

    // Recomendacoes filters (kept namespaced)
    function initializeRecomendacoesFilters() {
        const filterTags = section.querySelectorAll('.reco-filter-tag');
        const productCards = section.querySelectorAll('.reco-product-card');
        const categoryCards = section.querySelectorAll('.reco-category-card');
        const productsTitle = section.querySelector('#reco-products-title');

        // avoid attaching multiple listeners
        if (initializeRecomendacoesFilters._inited) return;
        initializeRecomendacoesFilters._inited = true;

        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterTags.forEach(t => t.classList.remove('reco-active'));
                this.classList.add('reco-active');
                filterProducts(filter);
                updateTitle(filter);
            });
        });

        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                filterTags.forEach(t => t.classList.remove('reco-active'));
                categoryCards.forEach(c => c.classList.remove('reco-active'));
                this.classList.add('reco-active');
                const corresponding = section.querySelector(`.reco-filter-tag[data-filter="${category}"]`);
                if (corresponding) corresponding.classList.add('reco-active');
                filterProducts(category);
                updateTitle(category);
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });

        function filterProducts(filter) {
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.remove('reco-hidden');
                } else {
                    card.classList.add('reco-hidden');
                    setTimeout(() => { card.style.display = 'none'; }, 250);
                }
            });
        }

        function updateTitle(filter) {
            const titles = {
                'all': 'Todos os Produtos',
                'iogurtes': 'Iogurtes Recomendados',
                'omega3': 'Suplementos Ômega 3',
                'whey': 'Whey Protein',
                'creatina': 'Creatina'
            };
            if (productsTitle) productsTitle.textContent = titles[filter] || 'Produtos';
        }

        // init default for recommendations
        const firstTag = section.querySelector('.reco-filter-tag[data-filter="all"]');
        const firstCard = section.querySelector('.reco-category-all');
        if (firstTag) firstTag.classList.add('reco-active');
        if (firstCard) firstCard.classList.add('reco-active');
        // show all by default
        filterProducts('all');
    }

    // entry animation observer for categories/products/coupons
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    section.querySelectorAll('.reco-category-card, .reco-product-card, .reco-coupon-card').forEach(node => {
        node.style.opacity = '0';
        node.style.transform = 'translateY(20px)';
        node.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        obs.observe(node);
    });

    // initialize: show coupons tab and setup coupon buttons
    showTab('coupons');
    initCouponButtons();
}

window.addEventListener('DOMContentLoaded', initRecomendacoes);
