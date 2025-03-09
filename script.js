document.getElementById("emergency-button").addEventListener("click", function() {
    alert("🚨 Emergency Alert Sent!");
});

document.getElementById("location-button").addEventListener("click", function() {
    alert("📍 Location sharing activated!");
});

document.getElementById("map-button").addEventListener("click", function() {
    alert("🗺️ Safe/Unsafe Map opened!");
});

// Add event listeners for the feature buttons
document.querySelectorAll(".feature-button").forEach(function(button, index) {
    button.addEventListener("click", function() {
        const actions = [
            "🚨 Emergency Alert Activated!",
            "📍 Location sharing activated!",
            "🗺️ Safe/Unsafe Map opened!"
        ];
        alert(actions[index]);
    });
});
