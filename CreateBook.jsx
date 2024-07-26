import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Toast } from "bootstrap";


export default function CreateBook() {
    const [book, setBook] = useState({
        title: "",
        author: "Unknown",
        pageCount: 0,
        year: 2024,
        language: ""
    });


    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value);
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    const submitHandler = (e) => {

        e.preventDefault();// Prevent the default action of the form
        let bookObj = {
            ...book,
            pageCount: parseInt(book.pageCount),
            year: parseInt(book.year)
        }
        console.log(book);
        axios.post("http://localhost:5000/books", bookObj)
            .then((response) => {
                console.log(response.data);


                setBook({
                    title: "",
                    author: "Unknown",
                    pageCount: 0,
                    year: 2024,
                    language: ""

                })

                // alert("Book has been added successfully");
                // navigate("/");
                let toastEl = document.getElementById('liveToast');
                let toast = new Toast(toastEl, { autohide: true, delay: 3000 });
                toast.show();
            })
            .catch((error) => {
                console.log(error);
                alert("An Error occured while adding book");
            })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
                    <h1>Add New Book</h1>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" value={book.title} onChange={changeHandler} className="form-control" id="title" name="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" value={book.author} onChange={changeHandler} className="form-control" id="author" name="author" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pageCount" className="form-label">Page Count</label>
                            <input type="number" value={book.pageCount} onChange={changeHandler} className="form-control" id="pageCount" name="pageCount" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Year</label>
                            <input type="number" value={book.year} onChange={changeHandler} className="form-control" id="year" name="year" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="language" className="form-label">Language</label>
                            <input type="text" value={book.language} onChange={changeHandler} className="form-control" id="language" name="language" />
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        {/* <img src="..." className="rounded me-2" alt="..." /> */}
                        <strong className="me-auto">Bookstore</strong>
                        {/* <small>11 mins ago</small> */}
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        New book has been added successfully
                    </div>
                </div>
            </div>
        </div>

    )
}