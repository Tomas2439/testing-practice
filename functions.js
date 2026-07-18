export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};

export function caesarCipher(str, shift) {
    // Nos aseguramos de que el shift esté siempre dentro de los 26 caracteres (por si pasan un número enorme)
    const shiftAmount = shift % 26;

    return str.split('').map(char => {
        const code = char.charCodeAt(0);

        // Letras minúsculas (a-z) -> Códigos ASCII del 97 al 122
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shiftAmount + 26) % 26) + 97);
        }
        // Letras mayúsculas (A-Z) -> Códigos ASCII del 65 al 90
        else if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shiftAmount + 26) % 26) + 65);
        }

        // Si no es una letra (puntuación, espacios), devolver sin cambios
        return char;
    }).join('');
}

export function analyzeArray(arr) {
    if (!arr || arr.length === 0) return null;

    const length = arr.length;
    // Usamos el operador spread (...) para pasar el array como argumentos individuales a Math.min/max
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    // Reducimos el array a un solo número sumando todo, luego dividimos por el largo
    const average = arr.reduce((acc, curr) => acc + curr, 0) / length;

    return { average, min, max, length };
}