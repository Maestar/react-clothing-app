import React from 'react';

import './form-input.style.scss';

//handles no state so it is a functional component, not class
 const FormInput = ({handleChange, label, ...otherProps}) => (
     <div className="group">
         <input  className='form-input' onChange={handleChange} {...otherProps} />
         {
             label ? 
             (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                 {label}
             </label>)
             : null
         }

     </div>
 );

 export default FormInput;