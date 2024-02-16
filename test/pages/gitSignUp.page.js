class SignUpPage {

    get text() { return $('[class="text-mono text-gray-light-mktg"]') }

    get inputEmail() { return $('#email') }
    get inputPassword() { return $('#password') }
    get inputUsername() { return $('#login') }
    get inputCheckbox() { return $('#opt_in') }

    get continueEmailBtn() { return $('//*[@id="email-container"]/div[2]/button') }
    get continuePasswordBtn() { return $('//*[@id="password-container"]/div[2]/button') }
    get continueUsernameBtn() { return $('//*[@id="username-container"]/div[2]/button') }
    get continueCheckboxBtn() { return $('//*[@id="opt-in-container"]/div[2]/button') }

    async setEmail(value) {
        await this.inputEmail.addValue(value)
    }

    async setPassword(value) {
        await this.inputPassword.addValue(value)
    }

    async setUsername(value) {
        await this.inputUsername.addValue(value)
    }

    async setCheckbox(value) {
        await this.inputCheckbox.addValue(value)
    }

    async clickOnContinueEmailBtn() {
        await this.continueEmailBtn.click()
    }

    async clickOnContinuePasswordBtn() {
        await this.continuePasswordBtn.click()
    }
    
    async clickOnContinueUsernameBtn() {
        await this.continueUsernameBtn.click()
    }

    async clickOnContinueCheckboxBtn() {
        await this.continueCheckboxBtn.click()
    }
    
}

export default new SignUpPage()