function paperRequirements(firstBook, secondBook, thirdBook) {
	let firstBookPage = firstBook * 100;
	let secondBookPage = secondBook * 200;
	let thirdBookPage = thirdBook * 300;
	let totalPaper = firstBookPage + secondBookPage + thirdBookPage;
	return totalPaper;
}
let totalPage = paperRequirements(2, 2, 2);
console.log("Total Page:", totalPage);