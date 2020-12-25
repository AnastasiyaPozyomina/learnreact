
 [Create React App](https://github.com/facebook/create-react-app).

В каталоге проекта вы можете запустить:
### `yarn start`
Запускает приложение в режиме разработки..<br />
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть проект в браузере.

### `yarn build`
Собирает приложение для сборки в папку `build`.<br />
Правильно связывает React в производственном режиме и оптимизирует сборку для достижения максимальной производительности.
Сборка минифицирована, а имена файлов включают хеши.


# Инструменты и технологии

 JavaScript (arrow functions, array functions, spread Operators)
 React (react-router-dom, react-reveal, react-owl-carousel, react-hook-form, material-ui)
 Redux (react-redux, redux-thunk)
 VS Code (ES6 Snippets, Prettier, CSS Peek)
 Chrome ( React Developer Tools, Redux Developer Tools)
 Git (create repo, commit, remote, create and push branch)
 
<ul>
<li> react redux https://yarnpkg.com/package/react-redux </li>
<li>react logger https://yarnpkg.com/package/redux-logger</li>
<li>react trunk https://yarnpkg.com/package/react-thunk</li>
<li>https://habr.com/ru/post/492378/</li>
<li>https://jsonplaceholder.typicode.com/</li>
</ul>

## React

### Что такое React
● React - JavaScript фронтенд библиотека, разработанная Facebook в 2011
● В ядре - компонентный подход, позволяющий создавать переиспользуемые UI (User Interface)
блоки
● Служит, для создания сложных интерактивных UI для web и мобильной
разработки

### Основные преимущества в React 
● Увеличивает производительность отрисовки приложений
● Может использоваться и на клиенте и на сервере
● Из-за JSX читаемость кода увеличивается
● Легко интегрировать с другими фреймворками
● Легко писать unit тесты

### Какие есть ограничения в React?
● React - всего лишь библиотека
● Требуется некоторое время на освоение
● Может быть немного сложным для начинающих
● Код по-началу может выглядеть сложным из-за инфраструктуры и JSX

### Что такое JSX?
JSX - ярлык для JavaScript XML. Это специальный синтаксис, который расширяет
JavaScript возможностью писать HTML внутри.
Это позволяет интегрировать шаблоны компонентов прямо в JavaScript, что делает
разработку проще.

### Что такое Virtual DOM в React?
Virtual DOM - легковесный JavaScript объект, который представляет копию реального
DOM дерева. Нужен для оптимизации взаимодействия с DOM

### Что такое Props?
Сокращенно от Properties. Входящие свойства в компонент. Они только для чтения и
их нельзя менять. Всегда идут от родителя к ребенку.

### Что такое state и как он используется?
Обычный объект - источник данных. Содержит информацию по поведению и
состоянию интерфейса. Можно мутировать

### В чем разница между state и props?
state - структура данных, необходимая для изменения и отслеживания
пользовательских действий
props - набор конфигурации, поступающий от родительского элемента. Их нельзя
изменять
### Когда следует использовать Class компоненты, а когда функциональные?
Если нужны жизненные этапы компонента - используем class компоненты
Иначе для оптимизации лучше функциональные

### Что такое React Hooks?
Функционал, добавленный в React 16.8. С помощью хуков, можно писать приложения,
используя только функциональные компоненты, без классов.
С помощью хуков можно следить за стейтом, эмулировать жизненные этапы
компонента, работа с ссылками и многое другое

### Что такое useState?
Встроенные React хук. Позволяет работать со стейтом в функциональных
компонентах. Принимает начальное значение. Возвращает массив, состоящий всегда
из 2х элементов (кортеж), где:
● первый элемент - само состояние
● второй элемент - функция, меняющая состояние

### В чем смысл специального атрибута key?
Атрибут позволяет React понимать, какие именно элементы в списке были
модифицированы или удалены, что увеличивает производительность рендеринга.
Лучше всего использовать уникальные значения, такие как ID. Индексы использовать
не рекомендуется

### Передача двнных
От родителя к ребенку - props.
От ребенка к родителю  - callback.
От ребенка к ребенку - Для того чтобы передать данные между соседними компонентами, нужно использовать посредника—их родителя. Сначала нужно передать данные от ребенка к родителю как аргумент коллбека. Потом присвоить эти данные в стейт родителя и передать через props другому компоненту. Но это плохая практика. Используем Redux или React Contex.


## Redux 
### Что такое Redux?
Библиотека для работы с потоком данных в JavaScript.Позволяет добавить дополнительный слой для приложения, где состояние описано в
JavaScript объекте. Нужно для более удобного написания кода

### Что такое store в Redux?
JavaScript объект, в котором содержится состояние приложения. Дополнительно
отвечает за следующее:
1. state может быть получен через getState()
2. Изменять state можно через dispatch(action)
3. Регистрировать изменения через subscribe(listener)


### Зачем нужен package.json
 package.json хранит список пакетов, необходимых для проекта с нужными версиями, и на другой машине мы можем легко установить все пакеты, которые указаны там с помощью команды npm install или yarn install

 
# Справочник:
## Фреймворки React UI:
✓ Material Ui https://material-ui.com/ru/
React Bootstrap https://react-bootstrap.github.io/ 
Ant Design https://ant.design/
Semantic UI React https://react.semantic-ui.com/
Blueprint https://blueprintjs.com/docs/

## Маршрутизация:
✓ REACT ROUTER https://reactrouter.com/web/guides/quick-start
● React Router позволяет создавать динамические ссылки в react роутере.



## Менеджер состоянии:
Redux https://redux.js.org/
Mobx https://mobx.js.org/

## Анимации:
React Transition Group https://reactcommunity.org/react-transition-group/
React Spring https://www.react-spring.io/
Motion Api https://www.framer.com/motion/  https://www.npmjs.com/package/framer-motion
✓ React Awesome Reveal https://react-awesome-reveal.morello.dev/docs/

## Слайдеры
✓ react-image-gallery https://www.linxtion.com/demo/react-image-gallery/
✓ react-owl-carousel

## Валидация форм:
✓ React Hook Form https://react-hook-form.com/
Formik https://formik.org/
Redux Form https://redux-form.com/8.3.0/

## GraphQL - язык запросов для API 

## Менеджер пакетов:
npm https://www.npmjs.com/
✓ yarn https://yarnpkg.com/


## ✓ Create React App - среда для изучения React  и создание нового одностраничного приложения для React

## Расширения для Google 
✓ React Developer Tools (вкладки components и profiler) https://chrome.google.com/webstore/detail/react-developer-tools/

## Плагины VS Code:
✓ Auto Import - ES6, TS, JSX, TSX https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import
✓ Reactjs code snippets (rcc) https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets
✓ CSS Peek https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek
✓ Prettier - Code formatter https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
ESLint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
Bracket Pair Colorizer https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
GraphQL for VS Code https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode
Indent-Rainbow https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow

# Справочник по бэкенд
## Использование базы данных (с помощью Mongoose) 
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose
MongoDB Community Server (установочный файл) https://www.mongodb.com/try/download/community


### 
https://www.npmjs.com/package/body-parser
body-parser: является частью промежуточного программного обеспечения, которое считывает ввод формы и сохраняет его как объект javascript, доступный через req.body.

https://www.npmjs.com/package/nodemon
nodemon : будет следить за нашими файлами на предмет любых изменений, а затем перезапускает сервер при любых изменениях.

https://www.npmjs.com/package/express
express будет использоваться для сборки нашего сервера Node.js.

https://www.npmjs.com/package/mongoose
mongoose: инструмент объектного моделирования, используемый для асинхронного запроса MongoDB.

https://www.npmjs.com/package/shortid 
shortid: библиотека кратчайших узлов.Cоздает  короткие непоследовательные уникальные идентификаторы, дружественные по URL.

## Postman — как инструмент тестирования API
https://www.postman.com/
● Метод GET нужен для получения какой-либо информации от сервера.
● Метод POST нужен для передачи каких-либо данных с клиента на сервер. Для данного типа запросов можно воспользоваться https://jsonplaceholder.typicode.com/posts в качестве URL запроса. Это открытый сервис, который можно использовать для имитации работы сервера.
● Метод DELETE нужен для удаления каких-либо данных из базы данных.