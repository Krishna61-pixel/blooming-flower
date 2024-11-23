// Predefined passkey
const correctPasskey = "openflower"; // You can change this to any passkey you want

// Function to check the passkey and bloom the flower
function checkPasskey() {
  const userPasskey = document.getElementById('passkey').value;

  // Check if the passkey matches
  if (userPasskey === correctPasskey) {
    // Get the flower container and petals
    const flowerContainer = document.getElementById("flower-container");
    const flower = document.getElementById("flower");
    const petals = document.querySelectorAll(".petal");

    // Show the flower container and apply the bloom animation to flower and petals
    flowerContainer.style.opacity = 1; // Make the flower container visible
    flower.classList.add("bloom-flower");

    petals.forEach(petal => {
      petal.classList.add("bloom-petal"); // Make each petal bloom
    });

    // Optional: Disable the input and button once the correct passkey is entered
    document.getElementById('passkey').disabled = true;
    document.getElementById('submitBtn').disabled = true; // Disable submit button
  } else {
    // Optionally, alert the user if the passkey is incorrect
    alert("Incorrect passkey! Please try again.");
  }
}

// Add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", checkPasskey);
