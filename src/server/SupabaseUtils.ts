// import { createClient } from "@supabase/supabase-js";
// import { useAuth } from "@clerk/clerk-react";

// // import { env } from "process";  ------ NEED TO SORT OUT IMPORTING THE ENV STUFF.

// // Initialize Supabase client
// const supabase = createClient("https://amffpixxqghokfcomugt.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZmZwaXh4cWdob2tmY29tdWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3Nzg2MTQsImV4cCI6MjAwNjM1NDYxNH0.PToELNjcTR4PC8Zb5vzIiBcaZ8Ljms_HUpK7PmfJPTk');
// // Insert user data into Supabase table  --NEED TO INSERT PROPS IN insertUserData function
// async function insertUserData() {
//     const { userId } = useAuth();
//     const { data, error } = await supabase
//     .from('user_table')
//     .insert([{ id: userId }]);
  
//   if (error) {
//     console.error('Error inserting user data:', error);
//   }
// }

// export { supabase, insertUserData };
