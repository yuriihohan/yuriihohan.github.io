/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/components/canvas/canvas.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/canvas/canvas.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canvas {\n  width: 85%;\n  height: 90%;\n  background: grey;\n  position: relative;\n}\nsvg {\n  height: 100%;\n  width: 100%;\n}\n.canvas-shape {\n  border: 1px transparent solid;\n  position: absolute;\n  font-size: 0;\n}\n.canvas-shape > svg {\n  width: auto;\n}\n.canvas-shape-selection {\n  border-color: blue;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/palette/palette.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/palette/palette.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".palette {\n  height: 100%;\n  background: beige;\n  display: inline-block;\n  font-size: 0;\n  display: flex;\n  flex-flow: column;\n}\n.toolbox {\n  display: table-cell;\n  padding: 0;\n  flex: 1 1 auto;\n}\n.palette > ul {\n  list-style-type: none;\n}\n.toolbox li:not(:last-child) {\n  border-bottom: 2px solid rosybrown;\n}\n\n.toolbox .my-shape {\n  margin: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/styles.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/styles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n  margin: 0;\n}\n#editor {\n  height: 100vh;\n}\n.split-pane {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.split-pane-right {\n  display: flex;\n  justify-content: center;\n  align-items: center\n}\n\n@media all and (max-width: 1000px) {\n  .split-pane-right {\n    flex: 5;\n  }\n\n  .split-pane-left {\n    flex: 1;\n  }\n}\n\n@media all and (min-width: 1000px) {\n  .split-pane-right {\n    flex: 15;\n  }\n\n  .split-pane-left {\n    flex: 1;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/actions/canvas_shape_actions.ts":
/*!*********************************************!*\
  !*** ./src/actions/canvas_shape_actions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasShapeActions;
(function (CanvasShapeActions) {
    CanvasShapeActions["ADD_SHAPE"] = "ADD_SHAPE";
    CanvasShapeActions["MOVE_SHAPE"] = "MOVE_SHAPE";
    CanvasShapeActions["BRING_TO_FRONT"] = "BRING_TO_FRONT";
    CanvasShapeActions["SEND_BACKWARD"] = "SEND_BACKWARD";
    CanvasShapeActions["SELECT_SHAPE"] = "SELECT_SHAPE";
    CanvasShapeActions["STEP_SHAPE"] = "STEP_SHAPE";
})(CanvasShapeActions = exports.CanvasShapeActions || (exports.CanvasShapeActions = {}));
function addShape(type, size, drawCoordinate) {
    return { type: CanvasShapeActions.ADD_SHAPE, payload: { type, drawCoordinate, size } };
}
exports.addShape = addShape;
function moveShape(cardId, moveToCoord) {
    return { type: CanvasShapeActions.MOVE_SHAPE, payload: { id: cardId, moveToCoord } };
}
exports.moveShape = moveShape;
function bringToFront() {
    return { type: CanvasShapeActions.BRING_TO_FRONT };
}
exports.bringToFront = bringToFront;
function bringBackwards() {
    return { type: CanvasShapeActions.SEND_BACKWARD };
}
exports.bringBackwards = bringBackwards;
function selectShape(selectedCardId) {
    return { type: CanvasShapeActions.SELECT_SHAPE, payload: { selectedCardId } };
}
exports.selectShape = selectShape;
function stepShape(stepDirection) {
    return { type: CanvasShapeActions.STEP_SHAPE, payload: { stepDirection } };
}
exports.stepShape = stepShape;


/***/ }),

/***/ "./src/components/app.tsx":
/*!********************************!*\
  !*** ./src/components/app.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! styles/styles.css */ "./src/styles/styles.css");
const palette_1 = __webpack_require__(/*! components/palette/palette */ "./src/components/palette/palette.tsx");
const canvas_1 = __webpack_require__(/*! components/canvas/canvas */ "./src/components/canvas/canvas.tsx");
const react_dnd_html5_backend_1 = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/lib/index.js");
const react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
class AppComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: "split-pane" },
            React.createElement("div", { className: "split-pane-left" },
                React.createElement(palette_1.Palette, null)),
            React.createElement("div", { className: "split-pane-right" },
                React.createElement(canvas_1.Canvas, { shapes: [] }))));
    }
}
exports.AppComponent = AppComponent;
exports.App = react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default)(AppComponent);


