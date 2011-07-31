/************************************************
*	Author: Jacob Nelson						*
*	Email Id: iam@jnelson.in					*
*	Blog: http://jnelson.in						*
************************************************/
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
Array.prototype.diff = function(array2){
	var diff_array = new Array();
	for(i=0;i<this.length;i++){
		if(!array2.present(this[i]))
			diff_array.push(this[i]);
	}
	return diff_array;
}
Object.prototype.range = function(from, to, step){
	if(typeof from != typeof to) return -1;
	if(typeof step == "undefined") step = 1;
	step = Math.abs(step);
	var range_array = new Array();
	if(typeof from == 'number'){
		if(from > to){
			for(i=from;i>=to;i-=step)
				range_array.push(i);
		}
		else{
			for(i=from;i<=to;i+=step)
				range_array.push(i);
		}
	}
	else if(typeof from == 'string'){
		var lower = /[a-z]/;
		var upper = /[A-Z]/;
		fromCharCode = from.charCodeAt(0);
		toCharCode = to.charCodeAt(0);
		if((from.match(lower) && to.match(lower)) || (from.match(upper) && to.match(upper))){
			if(fromCharCode < toCharCode){
				for(i=fromCharCode;i<=toCharCode;i++)
					range_array.push(String.fromCharCode(i));
			}
			else{
				for(i=fromCharCode;i>=toCharCode;i--)
					range_array.push(String.fromCharCode(i));
			}
		}
		else
			 return -1;
	}
	return range_array;
}