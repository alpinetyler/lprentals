import React, {Component} from 'react'
import '../App.css';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

import LPLogo from './images/LPLogo.png'
import { Link } from 'react-router-dom';


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class PayRent extends Component {

    constructor(props){
        super()

        this.state = {
            amount: 0, 
        }
    }

    componentDidMount() {

        //keep user logged in after refresh
        this.props.getUser()
    }

    onToken = (token) => {
        console.log(token)
        let { amount } = this.state
        amount /= 100
        console.log(amount)
        token.card = void 0
        axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
          console.log(res)
          alert(`Thanks! You paid Lamppost Properties ${amount}!`)
        })
      }

      onOpened=()=>{
        console.log('this is opened')
      }
    
      onClosed=()=>{
        console.log('this is closed')
      }

      

    render() {
        
        let user = this.props && this.props.user
        //let admin = user && user.isadmin
        return(

            <div>
            {user &&
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
                <StripeCheckout
                  name='Rent payment' //header
                  image={LPLogo}
                  description='Pay Rent to Lamppost Properties' //subtitle - beneath header
                  
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY} //public key not secret key
                  token={this.onToken} //fires the call back
                  amount={this.state.amount} //this will be in cents
                  currency="USD" 
                  // image={imageUrl} // the pop-in header image (default none)
                  // ComponentClass="div" //initial default button styling on block scope (defaults to span)
                  panelLabel="Submit Payment" //text on the submit button
                  locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
                  opened={this.onOpened} //fires cb when stripe is opened
                  closed={this.onClosed} //fires cb when stripe is closed
                  allowRememberMe // "Remember Me" option (default true)
                  billingAddress={false}
                  // shippingAddress //you can collect their address
                  zipCode={false}
                >
                  {/* <button>Checkout</button> */}
                </StripeCheckout>
                Enter Payment: <input value={this.state.amount}
                type='number' thousandSeparator={true} prefix={'$'}
                onChange={e=>this.setState({amount:+e.target.value})}/>
              </div>
            }
            </div>
        )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps, {getUser})(PayRent)

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

