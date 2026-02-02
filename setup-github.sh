#!/bin/bash

# Скрипт для инициализации Git репозитория и настройки деплоя

echo "🚀 Настройка Git репозитория для валентинки..."

# Инициализация Git репозитория (если еще не инициализирован)
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git репозиторий инициализирован"
else
    echo "✅ Git репозиторий уже существует"
fi

# Добавление всех файлов
git add .

# Создание первого коммита
git commit -m "💕 Добавлена интерактивная валентинка"

echo ""
echo "🔧 Следующие шаги для публикации на GitHub Pages:"
echo ""
echo "1. Создайте новый репозиторий на GitHub (например: my-love)"
echo "2. Выполните следующие команды:"
echo ""
echo "   git remote add origin https://github.com/ваш-username/my-love.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Обновите название репозитория в vite.config.ts (поле 'base')"
echo "4. Запустите деплой: npm run deploy"
echo ""
echo "🎉 Ваша валентинка будет доступна по адресу:"
echo "   https://ваш-username.github.io/my-love/"
echo ""
echo "💡 Не забудьте заменить 'ваш-username' на ваш GitHub username!"