function onload(){
    button_clicking();
    loadSearchData();
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
    let options_list = document.getElementById('options_list');
    foods_available.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("food_item")
        li.innerText = item;
        options_list.appendChild(li);
    })
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
    let food_names = ["Bagel", "Apple", "Iced Chai"];
                         
    let list = document.getElementById("food_list"); 
    food_names.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
}
