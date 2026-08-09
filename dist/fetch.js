"use strict";
//! Get Request --------------------------
Object.defineProperty(exports, "__esModule", { value: true });
async function createPost() {
    try {
        const newPost = {
            title: "learning typescript",
            body: "today we learn typescript basic",
            userId: 1,
        };
        console.log("loading.....");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        if (!response.ok) {
            throw new Error(`http error status: ${response.status}`);
        }
        const createdPost = await response.json();
        console.log("post title:", createdPost.title);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("error message: ", error.message);
        }
    }
}
createPost();
//# sourceMappingURL=fetch.js.map