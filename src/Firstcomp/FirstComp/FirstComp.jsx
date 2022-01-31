import React, { Component } from 'react';
import BubbleSort from '../SortingUtil/Bubblesort/Bubblesort.jsx'
import InsertionSort from '../SortingUtil/Insertionsort/Insertionsort.jsx'
import './FirstComp.css';

class Firstcomp extends Component {
    constructor(){
      super();
      this.state={
        arr:[],
        len:12
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.Bubbles=this.Bubbles.bind(this);
      this.Insertions=this.Insertions.bind(this);
    } 
    resetArray(t){
      const array=[];
      for(let i=0;i<t;i++){
        array.push(randomNumber(60,400));
      }
      this.setState({
        arr:array,
        len:t
      })
    }
    handleChange(e){
      var t=e.target.value;
      for(var i=0;i<5;i++){
        t++;
      }
      this.resetArray(t);
    }
    Bubbles(){
      const animations=BubbleSort(this.state.arr);
      for(let t=0;t<animations.length;t++){
        const bar=document.getElementsByClassName('array-bar');
        const colorc=t%3!==2;
        if(colorc){
          const[o,p]=animations[t];
          const baros=bar[o].style;
          const barts=bar[p].style;
          const color=(t%3===0 ? 'red':'black');
          setTimeout(()=>{
            baros.backgroundColor=color;
            barts.backgroundColor=color;
          },t*200)
        }
        else{
          setTimeout(()=>{
            const[o,p]=animations[t];
            var on,tw;
            const baroso=bar[o].style;
            const barost=bar[p].style;
            on=baroso.height;
            tw=barost.height;
            baroso.height=tw;
            barost.height=on;
          },t*200);
        }
      }
    }
    Insertions(){
      const animations=InsertionSort(this.state.arr);
      for(let t=0;t<animations.length;t++){
        const bar=document.getElementsByClassName('array-bar');
        const colorc=t%3!==2;
        if(colorc){
          const[o,p]=animations[t];
          const barts=bar[p].style;
          const color=(t%3===0 ? 'red':'black');
          setTimeout(()=>{
            barts.backgroundColor=color;
          },t*200)
        }
        else{
          setTimeout(()=>{
            const[o,p]=animations[t];
            var on,tw;
            const baroso=bar[o].style;
            const barost=bar[p].style;
            on=baroso.height;
            tw=barost.height;
            baroso.height=tw;
            barost.height=on;
          },t*200);
        }
      }  
    }
    Mergesort(){

    }
    handleClick(){
      this.resetArray(this.state.len);
    } 
    render(){
        return (
          <React.Fragment>
              <div className="toolbar border border-5 border-dark">
                <div className="row">
                  <div className="col-4">
                    <div className="left" >
                      <label for="customRange3" className="form-label"><h4>Change Speed and Size</h4></label>
                      <input type="range" className="form-range" min="0" max="7" step="1" id="customRange3" onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="col-5">
                    <button className="head border border-5 border-dark" style={{width:'480px'}} onClick={this.handleClick}>
                      <h2>Sorting Visualiser<span><h4>Click Me!</h4></span></h2>
                    </button>
                  </div>
                  <div className="col-3">
                    <div className="dropdown ry">
                      <button className="btn btn-secondary dropdown-toggle byn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Choose!
                        
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#" onClick={this.Bubbles}>Bubble Sort</a></li>
                        <li><a className="dropdown-item" href="#" onClick={this.Insertions}>Insertion Sort</a></li>
                        <li><a className="dropdown-item" href="#">Merge Sort(maintenance)</a></li>
                        <li><a className="dropdown-item" href="#">Quick Sort(maintenance)</a></li>
                        <li><a className="dropdown-item" href="#">Heap Sort(maintenance)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <div className="qqq border border-4 border-dark">
              <div className="ct">
                {
                  this.state.arr.map((value,idx)=>(
                    <div className="array-bar" key={idx} style={{height:`${value}px`}}>
                    </div>
                  )
                  )
                }
              </div>
            </div>
          </React.Fragment>
        );
      }
    }
    function randomNumber(min, max) { 
      return Math.floor(Math.random() * (max - min+1) + min);
    }
 
export default Firstcomp;













// const animations=InsertionSort(this.state.arr);
//       for(let y=0;y<animations.length;y++){
//         const bar=document.getElementsByClassName('array-bar');
//         setTimeout(()=>{
//           var on,tw;
//           const[o,p]=animations[y];
//           const baroso=bar[o].style;
//           const barost=bar[p].style;
//           on=baroso.height;
//           tw=barost.height;
//           baroso.height=tw;
//           barost.height=on;
//         },y*100)
//       }