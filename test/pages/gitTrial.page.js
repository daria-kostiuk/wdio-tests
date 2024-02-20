class TrialPage {

    get heading() { return $('[class="d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]') }
    get recommendedBtn() { return $('[class = "rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]') }

    async clickOnRecommendedBtn() {
        await this.recommendedBtn.click()
    }

}

export default new TrialPage()