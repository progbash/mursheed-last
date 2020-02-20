// $(function () {
//     $("#form-horizontal").not($(".inputs .custom-selectbox")).steps({
//         headerTag: "h3",
//         bodyTag: "fieldset",
//         transitionEffect: "slide",

//         onStepChanging: function (event, currentIndex, priorIndex) {
//             $('.form-control, .select2-container').filter('[required]').each(function () {
//                 if ($(this).val() === '') {
//                     $(this).css("border", "1px solid red");
//                     return false;
//                     // $("#form-horizontal").steps("next",{});
//                 }
//                 else if($(this).length > 0){   
//                     $(this).css("border", "1px solid #dfdfdf");
//                     return true;
//                 }
//             });
//         },
//     });
//     $("#form-vertical").steps({
//         headerTag: "h3",
//         bodyTag: "fieldset",
//         transitionEffect: "slideLeft",
//         stepsOrientation: "vertical",
//     });
// });


// $(function () {
//     $("#form-horizontal").validate({
//         errorPlacement: function errorPlacement(error, element) {
//             element.before(error);
//         },
//         rules: {
//             confirm: {
//                 equalTo: "#password"
//             }
//         }
//     });

//     $("#form-horizontal").not($(".inputs .custom-selectbox")).steps({
//         headerTag: "h3",
//         bodyTag: "fieldset",
//         transitionEffect: "slide",

//         onStepChanging: function (event, currentIndex, newIndex) {
//             $("#form-horizontal").validate().settings.ignore = ":disabled,:hidden";
//             return $("#form-horizontal").valid();
//         },

//         onFinishing: function (event, currentIndex) {
//             $("#form-horizontal").validate().settings.ignore = ":disabled";
//             return $("#form-horizontal").valid();
//         },

//         onFinished: function (event, currentIndex) {
//             alert("Submitted!");
//         }
//     });

//     $("#form-vertical").steps({
//         headerTag: "h3",
//         bodyTag: "fieldset",
//         transitionEffect: "slideLeft",
//         stepsOrientation: "vertical",
//     });
// })


var form = $("#form-horizontal");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password"
        }
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