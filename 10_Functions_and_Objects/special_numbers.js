function specialNumbers(start, end) {
 function generateRange(start, end, filter) {
 let result = '';
 for (let num = start; num <= end; num++)
 if (filter(num))
 result += (result ? ' ' : '') + num;
 return result;
 }
 let filterDiv3 = (num) => num % 3 == 0;
 let filterContains2 = (num) => num.toString().includes('2');
 let filters = (num) => filterDiv3(num) && filterContains2(num);
 return "Nums: " + generateRange(start, end, filters);
} 




console.log(specialNumbers(20, 30));
// Nums: 21 24 27
