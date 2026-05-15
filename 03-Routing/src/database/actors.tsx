import Actors1 from "../assets/actors/actors1.jpg";
import Actors2 from "../assets/actors/actors2.jpg";
import Actors3 from "../assets/actors/actors3.jpg";
import Actors4 from "../assets/actors/actors4.jpg";
import Actors5 from "../assets/actors/actors5.jpg";

export default function getActors() {
   return [
    { 
      id: 1, 
      name: "Tom Hanks", 
      age: "67", 
      img: Actors1
    },
    { 
      id: 2, 
      name: "Will Smith", 
      age: "54", 
      img: Actors2
    },
    { 
      id: 3, 
      name: "Leonardo DiCaprio", 
      age: "48", 
      img: Actors3
    },
    { 
      id: 4, 
      name: "Robert Downey Jr.", 
      age: "47", 
      img: Actors4
    },
    { 
      id: 5, 
      name: "Morgan Freeman", 
      age: "81", 
      img: Actors5
    }
  ];
}