/***/ }),

/***/ "./src/components/canvas/canvas.css":
/*!******************************************!*\
  !*** ./src/components/canvas/canvas.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./canvas.css */ "./node_modules/css-loader/index.js!./src/components/canvas/canvas.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/canvas/canvas.tsx":
/*!******************************************!*\
  !*** ./src/components/canvas/canvas.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__(/*! components/canvas/canvas.css */ "./src/components/canvas/canvas.css");
const draggable_types_1 = __webpack_require__(/*! types/draggable_types */ "./src/types/draggable_types.ts");
const canvas_shape_1 = __webpack_require__(/*! components/canvas/canvas_shape */ "./src/components/canvas/canvas_shape.tsx");
const move_direction_1 = __webpack_require__(/*! types/move_direction */ "./src/types/move_direction.ts");
const canvas_shape_actions_1 = __webpack_require__(/*! actions/canvas_shape_actions */ "./src/actions/canvas_shape_actions.ts");
exports.canvasShapeDefaultSize = 100;
class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = (e) => {
            const keyCode = e.keyCode;
            if (keyCode >= 37 && keyCode <= 40) {
                e.preventDefault();
                this.props.onShapeStepped && this.props.onShapeStepped(this.getMoveDirection(e.keyCode));
            }
        };
        this.selectComponent = (key) => {
            const shape = this.props.shapes.find(s => s.id === key);
            if (shape === undefined) {
                throw new Error("Unknown item has been dragged");
            }
            this.props.onShapeSelected && this.props.onShapeSelected(key);
        };
        this.unselectComponent = () => {
            this.props.onShapeSelected && this.props.onShapeSelected(undefined);
        };
        this.state = {};
    }
    render() {
        const { shapes, connectDropTarget } = this.props;
        if (connectDropTarget) {
            return connectDropTarget(this.renderContent(shapes));
        }
        else {
            return this.renderContent(shapes);
        }
    }
    componentDidMount() {
        const drawingCanvas = ReactDOM.findDOMNode(this);
        const clientRect = drawingCanvas.getBoundingClientRect();
        this.offsetX = clientRect.left;
        this.offsetY = clientRect.top;
    }
    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }
    draw(type, drawCoordinate) {
        this.props.onShapeAdded && this.props.onShapeAdded(type, exports.canvasShapeDefaultSize, drawCoordinate);
    }
    moveShape(id, drawCoordinate) {
        this.props.onShapeMoved && this.props.onShapeMoved(id, drawCoordinate);
    }
    convertDragCoordToDrawCoord(dragCoordinate) {
        return { x: dragCoordinate.x - this.offsetX, y: dragCoordinate.y - this.offsetY };
    }
    coordinateIsInBoundsOf(coordinate, size) {
        const drawingCanvas = ReactDOM.findDOMNode(this);
        return (coordinate.x >= 0 &&
            coordinate.y >= 0 &&
            coordinate.x + size <= drawingCanvas.clientWidth &&
            coordinate.y + size <= drawingCanvas.clientHeight);
    }
    getMoveDirection(keyCode) {
        switch (keyCode) {
            case 37:
                return move_direction_1.MoveDirection.LEFT;
            case 38:
                return move_direction_1.MoveDirection.UP;
            case 39:
                return move_direction_1.MoveDirection.RIGHT;
            case 40:
                return move_direction_1.MoveDirection.DOWN;
        }
        throw new Error("Not expected move direction");
    }
    renderContent(shapes) {
        return (React.createElement("div", { className: "canvas", onClick: this.unselectComponent }, shapes.map(shape => (React.createElement(canvas_shape_1.CanvasShape, { shape: shape, key: shape.id, onShapeSelection: this.selectComponent, isSelected: this.props.selectedShape === shape.id })))));
    }
}
exports.CanvasComponent = CanvasComponent;
const canvasTarget = {
    drop: (props, monitor, component) => {
        const dragCoordinate = monitor.getSourceClientOffset();
        const drawCoordinate = component.convertDragCoordToDrawCoord(dragCoordinate);
        const size = monitor.getItem().size || exports.canvasShapeDefaultSize;
        if (component.coordinateIsInBoundsOf(drawCoordinate, size)) {
            if (monitor.getItemType() === draggable_types_1.DraggableTypes.PALETTE_SHAPE) {
                component.draw(monitor.getItem().type, drawCoordinate);
            }
            if (monitor.getItemType() === draggable_types_1.DraggableTypes.CANVAS_SHAPE) {
                component.moveShape(monitor.getItem().id, drawCoordinate);
            }
        }
    },
};
const CanvasDrop = react_dnd_1.DropTarget([draggable_types_1.DraggableTypes.PALETTE_SHAPE, draggable_types_1.DraggableTypes.CANVAS_SHAPE], canvasTarget, (connector, monitor) => {
    return { connectDropTarget: connector.dropTarget(), canDrop: monitor.canDrop() };
})(CanvasComponent);
function mapStateToProps(state) {
    return {
        shapes: state.canvasState.shapes,
        selectedShape: state.canvasState.selectedShape,
    };
}
const mapDispatchToProps = {
    onShapeAdded: canvas_shape_actions_1.addShape,
    onShapeMoved: canvas_shape_actions_1.moveShape,
    onShapeSelected: canvas_shape_actions_1.selectShape,
    onShapeStepped: canvas_shape_actions_1.stepShape
};
exports.Canvas = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CanvasDrop);


