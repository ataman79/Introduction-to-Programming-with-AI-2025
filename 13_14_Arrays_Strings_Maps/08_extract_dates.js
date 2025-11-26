function extractDates(text) {
  const datePattern = /\b(\d{1,2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{4})\b/gi;
  const matches = text.match(datePattern);
  
  if (!matches) return [];
  
  // Days in each month (non-leap year)
  const daysInMonth = {
    'Jan': 31, 'Feb': 29, 'Mar': 31, 'Apr': 30,
    'May': 31, 'Jun': 30, 'Jul': 31, 'Aug': 31,
    'Sep': 30, 'Oct': 31, 'Nov': 30, 'Dec': 31
  };
  
  // Filter to keep only valid dates
  return matches.filter(date => {
    const parts = date.split('-');
    const day = parseInt(parts[0]);
    const month = parts[1];
    const year = parseInt(parts[2]);
    
    // Check if day is valid for the month
    return day > 0 && day <= daysInMonth[month];
  });
}

// Test with the provided example
const text = "The event was on 12-Jun-1999 and another on 3-Nov-1999. Invalid: 32-Jan-2000, 25-abc-2020.";
console.log(extractDates(text));
