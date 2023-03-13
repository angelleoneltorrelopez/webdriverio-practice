const allureReporter = require('@wdio/allure-reporter').default

describe('User register', ()=> {
    it('Successful registration', async () => {
        allureReporter.addFeature('User register')
        allureReporter.addDescription('This functionality allows users to register on the platform.')
        
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        await expect($('.title')).toBeExisting()
        await expect($('.title')).toHaveTextContaining('Products')
    })
})