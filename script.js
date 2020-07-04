console.log('it works');
 /*
//code your solution in here
// function 
function post(title,content) {
        this.ttle = title;
        this.content= content;
    }


// Blog  object code 
 const post = () => {
  this.post = [];

 }
  // this is the new post

const newPost = () => {
    const div = document.getElementById("post-list");
    const newParagraph = document.createElement("p");
    const newHeading = document.createElement("h5");
    const newTag = document.createElement("span");
    var blog_title = blog.post.newHeading;
    var blog_paragraph = blog.post.newParagraph;
    var blog_tag = blog.post.newTag;
    newHeading.textContent = blog_title;
    newParagraph.textContent = blog_paragraph;
    newTag.textContent = blog_tag;
    newPost.appendChild(newHeading);
    newPost.appendChild(newParagraph);
    newPost.appendChild(newTag);
    return div;
};
 // the new blog
 const blog = () => {

 }
*/
const newPost = () => {
    const div = document.getElementById("post-list");
    const title = document.createElement("h5");
    const content = document.createElement("p");
     title.textContent = "second blog";
     content.textContent = " this is the good to know";
     div.appendChild(title);
     div.appendChild(content);
      return div;
}

var submit = document.getElementById('submit');
 // event listener
  submit.addEventListener("click", ($event) => {
  var jsTitle = document.getElementById("title_input").value;
  var jsContent = document.getElementById("content_input").value;
  var firstPost = newPost();
  })