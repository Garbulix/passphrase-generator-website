const availableWordlists = [english, englishUnique, polish];
const defaultWordlistIndex = 0;

const passphraseDefaults = {
    wordlist: availableWordlists[defaultWordlistIndex].words,
    wordCount: 4,
    capitalized: false,
    insertNumber: false,
    maxWordCount: 12,
    minWordCount: 3,
};
