'use client'

import React from 'react'
import { signIn, signOut} from "next-auth/react";

const Signin = () => {
  return (
    <>
        <section id="signinCon" className="container-fluid bg-light d-flex align-items-center justify-content-center p-5">
        <div>         
          <div className="container-fluid col-12 p-4 shadow shadow-5 shadow-success text-center rounded rounded-2">
             <h4 className="text-success">Not signed in</h4>
            <button
              className="btn btn-sm btn-dark mt-3 w-100"
              onClick={() => signIn()}
            >
              Sign in with GitHub
            </button>

            <button
              className="btn btn-sm btn-danger mt-3 w-100"
              onClick={() => signIn()}
            >
              Sign in with Google
            </button>


            <h6 className="bg-dark mx-auto my-3">Or</h6>

            <input className="form-control my-3" type="email" placeholder="example@email.com" />
            <input className="form-control my-3" type="password" placeholder="**********" />
            <button
              className="btn btn-sm btn-success mt-3 w-100"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signin