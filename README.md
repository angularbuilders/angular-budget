# AngularBudget

This sample project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Run `npm i` after clone or fork

## Development server

Run `npm start` for a dev server.

## Versión release

Run `npm run release` for a new release pushed to remote origin.

## GitHub Pages Deploy

Run `npm run deploy` for generate a build for production and deploy it to gitHub Pages. Navigate to `https://angularbuilders.github.io/angular-budget/`


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Architecture

Simple, but organized in modules:

- CoreModule: contains services with app wide related logic
- SharedModule, components and pipes to be shared in pages
- Pages: Modules for lazy loaded routes

## Functionality

Basic CRUD of projects.

### To Be implemented

To be done at the classroom or used like an exercise.

- A project should have a list to tasks to be done.
- A project should have a list of economic transactions.
- A project should be edited, canceled or deleted

## Credits

Created by [Alberto Basalo](https://twitter.com/albertobasalo) to be used a sample in his Angular Courses.
