//button
document.querySelector('#addTask').addEventListener('click', taskInput);

let check = document.getElementsByClassName("check");

for (let i = 0; i < check.length; i++) {
    check[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function taskInput() {

    // let form = document.createElement("form");

    let list = document.createElement('li');
    let inputValue = document.querySelector('#inputText').value;
    let text = document.createTextNode(inputValue);


    list.appendChild(text);
    if (inputValue === '') {
        alert('You must write something..');
    } else {
        document.querySelector('#task').appendChild(list);
    }
    document.querySelector('#inputText').value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("✓");
    span.className = "check";
    span.appendChild(txt);
    list.appendChild(span);

    for (i = 0; i < check.length; i++) {
        check[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}