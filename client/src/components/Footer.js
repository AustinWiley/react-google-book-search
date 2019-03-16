import React from "react";

// This component lets us use a bootstrap input element without worrying about className names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Footer(props) {
  return (
    <footer className="footer is-warning">
    <div className="content has-text-centered">
        <p>
            <strong>App</strong> by <a href="https://github.com/AustinWiley/">Austin Wiley</a>
        </p>
    </div>
</footer>
  );
}

export default Footer;