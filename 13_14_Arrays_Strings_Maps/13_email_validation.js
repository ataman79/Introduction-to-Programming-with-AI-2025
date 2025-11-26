function isValidEmail(email) {
 const emailPattern = /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
 // Additional validation: no consecutive dots, no dots at start/end
 if (email.includes("..")) return false;
 if (email.startsWith(".") || email.endsWith(".")) return false;
 
 return emailPattern.test(email);
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("john.doe@company.co.uk")); // true
console.log(isValidEmail("invalid.email@")); // false
console.log(isValidEmail("@example.com")); // false
console.log(isValidEmail("user@domain")); // false
console.log(isValidEmail("user.name+tag@site.org")); // true
console.log(isValidEmail("user@domain...com")); // false