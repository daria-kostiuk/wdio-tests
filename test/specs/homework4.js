import MainPage from "./../pages/main.page.js";
import SalariesPage from "../pages/salaries.page.js";
import WorkPage from "../pages/work.page.js";
import GameDevPage from "../pages/gamedev.page.js";
import { MIN_TIME } from "../constants.js";
import { expect } from '@wdio/globals'

describe('Homework 4 (lesson #23)', () => {

    xit('Dou checks', async () => {
        await browser.url('https://dou.ua');
        
        await MainPage.clickOnSalariesBtn()
        await browser.pause(MIN_TIME)

        await expect(await SalariesPage.firstLabel.getText()).toEqual('I КВАРТИЛЬ')

        await MainPage.clickOnWorkBtn()
        await browser.pause(MIN_TIME)
      
        await expect(await WorkPage.isDisplayedFindButton()).toEqual(true)

        await WorkPage.clickOnFindButton()
        await browser.pause(MIN_TIME)

        await expect(await WorkPage.title.getText()).toEqual('Досвід')

        await MainPage.clickOnGameDevBtn()
        await browser.pause(MIN_TIME)

        await expect(await GameDevPage.titleFirst.getText()).toEqual('Новини')
        await expect(await GameDevPage.titleSecond.getText()).toEqual('Блоги')
        await expect(await GameDevPage.titleThird.getText()).toEqual('Популярне на форумі')
        
    });

});