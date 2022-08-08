import { toEncrypted, toDecrypt } from './encrypt.js';
import { ClipBoard } from './copy.js';


const TEXT_ENCRYPTED = document.getElementById("text-encrypted").value.toLowerCase();
const TEXT_DECRYPT = document.getElementById("text-decrypt");

const BTN_ENCRYPT = document.getElementById("btn-encrypt");
const BTN_DECRYPT = document.getElementById("btn-decrypt");
const BTN_COPY = document.getElementById("btn-copy").style.display = "none";

const removeAccents = (text) => 
{
    const Accents = {
        'à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'a','ç':'a',
        'è':'è','ë':'e','é':'e','ê':'e',
        'ì':'i','í':'i','î':'i','ï':'i',
        'ð':'o','ô':'o','ó':'o','õ':'o','ö':'o','ø':'o',
        'ù':'u','ú':'o','û':'u','ü':'u'
    };
    return text.split('').map(letter => Accents[letter] || letter).join('').toString();
}

BTN_ENCRYPT.onclick = () => 
{
    let TEXT = removeAccents(TEXT_ENCRYPTED);
    TEXT_DECRYPT.innerHTML = toEncrypted(TEXT);
}

BTN_DECRYPT.onclick = () =>
{
    TEXT_DECRYPT.innerHTML = toDecrypt(TEXT_DECRYPT);
}