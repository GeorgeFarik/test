$(document).ready(function () {
    var user = {};
    var date = new Date()
    newdate = date.getHours() + ':' + date.getMinutes();
    $.validator.addMethod('customphone', function (value, element) {
        return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
    }, "Please enter a valid phone number");
    $('.testForm').validate({
        rules: {
            phone: "customphone"
        }
    })
    $('.testForm').submit(function () {
        user.name = $('#name').val();
        user.email = $('#email').val();
        user.phone = $('#phone').val();
        console.log('name: ' + user.name + ' e-mail:' + user.email + ' phone:' + user.phone + ' called at ' + newdate)
        return false;
    });
})