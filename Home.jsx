


import BookCardView from './partials/BookCardView';
import BookTableView from './partials/BookTableView';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFetcher } from 'react-router-dom';
export default function Home() {

    const [viewType, setViewType] = useState('table');
    const [books, setBooks] = useState([]); // full list of books
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchText, setSearchText] = useState('');

    const viewSwitchHandler = (e) => {
        if (e.target.checked) {
            setViewType('card');
        } else {
            setViewType('table');
        }
    }

    const searchHandler = (e) => {
        setSearchText(e.target.value);
        let temp = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredBooks(temp);
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
            <div className='row alert alert-info mt-2 '>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" onChange={viewSwitchHandler} role="switch" id="viewType" />
                        <label class="form-check-label" >Card View</label>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <input type="text" value={searchText} onChange={searchHandler} className='form-control' placeholder='Search Books' />
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


