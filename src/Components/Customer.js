import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import Fulldata from './Fulldata'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'

export class Customer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedCustomer : 1 ,
             customerlist:[]
        }
    }
    
    componentDidMount() {
        this.getData();
    }

    getData =()=>{
        axios.get('samplejson/customerlist.json').then((data)=>{
            console.log(this.state)
            let {customerlist} = this.state
            customerlist = data.data
            this.setState({customerlist:customerlist},()=>{
            })
        })
    }
   
    render() {
        console.log(this.state.customerlist)
        // debugger
        return (
            <div className="content">
               <div className="left-content">
                    {this.state.customerlist.map(item=>{
                        return(
                            <div className="left-content-box">
                            
                                <h5>{item.name} </h5>
                                <p> {item.email} </p>
                                <p> {item.phone}</p>
                                <button onClick={()=> this.setState({ selectedCustomer: item.id})}>Click</button>
                                
                            </div>    
                        )
                    })}
               </div>

                <div className="right-content">
                    <Fulldata val={this.state.selectedCustomer} />
                </div>
            </div>
        )
    }
}

export default Customer
