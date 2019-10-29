// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
    state ={
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(previousStata =>{
            return{
                timesClicked: previousStata.timesClicked + 1
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                {this.state.timesClicked}
                </button>
                {/* <label>{this.state.timesClicked}</label> */}
            </div>
        )
    }
}