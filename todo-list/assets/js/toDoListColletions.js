function ToDoListColletions() {
  this.data = localStorage.setItem('ToDoListCollections', []);
}

ToDoListColletions.prototype.getData = function() {
  return this.data;
}