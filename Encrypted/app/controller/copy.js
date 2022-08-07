
const ClipBoard = () => {
    const TEXT_OUT = document.querySelector("#text-encrypted");
    navigator.clipboard.writeText(TEXT_OUT.value);
    console.log(TEXT_OUT.value);
}

export { ClipBoard };