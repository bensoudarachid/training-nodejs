import React from 'react'
import 'logospinner.scss'

export default class LogoSpinner extends React.Component {
    render() {
        return (
            <div className='logospinner'>
                <span className='mdlspinnerwrap'>
                    <div className='mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active mdlspinner'></div>
                </span>
                <span className='logowrap'>
                    <img src={'./images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/>
                </span>

            </div>
        )
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }
}