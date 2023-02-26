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
    let foods_available = ["Energy drink (Monster)", "Almond milk (unsweetened)", "Peanut butter", "Chocolate by GHIRARDELLI","Ranch dressing by FRESH & EASY","Pizza rolls","TACO BELL, Bean Burrito","Annie's organic classic cheddar macaroni & cheese by GENERAL MILLS SALES INC.","CAMPBELL'S CHUNKY, New England Clam Chowder","Yogurt, CHOBANI, plain, whole, Greek","Artisan pepperoni fresh mozzerella wraps by Formaggio Italian Cheese Specialties Inc","Plum ice cream by Tillamook County Creamery Association","Chicken nuggets, from frozen","Eggland's Best Vegetarian Grade AA White Eggs Large","Chicken drumstick, skin eaten, rotisserie","Dave's Killer Bread 21 Grains","Mott's no sugar added Cinnamon applesauce","Black cherry spread by BONNE MAMAN"];
    let macros = ["Carbs: 2g, Protein: 0g, Fat: 11.001g","Carbs: 63.53g, Protein: 10.94g, Fat: 12.495g","Carbs: 57.78g, Protein: 13.6g, Fat: 11.193g","Carbs: 50g, Protein: 9g, Fat: 3.003g","Carbs: 22.62g, Protein: 6.17g, Fat: 9.664g","Carbs: 3.24g, Protein: 8.24g, Fat: 4.01g","Carbs: 1g, Protein: 6g, Fat: 6.001g","Carbs: 21g, Protein: 3g, Fat: 8.001g","Carbs: 25.03g, Protein: 18.7g, Fat: 26.922g","Carbs: 0g, Protein: 6g, Fat: 4g","Carbs: 0.16g, Protein: 34.63g, Fat: 15.471g","Carbs: 22g, Protein: 5g, Fat: 1.5g","Carbs: 13g, Protein: 0g, Fat: 0g","Carbs: 13g, Protein: 0g, Fat: 0g"];
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