//need to add CSS classes for DOM manipulation layer to target (and use the js- prefix)

//need to figure out a function for unique word count...

var textAnalyzer = function(words) {
    var wordCount = words.split(" ").length;
    var analyzedWords = words.split(" ");
    var avgWords = 0;
    for (var i = 0; i < wordCount.length; i++) {
        avgWords += analyzedWords[i].length;
    }
    var avgLength = avgWord / wordCount; 
};

//creating a new function for uniqueWordCount...
//i know i need to make a variable called userText for an input of whatever they put in...

var userText = [];

/*should probably create a function that translates the user's random words from English
to actual separate string words that the computer understands... split?*/

function translateUserText(userBabble) {
    return userBabble.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
};

//now what. 

function calculate(uniqueWordCount) {
    for (var i = 0; i < result.length; i++) {
        if (userText())
    }
}

//ugh how to connect this to html and not just console.log it though? 



$(document).ready(function() {
    /*$('#hidden text-report').css({

    });*/
    
    //not sure if i should use a .css? or something?

    $('#button').on('click', function() {
        $('#hidden text-report').show();
    });

    /*the above looks more correct but i kind of just made the .show method up i don't
    actually think it's going to work?*/
});