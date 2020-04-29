import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './posts';
import Pagination from './pagicnation';

const App =()=> {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage]= useState(1);
    const [postsPerPage] = useState(5);

    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    
    // Get current posts
    const indexOfLastPosts = currentPage * postsPerPage;
    const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
            <Posts 
                posts={currentPosts} loading={loading}
            />
            <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            />
        </div>   
    )
}

export default App;