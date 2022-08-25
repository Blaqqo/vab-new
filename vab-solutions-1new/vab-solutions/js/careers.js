const fileInput = document.getElementById('file-input');

const getFileSize = (size) => {
    if (size < 1024) {
        return `${size} bytes`;
    } else if (size < 1024 ** 2) {
        return `${(size / 1024).toFixed(2)}KB`;
    } else {
        return `${(size / (1024 ** 2)).toFixed(2)}MB`;
    }
}

const handleFileUpload = (event) => {
    const fileDetails = document.getElementById('file-details');

    const { name, size } = event.target.files[0];

    if (!Number.isInteger(size)) {
        return 'Please provide a valid file size.';
    }

    fileDetails.innerHTML = `<span class="file-output__span">File details</span>: ${name} - ${getFileSize(size)}`;

}

fileInput.addEventListener('change', handleFileUpload);

const form = document.getElementById('form');

const successModal = document.getElementById('success-modal');

const openSuccessModal = (event) => {
    event.preventDefault();
    // Make api request

    // Show modal if successful
    successModal?.showModal();
}

const closeSuccessModal = (event) => {
    const rect = successModal.getBoundingClientRect();

    // Closes the modal when a click occurs outside the dialog
    if (event.clientY < rect.top || event.clientY > rect.bottom ||
        event.clientX < rect.left || event.clientX > rect.right) {
        successModal.close();
    }
}

form.addEventListener('submit', openSuccessModal);
successModal.addEventListener('click', closeSuccessModal);