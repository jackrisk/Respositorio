//let nombres=["Guillermo","Josue","Chino","Arely","Samuel"];

//for(let i =0; i < nombres.lenght; i++);



let nombres=[
    {
        nombre: "Guillermo",
        edad:21,
        sexo:"M"
    },

    {
        nombre: "Josue",
        edad:22,
        sexo:"M"
    },
    {
        nombre: "Chino",
        edad:20,
        sexo:"M"
    },
    {
        nombre: "Arely",
        edad:21,
        sexo:"F"
    },
    {
        nombre: "Samuel",
        edad:21,
        sexo:"M"
    }
]




let hombresJovenes=nombres.filter(persona=>{
    if(persona.sexo=="M" && persona,edad<25)
    {
    
        return persona;

    }
})

//let saludos=nombres.map(persona=>{
    //return persona.nombre;
//})

//let saludos=nombres.map(persona=>{
    //return `Hola ${persona.nombre} tu edad es de ${persona.edad}`;
//})

//let saludos=nombres.map(persona=>{
//return {nombre:persona.nombre,sueldo:3000};
//})


let sueldos=nombres.map(persona=>{
    let sueldo=0;
    if(persona.edad>30)
    {
        sueldo=10000
    }
     return {nombre:persona.nombre,sueldo:sueldo};
    })



    let mujer=nombres.find(persona=>{
        if(persona,sexo=="F")
        {
            return persona.nombre;
        }
    })

    nombres.forEach(persona=>{
        console.log(persona.nombre);
    })

    let hayMayores=nombres.some(persona=>{
        if(persona,edad>50){
            return true;
        }
    })


    let contenedor= document.getElementById("contenedor");
    let input=document.querySelector("#input");
    let botoncito=document.querySelector("#botoncito");

    botoncito.addEventListener("click",()=>{
        contenedor.innerText=input.value;
        contenedor.className="sombreado";
    })

    input.addEventListener("keyup", ()=>
    {
        if(input.value.length>3)
        {
            contenedor.innerText=input.value;
            contenedor.className="exito";
        }
        else
        {
            contenedor.innerText="Texto invalido";
            contenedor.className="fallo";
        }
    })