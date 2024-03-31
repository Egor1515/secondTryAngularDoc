# SecondTryAngular

## Урок 1
1. Перейдя в src/ мы увидим несколько файлов
    - index.html - Это шаблон верхнего уровня
    - style.css - Это таблица стилей верхнего уровня
    - main.ts - Это место, откуда и запускается наше приложение
    - favicon.icon - иконка приложения. Та, что на браузере
2. 
- .angular содержит файлы, необходимые для создания приложения Angular.

- .e2e содержит файлы, используемые для тестирования приложения.

- .node_modules содержит пакеты node.js, которые использует приложение.

- angular.json описывает приложение Angular для инструментов создания приложений.

- package.json используется npm (менеджером пакетов node) для запуска готового приложения.

- tsconfig.* — это файлы, описывающие конфигурацию приложения для компилятора TypeScript.

## Урок 2

1. Здесь нам понадобится создать новый компонент `Home` и сгенерировать его можно используя команду
`ng generate component home --standalont --inline-template`
2. Далее мы сгенерив этот компонент должны его импортировать в главный эпп компонент, чтобы потом добавить селектор <app-home> внутри app.component
3. Потом создаем html файл для нового компонента и туда вставляем код нужный нам, после чего в его же ТС файле делаем ссылку на styleUrls:['/']
4. Добавляем стили в этот файл и все готово
## Development server

## Урок 3
1. Нам нужен новый компонент, который будет отвечать за расположение домов, их адреса и доп инфо
2. Используя уже известную команду `ng generate component` создаем его
3. Передаем его в родительский компонент созданный в прошлый раз home.component и теперь после иморта мы можем его использовать внутри home.component
4. В отдельном файле для верстки этого компонента создаем разметку и добавляем ссылку на нее внутри .ts

# Урок 4
1. Создаем тестовый дома для нашего приложения и пока мы их просто захардкодим внутри массива с объектами, а потом научимся их получить через реальный сервер
## Code scaffolding
2. Далее внутри home.component импортируем этот интерфейс, чтобы мы могли создать экземпляр этого типа.
3. В экспортируемом оттуда классе создаем объект с тестовыми данным
`housingLocation: HousingLocation ={
    data: data,
    data: data ...
}``
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
