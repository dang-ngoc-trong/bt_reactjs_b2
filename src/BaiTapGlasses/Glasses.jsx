import React, { Component } from 'react'
// import glassesImage from "../../public/glassesImage/model.jpg"
import data from "./dataGlasses.json"
export default class Glasses extends Component {
    state = {}



    onChange = (glasses) => {
        document.getElementById('information').style.display = 'block';
        this.setState(glasses)
    }
    render() {
        return (
            <div class="container">
                <div className='py-4 bg-dark '>
                    <p className='text-light'>TRY GLASSES APP ONLINE</p>
                </div>
                <div className='card mt-4 '>
                    <div className=' card-body'>
                        <img style={{ weight: "480px" }} src="./glassesImage/model.jpg" alt="" />
                        <img style={{
                            marginLeft: "-365px",
                            width: "250px",
                            marginBottom: "200px",
                            opacity: "0.8",

                        }} src={this.state.url} alt="" />
                        <div id='information' style={{
                            display: "none", color: "white", backgroundColor: "rgba(0,0,0,0.7)", padding: "20px", marginLeft: "351px",
                            marginRight: "237px"
                        }}>
                            <h4>{this.state.name}</h4>
                            <div>
                                <span className='text-success mr-2'>Cost</span>
                                <button className='btn btn-danger ' style={{
                                }}>{this.state.price}</button>
                            </div>
                            <p style={{ marginTop: "16px" }}>{this.state.desc}</p>
                        </div>
                    </div>

                </div>
                <div className='card-body row'>
                    {data.map((glasses) => {
                        return <div className='col-3 ' key={glasses.id} onClick={() => this.onChange(glasses)
                        }>

                            <img className='img-fluid' style={{ marginTop: "25px" }} src={glasses.url} alt="..." />

                        </div>
                    })}

                </div>
            </div >
        )
    }
}
