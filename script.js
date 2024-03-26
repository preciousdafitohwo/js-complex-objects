console.log("more objects!")
const blogPost = {
    title: "My first blog post",
    author: {
      name: "Bob",
      age: 30,
      favouriteColour: "red",
    },
    tags: ["coding", "javascript", "objects", "arrays"],
    content: "This is my blog post about learning objects and arrays.",
  };

  console.log(blogPost.author.name); //accessing the value of an object using dot notation
  console.log(blogPost.tags[0]); // accessing the value of an array with obects by using its index
  console.log(blogPost.tags.length); //the .length notation is used to get the number of tags in that array which is 4

// using template literals to recall the values of the tag arrays in the object
  console.log(
    `There are ${blogPost.tags.length} tags for post "${blogPost.title}"`
  );
  for (let i = 0; i < blogPost.tags.length; i++) {
    console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
  }