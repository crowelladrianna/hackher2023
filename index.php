<!DOCTYPE html>
<html>
    <head>
        <title>HackHer 2023</title>
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Name TBD</h1>
            </div>
            <div class="info">
                <!--Search bar-->
                <div class="searchbar"></div>

                <!--Food-->
                <div class="food">
                    <ul class="list" id="food_list"></ul>
                    <script>
                        let food_names = ["Bagel", "Apple", "Iced Chai"];
                         
                        let list = document.getElementById("food_list"); 
                        food_names.forEach((item) => {
                          let li = document.createElement("li");
                          li.innerText = item;
                          list.appendChild(li);
                        });
                    </script>
                </div>

                <!--Activities-->
                <div class="activities">
                    <ul class="select">
                        <button><li class="selectable unclicked">cardio exercise</li></button>
                        <button><li class="selectable unclicked">strength exercise</li></button>
                        <button><li class="selectable unclicked">stretching</li></button>
                        <button><li class="selectable unclicked">school/work</li></button>
                        <button><li class="selectable unclicked">tbd</li></button>
                    </ul>
                </div>
                <script>
                    var buttons = document.getElementsByClassName("selectable");
                    for(button of buttons){
                        button.onclick = change_color(this);
                    }
                    function change_color(element){
                        if(element.classList.contains("unclicked")){
                            element.classList.remove("unclicked");
                            element.classList.add("clicked");
                            element.innerHTML="test1";
                        }
                        else{
                            element.classList.remove("clicked");
                            element.classList.add("unclicked")
                            element.innerHTML="test2";
                        }
                    }
                </script>

                <!--Symptoms-->
                <div class="symptoms">
                    <ul class="select">
                        <button><li class="selectable unclicked">tbd</li></button>
                        <button><li class="selectable unclicked">tbd</li></button>
                        <button><li class="selectable unclicked">tbd</li></button>
                        <button><li class="selectable unclicked">tbd</li></button>
                        <button><li class="selectable unclicked">tbd</li></button>
                    </ul>                    
                </div>
            </div>
        </div>
    </body>
</html>