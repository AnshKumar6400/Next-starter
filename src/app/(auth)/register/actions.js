import {createClient} from "@/lib/supabase/server"
import {redirect} from "next/navigation"

const register=async(formData)=>{
    const supabase=await createClient();
    const {error}=await supabase.auth.signUp({email:formData.get("email"),password:formData.get("password")});
    if(error){
        redirect("/register?error="+error.message);
    }
    else{
        redirect("/login");
    }
}  