import axios from "axios";
//interface é usado para definir uma estrutura de um objeto
// interface Post {
//   userId: number;
//   title: string;
//   body: string;
// }

// const url = "https://jsonplaceholder.typicode.com/posts/1";

// axios.get(url).then((res) => {
//   const post = res.data as Post;

//   const userId = post.userId;
//   const title = post.title;
//   const body = post.body;

//   printPost(userId, title, body);
// });

// //toda vez que vamos passar argumentos para uma função temos que declarar o seu tipo
// const printPost = (userId: number, title: string, body: string) => {
//   console.log(`
//     User ID is ${userId}
//     Tittle of post: ${title}
//     Post Content: ${body}
// `);
// };

// O que é o 2?

// é um numero

// é um valor que tem todas as PROPRIEDADES e MÉTODOS de um número

// Types

// Primitive types

// string
// number
// boolean
// undefined
// null
// symbol
// void

// Object types

// objects
// classes
// functions
// arrays

//O que type significa? Um jeito de dizer quais propriedades e funcoes um valor tem

// const now = new Date();
// // now. //quando vou tentar preencher now. o typescript sabe quais funcoes e metodos now tem
// now.getFullYear();

// const track: {
//   duration: 120;
// };

// class Planet {}

// const earth = new Planet(); //typescript sabe que earth está apontando para um objeto que é do tipo Planet. A variavel earth tem acesso a todos metodos e propriedades de Planet

//Type annotation fala qual tipo o valor tem
//Type inference o sistema que typescript usa para adivinhar qual o tipo

// const age: number =3; //: number, é a type annotation

// let firstName:string = 'John';
// let isMarried: boolean =false;

// let noValue:null =null;
// let notAssiged:undefined = undefined;

// let today: Date = new Date();
