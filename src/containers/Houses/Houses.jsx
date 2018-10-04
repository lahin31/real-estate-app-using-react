import React, { Component } from 'react';
import './Houses.css'

import AddHouseForm from '../../components/Core/AddHouseForm'
import House from './House/House'
import SortHouse from '../../components/Core/SortHouse'

class Houses extends Component {
    state = { 
        name: "",
        address: "",
        price: 0,
        selected_property_type: "",
        description: "",
        bedroom: 0,
        bathroom: 0,
        sqft: 0,
        selectedSortType: "pleaseSelect",
        sortDirection: 'asc',
        property_types: [
            { value: "duplex", label: "Duplex" },
            { value: "flat", label: "Flat"}
        ],
        all_houses: [
            { name: "Dream House", address: "43/8, Amberkhana, Sylhet", price: 50000, selected_property_type: "Flat", description: "Awesome House", bedroom: 5, bathroom: 3, sqft: 250, imageURL: "house-1.jpg" },
            { name: "House of Joy", address: "43/4, Jalalabad, Sylhet", price: 45000, selected_property_type: "Duplex", description: "Dream House", bedroom: 4, bathroom: 2, sqft: 200, imageURL: "house-2.jpg" },
            { name: "Peace Home", address: "43/4, Jalalabad, Sylhet", price: 400, selected_property_type: "Duplex", description: "Dream House", bedroom: 6, bathroom: 4, sqft: 150, imageURL: "house-3.jpg" }
        ]
    }
    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault();
        let houseDetails = {
            address: this.state.address,
            price: this.state.price,
            selected_property_type: this.state.selected_property_type,
            description: this.state.description,
            bedroom: this.state.bedroom,
            bathroom: this.state.bathroom,
            sqft: this.state.sqft,
            imageURL: 'default-image.jpg'
        }
        let allHouses = this.state.all_houses
        allHouses.push(houseDetails)
        this.setState({
            all_houses: allHouses
        });
        this.setState({
            name: "",
            address: "",
            price: 0,
            selected_property_type: "",
            description: "",
            bedroom: 0,
            bathroom: 0,
            sqft: 0,
            imageURL: ""
        });
    }

    handleSelectChange = e => {
        this.setState({
            selected_property_type: e.target.value
        })
    }

    handleSortChange = e => {
        this.setState({
            selectedSortType: e.target.value
        })
        const shortedHouses = [...this.state.all_houses]
        let x = e.target.value
        x = x.toLowerCase()
        let modifier = 1;
        if(this.state.sortDirection === "desc") {
            modifier = -1
        }

        shortedHouses.sort((a,b) => {
            if(a[x] < b[x]) {
                return -1 * modifier;
            } else if(a[x] > b[x]) {
                return 1 * modifier;
            } else {
                return 0;
            }
        }); 
        this.setState({
            all_houses: shortedHouses
        })
    }

    handleSortDirection = val => {
        this.setState({
            sortDirection: val
        }, () => {
            const shortedHouses = [...this.state.all_houses]
            let x = this.state.selectedSortType
            x = x.toLowerCase()
            let modifier = 1;

            if(this.state.sortDirection === "desc") {
                modifier = -1
            }
            shortedHouses.sort((a,b) => {
                if(a[x] < b[x]) {
                    return -1 * modifier;
                } else if(a[x] > b[x]) {
                    return 1 * modifier;
                } else {
                    return 0;
                }
            }); 
            this.setState({
                all_houses: shortedHouses
            })
        });
    }

    render() {
        return (
            <div className="add_listing">

                <AddHouseForm
                    handleFormSubmit={this.handleOnSubmit}
                    name={this.state.name}
                    address={this.state.address}
                    price={this.state.price}
                    selectedPropertyType={this.state.selected_property_type}
                    description={this.state.description}
                    bedroom={this.state.bedroom}
                    bathroom={this.state.bathroom}
                    sqft={this.state.sqft}
                    propertyTypes={this.state.property_types}
                    handleChange={this.handleOnChange}
                    handleSelectChange={this.handleSelectChange}></AddHouseForm>

                <div className="sorting_area">
                    <SortHouse
                        selectedSortType={this.state.selectedSortType}
                        sortChange={this.handleSortChange}
                        selectedDefault={this.state.selectedSortType}
                        handleSortDirection={this.handleSortDirection}></SortHouse>
                </div>

                {/* All Houses */}
                <div className="all_houses">
                    <div className="row container-fluid">
                        { this.state.all_houses.map((house, i) => {
                            return (
                                <House
                                    house={house}
                                    key={i}></House>
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Houses;