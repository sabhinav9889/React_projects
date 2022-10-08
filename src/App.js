import React from "react";
import './App.css';

const pet=[
  {
    name : 'Dolly',
    family : 'Cat',
    image : 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142774.jpg',
    skills : ['sleeping','playing','jumping','dancing','rock'],
  },
  {
    name : 'Sharu',
    family : 'Dog',
    image : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg?crop=0.507xw:1.00xh;0.337xw,0&resize=480:*',
    skills : ['stickgame','jumping','walking','barking','cangivecompaney']
  },
  {
    name : 'Lika',
    family : 'goat',
    image : 'https://media.4-paws.org/0/6/3/0/0630d8405b1935a373c1204b50c2729c7f429202/VIER%20PFOTEN_2019-10-08_065-1930x1335-1920x1328.jpg',
    skills : ['playing','walking','dancing','can_give_hug','jumping']
  }
]
function App() {
  return (
    <div className="App">
      <h1>My pets</h1>
      <ul className="container">
        {
          pet.map((pets,index) => (
            <li key={index}>
              <h1>{pets.name}</h1>
              <h2>{pets.family}</h2>
              <img src={pets.image} alt={pets.name} width='200px' height='200px'></img>
                <ul>{
                pets.skills.map((skl,index)=>(
                  <li key={skl}>{skl}</li>
                ))}
                </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;