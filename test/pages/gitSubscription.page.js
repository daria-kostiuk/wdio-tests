class SubscriptionPage {

    get heading() { return $('[class="Primer_Brand__Heading-module__Heading___IVpmp Primer_Brand__Heading-module__Heading-font--mona-sans___SCnTx Primer_Brand__Heading-module__Heading--1___Ufc7G Primer_Brand__Hero-module__Hero-heading___QuVBH"]') }
    get inputEmail() { return $('[class="Primer_Brand__TextInput-module__TextInput___EtKj3 TextInput Primer_Brand__TextInput-module__TextInput--medium___kJrew Primer_Brand__TextInput-module__TextInput--fullWidth___rbllM"]') }
    get countryBtn() { return $('[class="Primer_Brand__Select-module__Select___Jqn1f Primer_Brand__Select-module__Select--medium___kckBr Select"]') }
    get inputCountry() { return $('//*[@id="country"]/option[6]') }
    get subscribeBtn() { return $('[class="Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4"]') }
    
    async scrollToEmail() {
        await this.inputEmail.scrollIntoView()
    }

    async setEmail(value) {
        await this.inputEmail.setValue(value)
    }

    async clickOnCountryBtn() {
        (await this.countryBtn).click()
    }
    async setCountry() {
        (await this.inputCountry).click()
    }

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }
    
}

export default new SubscriptionPage()