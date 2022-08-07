
const special_caracters = /[~$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
let text_encrypted = "";
let text_decrypt = "";

const toEncrypted = (text) =>
{
    text.length > 0 ? text_encrypted = text.replace("ai", "a")
                                            .replace("enter", "e")
                                            .replace("imes", "i")
                                            .replace("ober", "o")
                                            .replace("ufat", "u"):console.log("Error: No text to encrypt");

    return text_encrypted;
}

const Decrypt = (text) => {
    if(text === ""){
        console.log("Error: No text to decrypt");
    }else{
        text_decrypt = text.replace("ai", "a")
                             .replace("enter", "e")
                             .replace("imes", "i")
                             .replace("ober", "o")
                             .replace("ufat", "u");
        console.log(text_decrypt);
    }
}

export { toEncrypted, Decrypt };

