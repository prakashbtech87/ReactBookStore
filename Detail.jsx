
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {

    const params = useParams();
    const [bookId, setBookId] = useState(params.id);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4>Selected item is :{bookId} </h4>
                </div>
            </div>
        </div>
    )
}