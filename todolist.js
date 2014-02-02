function add (list, task) {
    //Create the list element
    var listItem = document.createElement("li");
    //Remove the list element if it is clicked    
    listItem.onclick = rmv;
    //Add the task's text to the list element
    listItem.innerText = task;
    //Add the element to the list
    list.appendChild(listItem);
};

function rmv () {
    this.remove();
};

var taskAtHand = document.getElementById("TaskAtHand");

taskAtHand.onkeyup = function (e) {
    //If the detected key is ENTER
    if (e.which == 13) {
        var task = taskAtHand.value;
        if (task == "") {
            return;
        }
        //Add the item to the todoList
        add(document.getElementById("todoList"), task);
        //Clear the input form of text
        taskAtHand.value="";
    }
};

