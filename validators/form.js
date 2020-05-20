const { check } = require("express-validator");
exports.contactFormValidator = [
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is Required"),
    check("email")
        .isEmail()
        .withMessage("Must be a valid email address"),
    check("phone")
        .not()
        .isEmpty()
        .withMessage("Phone number is Required"),
    check("service")
        .not()
        .isEmpty()
        .withMessage("Select at least one service"),
    check("userMessage")
        .not()
        .isEmpty()
        .isLength({min: 20})
        .withMessage("Message must be at least 20 Characters long")
];
