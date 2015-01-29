export class Todo {

	constructor () {
		this.placeholderText = 'What needs to be done?';
		this.newTodo = '';
		this.todos = [];
	}

	activate () {
		var items = window.localStorage.getItem('aurora::todos-items');
		if (items) {
			this.todos = JSON.parse(items);
		}
	}

	get itemsLeft () {
		var items = this.todos.filter(function (t) {
			return !t.done;
		});

		if (items.length === 1) {
			return `${items.length} item left`;	
		}

		return `${items.length} items left`;
	}

	get hasPendingItems () {
		var items = this.todos.filter(function (t) {
			return !t.done;
		});
		return items.length > 0;
	}

	addTodo () {
		if (this.newTodo.length > 0) {
			this.todos.push({name: this.newTodo, done: false});
			this.newTodo = '';
			window.localStorage.setItem('aurora::todos-items', JSON.stringify(this.todos));
		}
	}

	removeTodo (index) {
		if (this.todos.length > 0) {
			this.todos.splice(index, 1);
			window.localStorage.setItem('aurora::todos-items', JSON.stringify(this.todos));
		}
	}

	toggle (index) {
		if (this.todos.length > 0) {
			this.todos[index].done = !this.todos[index].done;
			window.localStorage.setItem('aurora::todos-items', JSON.stringify(this.todos));
		}
	}

	toggleEdit (index) {
		if (this.todos.length > 0) {
			this.todos[index].edit = !this.todos[index].edit;
			window.localStorage.setItem('aurora::todos-items', JSON.stringify(this.todos));
		}
	}

}