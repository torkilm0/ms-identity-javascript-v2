// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
// const cardDiv = document.getElementById("card-div");
const centerCardDiv = document.getElementById("center-card-div");
const mailButton = document.getElementById("readMail");
const profileButton = document.getElementById("seeProfile");
const profileFunc = document.getElementById("callFunc");
const profileDiv = document.getElementById("profile-div");
const magicDiv = document.getElementById("magic-id");
const compareButton = document.getElementById("Compare");
const oldMachineInput = document.getElementById("oldMachine");
const newMachineInput = document.getElementById("newMachine");
const topHeader = document.getElementById("topHeader");



function showWelcomeMessage(account) {
    // Reconfiguring DOM elements
    centerCardDiv.style.margin = 'auto';
    centerCardDiv.style.width = '80rem';
    centerCardDiv.style.display = 'initial';
    welcomeDiv.innerHTML = `Welcome ${account.username}`;
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
}

function updateUI(data, endpoint) {
    console.log('Graph API responded at: ' + new Date().toString());

    if (endpoint === graphConfig.graphMeEndpoint) {
        const title = document.createElement('p');
        title.innerHTML = "<strong>Title: </strong>" + data.jobTitle;
        const email = document.createElement('p');
        email.innerHTML = "<strong>Mail: </strong>" + data.mail;
        const phone = document.createElement('p');
        phone.innerHTML = "<strong>Phone: </strong>" + data.businessPhones[0];
        const address = document.createElement('p');
        address.innerHTML = "<strong>Location: </strong>" + data.officeLocation;
        profileDiv.appendChild(title);
        profileDiv.appendChild(email);
        profileDiv.appendChild(phone);
        profileDiv.appendChild(address);

    // } else if (endpoint === graphConfig.graphMailEndpoint) {
    //     if (data.value.length < 1) {
    //         alert("Your mailbox is empty!")
    //     } else {
    //         const tabList = document.getElementById("list-tab");
    //         tabList.innerHTML = ''; // clear tabList at each readMail call
    //         const tabContent = document.getElementById("nav-tabContent");

    //         data.value.map((d, i) => {
    //             // Keeping it simple
    //             if (i < 10) {
    //                 const listItem = document.createElement("a");
    //                 listItem.setAttribute("class", "list-group-item list-group-item-action")
    //                 listItem.setAttribute("id", "list" + i + "list")
    //                 listItem.setAttribute("data-toggle", "list")
    //                 listItem.setAttribute("href", "#list" + i)
    //                 listItem.setAttribute("role", "tab")
    //                 listItem.setAttribute("aria-controls", i)
    //                 listItem.innerHTML = d.subject;
    //                 tabList.appendChild(listItem)

    //                 const contentItem = document.createElement("div");
    //                 contentItem.setAttribute("class", "tab-pane fade")
    //                 contentItem.setAttribute("id", "list" + i)
    //                 contentItem.setAttribute("role", "tabpanel")
    //                 contentItem.setAttribute("aria-labelledby", "list" + i + "list")
    //                 contentItem.innerHTML = "<strong> from: " + d.from.emailAddress.address + "</strong><br><br>" + d.bodyPreview + "...";
    //                 tabContent.appendChild(contentItem);
    //             }
    //         });
    //     }
    // // } else if (endpoint === graphConfig.funcEndpoint) {
    // //     if (data.value.length < 1) {
    // //         alert("Your mailbox is empty!")
    // //     } else {
    // //         const tabList = document.getElementById("list-tab");
    // //         tabList.innerHTML = ''; // clear tabList at each readMail call
    // //         const tabContent = document.getElementById("nav-tabContent");

    // //         data.value.map((d, i) => {
    // //             // Keeping it simple
    // //             if (i < 10) {
    // //                 const listItem = document.createElement("a");
    // //                 listItem.setAttribute("class", "list-group-item list-group-item-action")
    // //                 listItem.setAttribute("id", "list" + i + "list")
    // //                 listItem.setAttribute("data-toggle", "list")
    // //                 listItem.setAttribute("href", "#list" + i)
    // //                 listItem.setAttribute("role", "tab")
    // //                 listItem.setAttribute("aria-controls", i)
    // //                 listItem.innerHTML = d.subject;
    // //                 tabList.appendChild(listItem)

    // //                 const contentItem = document.createElement("div");
    // //                 contentItem.setAttribute("class", "tab-pane fade")
    // //                 contentItem.setAttribute("id", "list" + i)
    // //                 contentItem.setAttribute("role", "tabpanel")
    // //                 contentItem.setAttribute("aria-labelledby", "list" + i + "list")
    // //                 contentItem.innerHTML = "<strong> from: " + d.from.emailAddress.address + "</strong><br><br>" + d.bodyPreview + "...";
    // //                 tabContent.appendChild(contentItem);
    // //             }
    // //         });
    // //     }
    }
}