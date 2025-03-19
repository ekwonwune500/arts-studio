/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

// Admin Details
const adminName = document.getElementById('adminName');
const adminPsw = document.getElementById("adminPass");
const adminCheck = "admin";

const adminLog = document.getElementById("adminLogin")
adminLog.addEventListener("click", adminLogin);

// admin login 
function adminLogin(){
    if(adminName.value == "admin" && adminPsw.value == "admin"){
        window.open('../admin/dashboard.html','_self');
    }
    else{
        alert("Incorrect Username or Password!!!");
        adminPsw.value = "";
        adminName.value = "";
    }
}