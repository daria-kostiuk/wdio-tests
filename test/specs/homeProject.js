import MainPage from "./../pages/gitMain.page.js";
import SignUpPage from "../pages/gitSignUp.page.js";
import TrialPage from "../pages/gitTrial.page.js";
import SubscriptionPage from "../pages/gitSubscription.page.js";
import ConfirmationPage from "../pages/gitConfirmation.page.js";
import PricingPage from "../pages/gitPricing.page.js";
import { expect } from '@wdio/globals'

describe('Home Project', () => {

    xit('Test Case #1', async () => {
        await browser.url('https://github.com/');
        
        await MainPage.clickOnSignUpBtn()
        await browser.pause(4000)

        await expect(await SignUpPage.text.getText()).toEqual('Welcome to GitHub!\nLet’s begin the adventure')

        await SignUpPage.setEmail('newUserForTest1@gmail.com')
        await browser.pause(2000)

        await SignUpPage.clickOnContinueEmailBtn()
        await browser.pause(2000)

        await SignUpPage.setPassword('superPassword968523')
        await browser.pause(2000)

        await SignUpPage.clickOnContinuePasswordBtn()
        await browser.pause(2000)

        await SignUpPage.setUsername('newUser1258')
        await browser.pause(2000)

        await SignUpPage.clickOnContinueUsernameBtn()
        await browser.pause(2000)

        await SignUpPage.setCheckbox(1)
        await browser.pause(2000)

        await SignUpPage.clickOnContinueCheckboxBtn()
        await browser.pause(2000)
        
    });


    xit('Test Case #2', async () => {
        await browser.url('https://github.com/');

        await MainPage.scrollToHeading()
        await browser.pause(2000)

        await expect(await MainPage.heading.getText()).toEqual('Over 100 million developers call GitHub home3')

        await expect(await MainPage.isDisplayedTrialButton()).toEqual(true)

        await MainPage.clickOnGetTrialBtn()

        await expect(await TrialPage.heading.getText()).toEqual('Pick your trial plan')

        await TrialPage.clickOnRecommendedBtn()
        
    });


    xit('Test Case #3', async () => {
        await browser.url('https://github.com/');

        await MainPage.scrollToSubscribeBtn()
        await browser.pause(2000)

        await MainPage.isClickableSubscribeBtn()

        await MainPage.clickOnSubscribeBtn()
        await browser.pause(2000)

        await expect(await SubscriptionPage.heading.getText()).toEqual('Subscribe to our developer newsletter')

        await SubscriptionPage.scrollToEmail()
        await browser.pause(2000)

        await SubscriptionPage.setEmail('newUserEmail1@gmail.com')
        await browser.pause(2000)

        await SubscriptionPage.clickOnCountryBtn()
        await SubscriptionPage.setCountry()

        await SubscriptionPage.clickOnSubscribeBtn()
        await browser.pause(2000)

        await expect(await ConfirmationPage.heading.getText()).toEqual('Thanks for subscribing!')
        
    });

    xit('Test Case #4', async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnBurgerBtn()
        await browser.pause(2000)

        await MainPage.clickOnSearchBtn()
        await browser.pause(2000)

        await MainPage.setSearch('resume')
        await browser.pause(2000)

        await MainPage.clickOnSearchItem()
        await browser.pause(2000)

        await MainPage.clickOnBurgerBtn()
        await browser.pause(2000)
        await expect(await MainPage.inputWithSearch.getText()).toEqual('resume')
  
    });

    xit('Test Case #5', async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnBurgerBtn()
        await browser.pause(2000)

        await MainPage.clickOnPricingButton()
        await browser.pause(2000)

        await expect(await PricingPage.heading.getText()).toEqual('Get the complete developer platform.')

        await PricingPage.scrollToCompareFeaturesBtn()
        await browser.pause(2000)

        await PricingPage.clickOnCompareFeaturesBtn()
        await browser.pause(2000)

        await expect(await PricingPage.featuresHeading.getText()).toEqual('Code management')
  
    });

});