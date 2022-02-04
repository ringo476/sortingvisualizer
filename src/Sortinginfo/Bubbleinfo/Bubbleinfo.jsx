import React,{Component} from 'react';
import './Bubbleinfo.css'
export default class Bubbleinfo extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="Mid" style={{textAlign:'center'}}>
                    <h1>Enter the void</h1>
                </div>
                <div class="Info border border-5 border-dark">
                    <h1 style={{marginTop:'20px'}} class="bh">Bubble Sort</h1>
                    <div class="lit">
                        <p style={{color:'green'},{fontSize:'30px'}}>
                        Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.

If the given array has to be sorted in ascending order, then bubble sort will start by comparing the first element of the array with the second element, if the first element is greater than the second element, it will swap both the elements, and then move on to compare the second and the third element, and so on.

If we have total n elements, then we need to repeat this process for n-1 times.

It is known as bubble sort, because with every complete iteration the largest element in the given array, bubbles up towards the last place or the highest index, just like a water bubble rises up to the water surface.

Sorting takes place by stepping through all the elements one-by-one and comparing it with the adjacent element and swapping them if required.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}