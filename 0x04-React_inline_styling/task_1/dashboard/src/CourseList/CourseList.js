import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css'
import PropType from 'prop-types';
import CourseShape from "./CourseShape";
import { css, stylesheet} from "aphrodite";

const CourseList = ({ listCourses }) => {
    return(
        <table id="CourseList" className={ css(stylesheet.table)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell='Available courses' />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {
                    listCourses.length === 0 ?
                    <CourseListRow isHeader={false} textFirstCell='No course available yet' />
                    :
                    null
                }
                {
                    listCourses.map((val, idx) => {
                        return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id} />
                    })
                }
        
            </tbody>
        </table>
    )
}

const styles = stylesheet.creat({
    table:{
        marginTop:"2em",
        width: "100%",
        border: "1px solid #ddd",
        fontSize: "1.2rem",
        marginBottom: "15em",
        marginLeft: "auto",
        marginRight: "auto",

    },
    th: {
        borderBottom: "1px solid #ddd",
        width: "80%",
        },
    
    td: {
        width: "80%",
        },
    
    tr: {
        "nth-child(2)": {
        textAlign: "left",
        },
        },
});

CourseList.defaultProps = {
    listCourses: []
};

CourseList.propType = {
    listCourses: PropType.arrayOf(CourseShape)
};

export default CourseList;