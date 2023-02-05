function bestFriend(array) {
	var largeName = array[0].length;
	var result = array[0];

	for (let i = 1; i < array.length; i++) {
		const element = array[i].length;
		if (element > largeName) {
			largeName = element;
			result = array[i];
		}

	}
	return result;
}

let array = ['abul', 'Mustafizur', 'Mutoza', 'Rana', 'Rakib', 'Ruhul','abdul zabbar'];
let friends = bestFriend(array);
console.log('friend Name:', friends);