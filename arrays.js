Array.prototype.sizeOf = function(){ return this.length; }
Array.prototype.min = function(){ return Math.min.apply({},this) }
Array.prototype.max = function(){ return Math.max.apply({},this) }
Array.prototype.sum = function(){
	for(var i=0,total=0;i<this.length;total+=this[i++]);
	return total;
}
Array.prototype.product = function(){
	for(var i=0,prod=1;i<this.length;prod*=this[i++]);
	return prod;
}
Array.prototype.average = function(){ return this.sum() / this.length; }
Array.prototype.shuffle = function(){
	for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
}
Array.prototype.rsort = function(){	return this.sort().reverse(); }
Array.prototype.first = function(){ return this[0]; }
Array.prototype.last = function(){ return this[this.length-1]; }
Array.prototype.end = function(){ return this.last(); }
Array.prototype.clear = function(){ this.length = 0; }
Array.prototype.empty = function(){ this.clear(); }
Array.prototype.search = function(obj){	return (this.indexOf(obj) != -1) ? this.indexOf(obj): -1; }
Array.prototype.find = function(obj){return this.search(obj);}
Array.prototype.present = function(obj){return (this.indexOf(obj) != -1);}
Array.prototype.compare = function(array2){
	if(this.sizeOf() != array2.sizeOf(array2))
		return false;
	for(i=0;i<this.length;i++){
		if(this[i] !== array2[i])
			return false;
	}
	return true;
}
Array.prototype.unique = function(){
	var uniq_array = new Array();
	for(i=0;i<this.sizeOf();i++){
		if(uniq_array.search(this[i]) == -1)
			uniq_array.push(this[i])
	}
	
	return uniq_array;
}
Array.prototype.diff = function(){}
Array.prototype.popAt = function(){}
Array.prototype.insertAt = function(){}
Array.prototype.rest = function(){}
Array.prototype.from = function(){}
//Returns a copy of the array with all instances of the values removed. === is used for the equality test.
Array.prototype.without = function(){}
//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
Array.prototype.union = function(){}
//Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.
Array.prototype.intersection = function(){}
//Returns the index of the last occurrence of value in the array, or -1 if value is not present. Uses the native lastIndexOf function if possible.
Array.prototype.lastIndexOf = function(){}
//A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1. Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.
Array.prototype.range = function(){}
// http://documentcloud.github.com/underscore/