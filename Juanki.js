const root_styles = {
  "display": "flex",
  "flex-direction": "column",
  "background-color": "rgba(0,0,0,.6)",
  "text-align": "center",
  "justify-content": "center"
};

const start = () => {

  const root = document.createElement("div");

  const fragment = document.createDocumentFragment();

  fragment.appendChild(root);

  document.appendChild(fragment);
};
