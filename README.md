# Training

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Objective

The purpose of this project is to learn angular. Each developer has at least one component
to develop. To begin, each component will be developed  separately. Then, a
homepage page will be designed to contain a navigation bar and allow the navigation between the 3 components.

##### List of components :

- **Todo list** : a task written in the input form should appear in the list below the form when the user click on a button 'add'. Each item on the list should be removed by clicking a cross.
    - Improvement 1 : add an edition functionality.


- **Youtube player** : an input form take a youtube video url as entry and show the youtube in div below the form. Additionally, each request should create an entry in a local history shown on the left side of the page.
    - Improvement 1 : if an item of the history is clicked, the related video should be shown


- **Calculator** : the Calculator is represented by a table of buttons. Each button represents a digit or an operation. A readonly input form will show the input progression and the result when the button '=' is pushed. We expect a basic Calculator able to compute the basic operations : +,-,/,* .
    - Improvement 1 : Add the 'Ans' functionality. If there's a result in the input form, pushing on an operation button (+,-,/,* ) will start a new computation. using the last ANSwer as first operand.

##### Project expected structure

/App
- /Components
    - /TodoList
    - /YoutubePlayer
    - /Calculator
- /Pages
    - /TodoListPage
    - /YoutubePlayerPage
    - /CalculatorPage
- app.components.html
- app.components.ts
- app.module.ts
- app.routing.ts

##### First task

- Create components for each page
- modify the rooting file to use them
- start developping your own page and components

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
