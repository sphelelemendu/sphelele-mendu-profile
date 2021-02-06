import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const cardTemplate = (props) => (
    <div className="card box h-100 pt-3" >
        <div className="m-auto ">
        {props.faIcon}
        </div>
        <div className="card-body text-center">
            <h4 className="card-title mt-3 mb-4 text-uppercase">{props.title}</h4>
                {props.children}
        </div>
    </div>
);

export default cardTemplate;