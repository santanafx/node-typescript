import axios from "axios";
//interface é usado para definir uma estrutura de um objeto
interface Post {
  userId: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts/1";

axios.get(url).then((res) => {
  const post = res.data as Post;

  const userId = post.userId;
  const header = post.title;
  const body = post.body;

  console.log(`
        User ID is ${userId}
        Tittle of post: ${header}
        Post Content: ${body}
  `);
});
