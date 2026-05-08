//
const formInput = document.getElementById("add-item-form");
const newItemList = document.getElementById("item-list");
const completedList = document.getElementById("item-done");


formInput.addEventListener("submit", (event) => {

    event.preventDefault();
    let userInput = document.getElementById("inputItem").value;

    let newListItem = document.createElement("li");
    let listXbutton = document.createElement("button")
    listXbutton.textContent = "X";
    listXbutton.className = "delete-btn";

    listXbutton.addEventListener("click", () => handleDelete(newListItem));

    newListItem.textContent = userInput;
    newListItem.appendChild(listXbutton);
    newItemList.appendChild(newListItem);

    event.target.reset();
});

let handleDelete = (newItem) => {
    completedList.appendChild(newItem);
    newItem.classList.toggle("strike-text");
    let delButton = newItem.querySelector('.delete-btn');
    delButton.remove();
    let removeButton = document.createElement("button")
    removeButton.textContent = "X";
    removeButton.className = "remove-btn";
    newItem.appendChild(removeButton);

    removeButton.addEventListener("click", () => newItem.remove());

}