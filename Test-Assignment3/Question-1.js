// 1.	Rewrite this React class Based component into a react functional component

import React from 'react'

export default const Post {
    const [posts, setPosts] = React.useState([])
    const [id, setId] = React.useState(‘2’)

    React.useEffect(() => {
        if (id) {
            fetchPost()
        }
    }, [id]);
    
    async fetchPost() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        const data = await response.json();
        setPosts(data);

    }


    return (

        <div >
        <input type = 'text' value = {id} onChange = {(e) => setId(e.target.value)}/> 
        <p >{JSON.stringify(posts)}</p>
     </div>
    )
}