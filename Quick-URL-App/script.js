const bookmarkForm = document.getElementById("bookmarkForm");
const siteNameInput = document.getElementById("siteName");
const siteUrlInput = document.getElementById("siteUrl");
const bookmarkList = document.getElementById("bookmarkList");

bookmarkForm.addEventListener("submit", addBookmark);
document.addEventListener("DOMContentLoaded", displayBookmarks);

function addBookmark(e) {
    e.preventDefault();
    const siteName = siteNameInput.value;
    const siteUrl = siteUrlInput.value;

    if (!validateForm(siteName, siteUrl)) {
        return;
    }

    const bookmark = {
        name: siteName,
        url: siteUrl,
    };

    saveBookmark(bookmark);
    displayBookmarks(); // Refresh the displayed bookmarks
    siteNameInput.value = "";
    siteUrlInput.value = "";
}

function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert("Please fill in both fields.");
        return false;
    }
    try {
        new URL(siteUrl);
        return true;
    } catch (error) {
        alert("Please enter a valid URL.");
        return false;
    }
}

function displayBookmark(bookmark) {
    const bookmarkItem = document.createElement("li");
    const link = document.createElement("a");
    const removeBtn = document.createElement("button");

    link.href = bookmark.url;
    link.textContent = bookmark.name;
    link.target = "_blank";

    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        removeBookmark(bookmark.url);
    });

    bookmarkItem.appendChild(link);
    bookmarkItem.appendChild(removeBtn);
    bookmarkList.appendChild(bookmarkItem);
}

function saveBookmark(bookmark) {
    let bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    // Correctly save bookmarks to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function getBookmarks() {
    try {
        const bookmarks = localStorage.getItem("bookmarks");
        return bookmarks ? JSON.parse(bookmarks) : [];
    } catch (error) {
        console.error("Error parsing bookmarks from localStorage:", error);
        localStorage.removeItem("bookmarks");
        return [];
    }
}

function displayBookmarks() {
    bookmarkList.innerHTML = ""; // Clear the current list
    let bookmarks = getBookmarks();
    bookmarks.forEach((bookmark) => {
        displayBookmark(bookmark);
    });
}

function removeBookmark(url) {
    let bookmarks = getBookmarks();
    // Filter out the bookmark to remove
    bookmarks = bookmarks.filter((bookmark) => bookmark.url !== url);
    // Update localStorage with the new list
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks(); // Refresh the displayed bookmarks
}
