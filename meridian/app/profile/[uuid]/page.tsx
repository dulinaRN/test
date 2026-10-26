'use client';
import React, { useEffect } from 'react'
import {createClient} from '../../utils/supabase/client'
import { redirect } from 'next/dist/client/components/navigation'
import fetchUser from '../../utils/auth'
import checkUser from '../../utils/auth';

// interface Profile {
//     id:string;
//     fname: string;
//     lname: string;
//     email: string;
//     address: string;
//     contactno  : string;
//     role: string;
//     }

const page = () => {
    const fetchUser = async () => {
        checkUser().then((user) => {
            if (user.data.user) {
                console.log(user.data.user)
            } else {
                console.log("User is not logged in")
                return redirect('/login')
            }
        })
    }
        
    useEffect(() => {
        fetchUser()
    }, [])
        
  return (

    <div>
        <h1>Profile Page</h1>
        <a href="/track/sjdhjkh">Edit Profile</a>
    </div>
  )
}

export default page
