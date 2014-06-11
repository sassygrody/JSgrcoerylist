
var GroceryList = {

  initialize: function() {
    GroceryList.makeDraggable();
    GroceryList.makeDroppable();
  },

  makeDraggable: function () {
     $("#store_list tr").draggable({helper: 'clone'});
  },

  makeDroppable: function() {
    $("#grocery_list").droppable({
      drop: function(event, ui) {
        $(this).append($(ui.draggable).clone());
        var total = GroceryList.calculateTotal();

      }
    });
  },

  calculateTotal: function(){
    var total = 0;
    $("#grocery_list .item_price").each(function(){
      total += parseFloat($(this).html());
    });
    $("#total_cost").html(total.toFixed(2));
  }

};

$(document).ready(function() {

  GroceryList.initialize();

});