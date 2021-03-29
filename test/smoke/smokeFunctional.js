import sel from '../../data/selectors.js';
import exp from '../../data/expectedResults.json';
import {name, gender, age, story} from '../../data/testData.js';
import inputValues4 from '../../helpers/methods';

describe('Required fields and story created', function () {

    before('Open application', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 filled in with valid values', function () {
        $(sel.nameField).setValue(name.defaultName);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.ageField).setValue(age.defaultAge);
        $(sel.storyType).click();
        $$(sel.storyOptions)[story.comedy].click();
        let submitBtn = $(sel.submitButton).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027  User can create a story with a valid values', function () {
        browser.refresh();
        inputValues4(name.defaultName, gender.she, age.defaultAge, story.comedy);
        $(sel.submitButton).click();
        let tryAgain = $(sel.tryAgain).isDisplayed();
        expect(tryAgain).toEqual(true);
});
});
