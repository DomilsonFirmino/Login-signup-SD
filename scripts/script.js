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

//signup

const toggleview2 = document.querySelector('.toggle_view2');
const see2 = toggleview2.children[1];
const nosee2 = toggleview2.children[0];
const inputpassword2 = document.querySelector("#confirm");

see2.addEventListener("click",() =>{
    toggleview2.classList.add("active");
    inputpassword2.type = "text";       
})
nosee2.addEventListener("click",() =>{
    toggleview2.classList.remove("active");
    inputpassword2.type = "password";       
})