// function monthAndYear(
//   dateString,
//   monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
// ){
//   let date = new Date(dateString) 
//   return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
// }

mn = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
const parseDate = (dateStr, monthNames, d = new Date(dateStr)) => `${monthNames[d.getMonth()]} ${d.getFullYear()}`



console.log(parseDate("2015-12-01T00:00:00.000Z", mn))