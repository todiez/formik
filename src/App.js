import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login sucessful");
    },

    validate: values => {
      let errors = {};
      //if(!values.email) errors.email = 'Input required';
      if (!values.email) {
        errors.email = "Email is required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Not a valid email"
      } else {
        errors.email = null
      }



      if(!values.password) errors.password = 'Input required';
      return errors;
    }
  });

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null}

        <div>Password</div>
        <input id="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null}

        <button id="submButton" type="submit">Submit</button>

      </form>  
    </div>
  );
}

export default App;
