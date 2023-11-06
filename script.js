$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
var contactMe = document.getElementById('contactMe');
$("#contactMe").submit((e)=>{
    e.preventDefault()
    // Serialize the form data as an array
    var formData = $("#contactMe").serializeArray();

    // Create an object to hold the JSON data
    var jsonData = {};

    // Iterate through the form data and build the JSON object
    formData.forEach(function (field) {
        jsonData[field.name] = field.value;
    });

    // Send the JSON data in the request body
    $.ajax({
        url: "http://localhost:8080/send-msg",
        data: JSON.stringify(jsonData),
        contentType: "application/json; charset=utf-8",
        method: "POST",
        success: function (response) {
            alert("Hi, your message has been delivered successfully.");
            $("#contactMe")[0].reset();
        },
        error: function (err) {
            alert("Something went wrong.");
        }
    });
    
})
var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var subjectInput = document.getElementById('subjectInput').value;
var messageInput = document.getElementById('messageInput').value;

function validateName(){
    if(document.getElementById("nameInput").value.length <3){
        document.getElementById("error_msg").innerHTML='Name should be more than 3 letters';
        return false;
    } else{
        document.getElementById("error_msg").innerHTML='';
        return true;
    }
}

function validateEmail(){
    if(document.getElementById("emailInput").value.match(validEmail)){
        document.getElementById("error_msg").innerHTML='';
        return true;
    } else{
        document.getElementById("error_msg").innerHTML='Enter a valid email';
        return false;
    }
}

function validateSubject(){
    if(document.getElementById("subjectInput").value.length ==0){
        document.getElementById("error_msg").innerHTML='Subject field cannot be empty';
        return false;
    } else{
        document.getElementById("error_msg").innerHTML='';
        return true;
    }
}

function validateMessage(){
    if(document.getElementById("messageInput").value.length >60){
        document.getElementById("error_msg").innerHTML='';
        return true;
    } else{
        document.getElementById("error_msg").innerHTML='Messages should be more than 60 letters';
        return false;
    }
}

function validate(){

    if(validateName() == false || validateEmail() == false || validateSubject() == false || validateMessage() == false){
        document.getElementById("error_msg").innerHTML='You doesnot meet the criteria. Please enter all the details';
        return false;
    }else {
        alert("Processing Started.. Please wait until the system says a success message.");
        return true;
        //document.contactMe.submit();
    }
}

var dateobj = new Date();
var year = dateobj.getFullYear();
document.getElementById("currentYear").innerHTML=year;