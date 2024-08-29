import PropTypes from "prop-types"

export const FIELD_TYPES ={
    INPUT_TEXT : 1,
    TEXTAREA: 2,
    EMAIL:3,
}

function Field ({label, type, fieldType, id, autoComplete, value, onChange, maxLength}) {
    let component;

    switch (fieldType) {
        case FIELD_TYPES.INPUT_TEXT:
            component = (
                <input 
                    type={type}
                    name={id}
                    id={id}
                    placeholder={label}
                    value={value}
                    autoComplete={autoComplete}
                    required
                    className={id}
                    maxLength={maxLength}
                    onChange={onChange}
                />
            )
        break
        case FIELD_TYPES.EMAIL:
            component = (
                <input
                    type={type}
                    name={id}
                    id={id}
                    placeholder={label}
                    value={value}
                    autoComplete={autoComplete}
                    required
                    className={id}
                    onChange={onChange}
                />  
            )
        break
        case FIELD_TYPES.TEXTAREA:
            component =(
                <textarea
                    type={type}
                    name={id}
                    id={id}
                    placeholder={label}
                    value={value}
                    autoComplete={autoComplete}
                    required
                    className={id}
                    maxLength={maxLength}
                    onChange={onChange}
                />
            )
        break
        default :
            component =(
                <input
                    name={id}
                    id={id}
                    placeholder={label}
                    value={value}
                    autoComplete={autoComplete}
                    onchange={onChange}
                />   
            )
    }
    return (
        <div className="input_container">
            <label htmlFor ={id} className='hidden_label'>{label}</label>
            {component}
        </div>
    )
}
Field.propTypes = {
    fieldType: PropTypes.oneOf(Object.values(FIELD_TYPES)),
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required:PropTypes.bool,
    label:PropTypes.string,
}
Field.defaultProps = {
    label: "",
    placeholder: "",
    type: FIELD_TYPES.INPUT_TEXT,
    name: "field-name",
    value:"",
}

export default Field