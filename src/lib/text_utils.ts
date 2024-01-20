export function capitalizeAllWords(content: string): string {
  const words = content.split(' ');
  console.log(words);
  
  return words.map((word) => capitalizeFirstLetter(word)).join(' ');
}

function capitalizeFirstLetter(word: string): string {
  const firstLetter = word.charAt(0).toUpperCase();
  return firstLetter.concat(word.slice(1))
}