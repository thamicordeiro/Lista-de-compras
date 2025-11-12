const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");


addBtn.addEventListener("click", () => {
 const itemText = input.value.trim ();

 

if (itemText !== "") {
const li = document.createElement("li");
li.textContent = itemText;

const removeBtn = document.createElement("button");
removeBtn.textContent = "Remover";
removeBtn.classList.add("remove-btn");


li.addEventListener("click", () => {
 li.classList.toggle("checked");
});

removeBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  li.remove();
}
)

li.appendChild(removeBtn);

list.appendChild(li);

input.value = "";

input.focus();

}

});
