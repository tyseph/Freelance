import { doc, setDoc } from 'firebase/firestore';
import { storage } from '../firebase/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState } from 'react';
import { db } from '../firebase/firebase';
import '../styles/Insert.css'

const InsertPost = () => {

        const [post, setPost] = useState({
                catogory: 'fruit',
                title: '',
                description: '',
                img: ''
        })

        const [progresspercent, setProgresspercent] = useState(0);

        const handlePosts = (e) => {
                setPost({
                        ...post,
                        [e.target.name]: e.target.value
                })
        }

        const handleImageSubmit = (e) => {
                e.preventDefault()
                if (post.catogory !== '' && post.title !== '' && post.description !== '') {
                        const file = e.target[0]?.files[0]
                        if (!file) return;
                        const storageRef = ref(storage, `${post.catogory}/${post.title}/${file.name}`);
                        const uploadTask = uploadBytesResumable(storageRef, file);

                        uploadTask.on("state_changed",
                                (snapshot) => {
                                        const progress =
                                                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                                        setProgresspercent(progress);
                                },
                                (error) => {
                                        alert(error);
                                },
                                () => {
                                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                                setPost({
                                                        ...post,
                                                        img: downloadURL
                                                })
                                        });
                                }
                        );
                }
                else {
                        alert("Please enter value")

                }
        }

        const handleSubmit = async (e) => {
                e.preventDefault();
                if (post.catogory !== '' && post.title !== '' && post.description !== '') {
                        console.log(post);
                        try {
                                await setDoc(doc(db, post.catogory, post.title), post)
                                console.log('Updated')
                        } catch (error) {
                                alert(error);
                        }
                        setPost({
                                title: '',
                                description: '',
                                catogory: post.catogory,
                                img: ''
                        })
                }
                else {
                        alert("Please enter value")
                }
        }
        return (
                <div>
                        <center>

                                <div>
                                        <div>
                                                <select value={post.catogory} name='catogory' onChange={handlePosts}>
                                                        <option value="fruit">Fruit</option>
                                                        <option value="vegetable">Vegetable</option>
                                                        <option value="meat">Meat</option>
                                                </select>
                                        </div>
                                        {post.catogory}
                                </div>

                                <div>
                                        <input value={post.title} name='title' type='text' onChange={handlePosts} placeholder='title' />
                                </div>

                                <div>
                                        <textarea style={{ width: 1000, height: 500 }} value={post.description} name='description' type='textarea' onChange={handlePosts} placeholder='description' />
                                </div>

                                <div className="App">
                                        <form onSubmit={handleImageSubmit} className='form'>
                                                <input type='file' />
                                                <button type='submit'>Upload</button>
                                        </form>
                                        {
                                                !post.img &&
                                                <div className='outerbar'>
                                                        <div className='innerbar' style={{ width: `${progresspercent}%`, backgroundColor: 'whitesmoke' }}>{progresspercent}%</div>
                                                </div>
                                        }
                                        {
                                                post.img &&
                                                <div>
                                                        <img src={post.img} alt='uploaded file' height={200} />
                                                        <input type='submit' onClick={handleSubmit} />
                                                </div>
                                        }
                                </div>
                        </center>
                </div>
        )
}

export default InsertPost;