import capitalize from "./lodash/capitalize";
import sampleSize from "./lodash/sampleSize";
import random from "./lodash/random";

const notInitialized = [
    "NOT_INITIALIZED",
    "NOT_INITIALIZED",
    "NOT_INITIALIZED",
];

const defaultSeparator = "-";

export default class Passphrase {
    constructor(
        wordlist = notInitialized,
        wordCount = 2,
        capitalized = false,
        insertNumber = false,
        separator = defaultSeparator
    ) {
        this.wordlist = wordlist;
        this.wordCount = wordCount;
        this.capitalized = capitalized;
        this.separator = separator;
        this.insertNumber = insertNumber;

        this.passphrase = "";
        this.generate();
    }

    generate() {
        let sampledWords = sampleSize(this.wordlist, this.wordCount);

        // capitalize words if requested
        if (this.capitalized) {
            let capitalizedWords = [];

            sampledWords.forEach((element) => {
                capitalizedWords.push(capitalize(element));
            });

            sampledWords = capitalizedWords;
        }

        // insert random digit after random word
        if (this.insertNumber) {
            let randomDigit = random(9);
            let randomIndex = random(sampledWords.length - 1);

            // insert randomInt after randomIndex word
            sampledWords[randomIndex] = sampledWords[randomIndex].concat(
                randomDigit.toString()
            );
        }

        // create and return final passphrase
        this.passphrase = sampledWords.join(this.separator);

        return this.passphrase;
    }
}
