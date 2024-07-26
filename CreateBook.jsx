

export default function CreateBook() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
                    <h1>Add New Book</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pageCount" className="form-label">Page Count</label>
                            <input type="number" className="form-control" id="pageCount" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Year</label>
                            <input type="number" className="form-control" id="year" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="language" className="form-label">Language</label>
                            <input type="text" className="form-control" id="language" />
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>

        </div>
    )
}