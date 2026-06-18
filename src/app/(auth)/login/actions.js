"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/login?error=" + error.message);
  }

  redirect("/dashboard");
};