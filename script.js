// console.log("stuff");

// var charArr = ["a","b","C","D",1,2,3,4,"!","#","^","&"];
// var userLength = parseInt(prompt("how many chars in your pw?"))
// var finalPassword = "";

// for (let i = 0; i < userLength; i++) {
//     var randomNumber = Math.floor(Math.random()*charArr.length)
//     var randomChar = charArr[randomNumber];
//     console.log('randomChar', randomChar);
//     finalPassword+= randomChar;
//     console.log('finalPassword', finalPassword)
// }

// document.querySelector("#password").textContent = finalPassword
//grabbing "page" divs, to hide and show
var friendForm = document.querySelector(".newForm")
var allPeopleDiv = document.querySelector(".cards")
var cardBox = document.querySelector('.cardBox');

friendForm.style.display = "none";

//show friend form hide friend cards
document.querySelector("#addFriendBtn").addEventListener("click", function () {
    friendForm.style.display = "block";
    allPeopleDiv.style.display = "none";
})

//show friend cards hide form
document.querySelector("#showFriendsBtn").addEventListener("click", function () {
    friendForm.style.display = "none";
    allPeopleDiv.style.display = "block";
})

//takes a friend obj, will generate card
function generateCard(friend) {

    //create element
    var myCard = document.createElement("div");
    //add content and styling
    myCard.setAttribute("class", "card");
    myCard.style.backgroundColor=friend.favColor;

    //creating element
    var nameH3 = document.createElement("h3");
    //add contnent/styling
    nameH3.textContent = friend.name;

    //creating element
    var colorH3 = document.createElement("h3");
    //add contnent/styling
    colorH3.textContent = friend.favColor;

    //creating element
    var hobbiesH4 = document.createElement("h4");
    //add contnent/styling
    hobbiesH4.textContent = "hobbies";
    //creating element

    var hobbiesUl = document.createElement("ul");

    var firstHobbyLi = document.createElement('li');
    firstHobbyLi.textContent = friend.hobbies[0];

    var secondHobbyLi = document.createElement('li');
    secondHobbyLi.textContent = friend.hobbies[1];

    var thirdHobbyLi = document.createElement('li');
    thirdHobbyLi.textContent = friend.hobbies[2];

    hobbiesUl.append(firstHobbyLi, secondHobbyLi, thirdHobbyLi)
    myCard.append(nameH3, colorH3, hobbiesH4, hobbiesUl);
    cardBox.append(myCard);
}

//starting friends
var friendsArray = [{
    name:"Joe",
    favColor:"salmon",
    hobbies:["javaScript","video games","kittens"]
},{
    name:"Joanna",
    favColor:"olive",
    hobbies:["biking","my dog","coding"]
},{
    name:"Shiva",
    favColor:"orange",
    hobbies:["biting my sister","falling down","stealing food"]
}]

//populate initial cards onto screen
for (let i = 0; i < friendsArray.length; i++) {
    var currentFriend = friendsArray[i];
    generateCard(currentFriend)
}

var newFriendForm =document.querySelector("#newFriendForm");
//when form submitted, clear fields, build new friend card, and show all the cards
newFriendForm.addEventListener("submit",function(event){
    event.preventDefault();
    var newFriendObj = {
        name:document.querySelector("#newFriendName").value,
        favColor:document.querySelector("#newFriendColor").value,
        hobbies:[document.querySelector("#newFriendHobbyOne").value,document.querySelector("#newFriendHobbyTwo").value,document.querySelector("#newFriendHobbyThree").value]
    }
    console.log(newFriendObj);
    generateCard(newFriendObj);
    //clearing out form inputs
    document.querySelector("#newFriendName").value = "";
    document.querySelector("#newFriendColor").value = "";
    document.querySelector("#newFriendHobbyOne").value = "";
    document.querySelector("#newFriendHobbyTwo").value = "";
    document.querySelector("#newFriendHobbyThree").value = "";
    friendForm.style.display = "none";
    allPeopleDiv.style.display = "block";
})
