const myButton = document.getElementById("myButton");
const myFunction = () => {
    myButton.style.backgroundColor = "red";
};
myButton.addEventListener("click", myFunction);

const image = document.getElementsByClassName("practice")[0];
const origialImageSrc = image.src;
const imageArray = [
    "https://images.unsplash.com/photo-1669670201597-135315c99930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1669505834193-bffd59b994a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1653277135616-c062b194440e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646004882668-2e3936d59866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646004880866-24c19a4af999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
]

let counter = 0;

const myImageFunction = () => {
    if (counter === 5) {
        image.src = origialImageSrc;
        counter = 0;
        return;
    }
    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;
    console.log("Counter value is:", counter);
}
myButton.addEventListener("click", myImageFunction);

const inputTag = document.getElementsByClassName("form-control")[0];
const orderListTag = document.getElementsByClassName("orderList")[0];
const handleChange = () => {
    const inputValue = event.target.value;
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.append(inputValue);
    orderListTag.append(listItem);
    inputTag.value = "";
}
inputTag.addEventListener("change", handleChange);