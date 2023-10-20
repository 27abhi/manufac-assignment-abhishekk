import React from 'react'

const calculateMean = (array: Array<number>) => {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return (total / count).toFixed(3);
}

export default calculateMean