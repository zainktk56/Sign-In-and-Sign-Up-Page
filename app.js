function signup() {
    const get_name = document.getElementById("iname");
    const get_email = document.getElementById("iemail");
    const get_pass = document.getElementById("ipass");

    // 1. Fixed the duplicate assignment error
    const emailValue = get_email.value.trim();
    const nameValue = get_name.value.trim();
    const passValue = get_pass.value.trim();

    // Standard email validation Regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 2. Step 1: Check for empty fields first
    if (!nameValue || !emailValue || !passValue) {
        Swal.fire({
            icon: "error",
            title: "Please Fill the Info First !",
        });
    }
    // Step 2: Check if email is valid (Fixed typo get_pass.vlaue here too)
    else if (!emailPattern.test(emailValue)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials or Email !",
            text: "Please Write a valid Email Address!",
        });
    }
    // Step 3: Success (Only save to localStorage when everything is correct)
    else {
        localStorage.setItem("Name", get_name.value);
        localStorage.setItem("Email", get_email.value);
        localStorage.setItem("Password", get_pass.value);

        Swal.fire({
            title: "Sign Up Successful!",
            text: "Redirecting to your dashboard...",
            icon: "success",
            confirmButtonText: "OK"
        }).then((result) => {
            // 3. This runs ONLY after the user clicks the "OK" button
            window.location.href = "signin.html"; // Change "signup.html" to your success destination page!
        });
    }
}

function signin() {
    const get_email = document.getElementById("temail");
    const get_pass = document.getElementById("tpass");
    const emailValue = get_email.value.trim();
    const passValue = get_pass.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue || !passValue) {
        Swal.fire({
            icon: "error",
            title: "Please Fill the Info First !",
        });
    }
    else if (!emailPattern.test(emailValue)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials or Email !",
            text: "Please Write a valid Email Address!",
        });
    }
    else if (get_email.value == localStorage.getItem("Email") && get_pass.value == localStorage.getItem("Password")) {
        Swal.fire({
            title: "Sign In Successful!",
            text: "Congrats!",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials  !",
            text: "Please Write a valid Email Address!",
        });
    }

}