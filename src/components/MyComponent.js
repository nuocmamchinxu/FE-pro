import React from 'react'
import UserInfor from './UserInfor'
import DisplayIn4 from './displayin4'
class MyComponent extends React.Component {
    // JSX - cho viet code html trong JS 

    render() {
        const myAge = 25;
        const myIn4 = { name2: '007', name3: 'Bond' }
        return (
            <div>
                <br />
                <UserInfor />
                <br />

                <hr />
                <DisplayIn4 name="tran anh tu" age={myAge} myIn4={myIn4} />

            </div>
        )
    }
}
export default MyComponent
