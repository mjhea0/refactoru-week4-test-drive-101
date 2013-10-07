var splice = function(arr, start, numToReplace, replace) {
	array = []
	args = arguments.length
	for (var i = 0; i < arr.length; i++){
		if ((i === start) && args > 3){
			for (var j = 3; j < args; j++){ array.push(arguments[j])}
		}
		if(!((start < i+1) && (i < (start+numToReplace)))) array.push(arr[i])    
	}
	if (start > arr.length) for (var k = 3; k < args; k++){array.push(arguments[k])}
	return array;	
};