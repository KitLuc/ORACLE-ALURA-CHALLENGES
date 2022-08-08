import { toEncrypted, toDecrypt } from './encrypt.js';
import { ClipBoard } from './copy.js';


const TEXT_ENCRYPTED = document.getElementById("text-encrypted").value.toLowerCase();
const TEXT_DECRYPT = document.getElementById("text-decrypt");

const BTN_ENCRYPT = document.getElementById("btn-encrypt");
const BTN_DECRYPT = document.getElementById("btn-decrypt");
const BTN_COPY = document.getElementById("btn-copy").style.display = "none";


BTN_ENCRYPT.onclick = () => 
{
    TEXT_DECRYPT.innerHTML = toEncrypted(TEXT_ENCRYPTED);
}

BTN_DECRYPT.onclick = () =>
{
    TEXT_DECRYPT.innerHTML = toDecrypt(TEXT_DECRYPT);
}