const notInitialized = [
    "NOT_INITIALIZED",
    "NOT_INITIALIZED",
    "NOT_INITIALIZED",
];

const defaultSeparator = "-";

class Passphrase {
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
        let sampledWords = [];

        // sample words from dictionary
        for (let i = 0; i < this.wordCount; i++) {
            sampledWords.push(this.wordlist.sample());
        }

        // capitalize words if requested
        if (this.capitalized) {
            let capitalizedWords = [];

            sampledWords.forEach((element) => {
                capitalizedWords.push(capitalizeStr(element));
            });

            sampledWords = capitalizedWords;
        }

        // insert random digit after random word
        if (this.insertNumber) {
            let randomDigit = getRandomInt(0, 9);
            let randomIndex = getRandomInt(0, sampledWords.length - 1);

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
