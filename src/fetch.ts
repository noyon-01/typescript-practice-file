//! Get Request --------------------------

// interface IUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }

// async function fetchUsers(): Promise<void> {
//   try {
//     console.log("loading...");

//     const response: Response = await fetch(
//       "https://jsonplaceholder.typicode.com/users",
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error status: ${response.status}`);
//     }

//     const users: IUser[] = await response.json();
//     console.log(`Total User: ${users.length}`);

//     users.slice(0, 3).forEach((user: IUser): void => {
//       console.log(`name: ${user.name} and email: (${user.email})`);
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log("error message:", error.message);
//     }
//   }
// }

// fetchUsers();

//! POST Request --------------------------

interface INewPost {
  title: string;
  body: string;
  userId: number;
}

interface IPostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function createPost(): Promise<void> {
  try {
    const newPost: INewPost = {
      title: "learning typescript",
      body: "today we learn typescript basic",
      userId: 1,
    };

    console.log("loading.....");

    const response: Response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      },
    );

    if (!response.ok) {
      throw new Error(`http error status: ${response.status}`);
    }

    const createdPost: IPostResponse = await response.json();
    console.log("post title:", createdPost.title);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
    }
  }
}

createPost();
