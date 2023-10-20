import React from 'react'
import convertStringToNumber from './Util Functions/convertStringToNumber';
import calculateMean from './Util Functions/calculateMean';
import calculateMedian from './Util Functions/calculateMedian';
import calculateMode from './Util Functions/calculateMode';

interface flavinoidsProps {
  classes: Array<Array<Object>>;
  countOfClasses: number;
}

const Flavinoids = (props: (flavinoidsProps)) => {
  
  //  Calculating Flavinoid values by each class:
  let classesBasedFlavinoids: Array<Array<number>>=[];
  for(let j=1; j<=props.countOfClasses; j++){
    classesBasedFlavinoids[j] = props.classes[j].map((elem: any)=>(convertStringToNumber(elem.Flavanoids)));
  }

  //  Finding Mean, Median & Mode for Flavinoid values:
  let classesBasedFlavinoidsMean=[], classesBasedFlavinoidsMedian=[], classesBasedFlavinoidsMode=[];
  for(let j=1; j<=props.countOfClasses; j++){
    classesBasedFlavinoidsMean[j] = calculateMean(classesBasedFlavinoids[j]);
    classesBasedFlavinoidsMedian[j] = calculateMedian(classesBasedFlavinoids[j]);
    classesBasedFlavinoidsMode[j] = calculateMode(classesBasedFlavinoids[j]);
  }

  return (
    <>
    <h3>Flavinoid Values Table:</h3>
    <table>
      <tr>
        <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th></tr>
      <tr>
      <th>Mean</th>
        {classesBasedFlavinoidsMean.map((elem)=>(
           <td>{elem}</td>
        ))}
      </tr>
      <tr>
      <th>Median</th>
        {classesBasedFlavinoidsMedian.map((elem)=>(
           <td>{elem}</td>
        ))}
      </tr>
      <tr>
      <th>Mode</th>
        {classesBasedFlavinoidsMode.map((elem)=>(
           <td>{elem}</td>
        ))}
      </tr>
    </table>
    </>
  )
}

export default Flavinoids