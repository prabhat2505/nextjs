import { useRouter } from 'next/router';
//ourdomain.com/posts/

function Posts({ posts }) {
    const router = useRouter();
    const newfile = Posts.query.newfile;

    //send a request to backend api
    //to fetch the details with new file name
  return (
      <div>
        This politics posts
      </div>
  )
}

export default Posts