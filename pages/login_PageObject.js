const { I } = inject();
let assert = require('assert');

module.exports = {

  fields: {
    inputEmail: "#user",
    inputPassword: "#password"
  },
  buttons: {
    buttonForLogin: '#top_header a[href*="/login"]',
    loginButton: "#btnLogin",
    btnConfirm:'.swal2-confirm'
  },

  loginSucess(email, password) {
    I.amOnPage("/");
    I.click(this.buttons.buttonForLogin);
    I.fillField(this.fields.inputEmail, email);
    I.fillField(this.fields.inputPassword, password);
    I.click(this.buttons.loginButton);
    I.wait(5);

    const locatorBtnConfirm = locate(this.buttons.btnConfirm);
    within(locatorBtnConfirm.at(1), () => {
      I.click(locatorBtnConfirm);
    })
  },

  async validateMessageSuccess (){

    let messageLoginSuccess = await I.grabTextFrom("#swal2-title");
    assert.equal(messageLoginSuccess, "Login realizado");
  }
}
