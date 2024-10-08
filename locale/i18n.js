import translations from './translations.js'

function objNavigate(obj, path) {
    let aPath = path.split('.')
    try {
        return aPath.reduce((a, v) => a[v], obj)
    } catch (error) {
        return null
    }
}

function i18n(key, language = "en", data = {}) {
    let translation = objNavigate(translations[language], key)
    if (!translation) {
        console.warn(`Translation for key "${key}" not found in language "${language}"`)
        translation = key
    }
    return translation.replace(/{(\w+)}/g, (_, k) => data[k] ?? `{${k}}`)
    //   /.../    -> regular expression
    //   {(\w+)}  -> match any word character
    //   g        -> global flag
    //   (_, k)   -> ignore the first argument and use the second one
    //   data[k]  -> if the key exists in the data object, use it, otherwise use the key itself
    //   ??       -> nullish coalescing operator
    //   {${k}}   -> replace the matched string with the key itself
}

export {
    i18n
}
