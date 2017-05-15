// Kodilla task 11_6 

$(function() {
	
	function randomString() {
    	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    	var str = '';
    	for (i = 0; i < 10; i++) {
        	str += chars[Math.floor(Math.random() * chars.length)];
    	}
    	return str;
	}
	
	function Column(name) {
    	var self = this; 

    	this.id = randomString();
    	this.name = name;
    	this.$element = createColumn();

    	function createColumn() {
			var $column = $('<div>').addClass('column');
  			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
  			var $columnCardList = $('<ul>').addClass('column-list');
  			var $columnDelete = $('<button>').addClass('btn-delete').text('Skasuj');
  			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

			$columnDelete.click(function() {
    			self.removeColumn();
  			});
  			$columnAddCard.click(function() {
   				self.addCard(new Card(prompt("Wpisz nazwę karty")));	
   			});
			
  			$column.append($columnTitle)
    			.append($columnDelete)
    			.append($columnAddCard)
    			.append($columnCardList);
		
  			return $column;
		}
  	}
  	
  	Column.prototype = {
    	addCard: function(card) {
      		this.$element.children('ul').append(card.$element);
    	},
    	removeColumn: function() {
      		this.$element.remove();
    	}
	};
	
	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard(); 

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');

			$cardDelete.click(function(){	
       		self.removeCard();
			});

			$card.append($cardDelete)
			.append($cardDescription);

			return $card;
		}
	}	
	
	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	};
	
	var board = {
    	name: 'Tablica Kanban',
    	addColumn: function(column) {
      		this.$element.append(column.$element);
      		initSortable();
    	},
    	$element: $('#board .column-container')
	};
	
	function initSortable() {
    	$('.column-list').sortable({ //column-card-list ;)      
    		connectWith: '.column-list',
      		placeholder: 'card-placeholder'
    	}).disableSelection();
  	}
  	
  	$('.create-column')
 		.click(function(){
		var name = prompt('Wpisz nazwę kolumny');
		var column = new Column(name);
    	board.addColumn(column);
  	});

	// TWORZENIE KOLUMN
	var todoColumn = new Column('To-do');
	var doingColumn = new Column('Working');
	var doneColumn = new Column('Done');
	var testColumn = new Column('Test');

	// DODAWANIE KOLUMN DO TABLICY
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);
	board.addColumn(testColumn);

	// TWORZENIE NOWYCH KART
	var card1 = new Card('Zadanie 1');
	var card2 = new Card('Zadanie 2');
	var card3 = new Card('Zadanie 3');
	var card4 = new Card('Zadanie 4');
	var card5 = new Card('Zadanie 5');
	var card6 = new Card('Zadanie 6');
	var card7 = new Card('Zadanie 7');
	var card8 = new Card('Zadanie 8');

	// DODAWANIE KART DO KOLUMN
	todoColumn.addCard(card1);
	todoColumn.addCard(card2);
	doingColumn.addCard(card3);
	doingColumn.addCard(card4);
	doneColumn.addCard(card5);
	doneColumn.addCard(card6);
	testColumn.addCard(card7);
	testColumn.addCard(card8);

}); // koniec skryptu JQuery 