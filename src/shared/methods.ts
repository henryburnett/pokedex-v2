export const capitalize = (words: string) => {
  let wordlist = words.split(/[\s|-]/)
  wordlist = wordlist.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  const result = wordlist.join(' ')
  return result
}
