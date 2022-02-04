import React,{Component} from 'react';
import './Insertioninfo.css'
export default class Insertioninfo extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="Mid" style={{textAlign:'center'}}>
                    <h1>Enter the void</h1>
                </div>
                <div class="Info border border-5 border-dark">
                    <h1 style={{marginTop:'20px'}} class="bh">Insertion Sort</h1>
                    <div class="lit">
                        <p style={{color:'green'},{fontSize:'30px'}}>
                        Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.It iterates the input elements by growing the sorted array at each iteration. It compares the current element with the largest value in the sorted array. If the current element is greater, then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. This is done by shifting all the elements, which are larger than the current element, in the sorted array to one position ahead
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}