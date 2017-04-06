//need to add CSS classes for DOM manipulation layer to target (and use the js- prefix)

function WordCount(str) {
    return str.split(" ").length;
}

console.log(WordCount) /*okay this isn't correct, but note to self, to edit this
so it syncs with the Word Count in html*/



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