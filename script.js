function goToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Thank you! We will contact you soon 💚");
this.reset();
});
