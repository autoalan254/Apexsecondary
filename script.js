
// ==========================================
// APEX SECONDARY SCHOOL
// SHARED JAVASCRIPT FOR ALL SIX PAGES
// ==========================================


// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a navigation link

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });

    // Close menu when the screen becomes wider

    window.addEventListener("resize", function () {

        if (window.innerWidth > 780) {

            navigation.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        }

    });

}


// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// 3. CONTACT FORM AND WHATSAPP

const contactForm = document.getElementById("contact-form");

// IMPORTANT:
// Replace the empty string with the school's real
// WhatsApp number, including the country code.
// Example format for Kenya: 2547XXXXXXXX

const SCHOOL_WHATSAPP = "";

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the browser from submitting the form
        // and refreshing the page.

        event.preventDefault();

        // Check required fields

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();
            return;

        }

        // Check whether a WhatsApp number is configured

        if (!SCHOOL_WHATSAPP) {

            alert(
                "The school WhatsApp number has not been configured yet. " +
                "Add the official number in script.js before using this form."
            );

            return;

        }

        // Read the form values

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const subject = document.getElementById("subject").value;

        const message = document.getElementById("message").value.trim();

        // Build the WhatsApp message

        const whatsappMessage =
            "APEX SECONDARY SCHOOL - WEBSITE INQUIRY\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + (phone || "Not provided") + "\n" +
            "Inquiry: " + subject + "\n\n" +
            "Message:\n" + message;

        // Encode the message for the URL

        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp with the prepared message

        const whatsappURL =
            "https://wa.me/" +
            SCHOOL_WHATSAPP +
            "?text=" +
            encodedMessage;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

}
