const menuButton = document.querySelector("header button"); 
const sidebar = document.querySelector("aside"); 
menuButton.addEventListener("click", function() { 
    if (sidebar.style.display === "none") { 
        sidebar.style.display = "block"; } 
    else { 
        sidebar.style.display = "none"; 
    } });
