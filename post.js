import axios from 'axios';

export default class Post {
    async postCompleted(userId) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            const posts = response.data;
            return posts.filter((post) => post.userId === userId && post.completed === true);
        } catch (error) {
            console.log(error.stack);
            console.log('I cant get post');
        }
    }
}
