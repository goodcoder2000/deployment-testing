import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    onSnapshot,
    query,
    where,
    collection,
    deleteDoc,
    doc
} from "firebase/firestore";
import '../index.css';

const Details = () =>{
    const [ blogs, setBlogs] = useState();
    const { title } = useParams();
    const navigate = useNavigate();
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

      const colRef = collection(db, 'blogs');

      const q  = query(colRef, where('title', '==', title))

      useEffect(() =>{
        onSnapshot(q,(snapshot) =>{
            setBlogs(
                snapshot.docs.map((item) =>{
                    return { ...item.data(), id: item.id }
                })
            )
        })
      }, [])
      const deleteHandler=(id) =>{
          const docRef = doc(db, 'blogs', id)
          deleteDoc(docRef)
          .then(() =>{
              console.log('delete success')
              navigate('../');
          })
      }
      
    return(
        <div className='details'>
            {/* <h2>this is details</h2> */}
            { blogs && blogs.map((item) =>{
                return (
                    <div key={item.id}>
                        <h2 style={{textAlign: "center"}}>{item.title}</h2>
                        <p style={{textAlign: 'center'}}>written by - {item.author}</p>
                        {/* <div>
                            <img src={item.img} className="img" style={{alignSelf: 'center'}}/>
                        </div> */}
                        <p>{item.body}</p>
                        <button style ={{backgroundColor: 'red',
                         color: '#fff',
                         fontSize:   15,
                         padding:   8,
                         borderRadius: 8
                        }}
                        onClick ={ () => deleteHandler(item.id) }
                        >delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Details;