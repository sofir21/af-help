import * as utils from './utils.js';
import * as search from './searchResults.js';

window.onload = ()=>{
	init();
}

const init = () =>
    {
        

        document.querySelector("#searchButton").onclick = searchButtonClicked;
    }



const searchButtonClicked = () =>
{
    utils.loadFile('./json/faq.json', search.jsonLoaded);

}