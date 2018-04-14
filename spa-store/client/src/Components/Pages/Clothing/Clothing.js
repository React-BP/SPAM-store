import React from "react";
import { Link, Route } from "react-router-dom";
import Accessories from "../Accessories/Accessories";

const Clothing = props => (
    <div>
        <h1>Contact Page</h1>
        <p>
            Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
            Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
            pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
            tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
            posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus
            vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam
            tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel
            condimentum magna, quis tempor nulla.
    </p>
        <Link to={`/accessories`} className="btn btn-default">
            Learn More
    </Link>{" "}
        <Link to="/" className="btn btn-default">
            Learn Less
    </Link>
        <Route exact path={`/accessories`} component={Accessories} />
    </div>
);

export default Clothing;
