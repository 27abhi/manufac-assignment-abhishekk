import './App.css';
import WineDataJson from './WineData';
import Flavinoids from './Flavinoids';
import Gamma from './Gamma';

function App() {
  
  const jsonData = WineDataJson;                      //  Fetching data from Json file           
  
  //  Calculating number of unique classes in Json Data for alcohol:
  const alcoData = jsonData.map((elem)=>(elem.Alcohol));
  let countOfClasses: number=0;
  let alcoDataLength=alcoData.length;
  for(let i=1; i<=alcoDataLength; i++){
    if(alcoData.includes(i)){
      countOfClasses=countOfClasses+1;
    }
  }

  //  Arranging data as per classes:
  let classes: Array<Array<Object>> = [];
  for(let j=1; j<=countOfClasses; j++){
    classes[j] = jsonData.filter((elem)=>(elem.Alcohol==j));
  }
  
  return (
  <>
    <h3><u>Assignment for ManufacAnalytics by Abhishek Kumar</u></h3>
    
      <Flavinoids classes={classes} countOfClasses={countOfClasses}></Flavinoids>
      <Gamma classes={classes} countOfClasses={countOfClasses}></Gamma>
    
      <h4>NOTE:</h4>
      <li>The table is dynamic in nature, the number of rows and columns depends on that in JSON data and it will change if more data is added in JSON.</li>
      <li>All utility functions are placed in util folder.</li>
      <li>Javascript features used: For-loop, ForEach, Map, Filter</li><br/><br/>
  </>
  );
}

export default App;
