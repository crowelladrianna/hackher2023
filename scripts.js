let foods_eaten = [];
let macros_eaten = []

function onload(){
    button_clicking();
    loadSearchData();
    populate_food();
}

function button_clicking(){
    let buttons = document.getElementsByClassName("selectable");
    for(let button of buttons){
        button.addEventListener("click", function() {
            if(this.classList.contains("unclicked")){
                this.classList.remove("unclicked");
                this.classList.add("clicked");
            }
            else{
                this.classList.remove("clicked");
                this.classList.add("unclicked");
            }
        });
    }
}

function loadSearchData(){
    let foods_available = ["Bagel", "Apple", "Iced Chai", "Coffee"];
    let macros = ["Carbs: 5mg, Protein: 5mg, Fat: 5mg", "Carbs: 5mg, Protein: 5mg, Fat: 5mg", "Carbs: 5mg, Protein: 5mg, Fat: 5mg", "Carbs: 5mg, Protein: 5mg, Fat: 5mg"];
    let options_list = document.getElementById('options_list');
    for(let i=0; i<foods_available.length; i++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = foods_available[i];
        a.classList.add("food_add_link");
        a.addEventListener("click", function() {
            foods_eaten.push(foods_available[i]);
            macros_eaten.push(macros[i]);
            remove_food();
            populate_food();
        });
        li.classList.add("food_item");
        li.appendChild(a);
        options_list.appendChild(li);
    }
}

function search(){
    let listContainer = document.getElementById('options_list');
    let listItems = document.getElementsByClassName('food_item');
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase(); 
    let noResults = true;
    for (i = 0; i < listItems.length; i++) { 
        if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
            listItems[i].style.display="none";
            continue;
        }
        else {
            listItems[i].style.display="flex";
            noResults = false; 
        }
    }
    listContainer.style.display = noResults ? "none" : "block";
}

function populate_food(){
    let list = document.getElementById("food_list"); 
    for(let i = 0; i<foods_eaten.length; i++) {
      let li = document.createElement("li");
      let d1 = document.createElement("div");
      let d2 = document.createElement("div");
      d2.setAttribute("id", "macros_text")
      d1.innerText = foods_eaten[i];
      d2.innerText = macros_eaten[i];
      li.appendChild(d1);
      li.appendChild(d2);
      li.classList.add("food_eaten")
      list.appendChild(li);
    };
}

function remove_food(){
    document.getElementById("food_list").innerHTML = "";
}