import Post from './post.js';

const bootstrap = async () => {
    const post = await new Post().postCompleted(1);
    console.log(post);
}
bootstrap();
