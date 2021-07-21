const solution = (string) => {
	let text = '';

	try {
		string.match(/[A-z]/g).map((char) => {
			text += char.match(/[A-Z]/g) ? ` ${char}` : char;
		});
	} catch (error) {
		return '';
	}

	return text.trim();
};

solution('camelCasing');
console.log(solution('camelCasing'));
solution('camelCasingTest');
console.log(solution('camelCasingTest'));
solution('identifier');
console.log(solution('identifier'));
solution('');
console.log(solution(''));
