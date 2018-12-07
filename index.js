function main(){
    $('ul .shopping-item-toggle').click(function(){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })

    $('ul .shopping-item-delete').click(function(){
        $(this).closest('li').remove(); 
    })

   let shoppingListItem = $('.shopping-list li:first-child').clone(true); 

    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();  
        let newItemText = $('#shopping-list-entry').val();
        $('.shopping-list li:first-child').clone(true).appendTo('.shopping-list');
        $('.shopping-item').last().text(newItemText); 
        $('#shopping-list-entry').val(''); 
    })
}

$(main)