var searchHTML = "";
var aboveSearchHTML = "";
var bellowSearchHTML = ""; 
var idNumber = 0; // used to create different ids for each question that is added to the html of the page
var search = ""; //used to save user's text input
var searchResults = 0; //used to keep track and display how many matches were found to the user text input


// once json is loaded, searches through faq for matching words that the user typed into the text input
const jsonLoaded = json =>
    {

        var result = [];

        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });

        
        searchHTML = " "; // clears old text
        searchResults = 0; //clears search results
        search = document.querySelector("#searchText").value; //gets searchbar text

        // checks user put something into the text input
        if(search == "" || search == null) // if empty
        {
            searchHTML += "<p>Please search a valid term.</p>"
        }
        else
        {
            // sets up stuff that goes above the search results
            aboveSearchHTML = "";
            aboveSearchHTML += `<div id="results">`;
            aboveSearchHTML += `<p class="font-weight-light">Here are the search results for: <b>'${search}'</b></p>`;

            // sets up divs for search results
            searchHTML += `<div id="resultsQuestions">`;
            searchHTML += `<div id="accordion">`;


            // loops through sections in json
            for (var i = 0; i < result.length; i++) 
            {
            
                idNumber +=1; 
                
    
                //creates id for title of questons (this was usefd for faq)
                var createID = `${result[i].title}`;
                var newID = createID.split(" ").join("");
                console.log(newID);
    
    
                //loops through each question & answer in current section of the json
                for (var j = 0; j < result[i].questions.length; j++) {
                    idNumber +=1;

                    //checks if question/answer includes the text input the user is looking for
                    //if true, it adds it to the html displayed
                    if(result[i].questions[j].question.includes(search) || result[i].questions[j].answer.includes(search))
                    {
                        searchHTML += 
                        `
                        
                        <div class="card">
                            <div class="card-header" id="heading${idNumber}">
                              <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${idNumber}" aria-expanded="true" aria-controls="collapse${idNumber}">
                                ${result[i].questions[j].question}
                                </button>
                              </h5>
                            </div>
                        
                            <div id="collapse${idNumber}" class="collapse" aria-labelledby="heading${idNumber}" data-parent="#accordion">
                                <div class="card-body">    

                                    ${result[i].questions[j].answer}
                                </div>
                            </div>
                        </div>
                        `
                        ;
                        searchResults +=1; 

                    } 
                }
            }

        searchHTML += `</div>`;

        }

        
        // displays text if there is no search results found
        if(searchResults == 0)
        {
                searchHTML = "";
                bellowSearchHTML ="";
                aboveSearchHTML = "";
                
                searchHTML += `<div id="results">`;
                searchHTML += `<p class="font-weight-light">No results found for: <b>'${search}'</b></p></div>`;

                searchHTML += `<div id="resultsQuestions">`;
                searchHTML +=`<p class="font-weight-light"><br>Please make sure to only search for key terms.<br> For example, instead of searching "How do I join a team?" search for: "join" or "team".<br><br>If you've tried searching by terms multiple times and still can't find anything regarding your question, please <a href="https://artfight.net/info/contact-us">contact a moderator.</a></p>`;
                searchHTML += `</div>`;

        }
        
        //if there is at least one search result, it will display how many matches there was to the user.
        if(searchResults != 0)
        {
            aboveSearchHTML += `<p class="font-weight-light">Showing <b>'${searchResults}'</b> results.</p> </div>`;
        }

        bellowSearchHTML += `</div>`;


        //adds all generated html to the page
        document.querySelector("#searchResults").innerHTML = aboveSearchHTML;  
        document.querySelector("#searchResults").innerHTML += searchHTML;  
        document.querySelector("#searchResults").innerHTML += bellowSearchHTML;  

    }



export {jsonLoaded}
