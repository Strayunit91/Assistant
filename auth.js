document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const themeToggle = document.createElement('button');
    
   // Добавляем в начало файла
function navigateTo(url) {
    const mainContent = document.querySelector('.page-content');
    if (!mainContent) return window.location = url;
    
    mainContent.classList.add('page-exit-active');
    
    setTimeout(() => {
        window.location = url;
    }, 200);
}

// Заменяем обычные ссылки на анимированные
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.href && !link.href.includes('#')) {
            e.preventDefault();
            navigateTo(link.href);
        }
    });
});

// Добавляем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.page-content');
    if (content) {
        setTimeout(() => {
            content.classList.add('page-enter-active');
        }, 10);
    }
});

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

// Добавляем в конец auth.js
if (document.getElementById('resetForm')) {
    const resetForm = document.getElementById('resetForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Ссылка для восстановления отправлена на ваш email!';
    resetForm.prepend(successMessage);

    resetForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const button = resetForm.querySelector('button');
        button.classList.add('loading');
        
        // Имитация отправки
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        successMessage.style.display = 'block';
        resetForm.reset();
        button.classList.remove('loading');
        
        // Автоскрытие сообщения
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}
