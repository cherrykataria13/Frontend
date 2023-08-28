// References to HTML elements
const chooseFileButton = document.getElementById('chooseFileButton');
const fileInput = document.getElementById('fileInput');
const selectedFileName = document.getElementById('selectedFileName');
const uploadButtonContainer = document.getElementById('uploadButtonContainer');
const fileInfoContainer = document.getElementById('fileInfoContainer');
const infoContainer = document.getElementById('infoContainer');
const originalName = document.getElementById('originalName');
const fileSize = document.getElementById('fileSize');
const mimeType = document.getElementById('mimeType');

// Adding event listener to "Choose File" button
chooseFileButton.addEventListener('click', () => {

  fileInput.click();
});

// Listening changes in selected file
fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    // Display selected file name
    selectedFileName.textContent = fileInput.files[0].name;
    // Diplay file in container
    fileInfoContainer.style.display = 'block';
    // Display upload button in container
    uploadButtonContainer.style.display = 'block';
  }
});

// Listening form upload event
document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Creating a formDAta
  const formData = new FormData(document.getElementById('uploadForm'));

  // Sending POST request to server to upload file
  const response = await fetch('https://rfc-production.up.railway.app/upload', {
    method: 'POST',
    body: formData
  });

  // Diplay information of the selected file
  const data = await response.json();

  originalName.textContent = data.fileInfo.originalName;
  fileSize.textContent = data.fileInfo.size;
  mimeType.textContent = data.fileInfo.mimeType;
  infoContainer.style.display = 'block';
});