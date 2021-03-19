describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        before('Open application', function () {
            browser.url('https://qa-apps.netlify.app/hero'); //open baseUrl
        });

        it('TC-001 Page Title is MLH trial ', function () { //define test title by passing a string
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });


    });

    describe('Elements exist', function () {

        before('Open application', function () {
            browser.url('https://qa-apps.netlify.app/hero');
        });

        it('TC-002 Header is present ', function () {
            let header = $('h3').isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present ', function () {
            let instruction = $('p').isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present ', function () {
            let instruction = $$('.ant-form-item-required')[0].isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-007 Gender radio buttons is present ', function () {
            let radioButtons = $$('.ant-radio-input').length;
            expect(radioButtons).toEqual(3);
        });

    });
});