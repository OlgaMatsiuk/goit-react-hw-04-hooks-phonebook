// import React, { Component } from 'react';
import { useState } from 'react';
import styles from './form.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Form ({ text, submit }) {
    const [id] = useState(0);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // state = {
    //     id: 0,
    //     name: '',
    //     number: ''
    // }

    const InputId = uuidv4();

    const handleChange = e => {
        const { name, value} = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        submit({id, name, number});
        setName('');
        setNumber('');
       

        // this.reset();      
    }

    
        return (
        <>
        <h1>{text}</h1>
        
        <form onSubmit={handleSubmit}  autoComplete="off" className={styles.phoneBookForm}>
            <label htmlFor={InputId} className={styles.formLabel}>Name</label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    id={InputId}
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            <label htmlFor={InputId} className={styles.formLabel}>Number</label>
                <input
                    className={styles.formInput}
                    type="tel"
                    name="number"
                    placeholder="Enter number"
                    id={InputId}
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            
          <button type="submit" className={styles.formBtn}>Add contact</button>          
        </form>
        </>
        )
           
}

// export default Form;