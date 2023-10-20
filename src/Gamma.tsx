import React from 'react'
import convertStringToNumber from './Util Functions/convertStringToNumber';
import calculateMean from './Util Functions/calculateMean';
import calculateMedian from './Util Functions/calculateMedian';
import calculateMode from './Util Functions/calculateMode';

interface gammaProps {
  classes: Array<Array<Object>>;
  countOfClasses: number;
}

const Gamma = (props: (gammaProps)) => {
  
  //  Calculating Gamma values by each class:
  let classesBasedGamma: Array<Array<number>>=[];
  for(let j=1; j<=props.countOfClasses; j++){
    classesBasedGamma[j] = props.classes[j].map((elem: any)=>((convertStringToNumber((elem.Ash*elem.Hue)/(elem.Magnesium)))));
  }

  //  Finding Mean, Median & Mode for Gamma values:
  let classesBasedGammaMean=[], classesBasedGammaMedian=[], classesBasedGammaMode=[];
  for(let j=1; j<=props.countOfClasses; j++){
    classesBasedGammaMean[j] = calculateMean(classesBasedGamma[j]);
    classesBasedGammaMedian[j] = calculateMedian(classesBasedGamma[j]);
    classesBasedGammaMode[j] = calculateMode(classesBasedGamma[j]);
  }
  
  return (
    <>
    <h3>Gamma Values Table:</h3>
    <table>
      <tr>
        <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th></tr>
      <tr>
      <th>Mean</th>
        {classesBasedGammaMean.map((elem)=>(
           <td>{elem}</td>
        ))}
      </tr>
      <tr>
      <th>Median</th>
        {classesBasedGammaMedian.map((elem)=>(
           <td>{elem}</td>
        ))}
      </tr>
      <tr>
      <th>Mode</th>
        {classesBasedGammaMode.map((elem)=>(
           <td>{elem}</td>
        ))}
      </tr>
    </table>
    </>
  )
}

export default Gamma