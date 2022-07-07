import React , {Component} from 'react';
import {Routes , Route , BrowserRouter} from 'react-router-dom';
import Diagram from '../components/Diagram';
import Line from '../components/Line';
import NavBar from '../components/NavBar';
import Pie from '../components/Pie';

export default class Navigation extends Component{
render(){
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Line/>}></Route>
            <Route path='/Diagram' element={<Diagram/>}></Route>
            <Route path='/Pie' element={<Pie/>}></Route>
        </Routes>
        </BrowserRouter>
        
      )
}
  
}

