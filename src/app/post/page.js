async function postUserData() {
    let postData=await fetch ('https://jsonplaceholder.typicode.com/posts')
    postData=await postData.json()
     return postData;
}

const Post = async() => {
    let posts = await postUserData();
  return (
    <>
      {posts && posts.map((item,index)=> 

    //   console.log(item)
      
      <h4 key={index}>[Post.tittle]: {item.title}</h4>
      )}
    </>
  )
}

export default Post

