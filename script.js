const chooseFileButton = document.getElementById('chooseFileButton');
const fileInput = document.getElementById('fileInput');
const selectedFileName = document.getElementById('selectedFileName');
const uploadButtonContainer = document.getElementById('uploadButtonContainer');
const fileInfoContainer = document.getElementById('fileInfoContainer');
const infoContainer = document.getElementById('infoContainer');
const originalName = document.getElementById('originalName');
const fileSize = document.getElementById('fileSize');
const mimeType = document.getElementById('mimeType');

chooseFileButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    selectedFileName.textContent = fileInput.files[0].name;
    fileInfoContainer.style.display = 'block';
    uploadButtonContainer.style.display = 'block';
  }
});

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(document.getElementById('uploadForm'));
  const response = await fetch('https://rfc-production.up.railway.app/upload', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  originalName.textContent = data.fileInfo.originalName;
  fileSize.textContent = data.fileInfo.size;
  mimeType.textContent = data.fileInfo.mimeType;
  infoContainer.style.display = 'block';
});

