const clock = document.querySelector('.clock');

const tick = () => {
    
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <p><span>${h}</span> :</p>
    <p><span>${m}</span> :</p>
    <p><span>${s}</span></P>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);