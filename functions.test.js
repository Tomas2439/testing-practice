import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} from './functions';

// 1. capitalize
test('Capitaliza la primera letra de una palabra', () => {
    expect(capitalize('odin')).toBe('Odin');
});

test('Funciona con palabras que ya están en mayúscula', () => {
    expect(capitalize('PROYECTO')).toBe('PROYECTO');
});

// 2. reverseString
test('Invierte una cadena de texto', () => {
    expect(reverseString('javascript')).toBe('tpircsavaj');
});

test('Invierte frases completas con espacios', () => {
    expect(reverseString('hola mundo')).toBe('odnum aloh');
});

// 3. calculator
test('Calculadora: suma correcta', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('Calculadora: resta correcta', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
});

test('Calculadora: división correcta', () => {
    expect(calculator.divide(20, 5)).toBe(4);
});

test('Calculadora: multiplicación correcta', () => {
    expect(calculator.multiply(3, 7)).toBe(21);
});

// 4. caesarCipher
test('Cifrado César: desplazamiento simple', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('Cifrado César: vuelve de la z a la a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Cifrado César: preserva las mayúsculas y minúsculas', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Cifrado César: ignora puntuación y espacios', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// 5. analyzeArray
test('Analiza un arreglo de números y devuelve un objeto con average, min, max, y length', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});