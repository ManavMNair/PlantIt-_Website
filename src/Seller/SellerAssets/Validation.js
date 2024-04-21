export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === ""){
        errors.name = "Please Enter Username."
    }

    if (!email_pattern.test(values.email)){
        errors.email = "Enter a valid email Address."
    }
    if (!password_pattern.test(values.password)){
        errors.password = "The password must contain at least one digit, one lowercase letter, one uppercase letter, consist of alphanumeric characters only (both lowercase and uppercase letters, as well as digits), and be at least 8 characters long."

    }
    return errors;
}