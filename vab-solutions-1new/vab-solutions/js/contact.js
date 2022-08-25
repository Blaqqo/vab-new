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