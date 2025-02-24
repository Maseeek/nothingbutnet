console.log('Happy developing ✨');

function GetFile(callbackFunction) {
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

function ChangeUploadedStatus() {
    document.getElementById("upload-button").innerHTML = "UPLOADED";
    document.getElementById("upload-button").style.backgroundColor = "#149D2F";
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

// Settings page functionality
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Here you would typically save the settings to your backend
            alert('Settings saved successfully!');
        });
    }

    // Add event listeners for switches
    const switches = document.querySelectorAll('.switch input');
    if (switches) {
        switches.forEach(switchElement => {
            switchElement.addEventListener('change', function() {
                console.log(this.checked ? 'Enabled' : 'Disabled');
            });
        });
    }

    // Add event listeners for selects
    const selects = document.querySelectorAll('.settings-select');
    if (selects) {
        selects.forEach(select => {
            select.addEventListener('change', function() {
                console.log('Selected:', this.value);
            });
        });
    }

    document.getElementById('dark-mode-toggle').addEventListener('change', function() {
        if (this.checked) {
            console.log('Dark mode enabled');
            toggleDarkMode(true);
            // Add your dark mode enabling logic here
        } else {
            console.log('Dark mode disabled');
            toggleDarkMode(false);
            // Add your dark mode disabling logic here
        }
    });
});


function toggleDarkMode(enabled){
    if(enabled){
        // $(".settings-section").forEach(section => {section.style.backgroundColor = "#333333"}); // this doesn't work as it is a select all thing

        document.querySelectorAll('.settings-section').forEach(section => {
            section.style.backgroundColor = '#333333';
        });
        document.querySelectorAll('.setting-label').forEach(section => {
            section.style.color = '#f9f9f9';
        });
        document.querySelectorAll('.settings-section h2').forEach(header => {
            header.style.color = '#EB5258';
        });
        document.querySelectorAll('.settings-section h1').forEach(header => {
            header.style.textShadow = '0 1px 1px red';
        });
        document.querySelectorAll('.settings-select').forEach(header => {
            header.style.backgroundColor = '#333333';
        });
        document.querySelectorAll('.settings-select').forEach(header => {
            header.style.color = '#f9f9f9';
        });
        // document.querySelector('.home-btn').style.backgroundColor = '#333333';
        // document.querySelector('.profile-btn').style.backgroundColor = '#333333';
        $(".home-btn").css("background-color", "#333333");
        $(".profile-btn").css("background-color", "#333333");


        } else {
        document.querySelectorAll('.settings-section').forEach(section => {
            section.style.backgroundColor = '#f9f9f9';
        });
        document.querySelectorAll('.setting-label').forEach(section => {
            section.style.color = '#333333';
        });
        document.querySelectorAll('.settings-section h2').forEach(header => {
            header.style.color = '#A63D40';
        });
        document.querySelectorAll('.settings-select').forEach(header => {
            header.style.backgroundColor = '#f9f9f9';
        });
        document.querySelectorAll('.settings-select').forEach(header => {
            header.style.color = '#333333';
        });
        $('.home-btn').css('background-color', '#f9f9f9');
        // document.querySelector('.home-btn').style.backgroundColor = '#f9f9f9';
        // document.querySelector('.profile-btn').style.backgroundColor = '#f9f9f9';
        $(".profile-btn").css("background-color", "#f9f9f9");
    }
}

function updateProfile(name, position, rank) {
    document.getElementById('player-name').textContent = name;
    document.getElementById('player-position').textContent = position;
    document.getElementById('player-rank').textContent = rank;
}


// Example usage:
updateProfile('LeBron James', 'SF', 'Gold');