/***/ }),

/***/ "./src/components/canvas/canvas_shape.tsx":
/*!************************************************!*\
  !*** ./src/components/canvas/canvas_shape.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const canvas_shape_types_1 = __webpack_require__(/*! components/canvas/shapes/canvas_shape_types */ "./src/components/canvas/shapes/canvas_shape_types.ts");
const draggable_types_1 = __webpack_require__(/*! types/draggable_types */ "./src/types/draggable_types.ts");
const react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
const canvas_shape_constants_1 = __webpack_require__(/*! components/canvas/shapes/canvas_shape_constants */ "./src/components/canvas/shapes/canvas_shape_constants.ts");
class CanvasShapeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = (e) => {
            e.stopPropagation();
            this.props.onShapeSelection(this.props.shape.id);
        };
    }
    render() {
        const { shape, isSelected, isDragging, connectDragSource } = this.props;
        if (!(shape.type in canvas_shape_types_1.canvasShapeTypes)) {
            throw new TypeError("Shape type unsupported by the editor");
        }
        const content = this.renderContent(shape, isSelected);
        if (connectDragSource) {
            return connectDragSource(content);
        }
        else {
            return content;
        }
    }
    renderContent(shape, isSelected) {
        const Shape = canvas_shape_types_1.canvasShapeTypes[shape.type];
        const elementStyles = {
            transform: `translate(${shape.topCoordinate.x}px, ${shape.topCoordinate.y}px)`,
            zIndex: shape.zIndex,
            strokeWidth: canvas_shape_constants_1.CanvasShapeConstants.STROKE_WIDTH
        };
        let shapeClassName = "canvas-shape";
        if (isSelected) {
            shapeClassName += " canvas-shape-selection";
        }
        return (React.createElement("div", { className: shapeClassName, style: elementStyles, onClick: this.handleClick, onMouseDown: this.handleClick },
            React.createElement(Shape, { topCoordinate: shape.topCoordinate, size: shape.size })));
    }
}
exports.CanvasShapeComponent = CanvasShapeComponent;
const shapeSource = {
    beginDrag: (props) => {
        return { id: props.shape.id, size: props.shape.size };
    },
};
exports.CanvasShape = react_dnd_1.DragSource(draggable_types_1.DraggableTypes.CANVAS_SHAPE, shapeSource, (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
})(CanvasShapeComponent);


/***/ }),

/***/ "./src/components/canvas/shapes/canvas_shape_constants.ts":
/*!****************************************************************!*\
  !*** ./src/components/canvas/shapes/canvas_shape_constants.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasShapeConstants;
(function (CanvasShapeConstants) {
    CanvasShapeConstants.STROKE_WIDTH = 2;
})(CanvasShapeConstants = exports.CanvasShapeConstants || (exports.CanvasShapeConstants = {}));


/***/ }),

