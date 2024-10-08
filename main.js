import { i18n } from './locale/i18n.js'

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// TESTS
// console.log(i18n('hello', "ru", { name: 'John' }))  // Hello, John!
// console.log(i18n('lang_name', "ru"))  

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// TRANSLATIONS
const allNeededTranslations = document.querySelectorAll("[data-i18n]");
const language = 'en'

allNeededTranslations.forEach(element => {
    const key = element.getAttribute("data-i18n")
    const translation = i18n(key, language)
    
    switch (element.tagName) {
        case "INPUT":
            element.placeholder = translation
            break;
        case "TEXTAREA":
            element.placeholder = translation
            break;
        default:
            element.textContent = translation
            break;
    }
})
// ---------------------------------------------------------------
// ---------------------------------------------------------------











export { i18n }