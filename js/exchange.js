// MetaMask connection (maybe to put after ?)
const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);            
const signer = provider.getSigner()
const userAddress = await signer.getAddress()


// pages navigation
const goToHomePageButton = document.getElementById("goToHomePage");
goToHomePageButton.addEventListener("click", () => {
    window.location.href = "index.html";
});



//---- CHOOSE THE CRYPTOCURRENCY IN AND OUT ----//

// Cryptocurrency in
const dropdownCryptocurrencyInButton = document.querySelector(".dropdownCryptocurrencyIn-button");
const dropdownCryptocurrencyInContent = document.querySelector(".dropdownCryptocurrencyIn-content");

dropdownCryptocurrencyInButton.addEventListener("click", () => {
    dropdownCryptocurrencyInContent.classList.toggle("show"); // Show the menu
});

window.addEventListener("click", (event) => { // Hide the menu
    if (!event.target.matches(".dropdownCryptocurrencyIn-button")) {
        if (dropdownCryptocurrencyInContent.classList.contains("show")) {
            dropdownCryptocurrencyInContent.classList.remove("show");
        }
    }
});

function selectOption1(optionText) { // Modify the button's textContent
    dropdownCryptocurrencyInButton.textContent = optionText;
}

const optionsDropdownCryptocurrencyIn = document.querySelectorAll(".dropdownCryptocurrencyIn-content a");

optionsDropdownCryptocurrencyIn.forEach((option, index) => {
    option.addEventListener("click", () => {
        selectOption1(option.textContent); // Modify the button's textContent when the cryptocurrency is clicked
    });
});

selectOption1(optionsDropdownCryptocurrencyIn[0].textContent); // Display the first cryptocurrency of the list


// Cryptocurrency out
const dropdownCryptocurrencyOutButton = document.querySelector(".dropdownCryptocurrencyOut-button");
const dropdownCryptocurrencyOutContent = document.querySelector(".dropdownCryptocurrencyOut-content");

dropdownCryptocurrencyOutButton.addEventListener("click", () => {
    dropdownCryptocurrencyOutContent.classList.toggle("show"); // Show the menu
});

window.addEventListener("click", (event) => { // Hide the menu
    if (!event.target.matches(".dropdownCryptocurrencyOut-button")) {
        if (dropdownCryptocurrencyOutContent.classList.contains("show")) {
            dropdownCryptocurrencyOutContent.classList.remove("show");
        }
    }
});

function selectOption2(optionText) { // Modify the button's textContent
    dropdownCryptocurrencyOutButton.textContent = optionText;
}

const optionsDropdownCryptocurrencyOut = document.querySelectorAll(".dropdownCryptocurrencyOut-content a");

optionsDropdownCryptocurrencyOut.forEach((option, index) => {
    option.addEventListener("click", () => {
        selectOption2(option.textContent); // Modify the button's textContent when the cryptocurrency is clicked
    });
});

selectOption2(optionsDropdownCryptocurrencyOut[1].textContent); // Display the first cryptocurrency of the list
