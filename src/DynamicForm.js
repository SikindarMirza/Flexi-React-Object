import React, { Component } from 'react';

export default class Flexi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameLabel: "Name",
            stateLabel: "State",
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
    }

    // const flexiConfig = {
    //     items: [
    //         {
    //             "name": "personname",
    //             "label": "Person's Name",
    //             "type:" "TextField",
    //         },
    //         {
    //             "name": "states",
    //             "label": "Person's state".
    //             "type": "DropDown",
    //             "values": [        
    //                 "Maharashtra",
    //                 "Kerala",
    //                 "Tamil Nadu"
    //             ]
    //         }
    //     ]
    // };
    handleChange(e) {        
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>                 
                <label>
                    {this.state.nameLabel}
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <label>
                    {this.state.stateLabel}
                    <select>
                        <option value="Maharastra">Maharastra</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                    </select>
                </label>
                <button onClick={this.props.onSubmit}>Submit</button>                                                                          
            </div>

        );
    }
}