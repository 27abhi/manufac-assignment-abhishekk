import React from 'react'

const calculateMedian = (arr: Array<number>) => {
    const middle = (arr.length + 1) / 2; 
      
    // Avoid mutating when sorting 
    const sorted = [...arr].sort((a, b) => a - b); 
    const isEven = sorted.length % 2 === 0; 
  
    return (isEven ? (sorted[middle - 1.5] 
        + sorted[middle - 0.5]) / 2 : 
        sorted[middle - 1]).toFixed(3); 
}

export default calculateMedian