class GameDevPage {

    get companyGameDevsRateLink() { return $('//*[text()="Рейтинг найбільших геймдев-компаній"]') }
    get topGameRateLink() { return $('//*[text()="Топ ігор місяця"]')}

    async clickOnTopGamesRateLink() {
        await this.topGameRateLink.click()
    }

    get titleFirst() { return $('/html/body/div/div[2]/div[1]/div[2]/div[1]/div[1]/h3/a') }
    get titleSecond() { return $('/html/body/div/div[2]/div[1]/div[2]/div[2]/div/h3/a') }
    get titleThird() { return $('/html/body/div/div[2]/div[1]/div[4]/div[1]/div/h3/a') }

}

export default new GameDevPage()