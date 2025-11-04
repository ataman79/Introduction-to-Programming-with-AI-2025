function sum3Times(h1, m1, h2, m2, h3, m3) {
  // Helper to format hh:mm
  function format(h, m) {
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  }

  // Convert all times to total minutes
  let totalMinutes = (h1 * 60 + m1) + (h2 * 60 + m2) + (h3 * 60 + m3);

  // Calculate resulting hours and minutes
  let hours = Math.floor(totalMinutes / 60) % 24;
  let minutes = totalMinutes % 60;

  // Format parts
  const t1 = format(h1, m1);
  const t2 = format(h2, m2);
  const t3 = format(h3, m3);
  const result = format(hours, minutes);

  // Return formatted expression
  return `${t1} + ${t2} + ${t3} = ${result}`;
}

// Examples (console.log only outside the function)
console.log(sum3Times(10, 30, 0, 5, 0, 2));    // "10:30 + 00:05 + 00:02 = 10:37"
console.log(sum3Times(11, 50, 0, 45, 1, 55));  // "11:50 + 00:45 + 01:55 = 14:30"
console.log(sum3Times(21, 58, 9, 15, 16, 51)); // "21:58 + 09:15 + 16:51 = 00:04"