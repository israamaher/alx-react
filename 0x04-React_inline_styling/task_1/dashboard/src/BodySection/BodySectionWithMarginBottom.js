import React, { Component } from "react";

import './BodySection';
import BodySection from "./BodySection";
import PropTypes from 'prop-types';
import { css, StyleSheet } from"aphrodite";

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={css(style.bodySectionWithMargin)}>
                <BodySection {... this.props} />
            </div>
        );
    }
} 

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: "40",
    },
});

BodySectionWithMarginBottom.defaultProps = {
    children: <React.Fragment />
};

BodySectionWithMarginBottom.prpTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

export default BodySectionWithMarginBottom;