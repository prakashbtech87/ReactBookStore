


import BookCardView from './partials/BookCardView';
import BookTableView from './partials/BookTableView';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFetcher } from 'react-router-dom';
export default function Home() {

    const [viewType, setViewType] = useState('table');
    const [books, setBooks] = useState([]); // full list of books
    const [filteredBooks, setFilteredBooks] = useState([]);

    const viewSwitchHandler = (e) => {
        if (e.target.checked) {
            setViewType('card');
        } else {
            setViewType('table');
        }
    }

    useEffect(() => {
        //fetch('http://localhost:5000/books')
        //    .then(resss => resss.json())
        //  .then(dataa => setBooks(dataa))
        //  .catch(error => console.error(error));

        axios.get('http://localhost:5000/books')
            .then(res => setBooks(res.data))
            .catch(error => console.error(error));

    }, [])




    useEffect(() => {
        setFilteredBooks(books);
    }, [books])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" onChange={viewSwitchHandler} role="switch" id="viewType" />
                        <label class="form-check-label" >Card View</label>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    {viewType === 'table' ? <BookTableView books={filteredBooks} /> : <BookCardView books={filteredBooks} />}

                </div>



            </div>
        </div>
    )
}


