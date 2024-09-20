// Motivational quotes array
const quotes = [
    "Stay focused, stay humble!",
    "Every step forward gets you closer to your goal!",
    "Believe in yourself, you are stronger than you think!",
    "The harder you work, the luckier you get.",
    "Keep going, your future self will thank you!",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Work hard in silence, let success make the noise!",
    "The only limit to your impact is your imagination and commitment.",
    "Doubt kills more dreams than failure ever will.",
    "Your struggle today is building the strength you need for tomorrow.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "When you feel like quitting, remember why you started.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Great things never come from comfort zones.",
    "Your future is created by what you do today, not tomorrow.",
    "You are stronger than you think.",
"The pain you feel today is the strength you feel tomorrow.",
"Success is not for the lazy.",
"Don’t limit your challenges; challenge your limits.",
"If you want it, fight for it. Don’t give up.",
"Your only limit is you.",
"Success is what happens after you have survived all your mistakes.",
"Every accomplishment starts with the decision to try.",
"You don’t have to be great to start, but you have to start to be great.",
"Today’s accomplishments were yesterday’s impossibilities.",
"The secret of getting ahead is getting started.",
"You are the artist of your own life. Don’t hand the paintbrush to anyone else.",
"Push yourself, because no one else is going to do it for you.",
"Your dreams don’t have an expiration date. Take a deep breath and try again.",
"Failure is not the opposite of success; it’s part of success." ,
"Do something today that your future self will thank you for.",
"Don’t watch the clock; do what it does Keep going.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Dream it. Wish it. Do it.",
"Great things never come from comfort zones.",
];

// Display random motivational quote
const quoteElement = document.getElementById("dailyQuote");

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

setInterval(updateQuote, 60000); // Change quote every 60 seconds
updateQuote(); // Initial call to set quote

// Goals functionality with localStorage
const goalList = document.getElementById("goalList");
const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

// Function to display goals
function displayGoals() {
    goalList.innerHTML = ""; // Clear the list before updating
    goals.forEach((goal, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = goal;

        // Create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "250px";
        deleteBtn.onclick = () => {
            goals.splice(index, 1); // Remove the goal from the array
            updateGoals(); // Update the displayed goals and save to localStorage
        };

        listItem.appendChild(deleteBtn);
        goalList.appendChild(listItem);
    });
}

// Function to update and save goals
function updateGoals() {
    localStorage.setItem("goals", JSON.stringify(goals)); // Save to localStorage
    displayGoals(); // Refresh the display
}

// Add a new goal
addGoalBtn.addEventListener('click', () => {
    const newGoal = goalInput.value.trim();
    if (newGoal) {
        goals.push(newGoal); // Add new goal to array
        goalInput.value = ""; // Clear input field
        updateGoals(); // Save and display updated goals
    }
});

// Initial load
displayGoals();
// Focus Timer
let startTime;
let interval;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const focusTimeDisplay = document.getElementById('focusTime');

startBtn.addEventListener('click', () => {
    startTime = new Date();
    interval = setInterval(updateFocusTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function updateFocusTime() {
    const now = new Date();
    const elapsed = new Date(now - startTime);
    const hours = String(elapsed.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsed.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsed.getUTCSeconds()).padStart(2, '0');
    focusTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`; 
}
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();

    document.getElementById("currentDate").textContent = date;
    document.getElementById("currentTime").textContent = time;
}

// Call the function to set initial date and time
updateDateTime();

// Update time every second
setInterval(updateDateTime, 1000);
