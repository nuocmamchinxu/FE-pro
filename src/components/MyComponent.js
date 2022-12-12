import React from 'react'
import AddUserInfor from './AddUserInfor'
import DisplayIn4 from './displayin4'
class MyComponent extends React.Component {
    // JSX - cho viet code html trong JS 
    state = {
        listUsers: [
            { id: 1, name: "Tu", age: "14" },
            { id: 2, name: "Tu2", age: "25" },
            { id: 3, name: "Tu3", age: "35" }
        ]
    }

    handleAddUser = (Objx) => {
        console.log(Objx)
        this.setState({
            listUsers: [Objx, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (UserID) => {
        let UsersClone = this.state.listUsers
        UsersClone = UsersClone.filter(item => item.id !== UserID)
        this.setState({
            listUsers: UsersClone
        })
    }
    render() {
        // DRY: don't repeat yourself
        return (
            <>
                <div className='a'>
                    <br />
                    <AddUserInfor
                        handleAddUser={this.handleAddUser} />
                    <br />

                    <hr />
                    <DisplayIn4
                        listUsers={this.state.listUsers}
                        DelU={this.handleDeleteUser}
                    />

                </div>

            </>
        )
    }
}
export default MyComponent
