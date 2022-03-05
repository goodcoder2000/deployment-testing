import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
    addDoc,
    collection,
    getFirestore
} from 'firebase/firestore';

const NewBlog = () =>{
    const [ title, setTitle ] = useState();
    const [ body, setBody ] = useState();
    const [ author, setAuthor ] = useState('rocy');
    const [ like, setLike ] = useState();
    const navigate = useNavigate();

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

    const submitHandler = (event) =>{
        event.preventDefault();
        addDoc(colRef,{
            title:  title,
            body:   body,
            author: author,
            like: like
        })
        .then(() =>{
            console.log('post success')
            navigate('../');
        })
        .catch(err =>{
            console.log(err.message);
        })
    }

    return(
        <div className="newBlog">
            <h2>Add New Blog</h2>
                <form onSubmit = { submitHandler }>
                    
                    <div className='mar'>
                        <label>Title</label>
                        <input type="text" className='textInput'
                        onChange = { (event) =>setTitle(event.target.value) }
                        required
                        ></input>
                    </div>

                    <div className='mar'>
                        <label>Body</label>
                        <textarea className='textInput'
                        onChange = { (event) =>setBody(event.target.value)}
                        required
                        ></textarea>
                    </div>

                    <div className='mar'>
                        <label>Author</label>
                        <select value={author} className='textInput'
                        onChange ={(event) =>setAuthor(event.target.value)}
                        required
                        >
                            <option value='rocy'>rocy</option>
                            <option value='mario'>mario</option>
                            <option value='luca'>luca</option>
                        </select>
                    </div>

                    {/* <div className='mar'>
                        <label>Image Link</label>
                        <input type="text" className='textInput'
                        onChange ={ (event) =>setImgLink(event.target.value)}
                        required
                        ></input>
                    </div> */}
                    
                    <div className='mar'>
                        <label>Like</label>
                        <input type="number" className='textInput'
                        onChange = { (event) =>setLike(event.target.value) }
                        required
                        ></input>
                    </div>

                    <div className='postBtnContainer'>
                        <button className='postBtn'>Post</button>
                    </div>

                </form>
        </div>
    );
}
export default NewBlog;