export function addWaves() {
    const waveBg = document.createElement('div');
    waveBg.className = 'wave-bg';
    waveBg.innerHTML = `
        <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <path d="M0,200 C360,300 720,100 1440,200 L1440,800 L0,800 Z" fill="none" stroke="#1a6fd4" stroke-width="2"/>
            <path d="M0,300 C360,400 720,200 1440,300 L1440,800 L0,800 Z" fill="none" stroke="#1a6fd4" stroke-width="2"/>
            <path d="M0,400 C360,500 720,300 1440,400 L1440,800 L0,800 Z" fill="none" stroke="#1a6fd4" stroke-width="2"/>
            <path d="M0,100 C480,200 960,0 1440,100" fill="none" stroke="#1a6fd4" stroke-width="1.5"/>
            <path d="M0,500 C480,600 960,400 1440,500" fill="none" stroke="#1a6fd4" stroke-width="1.5"/>
            <path d="M0,600 C480,700 960,500 1440,600" fill="none" stroke="#1a6fd4" stroke-width="1.5"/>
        </svg>
    `;
    document.body.prepend(waveBg);
}