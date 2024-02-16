class MainPage {
    get forumBtn() { return $('a[href="https://dou.ua/forums/"]') }
    get bandBtn() { return $('a[href="https://dou.ua/lenta/"]') }
    get salariesBtn() { return $('/html/body/div/header/ul/li[5]/a') }
    get workBtn() { return $('//*[@id="container"]/div[1]/header/ul/li[6]/a') }
    get searchInput() { return $('#txtGlobalSearch') }
    get gameDevBtn() { return $('.menu-site__gamedev') }
    get relocateBtn() { return $('.menu-site__relocate') }

    async clickOnForumBtn() {
        await this.forumBtn.click()
    }

    async clickOnBandBtn() {
        await this.bandBtn.click()
    }

    async clickOnGameDevBtn() {
        await this.gameDevBtn.click()
    }

    async clickOnSalariesBtn() {
        await this.salariesBtn.click()
    }

    async clickOnWorkBtn() {
        await this.workBtn.click()
    }

    async setSearchInput(value) {
        await this.searchInput.addValue(value)
    }
}

export default new MainPage()



// class LoginPage {
//     get username() { return $('#username') }
//     get password() { return $('#password') }
//     get loginButton() { return $('.radius') }

//     async setUsernameInput(value) {
//         await this.username.addValue(value)
//     }

//     async setPasswordInput(value) {
//         await this.password.addValue(value)
//     }

//     async clickOnLoginBtn() {
//         (await this.loginButton).click()
//     }
// }

// export default new LoginPage()