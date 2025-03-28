'use server'

import { createClient } from '@utils/supabase/server'
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function GoogleLogin() {
    console.log('GoogleLogin')
    const origin = (await headers()).get("origin");
    console.log('origin', origin)

    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: `${origin}/auth/callback`,
        },
        
      })

    if (data.url) {
        redirect(data.url)
    }

    if (error) {
        console.log('Error', error)
        redirect(`${origin}/auth/login`)
    }
}


export async function GoogleSignOut() {
    const supabase = await createClient()
    
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.log('Error', error)
        return
    }

    console.log('Sign out successful')
    redirect("/")
}