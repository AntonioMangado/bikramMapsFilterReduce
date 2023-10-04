//RESUELVE LOS EJERCICIOS AQUI

//EJERCICIO 1
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => numbers.map(n => n ** n);


//EJERCICIO 2
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let pais = ""
const result2 = foodList.map(function pickName(food) {
    if (food == "Pizza") {
        pais = "Italia"
        return `Como soy de ${pais}, amo comer ${food}`
    } 

    else if (food == "Ramen") {
        pais = "Japón"
        return `Como soy de ${pais}, amo comer ${food}`
    } 
    
    else if (food == "Paella") {
        pais = "Valencia"
        return `Como soy de ${pais}, amo comer ${food}`
    } 
    
    else {
        return `Aunque no como carne, el Entrecot es sabroso`
    }
})


//EJERCICIO 3
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

function recogerDatos(user) {
    return `${user.name} es ${user.role} y le gusta ${user.hobbies[0]} y ${user.hobbies[1]}`
}

const result3 = staff.map(recogerDatos)



//EJERCICIO 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 > 0);


//EJERCICIO 5
const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const filteredArr = foodList2.filter(dish => dish.isVeggie == true)
const result5 = filteredArr.map(food => {
    if (food.name == "Tempeh") {
        return `Que rico ${food.name} me voy a comer!`
    } else {
        return `Que rica ${food.name} me voy a comer!`
    }
})


//EJERCICIO 6
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
];


let over300items = inventory.filter(item => item.price > 300);
let result6 = over300items.map(i => i.name);



//EJERCICIO 7 - REDUCE
let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((acumulador, actual) => acumulador * actual);


//EJERCICIO 8

const sentenceElements = [
    'Me',
    'llamo',
    "Julia",
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

let result8 = sentenceElements.reduce((acumulador, actual) => acumulador + " " + actual, "")
result8 = result8.trim();


//EJERCICIO 9
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
];

let arrayFiltrado = books.filter(book => book.category == "code")
let arrayPrecios = arrayFiltrado.map(b => b.price)
let result9 = arrayPrecios.reduce((acumulador, actual) => acumulador + actual)