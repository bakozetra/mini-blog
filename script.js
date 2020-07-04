// function
const newPost = () => {
    const div = document.createElement("div");
    div.setAttribute("id", "post-list");

    const title = document.createElement("h5");
    title.classList.add("card-title");

    const content = document.createElement("p");
    content.classList.add("card-text");

    title.textContent = document.getElementById("new-post-title").value;
    content.textContent = document.getElementById("new-post-content").value;
    div.appendChild(title);
    div.appendChild(content);
    return div;
}
// submit

var submit = document.getElementById('submit-form');
const newBlog = document.getElementById("post-list");
// event listener
submit.addEventListener("click", ($event) => {
    var addNewPost = newPost();
    newBlog.appendChild(addNewPost);
    $event.preventDefault();
    document.getElementById("form").reset();
});