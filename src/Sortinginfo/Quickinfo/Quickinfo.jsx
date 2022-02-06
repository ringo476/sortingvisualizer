import React,{Component} from 'react';
import './Quickinfo.css'
export default class Quickinfo extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="Mid" style={{textAlign:'center'}}>
                    <h1 style={{color:'azure'}}>Enter the void</h1>
                </div>
                <div class="Info border border-5 border-dark">
                    <h1 style={{marginTop:'20px'}} class="bh">Quick Sort</h1>
                    <div class="lit">
                        <p style={{color:'green'},{fontSize:'30px'}}>
                        Quicksort is a sorting algorithm based on the divide and conquer approach where
<br></br>
1.An array is divided into subarrays by selecting a pivot element (element selected from the array).
<br></br>
2.While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
<br></br>
3.The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.
<br></br>
4.At this point, elements are already sorted. Finally, elements are combined to form a sorted array.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}