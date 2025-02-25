function GetFile(callbackFunction) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';
    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.includes('video')) {
            console.log('File selected:', file.name);
            callbackFunction(file);
            return file;
            // Add your file handling logic here
        }
    };
    fileInput.click();
}

function ChangeUploadedStatus(file) {
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
document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
        saveButton.addEventListener('click', function () {
            // Here you would typically save the settings to your backend
            alert('Settings saved successfully!');
        });
    }

    // Add event listeners for switches
    const switches = document.querySelectorAll('.switch input');
    if (switches) {
        switches.forEach(switchElement => {
            switchElement.addEventListener('change', function () {
                console.log(this.checked ? 'Enabled' : 'Disabled');
            });
        });
    }

    // Add event listeners for selects
    const selects = document.querySelectorAll('.settings-select');
    if (selects) {
        selects.forEach(select => {
            select.addEventListener('change', function () {
                console.log('Selected:', this.value);
            });
        });
    }

    if(document.getElementById('dark-mode-toggle') != null) {
        document.getElementById('dark-mode-toggle').addEventListener('change', function () {
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
    }
});


function toggleDarkMode(enabled) {
    console.log('Dark mode enabled: ' + enabled);
    if (enabled) {
        // $(".settings-section").forEach(section => {section.style.backgroundColor = "#333333"}); // this doesn't work as it is a select all thing
        if ($("#dark-mode-toggle") != null) {
            $("#dark-mode-toggle").prop("checked", true);
        }
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

function toggleDarkModeHome(enabled) {
    console.log('Dark mode enabled: ' + enabled);
    if (enabled) {
        $(".home-btn").css("background-color", "#333333");
        $(".profile-btn").css("background-color", "#333333");
        console.log($(".flexbox div")); // Add this line to check if elements are selected
        $(".flexbox div").css("background-color", "#333333");
    } else {
        $(".home-btn").css("background-color", "#f9f9f9");
        $(".profile-btn").css("background-color", "#f9f9f9");
    }
}

function updateProfile(name, position, rank) {
    document.getElementById('player-name').textContent = name;
    document.getElementById('player-position').textContent = position;
    document.getElementById('player-rank').textContent = rank;
}


$(".save-button").click(function () {
    const darkMode = $("#dark-mode-toggle").is(":checked");
    sessionStorage.setItem("darkMode", darkMode);
});

toggleDarkMode(sessionStorage.getItem("darkMode") === "true");

$(".home-btn").click(function () {
    toggleDarkModeHome(sessionStorage.getItem("darkMode") === "true");
});
// Example usage:
// updateProfile('LeBron James', 'SF', 'Gold');




// CLAUDE

// Modified version of your GetFile function to send the file to Python
function GetFileAndAnalyze() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';

    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.includes('video')) {
            console.log('File selected:', file.name);

            // Change upload button status
            document.getElementById("upload-button").innerHTML = "PROCESSING...";
            document.getElementById("upload-button").style.backgroundColor = "#FFA500";

            // We need to get hoop coordinates before sending the video
            // For demonstration, we'll use a modal dialog to get them
            showHoopSelectionDialog(file);
        }
    };

    fileInput.click();
}

function showHoopSelectionDialog(file) {
    const dialog = document.createElement('div');
    dialog.className = 'hoop-selection-dialog';
    dialog.innerHTML = `
        <div class="dialog-content">
            <h3>Set Hoop Coordinates</h3>
            <p>Please enter the coordinates of the hoop:</p>
            <div class="input-group">
                <label>Left Side of Hoop (X, Y):</label>
                <input type="number" id="left-x" placeholder="X" value="200">
                <input type="number" id="left-y" placeholder="Y" value="150">
            </div>
            <div class="input-group">
                <label>Right Side of Hoop (X, Y):</label>
                <input type="number" id="right-x" placeholder="X" value="300">
                <input type="number" id="right-y" placeholder="Y" value="150">
            </div>
            <button id="submit-coords">Analyze Video</button>
            <button id="cancel-analysis">Cancel</button>
        </div>
    `;

    document.body.appendChild(dialog);

    // Add styling to the dialog
    const style = document.createElement('style');
    style.textContent = `
        .hoop-selection-dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .dialog-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
        }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            margin-bottom: 5px;
        }
        .input-group input {
            width: 60px;
            margin-right: 10px;
            padding: 5px;
        }
        button {
            padding: 8px 15px;
            margin-right: 10px;
            cursor: pointer;
        }
        #submit-coords {
            background-color: #4CAF50;
            color: white;
            border: none;
        }
        #cancel-analysis {
            background-color: #f44336;
            color: white;
            border: none;
        }
    `;
    document.head.appendChild(style);

    // Handle dialog buttons
    document.getElementById('submit-coords').addEventListener('click', () => {
        const leftX = parseInt(document.getElementById('left-x').value) || 200;
        const leftY = parseInt(document.getElementById('left-y').value) || 150;
        const rightX = parseInt(document.getElementById('right-x').value) || 300;
        const rightY = parseInt(document.getElementById('right-y').value) || 150;

        sendVideoForAnalysis(file, [leftX, leftY], [rightX, rightY]);
        dialog.remove();
        style.remove();
    });

    document.getElementById('cancel-analysis').addEventListener('click', () => {
        document.getElementById("upload-button").innerHTML = "UPLOAD";
        document.getElementById("upload-button").style.backgroundColor = "#A63D40";
        dialog.remove();
        style.remove();
    });
}

