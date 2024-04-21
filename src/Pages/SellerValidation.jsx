// SellerValidation.jsx

import React from 'react';

const SellerValidation = () => {
    const validateSeller = (values) => {
        console.log("Values from formdata >>>", values);
        const errors = {};

        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
        const password_pattern = /^\S{8,}$/;
        const phoneNumber_pattern = /^\d{10}$/;

        if (values.sellerName === "") {
            errors.sellerName = "Please Enter Username.";
            console.log("error >>", errors.sellerName);
        }

        if (!email_pattern.test(values.sellerEmail)) {
            errors.sellerEmail = "Enter a valid email Address.";
            console.log("error >>", errors.sellerEmail);
        }

        if (!password_pattern.test(values.sellerPassword)) {
            errors.sellerPassword = "The password must contain 8 characters";
            console.log("error >>", errors.sellerPassword);
        }

        if (!phoneNumber_pattern.test(values.sellerPhoneNumber)) {
            errors.sellerPhoneNumber = "Enter a valid phone number";
            console.log("error >>", errors.sellerPhoneNumber);
        }

        return errors;
    };

    const validateSeller2 = (values) => {
        console.log("Values from formdata >>>", values);


        const errors = {};

        //Validating Description


        const minLength = 50; // Minimum character length for the description
        const maxLength = 500; // Maximum character length for the description
        const description = values.storeDescription;
        if (!description) {
            errors.storeDescription = "Store description is required.";
            console.log("Error>>>",errors.storeDescription);
        } else if (description.length < minLength) {
            errors.storeDescription = `Description must be at least ${minLength} characters long.`;
            console.log("Error>>>",errors.storeDescription);
        } else if (description.length > maxLength) {
            errors.storeDescription = `Description cannot exceed ${maxLength} characters.`;
            console.log("Error>>>",errors.storeDescription);
        }

        //Store Name validation

        const name = values.storeName;
        if (!name) {
            errors.storeName = "Store name is required.";
            console.log("Error>>>",errors.storeName);
        } else if (name.length < 5) {
            errors.storeName = `Name must be at least 5 characters long.`;
            console.log("Error>>>",errors.storeName);
        } else if (name.length > 50) {
            errors.storeName = `Name cannot exceed 50 characters.`;
            console.log("Error>>>",errors.storeName);
        }
        


        //validating address
        const address = values.storeAddress;
        if (!address) {
            errors.storeAddress = "Store address is required.";
            console.log("Error>>>",errors.storeAddress);
        } else if (address.length < 5) {
            errors.storeAddress = `Address must be at least 5 characters long.`;
            console.log("Error>>>",errors.storeAddress);
        } else if (address.length > 200) {
            errors.storeAddress = `Address cannot exceed 200 characters.`;
            console.log("Error>>>",errors.storeAddress);
        }

        
        //UPI Validation
        const upiId = values.paymentInfo
        if (!upiId) {
            errors.paymentInfo = "UPI ID is required.";
            console.log("Error>>>",errors.paymentInfo);
        } else if (upiId.length < 8) {
            errors.paymentInfo = `UPI ID must be at least 8 characters long.`;
            console.log("Error>>>",errors.paymentInfo);
        } else if (upiId.length > 50) {
            errors.paymentInfo = `UPI ID cannot exceed 50 characters.`;
            console.log("Error>>>",errors.paymentInfo);
        } else if (!/^[\w.-]+@[\w.-]+$/.test(upiId)) {
            errors.paymentInfo = "Invalid UPI ID format.";
            console.log("Error>>>",errors.paymentInfo);
        }

        

        return errors;
    };

    return { validateSeller, validateSeller2 };
};

export default SellerValidation;
