'use client';

import React from 'react'
import {createClient} from '../utils/supabase/client'
import { redirect } from 'next/dist/client/components/navigation'
import { useState } from 'react'
const page = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const supabase = createClient();
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) {
        console.error('Error logging in:', error);
      } else {
        console.log('User logged in successfully');
        return redirect(`/profile/${data.user?.id}`);
      }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default page
