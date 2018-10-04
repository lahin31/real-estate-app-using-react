import React, {Component} from 'react';

class AddHouseForm extends Component {
    state = {
        address: ""
    }
    render() {
        const {
            handleChange,
            handleFormSubmit,
            selectedPropertyType,
            propertyTypes,
            handleSelectChange
        } = this.props
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        Add new House
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="row">
                                <div className="form-group col-sm-3">
                                    <label htmlFor="address">Name</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        value={this.props.name}
                                        name="name"
                                        onChange={handleChange}/>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="address">Address</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                        value={this.props.address}
                                        name="address"
                                        onChange={handleChange}/>
                                </div>  
                                <div className="form-group col-sm-3">
                                    <label htmlFor="price">Price</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Price"
                                        name="price"
                                        value={this.props.price}
                                        onChange={handleChange}/>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="property_type">Property Type</label>
                                    <select name={selectedPropertyType} className="custom-select" onChange={handleSelectChange}>
                                        { propertyTypes.map(property_type => {
                                            return <option key={property_type.value}>{property_type.label}</option>
                                          })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="description">Description</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="3"
                                        value={this.props.description}
                                        name="description"
                                        onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="bedroom">Bedroom</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Bedroom"
                                        name="bedroom"
                                        value={this.props.bedroom}
                                        onChange={handleChange}/>
                                </div> 
                                <div className="form-group col-sm-3">
                                    <label htmlFor="bathroom">Bathroom</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Bathroom"
                                        name="bathroom"
                                        value={this.props.bathroom}
                                        onChange={handleChange}/>
                                </div> 
                                <div className="form-group col-sm-2">
                                    <label htmlFor="sqft">Sqft</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Sqft"
                                        name="sqft"
                                        value={this.props.sqft}
                                        onChange={handleChange}/>
                                </div>
                                <div className="form-group col-sm-3">
                                    <button className="btn btn-primary">Add House</button>
                                </div> 
                            </div> 
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddHouseForm