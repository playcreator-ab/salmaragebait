document.addEventListener('DOMContentLoaded', () => {
    // Inject Marquee
    const marqueeEl = document.getElementById('marquee-component');
    if (marqueeEl) {
        const text = marqueeEl.getAttribute('data-text') || "SALMARAGE COMMITTEE SECURITY PROTOCOL ACTIVE • MONITORING ALL CHANNELS •";
        marqueeEl.innerHTML = `
            <div class="marquee-container">
                <div class="marquee-content">
                    ${text}
                </div>
            </div>
        `;
    }

    // Inject Navigation
    const navEl = document.getElementById('nav-component');
    if (navEl) {
        const currentPath = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        navEl.innerHTML = `
            <nav class="p-6 flex justify-between items-center max-w-7xl mx-auto relative z-50 w-full">
                <a href="index" class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-black text-white">S</div>
                    <span class="font-black text-xl tracking-tighter uppercase text-white">SalmaRage <span class="text-red-600">Committee</span></span>
                </a>
                <div class="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest text-zinc-500">
                    <a href="index" class="nav-link hover:text-red-500 transition ${currentPath === 'index' ? 'text-white' : ''}">Hallway Intel</a>
                    <a href="jokes" class="nav-link hover:text-red-500 transition ${currentPath === 'jokes' ? 'text-white' : ''}">Points Rank</a>
                    <a href="report" class="nav-link hover:text-red-500 transition ${currentPath === 'report' ? 'text-white' : ''}">Log Intel</a>
                    <a href="login" class="nav-link hover:text-red-500 transition ${currentPath === 'login' ? 'text-white' : ''}">Login</a>
                </div>
            </nav>
        `;
    }
});