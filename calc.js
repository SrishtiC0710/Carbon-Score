var meat;
var egg;
var beef;
var poultry;
var pork;
var cheese;
var milk;
var rice;
var legume;
var carrot;
var potato;
var dishes;
var hand;
var washer;
var electricity;
var water;
var insta;
var tiktok;
var netflix;
var computer;
var work;
var transport;
var car;
var elecCar;
var checkCar = false;
var checkDish = false;
var bike;
var bus;
var walk;
var plane;
var gym;
var trash;
var total = 0;

const result = document.getElementById("result");

//question3
function question3() {
  var select = document.getElementsByClassName("meat");
  for (i = 0; i < select.length; i++) {
    if (select[i].checked) {
      meat = select[i].value;

      if (meat == "beef") {
        window.location.href = "beefq.html";
        // document.getElementById("question").innerHTML = htotal;
      } else if (meat == "egg") {
        window.location.href = "eggq.html";
      } else if (meat == "poultry") {
        window.location.href = "poultry.html";
      } else if (meat == "pork") {
        window.location.href = "porkq.html";
      }
    }
  }
  var selectedMeat;
  if (selectedMeat == null) {
    // If no transport is selected, display an error message
    alert("Please enter a response before submitting.");
  }
}

//egg
function eggQ() {
  let eggQ = document.getElementById("eggq");
  eggQ.addEventListener("submit", function (event) {
    event.preventDefault();
    egg = document.getElementById("eggques").value;
    var eggInt = (parseInt(egg) * 0.89)*52.143;
    console.log(eggInt)
    sessionStorage.setItem("eggNum", eggInt);
  });
  const eggInput = document.getElementById("eggques");
  if (egg.trim() === "") {
    alert("Please enter a response.");
    eggInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("eggques", eggInput.value);
  window.location.href = "beefq.html";
}

//beef
function beefQ() {
  let beefQ = document.getElementById("beefq");
  beefQ.addEventListener("submit", function (event) {
    event.preventDefault();
    beef = document.getElementById("beefques").value;
    var beefInt = (parseInt(beef) * 6.61)*52.143;
    sessionStorage.setItem("beefNum", beefInt);
  });
  const beefInput = document.getElementById("beefques");
  if (beef.trim() === "") {
    alert("Please enter a response.");
    beefInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("beefques", beefInput.value);
  window.location.href = "poultry.html";
}

//poultry
function poultryQ() {
  let poultryQ = document.getElementById("poultryq");
  poultryQ.addEventListener("submit", function (event) {
    event.preventDefault();
    poultry = document.getElementById("poultryques").value;
    var poultryInt = (parseInt(poultry) * 1.26)*52.143;
    sessionStorage.setItem("poultryNum", poultryInt);
  });
  const poultryInput = document.getElementById("poultryques");
  if (poultry.trim() === "") {
    alert("Please enter a response.");
    poultryInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("poultryques", poultryInput.value);
  window.location.href = "porkq.html";
}

//pork
function porkQ() {
  let porkQ = document.getElementById("porkq");
  porkQ.addEventListener("submit", function (event) {
    event.preventDefault();
    pork = document.getElementById("porkques").value;
    var porkInt = (parseInt(pork) * 1.72)*52.143;
    sessionStorage.setItem("porkNum", porkInt);
  });
  const porkInput = document.getElementById("porkques");
  if (pork.trim() === "") {
    alert("Please enter a response.");
    porkInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("porkques", porkInput.value);
  window.location.href = "cheese.html";
}

//cheese
function cheeseQ() {
  let cheeseQ = document.getElementById("cheeseq");
  cheeseQ.addEventListener("submit", function (event) {
    event.preventDefault();
    cheese = document.getElementById("cheeseques").value;
    var cheeseInt = (parseInt(cheese) * 2.45)*52.143;
    sessionStorage.setItem("cheeseNum", cheeseInt);
  });
  const cheeseInput = document.getElementById("cheeseques");
  if (cheese.trim() === "") {
    alert("Please enter a response.");
    cheeseInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("cheeseques", cheeseInput.value);
  window.location.href = "milk.html";
}

//milk
function milkQ() {
  let milkQ = document.getElementById("milkq");
  milkQ.addEventListener("submit", function (event) {
    event.preventDefault();
    milk = document.getElementById("milkques").value;
    var milkInt = (parseInt(milk) * 0.72)*52.143;
    sessionStorage.setItem("milkNum", milkInt);
  });
  const milkInput = document.getElementById("milkques");
  if (milk.trim() === "") {
    alert("Please enter a response.");
    milkInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("milkques", milkInput.value);
  window.location.href = "rice.html";
}

//Rice
function riceQ() {
  let riceQ = document.getElementById("riceq");
  riceQ.addEventListener("submit", function (event) {
    event.preventDefault();
    rice = document.getElementById("riceques").value;
    var riceInt = (parseInt(rice) * 0.16)*52.143;
    sessionStorage.setItem("riceNum", riceInt);
  });
  const riceInput = document.getElementById("riceques");
  if (rice.trim() === "") {
    alert("Please enter a response.");
    riceInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("riceques", riceInput.value);
  window.location.href = "legume.html";
}

//Legume
function legumeQ() {
  let legumeQ = document.getElementById("legumeq");
  legumeQ.addEventListener("submit", function (event) {
    event.preventDefault();
    legume = document.getElementById("legumeques").value;
    var legumeInt = (parseInt(legume) * 0.11)*52.143;
    sessionStorage.setItem("legumeNum", legumeInt);
  });
  const legumeInput = document.getElementById("legumeques");
  if (legume.trim() === "") {
    alert("Please enter a response.");
    legumeInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("legumeques", legumeInput.value);
  window.location.href = "carrot.html";
}

//Carrot
function carrotQ() {
  let carrotQ = document.getElementById("carrotq");
  carrotQ.addEventListener("submit", function (event) {
    event.preventDefault();
    carrot = document.getElementById("carrotques").value;
    var carrotInt = (parseInt(carrot) * 0.07)*52.143;
    sessionStorage.setItem("carrotNum", carrotInt);
  });
  const carrotInput = document.getElementById("carrotques");
  if (carrot.trim() === "") {
    alert("Please enter a response.");
    carrotInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("carrotques", carrotInput.value);
  window.location.href = "potato.html";
}

//Potato
function potatoQ() {
  let potatoQ = document.getElementById("potatoq");
  potatoQ.addEventListener("submit", function (event) {
    event.preventDefault();
    potato = document.getElementById("potatoques").value;
    var potatoInt = (parseInt(potato) * 0.03)*52.143;
    sessionStorage.setItem("potatoNum", potatoInt);
  });
  const potatoInput = document.getElementById("potatoques");
  if (potato.trim() === "") {
    alert("Please enter a response.");
    potatoInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("potatoques", potatoInput.value);
  window.location.href = "handq.html";
}

//question4
// function question4() {
//   var select = document.getElementsByClassName("dishes");
//   for (i = 0; i < select.length; i++) {
//     if (select[i].checked) {
//       dishes = select[i].value;

//       if (dishes == "washer") {
//         checkDish = true;
//         window.location.href = "washerq.html";
//       } else if (dishes == "hand") {
//         checkDish = true;
//         window.location.href = "handq.html";
//       }
//     }
//   }
//   // var select = document.getElementsByClassName("dishes");
//   // var selectedDishes;
//   // if (selectedDishes == null) {
//   //     alert("Please enter a response before submitting.");
//   // }
// }

// hand wash
function handQ() {
  let handQ = document.getElementById("handq");
  handQ.addEventListener("submit", function (event) {
    event.preventDefault();
    hand = document.getElementById("handques").value;
    var handInt = (parseInt(hand) * 8.0)*365;
    console.log(handInt);
    sessionStorage.setItem("handNum", handInt);
  });
  const handInput = document.getElementById("handques");
  if (hand.trim() === "") {
    alert("Please enter a response.");
    handInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("handques", handInput.value);
  window.location.href = "washerq.html";
}

// dishwasher
function washerQ() {
  let washerQ = document.getElementById("washerq");
  washerQ.addEventListener("submit", function (event) {
    event.preventDefault();
    washer = document.getElementById("washerques").value;
    var washerInt = (parseInt(washer) * 1.34)*365;
    sessionStorage.setItem("washerNum", washerInt);
  });
  const washerInput = document.getElementById("washerques");
  if (washer.trim() === "") {
    alert("Please enter a response.");
    washerInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("washerques", washerInput.value);
  window.location.href = "electricity.html";
}


//electricity
function electricityQ() {
  let electricityQ = document.getElementById("electricityq");
  electricityQ.addEventListener("submit", function (event) {
    event.preventDefault();
    electricity = document.getElementById("electricityques").value;
    var electricityInt = (parseInt(electricity) * 0.86)*12;
    sessionStorage.setItem("electricityNum", electricityInt);
  });
  const electricityInput = document.getElementById("electricityques");
  if (electricity.trim() === "") {
    alert("Please enter a response.");
    electricityInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("electricityques", electricityInput.value);
  window.location.href = "water.html";
}

//water
function waterQ() {
  let waterQ = document.getElementById("waterq");
  waterQ.addEventListener("submit", function (event) {
    event.preventDefault();
    water = document.getElementById("waterques").value;
    var waterInt = (parseInt(water) * 0.18)*12;
    sessionStorage.setItem("waterNum", waterInt);
  });
  const waterInput = document.getElementById("waterques");
  if (water.trim() === "") {
    alert("Please enter a response.");
    waterInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("waterques", waterInput.value);
  window.location.href = "insta.html";
}

// //Hair question
// function question7() {
//   var hairInt = 0;

//   let dryer = document.getElementById("dryer");
//   let straightner = document.getElementById("straightner");
//   let curler = document.getElementById("curler");

//   if (dryer.checked) {
//     hairInt += 2.87;
//   }
//   if (straightner.checked) {
//     hairInt += 1.29;
//   }
//   if (curler.checked) {
//     hairInt += 0.1032;
//   }
//   sessionStorage.setItem("hairNum", hairInt);
// }

//insta
function instaQ() {
  let instaQ = document.getElementById("instaq");
  instaQ.addEventListener("submit", function (event) {
    event.preventDefault();
    insta = document.getElementById("instaques").value;
    var instaInt = (parseInt(insta) * 0.00683)*365;
    sessionStorage.setItem("instaNum", instaInt);
  });
  const instaInput = document.getElementById("instaques");
  if (insta.trim() === "") {
    alert("Please enter a response.");
    instaInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("instaques", instaInput.value);
  window.location.href = "tiktok.html";
}

//tiktok
function tiktokQ() {
  let tiktokQ = document.getElementById("tiktokq");
  tiktokQ.addEventListener("submit", function (event) {
    event.preventDefault();
    tiktok = document.getElementById("tiktokques").value;
    var tiktokInt = (parseInt(tiktok) * 0.002833)*365;
    sessionStorage.setItem("tiktokNum", tiktokInt);
  });
  const tiktokInput = document.getElementById("tiktokques");
  if (tiktok.trim() === "") {
    alert("Please enter a response.");
    tiktokInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("tiktokques", tiktokInput.value);
  window.location.href = "netflix.html";
}

//netflix
function netflixQ() {
  let netflixQ = document.getElementById("netflixq");
  netflixQ.addEventListener("submit", function (event) {
    event.preventDefault();
    netflix = document.getElementById("netflixques").value;
    var netflixInt = (parseInt(netflix) * 0.002)*365;
    sessionStorage.setItem("netflixNum", netflixInt);
  });
  const netflixInput = document.getElementById("netflixques");
  if (netflix.trim() === "") {
    alert("Please enter a response.");
    netflixInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("netflixques", netflixInput.value);
  window.location.href = "computer.html";
}

//computer
function computerQ() {
  let computerQ = document.getElementById("computerq");
  computerQ.addEventListener("submit", function (event) {
    event.preventDefault();
    computer = document.getElementById("computerques").value;
    var computerInt = (parseInt(computer) * 0.1934)*365;
    sessionStorage.setItem("computerNum", computerInt);
  });
  const computerInput = document.getElementById("computerques");
  if (computer.trim() === "") {
    alert("Please enter a response.");
    computerInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("computerques", computerInput.value);
  window.location.href = "car.html";
}

//work
// function workQ() {
//   var workInt = 0;
//   var select = document.getElementsByClassName("work");
//   for (i = 0; i < select.length; i++) {
//     if (select[i].checked) {
//       work = select[i].value;

//       if (work == "home") {
//         workInt += 119.35;
//       } else if (work == "office") {
//         workInt += 23.87;
//       }
//     }
//   }
//   sessionStorage.setItem("workNum", workInt);

//   // var selectedWork;
//   // if (selectedWork !== null) {
//   //     alert("Please enter a response before submitting.");
//   // }
// }

// //transport

// function transportQ() {
//   var select = document.getElementsByClassName("transport");
//   for (i = 0; i < select.length; i++) {
//     if (select[i].checked) {
//       transport = select[i].value;

//       if (transport == "car") {
//         checkCar = true;
//         window.location.href = "car.html";
//       } else if (transport == "elecCar") {
//         checkCar = false;
//         window.location.href = "elecCar.html";
//       }
//     }
//   }
//   // var selectedTransport;
//   // if (selectedTransport == null) {
//   //     alert("Please enter a response before submitting.");
//   // }
// }

//car

function carQ() {
  let carQ = document.getElementById("carq");
  carQ.addEventListener("submit", function (event) {
    event.preventDefault();
    car = document.getElementById("carques").value;
    var carInt = (parseInt(car) * 0.77)*365;
    sessionStorage.setItem("carNum", carInt);
  });
  const carInput = document.getElementById("carques");
  if (car.trim() === "") {
    alert("Please enter a response.");
    carInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("carques", carInput.value);
  window.location.href = "elecCar.html";
}

//elecCar
function elecCarQ() {
  let elecCarQ = document.getElementById("elecCarq");
  elecCarQ.addEventListener("submit", function (event) {
    event.preventDefault();
    elecCar = document.getElementById("elecCarques").value;
    var elecCarInt = (parseInt(elecCar) * 0.440925)*365;
    console.log(elecCarInt);
    sessionStorage.setItem("elecCarNum", elecCarInt);
  });
  const elecCarInput = document.getElementById("elecCarques");
  if (elecCar.trim() === "") {
    alert("Please enter a response.");
    elecCarInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("elecCarques", elecCarInput.value);
  window.location.href = "bike.html";
}


//bike

function bikeQ() {
  let bikeQ = document.getElementById("bikeq");
  bikeQ.addEventListener("submit", function (event) {
    event.preventDefault();
    bike = document.getElementById("bikeques").value;
    var bikeInt = (parseInt(bike) * 0.0727525)*365;
    sessionStorage.setItem("bikeNum", bikeInt);
  });
  const bikeInput = document.getElementById("bikeques");
  if (bike.trim() === "") {
    alert("Please enter a response.");
    bikeInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("bikeques", bikeInput.value);
  window.location.href = "walk.html";
}

//walk
function walkQ() {
  let walkQ = document.getElementById("walkq");
  walkQ.addEventListener("submit", function (event) {
    event.preventDefault();
    walk = document.getElementById("walkques").value;
    var walkInt = (parseInt(walk) * 0.13)*365;
    sessionStorage.setItem("walkNum", walkInt);
  });
  const walkInput = document.getElementById("walkques");
  if (walk.trim() === "") {
    alert("Please enter a response.");
    walkInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("walkques", walkInput.value);
  window.location.href = "bus.html";
}

//bus
function busQ() {
  let busQ = document.getElementById("busq");
  busQ.addEventListener("submit", function (event) {
    event.preventDefault();
    bus = document.getElementById("busques").value;
    var busInt = (parseInt(bus) * 0.18)*365;
    sessionStorage.setItem("busNum", busInt);
  });
  const busInput = document.getElementById("busques");
  if (bus.trim() === "") {
    alert("Please enter a response.");
    busInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("busques", busInput.value);
  window.location.href = "planeq.html";
}

//plane
function planeQ() {
  let planeQ = document.getElementById("planeq");
  planeQ.addEventListener("submit", function (event) {
    event.preventDefault();
    plane = document.getElementById("planeques").value;
    var planeInt = parseInt(plane) * 198.416;
    sessionStorage.setItem("planeNum", planeInt);
  });
  const planeInput = document.getElementById("planeques");
  if (plane.trim() === "") {
    alert("Please enter a response.");
    planeInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("planeques", planeInput.value);
  window.location.href = "gym.html";
}

//gym
function gymQ() {
  let gymQ = document.getElementById("gymq");
  gymQ.addEventListener("submit", function (event) {
    event.preventDefault();
    gym = document.getElementById("gymques").value;
    var gymInt = (parseInt(gym) * 0.99)*365;
    sessionStorage.setItem("gymNum", gymInt);
  });
  const gymInput = document.getElementById("gymques");
  if (gym.trim() === "") {
    alert("Please enter a response.");
    gymInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("gymques", gymInput.value);
  window.location.href = "trash.html";
}

//trash
function trashQ() {
  let trashQ = document.getElementById("trashq");
  trashQ.addEventListener("submit", function (event) {
    event.preventDefault();
    trash = document.getElementById("trashques").value;
    var trashInt = (parseInt(trash) * 0.8)*365;
    sessionStorage.setItem("trashNum", trashInt);
  });
  const trashInput = document.getElementById("trashques");
  if (trash.trim() === "") {
    alert("Please enter a response.");
    trashInput.value = "0"; // Reset the input field
    return; // Stop the function here
  }
  sessionStorage.setItem("trashques", trashInput.value);
  window.location.href = "end.html";
}

function trackTotal() {
  let eggNum = sessionStorage.getItem("eggNum");
  let beefNum = sessionStorage.getItem("beefNum");
  let poultryNum = sessionStorage.getItem("poultryNum");
  let porkNum = sessionStorage.getItem("porkNum");
  let cheeseNum = sessionStorage.getItem("cheeseNum");
  let milkNum = sessionStorage.getItem("milkNum");
  let riceNum = sessionStorage.getItem("riceNum");
  let legumeNum = sessionStorage.getItem("legumeNum");
  let carrotNum = sessionStorage.getItem("carrotNum");
  let potatoNum = sessionStorage.getItem("potatoNum");
  let handNum = sessionStorage.getItem("handNum");
  let washerNum = sessionStorage.getItem("washerNum");
  let electricityNum = sessionStorage.getItem("electricityNum");
  let waterNum = sessionStorage.getItem("waterNum");
  let instaNum = sessionStorage.getItem("instaNum");
  let tiktokNum = sessionStorage.getItem("tiktokNum");
  let netflixNum = sessionStorage.getItem("netflixNum");
  let computerNum = sessionStorage.getItem("computerNum");
  let carNum = sessionStorage.getItem("carNum");
  let elecCarNum = sessionStorage.getItem("elecCarNum");
  let bikeNum = sessionStorage.getItem("bikeNum");
  let walkNum = sessionStorage.getItem("walkNum");
  let busNum = sessionStorage.getItem("busNum");
  let planeNum = sessionStorage.getItem("planeNum");
  let gymNum = sessionStorage.getItem("gymNum");
  let trashNum = sessionStorage.getItem("trashNum");



  //changes
  var elements = [
    eggNum,
    beefNum,
    poultryNum,
    porkNum,
    cheeseNum,
    milkNum,
    riceNum,
    legumeNum,
    carrotNum,
    potatoNum,
    handNum,
    washerNum,
    electricityNum,
    waterNum,
    instaNum,
    tiktokNum,
    netflixNum,
    computerNum,
    carNum,
    elecCarNum,
    bikeNum,
    walkNum,
    busNum,
    planeNum,
    gymNum,
    trashNum,
  ];

  for (i = 0; i < elements.length; i++) {
    total += parseFloat(elements[i]);
  }

  for (i = 0; i < elements.length; i++) {
    var elementValue = parseFloat(elements[i]);
    console.log(`Value for element ${i}: ${elementValue}`);

    if (!isNaN(elementValue)) {
      total += elementValue;
    } else {
      console.error(`Invalid value for element ${i}: ${elements[i]}`);
    }
  }
  fetch("https://formspree.io/f/xkndokbo", {
    method: "POST",
    body: JSON.stringify({
      total: total,
      element: elements,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log("Total:", total);
  return total;
}

function endPage() {
  var finalTotal = trackTotal();
  result.innerHTML = finalTotal.toFixed(2) + " lbs of CO2 Annually!";
  var treeTotal = finalTotal / 48;
  treeR.innerHTML = treeTotal.toFixed(0) + " Trees <br>";
}
