function hotelPrice(startDate, endDate) {
  // Parse dates in dd-MMM-yyyy format
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  function parseDate(dateStr) {
    const parts = dateStr.split('-');
    const day = parseInt(parts[0]);
    const month = parts[1];
    const year = parseInt(parts[2]);
    const monthIndex = monthNames.indexOf(month);
    return new Date(year, monthIndex, day);
  }

  function getMonthName(monthIndex) {
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    return monthList[monthIndex];
  }

  function getPrices(monthName) {
    if (monthName === 'May' || monthName === 'October') {
      return { studio: 50.00, apartment: 65.00 };
    } else if (monthName === 'June' || monthName === 'September') {
      return { studio: 70.00, apartment: 80.00 };
    } else if (monthName === 'July' || monthName === 'August') {
      return { studio: 80.00, apartment: 95.00 };
    } else {
      return { studio: 40.00, apartment: 55.00 };
    }
  }

  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  // Calculate number of nights
  const nights = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  
  // Check for invalid period
  if (nights <= 0) {
    return "Invalid period!";
  }
  
  // Extract month from start date
  const monthName = getMonthName(start.getMonth());
  
  // Get prices for the start month
  const prices = getPrices(monthName);
  
  // Calculate regular prices without discounts
  let studioTotal = prices.studio * nights;
  let apartmentTotal = prices.apartment * nights;

  // Calculate discounts for studio
  let studioDiscount = 0;
  if (nights >= 14) {
    if (monthName === 'July' || monthName === 'August') {
      studioDiscount = 0.15;
    } else if (monthName === 'June' || monthName === 'September') {
      studioDiscount = 0.20;
    } else {
      studioDiscount = 0.30;
    }
  } else if (nights >= 7) {
    studioDiscount = 0.05;
  }
  studioTotal *= (1 - studioDiscount);

  // Calculate discounts for apartment
  let apartmentDiscount = 0;
  if (nights >= 14) {
    apartmentDiscount = 0.10;
  } else if (nights >= 7) {
    if (monthName === 'May' || monthName === 'June' || monthName === 'July' || 
        monthName === 'August' || monthName === 'September' || monthName === 'October') {
      apartmentDiscount = 0.05;
    }
  }
  apartmentTotal *= (1 - apartmentDiscount);

  // Output format
  console.log(`${nights} nights`);
  console.log(`Studio price: ${studioTotal.toFixed(2)}`);
  console.log(`Apartment price: ${apartmentTotal.toFixed(2)}`);
}

hotelPrice("10-May-2027", "25-May-2027");  