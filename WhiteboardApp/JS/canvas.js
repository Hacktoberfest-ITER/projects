window.addEventListener("load", () => {
  // for touchable device
  if ("ontouchstart" in document.documentElement) {
    document.write(
      "Your device is a touch screen device. Drawable is supported for Non-touchable devices only"
    );
    return;
  }

  // keep track of pen history
  let drawHistory = [];
  let index = -1;

  // canvas attributes
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // canvas context
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // pen color attributes
  let penColor = "black";
  const penColorInput = document.querySelector(".pen-color");
  penColorInput.oninput = handleColorInput;
  function handleColorInput(e) {
    penColor = e.target.value;
  }

  // pen width attributes
  let penWidth = "5";
  const penWidthInput = document.querySelector(".pen-width");
  penWidthInput.oninput = handlePenWidth;
  function handlePenWidth(e) {
    penWidth = e.target.value;
  }

  // undo button attributes
  const undoButton = document.querySelector(".undo");
  undoButton.onclick = handleUndo;
  function handleUndo() {
    if (index <= 0) {
      clear_canvas();
    }
    index -= 1;
    drawHistory.pop();
    ctx.putImageData(drawHistory[index], 0, 0);
  }

  // clear button attributes
  const clearButton = document.querySelector(".clear");
  clearButton.onclick = handleClearCanvas;
  function handleClearCanvas() {
    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHistory = [];
    index = -1;
  }

  // canvas event listeners call
  // for normal screen
  canvas.addEventListener("mousedown", startPosition, false);
  canvas.addEventListener("mousemove", draw, false);
  canvas.addEventListener("mouseup", finishPosition);
  canvas.addEventListener("mouseout", finishPosition);

  // event lister methods
  let painting = false;

  function startPosition(e) {
    painting = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    e.preventDefault();
    draw(e);
  }

  function draw(e) {
    if (!painting) return;
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }

  function finishPosition(e) {
    if (painting) {
      ctx.stroke();
      ctx.closePath();
      painting = false;
    }
    e.preventDefault();
    if (e.type != "mouseout") {
      drawHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      index += 1;
    }
  }
});
