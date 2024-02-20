class WorkPage {

    get findButton() { return $('[class="btn-search"]') }
    get title() { return $('//*[@id="container"]/div[2]/div/div[2]/div[1]/div/div[2]/div[3]/div/div/h3[1]') }

    async isDisplayedFindButton() {
        return await this.findButton.isDisplayedInViewport() 
    }

    async clickOnFindButton() {
        await this.findButton.click()
    }

}

export default new WorkPage()