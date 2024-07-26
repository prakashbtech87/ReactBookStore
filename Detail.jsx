import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Detail() {

    const params = useParams();
    const bookId = params.id;
    const [book, setBook] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/books/${bookId}`)
            .then(res => setBook(res.data))
            .catch(error => console.log(error))
    }, [bookId])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {book && <h4>Selected item is : {book.title}</h4>}
                </div>
            </div>
        </div>
    )
}