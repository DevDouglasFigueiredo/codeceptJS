const { I, login_PageObject } = inject();

Feature('login');
Scenario('Login Success', ({ I }) => {
    login_PageObject.loginSucess("devdouglasfigueiredo@gmail.com", "masterbuss01");
    login_PageObject.validateMessageSuccess();
});
