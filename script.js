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
	console.log("This was printed recursively");
	if (num === 0) return [];
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	const arr = fibsRecursive(num - 1);
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	return arr;
}

console.log("Recursive Fib");
console.log(fibsRecursive(11));

// MERGE SORT

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	let mid = arr.length / 2;

	const arr1 = mergeSort(arr.slice(0, mid));
	const arr2 = mergeSort(arr.slice(mid));

	let i = 0,
		j = 0,
		k = 0;
	const result = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] > arr2[j]) {
			result[k++] = arr2[j++];
		} else {
			result[k++] = arr1[i++];
		}
	}

	if (i === arr1.length) {
		for (; j < arr2.length; j++) {
			result[k++] = arr2[j];
		}
	} else {
		for (; i < arr1.length; i++) {
			result[k++] = arr1[i];
		}
	}
	return result;
}

console.log("Merge Sort");
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 3, 5, 36, 7, 7, 4, 23, 36, 49, 7, 4, 2345, 234, 6, 45]));
