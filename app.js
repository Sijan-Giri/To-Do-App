const itemEl = document.querySelector("#item");
const toDoBoxEl = document.querySelector("#to-do-box");

itemEl.addEventListener("keyup",(event) => {
    if(event.key == "Enter"){
        addToDo(itemEl.value);
        itemEl.value = "";
    }
});

const addToDo = (item) => {
    const addToDoList = document.createElement("li");
    addToDoList.innerHTML = `
    ${item}
    <i class="trash fa-solid fa-xmark"></i>
    `;
    
    addToDoList.querySelector(".trash").addEventListener("click",() => {
        addToDoList.remove();
        updateLocalStorage();
    })

    addToDoList.addEventListener("click",() => {
        addToDoList.classList.toggle("done");
        updateLocalStorage();
    })

    toDoBoxEl.appendChild(addToDoList);
    updateLocalStorage();
}

const updateLocalStorage = () => {
    const data = [];
    document.querySelectorAll("#to-do-box li").forEach((val) => {
        console.log(val.innerText);
        data.push(val.innerText);
    })
    localStorage.setItem("value",JSON.stringify(data));
}

(
    () => {
        const lsDatas = JSON.parse(localStorage.getItem("value"));
        lsDatas.forEach((lsData) => {
            addToDo(lsData);
        })
    }
)();