document.getElementsByClassName("submit-button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    console.log("Form Submitted!");
    // Get values entered by the user
    const fullName = document.getElementById("full-name").value;
    console.log(fullName);
    const email = document.getElementById("email").value;
    const message = document.getElementById("Message").value;
  
    // Create an object to store the values
    const formData = {
      fullName: fullName,
      email: email,
      message: message,
    };
  
    // Now formData contains all the values
    console.log("Form Data:", formData);
  
    // You can use the formData object as needed, e.g., send it to a server via AJAX.
  });


