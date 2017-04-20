function bubbleSort (array) {
	for(var i=0;i<array.length;i++){
		for(var j=0;j<array.length;j++){
			if(array[i] < array[j]){
				var lesser = array[j];
				array[j] = array[i];
				array[i] = lesser;
			}
		}
	}

	return array
}