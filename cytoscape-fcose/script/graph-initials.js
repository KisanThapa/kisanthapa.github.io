var ele1 = {
  nodes: [
    { data: { id: "A" } },
    { data: { id: "B" } },
    { data: { id: "C" } },
    { data: { id: "D" } },
  ],
  edges: [
    { data: { id: "AB", source: "A", target: "B" } },
    { data: { id: "BC", source: "B", target: "C" } },
    { data: { id: "BD", source: "B", target: "D" } },
  ],
};

var ele2 = {
  nodes: [
    { data: { id: "B" } },
    { data: { id: "C" } },
    { data: { id: "D" } },
    { data: { id: "E" } },
  ],
  edges: [
    { data: { id: "BC", source: "B", target: "C" } },
    { data: { id: "BD", source: "B", target: "D" } },
    { data: { id: "CE", source: "C", target: "E" } },
  ],
};

var ele3 = {
  nodes: [
    { data: { id: "B" } },
    { data: { id: "C" } },
    { data: { id: "D" } },
    { data: { id: "F" } },
  ],
  edges: [
    { data: { id: "BC", source: "B", target: "C" } },
    { data: { id: "BD", source: "B", target: "D" } },
    { data: { id: "CF", source: "C", target: "F" } },
  ],
};

var simpleStyle = cytoscape
  .stylesheet()
  .selector("node")
  .css({
    content: "data(id)",
    "text-valign": "center",
    color: "white",
    "text-outline-width": 2,
    "text-outline-color": "#888",
  })
  .selector("edge")
  .css({
    "target-arrow-shape": "triangle",
    content: "data(type)",
    "text-outline-color": "#FFFFFF",
    "text-outline-opacity": "1",
    "text-outline-width": 2,
    "text-valign": "center",
    color: "#777777",
    width: "2px",
  })
  .selector(":selected")
  .css({
    "background-color": "black",
    "line-color": "black",
    "target-arrow-color": "black",
    "source-arrow-color": "black",
    color: "black",
  });

const graphElems = {
  cy1: ele1,
  cy2: ele2,
  cy3: ele3,
};
