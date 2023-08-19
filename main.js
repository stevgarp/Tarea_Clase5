document.querySelector("#IMC").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);
    
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = calcularIMC(peso, altura);
        if (imc < 18.5) {
            document.querySelector("#resultado").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
            document.querySelector("#resultadotxt").textContent = `Bajo de peso`;
        }else if (imc >= 18.5 && imc <= 24.9) {
            document.querySelector("#resultado").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
            document.querySelector("#resultadotxt").textContent = `Tu peso es normal`;
            
        }else if (imc >= 25 && imc <= 29.9) {
            document.querySelector("#resultado").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
            document.querySelector("#resultadotxt").textContent = `Tienes Sobrepeso`;
        }else if (imc >= 30) {
            document.querySelector("#resultado").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
            document.querySelector("#resultadotxt").textContent = `Estás en Obesidad`;
        }
    } else {
        document.querySelector("#resultado").textContent = "Ingresa valores válidos";
    }
});

const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
}


//Ejercicio #2
//numero de likes
const like = document.querySelector("#n-likes");
const btnLike = document.querySelector("#btn-like");
let n_like;

btnLike.addEventListener("click", () => {
    n_like = parseInt(like.value);
    likes(n_like);
});  

const likes = (n_like) => {
    let result = "";
    if (n_like < 1000) {
        result = `Tus likes son : ${n_like}`;
    } else if (n_like >= 1000 && n_like < 1000000) {
        result = `Tus likes son : ${Math.floor(n_like / 1000)}K`;
    } else if (n_like >= 1000000) {
        result = `Tus likes son : ${Math.floor(n_like / 1000000)}M`;    
    }
    
    document.querySelector("#resultadolikes").textContent = result;
};

//ejericio #3
//contraseña valida
const btnIngresar = document.querySelector("#ingresar");
const pass = document.querySelector("#password");
const msg = document.querySelector("#message");
const UppercaseRegex = /[A-Z]/;

btnIngresar.addEventListener("click", () => {
    validarPass(pass.value);
}); 

const validarPass = (passw) => {
    if (passw.Math(UppercaseRegex)) {
        msg.textContent = "";
    } else {
        msg.textContent = "Contraseña debe contener solo mayusculas";
    }
}


//Ejercicio #4
//calculo impuestos
const btnCalcular = document.querySelector("#btn-calcular");
const edad = document.querySelector("#edad");
const ingresos = document.querySelector("#ingresos");

btnCalcular.addEventListener("click", () => {
    calcularImpuestos(parseInt(edad.value), parseInt(ingresos.value));
});

const calcularImpuestos = (edad, ingresos) => {
    if (edad >= 18 && ingresos >= 1000) {
        return document.querySelector("#result").textContent = `El resultado es ${ingresos * 0.4}`;            
    } else {
        return document.querySelector("#result").textContent = `El resultado es ${0}`;
    }
};

// Ejercicio 5: Imprimir un arreglo
const imprimirArreglo = (...items) => {
    const ul = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
};

// Ejercicio 6: Numero de caracteres
const numeroDeCaracteres = (string, caracter) => {
    let count = 0;
    for (const char of string) {
        if (char === caracter) {
            count++;
        }
    }
    return count;
};

// Ejercicio 7: Sumar Arreglo
const sumarArreglo = arreglo => {
    return arreglo.reduce((total, num) => total + num, 0);
};

// Ejercicio 8: Multiplicar Arreglo
const multiplicarArreglo = arreglo => {
    return arreglo.reduce((total, num) => total * num, 1);
};

// Ejercicio 9: Sumar arreglo entre rango
const sumarArregloEnRango = (arreglo, inicio, fin) => {
    return arreglo.slice(inicio, fin + 1).reduce((total, num) => total + num, 0);
};

// Ejercicio 10: Encontrar el número máximo de un elemento de un arreglo
const max = arreglo => {
    let maxNumber = arreglo[0];
    for (const num of arreglo) {
        if (num > maxNumber) {
            maxNumber = num;
        }
    }
    return maxNumber;
};