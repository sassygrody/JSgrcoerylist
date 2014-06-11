function Item(name, price) {
	this.name = name;
	this.price = price;
}


function StoreList() {
	  this.listItems = [];
		this.total = 0;

		var list = []
			$('#store_list tr.item').each(function(){
				var name = $(this).find('.item_name')
				var price = $(this).find('.item_price')
				list.push({ name: name[0].innerHTML, price: price[0].innerHTML })
		})

		for (var i = 0; i < list.length; i ++) {
			var newItem = new Item()
				newItem.name = list[i].name;
				newItem.price = list[i].price;
				this.addItem(newItem)
		}
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

		var list = []
			$('#grocery_list tr.item').each(function(){
				var name = $(this).find('.item_name')
				var price = $(this).find('.item_price')
				list.push({ name: name[0].innerHTML, price: price[0].innerHTML })
		})

		for (var i = 0; i < list.length; i ++) {
			var newItem = new Item()
				newItem.name = list[i].name;
				newItem.price = list[i].price;
				this.addItem(newItem)
		}

};

GroceryList.prototype.addItem = function(item) {
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
			}
		});
}


$(document).ready(function(){
	var newStore = new StoreList();
	var myG = new GroceryList();

		newStore.makeDraggable();
		myG.makeDroppable();
});



	// var store = new StoreList();
	// var currentItems = store.listItems();
 //      store.makeDraggable(currentItems);

	// var myG = new GroceryList();
	// myG.makeDroppable();
