import React from 'react';
import "./input.css"


// functional Component props from parameters always
const Input = (props) => {
    const { type, value, id, name,placeholder,label, errors, onChange } = props
    return (
        <div className="inputContainer">
            <label htmlFor={id}>
              <span className="label"> {label} </span>  
            <div className="inputWraper">

                <input type={type}
                    value={value}
                    id={id}
                    name={name}   //name uthayega yahan say phekay ga login kay event
                    placeholder={placeholder}
                    onChange={(ev)=>onChange && onChange(ev)}
                    // bind karanay ki zaroorat nae
                    // onChange={()=>onChange()}
                />
                {/* //paragraph mein abba error dikhana hai */}
                {errors && errors.errorsObj[name] && <div className="error-wrapper">
                    <p className='error'>
                        {errors.errorsObj[name].message}
                    </p>
                </div>}
            </div>
            </label>
        </div>
    )
}
export { Input }