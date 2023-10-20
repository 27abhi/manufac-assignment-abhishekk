import React from 'react'

const convertStringToNumber = (elem: number) => {
    if(typeof(elem)=='string'){
        return parseFloat(elem);
      }
      else
        return elem;
}

export default convertStringToNumber