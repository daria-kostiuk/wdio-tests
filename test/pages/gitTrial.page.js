class TrialPage {

    get heading() { return $('[class="d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]') }
    get recommendedBtn() { return $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a/div') }

    async clickOnRecommendedBtn() {
        await this.recommendedBtn.click()
    }

}

export default new TrialPage()