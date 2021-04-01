/** All input related elements (checkboxes, buttons, select lists and labels for them) */
const inputs = {
    wordlist: document.querySelector("#select-wordlist"),
    wordCount: document.querySelector("#word-count"),
    wordCountLabel: document.querySelector("#word-count-label"),
    capitalized: document.querySelector("#if-capitalize"),
    insertNumber: document.querySelector("#if-insert-number"),
    newPassBtn: document.querySelector("#generate-btn"),
};

/** outputs - for the moment there is only one */
const outputs = {
    passphrase: document.querySelector("#pass-output"),
};
