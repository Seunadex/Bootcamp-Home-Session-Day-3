//'use strict'

const findMissing = function findMissing(arr1, arr2){
	var sum_of_arr1 = 0;
	var sum_of_arr2 = 0;
	var i,j;
	var x = arr1.length;
	var y = arr2.length;
	for(i = 0; i < x; i++){
		sum_of_arr1 += arr1[i];
	}

	for (j = 0; j < y; j++) {
		sum_of_arr2 += arr2[j];
	}

	return Math.abs(sum_of_arr2 - sum_of_arr1);

};

console.log(findMissing([1,2,3], [1,2,3,4]));