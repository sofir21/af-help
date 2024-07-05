import * as utils from './utils.js';
import * as search from './searchResults.js';


window.onload = ()=>{
	init();
}

const init = () =>
    {
        
        //sets up on click function for search button
        document.querySelector("#searchButton").onclick = searchButtonClicked;
        //clicks search button when user presses 'enter'
        document.getElementById("searchText").addEventListener('keyup', function(event) { 
            if (event.key === "Enter") {
                console.log("clicked");
              event.preventDefault();
              document.getElementById("searchButton").click();
            }
          });
    }

  


//loads json when user clicks search
const searchButtonClicked = () =>
{
    utils.loadFile('./json/faq.json', search.jsonLoaded);

}