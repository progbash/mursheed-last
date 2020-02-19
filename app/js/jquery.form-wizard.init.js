/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Form Wizard
 */

$(function () {
    $("#form-horizontal").not($(".inputs .custom-selectbox")).steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slide",
        
        onStepChanging: function (event, currentIndex, priorIndex) {
            $('.form-control, .select2-container').filter('[required]').each(function () {
                if ($(this).val() === '') {
                    $(this).css("border", "1px solid red");
                }
                else if($(this).length > 0){   
                    $(this).css("border", "1px solid #dfdfdf");
                    return true;
                }
            });
        },
    });
    $("#form-vertical").steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical",
    });
});