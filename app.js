//need to add CSS classes for DOM manipulation layer to target (and use the js- prefix)

//need to figure out a function for unique word count...

var textAnalyzer = function(words) {
    //var uniqueWordCount = ?? - figure this out tomorrow? later?
    var wordCount = words.split(" ").length;
    var analyzedWords = words.split(" ");
    var avgWords = 0;
    for (var i = 0; i < wordCount.length; i++) {
        avgWords += analyzedWords[i].length;
    }
    var avgLength = avgWord / wordCount;
};

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