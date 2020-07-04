// function
const newPost = () => {
    const div = document.createElement("div");
    div.setAttribute("id", "post-list");

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("some-space");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");

    const content = document.createElement("p");
    content.classList.add("card-text");
   
    title.textContent = document.getElementById("new-post-title").value;
    content.textContent = document.getElementById("new-post-content").value;
    div.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(content);
    return div;
} 
console.log(newPost());

// submit

var submit = document.getElementById('submit-form');
const newBlog = document.getElementById("post-list");
// event listener
submit.addEventListener("click", ($event) => {
    var addNewPost = newPost();
    newBlog.appendChild(addNewPost);
    $event.preventDefault();
    document.querySelector("form").reset();
});
