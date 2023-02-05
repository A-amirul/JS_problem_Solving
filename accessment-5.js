let array = [10, 12, 13,-32, 14, 11, 15, 14, 17, 19, 20,-2,-10];
let newArray = [];

for (let i = 0; i < array.length; i++) {
	let element = array[i];
	if (element > 0) {
		newArray.push(element);

	}
}
console.log('NewArray=', newArray);
