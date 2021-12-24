# BSA 2021 React Native - mini-project Thread

## Описание

[**Thread**](https://github.com/BinaryStudioAcademy/thread-mobile.git) - это приложение с готовой архитектурой и структурой, подключенным базовым стеком технологий и стартовым функционалом, предназначенный для самостоятельной практики студентов.

Тематика проекта - социальная сеть, похожая на Twitter.

Основная идея проекта -  ознакомить студентов с нашим виденьем того, как реальный проект должен выглядеть изнутри, и дать возможность самостоятельно исследовать, как устроена архитектура и структура проекта, посмотреть его возможные конфигурации, попробовать покопаться и разобраться в чужом коде.

## Технологии

Здесь перечислены основные фреймворки и библиотеки, используемые в проекте. Полный список используемых технологий для каждой части проекта находится в файлах package.json в папках client и server.

### Common

1. ES2021
2. [Git](https://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git "Git")
3. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html "REST API")
4. [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token "JWT")
5. [Socket.IO](https://socket.io/docs/ "Socket.IO")
6. [npm](https://en.wikipedia.org/wiki/Npm_(software))
7. [ESLint](https://eslint.org/docs/user-guide/getting-started "ESLint")

### Frontend

1. [React Native](https://reactnative.dev/docs/0.64/getting-started "React Native")
2. [Redux](https://redux.js.org/introduction/getting-started "Redux")
3. [React Navigation](https://reactnavigation.org/docs/getting-started "React Navigation")
4. [dayjs](https://day.js.org/ "day.js")
5. [React Hook Form](https://react-hook-form.com/get-started "React Hook Form")
6. [joi](https://www.npmjs.com/package/joi "joi")

### Backend

1. [Node.js](https://nodejs.org/en/ "Node.js")
2. [Fastify](https://www.fastify.io/docs/v3.24.x/ "Fastify")
3. [Knex](https://knexjs.org/ "Knex")
4. [Objection](https://vincit.github.io/objection.js/ "Objection")
5. [axios](https://www.npmjs.com/package/axios "axios")
6. [bcrypt](https://www.npmjs.com/package/bcrypt "bcrypt")
7. [Babel](https://babeljs.io/docs/en/index.html "Babel")
8. [nodemon](https://www.npmjs.com/package/nodemon "nodemon")
9. [dotenv](https://www.npmjs.com/package/dotenv "dotenv")
10. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken "jsonwebtoken")

### Database

1. [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL")

## Установка

1. Установить последнюю стабильную версию [Node.js](https://nodejs.org/en/ "Node.js") (LTS). **Note:** npm будет установлен автоматически. Проверьте корректность установки: для этого выполните в командной строке (терминале):

    ```bash
    node -v  // для проверки версии Node.js
    npm -v // для проверки версии npm
    ```

2. Установить последнюю стабильную версию [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL") для вашей OS. Проверьте корректность работы - попробуйте создать базу, таблицу, - для этого можете использовать [pgAdmin](https://www.pgadmin.org/ "pgAdmin") или другой удобный способ, который найдете.

3. Создайте в PostgreSQL **пустую** базу данных для проекта. Например, *thread*.

4. Установите Git.

5. Склонировать [репозиторий](https://github.com/BinaryStudioAcademy/thread-js) проекта:

    ```bash
    git clone git@github.com:BinaryStudioAcademy/thread-js.git
    ```

6. **Создать репозиторий на [Bitbucket](https://bitbucket.org/) и вести дальнейшую разработку там.**

### Корень проекта

1. В руте проекта можно установить все зависимости одной командой:

    ```bash
      npm run install:all
    ```

    Это установит зависимости для рутовой директории, frontend'а и backend'a. Можно установить для каждой папки отедьно (смотрите ниже).

2. После установки пакетов, в руте проекта нужно запустить команду для [git-хуков](https://www.npmjs.com/package/simple-git-hooks):

    ```bash
      npx simple-git-hooks
    ```

    **Теперь на каждый ваш коммит будет запускаться линтер и проверять ваш код.**

### Backend

1. В командной строке (терминале) зайдите в папку server:

    ```bash
    cd /* путь к папке server */
    ```

2. Установите все необходимы пакеты из package.json командой:

    ```bash
    npm install
    ```

3. В папке server создайте файл **.env** и скопируйте в него содержимое из файла **.env.example**.

    **Note**: файл **.env** содержит реальные ключи проекта и не должен сохраняться в репозиторий.

    Замените в файле **.env** значения ключей на действительные.
    Для того, чтобы указать ключи для Gyazo Storage, необходимо зарегистрироваться на сайте [Gyazo](https://gyazo.com/captures) и [зарегистрировать приложение](https://gyazo.com/oauth/applications). Затем в **.env**  использовать `access token` из только что созданного приложения в Gyazo.

4. Выполните [миграции](https://knexjs.org/#Migrations) и сиды для того, чтобы заполнить базу данных демо-данными. Для этого в командной строке (терминале) в папке server выполните:

    ```bash
    npm run migrate:run
    npm run seed:run
    ```

    Проверьте базу данных на наличие демо-данных.

5. Для запуска сервера в командной строке (терминале) в папке сервера выполните:

    ```bash
    npm start
    ```

### Frontend

1. Настройте окружение следуя [документации React Native](https://reactnative.dev/docs/environment-setup)

2. В командной строке (терминале) зайдите в папку client:

    ```bash
    cd /* путь к папке client */
    ```

3. Установите все необходимы пакеты из package.json командой:

    ```bash
    npm install
    ```

4. В папке client создайте файлы **.env.android** и **.env.ios**, скопируйте в них содержимое из соответствующих файлов **.env.example**.

    **Note**: файлы **.env** содержат реальные ключи проекта и не должны сохраняться в репозиторий.

    Замените в файлах **.env** значения ключей на действительные.

5. Для запуска клиента в командной строке (терминале) в папке клиента выполните:

    ```bash
    npx react-native start
    ```

    **Note**: в случае изменения .env файла при запуске команды нужно добавить флаг `--reset-cache`:

    ```bash
    npx react-native start --reset-cache
    ```

    Откройте новый терминал и из папки клиента запустите одну из следующих команд:

    ```bash
    npx react-native run-android
    ```

    ```bash
    npx react-native run-ios
    ```

## Задания

Необходимо добавить следующие возможности:

1. Поставить dislike посту.
2. Обновить свой пост.
3. Удалить свой пост.
4. Фильтр - отображать только те посты, которым я (как пользователь) поставил лайк.
5. Обновить собственный профиль. Добавить валидацию.
6. Устанавливать статус пользователя (например, "А сегодня, в завтрашний день, не все могут смотреть. Вернее.."). Отображать его под username.
7. Скачать изображение поста.
8. Сбросить пароль (Forgot password). Отправить email с ссылкой на изменение пароля в приложении.
9. Обновить свой комментарий.
10. Удалить свой комментарий.
11. Поставить like комментарию.
12. Поставить dislike комментарию.
13. Фильтр - не отображать свои посты, а отображать только чужие.
14. Отправить пользователю email, если его посту поставили like.

## PS

Весь список тасков также можно найти на доске [**Trello**](https://trello.com/b/zWReSa2x "**Trello**") в колонке **To Do**. Доску нужно скопировать себе и по ней работать. Это поможет вам отслеживать весь процесс своей работы, а нам - определить, что уже готово. Таск будет считаться выполненным, если он полностью завершен и фича работает. Посмотрим на ее реализацию и оценим, правильно ли распределили логику в проекте. Это покажет, насколько вы разобрались в архитектуре. Также дадим комментарии по коду.

Основной результат работы можно определить тем, как глубоко вы смогли разобраться в проекте и понять его, и как далеко продвинулись в личном обучении.

Ссылки:

1. [Репозиторий](https://github.com/BinaryStudioAcademy/thread-mobile).
2. [Trello](https://trello.com/b/zWReSa2x).

## FAQ:

1. Какие фреймворки, библиотеки и их фичи можно использовать?

    Полная свобода действий, используйте то, что считаете нужным.

2. Можно ли изменять базу данных (добавлять колонки, таблицы)?

    Можно, а в некоторых задачах даже нужно. Для этого вам необходимо создавать новые миграции. Существующие миграции изменять нельзя.

3. Не устанавливается bcrypt

    Скорее всего, ему не хватает зависимостей на вашем компьютере. В документации bcrypt можно найти какие именно необходимы для вашей системы.

4. Ошибка: Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style

    Необходимо изменить параметр autocrlf на input либо false в настройках Git. Возможно, понадобится стянуть проект заново.

5. При регистрации приложения на сайте Gyazo требуется указать Authorization callback URL

Укажите <https://www.google.com/>.
