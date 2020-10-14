function formatString (string, maxLength = 40) {
	const dots ='...';
  	if (string.length> maxLength) {
  	return string.slice (0, maxLength).concat (dots)
 }
  else if (string.length < maxLength){ 
  return string
  };
}

//return string.length>maxLength ? string.slice (0, maxLength) .concat (dots) : string

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
'Vestibulum facilisis, purus ne...'