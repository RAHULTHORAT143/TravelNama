const recommendations = [
    {
        destination: "Paris", budget: "high", activity: "city",
        description: "Experience the romance of Paris, visit iconic landmarks, and enjoy world-class cuisine.",
        media: '<img src="paris.jpg" alt="Paris">' // Replace with actual image
    },
    {
        destination: "Bali", budget: "medium", activity: "beach",
        description: "Relax on the stunning beaches of Bali, surf the waves, and explore lush rice terraces.",
        media: '<img src="bali.jpg" alt="Bali"> <img src="bali.jpg" alt="Bali">' // Replace with actual image
    },
    {
        destination: "Nepal", budget: "low", activity: "hiking",
        description: "Trek through the majestic Himalayas, experience unique cultures, and witness breathtaking views.",
        media: '<img src="nepal.jpg" alt="Nepal">' // Replace with actual image
    },
    {
        destination: "Tokyo", budget: "high", activity: "city",
        description: "Discover the vibrant culture of Tokyo, from traditional temples to cutting-edge technology.",
        media: '<img src="tokyo.jpg" alt="Tokyo">' // Replace with actual image
    },
    {
        destination: "Maldives", budget: "high", activity: "beach",
        description: "Indulge in luxury resorts, dive into crystal-clear waters, and experience ultimate relaxation in the Maldives.",
        media: '<img src="maldives.jpg" alt="Maldives">' // Replace with actual image
    },
    {
        destination: "Swiss Alps", budget: "medium", activity: "hiking",
        description: "Hike through scenic trails, breathe in the fresh mountain air, and witness the beauty of the Swiss Alps.",
        media: '<img src="swiss_alps.jpg" alt="Swiss Alps">' // Replace with actual image
    }
];

const destinationInput = document.getElementById("destination");
const budgetSelect = document.getElementById("budget");
const activitySelect = document.getElementById("activity");
const searchButton = document.getElementById("searchButton");
const recommendationsList = document.getElementById("recommendationsList");
const destinationDetails = document.getElementById("destinationDetails");
const closeDetails = document.getElementById("closeDetails");
const detailsTitle = document.getElementById("detailsTitle");
const detailsMedia = document.getElementById("detailsMedia");
const detailsDescription = document.getElementById("detailsDescription");

searchButton.addEventListener("click", () => {
    const destinationFilter = destinationInput.value.toLowerCase();
    const budgetFilter = budgetSelect.value;
    const activityFilter = activitySelect.value;

    const filteredRecommendations = recommendations.filter(recommendation => {
        const destinationMatch = !destinationFilter || recommendation.destination.toLowerCase().includes(destinationFilter);
        const budgetMatch = !budgetFilter || recommendation.budget === budgetFilter;
        const activityMatch = !activityFilter || recommendation.activity === activityFilter;
        return destinationMatch && budgetMatch && activityMatch;
    });

    displayRecommendations(filteredRecommendations);
});

function displayRecommendations(recs) {
    recommendationsList.innerHTML = "";
    recs.forEach(rec => {
        const recommendationDiv = document.createElement("div");
        recommendationDiv.classList.add("recommendation");
        recommendationDiv.textContent = rec.destination; // Display only the destination name
        recommendationDiv.addEventListener("click", () => showDetails(rec)); // Show details on click
        recommendationsList.appendChild(recommendationDiv);
    });
}

function showDetails(rec) {
    detailsTitle.textContent = rec.destination;
    detailsMedia.innerHTML = rec.media;
    detailsDescription.textContent = rec.description;
    destinationDetails.classList.remove("hidden");
}

closeDetails.addEventListener("click", () => {
    destinationDetails.classList.add("hidden");
});

displayRecommendations(recommendations); // Load all recommendations on page load