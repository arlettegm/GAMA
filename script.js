document.querySelectorAll('.accordion--button').forEach(button =>{
    button.addEventListener('click',() =>{
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion--button--active');

        if(button.classList.contains('accordion--button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + '100px';
        }else{
            accordionContent.style.maxHeight = 0;
        }
    });
});

document.querySelectorAll('.accordion2--button').forEach(button =>{
    button.addEventListener('click',() =>{
        const accordion2Content = button.nextElementSibling;

        button.classList.toggle('accordion2--button--active');

        if(button.classList.contains('accordion2--button--active')){
            accordion2Content.style.maxHeight = accordion2Content.scrollHeight + '100px';
        }else{
            accordion2Content.style.maxHeight = 0;
        }
    });
});

window.addEventListener("DOMContentLoades",function(){

    var form = document.getElementById("my-form");
    var status = document.getElementById("my-form-status");

    function success(){
        form.reset();
        status.innerHTML = "Tu correo ha sido enviado!";

    }
    function error(){
        status.innerHTML = "Uy1 ha habido un error"
    }

    form.addEventListener("enviar",function(ev){
        ev.preventDefault();
        var data = new FormData(form);
    ajax(form.method, form.ariaRoleDescription, data, succes, error);
    });
});



