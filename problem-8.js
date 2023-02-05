let friendsAge = [21, 22, 15, 25, 23, 28, 30];
let element = friendsAge.length;  // array তে উপাদান সংখা বের করতে হলে
console.log(element);
 friendsAge[3] = 40;     //৪র্থ পজিশন এ নতুন উপাদান যোগ করতে হলে
console.log(friendsAge);

//২টা উপাদান যোগ করতে হইলে
friendsAge.push(35);
friendsAge.push(32);
console.log(friendsAge);

// ১টা উপাদান বের করে দিতে হলে
friendsAge.pop();
console.log(friendsAge);