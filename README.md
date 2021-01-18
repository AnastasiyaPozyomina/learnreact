<h1>SIXTEEN CLOTHING (REACT & REDUX)</h1>
<a href="https://anastasiyapozyomina.github.io/learnreact/">demo</a>

<h2>Что изучила и сделала?</h2>
<hr>
<ul>
<li> Знакомство JSX.</li>
<li> Функциональные и классовые компоненты и передача данных через пропсы.</li>
<li> Добавление маршрутов с помощью React-Router-Dom.</li>
<li> Создание слайдеров с помощью React-Owl-Carousel.</li>
<li> Создание анимации с помощью React-Reveal. </li>
<li> Применение компонентов Material UI для аккордиона и звездного рейтинга.</li>
<li> Рендер нескольких компонентов, используя функцию map() и добавив каждому элементу в списке атрибут key. Созданы списки постов и товаров. По ключу создана отдельная страница PostPage  и ProductPage.</li>
<li> Управление состоянием компонента с помощью Redux, React-Redux и  Redux-Thunk c применением хуков: useSelector, useDispatch.</li>
<li> <a href="https://github.com/AnastasiyaPozyomina/fakerestapi">Создание фейкового REST API с помощью json-server-а </a></li>
<li> Обработка событий в React-элементах. Ассинхронная загрузка постов/товаров по нажатию кнопки.</li>
<li> Отрисовка по условию. Если загрузка постов/товаров с fake rest api 
произошла с ошибкой, выводится сообщение "Error! Something went wrong!" и 
данные не обновляются, остаются в первоначальном состоянии(initialState), 
как указано в редьюсере. Если успешно - данные обновляются и загружаются с применением прелоадера с задержкой  500 миллисекунд.</li>
<li>При неверном URL приложении выводится 404 страница. </li>
<li>Валидация формы обратной связи с помощью React Hook Form и регулярных выражении. Условия таковы:
<ol>
<li> Обязательно заполнить все поля формы
<li>  name  и firstname: только на английском языке, минимальное количество вводимых букв - 2. Можно вводить большие и маленькие буквы.
<li>  email: используются буквы только на английском языке, цифры, символы (!#$%&'*+/=?^_`{|}~-), обязательное наличение символа @
<li>  subject: только на английском языке. Минимум вводимых букв/цифр/знаков - 4
<li>  your message: только на английском языке. Минимум вводимых букв/цифр/знаков- 10. Максимум - 100.
</ol>

<h2>Примечание</h2>
<p>GitHub Pages не поддерживает маршрутизаторы, которые используют pushStateAPI истории HTML5 под капотом 
(например, с использованием React Router browserHistory).
Это связано с тем, что при загрузке новой страницы для URL-адреса, например http://anastasiyapozyomina.github.io/learnreact/products/2, где /products/2 находится маршрут внешнего интерфейса, сервер GitHub Pages возвращает 404, потому что он ничего не знает о /products/2.</p>
<p>Для решения этой проблемы на Github Pages, BrowserRouter заменен на HashRouter.</p>

<h2>Технологии</h2>
<hr>
<ul>
<li>React(react-router-dom, react-hook-form, react-owl-carousel, react-reveal)</li>
<li>React Material-UI</li>
<li>CSS (Bootstrap 4)</li>
<li>Redux(React-redux, redux-thunk)</li>
<li>Git</li>
<li>Адаптивная вёрстка (медиа-запросы)</li>
</ul>

<h2>Справочник</h2>
<hr>
<ul>
<li><a href="https://ru.reactjs.org/">React</a></li>
<li><a href="https://material-ui.com/ru/">Material UI</a></li>
<li><a href="https://reactrouter.com/web/guides/quick-start">REACT ROUTER</a></li>
<li><a href="https://redux.js.org/ ">Redux</a></li>
<li><a href="https://react-awesome-reveal.morello.dev/docs/ ">React Awesome Reveal</a></li>
<li><a href="https://www.npmjs.com/package/react-owl-carousel">React Owl Carousel</a></li>
<li><a href="https://react-hook-form.com/">React Hook Form</a></li>
</ul>