import React from 'react'

const calculateMode = (arr: Array<number>) => {
    arr=arr.map((elem)=>(elem))
    let object: any = {}
  
    for (let i = 0; i < arr.length; i++) {
      if (object[arr[i]]) {
        // increment existing key's value
        object[arr[i]] += 1
      } else {
        // make a new key and set its value to 1
        object[arr[i]] = 1
      }
    }
  
    // assign a value guaranteed to be smaller than any number in the arr
    let biggestValue = -1
    let biggestValuesKey = -1
  
    // finding the biggest value and its corresponding key
    Object.keys(object).forEach(key => {
      let value = object[key]
      if (value > biggestValue) {
        biggestValue = value
        biggestValuesKey = parseFloat(key)
      }
    })
    return biggestValuesKey.toFixed(3);
}

export default calculateMode