import * as utils from './utils.js';
import * as questions from './loadQuestions.js';

window.onload = ()=>{
	init();
}

const init = () =>
    {
        utils.loadFile('./json/gettingStarted.json',questions.jsonLoaded);
        console.log("hi");
    }