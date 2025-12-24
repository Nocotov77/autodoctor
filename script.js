document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверка сохраненной темы
    if(localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
    }

    if(toggleBtn){
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            // Сохранение выбора
            if(body.classList.contains('light-theme')){
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.removeItem('theme');
            }
        });
    }
});
