import {Router} from 'aurelia-router';

export class Todo {

  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'ToDo App | Aurelia';
      config.map([
        { route: ['', 'todos'], moduleId: 'todo' }
      ]);
    });
  }

}