import { capitalize } from '../methods'

describe('capitalize', () => {
  test('returns capitalized word given string of only one word', () => {
    const word = 'test'
    const capitalizedWord = 'Test'
    const result = capitalize(word)

    expect(result).toEqual(capitalizedWord)
  })

  test("returns string of capitalized words separated by spaces given string of words separated by '-'", () => {
    const words = 'test-words'
    const capitalizedWords = 'Test Words'
    const result = capitalize(words)

    expect(result).toEqual(capitalizedWords)
  })

  test("returns string of capitalized words separated by spaces given string of words separated by ' '", () => {
    const words = 'test words'
    const capitalizedWords = 'Test Words'
    const result = capitalize(words)
    expect(result).toEqual(capitalizedWords)
  })
})
