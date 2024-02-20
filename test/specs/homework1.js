import { expect } from '@wdio/globals'
import { MAX_TIME, MIN_TIME } from '../constants';

describe('Homework 1 (lesson #8)', () => {

    // homework #1

    xit('Check the result of clicking on the \'API\' button', async () => {
        await browser.url('https://webdriver.io/');

        let apiButton = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]')       
        await apiButton.click()
        await browser.pause(MAX_TIME)
    });

    xit('Check heading', async () => {
        await browser.url('https://webdriver.io/docs/api');

        let heading = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/header/h1')
        await expect(heading).toHaveText('Introduction')
        await browser.pause(MIN_TIME)
    });
   
    xit('Check that text has link', async () => {
        await browser.url('https://webdriver.io/docs/api');

        let link = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[1]')
        let attr = await link.getAttribute('href')
        await expect(attr).toEqual('/docs/api/webdriver')
        console.log('Attribute: ' + attr)
        await browser.pause(MIN_TIME)
    });
   
    xit('Check \'Search\' button -> search docs -> reset reach', async () => {
        await browser.url('https://webdriver.io/docs/api');

        let searchButton = await $('.navbarSearchContainer_Bca1')
        await searchButton.click()
        await browser.pause(MIN_TIME)

        let input = await $('.DocSearch-Input')
        await input.setValue('It is done!') 
        await expect(input).toHaveValue('It is done!')
        await browser.pause(MIN_TIME)

        let crossButton = await $('.DocSearch-Reset')
        await crossButton.click()
        await browser.pause(MIN_TIME)
    });

});