import React,{Component} from 'react';
import './Mergeinfo.css'
export default class Insertioninfo extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="Mid" style={{textAlign:'center'}}>
                    <h1>Enter the void</h1>
                </div>
                <div class="Info border border-5 border-dark">
                    <h1 style={{marginTop:'20px'}} class="bh">Merge Sort</h1>
                    <div class="lit">
                        <p style={{color:'green'},{fontSize:'30px'}}>
                            Merge sort is the sorting technique that follows the divide and conquer approach.Merge sort is similar to the quick sort algorithm as it uses the divide and conquer approach to sort the elements. It is one of the most popular and efficient sorting algorithm. It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves. We have to define the merge() function to perform the merging.
                            The sub-lists are divided again and again into halves until the list cannot be divided further. Then we combine the pair of one element lists into two-element lists, sorting them in the process. The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}