document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const themeToggle = document.createElement('button');
    
    // Тогглер темы
    themeToggle.textContent = '🌓';
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.background = 'none';
    themeToggle.style.border = 'none';
    themeToggle.style.fontSize = '24px';
    themeToggle.style.cursor = 'pointer';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = 
            document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    });

    // Валидация формы
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const button = form.querySelector('button');
        button.classList.add('loading');
        
        // Имитация загрузки
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Здесь будет реальный запрос на сервер
        console.log('Форма отправлена!');
        
        button.classList.remove('loading');
    });

    // Эффект для полей ввода
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = 'var(--primary-color)';
        });
        
        input.addEventListener('blur', () => {
            input.style.borderColor = 'var(--input-border)';
        });
    });
});
