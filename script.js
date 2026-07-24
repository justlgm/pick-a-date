const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));
    pages[index].classList.add("active");
    currentPage = index;

    // Scroll back to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }
}

function chooseDate(dateName) {

    document.getElementById("chosenDate").textContent =
        `Your date is: ${dateName} ❤️`;

    showPage(pages.length - 1);
}