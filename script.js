let modalbtn = document.getElementById('modal')
let searchBox = document.getElementById('search-box')
let btnCreateClose = document.getElementById('btn-create-close')
let btnSignInClose = document.getElementById('btn-signIn-close')
let modalSignIn = document.getElementById('modalSignIn')
function modal(){
    modalbtn.click();
}
function search(){
    searchBox.style.display = 'inline'
}
function signIn() {
    btnCreateClose.click()
    modalSignIn.click()
}
function createAccount() {
    btnSignInClose.click()
    modalbtn.click();
}