import React from 'react';
// import PropTypes from 'prop-types';
let temp = "5";
class Validate extends React.Component {
    render() {
        return (
            <div>
                <CheckField checker={temp} />
            </div>

        );
    }
}
class CheckField extends React.Component {
    
    render() {
        return (
            <div>
                The check is: {this.props.now} and {this.props.light}
            </div>
        );
    }
}

// CheckField.defaultProps = {
//     checker: 'Stranger'
// };

// CheckField.propTypes = {
//     now: PropTypes.string.isRequired,
//     checker: PropTypes.element.isRequired,
//     light: (props, propName, componentName) => {
//         if (props[propName] < 5) {
//             throw new Error(propName + " must be 5 or greater")
//         }
//     }
// }

export default Validate;