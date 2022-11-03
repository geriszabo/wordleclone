import wordBank from "./wordBank.txt"

export const boardDefault = [
    ["","","","","",],
    ["","","","","",],
    ["","","","","",],
    ["","","","","",],
    ["","","","","",],
    ["","","","","",]
]

export const generateWordset = async () =>  {
    let wordSet
    let wordSolution
    await fetch(wordBank).then(response => response.text()).then(result => {
        const wordArr = result.split("\n")
        wordSolution = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr)
    })

    return {wordSet, wordSolution}
}