import { expect } from '@wdio/globals'

describe('Homework 2 (lesson #13)', () => {

    // homework #2

    xit('Check the result of clicking on the \'API\' button', async () => {
        await browser.url('https://webdriver.io/');

        let apiButton = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]')       
        await apiButton.click()
        await browser.pause(4000)
    });

    xit('Scroll to bottom', async () => {
        await browser.url('https://webdriver.io/docs/api');

        const blogButton = await $('.footer__link-item[href="/blog"]')
        await browser.pause(2000)
        await blogButton.scrollIntoView()
        await browser.pause(2000)
    });

    xit('Check that \'Blog\' button is displayed', async () => {
        await browser.url('https://webdriver.io/docs/api');

        const blogButton = await $('.button[href="/blog"]')
        let displayed = await blogButton.isDisplayed()
        console.log('\'Blog\' button displayed: ' + displayed)
    });

    xit('Check that \'Protocol Commands\' link is visiable', async () => {
        await browser.url('https://webdriver.io/docs/api');

        const blogButton = await $('.footer__link-item[href="/blog"]')
        await browser.pause(2000)
        await blogButton.scrollIntoView()
        await browser.pause(2000)

        const protocolCommandsButton = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/nav/a')
        let displayedInViewport = await protocolCommandsButton.isDisplayedInViewport()
        console.log('Is \'Protocol Commands\' link displayed in viewport: ' + displayedInViewport)
    });

    xit('Check that \'Protocol Commands\' link is clickable', async () => {
        await browser.url('https://webdriver.io/docs/api');

        const protocolCommandsButton = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/nav/a')
        let clickable = await protocolCommandsButton.isClickable()
        console.log('Is \'Protocol Commands\' link clickable: ' + clickable)
    });

    xit('Get \'Protocol Commands\' link HTML', async () => {
        await browser.url('https://webdriver.io/docs/api');

        const outerHTML = (await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/nav/a')).getHTML()
        console.log('OuterHTML: ' + outerHTML)

        const innerHTML = (await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/nav/a')).getHTML(false)
        console.log('InnerHTML: ' + innerHTML)
    });

    xit('Сheck whether the \'Protocol Commands\' link appears', async () => {
        await browser.url('https://webdriver.io/docs/api');

        const protocolCommandsButton = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/nav/a')
        await protocolCommandsButton.click()

        await browser.waitUntil (async () => {
            return (await $('//*[@id="webdriver-protocol"]')).isDisplayed();
        }, 5000, 'Heading is not displayed')
    });

});