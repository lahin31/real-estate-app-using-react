import React, { Component } from 'react'

class House extends Component {
    state = { details: false }
    getImage = (path) => {
        return require('../../../assets/images/'+path);
    }
    toggleDetails = () => {
        this.setState({
            details: !this.state.details
        })
    }
    render() { 
        const {
            house
        } = this.props
        return (
            <div className="card col-6 col-md-4 mb-2">
                <img src={this.getImage(house.imageURL)} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{house.name}</h5>
                    { !this.state.details ? <React.Fragment>
                        <p className="card-text">{house.description}</p>
                    </React.Fragment> : <React.Fragment>
                        <p><strong>Bed</strong>: { house.bedroom }</p>
                        <p><strong>Bathroom</strong>: { house.bathroom }</p>
                        <p><strong>Sqft</strong>: { house.sqft }</p>
                        <p><strong>Price</strong>: { house.price }</p>
                    </React.Fragment>}
                    <button 
                        className="btn btn-primary"
                        onClick={this.toggleDetails}>Details</button>
                </div>
            </div>
        );
    }
}
 
export default House;