import React from 'react';

function SignupPage() {
  return (
    <main>
      <div className='signup'>
      <h2>Sign Up</h2>
      <form>
          <input type="text" name="name" placeholder='name' />

          <input type="email" name="email" placeholder='email' />
        <button onClick='submit'>submit</button>
      </form>
      </div>
    </main>
  );
}

export default SignupPage;
