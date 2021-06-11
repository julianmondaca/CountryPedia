module.exports = {
	paginado: (arr) => {
		var array = [];
		var count = 0;

		for (let i = 0; i < arr.length; i++) {
			if (!array[count]) array.push([]);
			if (array[count].length < 8) {
				array[count].push(arr[i]);
			} else {
				count++;
				array.push([]);
				array[count].push(arr[i]);
			}
		}
		return array;
	},
};
