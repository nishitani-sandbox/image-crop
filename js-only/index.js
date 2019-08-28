const u = document.querySelector("#uploader");
u.addEventListener("change", e => {
  console.log(e);
  console.log(e.target.files[0]);
});
