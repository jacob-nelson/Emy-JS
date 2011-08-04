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
Array.prototype.avg = function(){ return this.average(); }
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
Array.prototype.findAll = function(obj){
	var match_index = new Array();
	for(i=0;i<this.sizeOf();i++){
		if(this[i] === obj)
			match_index.push(i);
	}
	return match_index;
}
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
Array.prototype.equal = function(array2){return this.compare(array2);}
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
Array.prototype.from = function(index, length){
	if(index > this.length)
		return -1;
	else{
		if(typeof length == 'undefined') length = this.length;
		length = Math.abs(length)+index;
		return this.slice(index, length);
	}
}
Array.prototype.flatten = function(){
	var flattened = this.reduce(function(a,b) {
		return a.concat(b);
	}); 
	
	return flattened;
}
Array.prototype.restOf = function(){ return this.exclude(Array.prototype.slice.call(arguments)) }
Array.prototype.omit = function(){ return this.exclude(Array.prototype.slice.call(arguments)) }
Array.prototype.without = function(){ return this.exclude(Array.prototype.slice.call(arguments)) }
Array.prototype.exclude = function(){
	var exclude_elements = Array.prototype.slice.call(arguments);
	exclude_elements = exclude_elements.flatten();
	var counter = 0;
	while(counter<exclude_elements.length){
		var ee_index = -1;
		ee_index = this.search(exclude_elements[counter]);
		if(ee_index == -1)
			counter++;
		else
		this.splice(ee_index, 1);		
	}
	return this;
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
		fromAscCode = from.charCodeAt(0);
		toAscCode = to.charCodeAt(0);
		if((from.match(lower) && to.match(lower)) || (from.match(upper) && to.match(upper))){
			if(fromAscCode < toAscCode){
				for(i=fromAscCode;i<=toAscCode;i++)
					range_array.push(String.fromCharCode(i));
			}
			else{
				for(i=fromAscCode;i>=toAscCode;i--)
					range_array.push(String.fromCharCode(i));
			}
		}
		else
			 return -1;
	}
	return range_array;
}
Array.prototype.fill = function(fillWith, startIndex, num){
	var fillArray = new Array();
	fillArray = this;
	count = fillArray.sizeOf();
	if(typeof fillWith == 'undefined') return -1;
	if(typeof startIndex == 'undefined') startIndex = 0;
	else if(startIndex > count)startIndex = count;
	if(typeof num == 'undefined') return -1;
	
	for(i=startIndex;i<(startIndex+num);i++){
		fillArray[i] = fillWith;
	}
	return fillArray;
}
Array.prototype.add = function(array2){
	var added = new Array();
	iterate_count = this.sizeOf();
	if(array2.sizeOf() > iterate_count){
		iterate_count = array2.sizeOf();
		this.fill(0, this.sizeOf(), iterate_count) ;
	}
	else
		array2.fill(0, array2.sizeOf(), iterate_count);
	for(i=0;i<iterate_count;i++){
		added.push(this[i]+array2[i]);
	}
	return added;
}
Array.prototype.plus = function(array2){ return this.add(array2); }
Array.prototype.subtract = function(array2){
	var subtracted = new Array();
	iterate_count = this.sizeOf();
	if(array2.sizeOf() > iterate_count){
		iterate_count = array2.sizeOf();
		this.fill(0, this.sizeOf(), iterate_count) ;
	}
	else
		array2.fill(0, array2.sizeOf(), iterate_count);
	for(i=0;i<iterate_count;i++){
		subtracted.push(this[i]-array2[i]);
	}
	return subtracted;
}
Array.prototype.minus = function(array2){ return this.subtract(array2); }
Array.prototype.negate = function(){ 
	var b = new Array(0);
	return b.minus(this); 
}
Array.prototype.merge = function(array2){ return this.concat(array2); }
Array.prototype.union = function(array2){
	var merged = this.merge(array2);
	return merged.unique();
}
Array.prototype.intersection = function(array2){
	var intersection_array = new Array();
	total = (this.sizeOf() > array2.sizeOf()) ? this.sizeOf() : array2.sizeOf();
	for(i=0;i<total;i++){
		if(this.sizeOf() > array2.sizeOf()){
			if(array2.present(this[i]))
				intersection_array.push(this[i]);
		}
		else{
			if(this.present(array2[i]))
				intersection_array.push(array2[i]);
		}
	}
	
	return intersection_array;
}
Array.prototype.addBy = function(num){return this.map(function(element, index, array){ return element+num});}
Array.prototype.multiplyBy = function(num){return this.map(function(element, index, array){ return element*num});}
Array.prototype.subtractBy = function(num){return this.map(function(element, index, array){ return element-num});}
Array.prototype.divideBy = function(num){return this.multiplyBy(1/num);}