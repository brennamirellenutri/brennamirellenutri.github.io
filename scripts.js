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