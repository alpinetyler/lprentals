import React, {Component} from 'react'
import axios from 'axios'

export default class ListAppliances extends Component{

    constructor(props){
        super(props)
        this.state = {
            appliances: []
        }
    }
    componentDidMount() {
        axios.get('/api/appliances').then((res) => {
            this.setState({
                appliances: res.data
            })
        }).catch(err => console.log('error getting appliances:', err))
    }

    render(){
        return(
            <div>
                {this.state.appliances.map}
            </div>
        )
        
          
            
    }
}