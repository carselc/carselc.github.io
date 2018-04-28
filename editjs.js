document.getElementById("export").onclick = function saveTextAsFile() {

    var textToSave = document.getElementById("/action_page.php");

    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "output.txt";
    var downloadLink = document.createElement("a");

    downloadLink.download = fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();

}