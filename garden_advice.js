// Hardcoded values for the season and plant type
let season = prompt("Enter the season:"); // Prompt the user to enter the current season (e.g., summer, winter)
let plantType = prompt("Enter the plant type:"); // Prompt the user to enter the plant type (e.g., flower, vegetable)

// Determine advice based on the season
function getSeasonAdvice(season) {
  if (season === "summer") {
    return "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    return "Protect your plants from frost with covers.\n";
  } else {
    return "No advice for this season.\n";
  }
}
// Determine advice based on the plant type
function getPlantAdvice(plantType) {
  if (plantType === "flower") {
    return "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    return "Keep an eye out for pests!";
  } else {
    return "No advice for this type of plant.";
  }
}

// Generate the complete gardening advice
let advice = getSeasonAdvice(season);
advice += getPlantAdvice(plantType);

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
