import {createClient} from './supabase/client';

export default async function checkUser() {
  const supabase = createClient();
  return await supabase.auth.getUser();
  

}