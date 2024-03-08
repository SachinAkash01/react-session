import React from 'react'
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

// Using prop types we can define which data types can be given for each element.
// If the data type doesn't match with the provided type it will give a warning message to the console.
// But it won't stop running the application.
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//Default props are used to add values to the proerties if the values are not given.
//If any of the name, age or isStudent properties are empty, following values will be added to the properties.
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;
