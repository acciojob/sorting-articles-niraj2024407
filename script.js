//your JS code here. If required.
/**
 * Band Sorter
 * Sorts an array of band names alphabetically, ignoring articles ('a', 'an', 'the')
 */

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector("#list");

console.log(bands);

// bands.sort(); //ascending order
const sortedBands = bands.sort((a, b) => {
   const nameA = a.replace(/^(a | an | the)/i, "").trim().toLowerCase();
   const nameB = b.replace(/^(a | an | the)/i, "").trim().toLowerCase();
   return nameA.localeCompare(nameB);
});
//ascending order

console.log(sortedBands);
console.log(bands);

sortedBands.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.append(li);
})
