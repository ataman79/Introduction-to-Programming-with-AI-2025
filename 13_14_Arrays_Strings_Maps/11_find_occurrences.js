findAllOccurrences(
    "JS",
    "Hello, JS. Visit jsTalks(); conf",
    x => console.log("Found at index:", x),
    false);

function findAllOccurrences(substr, str, callback, caseSensitive = true) {
    if (!caseSensitive) {
        substr = substr.toLowerCase();
        str = str.toLowerCase();
    }
    let index = str.indexOf(substr);
    while (index !== -1) {
        callback(index);
        index = str.indexOf(substr, index + 1);
    }
}


//other solution:

// function findAllOccurrences(substr, str, foundCallback, ignoreCasing = true) {
//  let s = ignoreCasing ? str.toLowerCase() : str;
//  let sub = ignoreCasing ? substr.toLowerCase() : substr;
//  let startIndex = 0, indices = [];
//  while (true) {
//  const idx = s.indexOf(sub, startIndex);
//  if (idx == -1)
//  break;
//  indices.push(idx);
//  if (foundCallback)
//  foundCallback(idx, str.substr(idx, substr.length));
//  startIndex = idx + 1; // Move by 1 to allow overlapping matches
//  }
//  return indices;
// } 