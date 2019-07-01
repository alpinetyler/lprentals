import React, {Component} from 'react'
import { Link } from 'react-router-dom';

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


class Maintenance extends Component{

    constructor(props){
        super(props)

        this.state = {

        }


    }
    componentDidMount() {
        //keep user logged in after refresh
        this.props.getUser()
    }

    render (){
        console.log(this.props)
        let user = this.props && this.props.user
        let admin = user && user.isadmin
        return(
        
            <div style={styles.addappliance}>
            {user &&
            <>
                <h3>Maintenance</h3>
                <Link to={'/'}>
                    <button>Main</button>
                </Link>
            </>
            }
                
            </div>
            
        )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps, {getUser})(Maintenance)

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