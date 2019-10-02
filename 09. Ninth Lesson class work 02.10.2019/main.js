const a = [1, 2, 3];

console.log(a);

function test(p1) {
	console.log(arguments);
};

test(11);

const h = {
	a : 1,
	0 : 11,
	'f' : 23,
};

console.log(h.a);



const point = {
	x: 123,
	y: 345,
}

console.log(point);

const movePoint = (p, dx, dy) => {
	return ({ x: p.x + dx, y: p.y + dy });
}

const p = movePoint(point, 12, 34);

console.log(p);

/*point.z = 1234;

console.log(point);*/

const distance = (p1, p2) => {
	Math.sqrt(
		(p2.x - p1.x) * (p2.x - p1.x) +
		(p2.y -p1.y) * (p2.y - p1.y))
};

console.log(distance(point, p));

const m = [1, 2, 3];

const mutate = (p) => {
	p[0] = -1;
	return 0;
};

console.log(m);
mutate(m);
console.log(m);



let person = {
	firstName: 'Ivan',
	lastName: 'Pupkin',
	age: 34,
	address: 'Grodno',
};

const isValidPerson = (p) => {
	const v1 = typeof p.firstName === 'string';
	const v2 = typeof p.LastName === 'string';
	const v3 = typeof p.age === 'number';
	const v4 = typeof p.address ==='string';

	return v1 && v2 && v3 && v4;
};

console.log(
	isValidPerson({
	firstName: 'Ivan',
	lastName: 'Pupkin',
	age: 34,
	address: 'Grodno',
	}),
);

console.log(Object.keys(person)); //Запоминай!