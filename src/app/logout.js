import {Component, PropTypes} from 'react'

export default class Logout extends Component {
    render() {
        return (
            <button onClick={() => this.handleClick()} className="btn btn-primary">
                <span className='glyphicon glyphicon-log-out'></span>
                Logout
            </button>
        )
    }

    handleClick() {
        this.props.onLogoutClick(this.props.auth.get('id_token'))
    }
}

Logout.propTypes = {
    onLogoutClick: PropTypes.func.isRequired
}