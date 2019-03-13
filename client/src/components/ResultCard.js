import React from "react";

function ResultCard() {
  return (
    <div className="container">
    <div className="card">
        <div className="card-content">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>harry potter</strong> <small>by some lady</small>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet
                            massa
                            fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                    </div>
                </div>
                <div className="media-left">
                    <a className="button button-right is-primary remove-button">View</a>
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
