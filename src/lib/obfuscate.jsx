import { onMount } from "solid-js";

export default function ObfText(props) {
  let canvas;

  const { text, font = "sans-serif", fontSize = 24 } = props;

  onMount(() => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set font
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = "black";

    // Measure text for proper canvas sizing
    const metrics = ctx.measureText(text);
    const width = Math.ceil(metrics.width);
    const height = Math.ceil(fontSize * 1.2); // approximate line height

    canvas.width = width;
    canvas.height = height;

    // Re-apply font after resizing canvas
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";

    // Draw text
    ctx.fillText(text, 0, 0);
  });

  return <canvas ref={canvas} style={{ display: "inline-block" }} />;
}
