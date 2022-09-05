import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/Declaration";


const symptoms = [
    'Cough',
    'Smell/Taste Impairment',
    'Fever',
    'Breathing Difficulties',
    'Body Aches',
    'Headaches',
    'Fatigue',
    'Sore throat',
    'Diarrhoea',
    'Runny nose'
];

const CheckListItem = ({ id, value, onClick }) => (
    <li onClick={onClick} id={id}><input type="checkbox" id={id} value={value} class="nav-link text-white" />{value}</li>
);
const CheckBoxList = ({ items, onItemClick }) => (
    <ul>
        {
            items.map((item, i) => <CheckListItem key={item} id={item} value={item} onClick={onItemClick} />)
        }
    </ul>
);



class AddUserDeclaration extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTemp = this.onChangeTemp.bind(this);
        this.onChangeSymptoms = this.onChangeSymptoms.bind(this);
        this.onChangeIsContact = this.onChangeIsContact.bind(this);
        this.saveUserDeclaration = this.saveUserDeclaration.bind(this);
        this.state = {
            id: null,
            name: "",
            temp: "",
            symptoms: symptoms,
            isContact: false,
            submitted: false,
        };
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeTemp(e) {
        this.setState({
            temp: e.target.value,
        });
    }
    onChangeTemp(e) {
        this.setState({
            temp: e.target.value,
        });
    }

    handleCheckBoxItemClick = (e) => {
        var columnName = e.target.value;
        if (e.target.checked) {
            var remainingCol = this.state.symptoms.filter(c => c != columnName);
            this.setState({ symptoms: remainingCol });
        }
        else {
        }
        console.log(e.target.value);
    }

    onChangeIsContact(e) {
        this.setState({
            isContact: e.target.value,
        });
    }
    saveUserDeclaration() {
        const { id,
            name,
            temp,
            symptoms,
            isContact } = this.state;
        this.props
            .addUser(name, temp, symptoms, isContact)
            .then((data) => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    temp: data.temp,
                    symptoms: data.symptoms,
                    submitted: true,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    newDeclaration() {
        this.setState({
            id: null,
            name: "",
            temp: "",
            symptoms: [],
            isContact: false,
            submitted: false,
        });
    }
    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newDeclaration}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempature">Tempature</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tempature"
                                required
                                value={this.state.tempature}
                                onChange={this.onChangeTemp}
                                name="tempature"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="symptoms">Symptoms</label>
                            <CheckBoxList id="symptoms" items={this.state.symptoms == null ? [] : this.state.symptoms} onItemClick={this.handleCheckBoxItemClick} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isContact">Have you been in contact with anyone who is suspected to have or/has been
                                diagnosed with Covid-19 within the last 14 days?</label>
                            <input
                                type="checkbox"
                                className="form-control"
                                id="isContact"
                                required
                                value={this.state.isContact}
                                onChange={this.onChangeIsContact}
                                name="isContact"
                            />
                        </div>
                        <button onClick={this.saveUserDeclaration} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
export default connect(null, { addUser })(AddUserDeclaration);