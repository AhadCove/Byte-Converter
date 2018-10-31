export const convertToBytes = function(val, bits = 16, prepend = true, ) {
	const hexVal = Math.round(val);
	let byte = prepend 
							? "0x" + hexVal.toString(bits) 
							: hexVal.toString(bits);
	return byte;
}
