import React from 'react'
import Student from './components/Student';

function AppProps() {
  return (
    <>
        <Student name="Sachin" age={22} isStudent={true} />
        <Student name="Manuja" age={23} isStudent={false} />
        <Student name="Thaditha" age={20} isStudent={true} />
        <Student name="Rashidh" age={30} isStudent={false} />
        <Student /> {/* Since the props are not given, the default values for props will be added! */}
    </>
  )
}

export default AppProps;
