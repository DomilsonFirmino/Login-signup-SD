const toggleview = document.querySelector('.toggle_view');
const see = document.querySelector('.fas');
const nosee = document.querySelector('.far');
const inputpassword = document.querySelector("#password");

see.addEventListener("click",() =>{
    toggleview.classList.add("active");
    inputpassword.type = "text";       
})
nosee.addEventListener("click",() =>{
    toggleview.classList.remove("active");
    inputpassword.type = "password";       
})