const u = document.querySelector("#uploader");
u.addEventListener("change", e => {
  const file = e.target.files;
  const reader = new FileReader();

  reader.readAsDataURL(file[0]);

  reader.onload = () => {
    const c = document.querySelector("#canvas");
    if (c.getContext) {
      const ctx = c.getContext("2d");
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const width = img.width * 0.25;
        const height = img.height * 0.25;
        c.width = width;
        c.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 5;
        ctx.setLineDash([5, 3]);
        ctx.strokeRect(0, 0, width, height);
      };
    }
  };
});

const canvas = document.querySelector("#canvas");
canvas.addEventListener("mousedown", e => {
  console.log("mousedown", e);
});
canvas.addEventListener("mousemove", e => {
  console.log("mousemove", e);
});
canvas.addEventListener("mouseup", e => {
  console.log("mouseup", e);
});
