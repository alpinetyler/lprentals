import React, { Component } from 'react'
import '../App.css';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import NumberFormat from 'react-number-format';

import LPLogo from './images/LPLogo.png'
import { Link } from 'react-router-dom';


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'


//display number in US currency format
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class PayRent extends Component {

  constructor(props) {
    super()

    this.state = {
      amount: '',
      rentalid: '',
      rentals: []

    }
  }

  componentDidMount() {

    //get list of rental properties for rental id menu
    axios.get('/api/rentals').then((res) => {
      this.setState({
        rentals: res.data
      })
    }).catch(err => console.log('error getting rentals:', err))

    //keep user logged in after refresh
    this.props.getUser()
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  onToken = (token) => {
    // console.log(3333, token)
    let { amount, rentalid } = this.state
    console.log(88888, amount)
    let formattedAmount = formatter.format(amount)
    token.card = void 0
    axios.post('/api/payment', { token, amount: this.state.amount, rentalid }).then(res => {
      this.setState({
        amount: '',
        rentalid: ''
      })
      alert(`Thanks! You paid Lamppost Properties ${formattedAmount}!`)
    })
  }

  onOpened = () => {
    console.log('this is opened')
  }

  onClosed = () => {
    console.log('this is closed')
  }



  render() {
    let user = this.props && this.props.user
    //let admin = user && user.isadmin

    return (

      <div>
        {user &&

          <div style={styles.input}>
            <p><select style={styles.select}
              name="rentalid" onChange={this.handleChange}>
              <option>Choose Address</option>
              {this.state.rentals.map((rental, index) => {
                return (
                  <option
                    key={rental.id}
                    value={rental.id}>{rental.address}</option>
                )
              })}
            </select></p>
            Enter Payment Amount:

            <p>$<input value={this.state.amount}
              type='number'
              onChange={e => this.setState({ amount: +e.target.value })} />
            </p>

            <StripeCheckout
              name='Rent payment' //header
              image={LPLogo}
              description='Pay Rent to Lamppost Properties' //subtitle - beneath header

              stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY} //public key not secret key
              token={this.onToken} //fires the call back
              amount={this.state.amount * 100} //this will be in cents
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

export default connect(mapStateToProps, { getUser, getRentals })(PayRent)

let styles = {
  addappliance: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px'
  }
}

