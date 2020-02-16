$(document).ready(function () {
    $('.select2MultipleDropDown').select2();
    $('.select2DropDownCountry').select2();
    $('.select2MultipleDropDownLang').select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Language'
        }
    });
    $('.select2MultipleDropDownRoom').select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Room'
        }
    });
});
