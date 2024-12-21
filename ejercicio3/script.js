function hasValidLength(contrasena) {
    return contrasena.length >= 8;
}

function hasOneNumber(contrasena) {
    const stringAsArray = contrasena.split("");
    let hasNumber = false;

    for (let i = 0; i < 10; i++) {
        if (stringAsArray.includes(`${i}`) === true) {
            hasNumber = true;
            break;
        }
    }

    return hasNumber;
}

// It means that the password has at least one uppercase or one lowercase but is never all uppercase or all lowercase.
function hasMixedCase(contrasena) {
    const hasOneUppercase = !(contrasena === contrasena.toLowerCase());
    const hasOneLowercase = !(contrasena === contrasena.toUpperCase());

    return hasOneLowercase && hasOneUppercase;
}

function validarContrasena(contrasena) {
    if (
        hasValidLength(contrasena) &&
        hasOneNumber(contrasena) &&
        hasMixedCase(contrasena)
    ) {
        return true;
    }

    return false;
}

const contrasena = "Passw0rd!";

console.log(validarContrasena(contrasena));
