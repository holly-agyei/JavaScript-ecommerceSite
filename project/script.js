// script.js

// Example available dates and times (you can make this dynamic by fetching from your server)
const availableSlots = {
    "2025-02-12": ["10:00 AM", "2:00 PM", "4:00 PM"],
    "2025-02-13": ["11:00 AM", "1:00 PM", "3:00 PM"],
};

// Function to populate date options
const dateSelect = document.getElementById("available-date");
for (const date in availableSlots) {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = date;
    dateSelect.appendChild(option);
}

// Event listener for date selection
dateSelect.addEventListener("change", function() {
    const timeSelect = document.getElementById("available-time");
    const selectedDate = dateSelect.value;
    
    // Clear existing time options
    timeSelect.innerHTML = '<option value="">Choose a time</option>';
    
    if (availableSlots[selectedDate]) {
        availableSlots[selectedDate].forEach(time => {
            const option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
        timeSelect.disabled = false;
    } else {
        timeSelect.disabled = true;
    }
});

// Handle form submission (for demo, log to console and show confirmation message)
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("available-date").value;
    const time = document.getElementById("available-time").value;

    const bookingInfo = {
        name,
        email,
        date,
        time,
    };

    // Here, you will send the booking info to the backend (for now, we'll log it)
    console.log("Booking Info:", bookingInfo);

    // Trigger email confirmation (this will happen server-side)
    alert(`Booking Confirmed!\nName: ${name}\nDate: ${date}\nTime: ${time}`);

    // Optionally, clear form after submission
    document.getElementById("booking-form").reset();
});
