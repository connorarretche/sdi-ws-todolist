//
const formInput = document.getElementById("add-item-form");
const unorderedList = document.getElementById("item-list");


formInput.addEventListener("submit", (event) => {

    event.preventDefault();
    let userInput = document.getElementById("inputItem").value;

    let newListItem = document.createElement("li");
    let listXbutton = document.createElement("button")
    listXbutton.textContent = "X";
    listXbutton.className = "delete-btn";
    newListItem.textContent = userInput;
    newListItem.appendChild(listXbutton);
    unorderedList.appendChild(newListItem);

    event.target.reset();
});
