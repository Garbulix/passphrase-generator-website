export const availableWordlists = [english, englishUnique, polish];
export const defaultWordlistIndex = 0;

export const passphraseDefaults = {
    wordlist: availableWordlists[defaultWordlistIndex].words,
    wordCount: 4,
    capitalized: false,
    insertNumber: false,
    maxWordCount: 12,
    minWordCount: 3,
};

/** All input related elements (checkboxes, buttons, select lists and labels for them) */
export const inputs = {
    wordlist: document.querySelector("#select-wordlist"),
    wordCount: document.querySelector("#word-count"),
    wordCountLabel: document.querySelector("#word-count-label"),
    capitalized: document.querySelector("#if-capitalize"),
    insertNumber: document.querySelector("#if-insert-number"),
    newPassBtn: document.querySelector("#generate-btn"),
};

/** outputs - for the moment there is only one */
export const outputs = {
    passphrase: document.querySelector("#pass-output"),
};
