# Kirania — Офіційний сайт

Це статичний сайт, збудований за допомогою Vite + React і розгорнутий через Netlify.

## 🔧 Команди розробки

```bash
npm install     # Встановити залежності
npm run dev     # Запустити локально
npm run build   # Зібрати проєкт
npm run preview # Переглянути зібраний сайт локально
npm run deploy  # (не потрібно, якщо використовується Netlify auto-deploy)
```

## 🌐 Публікація

Сайт автоматично деплоїться з GitHub → Netlify за адресою:

👉 https://kirania.netlify.app

## 🗺️ Структура

- `/src/pages/` — окремі сторінки (Home, About, Symbols)
- `/public/_redirects` — правила роутінгу для підтримки SPA
- `netlify.toml` — конфігурація Netlify
