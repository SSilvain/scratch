import { useState } from "react";
import PropTypes from "prop-types";

const Form = (props) => {
    const [form, setForm] = useState({
        value: "",
        date: new Date().toISOString().substring(0, 10),
        comment: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        props.onChange(form);
        setForm({
            ...form,
            value: "",
            comment: "",
        });
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
            />
            <input
                type="text"
                name="value"
                placeholder="summa"
                value={form.value}
                onChange={onChange}
            />
            <textarea
                name="comment"
                value={form.comment}
                onChange={onChange}
            ></textarea>
            <button>Save</button>
        </form>
    );
};

Form.propTypes = {
    onChange: PropTypes.func,
};

export default Form;
