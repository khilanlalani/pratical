import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import "../App.css";



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            gender: "",
            hobby: "",
            message: "",
        }
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === "name") {
            this.setState(({
               ...this.state,
                [name]: value
            }));
        };

        if (name === "gender") {
            this.setState(({
                ...this.state,
                [name]: value
            }));
        };

        if (name === "hobby") {
            this.setState(({
                ...this.state,
                [name]: value
            }));
        };

        if (name === "message") {
            this.setState(({
               ...this.state,
                [name]: value
            }));

        };
    }


    send = () => {
        if (this.validator.allValid()) {
          alert("Form  has been submitted")
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }




    render() {
        return (
            <>
                <div>
                    <div className="form-parent">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                                <span className="validMsg">{this.validator.message('Name', this.state.name, 'required')}</span>
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="hobby" value={this.state.hobby} onChange={this.handleChange}>
                                    <option>Hobby</option>
                                    <option>Cricket</option>
                                    <option>Music</option>
                                </select>
                                <span className="validMsg">{this.validator.message('Hobby', this.state.hobby, 'required')}</span>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="9" placeholder="Message"  name="message" value={this.state.message} onChange={this.handleChange} ></textarea>
                                <span className="validMsg">{this.validator.message('Message', this.state.message, 'required')}</span>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn-submit" value="Send" onClick={this.send} />
                            </div>
                        </form>
                    </div>

                </div>
            </>
        )
    }
}
