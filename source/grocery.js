

function Item(name, price) {
	this.name = name;
	this.price = price;
}


function StoreList() {
	  this.listItems = [];
		this.total = 0;
}

StoreList.prototype.addPrice = function(item) {
	this.total += item.price
}

StoreList.prototype.addItem = function(item) {
	this.listItems.push(item);
	this.addPrice(item);
}

StoreList.prototype.makeDraggable = function(item) {
		$('#store_list tr').draggable({helper: 'clone'});
	}


function GroceryList() {
		this.listItems = [];
		this.total = 0;
};

GroceryList.prototype.addItem = function(item) {
	console.log("ARE WE HERE?");
	this.listItems.push(item);
	this.addPrice(item);
	
}

GroceryList.prototype.addPrice = function(item) {
	this.total +=parseFloat(item.price)
}

GroceryList.prototype.makeDroppable = function(item) {
	$('#grocery_list').droppable({
		drop: function(event, ui) {
			$(this).append($(ui.draggable).clone());
			var name = ui.draggable.context.firstElementChild.innerText;
			var price = ui.draggable.context.lastElementChild.innerText;

			myG.addItem(new Item(name, price))
			myG.updateTotal()
		}
	});
}

GroceryList.prototype.updateTotal = function() {
	$("#grocery_list tfoot tr td:last-child").html(this.total)
}

// READY, SET, DRAG

$(document).ready(function(){
	newStore = new StoreList();
	myG = new GroceryList();

		newStore.makeDraggable();
		myG.makeDroppable();
});

