var list = document.getElementById("list");

function addtodo() {
  var todo_item = document.getElementById("todo-item");
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);
  li.appendChild(liText);

  list.appendChild(li);


  //  delete button


  var delBtn = document.createElement("button");
  var delText = document.createTextNode("delete");
  delBtn.setAttribute("class", "btn");
  delBtn.setAttribute("onclick", "deleteItem(this)");

  delBtn.appendChild(delText);

  // edit button

  var editBtn = document.createElement("button");
  var editText = document.createTextNode("EDIT");
  editBtn.setAttribute("class", "editbtn");


  editBtn.appendChild(editText);

  editBtn.setAttribute("onclick", "editItem(this)");

  li.appendChild(editBtn);

  li.appendChild(delBtn);

  todo_item.value = "";

  console.log(li);
}

function deleteItem(e) {
  e.parentNode.remove();
}

function editItem(e) {
  var val = prompt("Enter Edit Value", e.parentNode);

  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
  list.innerHTML = "";
}
