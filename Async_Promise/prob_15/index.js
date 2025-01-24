// Simulate user registration
function registerUser(callback) {
    setTimeout(() => {
        console.log("User registered successfully");
       
        const success = true; 
        if (success) {
            callback(null); 
        } else {
            callback("Error during registration");
        }
    }, 1000);
}


function sendVerification(callback) {
    setTimeout(() => {
        console.log("Verification email sent");
       
        const success = true; 
        if (success) {
            callback(null); 
        } else {
            callback("Error sending verification email"); 
        }
    }, 1000);
}


function loginUser(callback) {
    setTimeout(() => {
        console.log("User logged in successfully");
    
        const success = true;
        if (success) {
            callback(null); 
        } else {
            callback("Error during login"); // Error message
        }
    }, 1000);
}


function displayWelcomeMessage(callback) {
    setTimeout(() => {
        console.log("Welcome to the platform!");
        callback(null); 
    }, 1000);
}


registerUser((error) => {
    if (error) {
        console.log(error);
        return; 
    }
    
    sendVerification((error) => {
        if (error) {
            console.log(error);
            return;
        }

        loginUser((error) => {
            if (error) {
                console.log(error);
                return; // Stop the workflow on error
            }

            displayWelcomeMessage((error) => {
                if (error) {
                    console.log(error);
                }
            });
        });
    });
});
