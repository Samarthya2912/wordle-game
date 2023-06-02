import words from "../utils/random_words"

export default function getRandomWord(): string {
    let len = words.length;
    let randomIndex = Math.floor(Math.random() * len);

    return words[randomIndex];
}