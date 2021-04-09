import Passphrase from "./res/Passphrase";
import {
    availableWordlists,
    passphraseDefaults,
    defaultWordlistIndex,
    inputs,
    outputs,
} from "./configs";

/** The main variable that will be used to generate passphraseDefaults. */
let finalPassphrase = new Passphrase(
    passphraseDefaults.wordlist,
    passphraseDefaults.wordCount,
    passphraseDefaults.capitalized,
    passphraseDefaults.insertNumber
);

/** Updating finalPassphrase attributes. */
function updateAdjustments() {
    let selectedWordlistIndex = inputs.wordlist.selectedIndex;

    // if someone put wrong value
    const updateWordCount = (control) => {
        const minAllowed = passphraseDefaults.minWordCount;
        const maxAllowed = passphraseDefaults.maxWordCount;

        if (control.value <= maxAllowed && control.value >= minAllowed) {
            finalPassphrase.wordCount = control.value;
        } else {
            if (control.value > maxAllowed) {
                control.value = maxAllowed;
                finalPassphrase.wordCount = maxAllowed;
            } else {
                control.value = minAllowed;
                finalPassphrase.wordCount = minAllowed;
            }
        }
    };

    finalPassphrase.wordlist = availableWordlists[selectedWordlistIndex].words;
    updateWordCount(inputs.wordCount);
    finalPassphrase.capitalized = inputs.capitalized.checked;
    finalPassphrase.insertNumber = inputs.insertNumber.checked;
}

/** Fill selects on webpage.
 * When filling, default options are selected.
 * Use only for first page load.
 */
function setWebpageSelects() {
    let newOption;

    for (let i = 0; i < availableWordlists.length; i++) {
        newOption = document.createElement("option");
        newOption.value = i;
        if (i === defaultWordlistIndex) {
            newOption.selected = true;
        }
        newOption.innerHTML = availableWordlists[i].name;
        inputs.wordlist.appendChild(newOption);
    }
}

/** Loading preferences from passphraseDefaults to Webpage input elements.
 * Also setting wordCount label to inform about min and max values
 * Aimed for using only for first page load.
 */
function setWebpageInputs() {
    const setWordCountWithLabel = () => {
        // set label
        inputs.wordCountLabel.innerHTML = `Liczba słów 
            (min. ${passphraseDefaults.minWordCount}, maks. ${passphraseDefaults.maxWordCount})`;
        // set wordCount value
        inputs.wordCount.value = passphraseDefaults.wordCount;
    };

    setWordCountWithLabel();
    inputs.capitalized.checked = passphraseDefaults.capitalized;
    inputs.insertNumber.checked = passphraseDefaults.insertNumber;
}

/** set all listeners */
function setEventListeners() {
    inputs.newPassBtn.addEventListener("click", newPassphrase);
    inputs.wordlist.addEventListener("change", showWordlistDescription);
}

/** show passphrase in output window */
function showPassphrase(passphrase) {
    outputs.passphrase.innerHTML = passphrase;
}

/** update wordlist description after selecting dictionary */
function showWordlistDescription() {
    const descriptionOutput = document.querySelector("#wordlist-description");
    let selectedWordlistIndex = inputs.wordlist.value;

    descriptionOutput.textContent =
        availableWordlists[selectedWordlistIndex].description;
}

/** trigger generating new password */
function newPassphrase() {
    // TODO async-await (show clock emoji when generating a password)
    updateAdjustments();

    finalPassphrase.generate();

    showPassphrase(finalPassphrase.passphrase);
}

// first load
setWebpageSelects();
setWebpageInputs();
setEventListeners();
showWordlistDescription();
