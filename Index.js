// alert("ya vamos")

//var personas = [["Jack", "sandra" ], ["Jessy", "Vicky"], ["Jesus", "Luis"],["Gerardo", "Jose"]176];


//var personas ={
   // "nombres": "Jack",
    //"Apellido": "Avalos"
//}

//var personas ={
    //nombres: "Jack",
     //Apellido: "Avalos",
     //edad:22,
     //correo:"avalosjacqueline5@gmail.com"
 //}

 //class miClase{
    //constructor(nombre,apellido){
      //  this.nombre=nombre;
        //this.apellido=apellido;
    //}
 //}

 //function laPersona(nombre,apellido){
//this.nombre=nombre;
//this.apellido.apellido;
 //}
 

 //var elJack= new miClase("Jack","Avalos");
// var eljacky = new laPersona("Javier", "Miramontes");

 //let variable={
   // nombre:"asus",
    //ram:"8gb"
 //}

 //let nombre=variable.nombre;
 //let ram=variable.ram;

 //let frase= `Mi computadora ${variable.nombre} tiene ${variable.ram} de ram`;

//_______________________________________________


var alumnos=[
    {nombre:"Samuel",
    edad:21,
    calificaciones:[1,2,3]
},
{nombre:"Jack",
    edad:24
},
{nombre:"Jose",
    edad:23
},

]

var articulos=[
    {nombre:"Bici",cost: 3000},
    {nombre:"tv",cost: 3500},
    {nombre:"libro",cost: 200},
    {nombre:"celular",cost: 70000},
    {nombre:"laptop",cost: 4050},
    {nombre:"teclado",cost: 3050},
    {nombre:"mota",cost: 60},
];


var articulosCaros=articulos.filter((valor)=>{
    if(valor.cost>2000)
    return valor;
}
)

var articulosDescuento=articulos.map((articulo)=>{
    return {nombre:articulo.nombre,cost:articulo.cost*0.8};
})


//articulos.forEach((valor)=>{
    //console.log(valor.nombre);
//}
//)

//var numeros=[
  
//723,14,56,67
//]








//________________________

//function escribir(laFuncion) {
    //return laFuncion();
//}


//function escribir() {
  //  return laFuncion();
//}




//_____formas de hacer la misma variable______

//function laFuncion(variabl1){
  //  return variabl1*2;
//}

//(variabl1)=>{return variabl1*2}

//variabl1=>{return variabl1*2}

//variabl1=>variabl1*2;

//()=>variabl1*2;