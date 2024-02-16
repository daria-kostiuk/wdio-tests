class PricingPage {

    get heading() { return $('[class="h2-mktg"]') }
    get compareFeaturesBtn() { return $('[class="d-flex flex-column flex-items-center flex-justify-center h5-mktg"]') }
    get featuresHeading() { return $('//*[@id="compare-features"]/div/div[2]/div[1]/div[1]/h3') }
    
    async scrollToCompareFeaturesBtn() {
        await this.compareFeaturesBtn.scrollIntoView()
    }

    async clickOnCompareFeaturesBtn() {
        await this.compareFeaturesBtn.click()
    }

}

export default new PricingPage()