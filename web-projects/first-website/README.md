"Thought of You"

Thought of You is going to be an interactive web application designed for creating personalized digital gifts for special occasions like Valentine's Day, anniversaries, or any moment when you want to share something meaningful with someone you care about.

Thought of You allows users to create custom digital diaries or letters that combine photos, text, and decorative elements into a beautiful, interactive experience. Think of it as a modern, digital version of a handmade scrapbook or photo album that you can share with someone special.

How It Works:

1. For Gift Creators
Visit the homepage and choose to create a new digital gift
Upload your favorite photos
Write personalized messages or captions for each image
Add decorative stickers and customize the visual design
Generate a unique password that will allow your recipient to access your creation

2. For Gift Recipients
Visit the homepage and enter the password you received
Access your personalized digital diary
Browse through the photos and messages at your own pace
Enjoy the interactive elements and thoughtful design

Features
Password Protection: Each digital gift is secured with a unique password, making it private and personal
Photo Upload: Users can add multiple images to tell their story
Custom Text: Write personalized messages and captions
(Decorative Elements: Add stickers and visual enhancements)
Design Customization: Choose different themes and layouts to match your style
Interactive Experience: Recipients can navigate through the content like reading a digital diary


This project is built as a web application that handles user uploads, content management, password generation, and responsive design to ensure the experience works well across different devices.



## How to Run
1. Clone the repository: `git clone <repository-URL>`
2. Open the `index.html` file in your browser.

## Folder Structure
- `index.html`: Homepage
- `create.html`: Gift creation page
- `access.html`: Gift access page
- `styles.css`: CSS file for styling


My Idea of how it works:

Creator fills out create.html
        ↓
JavaScript collects all data (giftData)
        ↓
Sends it to your Node/Express server
        ↓
Server saves it to database with a unique ID
        ↓
Server returns a password to the creator
        ↓
Creator shares password with recipient
        ↓
Recipient visits access.html + enters password
        ↓
Server looks up the gift by password
        ↓
Custom gift page is displayed