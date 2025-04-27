function fibs(num) {
	if (num === 0) return [];
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	const arr = [0, 1];
	for (let i = 2; i < num; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr;
}
console.log("Iterative Fib");
console.log(fibs(11));

function fibsRecursive(num) {
	if (num === 0) return [];
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	const arr = fibsRecursive(num - 1);
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	return arr;
}

console.log("Recursive Fib");
console.log(fibsRecursive(11));
