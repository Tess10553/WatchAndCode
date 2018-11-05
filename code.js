var todoList = {
  list: [],
  showList: function(){
    if (this.list.length === 0) {
      console.log('Add some todo into the list');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].completed === false) {
          console.log('( )',this.list.addText);
        } else {
          console.log('(X)',this.list.addText);
        }
      }
    }
  },
  
  addList: function(text){
    this.list.push({
      addText: text,
      completed: false,
    })
    this.showList();
  },
  changeList: function(item,change){
    //this.list[item] = change;
    this.list[item].addText = change;
    this.showList();
  },
  deleteList: function (item) {
    this.list.splice(item,1);
    this.showList();
  },
  toggleCompleted: function(item){
    var todo = this.list[item];
    todo.completed = !todo.completed;
    this.showList();
  },
}