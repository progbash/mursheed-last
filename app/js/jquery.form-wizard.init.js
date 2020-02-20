var form = $(".form-horizontal");
form.validate({
    errorPlacement: function errorPlacement(error, element) { 
        if(element.hasClass('select2') && element.next('.select2-container').length) {
            error.insertAfter(element.next('.select2-container'));
        }
        else if(element.hasClass('passwordInput')){
            error.insertAfter(element.next('.view'));
        }
        else if(element.hasClass("confirmPasswordInput")){
            error.insertAfter(element.next('.view_confrim'));
        }
        else{
            element.after(error);
        }
    },
    rules: {
        confirm: {
            equalTo: "#password"
        },
    }
});

form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});