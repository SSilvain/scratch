import { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state.value);
    };

    onChange = (e)=>{
        const {value} = e.target;
        this.setState({value});
    };


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="balance"
                    placeholder="summa"
                    value={this.state.value}
                    onChange={this.onChange} />
                <button>Save</button>
            </form>
        );
    }
}
Form.propTypes ={
    onChange: PropTypes.func
};
export default Form;
