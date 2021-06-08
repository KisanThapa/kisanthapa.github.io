function createGraph(graphId) {
  console.log("create graph", graphId);
  window[graphId] = cytoscape({
    container: document.getElementById(graphId),
    ready: function () {
      this.layout({
        name: "fcose",
        step: "all",
        animationEasing: "ease-out",
      }).run();
    },
    elements: graphElems[graphId] ? graphElems[graphId] : graphElems.cy1,
    minZoom: 0.1,
    maxZoom: 4.0,
    style: simpleStyle,
  });
}

window.panelCounter = 0;

function addPanel() {
  var newGraphId = "cy" + Number(window.panelCounter + 1);

  var containerElem = document.getElementsByClassName("container")[0];
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", newGraphId);
  newDiv.setAttribute("class", "flex-item");
  newDiv.innerHTML =
    "<span style='position:absolute;top:0;left:0'>Network " +
    newGraphId +
    "</span>";

  containerElem.appendChild(newDiv);

  createGraph(newGraphId);
  window.panelCounter = window.panelCounter + 1;
}

addPanel();
addPanel();

function union() {
  var graphCount = window.panelCounter;
  var union = cy1.elements();
  for (var i = 2; i <= graphCount; i++) {
    union = union.union(window["cy" + i].elements());
  }

  window.cyUnion = cytoscape({
    container: document.getElementById("cyUnion"),
    ready: function () {
      this.layout({
        name: "fcose",
        step: "all",
        animationEasing: "ease-out",
      }).run();
    },
    elements: union.jsons(),
    minZoom: 0.1,
    maxZoom: 4.0,
    style: simpleStyle,
  });
}

function getIntersection(cytoscapeInstance) {
  var difference = cyUnion.elements().not(cytoscapeInstance.elements());
  return cyUnion.elements().not(difference).jsons();
}

function fixGraph() {
  for (var i = 1; i <= window.panelCounter; i++) {
    window["cy" + i] = cytoscape({
      container: document.getElementById("cy" + i),
      elements: getIntersection(window["cy" + i]),
      minZoom: 0.1,
      maxZoom: 4.0,
      style: simpleStyle,
      layout: {
        name: "preset",
      },
    });
  }
}

function add() {
  var nodeNameElem = document.getElementById("nodeName");
  var connectedNodeElem = document.getElementById("connectedNode");
  var selectedNetworkElem = document.getElementById("selectedNetwork");

  window[selectedNetworkElem.value].add([
    {
      group: "nodes",
      data: { id: nodeNameElem.value },
      position: { x: 100, y: 100 },
    },
    {
      group: "edges",
      data: {
        id: nodeNameElem.value + "" + connectedNodeElem.value,
        source: nodeNameElem.value,
        target: connectedNodeElem.value,
      },
    },
  ]);
}

function fcoseFix() {
  for (var i = 1; i <= window.panelCounter; i++) {
    window["cy" + i] = cytoscape({
      container: document.getElementById("cy" + i),
      elements: window["cy" + i].elements().jsons(),
      minZoom: 0.1,
      maxZoom: 4.0,
      style: simpleStyle,
      ready: function () {
        this.layout({
          name: "fcose",
          step: "all",
          animationEasing: "ease-out",
        }).run();
      },
    });
  }
}
