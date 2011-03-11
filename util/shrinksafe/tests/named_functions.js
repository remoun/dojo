result = "";

(function f(x) {
	if (x && x.length) {
		result += x[0];
		f(x.slice(1));
	}
})('foo');

(function rec_with_long_name(x) {
	if (x && x.length) {
		result += x[0];
		rec_with_long_name(x.slice(1));
	}
})('bar');

// Make sure a new function with the same name gets a new alias.
(function rec_with_long_name(x) {
	if (x && x.length) {
		rec_with_long_name(x.slice(1));
		result += x[0];
	}
})('!24');

(function object_literal_with_long_name(x) {
	if (x && x.length) {
		result += x[0];
		({ inside: object_literal_with_long_name }).inside(x.slice(1));
	}
})('oh');

(function captured_object_literal(x) {
	if (x && x.length) {
		result += x[0];
		var y = { inside: captured_object_literal };
		y.inside(x.slice(1));
	}
})('yeah');

// This should be stripped
console.log(result);
