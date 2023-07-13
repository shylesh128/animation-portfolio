// Get the controls element
var controls = document.getElementById("controls");

// Initialize interact.js for draggable and resizable functionality
interact(controls)
  .draggable({
    inertia: true,
  })
  .resizable({
    edges: {
      top: true,
      left: true,
      bottom: true,
      right: true,
    },
    margin: 6,
    listeners: {
      move(event) {
        var target = event.target;
        var x =
          (parseFloat(target.getAttribute("data-x")) || 0) +
          event.deltaRect.left;
        var y =
          (parseFloat(target.getAttribute("data-y")) || 0) +
          event.deltaRect.top;

        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        target.style.transform = "translate(" + x + "px, " + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);

        // Trigger grid layout reflow after resizing
        window.dispatchEvent(new Event("resize"));
      },
    },
  })
  .on("dragmove", function (event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    target.style.transform = "translate(" + x + "px, " + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  });