function sendVideoForAnalysis(file, hoopLeft, hoopRight) {
    const formData = new FormData();
    formData.append('video', file);
    formData.append('hoopLeft', JSON.stringify(hoopLeft));
    formData.append('hoopRight', JSON.stringify(hoopRight));

    fetch('http://localhost:5000/upload-and-analyze', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("upload-button").innerHTML = "COMPLETED";
                document.getElementById("upload-button").style.backgroundColor = "#149D2F";

                // Display the results
                displayAnalysisResults(data.data);
            } else {
                document.getElementById("upload-button").innerHTML = "ERROR";
                document.getElementById("upload-button").style.backgroundColor = "#FF0000";
                console.error('Analysis failed:', data.error);
                alert('Analysis failed: ' + data.error);
            }
        })
        .catch(error => {
            document.getElementById("upload-button").innerHTML = "ERROR";
            document.getElementById("upload-button").style.backgroundColor = "#FF0000";
            console.error('Error:', error);
            alert('Error processing video: ' + error.message);
        });
}

function displayAnalysisResults(results) {
    // Create a results container if it doesn't exist
    let resultsDiv = document.getElementById('analysis-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'analysis-results';
        resultsDiv.className = 'analysis-results';
        document.body.appendChild(resultsDiv);

        // Add styling for the results
        const style = document.createElement('style');
        style.textContent = `
            .analysis-results {
                margin-top: 20px;
                padding: 20px;
                background-color: #f5f5f5;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
            }
            .stats-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            .stat-box {
                background-color: white;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                margin-bottom: 15px;
                width: calc(33% - 10px);
                text-align: center;
            }
            .stat-box h3 {
                margin-top: 0;
                color: #333;
            }
            .stat-box .value {
                font-size: 24px;
                font-weight: bold;
                color: #A63D40;
            }
            .shot-sequence {
                display: flex;
                overflow-x: auto;
                padding: 10px 0;
            }
            .shot {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
            }
            .make {
                background-color: #4CAF50;
            }
            .miss {
                background-color: #f44336;
            }
            h2 {
                color: #A63D40;
            }
        `;
        document.head.appendChild(style);
    }

    // Fill the results container with the analysis data
    resultsDiv.innerHTML = `
        <h2>Shot Analysis Results</h2>
        <div class="stats-container">
            <div class="stat-box">
                <h3>Field Goal %</h3>
                <div class="value">${results.fg_percentage}%</div>
                <div>${results.makes}/${results.total_shots}</div>
            </div>
            <div class="stat-box">
                <h3>Longest Streak</h3>
                <div class="value">${results.longest_streak}</div>
                <div>consecutive makes</div>
            </div>
            <div class="stat-box">
                <h3>Average Angle</h3>
                <div class="value">${results.average_angle}°</div>
                <div>release angle</div>
            </div>
        </div>
        
        <div class="stats-container">
            <div class="stat-box">
                <h3>Make Angle</h3>
                <div class="value">${results.average_make_angle}°</div>
                <div>for made shots</div>
            </div>
            <div class="stat-box">
                <h3>Miss Angle</h3>
                <div class="value">${results.average_miss_angle}°</div>
                <div>for missed shots</div>
            </div>
            <div class="stat-box">
                <h3>Total Shots</h3>
                <div class="value">${results.total_shots}</div>
                <div>analyzed</div>
            </div>
        </div>
        
        <h3>Shot Sequence</h3>
        <div class="shot-sequence">
            ${results.shots_results.map((shot, index) =>
        `<div class="shot ${shot === 1 ? 'make' : 'miss'}">${index + 1}</div>`
    ).join('')}
        </div>
    `;

    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Update your button event listener to use the new function
document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('upload-button');
    if (uploadButton) {
        uploadButton.addEventListener('click', GetFileAndAnalyze);
    }
});

