# Testing Practice - The Odin Project 🧪

Este repositorio contiene la solución al proyecto "Testing Practice" del currículum de The Odin Project. El objetivo principal de este proyecto es aplicar la metodología **TDD (Desarrollo Guiado por Pruebas)**, escribiendo las pruebas unitarias antes que la lógica de las funciones.

## 🛠️ Tecnologías y Herramientas

- **JavaScript (ES6+)**: Lógica de programación.
- **Jest**: Framework principal para la ejecución de pruebas.
- **Babel**: Configurado para permitir el uso de sintaxis moderna de módulos (`import`/`export`) dentro del entorno de Jest.
- **pnpm**: Gestor de paquetes.

---

## 🚀 Instalación y Configuración Local

Si deseas clonar y correr este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/testing-practice.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd testing-practice
   ```
3. Instala las dependencias de desarrollo (Jest y Babel):
   ```bash
   pnpm install
   ```

---

## 🏃‍♂️ Ejecución de Pruebas

Para correr la suite completa de pruebas y verificar que todas pasen correctamente, ejecuta el siguiente comando en la terminal:

```bash
pnpm test
```

---

## 🧩 Funciones Evaluadas

El proyecto consta de 5 módulos principales, cada uno con sus respectivos casos de prueba para garantizar su correcto funcionamiento ante diferentes escenarios:

### 1. `capitalize(string)`
Toma una cadena de texto y devuelve la misma cadena con el primer carácter en mayúscula.
- *Pruebas:*
  - Verifica palabras normales y palabras que ya inician con mayúscula.

### 2. `reverseString(string)`
Toma una cadena de texto y la devuelve invertida.
- *Pruebas:*
  - Verifica palabras simples y frases completas que contienen espacios.

### 3. `calculator` (Objeto)
Un objeto que contiene funciones para operaciones matemáticas básicas: `add`, `subtract`, `divide` y `multiply`.
- *Pruebas:*
  - Verifica que las cuatro operaciones aritméticas devuelvan el valor numérico exacto.

### 4. `caesarCipher(string, shift)`
Aplica el Cifrado César clásico. Desplaza cada letra de la cadena original un número específico de lugares en el alfabeto.
- *Pruebas:* 
  - Desplazamiento básico.
  - Retorno cíclico del alfabeto (de la "z" vuelve a la "a").
  - Preservación de mayúsculas y minúsculas originales.
  - Ignora y mantiene intactos los signos de puntuación y espacios.
  
**Ejemplo 1: Cifrado César**
Evaluando que la función respete las mayúsculas/minúsculas y omita los signos de puntuación:

```javascript
test('Cifrado César: ignora puntuación y espacios', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
```

### 5. `analyzeArray(array)`
Toma un arreglo de números y devuelve un objeto con propiedades calculadas.
- *Pruebas:*
  - Verifica que el objeto retorne correctamente el valor promedio (`average`), el valor mínimo (`min`), el valor máximo (`max`) y la longitud del arreglo (`length`).

```javascript
test('Analiza un arreglo de números y devuelve average, min, max, y length', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
```
