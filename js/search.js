import * as utils from './utils.js';
import * as search from './searchResults.js';


var searchInput;

window.onload = ()=>{
	init();
}

const init = () =>
    {
        

        document.querySelector("#searchButton").onclick = searchButtonClicked;
        document.getElementById("searchText").addEventListener('keyup', function(event) { 
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
                console.log("clicked");
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              document.getElementById("searchButton").click();
            }
          });
    }

  



const searchButtonClicked = () =>
{
    utils.loadFile('./json/faq.json', search.jsonLoaded);

}