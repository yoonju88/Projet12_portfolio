import PropTypes from "prop-types"


function Field ({label, type, id, autoComplete, value, onChange, maxLength}) {
    return (
        <div className="input_container">
            <label htmlFor ={id} className='hidden_label'>{label}</label>
            <input 
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                required
                className={id}
                placeholder={label}
                maxLength={maxLength}
            />
        </div>
    )
}
Field.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required:PropTypes.bool,
    label:PropTypes.string,
}


export default Field