import React from 'react'

class UserInfor extends React.Component {
    state = {
        name: 'Tu',
        age: 23,
        address: 'Gia Lam, Ha Noi',
    }

    handleOnchangeInput = (event) => {

        this.setState({
            name: event.target.value
        })
    }
    handleOnchangeAge = (event) => {

        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <>
                My in4 is {this.state.name}<br /> i'm  {this.state.age}<br /> from {this.state.address}<br />
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnchangeInput(event) }}
                    />
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnchangeAge(event) }}
                    />
                    <br />
                    <button >Submit</button>
                </form>

            </>
        )
    }
}
export default UserInfor