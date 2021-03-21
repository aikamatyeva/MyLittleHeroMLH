import sel from '../../data/selectors.js';
import exp from '../../data/expectedResults.json';

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open application', function () {
            browser.url('');
        });

        it('TC-001 Page Title is MLH trial ', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });


    });

    describe('Elements exist', function () {

        before('Open application', function () {
            browser.url('');
        });

        it('TC-002 Header is present ', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present ', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present ', function () {
            let nameFieldLabel = $$(sel.requiredFieldLabels)[0].isDisplayed();
            expect(nameFieldLabel).toEqual(true);
        });

        it('TC-005 Name field is present ', function () {
            let nameField = $(sel.nameField).isDisplayed();
            expect(nameField).toEqual(true);
        });

        it('TC-006 Gender radio label is present ', function () {
            let genderRadioLabel = $$(sel.requiredFieldLabels)[1].isDisplayed();
            expect(genderRadioLabel).toEqual(true);
        });

        it('TC-007.a Gender radio button 1 is present ', function () {
            let radioButtonsHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(radioButtonsHe).toEqual(true);
        });

        it('TC-007.b Gender radio button 2 is present ', function () {
            let radioButtonsShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(radioButtonsShe).toEqual(true);
        });

        it('TC-007.c Gender radio button 3 is present ', function () {
            let radioButtonsIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(radioButtonsIt).toEqual(true);
        });

        it('TC-008 Age field label is present', function () {
            let ageFieldLabel = $$(sel.requiredFieldLabels)[2].isDisplayed();
            expect(ageFieldLabel).toEqual(true);
        });

        it('TC-009 Age field is present ', function () {
            let ageField = $(sel.ageField).isDisplayed();
            expect(ageField).toEqual(true);
        });

        it('TC-010 Story field label is present', function () {
            let storyFieldLabel = $$(sel.requiredFieldLabels)[3].isDisplayed();
            expect(storyFieldLabel).toEqual(true);
        });

        it('TC-011 Story Type dropdown is present ', function () {
            let storyDropdown = $(sel.storyDropdown).isDisplayed();
            expect(storyDropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', function () {
            let storyFieldLabel = $$(sel.imageLabel)[4].isDisplayed();
            expect(storyFieldLabel).toEqual(true);
        });

        it('TC-013 Image field is present ', function () {
            let imageField = $(sel.image).isDisplayed();
            expect(imageField).toEqual(true);
        });

        it('TC-014 Submit button is present', function () {
            let createButton = $(sel.createButton).isDisplayed();
            expect(createButton).toEqual(true);
        });
    });

});