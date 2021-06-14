export function aux(obj, filtro) {
	var aux = false;
	if (filtro == obj.continent) {
		return true;
	}
	if (!obj.activities) {
		return false;
	}

	obj.activities.forEach((e) => {
		if (e.name == filtro) {
			aux = true;
		}
	});
	return aux;
}

export default function filtro(array, filtro) {
	const arr = [];
	array.forEach((e) => {
		if (aux(e, filtro)) {
			arr.push(e);
		}
	});
	return arr;
}