/***/ "./src/components/canvas/shapes/canvas_shape_types.ts":
/*!************************************************************!*\
  !*** ./src/components/canvas/shapes/canvas_shape_types.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = __webpack_require__(/*! components/canvas/shapes/circle */ "./src/components/canvas/shapes/circle.tsx");
const rectangle_1 = __webpack_require__(/*! components/canvas/shapes/rectangle */ "./src/components/canvas/shapes/rectangle.tsx");
const triangle_1 = __webpack_require__(/*! components/canvas/shapes/triangle */ "./src/components/canvas/shapes/triangle.tsx");
const lfc_logo_1 = __webpack_require__(/*! components/canvas/shapes/lfc_logo */ "./src/components/canvas/shapes/lfc_logo.tsx");
exports.canvasShapeTypes = {
    circle: circle_1.Circle,
    rectangle: rectangle_1.Rectangle,
    triangle: triangle_1.Triangle,
    lfc_logo: lfc_logo_1.LfcLogo
};


/***/ }),

/***/ "./src/components/canvas/shapes/circle.tsx":
/*!*************************************************!*\
  !*** ./src/components/canvas/shapes/circle.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const svg_1 = __webpack_require__(/*! controls/svg */ "./src/controls/svg.tsx");
const canvas_shape_constants_1 = __webpack_require__(/*! components/canvas/shapes/canvas_shape_constants */ "./src/components/canvas/shapes/canvas_shape_constants.ts");
class Circle extends React.Component {
    render() {
        const { topCoordinate, size } = this.props;
        const strokeWidth = 2;
        const radius = size / 2 - canvas_shape_constants_1.CanvasShapeConstants.STROKE_WIDTH;
        return React.createElement(svg_1.Svg, { width: size, height: size },
            React.createElement("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "black", stroke: "white" }));
    }
}
exports.Circle = Circle;


/***/ }),

/***/ "./src/components/canvas/shapes/lfc_logo.tsx":
/*!***************************************************!*\
  !*** ./src/components/canvas/shapes/lfc_logo.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class LfcLogo extends React.Component {
    render() {
        const { size } = this.props;
        return (React.createElement("img", { style: { width: size }, src: "http://pluspng.com/img-png/liverpool-png-liverpool-png-751.png" }));
    }
}
exports.LfcLogo = LfcLogo;


/***/ }),

/***/ "./src/components/canvas/shapes/rectangle.tsx":
/*!****************************************************!*\
  !*** ./src/components/canvas/shapes/rectangle.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const svg_1 = __webpack_require__(/*! controls/svg */ "./src/controls/svg.tsx");
const canvas_shape_constants_1 = __webpack_require__(/*! components/canvas/shapes/canvas_shape_constants */ "./src/components/canvas/shapes/canvas_shape_constants.ts");
class Rectangle extends React.Component {
    render() {
        const { size } = this.props;
        const strokeWidth = canvas_shape_constants_1.CanvasShapeConstants.STROKE_WIDTH;
        return React.createElement(svg_1.Svg, { width: size, height: size },
            React.createElement("rect", { x: strokeWidth / 2, y: strokeWidth / 2, width: size - strokeWidth, height: size - strokeWidth, fill: "black", stroke: "white" }));
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/components/canvas/shapes/triangle.tsx":
/*!***************************************************!*\
  !*** ./src/components/canvas/shapes/triangle.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const svg_1 = __webpack_require__(/*! controls/svg */ "./src/controls/svg.tsx");
const canvas_shape_constants_1 = __webpack_require__(/*! components/canvas/shapes/canvas_shape_constants */ "./src/components/canvas/shapes/canvas_shape_constants.ts");
class Triangle extends React.Component {
    render() {
        const { topCoordinate, size } = this.props;
        const strokeWidth = canvas_shape_constants_1.CanvasShapeConstants.STROKE_WIDTH;
        const points = `2, ${size - strokeWidth} ${size - strokeWidth}, ${size - strokeWidth} ${size / 2 - strokeWidth}, 2`;
        return React.createElement(svg_1.Svg, { width: size, height: size },
            React.createElement("polygon", { points: points, fill: "black", stroke: "white", "stroke-linejoin": "round" }));
    }
}
exports.Triangle = Triangle;


/***/ }),

