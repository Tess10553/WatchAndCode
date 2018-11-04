var todoList = {
  list: [],
  showList: function(){
    console.log(this.list);
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