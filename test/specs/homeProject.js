import MainPage from "./../pages/gitMain.page.js";
import SignUpPage from "../pages/gitSignUp.page.js";
import TrialPage from "../pages/gitTrial.page.js";
import SubscriptionPage from "../pages/gitSubscription.page.js";
import ConfirmationPage from "../pages/gitConfirmation.page.js";
import PricingPage from "../pages/gitPricing.page.js";
import { expect } from '@wdio/globals'
import { BASE_URL, MAX_TIME, MIN_TIME } from "../constants.js";

describe('Home Project', () => {

    it('Test Case #1: Check the registration', async () => {
        await browser.url(BASE_URL);
        
        await MainPage.clickOnSignUpBtn()
        await browser.pause(MAX_TIME)

        await expect(await SignUpPage.text.getText()).toEqual('Welcome to GitHub!\nLet’s begin the adventure')

        await SignUpPage.setEmail('newUserForTest10@gmail.com')
        await browser.pause(MIN_TIME)

        await SignUpPage.clickOnContinueEmailBtn()
        await browser.pause(MIN_TIME)

        await SignUpPage.setPassword('superPassword968523')
        await browser.pause(MIN_TIME)

        await SignUpPage.clickOnContinuePasswordBtn()
        await browser.pause(MIN_TIME)

        await SignUpPage.setUsername('newUser1258')
        await browser.pause(MIN_TIME)

        await SignUpPage.clickOnContinueUsernameBtn()
        await browser.pause(MIN_TIME)

        await SignUpPage.setCheckbox(1)
        await browser.pause(MIN_TIME)

        await SignUpPage.clickOnContinueCheckboxBtn()
        await browser.pause(MIN_TIME)
        
    });


    it('Test Case #2: Check the trial plan', async () => {
        await browser.url(BASE_URL);

        await MainPage.scrollToHeading()
        await browser.pause(MIN_TIME)

        await expect(await MainPage.heading.getText()).toEqual('Over 100 million developers call GitHub home3')

        await expect(await MainPage.isDisplayedTrialButton()).toEqual(true)

        await MainPage.clickOnGetTrialBtn()

        await expect(await TrialPage.heading.getText()).toEqual('Pick your trial plan')

        await TrialPage.clickOnRecommendedBtn()
        
    });


    it('Test Case #3: Check the subscription for newsletter', async () => {
        await browser.url(BASE_URL);

        await MainPage.scrollToSubscribeBtn()
        await browser.pause(MIN_TIME)

        await MainPage.isClickableSubscribeBtn()

        await MainPage.clickOnSubscribeBtn()
        await browser.pause(MIN_TIME)

        await expect(await SubscriptionPage.heading.getText()).toEqual('Subscribe to our developer newsletter')

        await SubscriptionPage.scrollToEmail()
        await browser.pause(MIN_TIME)

        await SubscriptionPage.setEmail('newUserEmail10@gmail.com')
        await browser.pause(MIN_TIME)

        await SubscriptionPage.clickOnCountryBtn()
        await SubscriptionPage.setCountry()

        await SubscriptionPage.clickOnSubscribeBtn()
        await browser.pause(MIN_TIME)

        await expect(await ConfirmationPage.heading.getText()).toEqual('Thanks for subscribing!')
        
    });

    it('Test Case #4: Check the search', async () => {
        await browser.url(BASE_URL);

        await MainPage.clickOnBurgerBtn()
        await browser.pause(MIN_TIME)

        await MainPage.clickOnSearchBtn()
        await browser.pause(MIN_TIME)

        await MainPage.setSearch('resume')
        await browser.pause(MIN_TIME)

        await MainPage.clickOnSearchItem()
        await browser.pause(MIN_TIME)

        await MainPage.clickOnBurgerBtn()
        await browser.pause(MIN_TIME)
        await expect(await MainPage.inputWithSearch.getText()).toEqual('resume')
  
    });

    it('Test Case #5: Check the pricing page', async () => {
        await browser.url(BASE_URL);

        await MainPage.clickOnBurgerBtn()
        await browser.pause(MIN_TIME)

        await MainPage.clickOnPricingButton()
        await browser.pause(MIN_TIME)

        await expect(await PricingPage.heading.getText()).toEqual('Get the complete developer platform.')

        await PricingPage.scrollToCompareFeaturesBtn()
        await browser.pause(MIN_TIME)

        await PricingPage.clickOnCompareFeaturesBtn()
        await browser.pause(MIN_TIME)

        await expect(await PricingPage.featuresHeading.getText()).toEqual('Code management')
  
    });

});