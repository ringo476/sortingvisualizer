import React, { Component } from 'react';
import BubbleSort from '../SortingUtil/Bubblesort/Bubblesort.jsx'
import InsertionSort from '../SortingUtil/Insertionsort/Insertionsort.jsx'
import MergeSort from '../SortingUtil/Mergesort/Mergesort.jsx'
import QuickSort from '../SortingUtil/Quicksort/Quicksort.jsx'
import {Link } from 'react-router-dom';
import './FirstComp.css';
const colors='rgba(10, 10, 119, 0.678)';
const speed=[580,480,380,270,150,50]
var sp=50;
class Firstcomp extends Component {
    constructor(){
      super();
      this.state={
        arr:[],
        len:20
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleSpeed = this.handleSpeed.bind(this);
      this.Bubbles=this.Bubbles.bind(this);
      this.Insertions=this.Insertions.bind(this);
      this.Merges=this.Merges.bind(this);
      this.Quicks=this.Quicks.bind(this);
    }
    resetArray(t){
      const array=[];
      for(let i=0;i<t;i++){
        array.push(randomNumber(60,400));
      }
      this.setState({
        arr:array,
        len:t,
      })
    }
    handleChange(e){
      var t=e.target.value;
      for(var i=0;i<10;i++){
        t++;
      }
      this.resetArray(t);
    }
    handleClick(){
      this.resetArray(this.state.len);
    }
    handleSpeed(e){
      sp=speed[e.target.value];
    }
    Bubbles(){
      var temp=[];
      temp=this.state.arr.slice();
      const animations=BubbleSort(this.state.arr);
      for(let t=0;t<animations.length;t++){
        const bar=document.getElementsByClassName('array-bar');
        const colorc=t%3!==2;
        if(colorc){
          const[o,p]=animations[t];
          const baros=bar[o].style;
          const barts=bar[p].style;
          const color=(t%3===0 ? 'red':colors);
          setTimeout(()=>{
            baros.backgroundColor=color;
            barts.backgroundColor=color;
          },t*sp)
        }
        else{
          setTimeout(()=>{
            const[o,p]=animations[t];
            var on,tw;
            const baroso=bar[o].style;
            const barost=bar[p].style;
            var tem=temp[o];
            temp[o]=temp[p];
            temp[p]=tem;
            on=baroso.height;
            tw=barost.height;
            baroso.height=tw;
            barost.height=on;
          },t*sp);
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
          const color=(t%3===0 ? 'red':colors);
          setTimeout(()=>{
            barts.backgroundColor=color;
          },t*sp)
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
          },t*sp);
        }
      }  
    }
    Merges(){
      const animations=MergeSort(this.state.arr);
      var t=0;
      const re=document.getElementsByClassName("test");
      for(let t=0;t<animations.length;t++){
        const bar=document.getElementsByClassName('array-bar');
        const colorc=t%3!==2;
        if(colorc){
          const[o,p]=animations[t];
          const baros=bar[o].style;
          const barts=bar[p].style;
          const color=(t%3===0 ? 'red':colors);
          setTimeout(()=>{
            baros.backgroundColor=color;
            barts.backgroundColor=color;
          },t*sp)
        }
        else{
          setTimeout(()=>{
            const[o,p]=animations[t];
            const baroso=bar[o].style;
            baroso.height=`${p}px`;
          },t*sp);
        }
      } 
    }
    Quicks(){
      console.log(this.state.arr)
      const animations=QuickSort(this.state.arr);
      console.log(animations)
      // for(let t=0;t<animations.length;t++){
      //   const bar=document.getElementsByClassName('array-bar');
      //   const colorc=t%3!==2;
      //   if(colorc){
      //     const[o,p]=animations[t];
      //     const barts=bar[p].style;
      //     const color=(t%3===0 ? 'red':colors);
      //     setTimeout(()=>{
      //       barts.backgroundColor=color;
      //     },t*sp)
      //   }
      //   else{
      //     setTimeout(()=>{
      //       const[o,p]=animations[t];
      //       var on,tw;
      //       const baroso=bar[o].style;
      //       const barost=bar[p].style;
      //       on=baroso.height;
      //       tw=barost.height;
      //       baroso.height=tw;
      //       barost.height=on;
      //     },t*sp);
      //   }
      // }  
    }
    render(){
        return (
          <React.Fragment>
              <div className="toolbar border border-5 border-dark">
                <div className="row">
                  <div className="col-4">
                    <div className="left" >
                      <div class="sio">
                        <label for="customRange3" className="form-label he">Change Size</label>
                      </div>
                      <div class="sit">  
                        <input type="range" className="form-range ht" min="0" max="10" step="2" id="customRange3" onChange={this.handleChange}/>
                      </div>
                      <div class="spo">
                        <label for="customRange3" className="form-label he">Change Speed</label>
                      </div>
                      <div class="spt">  
                        <input type="range" className="form-range ht" min="0" max="5" step="1" id="customRange3" onChange={this.handleSpeed}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                      <Link to="/"><button className="head border border-5 border-dark" onClick={this.handleClick}>
                      <h2>Sorting Visualiser<span><h4>Click Me!</h4></span></h2>
                    </button></Link>
                  </div>
                  <div className="col-3">
                    <div className="dropdown ry">
                      <button className="btn btn-secondary dropdown-toggle byn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Choose!
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/b"><a className="dropdown-item test" href="#" onClick={this.Bubbles}>Bubble Sort</a></Link></li>
                        <li><Link to="/i"><a className="dropdown-item test" href="#" onClick={this.Insertions}>Insertion Sort</a></Link></li>
                        <li><Link to="/m"><a className="dropdown-item" href="#" onClick={this.Merges}>Merge Sort</a></Link></li>
                        <li><a className="dropdown-item" href="#" onClick={this.Quicks}>Quick Sort(maintenance)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <div className="qqq border border-4 border-dark">
              <div className="ct">
                {
                  this.state.arr.map((value,idx)=>(
                    <div className="border border-4 border-dark array-bar" key={idx} style={{height:`${value}px`}}>
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












