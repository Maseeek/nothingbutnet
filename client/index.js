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


function toggleAngle(enabled) {
    console.log('Angle toggle enabled: ' + enabled);
    if (enabled) {
        if (document.getElementById('angle-toggle') != null) {
            // Add your angle toggle enabling logic here
            document.getElementById('angle-toggle').checked = true;
        }
        sessionStorage.setItem("showAngle", true);
    } else {
        // Add your angle toggle disabling logic here
        if (document.getElementById('angle-toggle') != null) {
            document.getElementById('angle-toggle').checked = false;
        }
        sessionStorage.setItem("showAngle", false);
    }
}




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

    if (document.getElementById('dark-mode-toggle') != null) {
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

    if ($("#angle-toggle") != null) {
        $("#angle-toggle").on("change", function () {
            if (this.checked) {
                console.log("Angle toggle enabled");
                // Add your angle toggle enabling logic here
                toggleAngle(true);
            } else {
                console.log("Angle toggle disabled");
                // Add your angle toggle disabling logic here
                toggleAngle(false);
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
        $(".flexbox div").css("background-color", "#333333");
        $(".flexbox div").css("color", "aliceblue");
        $(".flexbox div p").css("color", "aliceblue");
        $(".dropdown-menu").css("background-color", "#333333");
        $(".dropdown-item").css("color", "aliceblue");
        $(".upload-box").css("background-color", "rgba(0, 0, 0, 0.5)");
        $(".upload-box > div > button").css("color", "aliceblue");
        $(".upload-box > div > button").css("background-color", "black");
        $(".upload-box > div > p").css("color", "aliceblue");
        $(".upload-box > div > p").css("text-shadow", "#333333 2px 2px 2px");
        $(".upload-box div button").on("mouseover", function () {
            $(".upload-box > div > button").css({
                "background-color": "darkred",
                "transition": "background-color 0.2s"
            });
        });
        $(".upload-box div button").on("mouseout", function () {
            $(".upload-box > div > button").css({
                "background-color": "black",
                "transition": "background-color 0.2s"
            });
        });

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
    const showAngle = $("#angle-toggle").is(":checked");
    sessionStorage.setItem("showAngle", showAngle);
    console.log("Angle toggle: " + showAngle + " stored in session storage.");
});

toggleDarkMode(sessionStorage.getItem("darkMode") === "true");
toggleAngle(sessionStorage.getItem("showAngle") === "true");

$(".home-btn").click(toggleDarkModeHome(sessionStorage.getItem("darkMode") === "true"));

// Example usage:
// updateProfile('LeBron James', 'SF', 'Gold');


// CLAUDE


function showHoopSelectionDialog(file) {
    const dialog = $(`
        <div class="hoop-selection-dialog">
            <div class="dialog-content">
                <h3>Set Hoop Coordinates</h3>
                <p>Please enter the coordinates of the hoop:</p>
                <div class="input-group">
                    <label>Left Side of Hoop (X, Y):</label>
                    <input type="number" id="left-x" placeholder="X" value="182">
                    <input type="number" id="left-y" placeholder="Y" value="346">
                </div>
                <div class="input-group">
                    <label>Right Side of Hoop (X, Y):</label>
                    <input type="number" id="right-x" placeholder="X" value="297">
                    <input type="number" id="right-y" placeholder="Y" value="359">
                </div>
                <button id="submit-coords">Analyze Video</button>
                <button id="cancel-analysis">Cancel</button>
            </div>
        </div>
    `);

    $('body').append(dialog);

    // Add styling to the dialog
    const style = $(`
        <style>
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
        </style>
    `);
    $('head').append(style);

    // Handle dialog buttons
    $('#submit-coords').on('click', () => {
        const leftX = parseInt($('#left-x').val()) || 200;
        const leftY = parseInt($('#left-y').val()) || 150;
        const rightX = parseInt($('#right-x').val()) || 300;
        const rightY = parseInt($('#right-y').val()) || 150;

        sendVideoForAnalysis(file, [leftX, leftY], [rightX, rightY]);
        dialog.remove();
        style.remove();
    });

    $('#cancel-analysis').on('click', () => {
        $("#upload-button").text("UPLOAD").css("background-color", "#A63D40");
        dialog.remove();
        style.remove();
    });
}
function sendVideoForAnalysis(file, hoopLeft, hoopRight) {
    const formData = new FormData();
    formData.append('video', file);
    formData.append('hoopLeft', JSON.stringify(hoopLeft));
    formData.append('hoopRight', JSON.stringify(hoopRight));
    formData.append('showAngle', sessionStorage.getItem("showAngle") === "true");

    $.ajax({
        url: 'http://localhost:5000/upload-and-analyze',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => {
            if (data.success) {
                $("#upload-button").text("COMPLETED").css("background-color", "#149D2F");

                // Display the results
                if (sessionStorage.getItem("showAngle") === "false") {
                    displayFGResults(data.data);
                } else {
                    displayAnalysisResults(data.data);
                }
            } else {
                $("#upload-button").text("ERROR").css("background-color", "#FF0000");
                console.error('Analysis failed:', data.error);
                alert('Analysis failed: ' + data.error);
            }
        },
        error: (error) => {
            $("#upload-button").text("ERROR").css("background-color", "#FF0000");
            console.error('Error:', error);
            alert('Error processing video: ' + error.message);
        }
    });
}
function displayFGResults(results) {
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
                text-align: center;
            }
            .stats-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: 20px;
            }
            .stat-box {
                background-color: white;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                margin-bottom: 15px;
                width: calc(50% - 20px);
                text-align: center;
                margin: 10px;
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
                justify-content: center;
                padding: 10px 0;
                margin-bottom: 20px;
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
        <div class="shot-sequence">
            ${results.shots_results.map((shot, index) =>
        `<div class="shot ${shot === 1 ? 'make' : 'miss'}">${index + 1}</div>`
    ).join('')}
        </div>
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
        </div>
    `;

    // Scroll to results
    resultsDiv.scrollIntoView({behavior: 'smooth'});
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
    resultsDiv.scrollIntoView({behavior: 'smooth'});
}

// Update your button event listener to use the new function
document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('upload-button');
    if (uploadButton) {
        console.log("Showing angle: " +( sessionStorage.getItem("showAngle") === "true"));
        uploadButton.addEventListener('click', GetFileAndAnalyze);
    }
});

function getHoopCoords(file) {
    return new Promise((resolve) => {
        let leftX, leftY, rightX, rightY;
        let clickCount = 0;

        // Create a modal overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        // Create modal container with larger size (approx 1.7x)
        const modalContainer = document.createElement('div');
        modalContainer.style.width = '850px'; // Increased from 500px
        modalContainer.style.maxWidth = '92%';
        modalContainer.style.backgroundColor = 'white';
        modalContainer.style.borderRadius = '12px'; // Slightly larger radius
        modalContainer.style.overflow = 'hidden';
        modalContainer.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.3)';
        modalContainer.style.display = 'flex';
        modalContainer.style.flexDirection = 'column';
        modalContainer.style.border = '3px solid #3498db';

        // Create header
        const header = document.createElement('div');
        header.textContent = 'Select Hoop Points';
        header.style.padding = '16px 22px'; // Increased padding
        header.style.backgroundColor = '#3498db';
        header.style.color = 'white';
        header.style.fontWeight = 'bold';
        header.style.fontSize = '20px'; // Larger font
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;'; // × symbol
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '32px'; // Larger
        closeButton.style.cursor = 'pointer';
        closeButton.style.padding = '0 8px';
        closeButton.style.lineHeight = '1';
        closeButton.style.fontWeight = 'bold';
        header.appendChild(closeButton);

        // Create instruction text
        const instructions = document.createElement('div');
        instructions.textContent = 'Click on the left side of the hoop first, then the right side';
        instructions.style.padding = '14px 22px'; // Increased padding
        instructions.style.backgroundColor = '#f5f7fa';
        instructions.style.fontSize = '16px'; // Larger font
        instructions.style.borderBottom = '1px solid #e1e5eb';

        // Create image container with larger height
        const imageContainer = document.createElement('div');
        imageContainer.style.padding = '16px';
        imageContainer.style.height = '475px'; // Increased from 280px (1.7x)
        imageContainer.style.display = 'flex';
        imageContainer.style.justifyContent = 'center';
        imageContainer.style.alignItems = 'center';
        imageContainer.style.overflow = 'hidden';
        imageContainer.style.backgroundColor = '#f0f0f0';
        imageContainer.style.border = '1px dashed #aaa';
        imageContainer.style.margin = '0 16px'; // Slightly larger margins

        // Create status bar
        const statusBar = document.createElement('div');
        statusBar.style.padding = '16px 22px'; // Increased padding
        statusBar.style.borderTop = '1px solid #e1e5eb';
        statusBar.style.fontSize = '16px'; // Larger font
        statusBar.style.display = 'flex';
        statusBar.style.justifyContent = 'space-between';
        statusBar.style.alignItems = 'center';
        statusBar.style.backgroundColor = '#f8f9fa';

        const status = document.createElement('div');
        status.textContent = 'Waiting for points: 0/2 selected';
        statusBar.appendChild(status);

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px'; // Slightly larger gap
        statusBar.appendChild(buttonContainer);

        // Create cancel button with improved styling
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.padding = '8px 18px'; // Larger button
        cancelButton.style.border = '1px solid #ccc';
        cancelButton.style.borderRadius = '5px'; // Slightly larger radius
        cancelButton.style.backgroundColor = '#f5f5f5';
        cancelButton.style.cursor = 'pointer';
        cancelButton.style.fontFamily = 'inherit';
        cancelButton.style.fontSize = '16px'; // Larger font
        buttonContainer.appendChild(cancelButton);

        // Original video and canvas setup
        const vid = document.createElement('video');
        vid.src = URL.createObjectURL(file);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.id = 'coords-img';
        image.style.maxHeight = '445px'; // Increased from 260px (1.7x)
        image.style.maxWidth = '100%';
        image.style.objectFit = 'contain';
        image.style.cursor = 'crosshair';
        image.style.border = '1px solid #ddd';

        // Assemble the modal
        modalContainer.appendChild(header);
        modalContainer.appendChild(instructions);
        imageContainer.appendChild(image);
        modalContainer.appendChild(imageContainer);
        modalContainer.appendChild(statusBar);
        overlay.appendChild(modalContainer);

        // Handle close/cancel
        const closeModal = () => {
            document.body.removeChild(overlay);
            URL.revokeObjectURL(vid.src);
            resolve(null); // Resolve with null to indicate cancellation
        };

        closeButton.addEventListener('click', closeModal);
        cancelButton.addEventListener('click', closeModal);

        vid.addEventListener('loadeddata', () => {
            vid.currentTime = 1;
        });

        vid.addEventListener('seeked', () => {
            canvas.width = vid.videoWidth;
            canvas.height = vid.videoHeight;
            ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
            image.src = canvas.toDataURL();
        });

        image.addEventListener('load', () => {
            document.body.appendChild(overlay);
        });

        image.addEventListener('click', (event) => {
            const rect = image.getBoundingClientRect();
            // Calculate the scaling factor between original image and displayed size
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;

            // Get coordinates relative to the displayed image
            const displayX = event.clientX - rect.left;
            const displayY = event.clientY - rect.top;

            // Convert to coordinates in the original image
            const x = displayX * scaleX;
            const y = displayY * scaleY;

            // Draw point on the canvas
            const pointRadius = Math.max(6, canvas.width / 90); // Slightly larger point
            ctx.fillStyle = clickCount === 0 ? '#2196F3' : '#F44336'; // Blue for left, red for right
            ctx.beginPath();
            ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.lineWidth = 3; // Thicker outline
            ctx.strokeStyle = 'white';
            ctx.stroke();
            image.src = canvas.toDataURL();

            if (clickCount === 0) {
                leftX = x;
                leftY = y;
                clickCount++;
                status.textContent = 'Waiting for points: 1/2 selected';
                instructions.textContent = 'Now click on the right side of the hoop';
            } else {
                rightX = x;
                rightY = y;
                status.textContent = 'Points selected successfully!';

                // Remove cancel button
                buttonContainer.removeChild(cancelButton);

                // Create confirm button with improved styling
                const confirmButton = document.createElement('button');
                confirmButton.textContent = 'Confirm';
                confirmButton.style.padding = '8px 20px'; // Larger button
                confirmButton.style.border = 'none';
                confirmButton.style.borderRadius = '5px'; // Slightly larger radius
                confirmButton.style.backgroundColor = '#4CAF50';
                confirmButton.style.color = 'white';
                confirmButton.style.cursor = 'pointer';
                confirmButton.style.fontFamily = 'inherit';
                confirmButton.style.fontSize = '16px'; // Larger font
                confirmButton.style.fontWeight = '500';
                buttonContainer.appendChild(confirmButton);

                confirmButton.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                    URL.revokeObjectURL(vid.src);
                    resolve({ leftX, leftY, rightX, rightY });
                });
            }
        });

        vid.addEventListener('error', () => {
            console.error('Failed to load video file');
            instructions.textContent = 'Error: Failed to load video file';
            instructions.style.color = 'red';
        });

        vid.load();
    });
}

function handleFileUpload(file) {
    getHoopCoords(file).then(coords => {
        handleCoordinates(coords, file);
    });
}

function handleCoordinates(coords, file) {
    console.log(`Left Coordinates: X: ${coords.leftX}, Y: ${coords.leftY}`);
    console.log(`Right Coordinates: X: ${coords.rightX}, Y: ${coords.rightY}`);
    sendVideoForAnalysis(file, [coords.leftX, coords.leftY], [coords.rightX, coords.rightY]);
}

document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('upload-button');
    if (uploadButton) {
        uploadButton.addEventListener('click', GetFileAndAnalyze);
    }
});

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

            // Get hoop coordinates before sending the video
            handleFileUpload(file);
            // showHoopSelectionDialog(file);
        }
    };

    fileInput.click();
}


