// events listener
const btnLogIn = document.getElementById("btnLogIn");
btnLogIn.addEventListener("click", connectMetaMask);


// pages navigation
const goToCryptocurrencyExchange = document.getElementById("goToCryptocurrencyExchange");
goToCryptocurrencyExchange.addEventListener("click", () => {
    window.location.href = "cryptocurrencyExchange.html";
});


// MetaMask connection
async function connectMetaMask() {
    if (typeof window.ethereum !== "undefined") {
        try{
            const response = await window.ethereum.request({ method: "eth_requestAccounts" });
            const userAddress = response[0]
            document.getElementById('btnLogIn').innerHTML = userAddress
            await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{chainId : '0x1'}] });

        } catch(e) {
            document.getElementById('btnLogIn').innerHTML = "Log in"
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);            
        const signer = provider.getSigner()

    } else {
        alert("Meta Mask is not installed");
    }
}