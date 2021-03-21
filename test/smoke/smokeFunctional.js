import sel from '../../data/selectors.js';
import exp from '../../data/expectedResults.json';

describe('Required fields and story created', function () {

    before('Open application', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 filled in with valid values', function () {
        $(sel.nameField).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.ageField).setValue('1234567890');
        $(sel.storyDropdown).click();
        $$(sel.storyOptions)[6].click();
        browser.pause(2000);
        let submitBtn = $(sel.submitButton).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027  User can create a story with a valid values', function () {
        browser.refresh();
        $(sel.nameField).setValue('LadyBug008');
        $$(sel.radioButtons)[1].click();
        $(sel.ageField).setValue('1234567890');
        $(sel.storyDropdown).click();
        $$(sel.storyOptions)[6].click();
        browser.pause(2000);
        $(sel.submitButton).click();
        let tryAgain = $(sel.tryAgain).isDisplayed();
        expect(tryAgain).toEqual(true);
});
});
