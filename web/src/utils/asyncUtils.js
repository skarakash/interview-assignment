async function getPosts(){
    try {
        const response = await fetch('/posts');
        return await response.json();
    } catch (e) {
        console.error(e)
    }
}

async function deletePost(id){
    try {
        const url = `/delete/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (e) {
        console.error(e)
    }
}

async function getPost(id){
    try {
        const url = `/getpost/${id}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return await response.json();
    } catch (e) {
        console.error(e)
    }
}

async function updatePost(id, text){
    try {
        const url = `/updatepost`;
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({id, text}),
            headers: {"Content-Type": "application/json"}
        });
        return await response.json();
    } catch (e) {
        console.error(e)
    }
}


module.exports = {
    getPosts,
    deletePost,
    getPost,
    updatePost
};