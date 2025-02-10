console.log('Happy developing ✨')

function GetFile(callbackFunction){
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';
    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.includes('video')) {
            console.log('File selected:', file.name);
            callbackFunction();
            return file;
            // Add your file handling logic here
        }
    };
    fileInput.click();
}

function ChangeUploadedStatus(){
    document.getElementById("upload-button").innerHTML = "UPLOADED";
    document.getElementById("upload-button").style.backgroundColor = "#689689";
}