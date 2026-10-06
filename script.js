
const selectButton = document.getElementById("selectButton");
const clearButton = document.getElementById("clearButton");

const userName = document.getElementById("userName");
const borrowDate = document.getElementById("borrowDate");
const returnDate = document.getElementById("returnDate");

const notification = document.getElementById("notification");
const errorMessage = document.getElementById("errorMessage");

const displayName = document.getElementById("displayName");
const displayBorrowDate = document.getElementById("displayBorrowDate");
const displayReturnDate = document.getElementById("displayReturnDate");

const selectedBooks = document.getElementById("selectedBooks");


selectButton.addEventListener("click", function() {

    const books = document.querySelectorAll(
        '.book input[type="checkbox"]:checked'
    );

    if (userName.value === "") {
        showError("Please enter your name.");
        return;
    }

    if (borrowDate.value === "") {
        showError("Please select the date you are taking the book.");
        return;
    }

    if (returnDate.value === "") {
        showError("Please select the expected return date.");
        return;
    }

    if (books.length === 0) {
        showError("Please select at least one book.");
        return;
    }

    if (returnDate.value < borrowDate.value) {
        showError("Return date cannot be before the borrowing date.");
        return;
    }

    errorMessage.style.display = "none";

    displayName.textContent = userName.value;
    displayBorrowDate.textContent = borrowDate.value;
    displayReturnDate.textContent = returnDate.value;

    selectedBooks.innerHTML = "";

    books.forEach(function(book) {

        const listItem = document.createElement("li");

        listItem.textContent = book.value;

        selectedBooks.appendChild(listItem);
    });

    notification.style.display = "block";
});


clearButton.addEventListener("click", function() {

    const books = document.querySelectorAll(
        '.book input[type="checkbox"]'
    );

    books.forEach(function(book) {
        book.checked = false;
    });

    notification.style.display = "none";

    errorMessage.style.display = "none";
});


function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";

    notification.style.display = "none";
}

