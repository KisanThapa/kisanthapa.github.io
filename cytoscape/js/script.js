getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var ele1 = {
  nodes: [
    { data: { id: "A" }, position: { x: 475, y: 25 } },
    { data: { id: "B" }, position: { x: 475, y: 120 } },
    { data: { id: "C" }, position: { x: 375, y: 220 } },
    { data: { id: "D" }, position: { x: 575, y: 220 } },
  ],
  edges: [
    { data: { id: "AB", source: "A", target: "B" } },
    { data: { id: "BC", source: "B", target: "C" } },
    { data: { id: "BD", source: "B", target: "D" } },
  ],
};

var ele2 = {
  nodes: [
    { data: { id: "B" }, position: { x: 375, y: 175 } },
    { data: { id: "C" }, position: { x: 475, y: 75 } },
    { data: { id: "D" }, position: { x: 475, y: 275 } },
    { data: { id: "E" }, position: { x: 550, y: 75 } },
  ],
  edges: [
    { data: { id: "BC", source: "B", target: "C" } },
    { data: { id: "BD", source: "B", target: "D" } },
    { data: { id: "CE", source: "C", target: "E" } },
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

var cy1;
var cy2;

function redraw(elements, target) {
  window[target] = cytoscape({
    container: document.getElementById(target),
    elements,
    minZoom: 0.1,
    maxZoom: 4.0,
    style: simpleStyle,
    layout: { name: "preset" },
  });
}

redraw(ele1, "cy1");
redraw(ele2, "cy2");

function fixGraph() {
  let mergedNodes = [];

  ele2.nodes.map((node, index) => {
    let id = node.data.id;
    /* search id into other element group */
    const filteredNode = ele1.nodes.filter((nodeA, index) => {
      return nodeA.data.id === id;
    });

    if (filteredNode.length) {
      const filteredNodeId = filteredNode[0].data.id;
      let currentPosition = cy1.$("#" + filteredNodeId).position();
      filteredNode[0].position = currentPosition;
      mergedNodes.push({ ...filteredNode[0] });
    } else {
      mergedNodes.push(node);
    }
  });

  ele2.nodes = mergedNodes;
  redraw(ele2, "cy2");
}

function addNew(elementsData, target) {
  const { nodes, edges } = elementsData;
  window[target].nodes.push(nodes);
  window[target].edges.push(edges);
  const tempArr = target.split("ele");
  redraw(window[target], "cy" + tempArr[1]);
}

function add() {
  var nodeNameElem = document.getElementById("nodeName");
  var connectedNodeElem = document.getElementById("connectedNode");
  var selectedGraphElem = document.getElementById("selectedGraph");

  var newNodeData = {
    data: { id: nodeNameElem.value },
    position: { x: getRandomInt(100, 800), y: getRandomInt(100, 800) },
  };

  var newEdgeData = {
    data: {
      id: nodeNameElem.value + "" + connectedNodeElem.value,
      source: nodeNameElem.value,
      target: connectedNodeElem.value,
    },
  };

  var newElements = {
    nodes: newNodeData,
    edges: newEdgeData,
  };

  switch (selectedGraphElem.value) {
    case "A":
      addNew(newElements, "ele1");
      break;
    case "B":
      addNew(newElements, "ele2");
      break;
    default:
      console.log("please select graph.");
  }
}
