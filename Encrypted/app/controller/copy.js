
const ClipBoard = (content) => 
{
    content.select();
    document.execCommand("copy");
}

export { ClipBoard };

