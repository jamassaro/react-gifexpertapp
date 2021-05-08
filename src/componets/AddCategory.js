import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [ImputValue, setImputValue] = useState('');

    const handleImputChange = (e) => {
        setImputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (ImputValue.trim().length > 2){
            setCategories(cats =>[ImputValue, ...cats ]);
            setImputValue('');

        }
        
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ImputValue}
                onChange={handleImputChange}
            
            />
            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}