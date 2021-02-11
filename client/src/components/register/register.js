import React from "react";

const Register = ({ onSubmit, onChange, user }) => {
  const { givenName, familyName, email, password, passwordConfirm } = user;
  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input value={givenName} name="givenName" placeholder="Name" type="text" onChange={onChange} />
        </div>
        <div>
          <input value={familyName} name="familyName" placeholder="Last name" type="text" onChange={onChange} />
        </div>
        <div>
          <input value={email} name="email" placeholder="Email" type="email" onChange={onChange} />  
        </div>
        <div>
          <input value={password} name="password" placeholder="Password" type="password" onChange={onChange} />  
        </div>
        <div>
          <input value={passwordConfirm} name="passwordConfirm" placeholder="Confirm password" type="password" onChange={onChange} />  
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;