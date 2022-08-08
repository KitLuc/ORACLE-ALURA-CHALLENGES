import { toEncrypted, toDecrypt } from './encrypt.js';
import { ClipBoard } from './copy.js';


const TEXT_ENCRYPTED = document.getElementById("text-encrypted");
const TEXT_DECRYPT = document.getElementById("text-decrypt");

const BTN_ENCRYPT = document.getElementById("btn-encrypt");
const BTN_DECRYPT = document.getElementById("btn-decrypt");
const BTN_COPY = document.getElementById("btn-copy");

function deletAccents(TEXT) {
    return TEXT
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
        .normalize();
}

BTN_ENCRYPT.onclick = () => 
{
    TEXT_DECRYPT.innerHTML = toEncrypted(deletAccents(TEXT_ENCRYPTED.value.toLowerCase()));
    BTN_COPY.style.display = "block";
}

BTN_DECRYPT.onclick = () =>
{
    TEXT_DECRYPT.innerHTML = toDecrypt(TEXT_DECRYPT.value);
}

BTN_COPY.onclick = () =>
{
    ClipBoard(TEXT_DECRYPT);
}

