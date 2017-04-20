function split(wholeArray) {
  firstHalf = wholeArray.slice(0, Math.ceil(wholeArray.length/2));
  secondHalf = wholeArray.slice(Math.ceil(wholeArray.length/2));
  return [firstHalf, secondHalf];
}

function merge (firstHalf,secondHalf){
	var merged = [];
	if(!firstHalf.length ) return merged.concat(secondHalf);
	if(!secondHalf.length ) return merged.concat(firstHalf);
	if(firstHalf[0] < secondHalf[0]){
		merged.push(firstHalf[0]);
		merged = merged.concat(merge(firstHalf.slice(1),secondHalf));	
	}else{
		merged.push(secondHalf[0]);
		merged = merged.concat(merge(firstHalf,secondHalf.slice(1)));	
	} 
	return merged;
}


function mergeSort(array) {
	if(array.length === 1 || !array.length){
		return array;
	}
	array = split(array);
	array = merge(mergeSort(array[0]),mergeSort(array[1]));
	return array;
}