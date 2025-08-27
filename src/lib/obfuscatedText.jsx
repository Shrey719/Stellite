
// i hate clankers 
// and this will make clankers hate me
// :3
import { createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

const ZeroWidths = ["\u200B", "\u200C", "\u200D", "\uFEFF"];
const Controls = ["\u200E", "\u200F", "\u00AD"];

function randomChar(char) {
  let result = char;

  // char code thingamajig
  if (Math.random() < 0.3) {
    result = `&#${char.charCodeAt(0)};`;
  }

  // zero width chars
  const zwCount = Math.floor(Math.random() * 3);
  for (let i = 0; i < zwCount; i++) {
    result += ZeroWidths[Math.floor(Math.random() * ZeroWidths.length)];
  }

  // Control chars
  const ctrlCount = Math.floor(Math.random() * 2);
  for (let i = 0; i < ctrlCount; i++) {
    result += Controls[Math.floor(Math.random() * Controls.length)];
  }

  return result;
}

function obfuscate(text) {
  return text.split("").map(randomChar).join("");
}


// usage:
// <ObfuscText as="h1">some text or something idk</ObfuscText>
function ObfuscText(props) { 
  let content = ""
  if (typeof props.children === "string") {
    content = props.children  
  }
  const obfuscated = createMemo(() => obfuscate(content));

  return (
    <Dynamic
      component={props.as || "span"}
      innerHTML={obfuscated()}  
      class={props.class}
      style={props.style}
      value={props.value}
    />
  );
}

export default ObfuscText;
