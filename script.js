


const mysteries = {

    
"mystery-box": {
name: "Mystery Box",
risk: "Medium Risk",
image: "foods/food1.png",
found: "Behind the milk ",
date: "Unknown",
owner: "Grandma",
age: "Possibly 3 years",
contents: "Unknown substance",
notes: "Every family member denies owning this box."
},

"final-boss": {
    name: "Final Boss",
    risk: "High Risk",
    image: "foods/food2.png",
    found: "At the back of the fridge",
    date: "Unknown",
    owner: "Nobody knows",
    age: "3000 years",
    contents: "Unknown",
    notes: "Even the fridge seems afraid of this container."
},

"hitler-drink": {
    name: "Hitler's Energy Drink",
    risk: "High Risk",
    image: "foods/food3.png",
    found: "Inside the fridge door",
    date: "1945",
    owner: "Unknown",
    age: "Over 80 years",
    contents: "Seems to be protein shake",
    notes: "The expiration date has mysteriously disappeared."
},

"imortal-melon": {
    name: "Immortal melon",
    risk: "Low Risk",
    image: "foods/food4.png",
    found: "Inside the vegetable drawer",
    date: "Unknown",
    owner: "Grandpa",
    age: "2 months",
    contents: "One extremely old melon",
    notes: "Scientists have attempted to explain its existence and failed."
},

"covid-container": {
    name: "Covid Container",
    risk: "Medium Risk",
    image: "foods/food5.png",
    found: "Behind several expired food packets",
    date: "2020",
    owner: "The entire family denies it",
    age: "6 years",
    contents: "Unknown leftovers",
    notes: "Nobody has opened it since the lockdown."
},

"biriyani": {
    name: "Apocalyptic Biryani",
    risk: "High Risk",
    image: "foods/food6.png",
    found: "At the bottom of the fridge",
    date: "Unknown",
    owner: "Unknown",
    age: "Older than civilization",
    contents: "Ancient biryani",
    notes: "Legends say it was already inside the fridge when the family bought it."
}

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const mystery = mysteries[id];

if (mystery) {
document.getElementById("mystery-name").textContent = mystery.name;
document.getElementById("mystery-risk").textContent = mystery.risk;


document.getElementById("mystery-image").src = mystery.image;
document.getElementById("mystery-image").alt = mystery.name;

document.getElementById("mystery-found").textContent = mystery.found;
document.getElementById("mystery-date").textContent = mystery.date;
document.getElementById("mystery-owner").textContent = mystery.owner;
document.getElementById("mystery-age").textContent = mystery.age;
document.getElementById("mystery-contents").textContent = mystery.contents;
document.getElementById("mystery-notes").textContent = mystery.notes;

} else {
document.querySelector(".mystery-info").innerHTML = "<h1>Mystery Not Found</h1><p>This mystery does not exist in our archives.</p>";
}



const riskElement = document.getElementById("mystery-risk");

if (mystery.risk === "High Risk") {
    riskElement.style.backgroundColor = "red";
} 
else if (mystery.risk === "Medium Risk") {
    riskElement.style.backgroundColor = "orange";
} 
else if (mystery.risk === "Low Risk") {
    riskElement.style.backgroundColor = "green";
}





