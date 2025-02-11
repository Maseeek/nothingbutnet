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
const profileButton = document.getElementById('profile-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown when clicking the profile button
profileButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !profileButton.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

// Prevent dropdown from closing when clicking inside it
dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});