/***/ "./src/components/control_panel/control_panel.tsx":
/*!********************************************************!*\
  !*** ./src/components/control_panel/control_panel.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const canvas_shape_actions_1 = __webpack_require__(/*! actions/canvas_shape_actions */ "./src/actions/canvas_shape_actions.ts");
const move_direction_1 = __webpack_require__(/*! types/move_direction */ "./src/types/move_direction.ts");
class ControlPanelComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.moveStepUp = (e) => {
            this.props.onShapeStepped && this.props.onShapeStepped(move_direction_1.MoveDirection.UP);
        };
        this.moveStepLeft = (e) => {
            this.props.onShapeStepped && this.props.onShapeStepped(move_direction_1.MoveDirection.LEFT);
        };
        this.moveStepDown = (e) => {
            this.props.onShapeStepped && this.props.onShapeStepped(move_direction_1.MoveDirection.DOWN);
        };
        this.moveStepRight = (e) => {
            this.props.onShapeStepped && this.props.onShapeStepped(move_direction_1.MoveDirection.RIGHT);
        };
        this.bringToFront = (e) => {
            this.props.onBringToFront && this.props.onBringToFront();
        };
        this.sendToBack = (e) => {
            this.props.onSendToBack && this.props.onSendToBack();
        };
    }
    render() {
        return (React.createElement("div", { className: "control-panel" },
            React.createElement("img", { onClick: this.bringToFront, style: { width: "33%" }, src: "public/icons/to_front.png" }),
            React.createElement("img", { onClick: this.moveStepUp, style: { width: "33%" }, src: "public/icons/up.png" }),
            React.createElement("img", { onClick: this.sendToBack, style: { width: "33%" }, src: "public/icons/to_back.png" }),
            React.createElement("img", { onClick: this.moveStepLeft, style: { width: "33%" }, src: "public/icons/left.png" }),
            React.createElement("img", { onClick: this.moveStepDown, style: { width: "33%" }, src: "public/icons/down.png" }),
            React.createElement("img", { onClick: this.moveStepRight, style: { width: "33%" }, src: "public/icons/right.png" })));
    }
}
const mapDispatchToProps = {
    onShapeStepped: canvas_shape_actions_1.stepShape,
    onSendToBack: canvas_shape_actions_1.bringBackwards,
    onBringToFront: canvas_shape_actions_1.bringToFront,
};
exports.ControlPanel = react_redux_1.connect(undefined, mapDispatchToProps)(ControlPanelComponent);


/***/ }),

/***/ "./src/components/palette/palette.css":
/*!********************************************!*\
  !*** ./src/components/palette/palette.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./palette.css */ "./node_modules/css-loader/index.js!./src/components/palette/palette.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/palette/palette.tsx":
/*!********************************************!*\
  !*** ./src/components/palette/palette.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! components/palette/palette.css */ "./src/components/palette/palette.css");
const palette_shape_1 = __webpack_require__(/*! components/palette/palette_shape */ "./src/components/palette/palette_shape.tsx");
const control_panel_1 = __webpack_require__(/*! components/control_panel/control_panel */ "./src/components/control_panel/control_panel.tsx");
const shape_type_1 = __webpack_require__(/*! types/shape_type */ "./src/types/shape_type.ts");
class Palette extends React.Component {
    render() {
        return (React.createElement("div", { className: "palette" },
            React.createElement("ul", { className: "toolbox" },
                React.createElement("li", null,
                    React.createElement(palette_shape_1.PaletteShape, { type: shape_type_1.ShapeType.Rectangle })),
                React.createElement("li", null,
                    React.createElement(palette_shape_1.PaletteShape, { type: shape_type_1.ShapeType.Circle })),
                React.createElement("li", null,
                    React.createElement(palette_shape_1.PaletteShape, { type: shape_type_1.ShapeType.Triangle })),
                React.createElement("li", null,
                    React.createElement(palette_shape_1.PaletteShape, { type: shape_type_1.ShapeType.LFCLogo }))),
            React.createElement(control_panel_1.ControlPanel, null)));
    }
}
exports.Palette = Palette;


