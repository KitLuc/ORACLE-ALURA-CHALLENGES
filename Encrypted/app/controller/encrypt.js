const encoder = 
{
    'e':'enter',
    'i':'imes',
    'a':'ai',
    'o':'ober',
    'u':'ufat'
};

const decoder = 
{
    'ai':'a',
    'enter':'e',
    'imes':'i',
    'ober':'o',
    'ufat':'u'
};

const toEncrypted = (text) =>
{
    console.log(text);
    for (const key in encoder) {
        text = text.replaceAll(key, encoder[key]);
    }
    return text;
}


const toDecrypt = (text) => 
{
    for (const key in decoder) {
        text = text.replaceAll(key, decoder[key]);
    };
    console.log(text);
    return text;
}

export { toEncrypted, toDecrypt };

