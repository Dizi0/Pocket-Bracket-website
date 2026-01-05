const translations = {
    en: {
        beta_warning: "⚠️ APP IN BETA // GOOGLE PLAY PENDING ⚠️",
        hero_title_1: "Don't get DQ'd.",
        hero_title_2: "Get Pocket Bracket.",
        hero_subtitle: "The ultimate pocket companion for start.gg competitors. Instant match calls, station locations, and opponent scouting.",
        cta_download: "Download APK (v0.9)",
        cta_github: "Src Code",
        features_title: "System Modules",
        feat_alerts_title: "Instant Alerts",
        feat_alerts_desc: "Receive high-contrast \"MATCH CALL\" notifications. Never miss a call.",
        feat_station_title: "Station & Stream",
        feat_station_desc: "Know exactly where to go. \"Station 5\" or \"Stream 1\" displayed clearly.",
        feat_scout_title: "Opponent Scout",
        feat_scout_desc: "See who you're playing, their rank, avatar, and character.",
        feat_follow_title: "Smart Follows",
        feat_follow_desc: "Track friends and favorite players. Get notified.",
        feat_history_title: "Deep History",
        feat_history_desc: "Access full tournament history with infinite scrolling.",
        feat_poll_title: "Live Polling",
        feat_poll_desc: "Smart background polling keeps bracket status synchronized.",
        tech_title: "Architecture",
        tech_rn: "Native performance on Android & iOS via Expo.",
        tech_api: "Direct integration with official tournament data.",
        roadmap_title: "Roadmap & Status",
        road_friend_title: "Friendlist / Follow System",
        road_friend_desc: "Follow players and view their active/history profiles.",
        road_h2h_title: "Head-to-Head (H2H)",
        road_h2h_desc: "See your historical match records against any opponent.",
        road_map_title: "Venue Map",
        road_map_desc: "Interactive indoor maps to find your station instantly.",
        road_pass_title: "Digital Pass",
        road_pass_desc: "QR Code for easy venue check-in.",
        download_title: "Initialize",
        download_desc: "Get Pocket Bracket on your device.",
        btn_google: "Get it on Google Play",
        btn_apple: "Download on App Store",
        tooltip_pending: "Pending Approval",
        direct_dl_label: "Beta Direct Download:",
        footer_credit: "Built for competitors."
    },
    fr: {
        beta_warning: "⚠️ APPLICATION EN BETA // GOOGLE PLAY EN ATTENTE ⚠️",
        hero_title_1: "Ne vous faites pas DQ.",
        hero_title_2: "Prenez Pocket Bracket.",
        hero_subtitle: "Le compagnon ultime pour les compétiteurs start.gg. Appels de match instantanés, stations et scouting d'adversaire.",
        cta_download: "Télécharger l'APK (v0.9)",
        cta_github: "Code Source",
        features_title: "Modules Système",
        feat_alerts_title: "Alertes Instantanées",
        feat_alerts_desc: "Recevez des notifications \"APPEL DE MATCH\". Ne ratez jamais un appel.",
        feat_station_title: "Station & Stream",
        feat_station_desc: "Sachez exactement où aller. \"Station 5\" ou \"Stream 1\" affichés clairement.",
        feat_scout_title: "Scout Adversaire",
        feat_scout_desc: "Voyez contre qui vous jouez, son rang, avatar et personnage.",
        feat_follow_title: "Suivi Intelligent",
        feat_follow_desc: "Suivez vos amis et joueurs favoris. Soyez notifié.",
        feat_history_title: "Historique Complet",
        feat_history_desc: "Accédez à tout votre historique de tournoi avec défilement infini.",
        feat_poll_title: "Synchro Live",
        feat_poll_desc: "La synchro en arrière-plan garde votre bracket à jour.",
        tech_title: "Architecture",
        tech_rn: "Performance native sur Android & iOS via Expo.",
        tech_api: "Intégration directe avec les données officielles.",
        roadmap_title: "Roadmap & Statut",
        road_friend_title: "Liste d'amis / Suivi",
        road_friend_desc: "Suivez des joueurs et voyez leurs profils actifs/historiques.",
        road_h2h_title: "Face-à-Face (H2H)",
        road_h2h_desc: "Voir vos records de matchs contre n'importe quel adversaire.",
        road_map_title: "Plan de la salle",
        road_map_desc: "Cartes interactives pour trouver votre station instantanément.",
        road_pass_title: "Pass Numérique",
        road_pass_desc: "QR Code pour un check-in facile.",
        download_title: "Initialisation",
        download_desc: "Obtenez Pocket Bracket sur votre appareil.",
        btn_google: "Disponible sur Google Play",
        btn_apple: "Télécharger sur App Store",
        tooltip_pending: "En attente",
        direct_dl_label: "Téléchargement Direct Beta:",
        footer_credit: "Conçu pour les compétiteurs."
    }
};

let currentLang = localStorage.getItem('pb_lang') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pb_lang', lang);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update toggle button text
    const toggleBtn = document.getElementById('langToggle');
    toggleBtn.textContent = lang === 'en' ? 'FR' : 'EN'; // Show the OTHER option
}

document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    updateLanguage(newLang);
});

// Initial load
updateLanguage(currentLang);

console.log('Localization System Active: ' + currentLang);

// Carousel Logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000); // Switch every 4 seconds
}
