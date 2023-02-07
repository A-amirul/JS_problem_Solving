function secondLargest(numbers) {
	let largest = numbers[0];
	let secondLarge = numbers[0];
	for (let i = 0; i < numbers.length; i++){
		let number = numbers[i];
		if (number > largest) {
			secondLarge = largest;
			largest = number;
		}
		else if (number > secondLarge) {
			secondLarge = number;
		}
	
	}
	return secondLarge;

}

var numbers = [10, 33, 5,45, 99, 6];
var number = secondLargest(numbers);
console.log(number);