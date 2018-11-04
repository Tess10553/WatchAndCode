// var todoList = ['item 1', 'item 2', 'item 3']

// //to add new
// function addList(add){
//   todoList.push(add);
// }
// // to change
// function changeList(tpoic,newContent){
//   todoList[topic] = newContent
// }
// //to delete
// function deleteList(topic){
//   todoList.splice(topic,1)
// }
// // display list
// function displayList(){
//   console.log('Here\'s my' +  mytodoList)
// }

//put all functions into a subject

var todoList = {
  list: ['item 1','item 2','item 3'],
  showList: function(){
    console.log(this.list);
  },
  addList: function(add){
    this.list.push(add);
    this.showList();
  },
  changeList: function(item,change){
    this.list[item] = change;
    this.showList();
  },
  deleteList: function (item) {
    this.list.splice(item,1);
    this.showList();
  }
}