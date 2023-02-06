function countZeros(binary_num) {
	
	var zeros = 0;

	for (var i = 0; i <binary_num.length; i++){
		 if (binary_num[i] == 0){
			 zeros++;
		}
	}
	return zeros;

}
var string = '10101';
var zeros = countZeros(string);
console.log(zeros);