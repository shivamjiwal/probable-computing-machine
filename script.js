function steamrollArray(nestedArray) {
const flattenedArray = [];
function flatten(array) {
array.forEach(element => {
if (Array.isArray(element)) {
flatten(element);
} else {
flattenedArray.push(element);
}
});
}
flatten(nestedArray);
return flattenedArray;
}
