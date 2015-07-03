function Book(peeps) {
  this.peeps = peeps;
  this.currentPersonIndex = 0;
}


Book.prototype.add = function(name, email, phone){
 this.peeps.push(new Person(name,email,phone)); 
};
 
Book.prototype.lastEntry = function(){
   return this.currentPersonIndex >= this.peeps.length;
}; 

Book.prototype.search = function(name){
    for(var i = 0; i < this.peeps.length; i++){
      return Person.name === name;
    } 
};
  
Book.prototype.getCurrentPerson = function(){
    return this.peeps[this.currentPersonIndex];
 };  

Book.prototype.getNextPerson = function() {
	return this.peeps[this.currentPersonIndex+1]
};
