console.log("Working");

//OBJECT WITH PATH
import Dashboard from "./sections/home.js";
import Pets from "./sections/pets.js";
import Dates from "./sections/dates.js";
const paths = async () =>{
    const possiblePaths = [
        {
            src: "/app/index.html",  frontEnd: Dashboard
        },
        {
            src: "/home", frontEnd: Dashboard
        },
        {
            src: "/pets", frontEnd: Pets
        },
        {
            src: "/dates", frontEnd: Dates
        },
        {
            src: "/user", frontEnd: () => console.log("User")
        },
    ];

    const listOfPaths = possiblePaths.map(path =>{
        return{
            src: path,
            isMatch: location.pathname === path.src
        }
    })
    let currentSRC = listOfPaths.find(finalPath => finalPath.isMatch); //(MATCH )
    if(!currentSRC){ //EMPTY 
        currentSRC = {
            src: possiblePaths[0], //DEFAULT SRC
            isMatch: true,
        }
    }
    const view = new currentSRC.src.frontEnd();
    document.querySelector("#content").innerHTML = await view.getHTML();
    console.log(currentSRC);
};


const loadContent = url =>{
    history.pushState(null,null, url);
   // alert("working");
    paths(); 
}


document.addEventListener("DOMContentLoaded", () =>{
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[data-link]")){  //POSSIBLE MALFUNCTION. DOESN'T MATCH THE DATA-LINk (FALSE) BUT IT DOES REFRESHES THE PAGE
            e.preventDefault();
            loadContent(e.target.href);
        }
    });
    
});


window.addEventListener("popstate", paths)

//<span class = "icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
//<span class = "title">Dates</span>

/*
https://technosmarter.com/qa/349/add-combobox-in-html-form-and-select-insert-data-using-php
*/