// Import the functions you need from the SDKs you need
import { createClient } from "@supabase/supabase-js";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD7CfiXh7KQl-24BPB3hzpWb6AeE4MOCQ",
  authDomain: "pdftalks-jbn.firebaseapp.com",
  projectId: "pdftalks-jbn",
  messagingSenderId: "121103096406",
  appId: "1:121103096406:web:f257d846d5c52cef83b9f7",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

// Read from env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { db, supabase };
