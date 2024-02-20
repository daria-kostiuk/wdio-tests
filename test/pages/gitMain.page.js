class MainPage {

    get signUpBtn() { return $('/html/body/div[1]/div[4]/main/div[1]/div[2]/div/div/div[2]/div[2]/form/div/button') }
    get heading() { return $('[class="h2-mktg mb-5"]') }
    get getTrialBtn() { return $('//a[@class="btn-mktg home-campaign-enterprise btn-muted-mktg" and @href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F"]') }
    get subscribeBtn() { return $('[class="btn-mktg mb-4 btn-muted-mktg"]') }
    get burgerBtn() { return $('[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]') }
    get searchBtn() { return $('[class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"]') }
    get inputSearch() { return $('#query-builder-test') }
    get search() { return $('[class="ActionListItem-descriptionWrap"]') }
    get inputWithSearch() { return $('//span[@class="flex-1" and @data-target="qbsearch-input.inputButtonText"]') }
    get pricingBth() { return $('[class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]') }


    async clickOnSignUpBtn() {
        await this.signUpBtn.click()
    }

    async scrollToHeading() {
        await this.heading.scrollIntoView()
    }

    async clickOnGetTrialBtn() {
        await this.getTrialBtn.click()
    }

    async isDisplayedTrialButton() {
        return await this.getTrialBtn.isDisplayed() 
    }

    async scrollToSubscribeBtn() {
        await this.subscribeBtn.scrollIntoView()
    }

    async isClickableSubscribeBtn() {
        await this.subscribeBtn.isClickable()
    }

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }

    async clickOnBurgerBtn() {
        await this.burgerBtn.click()
    }

    async clickOnSearchBtn() {
        await this.searchBtn.click()
    }

    async setSearch(value) {
        await this.inputSearch.addValue(value)
    }

    async clickOnSearchItem() {
        await this.search.click()
    }

    async clickOnPricingButton() {
        await this.pricingBth.click()
    }
    
}

export default new MainPage()