import React,{Component} from 'react';
//import './Insertionsort.css';
export default function InsertionSort(ret)
{
    const animation=[];
    let n=ret.length;
    var key, j;
    for (var i = 1; i < n; i++)
    {
        key = ret[i];
        j = i - 1;
        while (j >= 0 && ret[j] > key)
        {
            ret[j + 1] = ret[j];
            animation.push([j,j+1]);
            animation.push([j,j+1]);
            animation.push([j,j+1]);
            j = j - 1;
        }
        ret[j + 1] = key;
        
    }
    return animation;
}