/***/ }),

/***/ "./src/components/palette/palette_shape.tsx":
/*!**************************************************!*\
  !*** ./src/components/palette/palette_shape.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
const draggable_types_1 = __webpack_require__(/*! types/draggable_types */ "./src/types/draggable_types.ts");
const shape_type_1 = __webpack_require__(/*! types/shape_type */ "./src/types/shape_type.ts");
const svg_1 = __webpack_require__(/*! controls/svg */ "./src/controls/svg.tsx");
class PaletteShapeComponent extends React.Component {
    render() {
        const { type, isDragging, connectDragSource } = this.props;
        const content = this.renderContent(type, isDragging);
        if (connectDragSource) {
            return connectDragSource(content);
        }
        else {
            return content;
        }
    }
    renderContent(type, isDragging) {
        return (React.createElement("div", { className: "my-shape", style: { opacity: isDragging ? 0.5 : 1 } }, this.renderShapeByType(type)));
    }
    renderShapeByType(type) {
        switch (type) {
            case shape_type_1.ShapeType.Rectangle:
                return (React.createElement(svg_1.Svg, { viewBox: "0 0 100 100", width: "100%", height: "100%" },
                    React.createElement("rect", { fill: "black", style: { width: "100%", height: "100%" } })));
            case shape_type_1.ShapeType.Triangle:
                return (React.createElement(svg_1.Svg, { viewBox: "0 0 100 100", width: "100%", height: "100%" },
                    React.createElement("polygon", { points: "100,100 0,100 50,0", fill: "black" })));
            case shape_type_1.ShapeType.Circle:
                return (React.createElement(svg_1.Svg, { viewBox: "0 0 100 100", width: "100%", height: "100%" },
                    React.createElement("circle", { fill: "black", cx: "50", cy: "50", r: "50" })));
            case shape_type_1.ShapeType.LFCLogo:
                return React.createElement("img", { style: { width: "100%", height: "100%" }, src: "http://pluspng.com/img-png/liverpool-png-liverpool-png-751.png" });
        }
    }
}
exports.PaletteShapeComponent = PaletteShapeComponent;
const shapeSource = {
    beginDrag: (props) => {
        return { type: props.type };
    }
};
exports.PaletteShape = react_dnd_1.DragSource(draggable_types_1.DraggableTypes.PALETTE_SHAPE, shapeSource, (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
})(PaletteShapeComponent);


/***/ }),

/***/ "./src/controls/svg.tsx":
/*!******************************!*\
  !*** ./src/controls/svg.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Svg extends React.Component {
    render() {
        const { children, width, height, viewBox } = this.props;
        return (React.createElement("svg", { width: width, height: height, viewBox: viewBox, version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, children));
    }
}
exports.Svg = Svg;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const app_1 = __webpack_require__(/*! components/app */ "./src/components/app.tsx");
const reducers_1 = __webpack_require__(/*! reducers */ "./src/reducers/index.ts");
exports.store = redux_1.createStore(reducers_1.reducer);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: exports.store },
    React.createElement(app_1.App, null)), document.getElementById("editor"));


/***/ }),

/***/ "./src/reducers/canvas.ts":
/*!********************************!*\
  !*** ./src/reducers/canvas.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const move_direction_1 = __webpack_require__(/*! types/move_direction */ "./src/types/move_direction.ts");
