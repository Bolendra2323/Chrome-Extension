// Main difference between Const and Let is that Const cannot be re-assigned
//Always Remember---> When we want to render all of the elements of an array out , we first have to loop throughout the array
//and grab each of the items


let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl

const ulEl = document.getElementById("ul-el");
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" //This line will remove the text from the input field after clicking the save input button
    renderLeads();

})

// ******************************************************Final best code***********************************************

function renderLeads() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        // In the below code we have wrapped the leads in an anchor tag <a> inside of a list item <li> so that the links become
        // clickable once it gets saved.Here we have used 'href' attribute to point to the specific URL which is same as the text that we will enter.
        // This code adds a list item with a link to the myLeads[i] element in the list. The <a> tag is used to create a hyperlink to the specified address, 
        //while the < li > tag is used to define a list item.The code sets the target of the link to be "_blank", indicating that the link should open in a new window when clicked.
        //The href attribute is used to specify the address of the link, which in this case is myLeads[i], and the text between the < a > tags is set to myLeads[i], so that the link displays the value of the element in the list.

        // In order to make the below code simple we will be using template string.Benefit of using template string is that we can break the line of code.
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        // Below code is written using template string
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                                    ${myLeads[i]} 
            </a>
         </li>`
    }
    ulEl.innerHTML = listItems
}












// *****************************************************************************************************************************************************************************
// Render the leads in the unordered list using ulEl.textContent

// ******************************************Code*********************************************************

// for (let i = 0; i < myLeads.length; i++) {
//     //ulEl.textContent += myLeads[i] + ' ';
//     ulEl.innerHTML += "<li>" + myLeads[i] + ' ' + "</li>";

// *******************************************************************************************************


// ****************************************Comments*******************************************************

// Lets understand what actually happening in the above line i.e., line no.21

//Firstly we are creating the li element using <li> and </li>
//secondly we are setting up the textContent of that element using myLeads[i]
// Thirdly we are taking this whole expression("<li>" + myLeads[i] + ' ' + "</li>")
// and appending(to add something at the end of the document) with the UlEl

//Here we have used innerHTML  and <li> and </li> so that elements present in myLeads array should come out in list
// Here due to addition of the '+' sign before '=' sign ,the elements present in myLeads array  coming out in list
//Because with the use of only equal '=' we clear out the innerHTML and thus we use '+=' in the line --->ulEl.innerHTML += "<li>" + myLeads[i] + ' ' + "</li>";
// }


// Lets try different method other then innerHTMl for rendering the leads in the unordered list.
// Steps to be followed are same.

// ***********************************Another method of  Code*********************************************************

// for (let i = 0; i < myLeads.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = myLeads[i];
//     ulEl.append(li);
// }

// *******************************************************************************************************************