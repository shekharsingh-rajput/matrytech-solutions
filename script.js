let counter = document.querySelector(".counter");
let count = 0;

let interval = setInterval(() => {
    count++;
    counter.textContent = count + "%";

    if (count >= 96) {
        clearInterval(interval);
    }
}, 10); // Change speed here (lower = faster)

// project dilever

let pro = document.querySelector(".project");
let pro1 = 0;

let interval1 = setInterval(() => {
    pro1++;
    pro.textContent = pro1 + "+";

    if (pro1 >= 20) {
        clearInterval(interval1);
    }
}, 30); // Change speed here (lower = faster)

let nu = document.querySelector(".num");
let num1 = 0;

let interval2 = setInterval(() => {
    num1++;
    nu.textContent = num1 + " Months";

    if (num1 >= 12) {
        clearInterval(interval2);
    }
}, 30);






function toggleFaq(button) {
    // Get the content div that follows the button
    const content = button.nextElementSibling;

    // Close all other FAQ items
    const allButtons = document.querySelectorAll('.pr-ms-expand');
    const allContents = document.querySelectorAll('.faq-content');

    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });

    allContents.forEach(cont => {
        if (cont !== content) {
            cont.classList.remove('show');
        }
    });

    // Toggle the clicked item
    button.classList.toggle('active');
    content.classList.toggle('show');
}

// form validation
function validateForm() {
    let name = document.getElementsByClassName("tig")[0]?.value.trim();
    let email = document.getElementsByClassName("tig")[1]?.value.trim();
    let company = document.getElementsByClassName("project")?.value.trim();
    let phone = document.getElementsByClassName("phone").value.trim();
    let message = document.getElementsByClassName("message").value.trim();
    let toggleBtn = document.getElementById("toggleBtn");
    let submitBtn = document.getElementsByClassName("submit-btn")[0];
    if (!name || !email || !company || !phone || !message) {
        alert("Please fill out all fields.");
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (toggleBtn === false) {
        alert("You must agree to the Privacy Policy and Terms of Service.");
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "black";
        submitBtn.style.cursor = "not-allowed";
        console.log("Form submission prevented due to validation errors.");
        return false;
    } else if (toggleBtn == true);
    submitBtn.addEventListener("click", function (event) {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "green";
        submitBtn.style.cursor = "pointer";
        return true;
    });
}