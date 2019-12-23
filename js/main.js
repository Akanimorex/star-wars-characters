let app = document.getElementById('root');
// let name = document.querySelector('.name');
let container = document.querySelector('.container');
const url = 'https://swapi.co/api/people/?format=json';

fetch(url)
.then((response)=> response.json())
.then((data)=>{ 

  
for(let t of data.results){

  console.log(t);

  let card = document.createElement('div');
  card.setAttribute('class', 'my-card');

  let h2 = document.createElement('h2');
  h2.setAttribute('class', 'name');
  h2.textContent = `Name: ${t.name}`;

  let pOne = document.createElement('p');
  pOne.setAttribute('class','sex');
  pOne.textContent=`sex: ${t.gender}`;


  let pTwo = document.createElement('p');
  pTwo.setAttribute('class','color-eye');
	pTwo.textContent=`eye color: ${t.eye_color}`;
	

	let pThree = document.createElement('p');
  pThree.setAttribute('class','mass');
  pThree.textContent=`mass: ${t.mass} kilogrammes `;
  

  card.appendChild(h2);
  card.appendChild(pOne);
	card.appendChild(pTwo);
	card.appendChild(pThree);
  container.appendChild(card);

  


}
   
}
)

app.appendChild(container)


  