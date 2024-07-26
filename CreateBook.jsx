import axios from "axios";
import { useState } from "react"


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

                alert("Book has been added successfully");
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

        </div>
    )
}