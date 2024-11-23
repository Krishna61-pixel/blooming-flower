// Predefined passkey
const correctPasskey = "openflower"; // You can change this to any passkey you want

// Function to check the passkey and bloom the flower
function checkPasskey() {
  const userPasskey = document.getElementById('passkey').value;

  // Check if the passkey matches
  if (userPasskey === correctPasskey) {
// Get the button and flower container elements
const bloomButton = document.getElementById("bloomBtn");
const flower = document.querySelector(".flower");

// Function to trigger the blooming effect
function bloomFlower() {
  // Add the class 'bloom' to the flower to trigger CSS animation
  flower.classList.add("bloom");
}

// Event listener to trigger the blooming on button click
bloomButton.addEventListener("click", bloomFlower);
  }
}
