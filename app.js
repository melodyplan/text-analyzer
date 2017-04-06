//need to add CSS classes for DOM manipulation layer to target (and use the js- prefix)
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