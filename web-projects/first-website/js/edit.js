// create.js or add to main.js

document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    if (document.getElementById('typing-text')) {
        typingAnimation("typing-text", 100);
    }

    // Get form elements
    const recipientNameInput = document.getElementById('recipient-name');
    const customHeadlineInput = document.getElementById('custom-headline');
    const confirmHeadlineBtn = document.getElementById('confirm-headline');
    const pictureUpload = document.getElementById('picture-upload');
    const uploadedPicturesContainer = document.getElementById('uploaded-pictures');
    const createGiftBtn = document.getElementById('create-gift');
    const previewGiftBtn = document.getElementById('preview-gift');

    let uploadedImages = []; // Store uploaded image data

    // Confirm headline functionality
    confirmHeadlineBtn.addEventListener('click', function() {
        const headline = customHeadlineInput.value.trim();
        const recipientName = recipientNameInput.value.trim();
        
        if (headline && recipientName) {
            alert(`Great! Your headline "${headline}" for ${recipientName} has been confirmed!`);
            confirmHeadlineBtn.textContent = 'Confirmed ✓';
            confirmHeadlineBtn.style.backgroundColor = '#28a745';
            confirmHeadlineBtn.disabled = true;
        } else {
            alert('Please fill in both the name and headline first!');
        }
    });

    // Handle picture uploads
    pictureUpload.addEventListener('change', function(event) {
        const files = event.target.files;
        
        if (files.length > 0) {
            // Clear previous uploads
            uploadedPicturesContainer.innerHTML = '';
            uploadedImages = [];
            
            // Process each uploaded file
            Array.from(files).forEach((file, index) => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        const imageData = {
                            src: e.target.result,
                            name: file.name,
                            subtitle: ''
                        };
                        
                        uploadedImages.push(imageData);
                        displayUploadedImage(imageData, index);
                    };
                    
                    reader.readAsDataURL(file);
                }
            });
        }
    });

    // Display uploaded image with subtitle input
    function displayUploadedImage(imageData, index) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.innerHTML = `
            <img src="${imageData.src}" alt="${imageData.name}" class="uploaded-image">
            <input type="text" 
                   class="subtitle-input" 
                   placeholder="Add a subtitle for this image..." 
                   data-index="${index}">
            <p class="image-name">${imageData.name}</p>
        `;
        
        uploadedPicturesContainer.appendChild(imageContainer);
        
        // Add event listener for subtitle input
        const subtitleInput = imageContainer.querySelector('.subtitle-input');
        subtitleInput.addEventListener('input', function() {
            uploadedImages[index].subtitle = this.value;
        });
    }

    // Preview functionality
    previewGiftBtn.addEventListener('click', function() {
        if (!validateForm()) return;
        
        const giftData = collectGiftData();
        showPreview(giftData);
    });

    // Create gift functionality
    createGiftBtn.addEventListener('click', function() {
        if (!validateForm()) return;
        
        const giftData = collectGiftData();
        createGift(giftData);
    });

    // Validate form before processing
    function validateForm() {
        const recipientName = recipientNameInput.value.trim();
        const headline = customHeadlineInput.value.trim();
        
        if (!recipientName) {
            alert('Please enter the recipient\'s name!');
            recipientNameInput.focus();
            return false;
        }
        
        if (!headline) {
            alert('Please enter a headline!');
            customHeadlineInput.focus();
            return false;
        }
        
        if (uploadedImages.length === 0) {
            alert('Please upload at least one picture!');
            return false;
        }
        
        return true;
    }

    // Collect all form data
    function collectGiftData() {
        return {
            recipientName: recipientNameInput.value.trim(),
            headline: customHeadlineInput.value.trim(),
            images: uploadedImages,
            createdAt: new Date().toISOString()
        };
    }

    // Show preview of the gift
    function showPreview(giftData) {
        let previewHTML = `
            <div class="preview-modal">
                <div class="preview-content">
                    <h2>Preview: ${giftData.headline}</h2>
                    <p>For: ${giftData.recipientName}</p>
                    <div class="preview-images">
        `;
        
        giftData.images.forEach(image => {
            previewHTML += `
                <div class="preview-image-item">
                    <img src="${image.src}" alt="${image.name}" style="max-width: 200px;">
                    <p>${image.subtitle || 'No subtitle'}</p>
                </div>
            `;
        });
        
        previewHTML += `
                    </div>
                    <button onclick="closePreview()">Close Preview</button>
                    <button onclick="finalizeGift()">Looks Good - Create Gift!</button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', previewHTML);
    }

    // Create the final gift
    function createGift(giftData) {
        // Store gift data (you could save to localStorage, send to server, etc.)
        localStorage.setItem('createdGift', JSON.stringify(giftData));
        
        alert(`Gift "${giftData.headline}" for ${giftData.recipientName} has been created successfully!`);
        
        // Redirect to a success page or back to home
        if (confirm('Would you like to view your created gift?')) {
            window.location.href = 'view-gift.html';
        } else {
            window.location.href = 'home.html';
        }
    }
});

// Global functions for preview modal
function closePreview() {
    const modal = document.querySelector('.preview-modal');
    if (modal) {
        modal.remove();
    }
}

function finalizeGift() {
    const giftData = JSON.parse(localStorage.getItem('tempGiftData') || '{}');
    closePreview();
    
    // Create the final gift
    localStorage.setItem('createdGift', JSON.stringify(giftData));
    alert('Gift created successfully!');
    window.location.href = 'home.html';
}
