// Predefined passkey
const correctPasskey = "openflower"; // You can change this to any passkey you want

// Function to check the passkey and bloom the flower
function checkPasskey() {
  const userPasskey = document.getElementById('passkey').value;

  // Check if the passkey matches
  if (userPasskey === correctPasskey) {
    // Show the flower and apply the blooming effect
    document.getElementById('flower-container').style.display = 'block';
    document.getElementById('flower').classList.add('bloom');
  } else {
    alert("Incorrect passkey. Try again.");
  }
}
