import MainPage from "./../pages/main.page.js";
import GameDevPage from "../pages/gamedev.page.js";
import { expect } from '@wdio/globals'
//import LoginPage from "./../pages/main.page.js";

describe('Webdriverio main page', () => {

    xit('Dou checks', async () => {
        await browser.url('https://dou.ua');
        
        await MainPage.clickOnBandBtn()
        await browser.pause(2000)

        await MainPage.clickOnForumBtn()
        await browser.pause(2000)

        await MainPage.clickOnGameDevBtn()
        await browser.pause(2000)

        await GameDevPage.clickOnTopGamesRateLink()
        
    });

    
    xit('Login', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        
        await LoginPage.setUsernameInput('tomsmith')
        await browser.pause(2000)

        await LoginPage.setPasswordInput('SuperSecretPassword!')
        await browser.pause(2000)

        await LoginPage.clickOnLoginBtn()

        await expect(LoginPage.username).toHaveValue('SuperSecretPassword!')
    });


    // getTitle()
    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')       
    });

    // addValue()
    xit('should show addValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $('#username')
        await input.addValue('hello') 
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue('hello123')
    });

    // setValue()
    xit('should show setValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $('#username')
        await input.setValue('world') 
        await input.setValue('hello') 
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue('hello')
    });

    // click()
    xit('should show click command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $('#username')
        await inputUsername.addValue('tomsmith') 
        await browser.pause(2000)

        let inputPassword = await $('#password')
        await inputPassword.addValue('SuperSecretPassword!') 
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)
    });

    // getAttribute()
    xit('should show getAttribute command', async () => {
        await browser.url('https://dou.ua/search');

        let inputSearch = await $('#gsc-i-id1')
        let attr = await inputSearch.getAttribute('aria-label')
        console.log('Placeholder attribute is: ' + attr)

        await inputSearch.setValue('Cat')
        attr = await inputSearch.getValue()

        await browser.pause(4000)
        console.log('Value attribute is: ' + attr)
    });

    // getLocation()
    xit('should show getLocation command', async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()
        console.log('Location is: ' + location.x)

        let xLocation = await inputSearch.getLocation('x')
        console.log('Placeholder by x is: ' + xLocation)
    });

    // getText()
    xit('should show getText command', async () => {
        await browser.url('https://webdriver.io');

        let subtitle = await $('.hero__subtitle')
        console.log('Subtitle text is: ' + await subtitle.getText())
    });

    // isClickable()
    xit('should show if an element is clickable', async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log('Is clickable: ' + clickable)
    });

    // isDisplayed()
    xit('should show if an element is displayed', async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log('Is displayed: ' + displayed)
    });

    // isDisplayedInViewport()
    xit('should show if an element is visiable', async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayedInViewport()
        console.log('Is blog button displayed in viewport: ' + displayedInViewport)

        const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
        let footerIsDisplayedInViewport = await footer.isDisplayedInViewport()
        console.log('Is footer displayed in viewport: ' + footerIsDisplayedInViewport)
    });

    // isEnabled()
    xit('should show if an element is enabled', async () => {
        await browser.url('https://webdriver.io');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log('Is get started button enabled: ' + isEnabled)
    });

    // isFocused()
    xit('should show if an element is focused', async () => {
        await browser.url('https://webdriver.io');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getStartedButton.isFocused()
        console.log('Is get started button focused before click: ' + isFocused)
        await browser.pause(2000)
        await getStartedButton.click()
        console.log('Is get started button focused after click: ' + isFocused)
        await browser.pause(2000)
    });

    // scrollIntoView()
    xit('should show movement to element action', async () => {
        await browser.url('https://webdriver.io');

        const getStratedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStratedLink.scrollIntoView()
        await browser.pause(2000)
    });

    // saveScreenshot()
    xit('should show save screenshot command', async () => {
        await browser.url('https://webdriver.io');

        const getStratedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStratedLink.scrollIntoView()
        await browser.pause(2000)
        await getStratedLink.saveScreenshot('linkScreenshot.png')
    });

    // newWindow(), switchWindow();
    xit('should switch to another window', async () => {
        await browser.url('https://webdriver.io');

        await browser.newWindow('https://google.com');
        await browser.pause(2000)

        await browser.switchWindow('https://webdriver.io');
        await browser.pause(2000)
    });

    // waitUntil()
    xit('should switch waitUntil command', async () => {
        await browser.url('https://webdriver.io');

        await browser.waitUntil (async () => {
            return (await $('.button[href="/docs/gettingstarted"]')).isDisplayed();
        }, 5000, 'Button is not displayed')
    });

    // getHTML()
    xit('should get html ', async () => {
        await browser.url('https://webdriver.io');

        const outerHTML = (await $('.dropdown__menu')).getHTML()
        console.log('outerHTML: ' + outerHTML)

        const innerHTML = (await $('.dropdown__menu')).getHTML(false)
        console.log('innerHTML: ' + innerHTML)
    });

});