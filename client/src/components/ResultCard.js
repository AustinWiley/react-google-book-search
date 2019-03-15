import React from "react";

function ResultCard(props) {
  return (
    <div className="container">
    <div className="card">
        <div className="card-content">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.thumbnail} alt={props.title} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.title}</strong> <small>BY: {props.author}</small>
                            <br />
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className="media-left">
                    <a className="button button-right is-primary remove-button" href={props.href}>View</a>
                    <a className="button button-right is-primary remove-button">Save</a>
                </div>
            </article>
        </div>
    </div>
    <br />
</div>
  );
}

export default ResultCard;
