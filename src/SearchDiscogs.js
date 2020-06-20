import React from 'react';

export default function SearchDiscogs() {
    return (
        <form className='form'>
            <label className='label' htmlFor='query'>Record Title</label>
            <input className='input' type='text' name='query' placeholder='i.e. Loveless'/>
            <button className='button' type='submit'>Search</button>
        </form>
    )
}
