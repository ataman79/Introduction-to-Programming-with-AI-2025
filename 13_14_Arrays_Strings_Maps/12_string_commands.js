function executeCommands(commands) {
  let result = "";

  for (let command of commands) {
    // Append: {text}
    if (command.startsWith("Append: ")) {
      result += command.substring("Append: ".length);
    }
    // Prepend: {text}
    else if (command.startsWith("Prepend: ")) {
      result = command.substring("Prepend: ".length) + result;
    }
    // Insert: {index} {text}
    else if (command.startsWith("Insert: ")) {
      const parts = command.substring("Insert: ".length).split(" ");
      const index = parseInt(parts[0]);
      const text = parts.slice(1).join(" ");
      result = result.slice(0, index) + text + result.slice(index);
    }
    // Delete words: {word1}, {word2}, …
    else if (command.startsWith("Delete words: ")) {
      const wordsToDelete = command.substring("Delete words: ".length)
        .split(", ")
        .map(w => w.trim());
      
      for (let word of wordsToDelete) {
        // Use regex with word boundaries to delete whole words
        // Remove the word along with surrounding spaces, but keep structure
        const regex = new RegExp(`\\s*\\b${word}\\b\\s*`, "g");
        result = result.replace(regex, "");
      }
      // Clean up multiple consecutive spaces (but preserve structure)
      result = result.replace(/ +/g, " ");
    }
    // Replace: {text} -> {text}
    else if (command.startsWith("Replace: ")) {
      const parts = command.substring("Replace: ".length).split(" -> ");
      const oldText = parts[0];
      const newText = parts[1];
      // Escape special regex characters in the search string
      const escapedOldText = oldText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Also try with spaces if the pattern doesn't have spaces
      const patterns = [escapedOldText];
      if (!oldText.includes(" ")) {
        // If pattern has no spaces, also try with a space in the middle
        const withSpace = oldText.slice(0, oldText.length / 2) + " " + oldText.slice(oldText.length / 2);
        patterns.push(withSpace.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      }
      
      // Keep replacing until no more matches are found
      let found = true;
      while (found) {
        let newResult = result;
        for (const pattern of patterns) {
          newResult = newResult.replace(new RegExp(pattern, 'g'), newText);
        }
        found = newResult !== result;
        result = newResult;
      }
    }
    // Capitalize: {start index} - {end index}
    else if (command.startsWith("Capitalize: ")) {
      const indices = command.substring("Capitalize: ".length).split(" - ");
      const start = parseInt(indices[0]);
      const end = parseInt(indices[1]);
      
      const before = result.substring(0, start);
      const toCapitalize = result.substring(start, end + 1).toUpperCase();
      const after = result.substring(end + 1);
      result = before + toCapitalize + after;
    }
  }

  return result;
}

// Test with the provided example
let commands = [
  "Append: one two three",
  "Delete words: two"
];

console.log(executeCommands(commands));
