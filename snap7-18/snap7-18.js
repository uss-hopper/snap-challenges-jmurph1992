/**
 * Converts a weight to grams
 *
 * @param mass The weight to be converted.
 * @param units The abbreviated unit for the intended mass.
 *
 * @return the converted mass (in grams) of the weight entered.
 **/

function toGrams(mass, units) {
	 let convertedValue = 0;

	 if (units === 'g') {
	 	return mass;
	 } else if (units === 'lbs') {
	 	return mass * 453.592;
	 } else if (units === 'oz') {
	 	return mass * 28.35;
	 } else if (units === 'kg') {
	 	return mass * 1000;
	 } else if (units === 'mg') {
	 	return mass / 1000;
	 }

	return convertedValue;
}

//console.log(toGrams(10, 'lbs'));

/**
 *Adds the unique positive factors of a numbers.
 *
 * @param number The number to be factored
 *
 * @return The sum of the factors.
 **/

function factorSum(number) {
	let sum = 0;

	for(i=1; i <= number; i++) {
		if(number % i === 0) {
			sum = sum + i;
		}
	}
	return sum;
}

//console.log(factorSum(400000));
