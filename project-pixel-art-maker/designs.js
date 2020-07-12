var height, width, color;

$('#sizePicker').submit(function (evt) {
    height = $('#inputHeight').val(); //sets the value to the variable
    width = $('#inputWidth').val();
    evt.preventDefault(); //to prevent it from submitting the form
    makeGrid(height, width); //calling the makeGrid function 
})

function makeGrid(horizontal, vertical) {
    $('tr').remove(); //to remove any table row
    for (let i = 0; i < horizontal; i++) { //nested for loops to make the squares
        $('#pixelCanvas').append('<tr id = table' + i + '></tr>'); //creates a table row
        for (let d = 0; d < vertical; d++) { 
            $('#table' + i).append('<td></td>'); //creates a data cell in the table 
        }
    }
    $('td').click(function coloring() { //to color the cells
        color = $('#colorPicker').val();
        if ($(this).attr('style')) { //to check if there's any styling in the cell
            $(this).removeAttr('style'); //to remove any styling from the cell
        } else {
            $(this).attr('style', 'background-color:' + color); //to color the selected cell
        }
    })
}
//Could you please explain the (.attr) cause i couldn't understand it verywell.