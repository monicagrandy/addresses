var AddressUI = {

displayPerson: function(){
  this.populateIdWithHTML("name", book.getCurrentPerson().name);
  this.populateIdWithHTML("email", book.getCurrentPerson().email);
  this.populateIdWithHTML("phone", book.getCurrentPerson().phone);
  this.displayProgress();
  this.nextButton();
  this.lastButton();
  this.newSearch();
},  
  
populateIdWithHTML: function(id, text){
     var element = document.getElementById(id);
     element.innerHTML = text;
  },

nextButton: function() { 
      var nextButton = document.getElementById("nextPerson");
      nextButton.onclick = function() {
      book.currentPersonIndex++;
      AddressUI.displayPerson();
      }
  },

lastButton: function() { 
      var lastButton = document.getElementById("lastPerson");
      lastButton.onclick = function() {
      book.currentPersonIndex--;
      AddressUI.displayPerson();
      };
  },

newSearch: function() {
 var mySearch = document.getElementById("userSearch").value;
 var searchButton = document.getElementById("searchButton");
 searchButton.onclick = function(){
 }
},
  
  
    /*
    for(var i = 0; i < book.peeps.length; i++){
      if(userSearch === book.peeps[i]["name"]){
        book.currentPersonIndex = book.peeps[i];
      }
    }
    AddressUI.displayPerson();*/




displayProgress: function() { 
     var currentPersonNumber = book.currentPersonIndex +1; //adds 1 because the index begins counting at 0
     this.populateIdWithHTML("progress", "Entry" + currentPersonNumber + " of " + book.peeps.length);
  }
  
}; 
