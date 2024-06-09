const btn = document.querySelector(".sai");
const getText = document.querySelector(".getText");
const content = document.querySelector(".getcontent");
const editorContent = document.querySelector(".editor");

// Event listener for the button to display the content
btn.addEventListener("click", function () {
  const s = editorContent.innerHTML;
  content.style.display = "block";
  content.textContent = s;
});

// Event listener for the button to get text content
getText.addEventListener("click", function () {
  const old = editorContent.textContent;
  content.style.display = "block";
  content.textContent = old;
});

/**
 * Function to create a hyperlink.
 */
const link = () => {
  const url = prompt("Enter the URL");
  document.execCommand("createLink", false, url);
};

/**
 * Function to copy selected content.
 */
const copy = () => {
  document.execCommand("copy", false, "");
};

/**
 * Function to change text color.
 */
const changeColor = () => {
  const color = prompt("Enter your color in hex ex:#f1f233");
  document.execCommand("foreColor", false, color);
};

/**
 * Function to get an image and display it in the editor.
 */
const getImage = () => {
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  let dataURI;
  reader.addEventListener(
    "load",
    function () {
      dataURI = reader.result;

      const img = document.createElement("img");
      img.src = dataURI;
      editorContent.appendChild(img);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
};

/**
 * Function to print the editor content.
 */
const printMe = () => {
  if (confirm("Check your Content before print")) {
    const body = document.body;
    let s = body.innerHTML;
    body.textContent = editorContent.innerHTML;

    document.execCommandShowHelp;
    body.style.whiteSpace = "pre";
    window.print();
    location.reload();
  }
};
