function convertToRunes() {
  const inputText = document.getElementById("inputText").value; 
  const translatedRunes = translateToRunes(inputText);

  document.getElementById("outputRunes").innerText = translatedRunes;
}
document.getElementById("convertBtn").addEventListener("click", convertToRunes);

document.getElementById("inputText").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      convertToRunes();
  }
});
function translateToRunes(text) {
  // Define a mapping of modern letters to Elder Futhark runes
  const letterToRune = {
      'A': 'ᚨ',
      'B': 'ᛒ',
      'C': 'ᚲ',
      'D': 'ᛞ',
      'E': 'ᛖ',
      'F': 'ᚠ',
      'G': 'ᚷ',
      'H': 'ᚺ',
      'I': 'ᛁ',
      'J': 'ᛃ',
      'K': 'ᚲ',  // Use the same rune as 'C'
      'L': 'ᛚ',
      'M': 'ᛗ',
      'N': 'ᚾ',
      'O': 'ᛟ',
      'P': 'ᛈ',
      'Q': '',    // No corresponding rune, remove from translation
      'R': 'ᚱ',
      'S': 'ᛊ',
      'T': 'ᛏ',
      'U': 'ᚢ',
      'V': '',    // No corresponding rune, remove from translation
      'W': 'ᚹ',
      'X': '',    // No corresponding rune, remove from translation
      'Y': 'ᛃ',  // Use the same rune as 'J'
      'Z': 'ᛉ',
      ' ': ' ',   // Keep spaces in the translation
  };

  // Convert each letter to its corresponding rune or remove it if no rune exists
  const translatedRunes = text.toUpperCase().split('').map(letter => letterToRune[letter] || '').join('');

  return translatedRunes;
}