import React, { Component } from 'react'

export class Widget extends Component {
    render() {
        return (
            <div className="Widget">

                <div className="banner">
                <div className="description">
                    <span className="title">S.I.A</span>
                        <p>Your virtual banking assistance from SBI</p>
                </div>
                </div>
            
                <div className="card">
                 <input className="name"/>
                 <div>
                 <div ><input className="checkbox" type="checkbox"/> 
                 <label>I agree terms and conditions <a href="#">more</a></label>
                 </div>
                 <button className="getButton">Get started</button><br/>
                 <button className="skipButton">Skip</button>
                 </div>

                </div>

            </div>
            
        )
    }
}

export default Widget


