import React,{Component} from 'react';

export default function BubbleSort(ret){
    var n=ret.length;
    const animation=[];
    for(var i=1;i<=n;i++){
        for(var j=0;j<n-1;j++){
            animation.push([j,j+1]);
            animation.push([j,j+1]);   
            if(ret[j]>ret[j+1]){
                animation.push([j,j+1]);
                var t=ret[j];
                ret[j]=ret[j+1];
                ret[j+1]=t;
            }
            else{
                animation.push([j,j])
            }
        }
    }
    return animation;
}
