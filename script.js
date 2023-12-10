function submitEmail() {
    var email = document.getElementById("email").value;
    if (email.trim() !== "") {
        document.getElementById("email-input").style.display = "none";
        document.getElementById("message-input-container").style.display = "block";
        document.getElementById("chat-content").innerText = `Email: ${email}`;
    } else {
        alert("Please enter a valid email address.");
    }
}

function sendMessage() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message-input").value;
    
    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Use AJAX to send data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display a success message in the chatbox
            document.getElementById("chat-content").innerText = xhr.responseText;
            document.getElementById("message-input-container").style.display = "none";
        }
    };
    
    // Send the email and message to the server
    var data = "email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
    xhr.send(data);
}
