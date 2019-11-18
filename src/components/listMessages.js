import React, { Component } from 'react'
import axios from 'axios'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'

class ListMessages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }


    componentDidMount() {
        //get list of rental properties for rental id menu
        axios.get('/api/messages').then((res) => {
            this.setState({
                messages: res.data
            })
        }).catch(err => console.log('error getting messages:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }

    deleteMessage = id => {
        console.log(555, id)
        axios.delete(`/api/messages/${id}`)
            .then(res => this.setState({ messages: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        let { user } = this.props;
        let admin = user && user.isadmin;
        console.log(this.state.messages)


        return (

            <div style={styles.display}>
                <h3>Messages</h3>
                <tr>
                    <td style={styles.colOne}><h3>Title</h3></td>
                    <td style={styles.colTwo}><h3>Text</h3></td>
                    <td style={styles.colThree}><h3>Rental ID</h3></td>

                </tr>
                {admin &&
                    <>
                        <table>
                            {this.state.messages.map((message, index) => {
                                return (
                                    <>

                                        <tr>
                                            <td style={styles.colOne}>{message.title}</td>
                                            <td style={styles.colTwo}>{message.text}</td>
                                            <td style={styles.colThree}>{message.rentalid}</td>
                                            <td styles={styles.colThree}><button onClick={() => this.deleteMessage(message.id)}>delete</button></td>

                                        </tr>


                                    </>
                                )

                            })}
                        </table>

                    </>
                }






            </div>









        )



    }
}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { rentals } = state.rental
    return { user, rentals }

}


export default connect(mapStateToProps, { getUser, getRentals })(ListMessages)

let styles = {
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    display: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },
    colOne: {
        width: 200
    },
    colOneB: {
        width: 200,
        fontWeight: 'bold'
    },
    colTwo: {
        width: 300
    },
    colThree: {
        width: 100
    },
    colFour: {
        width: 200
    },
    colFive: {
        width: 50
    },
    colSix: {
        width: 200
    }

}//