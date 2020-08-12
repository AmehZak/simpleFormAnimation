function animationForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");
   
    arrows.forEach(arrow => {
        arrow.addEventListener("click",() => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
      
            //Validation check
            if(input.type === "text" && validateUser(input)){
                parent.style.animation='';
                nextSlide(parent,nextForm);
            } else if(input.type ==="email" && validateEmail(input)){
                nextSlide(parent,nextForm);
            } else if(input.type ==="password" && validateUser(input)){
                nextSlide(parent,nextForm);
            } else parent.style.animation = "shakeanimation 0.5s ease";
        });
    });
}

function validateUser(user){
    if(user.value.length <6){
        console.log('not enough characters');
        testColors('rgb(189,87,87)');
    }else {
        testColors("rgb(87, 189, 130)");
        return true
    }
}

function validateEmail(email){
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validation.test(email.value)){
        testColors("rgb(87, 189, 130)");
        return true;
    }else testColors('rgb(189,87,87)');
}

function nextSlide(parent , nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function testColors(color){
    document.body.style.backgroundColor = color;
};

animationForm();
console.log('im here');