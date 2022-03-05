import React,{ useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getFirestore,
        collection,
        onSnapshot,
    
    } from "firebase/firestore";

const useFetch = () =>{
    const [ blogs, setBlogs] = useState();
    const [ loading, setLoading ] = useState(true);
    // firebase
    const firebaseConfig = {
        apiKey: "AIzaSyB9nk7YMte7N8CoR9y_QULIyWZ01jpGs3Q",
        authDomain: "blog-1f3a5.firebaseapp.com",
        projectId: "blog-1f3a5",
        storageBucket: "blog-1f3a5.appspot.com",
        messagingSenderId: "215676170839",
        appId: "1:215676170839:web:aea2433084097407e26912"
      };
      initializeApp(firebaseConfig);
      const db = getFirestore();
      const colRef = collection(db, "blogs");

      useEffect(() =>{
        onSnapshot(colRef, (snapshot)=>{
            setBlogs(
                snapshot.docs.map((item) =>{
                    return { ...item.data(), id: item.id}
                })
                )
            setLoading(false);
        })
      }, [])
      return { blogs, loading };
}
export default useFetch;