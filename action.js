$(document).ready(function(){
    $('.add-todo').on('submit', function(){
        var toDoValue = $('#new-todo').val();
        $('#new-todo').val('');
        var addToDo = $('<li>'+toDoValue+'</li>');
        $(this).next('.todo').append(addToDo);
        return false;     
    }); 
   
    $('.todo').on('click', 'li', function(){
        $(this).fadeOut(duration=1000);
        return false;
    });      
});
