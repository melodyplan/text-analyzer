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

//probs should have something that actually outputs the count of the unique words...
var uniqueWordCounter = [];

/*should probably create a function that translates the user's random words from English
to actual separate string words that the computer understands... split?*/

function translateUserText(userBabble) {
    return userBabble.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
};

//now what. 

function calculate(uniqueWordCount) {
    for (var i = 0; i < uniqueWordCount.length; i++) {
        if (array_contains(userText, uniqueWordCount[i])) {
            counter[uniqueWordCount[i]]++;
        }
        else {
            words.push(uniqueWordCount[i]);
            counter[result[i]] = 1;
        }
    }
};

function array_contains(array, value) {
    for (var i = 0; i < array.length; i++)
        if (array[i] == value)
            return true;
    return false;
};
//I have no idea what I'm doing.



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

/*I looked at the solution after three hours of this total and getting unproductively stuck,
I didn't know how to connect this/hook this into my html at all. I am going to spend 
some time today just going over JS in general. I still feel like I need more help on 
understanding JS. I feel like 85% of the time I'm guessing. I need more auditory and visual
help not just reading and Q&A sessions on Thinkful require actual questions that are more 
specific than "I don't understand JavaScript." So.*/