import { useContext } from 'react'

import { SearchContext } from '../../../contexts/SearchContext'

import './SortFilter.css'

function SortFilter () {
    const { setFilter } = useContext(SearchContext)

    const handleOnChange = (event) => {
        const {value} = event.target
        setFilter(value)
    }

    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order" onChange={handleOnChange}>
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter };
