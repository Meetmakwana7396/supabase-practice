// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// Create a Supabase client configured to use cookies
export const supabase = createServerComponentClient({ cookies });
