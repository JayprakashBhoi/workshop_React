
//use of Jsx in react
let name = 'Mohan';
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
      {checkevenorodd(5)}                 
      </div>
      <h2>switch</h2>
      <div>
        {checkalfAlphabet("a")}
      </div>
      <h2></h2>

    </div>

  );
}

function checkevenorodd(num) {
  if (num % 2 === 0 ){
    return <div>Even</div>
  }
  else{
    return <div>odd</div>
  }
}
 function checkalfAlphabet(char){
  switch(char)
  {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    return <div>Vowel</div>
    default:
    return <div> Not Vowel</div>

  }
 }
export default Jsx;
 // name export
 