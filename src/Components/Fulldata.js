import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

export class Fulldata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fulldata: []
        }
    }
    

    componentDidMount() {
        this.getData();
    }
    componentDidUpdate(){
        this.getData();

    }

    getData =()=>{
        axios.get('samplejson/customer'+this.props.val+'.json').then((data)=>{
            console.log(this.state)
            let {fulldata} = this.state
            fulldata = data.data
            this.setState({fulldata:fulldata},()=>{
            })
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.val}</h3>
                {console.log(this.state.fulldata)}
                <h5>{this.state.fulldata.name}</h5>
                <p>Name: {this.state.fulldata.name}</p>
                <p>Email:{this.state.fulldata.email}</p>
                <p>Phone: {this.state.fulldata.phone}</p>
                <p>City: {this.state.fulldata.city}</p>
                <p>State: {this.state.fulldata.state}</p>
                <p>Country: {this.state.fulldata.country}</p>
                <p>Organization: {this.state.fulldata.organization}</p>
                <p>JobProfile: {this.state.fulldata.jobProfile}</p>
                <p>AdditionalInfo: {this.state.fulldata.additionalInfo}</p>




                

            </div>
        )
    }
}

export default Fulldata
