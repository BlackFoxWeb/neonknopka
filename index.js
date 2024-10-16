const neonText = document.getElementById('neonText');

// Если хочешь добавить какие-то эффекты или анимации при движении курсора, можно добавить этот скрипт
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    neonText.style.transform = `translate(${x / 100}px, ${y / 100}px)`;
});
