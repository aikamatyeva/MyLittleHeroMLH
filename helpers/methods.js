import sel from '../data/selectors';

function inputValues4(name, gender, age, story) {
    $(sel.nameField).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.ageField).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyOptions)[story].click();
}

module.exports = inputValues4;