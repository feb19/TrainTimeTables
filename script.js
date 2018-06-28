let csvToJson = require('convert-csv-to-json');
 
let csvs = [
  'tokyu/dt/10/toshibuya.csv'
]
 
csvs.map(function(element, index, array) {
  let json = element.replace('.csv', '.json')
  return csvToJson.generateJsonFileFromCsv(element, json);
})
