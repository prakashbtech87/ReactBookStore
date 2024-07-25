
import books from '../data/books';
import BookCardView from './partials/BookCardView';
import BookTableView from './partials/BookTableView';
import { useState } from 'react';
export default function Home() {

    const [viewType, setViewType] = useState('table');

    const viewSwitchHandler = (e) => {
        if (e.target.checked) {
            setViewType('card');
        } else {
            setViewType('table');
        }
    }

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
                    {viewType === 'table' ? <BookTableView books={books} /> : <BookCardView books={books} />}

                </div>



            </div>
        </div>
    )
}


