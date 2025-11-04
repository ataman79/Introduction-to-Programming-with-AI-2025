function sumTimes(h1, m1, h2, m2) {
  // Print the current time
  console.log(`The time is ${String(h1).padStart(2, '0')}:${String(m1).padStart(2, '0')} now.`);
  
  // Sum the times
  let totalMinutes = m1 + m2;
  let totalHours = h1 + h2 + Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;
  totalHours = totalHours % 24;

  // Print the result after adding
  console.log(`After ${String(h2).padStart(2, '0')}:${String(m2).padStart(2, '0')} the time will be ${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}.`);
}

// Example usage
sumTimes(23, 58, 1, 15);