const canvas_shape_actions_1 = __webpack_require__(/*! actions/canvas_shape_actions */ "./src/actions/canvas_shape_actions.ts");
exports.initialState = {
    shapes: [],
    nextShapeId: 1,
    currentMaxZIndex: 1,
};
const controlPanelStepSizePx = 10;
function calculateNextCoordinate(topCoordinate, moveDirection) {
    switch (moveDirection) {
        case move_direction_1.MoveDirection.UP:
            return { x: topCoordinate.x, y: topCoordinate.y - controlPanelStepSizePx };
        case move_direction_1.MoveDirection.DOWN:
            return { x: topCoordinate.x, y: topCoordinate.y + controlPanelStepSizePx };
        case move_direction_1.MoveDirection.LEFT:
            return { x: topCoordinate.x - controlPanelStepSizePx, y: topCoordinate.y };
        case move_direction_1.MoveDirection.RIGHT:
            return { x: topCoordinate.x + controlPanelStepSizePx, y: topCoordinate.y };
    }
}
function reducer(state = exports.initialState, action) {
    switch (action.type) {
        case canvas_shape_actions_1.CanvasShapeActions.ADD_SHAPE: {
            const newShape = {
                type: action.payload.type,
                size: action.payload.size,
                topCoordinate: action.payload.drawCoordinate,
                id: state.nextShapeId,
                zIndex: state.currentMaxZIndex,
            };
            state.nextShapeId = state.nextShapeId + 1;
            return Object.assign({}, state, { shapes: [...state.shapes, newShape] });
        }
        case canvas_shape_actions_1.CanvasShapeActions.MOVE_SHAPE: {
            const { id, moveToCoord } = action.payload;
            return Object.assign({}, state, { shapes: state.shapes.map(shape => (shape.id === id ? Object.assign({}, shape, { topCoordinate: moveToCoord }) : shape)) });
        }
        case canvas_shape_actions_1.CanvasShapeActions.SELECT_SHAPE: {
            return Object.assign({}, state, { selectedShape: action.payload.selectedCardId });
        }
        case canvas_shape_actions_1.CanvasShapeActions.STEP_SHAPE: {
            const moveDirection = action.payload.stepDirection;
            return Object.assign({}, state, { shapes: state.shapes.map(shape => shape.id === state.selectedShape
                    ? Object.assign({}, shape, { topCoordinate: calculateNextCoordinate(shape.topCoordinate, moveDirection) }) : shape) });
        }
        case canvas_shape_actions_1.CanvasShapeActions.BRING_TO_FRONT: {
            return Object.assign({}, state, { shapes: state.shapes.map(shape => shape.id === state.selectedShape
                    ? Object.assign({}, shape, { zIndex: Math.max(...state.shapes.map(s => s.zIndex)) + 1 }) : shape) });
        }
        case canvas_shape_actions_1.CanvasShapeActions.SEND_BACKWARD: {
            return Object.assign({}, state, { shapes: state.shapes.map(shape => (shape.id === state.selectedShape ? Object.assign({}, shape, { zIndex: 1 }) : Object.assign({}, shape, { zIndex: shape.zIndex + 1 }))) });
        }
        default:
            return state;
    }
}
exports.reducer = reducer;


/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const canvasReducers = __webpack_require__(/*! reducers/canvas */ "./src/reducers/canvas.ts");
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
exports.initialState = {
    canvasState: canvasReducers.initialState
};
exports.reducer = redux_1.combineReducers({
    canvasState: canvasReducers.reducer
});


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./styles.css */ "./node_modules/css-loader/index.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/types/draggable_types.ts":
/*!**************************************!*\
  !*** ./src/types/draggable_types.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DraggableTypes = {
    PALETTE_SHAPE: "palette_shape",
    CANVAS_SHAPE: "canvas_shape"
};


/***/ }),

/***/ "./src/types/move_direction.ts":
/*!*************************************!*\
  !*** ./src/types/move_direction.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["UP"] = "up";
    MoveDirection["DOWN"] = "down";
    MoveDirection["LEFT"] = "left";
    MoveDirection["RIGHT"] = "right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./src/types/shape_type.ts":
/*!*********************************!*\
  !*** ./src/types/shape_type.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType;
(function (ShapeType) {
    ShapeType["Rectangle"] = "rectangle";
    ShapeType["Circle"] = "circle";
    ShapeType["Triangle"] = "triangle";
    ShapeType["LFCLogo"] = "lfc_logo";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/styles/styles.css ./src/index.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/styles/styles.css */"./src/styles/styles.css");
module.exports = __webpack_require__(/*! ./src/index.tsx */"./src/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map