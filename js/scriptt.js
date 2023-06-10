// array for cards content
const tasks = [{
    picture: "../images/cleaning.jpg",
    taskname: "Cleaning",
    about: "It's time to clean your apartment.",
    priority: "0",
    deadline: "11. 6. 2023.",
    location: "Home"
},
{
    picture: "../images/coding.jpg",
    taskname: "Learning",
    about: "Practice, practice, practice...",
    priority: "0",
    deadline: "12. 6. 2023.",
    location: "Anywhere"
},
{
    picture: "../images/eating.jpg",
    taskname: "Eat in a restaurant",
    about: "Go out, you deserve it!",
    priority: "0",
    deadline: "12. 6. 2023.",
    location: "Vienna"
},
{
    picture: "../images/meditate.jpg",
    taskname: "Meditate",
    about: "Chill you mind and body",
    priority: "0",
    deadline: "13. 6. 2023.",
    location: "Woods"
},
{
    picture: "../images/painting.jpg",
    taskname: "Painting",
    about: "Time for creativity",
    priority: "0",
    deadline: "14. 6. 2023.",
    location: "Home"
},
{
    picture: "../images/party.jpg",
    taskname: "Party",
    about: "A little party never killed nobody!",
    priority: "0",
    deadline: "15. 6. 2023.",
    location: "O-der Klub"
},
{
    picture: "../images/reading.jpg",
    taskname: "Reading",
    about: "You need this and you love this.",
    priority: "0",
    deadline: "17. 6. 2023.",
    location: "Home"
},
{
    picture: "../images/videocall.jpg",
    taskname: "Family time",
    about: "Call your Family. ♥",
    priority: "0",
    deadline: "11. 6. 2023.",
    location: "Around the world"
},
{
    picture: "../images/walking.jpg",
    taskname: "Walking",
    about: "It's almost the same as doing fitness.",
    priority: "0",
    deadline: "16. 6. 2023.",
    location: "Next to the Danube"
}
];

const cards = document.getElementById("content")
let increase = document.getElementsByClassName("priors");

// cards loop

for (let task of tasks) {
    content.innerHTML += `
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 g-3 shadow p-1 mb-4 bg-body rounded" style="width: 19rem;">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
          <button type="button" class="btn btn-info">Task</button>
          <div class="icons">
            <i class="fa-solid fa-bookmark"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <img src="${task.picture}" class="card-img-top" alt="...">
        
        <div class="card-body">
          <h5 class="card-title text-center">${task.taskname}</h5>
          <p class="card-text text-center">${task.about}</p>
          <hr>
          <p class="card-text">&#10071; Priority: <span class="p-1 rounded ps-2 pe-2 priors cursor-pointer ${getColorClass(task.priority)} hoverover">${task.priority}</span></p>
          <p class="card-text">&#x1F4C5 Deadline: ${task.deadline}</p>
          <p class="card-text"><i class="fa-solid fa-location-dot"></i> Location: ${task.location}</p>
          <hr>
          <div>
            <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button>
            <button class="btn btn-success"><i class="fa-solid fa-check"></i> Done</button>
          </div>
        </div>
      </div>
    `;
  }

  // increase function

for (let i = 0; i < increase.length; i++) {
    increase[i].addEventListener("click", function() {
      if (tasks[i].priority < 5) {
        tasks[i].priority++;
        increase[i].innerHTML = tasks[i].priority;
        increase[i].classList = `p-1 rounded ps-2 pe-2 priors cursor-pointer hoverover ${getColorClass(tasks[i].priority)}`;
      }
    });
  }

  // color changing function

function getColorClass(value) {
    if (value <= 1) {
      return "bg-success";
    } else if (value <= 3) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
  
const sortIcon = document.querySelector("#sortBtn");
sortIcon.addEventListener("click", sortCards);

// sorting function

function sortCards() {
  let sortedCards = Array.from(cards.children).sort((a, b) => {
    let aNumber = parseInt(a.querySelector(".priors").textContent);
    let bNumber = parseInt(b.querySelector(".priors").textContent);
    return aNumber - bNumber;
  });

  sortedCards.forEach((card) => {
    cards.appendChild(card);
  });
}

