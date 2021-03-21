import sel from '../../data/selectors.js';
import exp from '../../data/expectedResults.json';

describe('Labels are correct', function () {

    describe('Labels are correct', function () {

        before('Open application', function () {
            browser.url('');
        });

        it('TC-015 Header = My Little Hero', function () {
            let headerText = $(sel.header).getText();
            expect(headerText).toEqual(exp.header);
        });

        it('TC-016 Instruction = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            let instructionText = $(sel.instruction).getText();
            expect(instructionText).toEqual(exp.instruction);
        });

        it('TC-017 Name field label = "1. What is your Hero\'s name?"', function () {
            let nameFieldText = $$(sel.requiredFieldLabels)[0].getText();
            expect(nameFieldText).toEqual(exp.nameFieldLabel);
        });

        it('TC-018 Gender field label = "2. Form Size"', function () {
            let genderFieldText = $$(sel.requiredFieldLabels)[1].getText();
            expect(genderFieldText).toEqual(exp.genderFieldLabel);
        });

        it('TC-019 The first button label = "he"', function () {
            let firstRadioText = $$(sel.radioButtonsLabels)[0].getText();
            expect(firstRadioText).toEqual(exp.theFirstButtonLabel);
        });
        it('TC-020 The second button label = "she"', function () {
            let secondRadioText = $$(sel.radioButtonsLabels)[1].getText();
            expect(secondRadioText).toEqual(exp.theSecondButtonLabel);
        });
        it('TC-021 The third button label = "it"', function () {
            let thirdRadioText = $$(sel.radioButtonsLabels)[2].getText();
            expect(thirdRadioText).toEqual(exp.theThirdButtonLabel);
        });

        it('TC-022 Age field label = 3. How old is your Hero?', function () {
            let ageFieldText = $$(sel.requiredFieldLabels)[2].getText();
            expect(ageFieldText).toEqual(exp.ageFieldLabel);
        });

        it('TC-023 Type of Story label = 4. What type of story would you like to read?', function () {
            let storyFieldText = $$(sel.requiredFieldLabels)[3].getText();
            expect(storyFieldText).toEqual(exp.storyTypeLabel);
        });

        it('TC-024 Image label = 5. Upload an image (optional)', function () {
            let imageFieldText = $$(sel.imageLabel)[4].getText();
            expect(imageFieldText).toEqual(exp.imageLabel);
        });

        it('TC-025 Submit button label = Create!)', function () {
            let submitText = $(sel.submitButton).getText();
            expect(submitText).toEqual(exp.submitButtonLabel);
        });
    });
});