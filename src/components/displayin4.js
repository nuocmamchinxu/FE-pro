import React from 'react';

class DisplayIn4 extends React.Component {
    render() {
        console.log(this.props)
        const { age, name } = this.props;
        return (
            <div>

                <div>my {name}</div>
                <div>my {age}</div>

            </div>)
    }
}
export default DisplayIn4;