import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';


function digital_root(n) {
  if (n < 10){
    return n;
  }
  let sum = n;
  let temp = 0;
  while (sum > 9) {
    let numbers = sum.toString().split('');
    for(let i = 0; i < numbers.length; i++){
      temp += +(numbers[i]);
    }
    sum = temp;
    temp = 0;
  }
  return sum;
}



function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {console.log(digital_root(456))}
    </div>
  );
}

export default App;
