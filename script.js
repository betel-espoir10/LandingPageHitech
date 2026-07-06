document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle icon between bars and times
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '1rem 0';
        }
    });

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simuler l'envoi
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Envoi en cours... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Message envoyé ! <i class="fa-solid fa-check"></i>';
                btn.classList.replace('btn-primary', 'btn-outline');
                btn.style.backgroundColor = '#10b981'; // Green success
                btn.style.color = 'white';
                btn.style.borderColor = '#10b981';
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-outline', 'btn-primary');
                    btn.style = ''; // Reset inline styles
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // 4. Reveal Animations on Scroll
    // Appliquer une classe d'animation aux sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialiser les éléments à animer
    const animateElements = document.querySelectorAll('.step-card, .service-card, .testimonial-card, .section-header');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // 5. Service Details Modal
    const modalData = {
        'dev-web': {
            title: 'Génie Logiciel & Dev Web',
            icon: '<i class="fa-solid fa-code"></i>',
            content: `
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-seedling"></i> Niveau Débutant</div>
                    <div class="level-desc">Comprendre les bases du web (HTML, CSS, JavaScript). Créer des pages statiques responsives et interactives.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-layer-group"></i> Niveau Intermédiaire</div>
                    <div class="level-desc">Développer des applications dynamiques avec React, gérer l'état de l'application et interagir avec des API externes.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-server"></i> Niveau Avancé</div>
                    <div class="level-desc">Architecture backend avec Node.js/Express, conception d'API RESTful, gestion de bases de données (SQL/NoSQL) et authentification.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-crown"></i> Niveau Expert</div>
                    <div class="level-desc">Déploiement cloud, intégration et déploiement continus (CI/CD), sécurité avancée des applications web et architecture microservices.</div>
                </div>
            `
        },
        'ia-data': {
            title: 'Intelligence Artificielle & Data',
            icon: '<i class="fa-solid fa-brain"></i>',
            content: `
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-seedling"></i> Niveau Débutant</div>
                    <div class="level-desc">Introduction à Python pour la data, manipulation de données avec Pandas et NumPy, concepts statistiques de base.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-chart-line"></i> Niveau Intermédiaire</div>
                    <div class="level-desc">Apprentissage supervisé et non supervisé avec Scikit-Learn. Visualisation avancée de données pour la prise de décision.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-network-wired"></i> Niveau Avancé</div>
                    <div class="level-desc">Deep Learning avec TensorFlow ou PyTorch. Réseaux de neurones artificiels, traitement du langage naturel (NLP) et vision par ordinateur.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-crown"></i> Niveau Expert</div>
                    <div class="level-desc">Mise en production de modèles (MLOps), IA générative, optimisation d'algorithmes complexes et éthique de l'IA.</div>
                </div>
            `
        },
        'cyber': {
            title: 'Réseaux & Cybersécurité',
            icon: '<i class="fa-solid fa-shield-halved"></i>',
            content: `
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-seedling"></i> Niveau Débutant</div>
                    <div class="level-desc">Fondamentaux des réseaux (modèles OSI/TCP-IP), routage de base et concepts essentiels de la sécurité de l'information.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-lock"></i> Niveau Intermédiaire</div>
                    <div class="level-desc">Administration système (Linux/Windows), sécurisation des infrastructures, configuration de pare-feu et VPN d'entreprise.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-user-secret"></i> Niveau Avancé</div>
                    <div class="level-desc">Ethical hacking, tests d'intrusion (pentesting), analyse approfondie de vulnérabilités et concepts de cryptographie.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-crown"></i> Niveau Expert</div>
                    <div class="level-desc">Réponse aux incidents de sécurité (SOC), forensic numérique, architecture globale de sécurité d'entreprise et conformité légale.</div>
                </div>
            `
        },
        'dev-mobile': {
            title: 'Développement Mobile',
            icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
            content: `
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-seedling"></i> Niveau Débutant</div>
                    <div class="level-desc">Fondamentaux de la programmation mobile. Introduction à la conception d'interfaces utilisateur (UI) et à l'expérience utilisateur (UX) sur mobile.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-code"></i> Niveau Intermédiaire</div>
                    <div class="level-desc">Développement natif Android avec <strong>Java</strong> et <strong>Kotlin</strong>. Gestion du cycle de vie des applications et persistance des données.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-layer-group"></i> Niveau Avancé</div>
                    <div class="level-desc">Développement multiplateforme (Cross-platform) avec le framework <strong>Flutter</strong> et le langage <strong>Dart</strong>. Création d'applications performantes pour iOS et Android à partir d'un seul code.</div>
                </div>
                <div class="level-section">
                    <div class="level-title"><i class="fa-solid fa-crown"></i> Niveau Expert</div>
                    <div class="level-desc">Architecture avancée, appels API complexes, tests automatisés et déploiement final sur l'App Store et le Google Play Store.</div>
                </div>
            `
        }
    };

    const modalOverlay = document.getElementById('serviceModal');
    if (modalOverlay) {
        const closeModalBtn = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalIcon = document.getElementById('modalIcon');
        const modalBody = document.getElementById('modalBody');
        const openModalBtns = document.querySelectorAll('.open-modal-btn');
        const modalCtaBtn = document.querySelector('.modal-cta-btn');

        // Open Modal Function
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const moduleKey = btn.getAttribute('data-module');
                const data = modalData[moduleKey];

                if (data) {
                    modalTitle.textContent = data.title;
                    modalIcon.innerHTML = data.icon;
                    modalBody.innerHTML = data.content;
                    
                    // Add active class to show modal
                    modalOverlay.classList.add('active');
                    
                    // Prevent body scroll when modal is open
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close Modal Function
        const closeModal = () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scroll
        };

        closeModalBtn.addEventListener('click', closeModal);

        // Close on overlay click
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close on CTA click (Open Registration Modal)
        modalCtaBtn.addEventListener('click', () => {
            closeModal();
            // Open Registration Modal
            const regModal = document.getElementById('registrationModal');
            if (regModal) {
                regModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 6. Registration Modal Logic
    const regModalOverlay = document.getElementById('registrationModal');
    if (regModalOverlay) {
        const closeRegBtn = document.getElementById('closeRegModal');
        const regForm = document.getElementById('registrationForm');

        const closeRegModal = () => {
            regModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeRegBtn.addEventListener('click', closeRegModal);

        regModalOverlay.addEventListener('click', (e) => {
            if (e.target === regModalOverlay) {
                closeRegModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && regModalOverlay.classList.contains('active')) {
                closeRegModal();
            }
        });

        if (regForm) {
            regForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = regForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                btn.innerHTML = 'Validation... <i class="fa-solid fa-spinner fa-spin"></i>';
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = 'Inscription validée ! <i class="fa-solid fa-check"></i>';
                    btn.style.backgroundColor = '#10b981';
                    btn.style.borderColor = '#10b981';
                    btn.style.color = 'white';
                    regForm.reset();

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style = '';
                        btn.disabled = false;
                        closeRegModal();
                    }, 2500);
                }, 1500);
            });
        }
    }
});
