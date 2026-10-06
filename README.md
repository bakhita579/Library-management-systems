# Library Management System

A simple Library Management System built using HTML, CSS, and JavaScript.

The system allows a user to enter their name, select a borrowing date, choose an expected return date, select available books, and receive a notification showing the selected books.

## Features

- Enter user's name
- Select the date the book is being borrowed
- Select the expected return date
- Display a list of available books
- Select multiple books using checkboxes
- Display selected books in a notification
- Clear selected books
- Validate required information
- Prevent the return date from being earlier than the borrowing date
- Responsive design for smaller screens

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
library-management/
│
├── index.html
├── style.css
├── script.js
└── README.md
index.html
Contains the structure of the Library Management System, including:

User name input

Borrowing date

Return date

Available books

Buttons

Notification area

style.css
Contains the styling for the application, including:

Page layout

Form styling

Buttons

Book selection area

Notifications

Error messages

Responsive design

script.js
Contains the functionality of the application.

It handles:

Selecting books

Clearing selected books

Form validation

Displaying user information

Displaying selected books

Checking borrowing and return dates

How to Run the Project
1. Clone the repository
git clone YOUR-GITHUB-REPOSITORY-URL
2. Open the project folder
cd library-management
3. Open the project
Open index.html in your browser.

You can also use VS Code Live Server to run the project.

How to Use
Enter your name.

Select the date you are taking the book.

Select the expected return date.

Choose one or more available books.

Click Select Books.

The system will display a notification containing your borrowing information and selected books.

Click Clear Selected Books to remove the selected books.

Validation
The system checks that:

The user's name has been entered.

A borrowing date has been selected.

A return date has been selected.

At least one book has been selected.

The return date is not earlier than the borrowing date.

What I Learned
Through this project, I practiced:

Creating forms using HTML.

Styling forms using CSS.

Using JavaScript to interact with HTML elements.

Using querySelectorAll() to find selected checkboxes.

Using addEventListener() to handle button clicks.

Using forEach() to loop through selected books.

Creating HTML elements using createElement().

Updating webpage content using textContent.

Showing and hiding elements using JavaScript.

Performing basic form validation.

Separating HTML, CSS, and JavaScript into different files.

Future Improvements
Some features that could be added in the future include:

Search for books

Add new books

Remove books

Track available and borrowed books

Student/library member ID

Store borrowing records using Local Storage

Book return functionality

Due-date reminders

Admin dashboard

Database integration

Author
E &JB

This project was created as a beginner JavaScript project to practice DOM manipulation, event handling, forms, and basic validation.


You can save this as **`README.md`** in the same folder as `index.html`, `style.css`, and `script.js`
