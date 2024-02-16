import { expect } from '@wdio/globals'

describe('Homework 3 (lesson #13)', () => {

    // homework #3

    xit('Test case 1: Check login with incorrect password', async () => {
        await browser.url('https://github.com');

        let signInButton = await $('[class="d-inline-block d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit"]')
        await signInButton.click()
        await browser.pause(2000)

        let inputUsername = await $('#login_field')
        await inputUsername.setValue('dkostuk09@gmail.com') 
        await browser.pause(2000)

        let inputPassword = await $('#password')
        await inputPassword.setValue('incorrectPassword') 
        await browser.pause(2000)

        let loginButton = await $('//input[@value="Sign in"]')
        await loginButton.click()
        await browser.pause(2000)

        let allertMessage = await $('[class="js-flash-alert"]')     
        await expect((await allertMessage.getText()).trim()).toEqual('Incorrect username or password.') 

    });

    xit('Test case 2: Check password recovery with correct email and without captcha', async () => {
        await browser.url('https://github.com');

        let signInButton = await $('[class="d-inline-block d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit"]')
        await signInButton.click()
        await browser.pause(2000)

        let forgotPasswordButton = await $('[class="label-link position-absolute top-0 right-0"]')
        await forgotPasswordButton.click()
        await browser.pause(2000)

        let inputUsername = await $('#email_field')
        await inputUsername.setValue('dkostuk09@gmail.com') 
        await browser.pause(2000)

        let verifyText = await $('[class="f4 mb-3"]')     
        await expect(await verifyText.getText()).toEqual('Verify your account') 

        let sendPasswordButton = await $('[class="btn btn-primary btn-block js-octocaptcha-form-submit"]')
        let isEnabled = await sendPasswordButton.isEnabled()
        await expect(isEnabled).toEqual(false)     
    });

    xit('Test case 3: Check search and sponsorable projects', async () => {
        await browser.url('https://github.com');

        let burgerButton = await $('[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]')
        await burgerButton.click()
        await browser.pause(2000)

        let searchButton = await $('[class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"]')
        await searchButton.click()
        await browser.pause(2000)
        
        let inputSearch = await $('#query-builder-test')
        await inputSearch.addValue('resume') 
        await browser.pause(2000)

        let search = await $('[class="ActionListItem-descriptionWrap"]')
        await search.click()
        await browser.pause(2000)
       
        let heading = await $('[class="Text-sc-17v1xeu-0 dRSoUn"]')     
        await expect(await heading.getText()).toEqual('Filter by') 

        let sponsorableProjectsButton = await $('[class="Link__StyledLink-sc-14289xe-0 hORTBF"]')
        await sponsorableProjectsButton.scrollIntoView()
        await browser.pause(2000)
        await sponsorableProjectsButton.click()
        await browser.pause(2000)

        let refreshButton = await $('#sponsors-featured-accounts-refresh-button')
        let isClickable = await refreshButton.isClickable()
        await expect(isClickable).toEqual(true)     
    });

    xit('Test case 4: Check free subscription with incorrect email', async () => {
        await browser.url('https://github.com');

        let burgerButton = await $('[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]')
        await burgerButton.click()
        await browser.pause(2000)

        let pricingButton = await $('[class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]')
        await pricingButton.click()
        await browser.pause(2000)

        let mainHeading = await $('[class="h2-mktg"]')     
        await expect(await mainHeading.getText()).toEqual('Get the complete developer platform.') 
        
        const footer = await $('[class="d-flex flex-wrap py-5 mb-5"]')
        let footerIsDisplayedInViewport = await footer.isDisplayedInViewport()
        await expect(footerIsDisplayedInViewport).toEqual(false) 

        let joinButton = await $('[class="btn-mktg d-block btn-muted-mktg"]')
        await joinButton.click()
        await browser.pause(4000)
       
        let inputEmail = await $('#email')
        await inputEmail.addValue('incorrectEmail') 
        await browser.pause(2000)

        let continueButton = await $('//*[@id="email-container"]/div[2]/button')
        await continueButton.click()
        await browser.pause(2000)

        let errorMessage = await $('[class="mb-0"]')     
        await expect(await errorMessage.getText()).toEqual('Email is invalid or already taken') 
    });


    xit('Test case 5: Check the video on the issues page', async () => {
        await browser.url('https://github.com');

        let burgerButton = await $('[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]')
        await burgerButton.click()
        await browser.pause(2000)
       
        let productButton = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[1]/button')
        await productButton.click()
        await browser.pause(2000)

        let issuesButton = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[1]/div/div[1]/ul/li[7]/a')
        await issuesButton.click()
        await browser.pause(2000)

        let mainText = await $('[class="h1-mktg mx-auto col-6-max"]')     
        await expect(await mainText.getText()).toEqual('Project planning for developers') 
   
        let videoButton = await $('/html/body/div[1]/div[4]/main/div[2]/div/div[2]/div/details/summary')
        await videoButton.click()
        await browser.pause(2000)
       
        let crossButton = await $('/html/body/div[1]/div[4]/main/div[2]/div/div[2]/div/details/details-dialog/button')
        await crossButton.click()
        await browser.pause(2000)
        
        let text = await $('[class="f3-mktg col-5-max mx-auto mt-4 color-fg-muted"]')
        await text.saveScreenshot('issuesText.png')
    });
      
});