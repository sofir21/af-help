import * as utils from './utils.js';
import * as questions from './loadQuestions.js';

window.onload = ()=>{
	init();
}

const init = () =>
    {
        utils.loadFile('./json/faq.json',questions.jsonLoaded); //loads faq json to the faq page
    }