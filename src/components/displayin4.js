import React from 'react';
import './displayin4.scss'
import logo2 from './../assets/img/pokemon_PNG148.webp'
// class DisplayIn4 extends React.Component {

//     render() {


//         const { listUsers } = this.props;

//         return (
//             <div className='disShow'>

//                 {true &&
//                     <div>

//                         {listUsers.map((user) => {
//                             console.log(user)

//                             return (
//                                 <div key={user.id} className={+user.age < 18 ? "green" : "red"}>
//                                     <div style={{ color: "black" }}>my name : {user.name} </div>
//                                     <div>my age: {user.age}</div>
//                                     <div><button onClick={() => { this.props.DelU(user.id) }}>X</button></div>
//                                     <hr />
//                                 </div>
//                             )

//                         })}



//                     </div>}

//             </div>
//         )
//     }
// }
const DisplayIn4 = (props) => {
    const { listUsers } = props;


    return (
        <div className='disShow'>

            {true &&
                <div>

                    {listUsers.map((user) => {
                        console.log(user)

                        return (
                            <div key={user.id} className={+user.age < 18 ? "green" : "red"}>
                                <div style={{ color: "black" }}>my name : {user.name} </div>
                                <div>my age: {user.age}</div>
                                <div><button onClick={() => { props.DelU(user.id) }}>X</button></div>
                                <hr />
                            </div>
                        )

                    })}


                    <img src={logo2} />
                </div>}

        </div>
    )
}



export default DisplayIn4;