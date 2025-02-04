import { useContext } from "react";
import RouterContext from "./Router";

export default function Product() {

    const [color, id] = useContext(RouterContext).parameters;

    const validColors = ['green', 'blue', 'yellow'];

    return (
        <div className="contacts">
            <h1 style={{color}}>Product</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}