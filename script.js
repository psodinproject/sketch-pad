$(document).ready(function(){


  // only draw when mouse is pressed
  var isDown = false;
  var firstLoad = true;
  var size = 64;
  $(document).on('mousedown', function(){
    isDown = true;
  });
  $(document).on('mouseup', function(){
    isDown = false;
  });


  var clearGrid = function() {
    $("#pad").children().each(function(){
      $(this).remove();
    });
  };

  var clearBoxes = function() {
    $('.box').removeClass('color');
  };


  var setListeners = function() {
    $('#new_grid').on('click', makeGrid);
    $('#clear').on('click', clearBoxes);
    $(".box").on('click', function(){
          $(this).addClass('color');
    });
    $(".box").on('mouseover',
      function(){ 
        if(isDown) {
          $(this).addClass('color');
        }
    });
  };

  var makeGrid = function() {
    clearGrid();
    if(firstLoad) {
      firstLoad = false;
    } else {
      size = parseInt(prompt("Enter grid size:"));
    }
    for (i=1; i<=size; i++) {
      $("#pad").append("<div class=\"row\"></div>");
    }
    $("#pad").children().each(function() {
      for (i=1; i<=size; i++) {
        $(this).append("<div class=\"box\"></div>");
      }
    });
    var dimension = Math.round(parseInt($('#pad').css('height'))/size);
    console.log(dimension);
    $('.row').css('height', (dimension)+'px');
    $('.row').css('width', ((dimension*size)) + 'px');
    $('.box').css('width', dimension + 'px');
    $('.box').css('height', dimension + 'px');
    setListeners();
  };

  makeGrid();

});
