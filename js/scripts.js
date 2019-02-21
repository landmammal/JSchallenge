// 1: Set the text of the <h1> element
const title = document.querySelector('h1');
title.textContent = "Bucket List";

// 2: Set the color of the <h1> to a different color
title.style.color = 'purple';


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
let content = document.querySelector('.desc');
content.innerHTML = "Welcome to my must <b>bucket list.</b>"


// 4: Set the class of the <ul> to 'list'
const bucketList = document.querySelector('ul');
bucketList.setAttribute("class", "list");

// 5: Create a new list item and add it to the <ul>
const bucketWish = document.createElement("li");
bucketWish.innerHTML = "<input> Read";
bucketList.appendChild(bucketWish);


// 6: Change all <input> elements from text fields to checkboxes


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
