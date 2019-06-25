import React, {Component} from 'react'
import { Link } from 'react-router-dom';

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


class AddAppliance extends Component{

    constructor(props) {
        super(props)

        this.state = {

            price: '',
            bd: '',
            bth: '',
            sqfeet: '',
            address: '',
            zip: '',
            imageurl: '',

            add: false

        }
    }
    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let newRental = this.state
        this.props.createRental(newRental)
        this.setState({
            name: '',
            brand: '',
            datepurchased: '',
            serialnumber: '',
            rentalid: ''
        })
    }

       //keep user on state if screen is re-fresheed   
       componentDidMount() {
        this.props.getUser()
    }


    render (){
        return(
            <div style={styles.addappliance}>
                <h3>Add Appliance</h3>
                <p>Name:<input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.name} /></p>
                <Link to={'/'}>
                    <button>Main</button>
                </Link>
                
            </div>
        )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps, {getUser})(AddAppliance)

let styles = {
    addappliance: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    }
}