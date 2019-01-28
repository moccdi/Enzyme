import React from "react";
import PropTypes from "prop-types";





const Button = ({children,onClick}) =>(
    <button type="button"  onClick={onClick}>
        {children}
    </button>
);

const LargeText = ({children,classButton,position,handleClick,minusTop,minusLeft}) =>(
    <span>
        {children}
    </span>
);



export default class Temperature extends React.Component {
    // static propTypes = {
    //     temp: PropTypes.number.isRequired,
    //     city: PropTypes.string.isRequired,
    //     toggleForecast: PropTypes.func.isRequired
    // };

    render() {
        return (
            <Button onClick={this.props.toggleForecast}>
                <LargeText>{this.props.temp}</LargeText>
            </Button>
        );
    }
}
