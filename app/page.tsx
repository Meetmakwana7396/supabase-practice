import { supabase } from "@/supabase/clients/ServerClient";

const Page = async () => {


  return (
    <pre className="text-white">{JSON.stringify(user || error, null, 2)}</pre>
  );
};

export default Page;
