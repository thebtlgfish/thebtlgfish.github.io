const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
const numColumns = Math.floor(window.innerWidth / 20);

for (let i = 0; i < numColumns; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    column.style.left = `${i * 20}px`;
    column.style.animationDuration = `${Math.random() * 2 + 2}s`;
    column.innerText = Array.from({ length: 20 }).map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('\n');
    document.body.appendChild(column);

    setInterval(() => {
        column.innerText += chars.charAt(Math.floor(Math.random() * chars.length)) + '\n';
        column.scrollTop = column.scrollHeight;
    }, 100);
}
