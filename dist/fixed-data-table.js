/**
 * FixedDataTable v0.7.15 
 *
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["FixedDataTable"] = factory(require("react"), require("react-dom"));
	else
		root["FixedDataTable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_47__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(25);
	module.exports = __webpack_require__(27);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRoot
	 */

	'use strict';

	var _FixedDataTable = __webpack_require__(28);

	var _FixedDataTable2 = _interopRequireDefault(_FixedDataTable);

	var _FixedDataTableCellDefault = __webpack_require__(68);

	var _FixedDataTableCellDefault2 = _interopRequireDefault(_FixedDataTableCellDefault);

	var _FixedDataTableColumn = __webpack_require__(66);

	var _FixedDataTableColumn2 = _interopRequireDefault(_FixedDataTableColumn);

	var _FixedDataTableColumnGroup = __webpack_require__(65);

	var _FixedDataTableColumnGroup2 = _interopRequireDefault(_FixedDataTableColumnGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FixedDataTableRoot = {
	  Cell: _FixedDataTableCellDefault2.default,
	  Column: _FixedDataTableColumn2.default,
	  ColumnGroup: _FixedDataTableColumnGroup2.default,
	  Table: _FixedDataTable2.default
	};

	FixedDataTableRoot.version = '0.7.15';
	module.exports = FixedDataTableRoot;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Copyright Schrodinger, LLC
	                                                                                                                                                                                                                                                                   * All rights reserved.
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * This source code is licensed under the BSD-style license found in the
	                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
	                                                                                                                                                                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * @providesModule FixedDataTable
	                                                                                                                                                                                                                                                                   * @typechecks
	                                                                                                                                                                                                                                                                   * @noflow
	                                                                                                                                                                                                                                                                   */

	/*eslint no-bitwise:1*/

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _ReactComponentWithPureRenderMixin = __webpack_require__(31);

	var _ReactComponentWithPureRenderMixin2 = _interopRequireDefault(_ReactComponentWithPureRenderMixin);

	var _ReactWheelHandler = __webpack_require__(32);

	var _ReactWheelHandler2 = _interopRequireDefault(_ReactWheelHandler);

	var _ReactTouchHandler = __webpack_require__(40);

	var _ReactTouchHandler2 = _interopRequireDefault(_ReactTouchHandler);

	var _Scrollbar = __webpack_require__(41);

	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);

	var _FixedDataTableBufferedRows = __webpack_require__(56);

	var _FixedDataTableBufferedRows2 = _interopRequireDefault(_FixedDataTableBufferedRows);

	var _FixedDataTableColumnResizeHandle = __webpack_require__(72);

	var _FixedDataTableColumnResizeHandle2 = _interopRequireDefault(_FixedDataTableColumnResizeHandle);

	var _FixedDataTableRow = __webpack_require__(61);

	var _FixedDataTableRow2 = _interopRequireDefault(_FixedDataTableRow);

	var _FixedDataTableScrollHelper = __webpack_require__(73);

	var _FixedDataTableScrollHelper2 = _interopRequireDefault(_FixedDataTableScrollHelper);

	var _FixedDataTableWidthHelper = __webpack_require__(75);

	var _FixedDataTableWidthHelper2 = _interopRequireDefault(_FixedDataTableWidthHelper);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _debounceCore = __webpack_require__(76);

	var _debounceCore2 = _interopRequireDefault(_debounceCore);

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _invariant = __webpack_require__(55);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _joinClasses = __webpack_require__(69);

	var _joinClasses2 = _interopRequireDefault(_joinClasses);

	var _shallowEqual = __webpack_require__(71);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _FixedDataTableTranslateDOMPosition = __webpack_require__(50);

	var _FixedDataTableTranslateDOMPosition2 = _interopRequireDefault(_FixedDataTableTranslateDOMPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _React2.default.PropTypes;

	var ReactChildren = _React2.default.Children;

	var EMPTY_OBJECT = {};
	var BORDER_HEIGHT = 1;
	var HEADER = 'header';
	var FOOTER = 'footer';
	var CELL = 'cell';
	var DRAG_SCROLL_SPEED = 15;
	var DRAG_SCROLL_BUFFER = 100;

	/**
	 * Data grid component with fixed or scrollable header and columns.
	 *
	 * The layout of the data table is as follows:
	 *
	 * ```
	 * +---------------------------------------------------+
	 * | Fixed Column Group    | Scrollable Column Group   |
	 * | Header                | Header                    |
	 * |                       |                           |
	 * +---------------------------------------------------+
	 * |                       |                           |
	 * | Fixed Header Columns  | Scrollable Header Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Body Columns    | Scrollable Body Columns   |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Footer Columns  | Scrollable Footer Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * ```
	 *
	 * - Fixed Column Group Header: These are the headers for a group
	 *   of columns if included in the table that do not scroll
	 *   vertically or horizontally.
	 *
	 * - Scrollable Column Group Header: The header for a group of columns
	 *   that do not move while scrolling vertically, but move horizontally
	 *   with the horizontal scrolling.
	 *
	 * - Fixed Header Columns: The header columns that do not move while scrolling
	 *   vertically or horizontally.
	 *
	 * - Scrollable Header Columns: The header columns that do not move
	 *   while scrolling vertically, but move horizontally with the horizontal
	 *   scrolling.
	 *
	 * - Fixed Body Columns: The body columns that do not move while scrolling
	 *   horizontally, but move vertically with the vertical scrolling.
	 *
	 * - Scrollable Body Columns: The body columns that move while scrolling
	 *   vertically or horizontally.
	 */
	var FixedDataTable = _React2.default.createClass({
	  displayName: 'FixedDataTable',


	  propTypes: {

	    /**
	     * Pixel width of table. If all columns do not fit,
	     * a horizontal scrollbar will appear.
	     */
	    width: PropTypes.number.isRequired,

	    /**
	     * Pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    height: PropTypes.number,

	    /**
	     * Class name to be passed into parent container
	     */
	    className: PropTypes.string,

	    /**
	     * Maximum pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    maxHeight: PropTypes.number,

	    /**
	     * Pixel height of table's owner, this is used in a managed scrolling
	     * situation when you want to slide the table up from below the fold
	     * without having to constantly update the height on every scroll tick.
	     * Instead, vary this property on scroll. By using `ownerHeight`, we
	     * over-render the table while making sure the footer and horizontal
	     * scrollbar of the table are visible when the current space for the table
	     * in view is smaller than the final, over-flowing height of table. It
	     * allows us to avoid resizing and reflowing table when it is moving in the
	     * view.
	     *
	     * This is used if `ownerHeight < height` (or `maxHeight`).
	     */
	    ownerHeight: PropTypes.number,

	    overflowX: PropTypes.oneOf(['hidden', 'auto']),
	    overflowY: PropTypes.oneOf(['hidden', 'auto']),

	    /**
	     * Boolean flag indicating of touch scrolling should be enabled
	     * This feature is current in beta and may have bugs
	     */
	    touchScrollEnabled: PropTypes.bool,

	    /**
	     * Hide the scrollbar but still enable scroll functionality
	     */
	    showScrollbarX: PropTypes.bool,
	    showScrollbarY: PropTypes.bool,

	    /**
	     * Callback when horizontally scrolling the grid.
	     *
	     * Return false to stop propagation.
	     */
	    onHorizontalScroll: PropTypes.func,

	    /**
	     * Callback when vertically scrolling the grid.
	     *
	     * Return false to stop propagation.
	     */
	    onVerticalScroll: PropTypes.func,

	    /**
	     * Number of rows in the table.
	     */
	    rowsCount: PropTypes.number.isRequired,

	    /**
	     * Pixel height of rows unless `rowHeightGetter` is specified and returns
	     * different value.
	     */
	    rowHeight: PropTypes.number.isRequired,

	    /**
	     * If specified, `rowHeightGetter(index)` is called for each row and the
	     * returned value overrides `rowHeight` for particular row.
	     */
	    rowHeightGetter: PropTypes.func,

	    /**
	     * To get any additional CSS classes that should be added to a row,
	     * `rowClassNameGetter(index)` is called.
	     */
	    rowClassNameGetter: PropTypes.func,

	    /**
	     * If specified, `rowKeyGetter(index)` is called for each row and the
	     * returned value overrides `key` for the particular row.
	     */
	    rowKeyGetter: PropTypes.func,

	    /**
	     * Pixel height of the column group header.
	     */
	    groupHeaderHeight: PropTypes.number,

	    /**
	     * Pixel height of header.
	     */
	    headerHeight: PropTypes.number.isRequired,

	    /**
	     * Pixel height of footer.
	     */
	    footerHeight: PropTypes.number,

	    /**
	     * Value of horizontal scroll.
	     */
	    scrollLeft: PropTypes.number,

	    /**
	     * Index of column to scroll to.
	     */
	    scrollToColumn: PropTypes.number,

	    /**
	     * Value of vertical scroll.
	     */
	    scrollTop: PropTypes.number,

	    /**
	     * Index of row to scroll to.
	     */
	    scrollToRow: PropTypes.number,

	    /**
	     * Callback that is called when scrolling starts with current horizontal
	     * and vertical scroll values.
	     */
	    onScrollStart: PropTypes.func,

	    /**
	     * Callback that is called when scrolling ends or stops with new horizontal
	     * and vertical scroll values.
	     */
	    onScrollEnd: PropTypes.func,

	    /**
	     * If enabled scroll events will not be propagated outside of the table.
	     */
	    stopScrollPropagation: PropTypes.bool,

	    /**
	     * Callback that is called when `rowHeightGetter` returns a different height
	     * for a row than the `rowHeight` prop. This is necessary because initially
	     * table estimates heights of some parts of the content.
	     */
	    onContentHeightChange: PropTypes.func,

	    /**
	     * Callback that is called when a row is clicked.
	     */
	    onRowClick: PropTypes.func,

	    /**
	     * Callback that is called when a row is double clicked.
	     */
	    onRowDoubleClick: PropTypes.func,

	    /**
	     * Callback that is called when a mouse-down event happens on a row.
	     */
	    onRowMouseDown: PropTypes.func,

	    /**
	     * Callback that is called when a mouse-enter event happens on a row.
	     */
	    onRowMouseEnter: PropTypes.func,

	    /**
	     * Callback that is called when a mouse-leave event happens on a row.
	     */
	    onRowMouseLeave: PropTypes.func,

	    /**
	     * Callback that is called when resizer has been released
	     * and column needs to be updated.
	     *
	     * Required if the isResizable property is true on any column.
	     *
	     * ```
	     * function(
	     *   newColumnWidth: number,
	     *   columnKey: string,
	     * )
	     * ```
	     */
	    onColumnResizeEndCallback: PropTypes.func,

	    /**
	     * Callback that is called when reordering has been completed
	     * and columns need to be updated.
	     *
	     * ```
	     * function(
	     *   event {
	     *     columnBefore: string|undefined, // the column before the new location of this one
	     *     columnAfter: string|undefined,  // the column after the new location of this one
	     *     reorderColumn: string,          // the column key that was just reordered
	     *   }
	     * )
	     * ```
	     */
	    onColumnReorderEndCallback: PropTypes.func,

	    /**
	     * Whether a column is currently being resized.
	     */
	    isColumnResizing: PropTypes.bool,

	    /**
	     * Whether columns are currently being reordered.
	     */
	    isColumnReordering: PropTypes.bool,

	    /**
	     * The number of rows outside the viewport to prerender. Defaults to roughly
	     * half of the number of visible rows.
	     */
	    bufferRowCount: PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      footerHeight: 0,
	      groupHeaderHeight: 0,
	      headerHeight: 0,
	      showScrollbarX: true,
	      showScrollbarY: true,
	      touchScrollEnabled: false,
	      stopScrollPropagation: false
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var props = this.props;

	    var viewportHeight = (props.height === undefined ? props.maxHeight : props.height) - (props.headerHeight || 0) - (props.footerHeight || 0) - (props.groupHeaderHeight || 0);
	    this._scrollHelper = new _FixedDataTableScrollHelper2.default(props.rowsCount, props.rowHeight, viewportHeight, props.rowHeightGetter);

	    this._didScrollStop = (0, _debounceCore2.default)(this._didScrollStop, 200, this);

	    var touchEnabled = props.touchScrollEnabled === true;

	    this._wheelHandler = new _ReactWheelHandler2.default(this._onScroll, this._shouldHandleWheelX, this._shouldHandleWheelY, props.stopScrollPropagation);
	    this._touchHandler = new _ReactTouchHandler2.default(this._onScroll, touchEnabled && this._shouldHandleWheelX, touchEnabled && this._shouldHandleWheelY, props.stopScrollPropagation);

	    this.setState(this._calculateState(props));
	  },
	  _shouldHandleWheelX: function _shouldHandleWheelX( /*number*/delta) /*boolean*/{
	    if (this.props.overflowX === 'hidden') {
	      return false;
	    }

	    delta = Math.round(delta);
	    if (delta === 0) {
	      return false;
	    }

	    return delta < 0 && this.state.scrollX > 0 || delta >= 0 && this.state.scrollX < this.state.maxScrollX;
	  },
	  _shouldHandleWheelY: function _shouldHandleWheelY( /*number*/delta) /*boolean*/{
	    if (this.props.overflowY === 'hidden' || delta === 0) {
	      return false;
	    }

	    delta = Math.round(delta);
	    if (delta === 0) {
	      return false;
	    }

	    return delta < 0 && this.state.scrollY > 0 || delta >= 0 && this.state.scrollY < this.state.maxScrollY;
	  },
	  _reportContentHeight: function _reportContentHeight() {
	    var scrollContentHeight = this.state.scrollContentHeight;
	    var reservedHeight = this.state.reservedHeight;
	    var requiredHeight = scrollContentHeight + reservedHeight;
	    var contentHeight;
	    var useMaxHeight = this.props.height === undefined;
	    if (useMaxHeight && this.props.maxHeight > requiredHeight) {
	      contentHeight = requiredHeight;
	    } else if (this.state.height > requiredHeight && this.props.ownerHeight) {
	      contentHeight = Math.max(requiredHeight, this.props.ownerHeight);
	    } else {
	      contentHeight = this.state.height + this.state.maxScrollY;
	    }
	    if (contentHeight !== this._contentHeight && this.props.onContentHeightChange) {
	      this.props.onContentHeightChange(contentHeight);
	    }
	    this._contentHeight = contentHeight;
	  },
	  componentDidMount: function componentDidMount() {
	    this._reportContentHeight();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    var newOverflowX = nextProps.overflowX;
	    var newOverflowY = nextProps.overflowY;
	    var touchEnabled = nextProps.touchScrollEnabled === true;

	    if (newOverflowX !== this.props.overflowX || newOverflowY !== this.props.overflowY) {
	      this._wheelHandler = new _ReactWheelHandler2.default(this._onScroll, newOverflowX !== 'hidden', // Should handle horizontal scroll
	      newOverflowY !== 'hidden' // Should handle vertical scroll
	      );
	      this._touchHandler = new _ReactTouchHandler2.default(this._onScroll, newOverflowX !== 'hidden' && touchEnabled, // Should handle horizontal scroll
	      newOverflowY !== 'hidden' && touchEnabled // Should handle vertical scroll
	      );
	    }

	    // In the case of controlled scrolling, notify.
	    if (this.props.ownerHeight !== nextProps.ownerHeight || this.props.scrollTop !== nextProps.scrollTop || this.props.scrollLeft !== nextProps.scrollLeft) {
	      this._didScrollStart();
	    }
	    this._didScrollStop();

	    this.setState(this._calculateState(nextProps, this.state));
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._reportContentHeight();
	  },
	  render: function render() /*object*/{
	    var state = this.state;
	    var props = this.props;

	    var onColumnReorder = props.onColumnReorderEndCallback ? this._onColumnReorder : null;

	    var groupHeader;
	    if (state.useGroupHeader) {
	      groupHeader = _React2.default.createElement(_FixedDataTableRow2.default, {
	        key: 'group_header',
	        isScrolling: this._isScrolling,
	        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableLayout/header'), (0, _cx2.default)('public/fixedDataTable/header')),
	        width: state.width,
	        height: state.groupHeaderHeight,
	        index: 0,
	        zIndex: 1,
	        offsetTop: 0,
	        scrollLeft: state.scrollX,
	        fixedColumns: state.groupHeaderFixedColumns,
	        scrollableColumns: state.groupHeaderScrollableColumns,
	        maxVisibleColumns: state.maxVisibleColumns,
	        onColumnResize: this._onColumnResize,
	        onColumnReorder: onColumnReorder,
	        onColumnReorderMove: this._onColumnReorderMove
	      });
	    }

	    var maxScrollY = this.state.maxScrollY;
	    var showScrollbarX = state.maxScrollX > 0 && state.overflowX !== 'hidden' && state.showScrollbarX !== false;
	    var showScrollbarY = maxScrollY > 0 && state.overflowY !== 'hidden' && state.showScrollbarY !== false;
	    var scrollbarXHeight = showScrollbarX ? _Scrollbar2.default.SIZE : 0;
	    var scrollbarYHeight = state.height - scrollbarXHeight - 2 * BORDER_HEIGHT - state.footerHeight;

	    var headerOffsetTop = state.useGroupHeader ? state.groupHeaderHeight : 0;
	    var bodyOffsetTop = headerOffsetTop + state.headerHeight;
	    scrollbarYHeight -= bodyOffsetTop;
	    var bottomSectionOffset = 0;
	    var footOffsetTop = props.maxHeight != null ? bodyOffsetTop + state.bodyHeight : bodyOffsetTop + scrollbarYHeight;
	    var rowsContainerHeight = footOffsetTop + state.footerHeight;

	    if (props.ownerHeight !== undefined && props.ownerHeight < state.height) {
	      bottomSectionOffset = props.ownerHeight - state.height;

	      footOffsetTop = Math.min(footOffsetTop, props.ownerHeight - state.footerHeight - scrollbarXHeight);

	      scrollbarYHeight = Math.max(0, footOffsetTop - bodyOffsetTop);
	    }

	    var verticalScrollbar;
	    if (showScrollbarY) {
	      verticalScrollbar = _React2.default.createElement(_Scrollbar2.default, {
	        size: scrollbarYHeight,
	        contentSize: scrollbarYHeight + maxScrollY,
	        onScroll: this._onVerticalScroll,
	        verticalTop: bodyOffsetTop,
	        position: state.scrollY
	      });
	    }

	    var horizontalScrollbar;
	    if (showScrollbarX) {
	      var scrollbarXWidth = state.width;
	      horizontalScrollbar = _React2.default.createElement(HorizontalScrollbar, {
	        contentSize: scrollbarXWidth + state.maxScrollX,
	        offset: bottomSectionOffset,
	        onScroll: this._onHorizontalScroll,
	        position: state.scrollX,
	        size: scrollbarXWidth
	      });
	    }

	    var dragKnob = _React2.default.createElement(_FixedDataTableColumnResizeHandle2.default, {
	      height: state.height,
	      initialWidth: state.columnResizingData.width || 0,
	      minWidth: state.columnResizingData.minWidth || 0,
	      maxWidth: state.columnResizingData.maxWidth || Number.MAX_VALUE,
	      visible: !!state.isColumnResizing,
	      leftOffset: state.columnResizingData.left || 0,
	      knobHeight: state.headerHeight,
	      initialEvent: state.columnResizingData.initialEvent,
	      onColumnResizeEnd: props.onColumnResizeEndCallback,
	      columnKey: state.columnResizingData.key
	    });

	    var footer = null;
	    if (state.footerHeight) {
	      footer = _React2.default.createElement(_FixedDataTableRow2.default, {
	        key: 'footer',
	        isScrolling: this._isScrolling,
	        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableLayout/footer'), (0, _cx2.default)('public/fixedDataTable/footer')),
	        width: state.width,
	        height: state.footerHeight,
	        index: -1,
	        zIndex: 1,
	        maxVisibleColumns: state.maxVisibleColumns,
	        offsetTop: footOffsetTop,
	        fixedColumns: state.footFixedColumns,
	        scrollableColumns: state.footScrollableColumns,
	        scrollLeft: state.scrollX
	      });
	    }

	    var rows = this._renderRows(bodyOffsetTop);

	    var header = _React2.default.createElement(_FixedDataTableRow2.default, {
	      key: 'header',
	      isScrolling: this._isScrolling,
	      className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableLayout/header'), (0, _cx2.default)('public/fixedDataTable/header')),
	      width: state.width,
	      height: state.headerHeight,
	      index: -1,
	      zIndex: 1,
	      offsetTop: headerOffsetTop,
	      scrollLeft: state.scrollX,
	      fixedColumns: state.headFixedColumns,
	      scrollableColumns: state.headScrollableColumns,
	      maxVisibleColumns: state.maxVisibleColumns,
	      onColumnResize: this._onColumnResize,
	      onColumnReorder: onColumnReorder,
	      onColumnReorderMove: this._onColumnReorderMove,
	      onColumnReorderEnd: this._onColumnReorderEnd,
	      isColumnReordering: !!state.isColumnReordering,
	      columnReorderingData: state.columnReorderingData
	    });

	    var topShadow;
	    var bottomShadow;
	    if (state.scrollY) {
	      topShadow = _React2.default.createElement('div', {
	        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableLayout/topShadow'), (0, _cx2.default)('public/fixedDataTable/topShadow')),
	        style: { top: bodyOffsetTop }
	      });
	    }

	    if (state.ownerHeight != null && state.ownerHeight < state.height && state.scrollContentHeight + state.reservedHeight > state.ownerHeight || state.scrollY < maxScrollY) {
	      bottomShadow = _React2.default.createElement('div', {
	        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableLayout/bottomShadow'), (0, _cx2.default)('public/fixedDataTable/bottomShadow')),
	        style: { top: footOffsetTop }
	      });
	    }

	    return _React2.default.createElement(
	      'div',
	      {
	        className: (0, _joinClasses2.default)(this.state.className, (0, _cx2.default)('fixedDataTableLayout/main'), (0, _cx2.default)('public/fixedDataTable/main')),
	        onWheel: this._wheelHandler.onWheel,
	        onTouchStart: this._touchHandler.onTouchStart,
	        onTouchEnd: this._touchHandler.onTouchEnd,
	        onTouchMove: this._touchHandler.onTouchMove,
	        onTouchCancel: this._touchHandler.onTouchCancel,
	        style: { height: state.height, width: state.width } },
	      _React2.default.createElement(
	        'div',
	        {
	          className: (0, _cx2.default)('fixedDataTableLayout/rowsContainer'),
	          style: { height: rowsContainerHeight, width: state.width } },
	        dragKnob,
	        groupHeader,
	        header,
	        rows,
	        footer,
	        topShadow,
	        bottomShadow
	      ),
	      verticalScrollbar,
	      horizontalScrollbar
	    );
	  },
	  _renderRows: function _renderRows( /*number*/offsetTop) /*object*/{
	    var state = this.state;

	    return _React2.default.createElement(_FixedDataTableBufferedRows2.default, {
	      isScrolling: this._isScrolling,
	      defaultRowHeight: state.rowHeight,
	      firstRowIndex: state.firstRowIndex,
	      firstRowOffset: state.firstRowOffset,
	      fixedColumns: state.bodyFixedColumns,
	      height: state.bodyHeight,
	      maxVisibleColumns: state.maxVisibleColumns,
	      offsetTop: offsetTop,
	      onRowClick: state.onRowClick,
	      onRowDoubleClick: state.onRowDoubleClick,
	      onRowMouseDown: state.onRowMouseDown,
	      onRowMouseEnter: state.onRowMouseEnter,
	      onRowMouseLeave: state.onRowMouseLeave,
	      rowClassNameGetter: state.rowClassNameGetter,
	      rowsCount: state.rowsCount,
	      rowGetter: state.rowGetter,
	      rowHeightGetter: state.rowHeightGetter,
	      rowKeyGetter: state.rowKeyGetter,
	      scrollLeft: state.scrollX,
	      scrollableColumns: state.bodyScrollableColumns,
	      showLastRowBorder: true,
	      width: state.width,
	      rowPositionGetter: this._scrollHelper.getRowPosition,
	      bufferRowCount: this.state.bufferRowCount
	    });
	  },


	  /**
	   * This is called when a cell that is in the header of a column has its
	   * resizer knob clicked on. It displays the resizer and puts in the correct
	   * location on the table.
	   */
	  _onColumnResize: function _onColumnResize(
	  /*number*/combinedWidth,
	  /*number*/leftOffset,
	  /*number*/cellWidth,
	  /*?number*/cellMinWidth,
	  /*?number*/cellMaxWidth,
	  /*number|string*/columnKey,
	  /*object*/event) {
	    this.setState({
	      isColumnResizing: true,
	      columnResizingData: {
	        left: leftOffset + combinedWidth - cellWidth,
	        width: cellWidth,
	        minWidth: cellMinWidth,
	        maxWidth: cellMaxWidth,
	        initialEvent: {
	          clientX: event.clientX,
	          clientY: event.clientY,
	          preventDefault: _emptyFunction2.default
	        },
	        key: columnKey
	      }
	    });
	  },
	  _onColumnReorder: function _onColumnReorder(
	  /*string*/columnKey,
	  /*number*/width,
	  /*number*/left,
	  /*object*/event) {
	    // No native support in IE11 for find, findIndex, or includes, so using some.
	    var isFixed = this.state.headFixedColumns.some(function (column) {
	      return column.props.columnKey === columnKey;
	    });

	    this.setState({
	      isColumnReordering: true,
	      columnReorderingData: {
	        dragDistance: 0,
	        isFixed: isFixed,
	        scrollStart: this.state.scrollX,
	        columnKey: columnKey,
	        columnWidth: width,
	        originalLeft: left,
	        columnsBefore: [],
	        columnsAfter: []
	      }
	    });
	  },
	  _onColumnReorderMove: function _onColumnReorderMove(
	  /*number*/deltaX) {
	    //NOTE Need to clone this object when use pureRendering
	    var reorderingData = _extends({}, this.state.columnReorderingData);
	    reorderingData.dragDistance = deltaX;
	    reorderingData.columnBefore = undefined;
	    reorderingData.columnAfter = undefined;

	    var isFixedColumn = this.state.columnReorderingData.isFixed;
	    var scrollX = this.state.scrollX;

	    if (!isFixedColumn) {
	      //Relative dragX position on scroll
	      var dragX = reorderingData.originalLeft - reorderingData.scrollStart + reorderingData.dragDistance;

	      var fixedColumnsWidth = this.state.bodyFixedColumns.reduce(function (sum, column) {
	        return sum + column.props.width;
	      }, 0);
	      var relativeWidth = this.props.width - fixedColumnsWidth;

	      //Scroll the table left or right if we drag near the edges of the table
	      if (dragX > relativeWidth - DRAG_SCROLL_BUFFER) {
	        scrollX = Math.min(scrollX + DRAG_SCROLL_SPEED, this.state.maxScrollX);
	      } else if (dragX <= DRAG_SCROLL_BUFFER) {
	        scrollX = Math.max(scrollX - DRAG_SCROLL_SPEED, 0);
	      }

	      reorderingData.dragDistance += this.state.scrollX - reorderingData.scrollStart;
	    }

	    this.setState({
	      scrollX: scrollX,
	      columnReorderingData: reorderingData
	    });
	  },
	  _onColumnReorderEnd: function _onColumnReorderEnd(
	  /*object*/props,
	  /*object*/event) {

	    var columnBefore = this.state.columnReorderingData.columnBefore;
	    var columnAfter = this.state.columnReorderingData.columnAfter;
	    var reorderColumn = this.state.columnReorderingData.columnKey;
	    var cancelReorder = this.state.columnReorderingData.cancelReorder;

	    this.setState({
	      isColumnReordering: false,
	      columnReorderingData: {}
	    });

	    if (cancelReorder) {
	      return;
	    }

	    this.props.onColumnReorderEndCallback({
	      columnBefore: columnBefore, columnAfter: columnAfter, reorderColumn: reorderColumn
	    });

	    var onHorizontalScroll = this.props.onHorizontalScroll;
	    if (this.state.columnReorderingData.scrollStart !== this.state.scrollX && onHorizontalScroll) {
	      onHorizontalScroll(this.state.scrollX);
	    };
	  },
	  _areColumnSettingsIdentical: function _areColumnSettingsIdentical(oldColumns, newColumns) {
	    if (oldColumns.length !== newColumns.length) {
	      return false;
	    }
	    for (var index = 0; index < oldColumns.length; ++index) {
	      if (!(0, _shallowEqual2.default)(oldColumns[index].props, newColumns[index].props)) {
	        return false;
	      }
	    }
	    return true;
	  },
	  _populateColumnsAndColumnData: function _populateColumnsAndColumnData(columns, columnGroups, oldState) {
	    var canReuseColumnSettings = false;
	    var canReuseColumnGroupSettings = false;

	    if (oldState && oldState.columns) {
	      canReuseColumnSettings = this._areColumnSettingsIdentical(columns, oldState.columns);
	    }
	    if (oldState && oldState.columnGroups && columnGroups) {
	      canReuseColumnGroupSettings = this._areColumnSettingsIdentical(columnGroups, oldState.columnGroups);
	    }

	    var columnInfo = {};
	    if (canReuseColumnSettings) {
	      columnInfo.bodyFixedColumns = oldState.bodyFixedColumns;
	      columnInfo.bodyScrollableColumns = oldState.bodyScrollableColumns;
	      columnInfo.headFixedColumns = oldState.headFixedColumns;
	      columnInfo.headScrollableColumns = oldState.headScrollableColumns;
	      columnInfo.footFixedColumns = oldState.footFixedColumns;
	      columnInfo.footScrollableColumns = oldState.footScrollableColumns;
	    } else {
	      var bodyColumnTypes = this._splitColumnTypes(columns);
	      columnInfo.bodyFixedColumns = bodyColumnTypes.fixed;
	      columnInfo.bodyScrollableColumns = bodyColumnTypes.scrollable;

	      var headColumnTypes = this._splitColumnTypes(this._selectColumnElement(HEADER, columns));
	      columnInfo.headFixedColumns = headColumnTypes.fixed;
	      columnInfo.headScrollableColumns = headColumnTypes.scrollable;

	      var footColumnTypes = this._splitColumnTypes(this._selectColumnElement(FOOTER, columns));
	      columnInfo.footFixedColumns = footColumnTypes.fixed;
	      columnInfo.footScrollableColumns = footColumnTypes.scrollable;
	    }

	    if (canReuseColumnGroupSettings) {
	      columnInfo.groupHeaderFixedColumns = oldState.groupHeaderFixedColumns;
	      columnInfo.groupHeaderScrollableColumns = oldState.groupHeaderScrollableColumns;
	    } else {
	      if (columnGroups) {
	        var groupHeaderColumnTypes = this._splitColumnTypes(this._selectColumnElement(HEADER, columnGroups));
	        columnInfo.groupHeaderFixedColumns = groupHeaderColumnTypes.fixed;
	        columnInfo.groupHeaderScrollableColumns = groupHeaderColumnTypes.scrollable;
	      }
	    }

	    return columnInfo;
	  },
	  _calculateState: function _calculateState( /*object*/props, /*?object*/oldState) /*object*/{
	    (0, _invariant2.default)(props.height !== undefined || props.maxHeight !== undefined, 'You must set either a height or a maxHeight');

	    var children = [];
	    ReactChildren.forEach(props.children, function (child, index) {
	      if (child == null) {
	        return;
	      }
	      (0, _invariant2.default)(child.type.__TableColumnGroup__ || child.type.__TableColumn__, 'child type should be <FixedDataTableColumn /> or ' + '<FixedDataTableColumnGroup />');
	      children.push(child);
	    });

	    var useGroupHeader = false;
	    if (children.length && children[0].type.__TableColumnGroup__) {
	      useGroupHeader = true;
	    }

	    var scrollState;
	    var firstRowIndex = oldState && oldState.firstRowIndex || 0;
	    var firstRowOffset = oldState && oldState.firstRowOffset || 0;
	    var scrollY = oldState ? oldState.scrollY : 0;
	    var scrollX = oldState ? oldState.scrollX : 0;

	    var lastScrollLeft = oldState ? oldState.scrollLeft : 0;
	    if (props.scrollLeft !== undefined && props.scrollLeft !== lastScrollLeft) {
	      scrollX = props.scrollLeft;
	    }

	    var groupHeaderHeight = useGroupHeader ? props.groupHeaderHeight : 0;

	    if (oldState && (props.rowsCount !== oldState.rowsCount || props.rowHeight !== oldState.rowHeight || props.height !== oldState.height)) {
	      // Number of rows changed, try to scroll to the row from before the
	      // change
	      var viewportHeight = (props.height === undefined ? props.maxHeight : props.height) - (props.headerHeight || 0) - (props.footerHeight || 0) - (props.groupHeaderHeight || 0);

	      var oldViewportHeight = this._scrollHelper._viewportHeight;

	      this._scrollHelper = new _FixedDataTableScrollHelper2.default(props.rowsCount, props.rowHeight, viewportHeight, props.rowHeightGetter);
	      scrollState = this._scrollHelper.scrollToRow(firstRowIndex, firstRowOffset);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    } else if (oldState && props.rowHeightGetter !== oldState.rowHeightGetter) {
	      this._scrollHelper.setRowHeightGetter(props.rowHeightGetter);
	    }

	    var lastScrollToRow = oldState ? oldState.scrollToRow : undefined;
	    if (props.scrollToRow != null && (props.scrollToRow !== lastScrollToRow || viewportHeight !== oldViewportHeight)) {
	      scrollState = this._scrollHelper.scrollRowIntoView(props.scrollToRow);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    }

	    var lastScrollTop = oldState ? oldState.scrollTop : undefined;
	    if (props.scrollTop != null && props.scrollTop !== lastScrollTop) {
	      scrollState = this._scrollHelper.scrollTo(props.scrollTop);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    }

	    var columnResizingData;
	    if (props.isColumnResizing) {
	      columnResizingData = oldState && oldState.columnResizingData;
	    } else {
	      columnResizingData = EMPTY_OBJECT;
	    }

	    var columns;
	    var columnGroups;

	    if (useGroupHeader) {
	      var columnGroupSettings = _FixedDataTableWidthHelper2.default.adjustColumnGroupWidths(children, props.width);
	      columns = columnGroupSettings.columns;
	      columnGroups = columnGroupSettings.columnGroups;
	    } else {
	      columns = _FixedDataTableWidthHelper2.default.adjustColumnWidths(children, props.width);
	    }

	    var columnInfo = this._populateColumnsAndColumnData(columns, columnGroups, oldState);

	    var lastScrollToColumn = oldState ? oldState.scrollToColumn : undefined;
	    if (props.scrollToColumn !== null && props.scrollToColumn !== lastScrollToColumn) {
	      // If selected column is a fixed column, don't scroll
	      var fixedColumnsCount = columnInfo.bodyFixedColumns.length;
	      if (props.scrollToColumn >= fixedColumnsCount) {
	        var totalFixedColumnsWidth = 0;
	        var i, column;
	        for (i = 0; i < columnInfo.bodyFixedColumns.length; ++i) {
	          column = columnInfo.bodyFixedColumns[i];
	          totalFixedColumnsWidth += column.props.width;
	        }

	        var scrollableColumnIndex = Math.min(props.scrollToColumn - fixedColumnsCount, columnInfo.bodyScrollableColumns.length - 1);

	        var previousColumnsWidth = 0;
	        for (i = 0; i < scrollableColumnIndex; ++i) {
	          column = columnInfo.bodyScrollableColumns[i];
	          previousColumnsWidth += column.props.width;
	        }

	        var availableScrollWidth = props.width - totalFixedColumnsWidth;
	        var selectedColumnWidth = columnInfo.bodyScrollableColumns[scrollableColumnIndex].props.width;
	        var minAcceptableScrollPosition = previousColumnsWidth + selectedColumnWidth - availableScrollWidth;

	        if (scrollX < minAcceptableScrollPosition) {
	          scrollX = minAcceptableScrollPosition;
	        }

	        if (scrollX > previousColumnsWidth) {
	          scrollX = previousColumnsWidth;
	        }
	      }
	    }

	    var useMaxHeight = props.height === undefined;
	    var height = Math.round(useMaxHeight ? props.maxHeight : props.height);
	    var totalHeightReserved = props.footerHeight + props.headerHeight + groupHeaderHeight + 2 * BORDER_HEIGHT;
	    var bodyHeight = height - totalHeightReserved;
	    var scrollContentHeight = this._scrollHelper.getContentHeight();
	    var totalHeightNeeded = scrollContentHeight + totalHeightReserved;
	    var scrollContentWidth = _FixedDataTableWidthHelper2.default.getTotalWidth(columns);
	    var maxVisibleColumns = _FixedDataTableWidthHelper2.default.getMaxVisibleColumns(columns, props.width);

	    var horizontalScrollbarVisible = scrollContentWidth > props.width && props.overflowX !== 'hidden' && props.showScrollbarX !== false;

	    if (horizontalScrollbarVisible) {
	      bodyHeight -= _Scrollbar2.default.SIZE;
	      totalHeightNeeded += _Scrollbar2.default.SIZE;
	      totalHeightReserved += _Scrollbar2.default.SIZE;
	    }

	    var maxScrollX = Math.max(0, scrollContentWidth - props.width);
	    var maxScrollY = Math.max(0, scrollContentHeight - bodyHeight);
	    scrollX = Math.min(scrollX, maxScrollX);
	    scrollY = Math.min(scrollY, maxScrollY);

	    if (!maxScrollY) {
	      // no vertical scrollbar necessary, use the totals we tracked so we
	      // can shrink-to-fit vertically
	      if (useMaxHeight) {
	        height = totalHeightNeeded;
	      }
	      bodyHeight = totalHeightNeeded - totalHeightReserved;
	    }

	    this._scrollHelper.setViewportHeight(bodyHeight);

	    // This calculation is synonymous to Element.scrollTop
	    var scrollTop = Math.abs(firstRowOffset - this._scrollHelper.getRowPosition(firstRowIndex));
	    // This case can happen when the user is completely scrolled down and resizes the viewport to be taller vertically.
	    // This is because we set the viewport height after having calculated the rows
	    if (scrollTop !== scrollY) {
	      scrollTop = maxScrollY;
	      scrollState = this._scrollHelper.scrollTo(scrollTop);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    }

	    // The order of elements in this object metters and bringing bodyHeight,
	    // height or useGroupHeader to the top can break various features
	    var newState = _extends({
	      isColumnResizing: oldState && oldState.isColumnResizing
	    }, columnInfo, props, {

	      columns: columns,
	      columnGroups: columnGroups,
	      columnResizingData: columnResizingData,
	      firstRowIndex: firstRowIndex,
	      firstRowOffset: firstRowOffset,
	      horizontalScrollbarVisible: horizontalScrollbarVisible,
	      maxScrollX: maxScrollX,
	      maxScrollY: maxScrollY,
	      maxVisibleColumns: maxVisibleColumns,
	      reservedHeight: totalHeightReserved,
	      scrollContentHeight: scrollContentHeight,
	      scrollX: scrollX,
	      scrollY: scrollY,
	      // These properties may overwrite properties defined in
	      // columnInfo and props
	      bodyHeight: bodyHeight,
	      height: height,
	      groupHeaderHeight: groupHeaderHeight,
	      useGroupHeader: useGroupHeader
	    });

	    return newState;
	  },
	  _selectColumnElement: function _selectColumnElement( /*string*/type, /*array*/columns) /*array*/{
	    var newColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      var column = columns[i];
	      newColumns.push(_React2.default.cloneElement(column, {
	        cell: type ? column.props[type] : column.props[CELL]
	      }));
	    }
	    return newColumns;
	  },
	  _splitColumnTypes: function _splitColumnTypes( /*array*/columns) /*object*/{
	    var fixedColumns = [];
	    var scrollableColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      if (columns[i].props.fixed) {
	        fixedColumns.push(columns[i]);
	      } else {
	        scrollableColumns.push(columns[i]);
	      }
	    }
	    return {
	      fixed: fixedColumns,
	      scrollable: scrollableColumns
	    };
	  },
	  _onScroll: function _onScroll( /*number*/deltaX, /*number*/deltaY) {
	    if (this.isMounted()) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var x = this.state.scrollX;
	      if (Math.abs(deltaY) > Math.abs(deltaX) && this.props.overflowY !== 'hidden') {
	        var scrollState = this._scrollHelper.scrollBy(Math.round(deltaY));
	        var onVerticalScroll = this.props.onVerticalScroll;
	        if (onVerticalScroll ? onVerticalScroll(scrollState.position) : true) {
	          var maxScrollY = Math.max(0, scrollState.contentHeight - this.state.bodyHeight);
	          this.setState({
	            firstRowIndex: scrollState.index,
	            firstRowOffset: scrollState.offset,
	            scrollY: scrollState.position,
	            scrollContentHeight: scrollState.contentHeight,
	            maxScrollY: maxScrollY
	          });
	        }
	      } else if (deltaX && this.props.overflowX !== 'hidden') {
	        x += deltaX;
	        x = x < 0 ? 0 : x;
	        x = x > this.state.maxScrollX ? this.state.maxScrollX : x;

	        //NOTE (asif) This is a hacky workaround to prevent FDT from setting its internal state
	        var onHorizontalScroll = this.props.onHorizontalScroll;
	        if (onHorizontalScroll ? onHorizontalScroll(x) : true) {
	          this.setState({
	            scrollX: x
	          });
	        }
	      }

	      this._didScrollStop();
	    }
	  },
	  _onHorizontalScroll: function _onHorizontalScroll( /*number*/scrollPos) {
	    if (this.isMounted() && scrollPos !== this.state.scrollX) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var onHorizontalScroll = this.props.onHorizontalScroll;
	      if (onHorizontalScroll ? onHorizontalScroll(scrollPos) : true) {
	        this.setState({
	          scrollX: scrollPos
	        });
	      }
	      this._didScrollStop();
	    }
	  },
	  _onVerticalScroll: function _onVerticalScroll( /*number*/scrollPos) {
	    if (this.isMounted() && scrollPos !== this.state.scrollY) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var scrollState = this._scrollHelper.scrollTo(Math.round(scrollPos));

	      var onVerticalScroll = this.props.onVerticalScroll;
	      if (onVerticalScroll ? onVerticalScroll(scrollState.position) : true) {
	        this.setState({
	          firstRowIndex: scrollState.index,
	          firstRowOffset: scrollState.offset,
	          scrollY: scrollState.position,
	          scrollContentHeight: scrollState.contentHeight
	        });
	        this._didScrollStop();
	      }
	    }
	  },
	  _didScrollStart: function _didScrollStart() {
	    if (this.isMounted() && !this._isScrolling) {
	      this._isScrolling = true;
	      if (this.props.onScrollStart) {
	        this.props.onScrollStart(this.state.scrollX, this.state.scrollY, this.state.firstRowIndex);
	      }
	    }
	  },
	  _didScrollStop: function _didScrollStop() {
	    if (this.isMounted() && this._isScrolling) {
	      this._isScrolling = false;
	      this.setState({ redraw: true });
	      if (this.props.onScrollEnd) {
	        this.props.onScrollEnd(this.state.scrollX, this.state.scrollY, this.state.firstRowIndex);
	      }
	    }
	  }
	});

	var HorizontalScrollbar = _React2.default.createClass({
	  displayName: 'HorizontalScrollbar',

	  mixins: [_ReactComponentWithPureRenderMixin2.default],
	  propTypes: {
	    contentSize: PropTypes.number.isRequired,
	    offset: PropTypes.number.isRequired,
	    onScroll: PropTypes.func.isRequired,
	    position: PropTypes.number.isRequired,
	    size: PropTypes.number.isRequired
	  },

	  componentWillMount: function componentWillMount() {
	    this._initialRender = true;
	  },
	  componentDidMount: function componentDidMount() {
	    this._initialRender = false;
	  },
	  render: function render() /*object*/{
	    var outerContainerStyle = {
	      height: _Scrollbar2.default.SIZE,
	      width: this.props.size
	    };
	    var innerContainerStyle = {
	      height: _Scrollbar2.default.SIZE,
	      position: 'absolute',
	      overflow: 'hidden',
	      width: this.props.size
	    };
	    (0, _FixedDataTableTranslateDOMPosition2.default)(innerContainerStyle, 0, this.props.offset, this._initialRender);

	    return _React2.default.createElement(
	      'div',
	      {
	        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableLayout/horizontalScrollbar'), (0, _cx2.default)('public/fixedDataTable/horizontalScrollbar')),
	        style: outerContainerStyle },
	      _React2.default.createElement(
	        'div',
	        { style: innerContainerStyle },
	        _React2.default.createElement(_Scrollbar2.default, _extends({}, this.props, {
	          isOpaque: true,
	          orientation: 'horizontal',
	          offset: undefined
	        }))
	      )
	    );
	  }
	});

	module.exports = FixedDataTable;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	module.exports = __webpack_require__(30);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is utility that handles onWheel events and calls provided wheel
	 * callback with correct frame rate.
	 *
	 * @providesModule ReactWheelHandler
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _normalizeWheel = __webpack_require__(34);

	var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

	var _requestAnimationFramePolyfill = __webpack_require__(38);

	var _requestAnimationFramePolyfill2 = _interopRequireDefault(_requestAnimationFramePolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReactWheelHandler = function () {
	  /**
	   * onWheel is the callback that will be called with right frame rate if
	   * any wheel events happened
	   * onWheel should is to be called with two arguments: deltaX and deltaY in
	   * this order
	   */
	  function ReactWheelHandler(
	  /*function*/onWheel,
	  /*boolean|function*/handleScrollX,
	  /*boolean|function*/handleScrollY,
	  /*?boolean|?function*/stopPropagation) {
	    _classCallCheck(this, ReactWheelHandler);

	    this._animationFrameID = null;
	    this._deltaX = 0;
	    this._deltaY = 0;
	    this._didWheel = this._didWheel.bind(this);
	    if (typeof handleScrollX !== 'function') {
	      handleScrollX = handleScrollX ? _emptyFunction2.default.thatReturnsTrue : _emptyFunction2.default.thatReturnsFalse;
	    }

	    if (typeof handleScrollY !== 'function') {
	      handleScrollY = handleScrollY ? _emptyFunction2.default.thatReturnsTrue : _emptyFunction2.default.thatReturnsFalse;
	    }

	    if (typeof stopPropagation !== 'function') {
	      stopPropagation = stopPropagation ? _emptyFunction2.default.thatReturnsTrue : _emptyFunction2.default.thatReturnsFalse;
	    }

	    this._handleScrollX = handleScrollX;
	    this._handleScrollY = handleScrollY;
	    this._stopPropagation = stopPropagation;
	    this._onWheelCallback = onWheel;
	    this.onWheel = this.onWheel.bind(this);
	  }

	  _createClass(ReactWheelHandler, [{
	    key: 'onWheel',
	    value: function onWheel( /*object*/event) {
	      var normalizedEvent = (0, _normalizeWheel2.default)(event);
	      var deltaX = this._deltaX + normalizedEvent.pixelX;
	      var deltaY = this._deltaY + normalizedEvent.pixelY;
	      var handleScrollX = this._handleScrollX(deltaX, deltaY);
	      var handleScrollY = this._handleScrollY(deltaY, deltaX);
	      if (!handleScrollX && !handleScrollY) {
	        return;
	      }

	      this._deltaX += handleScrollX ? normalizedEvent.pixelX : 0;
	      this._deltaY += handleScrollY ? normalizedEvent.pixelY : 0;
	      event.preventDefault();

	      var changed;
	      if (this._deltaX !== 0 || this._deltaY !== 0) {
	        if (this._stopPropagation()) {
	          event.stopPropagation();
	        }
	        changed = true;
	      }

	      if (changed === true && this._animationFrameID === null) {
	        this._animationFrameID = (0, _requestAnimationFramePolyfill2.default)(this._didWheel);
	      }
	    }
	  }, {
	    key: '_didWheel',
	    value: function _didWheel() {
	      this._animationFrameID = null;
	      this._onWheelCallback(this._deltaX, this._deltaY);
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }
	  }]);

	  return ReactWheelHandler;
	}();

	module.exports = ReactWheelHandler;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule normalizeWheel
	 * @typechecks
	 */

	'use strict';

	var _UserAgent_DEPRECATED = __webpack_require__(35);

	var _UserAgent_DEPRECATED2 = _interopRequireDefault(_UserAgent_DEPRECATED);

	var _isEventSupported = __webpack_require__(36);

	var _isEventSupported2 = _interopRequireDefault(_isEventSupported);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Reasonable defaults
	var PIXEL_STEP = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = 800;

	/**
	 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	 * complicated, thus this doc is long and (hopefully) detailed enough to answer
	 * your questions.
	 *
	 * If you need to react to the mouse wheel in a predictable way, this code is
	 * like your bestest friend. * hugs *
	 *
	 * As of today, there are 4 DOM event types you can listen to:
	 *
	 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	 *
	 * So what to do?  The is the best:
	 *
	 *   normalizeWheel.getEventType();
	 *
	 * In your event callback, use this code to get sane interpretation of the
	 * deltas.  This code will return an object with properties:
	 *
	 *   spinX   -- normalized spin speed (use for zoom) - x plane
	 *   spinY   -- " - y plane
	 *   pixelX  -- normalized distance (to pixels) - x plane
	 *   pixelY  -- " - y plane
	 *
	 * Wheel values are provided by the browser assuming you are using the wheel to
	 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	 * significantly on different platforms and browsers, forgetting that you can
	 * scroll at different speeds.  Some devices (like trackpads) emit more events
	 * at smaller increments with fine granularity, and some emit massive jumps with
	 * linear speed or acceleration.
	 *
	 * This code does its best to normalize the deltas for you:
	 *
	 *   - spin is trying to normalize how far the wheel was spun (or trackpad
	 *     dragged).  This is super useful for zoom support where you want to
	 *     throw away the chunky scroll steps on the PC and make those equal to
	 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	 *     resolve a single slow step on a wheel to 1.
	 *
	 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	 *     get the crazy differences between browsers, but at least it'll be in
	 *     pixels!
	 *
	 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	 *     should translate to positive value zooming IN, negative zooming OUT.
	 *     This matches the newer 'wheel' event.
	 *
	 * Why are there spinX, spinY (or pixels)?
	 *
	 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	 *     with a mouse.  It results in side-scrolling in the browser by default.
	 *
	 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	 *
	 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	 *     probably is by browsers in conjunction with fancy 3D controllers .. but
	 *     you know.
	 *
	 * Implementation info:
	 *
	 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	 * average mouse:
	 *
	 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	 *
	 * On the trackpad:
	 *
	 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	 *
	 * On other/older browsers.. it's more complicated as there can be multiple and
	 * also missing delta values.
	 *
	 * The 'wheel' event is more standard:
	 *
	 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	 *
	 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	 * backward compatibility with older events.  Those other values help us
	 * better normalize spin speed.  Example of what the browsers provide:
	 *
	 *                          | event.wheelDelta | event.detail
	 *        ------------------+------------------+--------------
	 *          Safari v5/OS X  |       -120       |       0
	 *          Safari v5/Win7  |       -120       |       0
	 *         Chrome v17/OS X  |       -120       |       0
	 *         Chrome v17/Win7  |       -120       |       0
	 *                IE9/Win7  |       -120       |   undefined
	 *         Firefox v4/OS X  |     undefined    |       1
	 *         Firefox v4/Win7  |     undefined    |       3
	 *
	 */
	function normalizeWheel( /*object*/event) /*object*/{
	  var sX = 0,
	      sY = 0,
	      // spinX, spinY
	  pX = 0,
	      pY = 0; // pixelX, pixelY

	  // Legacy
	  if ('detail' in event) {
	    sY = event.detail;
	  }
	  if ('wheelDelta' in event) {
	    sY = -event.wheelDelta / 120;
	  }
	  if ('wheelDeltaY' in event) {
	    sY = -event.wheelDeltaY / 120;
	  }
	  if ('wheelDeltaX' in event) {
	    sX = -event.wheelDeltaX / 120;
	  }

	  // side scrolling on FF with DOMMouseScroll
	  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
	    sX = sY;
	    sY = 0;
	  }

	  pX = sX * PIXEL_STEP;
	  pY = sY * PIXEL_STEP;

	  if ('deltaY' in event) {
	    pY = event.deltaY;
	  }
	  if ('deltaX' in event) {
	    pX = event.deltaX;
	  }

	  if ((pX || pY) && event.deltaMode) {
	    if (event.deltaMode == 1) {
	      // delta in LINE units
	      pX *= LINE_HEIGHT;
	      pY *= LINE_HEIGHT;
	    } else {
	      // delta in PAGE units
	      pX *= PAGE_HEIGHT;
	      pY *= PAGE_HEIGHT;
	    }
	  }

	  // Fall-back if spin cannot be determined
	  if (pX && !sX) {
	    sX = pX < 1 ? -1 : 1;
	  }
	  if (pY && !sY) {
	    sY = pY < 1 ? -1 : 1;
	  }

	  return { spinX: sX,
	    spinY: sY,
	    pixelX: pX,
	    pixelY: pY };
	}

	/**
	 * The best combination if you prefer spinX + spinY normalization.  It favors
	 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	 * 'wheel' event, making spin speed determination impossible.
	 */
	normalizeWheel.getEventType = function () /*string*/{
	  return _UserAgent_DEPRECATED2.default.firefox() ? 'DOMMouseScroll' : (0, _isEventSupported2.default)('wheel') ? 'wheel' : 'mousewheel';
	};

	module.exports = normalizeWheel;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright Schrodinger, LLC
	 *
	 * @providesModule UserAgent_DEPRECATED
	 */

	/**
	 *  Provides entirely client-side User Agent and OS detection. You should prefer
	 *  the non-deprecated UserAgent module when possible, which exposes our
	 *  authoritative server-side PHP-based detection to the client.
	 *
	 *  Usage is straightforward:
	 *
	 *    if (UserAgent_DEPRECATED.ie()) {
	 *      //  IE
	 *    }
	 *
	 *  You can also do version checks:
	 *
	 *    if (UserAgent_DEPRECATED.ie() >= 7) {
	 *      //  IE7 or better
	 *    }
	 *
	 *  The browser functions will return NaN if the browser does not match, so
	 *  you can also do version compares the other way:
	 *
	 *    if (UserAgent_DEPRECATED.ie() < 7) {
	 *      //  IE6 or worse
	 *    }
	 *
	 *  Note that the version is a float and may include a minor version number,
	 *  so you should always use range operators to perform comparisons, not
	 *  strict equality.
	 *
	 *  **Note:** You should **strongly** prefer capability detection to browser
	 *  version detection where it's reasonable:
	 *
	 *    http://www.quirksmode.org/js/support.html
	 *
	 *  Further, we have a large number of mature wrapper functions and classes
	 *  which abstract away many browser irregularities. Check the documentation,
	 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
	 *  another copy of "event || window.event".
	 *
	 */

	var _populated = false;

	// Browsers
	var _ie, _firefox, _opera, _webkit, _chrome;

	// Actual IE browser for compatibility mode
	var _ie_real_version;

	// Platforms
	var _osx, _windows, _linux, _android;

	// Architectures
	var _win64;

	// Devices
	var _iphone, _ipad, _native;

	var _mobile;

	function _populate() {
	  if (_populated) {
	    return;
	  }

	  _populated = true;

	  // To work around buggy JS libraries that can't handle multi-digit
	  // version numbers, Opera 10's user agent string claims it's Opera
	  // 9, then later includes a Version/X.Y field:
	  //
	  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
	  var uas = navigator.userAgent;
	  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
	  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

	  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
	  _ipad = /\b(iP[ao]d)/.exec(uas);
	  _android = /Android/i.exec(uas);
	  _native = /FBAN\/\w+;/i.exec(uas);
	  _mobile = /Mobile/i.exec(uas);

	  // Note that the IE team blog would have you believe you should be checking
	  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
	  // from either x64 or ia64;  so ultimately, you should just check for Win64
	  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
	  // Windows will send 'WOW64' instead.
	  _win64 = !!/Win64/.exec(uas);

	  if (agent) {
	    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
	    // IE compatibility mode
	    if (_ie && document && document.documentMode) {
	      _ie = document.documentMode;
	    }
	    // grab the "true" ie version from the trident token if available
	    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
	    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

	    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
	    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
	    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
	    if (_webkit) {
	      // We do not add the regexp to the above test, because it will always
	      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
	      // the userAgent string.
	      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
	      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
	    } else {
	      _chrome = NaN;
	    }
	  } else {
	    _ie = _firefox = _opera = _chrome = _webkit = NaN;
	  }

	  if (os) {
	    if (os[1]) {
	      // Detect OS X version.  If no version number matches, set _osx to true.
	      // Version examples:  10, 10_6_1, 10.7
	      // Parses version number as a float, taking only first two sets of
	      // digits.  If only one set of digits is found, returns just the major
	      // version number.
	      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

	      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
	    } else {
	      _osx = false;
	    }
	    _windows = !!os[2];
	    _linux = !!os[3];
	  } else {
	    _osx = _windows = _linux = false;
	  }
	}

	var UserAgent_DEPRECATED = {

	  /**
	   *  Check if the UA is Internet Explorer.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  ie: function ie() {
	    return _populate() || _ie;
	  },

	  /**
	   * Check if we're in Internet Explorer compatibility mode.
	   *
	   * @return bool true if in compatibility mode, false if
	   * not compatibility mode or not ie
	   */
	  ieCompatibilityMode: function ieCompatibilityMode() {
	    return _populate() || _ie_real_version > _ie;
	  },

	  /**
	   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
	   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
	   * this when we don't need it -- tracked by #601957.
	   */
	  ie64: function ie64() {
	    return UserAgent_DEPRECATED.ie() && _win64;
	  },

	  /**
	   *  Check if the UA is Firefox.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  firefox: function firefox() {
	    return _populate() || _firefox;
	  },

	  /**
	   *  Check if the UA is Opera.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  opera: function opera() {
	    return _populate() || _opera;
	  },

	  /**
	   *  Check if the UA is WebKit.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  webkit: function webkit() {
	    return _populate() || _webkit;
	  },

	  /**
	   *  For Push
	   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
	   */
	  safari: function safari() {
	    return UserAgent_DEPRECATED.webkit();
	  },

	  /**
	   *  Check if the UA is a Chrome browser.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  chrome: function chrome() {
	    return _populate() || _chrome;
	  },

	  /**
	   *  Check if the user is running Windows.
	   *
	   *  @return bool `true' if the user's OS is Windows.
	   */
	  windows: function windows() {
	    return _populate() || _windows;
	  },

	  /**
	   *  Check if the user is running Mac OS X.
	   *
	   *  @return float|bool   Returns a float if a version number is detected,
	   *                       otherwise true/false.
	   */
	  osx: function osx() {
	    return _populate() || _osx;
	  },

	  /**
	   * Check if the user is running Linux.
	   *
	   * @return bool `true' if the user's OS is some flavor of Linux.
	   */
	  linux: function linux() {
	    return _populate() || _linux;
	  },

	  /**
	   * Check if the user is running on an iPhone or iPod platform.
	   *
	   * @return bool `true' if the user is running some flavor of the
	   *    iPhone OS.
	   */
	  iphone: function iphone() {
	    return _populate() || _iphone;
	  },

	  mobile: function mobile() {
	    return _populate() || _iphone || _ipad || _android || _mobile;
	  },

	  nativeApp: function nativeApp() {
	    // webviews inside of the native apps
	    return _populate() || _native;
	  },

	  android: function android() {
	    return _populate() || _android;
	  },

	  ipad: function ipad() {
	    return _populate() || _ipad;
	  }
	};

	module.exports = UserAgent_DEPRECATED;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var _ExecutionEnvironment = __webpack_require__(37);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useHasFeature;
	if (_ExecutionEnvironment2.default.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!_ExecutionEnvironment2.default.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _nativeRequestAnimationFrame = __webpack_require__(39);

	var _nativeRequestAnimationFrame2 = _interopRequireDefault(_nativeRequestAnimationFrame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule requestAnimationFramePolyfill
	 */

	var lastTime = 0;

	/**
	 * Here is the native and polyfill version of requestAnimationFrame.
	 * Please don't use it directly and use requestAnimationFrame module instead.
	 */
	var requestAnimationFrame = _nativeRequestAnimationFrame2.default || function (callback) {
	  var currTime = Date.now();
	  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
	  lastTime = currTime + timeDelay;
	  return global.setTimeout(function () {
	    callback(Date.now());
	  }, timeDelay);
	};

	// Works around a rare bug in Safari 6 where the first request is never invoked.
	requestAnimationFrame(_emptyFunction2.default);

	module.exports = requestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule nativeRequestAnimationFrame
	 */

	var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;

	module.exports = nativeRequestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is utility that handles touch events and calls provided touch
	 * callback with correct frame rate.
	 * Deceleration logic based on http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
	 *
	 * @providesModule ReactTouchHandler
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _requestAnimationFramePolyfill = __webpack_require__(38);

	var _requestAnimationFramePolyfill2 = _interopRequireDefault(_requestAnimationFramePolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MOVE_AMPLITUDE = 1.6;
	var DECELERATION_AMPLITUDE = 1.6;
	var DECELERATION_FACTOR = 325;
	var TRACKER_TIMEOUT = 100;

	var ReactTouchHandler = function () {
	  /**
	   * onTouchScroll is the callback that will be called with right frame rate if
	   * any touch events happened
	   * onTouchScroll should is to be called with two arguments: deltaX and deltaY in
	   * this order
	   */
	  function ReactTouchHandler(
	  /*function*/onTouchScroll,
	  /*boolean|function*/handleScrollX,
	  /*boolean|function*/handleScrollY,
	  /*?boolean|?function*/stopPropagation) {
	    _classCallCheck(this, ReactTouchHandler);

	    // The animation frame id for the drag scroll
	    this._dragAnimationId = null;

	    // The interval id for tracking the drag velocity
	    this._trackerId = null;

	    // Used to track the drag scroll delta while waiting for an animation frame
	    this._deltaX = 0;
	    this._deltaY = 0;

	    // The last touch we processed while dragging.  Used to compute the delta and velocity above
	    this._lastTouchX = 0;
	    this._lastTouchY = 0;

	    // Used to track a moving average of the scroll velocity while dragging
	    this._velocityX = 0;
	    this._velocityY = 0;

	    // An accummulated drag scroll delta used to calculate velocity
	    this._accumulatedDeltaX = 0;
	    this._accumulatedDeltaY = 0;

	    // Timestamp from the last interval frame we used to track velocity
	    this._lastFrameTimestamp = Date.now();

	    // Timestamp from the last animation frame we used to autoscroll after drag stop
	    this._autoScrollTimestamp = Date.now();

	    if (typeof handleScrollX !== 'function') {
	      handleScrollX = handleScrollX ? _emptyFunction2.default.thatReturnsTrue : _emptyFunction2.default.thatReturnsFalse;
	    }

	    if (typeof handleScrollY !== 'function') {
	      handleScrollY = handleScrollY ? _emptyFunction2.default.thatReturnsTrue : _emptyFunction2.default.thatReturnsFalse;
	    }

	    // TODO (jordan) Is configuring this necessary
	    if (typeof stopPropagation !== 'function') {
	      stopPropagation = stopPropagation ? _emptyFunction2.default.thatReturnsTrue : _emptyFunction2.default.thatReturnsFalse;
	    }

	    this._handleScrollX = handleScrollX;
	    this._handleScrollY = handleScrollY;
	    this._stopPropagation = stopPropagation;
	    this._onTouchScrollCallback = onTouchScroll;

	    this._didTouchMove = this._didTouchMove.bind(this);
	    this._track = this._track.bind(this);
	    this._autoScroll = this._autoScroll.bind(this);
	    this._startAutoScroll = this._startAutoScroll.bind(this);
	    this.onTouchStart = this.onTouchStart.bind(this);
	    this.onTouchEnd = this.onTouchEnd.bind(this);
	    this.onTouchMove = this.onTouchMove.bind(this);
	    this.onTouchCancel = this.onTouchCancel.bind(this);
	  }

	  _createClass(ReactTouchHandler, [{
	    key: 'onTouchStart',
	    value: function onTouchStart( /*object*/event) {
	      // Start tracking drag delta for scrolling
	      this._lastTouchX = event.touches[0].pageX;
	      this._lastTouchY = event.touches[0].pageY;

	      // Reset our velocity and intermediate data used to compute velocity
	      this._velocityX = 0;
	      this._velocityY = 0;
	      this._accumulatedDeltaX = 0;
	      this._accumulatedDeltaY = 0;
	      this._lastFrameTimestamp = Date.now();

	      // Setup interval for tracking velocity
	      clearInterval(this._trackerId);
	      this._trackerId = setInterval(this._track, TRACKER_TIMEOUT);

	      if (this._stopPropagation()) {
	        event.stopPropagation();
	      }
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd( /*object*/event) {

	      // Stop tracking velocity
	      clearInterval(this._trackerId);
	      this._trackerId = null;

	      // Initialize decelerating autoscroll on drag stop
	      (0, _requestAnimationFramePolyfill2.default)(this._startAutoScroll);

	      if (this._stopPropagation()) {
	        event.stopPropagation();
	      }
	    }
	  }, {
	    key: 'onTouchCancel',
	    value: function onTouchCancel( /*object*/event) {

	      // Stop tracking velocity
	      clearInterval(this._trackerId);
	      this._trackerId = null;

	      if (this._stopPropagation()) {
	        event.stopPropagation();
	      }
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove( /*object*/event) {
	      var moveX = event.touches[0].pageX;
	      var moveY = event.touches[0].pageY;

	      // Compute delta scrolled since last drag
	      // Mobile, scrolling is inverted
	      this._deltaX = MOVE_AMPLITUDE * (this._lastTouchX - moveX);
	      this._deltaY = MOVE_AMPLITUDE * (this._lastTouchY - moveY);

	      var handleScrollX = this._handleScrollX(this._deltaX, this._deltaY);
	      var handleScrollY = this._handleScrollY(this._deltaY, this._deltaX);
	      if (!handleScrollX && !handleScrollY) {
	        return;
	      }

	      // If we can handle scroll update last touch for computing delta
	      if (handleScrollX) {
	        this._lastTouchX = moveX;
	      } else {
	        this._deltaX = 0;
	      }
	      if (handleScrollY) {
	        this._lastTouchY = moveY;
	      } else {
	        this._deltaY = 0;
	      }

	      event.preventDefault();

	      // Ensure minimum delta magnitude is met to avoid jitter
	      var changed = false;
	      if (Math.abs(this._deltaX) > 2 || Math.abs(this._deltaY) > 2) {
	        if (this._stopPropagation()) {
	          event.stopPropagation();
	        }
	        changed = true;
	      }

	      // Request animation frame to trigger scroll of computed delta
	      if (changed === true && this._dragAnimationId === null) {
	        this._dragAnimationId = (0, _requestAnimationFramePolyfill2.default)(this._didTouchMove);
	      }
	    }

	    /**
	     * Fire scroll callback based on computed drag delta.
	     * Also track accummulated delta so we can calculate velocity
	     */

	  }, {
	    key: '_didTouchMove',
	    value: function _didTouchMove() {
	      this._dragAnimationId = null;

	      this._onTouchScrollCallback(this._deltaX, this._deltaY);
	      this._accumulatedDeltaX += this._deltaX;
	      this._accumulatedDeltaY += this._deltaY;
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }

	    /**
	     * Compute velocity based on a weighted average of drag over last 100 ms and
	     * previous velocity.  Combining into a moving average results in a smoother scroll.
	     */

	  }, {
	    key: '_track',
	    value: function _track() {
	      var now = Date.now();
	      var elapsed = now - this._lastFrameTimestamp;
	      var oldVelocityX = this._velocityX;
	      var oldVelocityY = this._velocityY;

	      // We compute velocity using a weighted average of the current velocity and the previous velocity
	      // If the previous velocity is 0, put the full weight on the last 100 ms
	      var weight = 0.8;
	      if (elapsed < TRACKER_TIMEOUT) {
	        weight *= elapsed / TRACKER_TIMEOUT;
	      }
	      if (oldVelocityX === 0 && oldVelocityY === 0) {
	        weight = 1;
	      }

	      // Formula for computing weighted average of velocity
	      this._velocityX = weight * (TRACKER_TIMEOUT * this._accumulatedDeltaX / (1 + elapsed));
	      if (weight < 1) {
	        this._velocityX += (1 - weight) * oldVelocityX;
	      }

	      this._velocityY = weight * (TRACKER_TIMEOUT * this._accumulatedDeltaY / (1 + elapsed));
	      if (weight < 1) {
	        this._velocityY += (1 - weight) * oldVelocityY;
	      }

	      this._accumulatedDeltaX = 0;
	      this._accumulatedDeltaY = 0;
	      this._lastFrameTimestamp = now;
	    }

	    /**
	     * To kick off deceleration / momentum scrolling,
	     * handle any scrolling from a drag which was waiting for an animation frame
	     * Then update our velocity
	     * Finally start the momentum scrolling handler (autoScroll)
	     */

	  }, {
	    key: '_startAutoScroll',
	    value: function _startAutoScroll() {
	      this._autoScrollTimestamp = Date.now();
	      if (this._deltaX > 0 || this.deltaY > 0) {
	        this._didTouchMove();
	      }
	      this._track();
	      this._autoScroll();
	    }

	    /**
	     * Compute a scroll delta with an exponential decay based on time elapsed since drag was released.
	     * This is called recursively on animation frames until the delta is below a threshold (5 pixels)
	     */

	  }, {
	    key: '_autoScroll',
	    value: function _autoScroll() {
	      var elapsed = Date.now() - this._autoScrollTimestamp;
	      var factor = DECELERATION_AMPLITUDE * Math.exp(-elapsed / DECELERATION_FACTOR);
	      var deltaX = factor * this._velocityX;
	      var deltaY = factor * this._velocityY;

	      if (Math.abs(deltaX) <= 5 || !this._handleScrollX(deltaX, deltaY)) {
	        deltaX = 0;
	      }
	      if (Math.abs(deltaY) <= 5 || !this._handleScrollY(deltaY, deltaX)) {
	        deltaY = 0;
	      }

	      if (deltaX !== 0 || deltaY !== 0) {
	        this._onTouchScrollCallback(deltaX, deltaY);
	        (0, _requestAnimationFramePolyfill2.default)(this._autoScroll);
	      }
	    }
	  }]);

	  return ReactTouchHandler;
	}();

	module.exports = ReactTouchHandler;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMMouseMoveTracker = __webpack_require__(42);

	var _DOMMouseMoveTracker2 = _interopRequireDefault(_DOMMouseMoveTracker);

	var _Keys = __webpack_require__(45);

	var _Keys2 = _interopRequireDefault(_Keys);

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _ReactDOM = __webpack_require__(46);

	var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

	var _ReactComponentWithPureRenderMixin = __webpack_require__(31);

	var _ReactComponentWithPureRenderMixin2 = _interopRequireDefault(_ReactComponentWithPureRenderMixin);

	var _ReactWheelHandler = __webpack_require__(32);

	var _ReactWheelHandler2 = _interopRequireDefault(_ReactWheelHandler);

	var _cssVar = __webpack_require__(48);

	var _cssVar2 = _interopRequireDefault(_cssVar);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _FixedDataTableTranslateDOMPosition = __webpack_require__(50);

	var _FixedDataTableTranslateDOMPosition2 = _interopRequireDefault(_FixedDataTableTranslateDOMPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Scrollbar
	 * @typechecks
	 */

	var PropTypes = _React2.default.PropTypes;


	var UNSCROLLABLE_STATE = {
	  position: 0,
	  scrollable: false
	};

	var FACE_MARGIN = parseInt((0, _cssVar2.default)('scrollbar-face-margin'), 10);
	var FACE_MARGIN_2 = FACE_MARGIN * 2;
	var FACE_SIZE_MIN = 30;
	var KEYBOARD_SCROLL_AMOUNT = 40;

	var _lastScrolledScrollbar = null;

	var Scrollbar = _React2.default.createClass({
	  displayName: 'Scrollbar',

	  mixins: [_ReactComponentWithPureRenderMixin2.default],

	  propTypes: {
	    contentSize: PropTypes.number.isRequired,
	    defaultPosition: PropTypes.number,
	    isOpaque: PropTypes.bool,
	    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
	    onScroll: PropTypes.func,
	    position: PropTypes.number,
	    size: PropTypes.number.isRequired,
	    trackColor: PropTypes.oneOf(['gray']),
	    zIndex: PropTypes.number,
	    verticalTop: PropTypes.number
	  },

	  getInitialState: function getInitialState() /*object*/{
	    var props = this.props;
	    return this._calculateState(props.position || props.defaultPosition || 0, props.size, props.contentSize, props.orientation);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    var controlledPosition = nextProps.position;
	    if (controlledPosition === undefined) {
	      this._setNextState(this._calculateState(this.state.position, nextProps.size, nextProps.contentSize, nextProps.orientation));
	    } else {
	      this._setNextState(this._calculateState(controlledPosition, nextProps.size, nextProps.contentSize, nextProps.orientation), nextProps);
	    }
	  },
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      defaultPosition: 0,
	      isOpaque: false,
	      onScroll: _emptyFunction2.default,
	      orientation: 'vertical',
	      zIndex: 99
	    };
	  },
	  render: function render() /*?object*/{
	    if (!this.state.scrollable) {
	      return null;
	    }

	    var size = this.props.size;
	    var mainStyle;
	    var faceStyle;
	    var isHorizontal = this.state.isHorizontal;
	    var isVertical = !isHorizontal;
	    var isActive = this.state.focused || this.state.isDragging;
	    var faceSize = this.state.faceSize;
	    var isOpaque = this.props.isOpaque;
	    var verticalTop = this.props.verticalTop || 0;

	    var mainClassName = (0, _cx2.default)({
	      'ScrollbarLayout/main': true,
	      'ScrollbarLayout/mainVertical': isVertical,
	      'ScrollbarLayout/mainHorizontal': isHorizontal,
	      'public/Scrollbar/main': true,
	      'public/Scrollbar/mainOpaque': isOpaque,
	      'public/Scrollbar/mainActive': isActive
	    });

	    var faceClassName = (0, _cx2.default)({
	      'ScrollbarLayout/face': true,
	      'ScrollbarLayout/faceHorizontal': isHorizontal,
	      'ScrollbarLayout/faceVertical': isVertical,
	      'public/Scrollbar/faceActive': isActive,
	      'public/Scrollbar/face': true
	    });

	    var position = this.state.position * this.state.scale + FACE_MARGIN;

	    if (isHorizontal) {
	      mainStyle = {
	        width: size
	      };
	      faceStyle = {
	        width: faceSize - FACE_MARGIN_2
	      };
	      (0, _FixedDataTableTranslateDOMPosition2.default)(faceStyle, position, 0, this._initialRender);
	    } else {
	      mainStyle = {
	        top: verticalTop,
	        height: size
	      };
	      faceStyle = {
	        height: faceSize - FACE_MARGIN_2
	      };
	      (0, _FixedDataTableTranslateDOMPosition2.default)(faceStyle, 0, position, this._initialRender);
	    }

	    mainStyle.zIndex = this.props.zIndex;

	    if (this.props.trackColor === 'gray') {
	      mainStyle.backgroundColor = (0, _cssVar2.default)('fbui-desktop-background-light');
	    }

	    return _React2.default.createElement(
	      'div',
	      {
	        onFocus: this._onFocus,
	        onBlur: this._onBlur,
	        onKeyDown: this._onKeyDown,
	        onMouseDown: this._onMouseDown,
	        onWheel: this._wheelHandler.onWheel,
	        className: mainClassName,
	        style: mainStyle,
	        tabIndex: 0 },
	      _React2.default.createElement('div', {
	        ref: 'face',
	        className: faceClassName,
	        style: faceStyle
	      })
	    );
	  },
	  componentWillMount: function componentWillMount() {
	    var isHorizontal = this.props.orientation === 'horizontal';
	    var onWheel = isHorizontal ? this._onWheelX : this._onWheelY;

	    this._wheelHandler = new _ReactWheelHandler2.default(onWheel, this._shouldHandleX, // Should hanlde horizontal scroll
	    this._shouldHandleY // Should handle vertical scroll
	    );
	    this._initialRender = true;
	  },
	  componentDidMount: function componentDidMount() {
	    this._mouseMoveTracker = new _DOMMouseMoveTracker2.default(this._onMouseMove, this._onMouseMoveEnd, document.documentElement);

	    if (this.props.position !== undefined && this.state.position !== this.props.position) {
	      this._didScroll();
	    }
	    this._initialRender = false;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._nextState = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    if (_lastScrolledScrollbar === this) {
	      _lastScrolledScrollbar = null;
	    }
	    delete this._mouseMoveTracker;
	  },
	  scrollBy: function scrollBy( /*number*/delta) {
	    this._onWheel(delta);
	  },
	  _shouldHandleX: function _shouldHandleX( /*number*/delta) /*boolean*/{
	    return this.props.orientation === 'horizontal' ? this._shouldHandleChange(delta) : false;
	  },
	  _shouldHandleY: function _shouldHandleY( /*number*/delta) /*boolean*/{
	    return this.props.orientation !== 'horizontal' ? this._shouldHandleChange(delta) : false;
	  },
	  _shouldHandleChange: function _shouldHandleChange( /*number*/delta) /*boolean*/{
	    var nextState = this._calculateState(this.state.position + delta, this.props.size, this.props.contentSize, this.props.orientation);
	    return nextState.position !== this.state.position;
	  },
	  _calculateState: function _calculateState(
	  /*number*/position,
	  /*number*/size,
	  /*number*/contentSize,
	  /*string*/orientation) /*object*/{
	    if (size < 1 || contentSize <= size) {
	      return UNSCROLLABLE_STATE;
	    }

	    var stateKey = position + '_' + size + '_' + contentSize + '_' + orientation;
	    if (this._stateKey === stateKey) {
	      return this._stateForKey;
	    }

	    // There are two types of positions here.
	    // 1) Phisical position: changed by mouse / keyboard
	    // 2) Logical position: changed by props.
	    // The logical position will be kept as as internal state and the `render()`
	    // function will translate it into physical position to render.

	    var isHorizontal = orientation === 'horizontal';
	    var scale = size / contentSize;
	    var faceSize = size * scale;

	    if (faceSize < FACE_SIZE_MIN) {
	      scale = (size - FACE_SIZE_MIN) / (contentSize - size);
	      faceSize = FACE_SIZE_MIN;
	    }

	    var scrollable = true;
	    var maxPosition = contentSize - size;

	    if (position < 0) {
	      position = 0;
	    } else if (position > maxPosition) {
	      position = maxPosition;
	    }

	    var isDragging = this._mouseMoveTracker ? this._mouseMoveTracker.isDragging() : false;

	    // This function should only return flat values that can be compared quiclky
	    // by `ReactComponentWithPureRenderMixin`.
	    var state = {
	      faceSize: faceSize,
	      isDragging: isDragging,
	      isHorizontal: isHorizontal,
	      position: position,
	      scale: scale,
	      scrollable: scrollable
	    };

	    // cache the state for later use.
	    this._stateKey = stateKey;
	    this._stateForKey = state;
	    return state;
	  },
	  _onWheelY: function _onWheelY( /*number*/deltaX, /*number*/deltaY) {
	    this._onWheel(deltaY);
	  },
	  _onWheelX: function _onWheelX( /*number*/deltaX, /*number*/deltaY) {
	    this._onWheel(deltaX);
	  },
	  _onWheel: function _onWheel( /*number*/delta) {
	    var props = this.props;

	    // The mouse may move faster then the animation frame does.
	    // Use `requestAnimationFrame` to avoid over-updating.
	    this._setNextState(this._calculateState(this.state.position + delta, props.size, props.contentSize, props.orientation));
	  },
	  _onMouseDown: function _onMouseDown( /*object*/event) {
	    var nextState;

	    if (event.target !== _ReactDOM2.default.findDOMNode(this.refs.face)) {
	      // Both `offsetX` and `layerX` are non-standard DOM property but they are
	      // magically available for browsers somehow.
	      var nativeEvent = event.nativeEvent;
	      var position = this.state.isHorizontal ? nativeEvent.offsetX || nativeEvent.layerX : nativeEvent.offsetY || nativeEvent.layerY;

	      // MouseDown on the scroll-track directly, move the center of the
	      // scroll-face to the mouse position.
	      var props = this.props;
	      position /= this.state.scale;
	      nextState = this._calculateState(position - this.state.faceSize * 0.5 / this.state.scale, props.size, props.contentSize, props.orientation);
	    } else {
	      nextState = {};
	    }

	    nextState.focused = true;
	    this._setNextState(nextState);

	    this._mouseMoveTracker.captureMouseMoves(event);
	    // Focus the node so it may receive keyboard event.
	    _ReactDOM2.default.findDOMNode(this).focus();
	  },
	  _onMouseMove: function _onMouseMove( /*number*/deltaX, /*number*/deltaY) {
	    var props = this.props;
	    var delta = this.state.isHorizontal ? deltaX : deltaY;
	    delta /= this.state.scale;

	    this._setNextState(this._calculateState(this.state.position + delta, props.size, props.contentSize, props.orientation));
	  },
	  _onMouseMoveEnd: function _onMouseMoveEnd() {
	    this._nextState = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.setState({ isDragging: false });
	  },
	  _onKeyDown: function _onKeyDown( /*object*/event) {
	    var keyCode = event.keyCode;

	    if (keyCode === _Keys2.default.TAB) {
	      // Let focus move off the scrollbar.
	      return;
	    }

	    var distance = KEYBOARD_SCROLL_AMOUNT;
	    var direction = 0;

	    if (this.state.isHorizontal) {
	      switch (keyCode) {
	        case _Keys2.default.HOME:
	          direction = -1;
	          distance = this.props.contentSize;
	          break;

	        case _Keys2.default.LEFT:
	          direction = -1;
	          break;

	        case _Keys2.default.RIGHT:
	          direction = 1;
	          break;

	        default:
	          return;
	      }
	    }

	    if (!this.state.isHorizontal) {
	      switch (keyCode) {
	        case _Keys2.default.SPACE:
	          if (event.shiftKey) {
	            direction = -1;
	          } else {
	            direction = 1;
	          }
	          break;

	        case _Keys2.default.HOME:
	          direction = -1;
	          distance = this.props.contentSize;
	          break;

	        case _Keys2.default.UP:
	          direction = -1;
	          break;

	        case _Keys2.default.DOWN:
	          direction = 1;
	          break;

	        case _Keys2.default.PAGE_UP:
	          direction = -1;
	          distance = this.props.size;
	          break;

	        case _Keys2.default.PAGE_DOWN:
	          direction = 1;
	          distance = this.props.size;
	          break;

	        default:
	          return;
	      }
	    }

	    event.preventDefault();

	    var props = this.props;
	    this._setNextState(this._calculateState(this.state.position + distance * direction, props.size, props.contentSize, props.orientation));
	  },
	  _onFocus: function _onFocus() {
	    this.setState({
	      focused: true
	    });
	  },
	  _onBlur: function _onBlur() {
	    this.setState({
	      focused: false
	    });
	  },
	  _blur: function _blur() {
	    if (this.isMounted()) {
	      try {
	        this._onBlur();
	        _ReactDOM2.default.findDOMNode(this).blur();
	      } catch (oops) {
	        // pass
	      }
	    }
	  },
	  _setNextState: function _setNextState( /*object*/nextState, /*?object*/props) {
	    props = props || this.props;
	    var controlledPosition = props.position;
	    var willScroll = this.state.position !== nextState.position;
	    if (controlledPosition === undefined) {
	      var callback = willScroll ? this._didScroll : undefined;
	      this.setState(nextState, callback);
	    } else if (controlledPosition === nextState.position) {
	      this.setState(nextState);
	    } else {
	      // Scrolling is controlled. Don't update the state and let the owner
	      // to update the scrollbar instead.
	      if (nextState.position !== undefined && nextState.position !== this.state.position) {
	        this.props.onScroll(nextState.position);
	      }
	      return;
	    }

	    if (willScroll && _lastScrolledScrollbar !== this) {
	      _lastScrolledScrollbar && _lastScrolledScrollbar._blur();
	      _lastScrolledScrollbar = this;
	    }
	  },
	  _didScroll: function _didScroll() {
	    this.props.onScroll(this.state.position);
	  }
	});

	Scrollbar.KEYBOARD_SCROLL_AMOUNT = KEYBOARD_SCROLL_AMOUNT;
	Scrollbar.SIZE = parseInt((0, _cssVar2.default)('scrollbar-size'), 10);

	module.exports = Scrollbar;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This class listens to events on the document and then updates a react
	 * component through callbacks.
	 * Please note that captureMouseMove must be called in
	 * order to initialize listeners on mousemove and mouseup.
	 * releaseMouseMove must be called to remove them. It is important to
	 * call releaseMouseMoves since mousemove is expensive to listen to.
	 *
	 * @providesModule DOMMouseMoveTracker
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EventListener = __webpack_require__(43);

	var _EventListener2 = _interopRequireDefault(_EventListener);

	var _cancelAnimationFramePolyfill = __webpack_require__(44);

	var _cancelAnimationFramePolyfill2 = _interopRequireDefault(_cancelAnimationFramePolyfill);

	var _requestAnimationFramePolyfill = __webpack_require__(38);

	var _requestAnimationFramePolyfill2 = _interopRequireDefault(_requestAnimationFramePolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DOMMouseMoveTracker = function () {
	  /**
	   * onMove is the callback that will be called on every mouse move.
	   * onMoveEnd is called on mouse up when movement has ended.
	   */
	  function DOMMouseMoveTracker(
	  /*function*/onMove,
	  /*function*/onMoveEnd,
	  /*DOMElement*/domNode) {
	    _classCallCheck(this, DOMMouseMoveTracker);

	    this._isDragging = false;
	    this._animationFrameID = null;
	    this._domNode = domNode;
	    this._onMove = onMove;
	    this._onMoveEnd = onMoveEnd;
	    this._onMouseEnd = this._onMouseEnd.bind(this);
	    this._onMouseMove = this._onMouseMove.bind(this);
	    this._onMouseUp = this._onMouseUp.bind(this);
	    this._didMouseMove = this._didMouseMove.bind(this);
	  }

	  /**
	   * This is to set up the listeners for listening to mouse move
	   * and mouse up signaling the movement has ended. Please note that these
	   * listeners are added at the document.body level. It takes in an event
	   * in order to grab inital state.
	   */


	  _createClass(DOMMouseMoveTracker, [{
	    key: 'captureMouseMoves',
	    value: function captureMouseMoves( /*object*/event) {
	      if (!this._eventMoveToken && !this._eventUpToken && !this._eventLeaveToken && !this._eventOutToken) {
	        this._eventMoveToken = _EventListener2.default.listen(this._domNode, 'mousemove', this._onMouseMove);
	        this._eventUpToken = _EventListener2.default.listen(this._domNode, 'mouseup', this._onMouseUp);
	        this._eventLeaveToken = _EventListener2.default.listen(this._domNode, 'mouseleave', this._onMouseEnd);
	        this._eventOutToken = _EventListener2.default.listen(this._domNode, 'mouseout', this.onMouseEnd);
	      }

	      if (!this._isDragging) {
	        this._deltaX = 0;
	        this._deltaY = 0;
	        this._isDragging = true;
	        this._x = event.clientX;
	        this._y = event.clientY;
	      }
	      event.preventDefault();
	    }

	    /**
	     * These releases all of the listeners on document.body.
	     */

	  }, {
	    key: 'releaseMouseMoves',
	    value: function releaseMouseMoves() {
	      if (this._eventMoveToken && this._eventUpToken && this._eventLeaveToken && this._eventOutToken) {
	        this._eventMoveToken.remove();
	        this._eventMoveToken = null;
	        this._eventUpToken.remove();
	        this._eventUpToken = null;
	        this._eventLeaveToken.remove();
	        this._eventLeaveToken = null;
	        this._eventOutToken.remove();
	        this._eventOutToken = null;
	      }

	      if (this._animationFrameID !== null) {
	        (0, _cancelAnimationFramePolyfill2.default)(this._animationFrameID);
	        this._animationFrameID = null;
	      }

	      if (this._isDragging) {
	        this._isDragging = false;
	        this._x = null;
	        this._y = null;
	      }
	    }

	    /**
	     * Returns whether or not if the mouse movement is being tracked.
	     */

	  }, {
	    key: 'isDragging',
	    value: function isDragging() /*boolean*/{
	      return this._isDragging;
	    }

	    /**
	     * Calls onMove passed into constructor and updates internal state.
	     */

	  }, {
	    key: '_onMouseMove',
	    value: function _onMouseMove( /*object*/event) {
	      var x = event.clientX;
	      var y = event.clientY;

	      this._deltaX += x - this._x;
	      this._deltaY += y - this._y;

	      if (this._animationFrameID === null) {
	        // The mouse may move faster then the animation frame does.
	        // Use `requestAnimationFramePolyfill` to avoid over-updating.
	        this._animationFrameID = (0, _requestAnimationFramePolyfill2.default)(this._didMouseMove);
	      }

	      this._x = x;
	      this._y = y;
	      event.preventDefault();
	    }
	  }, {
	    key: '_didMouseMove',
	    value: function _didMouseMove() {
	      this._animationFrameID = null;
	      this._onMove(this._deltaX, this._deltaY);
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }

	    /**
	     * Calls onMoveEnd passed into constructor and updates internal state.
	     */

	  }, {
	    key: '_onMouseUp',
	    value: function _onMouseUp() {
	      if (this._animationFrameID) {
	        this._didMouseMove();
	      }
	      this._onMoveEnd(false);
	    }

	    /**
	     * Calls onMoveEnd passed into the constructor, updates internal state, and cancels the move.
	     */

	  }, {
	    key: '_onMouseEnd',
	    value: function _onMouseEnd() {
	      this._onMoveEnd(true);
	    }
	  }]);

	  return DOMMouseMoveTracker;
	}();

	module.exports = DOMMouseMoveTracker;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: _emptyFunction2.default
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	}; /**
	    * Copyright Schrodinger, LLC
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @providesModule EventListener
	    * @typechecks
	    */

	module.exports = EventListener;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cancelAnimationFramePolyfill
	 */

	/**
	 * Here is the native and polyfill version of cancelAnimationFrame.
	 * Please don't use it directly and use cancelAnimationFrame module instead.
	 */
	var cancelAnimationFrame = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame || global.clearTimeout;

	module.exports = cancelAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Keys
	 */

	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ALT: 18,
	  ESC: 27,
	  SPACE: 32,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46,
	  COMMA: 188,
	  PERIOD: 190,
	  A: 65,
	  Z: 90,
	  ZERO: 48,
	  NUMPAD_0: 96,
	  NUMPAD_9: 105
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */

	module.exports = __webpack_require__(47);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cssVar
	 * @typechecks
	 */

	"use strict";

	var CSS_VARS = {
	  'scrollbar-face-active-color': '#7d7d7d',
	  'scrollbar-face-color': '#c2c2c2',
	  'scrollbar-face-margin': '4px',
	  'scrollbar-face-radius': '6px',
	  'scrollbar-size': '15px',
	  'scrollbar-size-large': '17px',
	  'scrollbar-track-color': 'rgba(255, 255, 255, 0.8)',
	  'fbui-white': '#fff',
	  'fbui-desktop-background-light': '#f6f7f8'
	};

	/**
	 * @param {string} name
	 */
	function cssVar(name) {
	  if (CSS_VARS.hasOwnProperty(name)) {
	    return CSS_VARS[name];
	  }

	  throw new Error('cssVar' + '("' + name + '"): Unexpected class transformation.');
	}

	cssVar.CSS_VARS = CSS_VARS;

	module.exports = cssVar;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	var slashReplaceRegex = /\//g;
	var cache = {};

	function getClassName(className) {
	  if (cache[className]) {
	    return cache[className];
	  }

	  cache[className] = className.replace(slashReplaceRegex, '_');
	  return cache[className];
	}

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  var classNamesArray;
	  if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) == 'object') {
	    classNamesArray = Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    });
	  } else {
	    classNamesArray = Array.prototype.slice.call(arguments);
	  }

	  return classNamesArray.map(getClassName).join(' ');
	}

	module.exports = cx;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _translateDOMPositionXY = __webpack_require__(51);

	var _translateDOMPositionXY2 = _interopRequireDefault(_translateDOMPositionXY);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function FixedDataTableTranslateDOMPosition( /*object*/style, /*number*/x, /*number*/y) {
	  var initialRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  if (initialRender) {
	    style.left = x + 'px';
	    style.top = y + 'px';
	  } else {
	    (0, _translateDOMPositionXY2.default)(style, x, y);
	  }
	} /**
	   * Copyright Schrodinger, LLC
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * @providesModule FixedDataTableTranslateDOMPosition
	   * @typechecks
	   */

	module.exports = FixedDataTableTranslateDOMPosition;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule translateDOMPositionXY
	 * @typechecks
	 */

	'use strict';

	var _BrowserSupportCore = __webpack_require__(52);

	var _BrowserSupportCore2 = _interopRequireDefault(_BrowserSupportCore);

	var _getVendorPrefixedName = __webpack_require__(53);

	var _getVendorPrefixedName2 = _interopRequireDefault(_getVendorPrefixedName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TRANSFORM = (0, _getVendorPrefixedName2.default)('transform');
	var BACKFACE_VISIBILITY = (0, _getVendorPrefixedName2.default)('backfaceVisibility');

	var translateDOMPositionXY = function () {
	  if (_BrowserSupportCore2.default.hasCSSTransforms()) {
	    var ua = global.window ? global.window.navigator.userAgent : 'UNKNOWN';
	    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
	    // It appears that Safari messes up the composition order
	    // of GPU-accelerated layers
	    // (see bug https://bugs.webkit.org/show_bug.cgi?id=61824).
	    // Use 2D translation instead.
	    if (!isSafari && _BrowserSupportCore2.default.hasCSS3DTransforms()) {
	      return function ( /*object*/style, /*number*/x, /*number*/y) {
	        style[TRANSFORM] = 'translate3d(' + x + 'px,' + y + 'px,0)';
	        style[BACKFACE_VISIBILITY] = 'hidden';
	      };
	    } else {
	      return function ( /*object*/style, /*number*/x, /*number*/y) {
	        style[TRANSFORM] = 'translate(' + x + 'px,' + y + 'px)';
	      };
	    }
	  } else {
	    return function ( /*object*/style, /*number*/x, /*number*/y) {
	      style.left = x + 'px';
	      style.top = y + 'px';
	    };
	  }
	}();

	module.exports = translateDOMPositionXY;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getVendorPrefixedName = __webpack_require__(53);

	var _getVendorPrefixedName2 = _interopRequireDefault(_getVendorPrefixedName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BrowserSupportCore = {
	  /**
	   * @return {bool} True if browser supports css animations.
	   */
	  hasCSSAnimations: function hasCSSAnimations() {
	    return !!(0, _getVendorPrefixedName2.default)('animationName');
	  },

	  /**
	   * @return {bool} True if browser supports css transforms.
	   */
	  hasCSSTransforms: function hasCSSTransforms() {
	    return !!(0, _getVendorPrefixedName2.default)('transform');
	  },

	  /**
	   * @return {bool} True if browser supports css 3d transforms.
	   */
	  hasCSS3DTransforms: function hasCSS3DTransforms() {
	    return !!(0, _getVendorPrefixedName2.default)('perspective');
	  },

	  /**
	   * @return {bool} True if browser supports css transitions.
	   */
	  hasCSSTransitions: function hasCSSTransitions() {
	    return !!(0, _getVendorPrefixedName2.default)('transition');
	  }
	}; /**
	    * Copyright Schrodinger, LLC
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @providesModule BrowserSupportCore
	    */

	module.exports = BrowserSupportCore;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ExecutionEnvironment = __webpack_require__(37);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _camelize = __webpack_require__(54);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _invariant = __webpack_require__(55);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var memoized = {}; /**
	                    * Copyright Schrodinger, LLC
	                    * All rights reserved.
	                    *
	                    * This source code is licensed under the BSD-style license found in the
	                    * LICENSE file in the root directory of this source tree. An additional grant
	                    * of patent rights can be found in the PATENTS file in the same directory.
	                    *
	                    * @providesModule getVendorPrefixedName
	                    * @typechecks
	                    */

	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	var prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
	var testStyle = _ExecutionEnvironment2.default.canUseDOM ? document.createElement('div').style : {};

	function getWithPrefix(name) {
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixedName = prefixes[i] + name;
	    if (prefixedName in testStyle) {
	      return prefixedName;
	    }
	  }
	  return null;
	}

	/**
	 * @param {string} property Name of a css property to check for.
	 * @return {?string} property name supported in the browser, or null if not
	 * supported.
	 */
	function getVendorPrefixedName(property) {
	  var name = (0, _camelize2.default)(property);
	  if (memoized[name] === undefined) {
	    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
	    if (prefixRegex.test(capitalizedName)) {
	      (0, _invariant2.default)(false, 'getVendorPrefixedName must only be called with unprefixed' + 'CSS property names. It was called with %s', property);
	    }
	    memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
	  }
	  return memoized[name];
	}

	module.exports = getVendorPrefixedName;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _FixedDataTableRowBuffer = __webpack_require__(57);

	var _FixedDataTableRowBuffer2 = _interopRequireDefault(_FixedDataTableRowBuffer);

	var _FixedDataTableRow = __webpack_require__(61);

	var _FixedDataTableRow2 = _interopRequireDefault(_FixedDataTableRow);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _emptyFunction = __webpack_require__(33);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _joinClasses = __webpack_require__(69);

	var _joinClasses2 = _interopRequireDefault(_joinClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableBufferedRows
	 * @typechecks
	 */

	var PropTypes = _React2.default.PropTypes;


	var FixedDataTableBufferedRows = _React2.default.createClass({
	  displayName: 'FixedDataTableBufferedRows',


	  propTypes: {
	    bufferRowCount: PropTypes.number,
	    isScrolling: PropTypes.bool,
	    defaultRowHeight: PropTypes.number.isRequired,
	    firstRowIndex: PropTypes.number.isRequired,
	    firstRowOffset: PropTypes.number.isRequired,
	    fixedColumns: PropTypes.array.isRequired,
	    height: PropTypes.number.isRequired,
	    offsetTop: PropTypes.number.isRequired,
	    onRowClick: PropTypes.func,
	    onRowDoubleClick: PropTypes.func,
	    onRowMouseDown: PropTypes.func,
	    onRowMouseEnter: PropTypes.func,
	    onRowMouseLeave: PropTypes.func,
	    maxVisibleColumns: PropTypes.number.isRequired,
	    rowClassNameGetter: PropTypes.func,
	    rowsCount: PropTypes.number.isRequired,
	    rowHeightGetter: PropTypes.func,
	    rowKeyGetter: PropTypes.func,
	    rowPositionGetter: PropTypes.func.isRequired,
	    scrollLeft: PropTypes.number.isRequired,
	    scrollableColumns: PropTypes.array.isRequired,
	    showLastRowBorder: PropTypes.bool,
	    width: PropTypes.number.isRequired
	  },

	  getInitialState: function getInitialState() /*object*/{
	    this._rowBuffer = new _FixedDataTableRowBuffer2.default(this.props.rowsCount, this.props.defaultRowHeight, this.props.height, this._getRowHeight, this.props.bufferRowCount);
	    return {
	      rowsToRender: this._rowBuffer.getRows(this.props.firstRowIndex, this.props.firstRowOffset)
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this._staticRowArray = [];
	    this._initialRender = true;
	  },
	  componentDidMount: function componentDidMount() {
	    setTimeout(this._updateBuffer, 1000);
	    this._initialRender = false;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    if (nextProps.rowsCount !== this.props.rowsCount || nextProps.defaultRowHeight !== this.props.defaultRowHeight || nextProps.height !== this.props.height) {
	      this._rowBuffer = new _FixedDataTableRowBuffer2.default(nextProps.rowsCount, nextProps.defaultRowHeight, nextProps.height, this._getRowHeight, this.props.bufferRowCount);
	    }
	    if (this.props.isScrolling && !nextProps.isScrolling) {
	      this._updateBuffer();
	    } else {
	      this.setState({
	        rowsToRender: this._rowBuffer.getRows(nextProps.firstRowIndex, nextProps.firstRowOffset)
	      });
	    }
	  },
	  _updateBuffer: function _updateBuffer() {
	    if (this.isMounted()) {
	      this.setState({
	        rowsToRender: this._rowBuffer.getRowsWithUpdatedBuffer()
	      });
	    }
	  },
	  shouldComponentUpdate: function shouldComponentUpdate() /*boolean*/{
	    // Don't add PureRenderMixin to this component please.
	    return true;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._staticRowArray.length = 0;
	  },
	  render: function render() /*object*/{
	    var props = this.props;
	    var rowClassNameGetter = props.rowClassNameGetter || _emptyFunction2.default;
	    var rowPositionGetter = props.rowPositionGetter;

	    var rowsToRender = this.state.rowsToRender;

	    //Sort the rows, we slice first to avoid changing original
	    var sortedRowsToRender = rowsToRender.slice().sort(function (a, b) {
	      return a - b;
	    });
	    var rowPositions = {};

	    //Row position calculation requires that rows are calculated in order
	    sortedRowsToRender.forEach(function (rowIndex) {
	      rowPositions[rowIndex] = rowPositionGetter(rowIndex);
	    });

	    this._staticRowArray.length = rowsToRender.length;

	    var baseOffsetTop = props.firstRowOffset - props.rowPositionGetter(props.firstRowIndex) + props.offsetTop;

	    for (var i = 0; i < rowsToRender.length; ++i) {
	      var rowIndex = rowsToRender[i];
	      var currentRowHeight = this._getRowHeight(rowIndex);
	      var rowOffsetTop = baseOffsetTop + rowPositions[rowIndex];
	      var rowKey = props.rowKeyGetter ? props.rowKeyGetter(rowIndex) : i;

	      var hasBottomBorder = rowIndex === props.rowsCount - 1 && props.showLastRowBorder;

	      this._staticRowArray[i] = _React2.default.createElement(_FixedDataTableRow2.default, {
	        key: rowKey,
	        isScrolling: props.isScrolling,
	        index: rowIndex,
	        width: props.width,
	        height: currentRowHeight,
	        scrollLeft: Math.round(props.scrollLeft),
	        offsetTop: Math.round(rowOffsetTop),
	        fixedColumns: props.fixedColumns,
	        scrollableColumns: props.scrollableColumns,
	        onClick: props.onRowClick,
	        onDoubleClick: props.onRowDoubleClick,
	        onMouseDown: props.onRowMouseDown,
	        onMouseEnter: props.onRowMouseEnter,
	        onMouseLeave: props.onRowMouseLeave,
	        maxVisibleColumns: props.maxVisibleColumns,
	        className: (0, _joinClasses2.default)(rowClassNameGetter(rowIndex), (0, _cx2.default)('public/fixedDataTable/bodyRow'), (0, _cx2.default)({
	          'fixedDataTableLayout/hasBottomBorder': hasBottomBorder,
	          'public/fixedDataTable/hasBottomBorder': hasBottomBorder
	        }))
	      });
	    }

	    return _React2.default.createElement(
	      'div',
	      null,
	      this._staticRowArray
	    );
	  },
	  _getRowHeight: function _getRowHeight( /*number*/index) /*number*/{
	    return this.props.rowHeightGetter ? this.props.rowHeightGetter(index) : this.props.defaultRowHeight;
	  }
	});

	module.exports = FixedDataTableBufferedRows;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRowBuffer
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _IntegerBufferSet = __webpack_require__(58);

	var _IntegerBufferSet2 = _interopRequireDefault(_IntegerBufferSet);

	var _clamp = __webpack_require__(60);

	var _clamp2 = _interopRequireDefault(_clamp);

	var _invariant = __webpack_require__(55);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MIN_BUFFER_ROWS = 3;
	var MAX_BUFFER_ROWS = 6;

	// FixedDataTableRowBuffer is a helper class that executes row buffering
	// logic for FixedDataTable. It figures out which rows should be rendered
	// and in which positions.

	var FixedDataTableRowBuffer = function () {
	  function FixedDataTableRowBuffer(
	  /*number*/rowsCount,
	  /*number*/defaultRowHeight,
	  /*number*/viewportHeight,
	  /*?function*/rowHeightGetter,
	  /*?number*/bufferRowCount) {
	    _classCallCheck(this, FixedDataTableRowBuffer);

	    (0, _invariant2.default)(defaultRowHeight !== 0, "defaultRowHeight musn't be equal 0 in FixedDataTableRowBuffer");

	    this._bufferSet = new _IntegerBufferSet2.default();
	    this._defaultRowHeight = defaultRowHeight;
	    this._viewportRowsBegin = 0;
	    this._viewportRowsEnd = 0;
	    this._maxVisibleRowCount = Math.ceil(viewportHeight / defaultRowHeight) + 1;
	    this._bufferRowsCount = bufferRowCount != null ? bufferRowCount : (0, _clamp2.default)(Math.floor(this._maxVisibleRowCount / 2), MIN_BUFFER_ROWS, MAX_BUFFER_ROWS);
	    this._rowsCount = rowsCount;
	    this._rowHeightGetter = rowHeightGetter;
	    this._rows = [];
	    this._viewportHeight = viewportHeight;

	    this.getRows = this.getRows.bind(this);
	    this.getRowsWithUpdatedBuffer = this.getRowsWithUpdatedBuffer.bind(this);
	  }

	  _createClass(FixedDataTableRowBuffer, [{
	    key: 'getRowsWithUpdatedBuffer',
	    value: function getRowsWithUpdatedBuffer() /*array*/{
	      var remainingBufferRows = 2 * this._bufferRowsCount;
	      var bufferRowIndex = Math.max(this._viewportRowsBegin - this._bufferRowsCount, 0);
	      while (bufferRowIndex < this._viewportRowsBegin) {
	        this._addRowToBuffer(bufferRowIndex, this._viewportRowsBegin, this._viewportRowsEnd - 1);
	        bufferRowIndex++;
	        remainingBufferRows--;
	      }
	      bufferRowIndex = this._viewportRowsEnd;
	      while (bufferRowIndex < this._rowsCount && remainingBufferRows > 0) {
	        this._addRowToBuffer(bufferRowIndex, this._viewportRowsBegin, this._viewportRowsEnd - 1);
	        bufferRowIndex++;
	        remainingBufferRows--;
	      }
	      return this._rows;
	    }
	  }, {
	    key: 'getRows',
	    value: function getRows(
	    /*number*/firstRowIndex,
	    /*number*/firstRowOffset) /*array*/{
	      var top = firstRowOffset;
	      var totalHeight = top;
	      var rowIndex = firstRowIndex;
	      var endIndex = Math.min(firstRowIndex + this._maxVisibleRowCount, this._rowsCount);

	      this._viewportRowsBegin = firstRowIndex;
	      while (rowIndex < endIndex || totalHeight < this._viewportHeight && rowIndex < this._rowsCount) {
	        this._addRowToBuffer(rowIndex, firstRowIndex, endIndex - 1);
	        totalHeight += this._rowHeightGetter(rowIndex);
	        ++rowIndex;
	        // Store index after the last viewport row as end, to be able to
	        // distinguish when there are no rows rendered in viewport
	        this._viewportRowsEnd = rowIndex;
	      }

	      return this._rows;
	    }
	  }, {
	    key: '_addRowToBuffer',
	    value: function _addRowToBuffer(
	    /*number*/rowIndex,
	    /*number*/firstViewportRowIndex,
	    /*number*/lastViewportRowIndex) {
	      var rowPosition = this._bufferSet.getValuePosition(rowIndex);
	      var viewportRowsCount = lastViewportRowIndex - firstViewportRowIndex + 1;
	      var allowedRowsCount = viewportRowsCount + this._bufferRowsCount * 2;
	      if (rowPosition === null && this._bufferSet.getSize() >= allowedRowsCount) {
	        rowPosition = this._bufferSet.replaceFurthestValuePosition(firstViewportRowIndex, lastViewportRowIndex, rowIndex);
	      }
	      if (rowPosition === null) {
	        // We can't reuse any of existing positions for this row. We have to
	        // create new position
	        rowPosition = this._bufferSet.getNewPositionForValue(rowIndex);
	        this._rows[rowPosition] = rowIndex;
	      } else {
	        // This row already is in the table with rowPosition position or it
	        // can replace row that is in that position
	        this._rows[rowPosition] = rowIndex;
	      }
	    }
	  }]);

	  return FixedDataTableRowBuffer;
	}();

	module.exports = FixedDataTableRowBuffer;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule IntegerBufferSet
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Heap = __webpack_require__(59);

	var _Heap2 = _interopRequireDefault(_Heap);

	var _invariant = __webpack_require__(55);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Data structure that allows to store values and assign positions to them
	// in a way to minimize changing positions of stored values when new ones are
	// added or when some values are replaced. Stored elements are alwasy assigned
	// a consecutive set of positoins startin from 0 up to count of elements less 1
	// Following actions can be executed
	// * get position assigned to given value (null if value is not stored)
	// * create new entry for new value and get assigned position back
	// * replace value that is furthest from specified value range with new value
	//   and get it's position back
	// All operations take amortized log(n) time where n is number of elements in
	// the set.
	var IntegerBufferSet = function () {
	  function IntegerBufferSet() {
	    _classCallCheck(this, IntegerBufferSet);

	    this._valueToPositionMap = {};
	    this._size = 0;
	    this._smallValues = new _Heap2.default([], // Initial data in the heap
	    this._smallerComparator);
	    this._largeValues = new _Heap2.default([], // Initial data in the heap
	    this._greaterComparator);

	    this.getNewPositionForValue = this.getNewPositionForValue.bind(this);
	    this.getValuePosition = this.getValuePosition.bind(this);
	    this.getSize = this.getSize.bind(this);
	    this.replaceFurthestValuePosition = this.replaceFurthestValuePosition.bind(this);
	  }

	  _createClass(IntegerBufferSet, [{
	    key: 'getSize',
	    value: function getSize() /*number*/{
	      return this._size;
	    }
	  }, {
	    key: 'getValuePosition',
	    value: function getValuePosition( /*number*/value) /*?number*/{
	      if (this._valueToPositionMap[value] === undefined) {
	        return null;
	      }
	      return this._valueToPositionMap[value];
	    }
	  }, {
	    key: 'getNewPositionForValue',
	    value: function getNewPositionForValue( /*number*/value) /*number*/{
	      (0, _invariant2.default)(this._valueToPositionMap[value] === undefined, "Shouldn't try to find new position for value already stored in BufferSet");
	      var newPosition = this._size;
	      this._size++;
	      this._pushToHeaps(newPosition, value);
	      this._valueToPositionMap[value] = newPosition;
	      return newPosition;
	    }
	  }, {
	    key: 'replaceFurthestValuePosition',
	    value: function replaceFurthestValuePosition(
	    /*number*/lowValue,
	    /*number*/highValue,
	    /*number*/newValue) /*?number*/{
	      (0, _invariant2.default)(this._valueToPositionMap[newValue] === undefined, "Shouldn't try to replace values with value already stored value in " + "BufferSet");

	      this._cleanHeaps();
	      if (this._smallValues.empty() || this._largeValues.empty()) {
	        // Threre are currently no values stored. We will have to create new
	        // position for this value.
	        return null;
	      }

	      var minValue = this._smallValues.peek().value;
	      var maxValue = this._largeValues.peek().value;
	      if (minValue >= lowValue && maxValue <= highValue) {
	        // All values currently stored are necessary, we can't reuse any of them.
	        return null;
	      }

	      var valueToReplace;
	      if (lowValue - minValue > maxValue - highValue) {
	        // minValue is further from provided range. We will reuse it's position.
	        valueToReplace = minValue;
	        this._smallValues.pop();
	      } else {
	        valueToReplace = maxValue;
	        this._largeValues.pop();
	      }
	      var position = this._valueToPositionMap[valueToReplace];
	      delete this._valueToPositionMap[valueToReplace];
	      this._valueToPositionMap[newValue] = position;
	      this._pushToHeaps(position, newValue);

	      return position;
	    }
	  }, {
	    key: '_pushToHeaps',
	    value: function _pushToHeaps( /*number*/position, /*number*/value) {
	      var element = {
	        position: position,
	        value: value
	      };
	      // We can reuse the same object in both heaps, because we don't mutate them
	      this._smallValues.push(element);
	      this._largeValues.push(element);
	    }
	  }, {
	    key: '_cleanHeaps',
	    value: function _cleanHeaps() {
	      // We not usually only remove object from one heap while moving value.
	      // Here we make sure that there is no stale data on top of heaps.
	      this._cleanHeap(this._smallValues);
	      this._cleanHeap(this._largeValues);
	      var minHeapSize = Math.min(this._smallValues.size(), this._largeValues.size());
	      var maxHeapSize = Math.max(this._smallValues.size(), this._largeValues.size());
	      if (maxHeapSize > 10 * minHeapSize) {
	        // There are many old values in one of heaps. We nned to get rid of them
	        // to not use too avoid memory leaks
	        this._recreateHeaps();
	      }
	    }
	  }, {
	    key: '_recreateHeaps',
	    value: function _recreateHeaps() {
	      var sourceHeap = this._smallValues.size() < this._largeValues.size() ? this._smallValues : this._largeValues;
	      var newSmallValues = new _Heap2.default([], // Initial data in the heap
	      this._smallerComparator);
	      var newLargeValues = new _Heap2.default([], // Initial datat in the heap
	      this._greaterComparator);
	      while (!sourceHeap.empty()) {
	        var element = sourceHeap.pop();
	        // Push all stil valid elements to new heaps
	        if (this._valueToPositionMap[element.value] !== undefined) {
	          newSmallValues.push(element);
	          newLargeValues.push(element);
	        }
	      }
	      this._smallValues = newSmallValues;
	      this._largeValues = newLargeValues;
	    }
	  }, {
	    key: '_cleanHeap',
	    value: function _cleanHeap( /*object*/heap) {
	      while (!heap.empty() && this._valueToPositionMap[heap.peek().value] === undefined) {
	        heap.pop();
	      }
	    }
	  }, {
	    key: '_smallerComparator',
	    value: function _smallerComparator( /*object*/lhs, /*object*/rhs) /*boolean*/{
	      return lhs.value < rhs.value;
	    }
	  }, {
	    key: '_greaterComparator',
	    value: function _greaterComparator( /*object*/lhs, /*object*/rhs) /*boolean*/{
	      return lhs.value > rhs.value;
	    }
	  }]);

	  return IntegerBufferSet;
	}();

	module.exports = IntegerBufferSet;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Heap
	 * @typechecks
	 * @preventMunge
	 */

	'use strict';

	/*
	 * @param {*} a
	 * @param {*} b
	 * @return {boolean}
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function defaultComparator(a, b) {
	  return a < b;
	}

	var Heap = function () {
	  function Heap(items, comparator) {
	    _classCallCheck(this, Heap);

	    this._items = items || [];
	    this._size = this._items.length;
	    this._comparator = comparator || defaultComparator;
	    this._heapify();
	  }

	  /*
	   * @return {boolean}
	   */


	  _createClass(Heap, [{
	    key: 'empty',
	    value: function empty() {
	      return this._size === 0;
	    }

	    /*
	     * @return {*}
	     */

	  }, {
	    key: 'pop',
	    value: function pop() {
	      if (this._size === 0) {
	        return;
	      }

	      var elt = this._items[0];

	      var lastElt = this._items.pop();
	      this._size--;

	      if (this._size > 0) {
	        this._items[0] = lastElt;
	        this._sinkDown(0);
	      }

	      return elt;
	    }

	    /*
	     * @param {*} item
	     */

	  }, {
	    key: 'push',
	    value: function push(item) {
	      this._items[this._size++] = item;
	      this._bubbleUp(this._size - 1);
	    }

	    /*
	     * @return {number}
	     */

	  }, {
	    key: 'size',
	    value: function size() {
	      return this._size;
	    }

	    /*
	     * @return {*}
	     */

	  }, {
	    key: 'peek',
	    value: function peek() {
	      if (this._size === 0) {
	        return;
	      }

	      return this._items[0];
	    }
	  }, {
	    key: '_heapify',
	    value: function _heapify() {
	      for (var index = Math.floor((this._size + 1) / 2); index >= 0; index--) {
	        this._sinkDown(index);
	      }
	    }

	    /*
	     * @parent {number} index
	     */

	  }, {
	    key: '_bubbleUp',
	    value: function _bubbleUp(index) {
	      var elt = this._items[index];
	      while (index > 0) {
	        var parentIndex = Math.floor((index + 1) / 2) - 1;
	        var parentElt = this._items[parentIndex];

	        // if parentElt < elt, stop
	        if (this._comparator(parentElt, elt)) {
	          return;
	        }

	        // swap
	        this._items[parentIndex] = elt;
	        this._items[index] = parentElt;
	        index = parentIndex;
	      }
	    }

	    /*
	     * @parent {number} index
	     */

	  }, {
	    key: '_sinkDown',
	    value: function _sinkDown(index) {
	      var elt = this._items[index];

	      while (true) {
	        var leftChildIndex = 2 * (index + 1) - 1;
	        var rightChildIndex = 2 * (index + 1);
	        var swapIndex = -1;

	        if (leftChildIndex < this._size) {
	          var leftChild = this._items[leftChildIndex];
	          if (this._comparator(leftChild, elt)) {
	            swapIndex = leftChildIndex;
	          }
	        }

	        if (rightChildIndex < this._size) {
	          var rightChild = this._items[rightChildIndex];
	          if (this._comparator(rightChild, elt)) {
	            if (swapIndex === -1 || this._comparator(rightChild, this._items[swapIndex])) {
	              swapIndex = rightChildIndex;
	            }
	          }
	        }

	        // if we don't have a swap, stop
	        if (swapIndex === -1) {
	          return;
	        }

	        this._items[index] = this._items[swapIndex];
	        this._items[swapIndex] = elt;
	        index = swapIndex;
	      }
	    }
	  }]);

	  return Heap;
	}();

	module.exports = Heap;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule clamp
	 * @typechecks
	 */

	/**
	 * Clamps (or clips or confines) the value to be between min and max.
	 * @param {number} value
	 * @param {number} min
	 * @param {number} max
	 * @return {number}
	 */
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}

	module.exports = clamp;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRow
	 * @typechecks
	 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _FixedDataTableCellGroup = __webpack_require__(62);

	var _FixedDataTableCellGroup2 = _interopRequireDefault(_FixedDataTableCellGroup);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _joinClasses = __webpack_require__(69);

	var _joinClasses2 = _interopRequireDefault(_joinClasses);

	var _FixedDataTableTranslateDOMPosition = __webpack_require__(50);

	var _FixedDataTableTranslateDOMPosition2 = _interopRequireDefault(_FixedDataTableTranslateDOMPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _React2.default.PropTypes;

	/**
	 * Component that renders the row for <FixedDataTable />.
	 * This component should not be used directly by developer. Instead,
	 * only <FixedDataTable /> should use the component internally.
	 */

	var FixedDataTableRowImpl = _React2.default.createClass({
	  displayName: 'FixedDataTableRowImpl',


	  propTypes: {

	    isScrolling: PropTypes.bool,

	    /**
	     * Array of <FixedDataTableColumn /> for the fixed columns.
	     */
	    fixedColumns: PropTypes.array.isRequired,

	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,

	    /**
	     * The row index.
	     */
	    index: PropTypes.number.isRequired,

	    /**
	     * Array of <FixedDataTableColumn /> for the scrollable columns.
	     */
	    scrollableColumns: PropTypes.array.isRequired,

	    /**
	     * Number of max on screen columns
	     */
	    maxVisibleColumns: PropTypes.number.isRequired,

	    /**
	     * The distance between the left edge of the table and the leftmost portion
	     * of the row currently visible in the table.
	     */
	    scrollLeft: PropTypes.number.isRequired,

	    /**
	     * Width of the row.
	     */
	    width: PropTypes.number.isRequired,

	    /**
	     * Fire when a row is clicked.
	     */
	    onClick: PropTypes.func,

	    /**
	     * Fire when a row is double clicked.
	     */
	    onDoubleClick: PropTypes.func,

	    /**
	     * Callback for when resizer knob (in FixedDataTableCell) is clicked
	     * to initialize resizing. Please note this is only on the cells
	     * in the header.
	     * @param number combinedWidth
	     * @param number leftOffset
	     * @param number cellWidth
	     * @param number|string columnKey
	     * @param object event
	     */
	    onColumnResize: PropTypes.func,

	    isColumnReordering: PropTypes.bool,
	    /**
	     * Callback for when reorder handle (in FixedDataTableCell) is clicked
	     * to initialize reordering. Please note this is only on the cells
	     * in the header.
	     * @param number|string columnKey
	     * @param number cellWidth
	     * @param number leftOffset
	     * @param object event
	     */
	    onColumnReorder: PropTypes.func,

	    /**
	     * Callback for when a cell is moved while reordering.
	     * @param number distance
	     */
	    onColumnReorderMove: PropTypes.func,

	    /**
	     * Callback for when the mouse is released to complete reordering.
	     * @param number distance
	     */
	    onColumnReorderEnd: PropTypes.func
	  },

	  render: function render() /*object*/{
	    var style = {
	      width: this.props.width,
	      height: this.props.height
	    };

	    var className = (0, _cx2.default)({
	      'fixedDataTableRowLayout/main': true,
	      'public/fixedDataTableRow/main': true,
	      'public/fixedDataTableRow/highlighted': this.props.index % 2 === 1,
	      'public/fixedDataTableRow/odd': this.props.index % 2 === 1,
	      'public/fixedDataTableRow/even': this.props.index % 2 === 0
	    });
	    var fixedColumnsWidth = this._getColumnsWidth(this.props.fixedColumns);

	    var fixedColumns = _React2.default.createElement(_FixedDataTableCellGroup2.default, {
	      key: 'fixed_cells',
	      isScrolling: this.props.isScrolling,
	      height: this.props.height,
	      left: 0,
	      width: fixedColumnsWidth,
	      zIndex: 2,
	      columns: this.props.fixedColumns,
	      maxVisibleColumns: this.props.maxVisibleColumns,
	      onColumnResize: this.props.onColumnResize,
	      onColumnReorder: this.props.onColumnReorder,
	      onColumnReorderMove: this.props.onColumnReorderMove,
	      onColumnReorderEnd: this.props.onColumnReorderEnd,
	      isColumnReordering: this.props.isColumnReordering,
	      columnReorderingData: this.props.columnReorderingData,
	      rowHeight: this.props.height,
	      rowIndex: this.props.index
	    });
	    var columnsLeftShadow = this._renderColumnsLeftShadow(fixedColumnsWidth);
	    var scrollableColumns = _React2.default.createElement(_FixedDataTableCellGroup2.default, {
	      key: 'scrollable_cells',
	      isScrolling: this.props.isScrolling,
	      height: this.props.height,
	      left: this.props.scrollLeft,
	      offsetLeft: fixedColumnsWidth,
	      width: this.props.width - fixedColumnsWidth,
	      zIndex: 0,
	      columns: this.props.scrollableColumns,
	      maxVisibleColumns: this.props.maxVisibleColumns,
	      onColumnResize: this.props.onColumnResize,
	      onColumnReorder: this.props.onColumnReorder,
	      onColumnReorderMove: this.props.onColumnReorderMove,
	      onColumnReorderEnd: this.props.onColumnReorderEnd,
	      isColumnReordering: this.props.isColumnReordering,
	      columnReorderingData: this.props.columnReorderingData,
	      rowHeight: this.props.height,
	      rowIndex: this.props.index
	    });
	    var scrollableColumnsWidth = this._getColumnsWidth(this.props.scrollableColumns);
	    var columnsRightShadow = this._renderColumnsRightShadow(fixedColumnsWidth + scrollableColumnsWidth);

	    return _React2.default.createElement(
	      'div',
	      {
	        className: (0, _joinClasses2.default)(className, this.props.className),
	        onClick: this.props.onClick ? this._onClick : null,
	        onDoubleClick: this.props.onDoubleClick ? this._onDoubleClick : null,
	        onMouseDown: this.props.onMouseDown ? this._onMouseDown : null,
	        onMouseEnter: this.props.onMouseEnter ? this._onMouseEnter : null,
	        onMouseLeave: this.props.onMouseLeave ? this._onMouseLeave : null,
	        style: style },
	      _React2.default.createElement(
	        'div',
	        { className: (0, _cx2.default)('fixedDataTableRowLayout/body') },
	        fixedColumns,
	        scrollableColumns,
	        columnsLeftShadow
	      ),
	      columnsRightShadow
	    );
	  },
	  _getColumnsWidth: function _getColumnsWidth( /*array*/columns) /*number*/{
	    var width = 0;
	    for (var i = 0; i < columns.length; ++i) {
	      width += columns[i].props.width;
	    }
	    return width;
	  },
	  _renderColumnsLeftShadow: function _renderColumnsLeftShadow( /*number*/left) /*?object*/{
	    var className = (0, _cx2.default)({
	      'fixedDataTableRowLayout/fixedColumnsDivider': left > 0,
	      'fixedDataTableRowLayout/columnsShadow': this.props.scrollLeft > 0,
	      'public/fixedDataTableRow/fixedColumnsDivider': left > 0,
	      'public/fixedDataTableRow/columnsShadow': this.props.scrollLeft > 0
	    });
	    var style = {
	      left: left,
	      height: this.props.height
	    };
	    return _React2.default.createElement('div', { className: className, style: style });
	  },
	  _renderColumnsRightShadow: function _renderColumnsRightShadow( /*number*/totalWidth) /*?object*/{
	    if (Math.ceil(this.props.scrollLeft + this.props.width) < Math.floor(totalWidth)) {
	      var className = (0, _cx2.default)('fixedDataTableRowLayout/columnsShadow', 'fixedDataTableRowLayout/columnsRightShadow', 'public/fixedDataTableRow/columnsShadow', 'public/fixedDataTableRow/columnsRightShadow');
	      var style = {
	        height: this.props.height
	      };
	      return _React2.default.createElement('div', { className: className, style: style });
	    }
	  },
	  _onClick: function _onClick( /*object*/event) {
	    this.props.onClick(event, this.props.index);
	  },
	  _onDoubleClick: function _onDoubleClick( /*object*/event) {
	    this.props.onDoubleClick(event, this.props.index);
	  },
	  _onMouseDown: function _onMouseDown( /*object*/event) {
	    this.props.onMouseDown(event, this.props.index);
	  },
	  _onMouseEnter: function _onMouseEnter( /*object*/event) {
	    this.props.onMouseEnter(event, this.props.index);
	  },
	  _onMouseLeave: function _onMouseLeave( /*object*/event) {
	    this.props.onMouseLeave(event, this.props.index);
	  }
	});

	var FixedDataTableRow = _React2.default.createClass({
	  displayName: 'FixedDataTableRow',


	  propTypes: {

	    isScrolling: PropTypes.bool,

	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,

	    /**
	     * Z-index on which the row will be displayed. Used e.g. for keeping
	     * header and footer in front of other rows.
	     */
	    zIndex: PropTypes.number,

	    /**
	     * The vertical position where the row should render itself
	     */
	    offsetTop: PropTypes.number.isRequired,

	    /**
	     * Width of the row.
	     */
	    width: PropTypes.number.isRequired
	  },

	  componentWillMount: function componentWillMount() {
	    this._initialRender = true;
	  },
	  componentDidMount: function componentDidMount() {
	    this._initialRender = false;
	  },
	  render: function render() /*object*/{
	    var style = {
	      width: this.props.width,
	      height: this.props.height,
	      zIndex: this.props.zIndex ? this.props.zIndex : 0
	    };
	    (0, _FixedDataTableTranslateDOMPosition2.default)(style, 0, this.props.offsetTop, this._initialRender);

	    return _React2.default.createElement(
	      'div',
	      {
	        style: style,
	        className: (0, _cx2.default)('fixedDataTableRowLayout/rowWrapper') },
	      _React2.default.createElement(FixedDataTableRowImpl, _extends({}, this.props, {
	        offsetTop: undefined,
	        zIndex: undefined
	      }))
	    );
	  }
	});

	module.exports = FixedDataTableRow;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCellGroup
	 * @typechecks
	 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _FixedDataTableHelper = __webpack_require__(63);

	var _FixedDataTableHelper2 = _interopRequireDefault(_FixedDataTableHelper);

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _FixedDataTableCell = __webpack_require__(67);

	var _FixedDataTableCell2 = _interopRequireDefault(_FixedDataTableCell);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _FixedDataTableTranslateDOMPosition = __webpack_require__(50);

	var _FixedDataTableTranslateDOMPosition2 = _interopRequireDefault(_FixedDataTableTranslateDOMPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var PropTypes = _React2.default.PropTypes;


	var DIR_SIGN = _FixedDataTableHelper2.default.DIR_SIGN;

	var FixedDataTableCellGroupImpl = _React2.default.createClass({
	  displayName: 'FixedDataTableCellGroupImpl',


	  /**
	   * PropTypes are disabled in this component, because having them on slows
	   * down the FixedDataTable hugely in DEV mode. You can enable them back for
	   * development, but please don't commit this component with enabled propTypes.
	   */
	  propTypes_DISABLED_FOR_PERFORMANCE: {

	    /**
	     * Array of <FixedDataTableColumn />.
	     */
	    columns: PropTypes.array.isRequired,

	    isScrolling: PropTypes.bool,

	    left: PropTypes.number,

	    onColumnResize: PropTypes.func,

	    onColumnReorder: PropTypes.func,
	    onColumnReorderMove: PropTypes.func,
	    onColumnReorderEnd: PropTypes.func,

	    maxVisibleColumns: PropTypes.number.isRequired,

	    rowHeight: PropTypes.number.isRequired,

	    rowIndex: PropTypes.number.isRequired,

	    width: PropTypes.number.isRequired,

	    zIndex: PropTypes.number.isRequired
	  },

	  componentWillMount: function componentWillMount() {
	    this._staticCellArray = [];
	    this._columnsToRender = [];
	    this._initialRender = true;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._staticCellArray.length = 0;
	    this._columnsToRender.length = 0;
	  },
	  componentDidMount: function componentDidMount() {
	    this._initialRender = false;
	  },
	  render: function render() /*object*/{
	    var _this = this;

	    var props = this.props;
	    var columns = props.columns;

	    this._staticCellArray.length = props.maxVisibleColumns;
	    this._columnsToRender.length = props.maxVisibleColumns;

	    var contentWidth = this._getColumnsWidth(columns);

	    var isColumnReordering = props.isColumnReordering && columns.reduce(function (acc, column) {
	      return acc || props.columnReorderingData.columnKey === column.props.columnKey;
	    }, false);

	    var currentPosition = 0;
	    var count = 0;

	    var newColumnsToRender = new Array(props.maxVisibleColumns);
	    var positions = new Array(props.maxVisibleColumns);

	    for (var i = 0; i < columns.length; i++) {
	      var columnProps = columns[i].props;
	      var recycable = columnProps.allowCellsRecycling && !isColumnReordering;
	      if (!recycable || currentPosition - props.left <= props.width && currentPosition - props.left + columnProps.width >= 0) {
	        positions[i] = currentPosition;
	        newColumnsToRender[count++] = i;
	      }

	      currentPosition += columnProps.width;
	    }

	    //TODO move this recycle logic into main state
	    var newColumnsSet = new Set(newColumnsToRender);
	    var oldColumnsSet = new Set(this._columnsToRender);
	    var indexes = [];

	    for (var i = props.maxVisibleColumns; i >= 0; i--) {
	      var column = this._columnsToRender[i];
	      if (!column || !newColumnsSet.has(column)) {
	        indexes.push(i);
	      }
	    }

	    newColumnsToRender.forEach(function (column) {
	      if (!oldColumnsSet.has(column)) {
	        _this._columnsToRender[indexes.pop()] = column;
	      }
	    });

	    var cellCount = 0;
	    this._columnsToRender.forEach(function (i) {
	      var columnProps = columns[i].props;
	      var currentPosition = positions[i];
	      var key = columnProps.columnKey || 'cell_' + i;
	      _this._staticCellArray[cellCount++] = _this._renderCell(props.rowIndex, props.rowHeight, columnProps, currentPosition, key, contentWidth, isColumnReordering);
	    });

	    while (cellCount < props.maxVisibleColumns) {
	      if (!this._staticCellArray[cellCount]) {
	        break;
	      }

	      this._staticCellArray[cellCount] = _React2.default.cloneElement(this._staticCellArray[cellCount], {
	        visible: false
	      });

	      cellCount++;
	    }

	    var style = {
	      height: props.height,
	      position: 'absolute',
	      width: contentWidth,
	      zIndex: props.zIndex
	    };
	    (0, _FixedDataTableTranslateDOMPosition2.default)(style, -1 * DIR_SIGN * props.left, 0, this._initialRender);

	    return _React2.default.createElement(
	      'div',
	      {
	        className: (0, _cx2.default)('fixedDataTableCellGroupLayout/cellGroup'),
	        style: style },
	      this._staticCellArray
	    );
	  },
	  _renderCell: function _renderCell(
	  /*number*/rowIndex,
	  /*number*/height,
	  /*object*/columnProps,
	  /*number*/left,
	  /*string*/key,
	  /*number*/columnGroupWidth,
	  /*boolean*/isColumnReordering) /*object*/{

	    var cellIsResizable = columnProps.isResizable && this.props.onColumnResize;
	    var onColumnResize = cellIsResizable ? this.props.onColumnResize : null;

	    var cellIsReorderable = columnProps.isReorderable && this.props.onColumnReorder && rowIndex === -1 && columnGroupWidth !== columnProps.width;
	    var onColumnReorder = cellIsReorderable ? this.props.onColumnReorder : null;

	    var className = columnProps.cellClassName;
	    var pureRendering = columnProps.pureRendering || false;

	    return _React2.default.createElement(_FixedDataTableCell2.default, {
	      isScrolling: this.props.isScrolling,
	      align: columnProps.align,
	      className: className,
	      height: height,
	      key: key,
	      maxWidth: columnProps.maxWidth,
	      minWidth: columnProps.minWidth,
	      onColumnResize: onColumnResize,
	      onColumnReorder: onColumnReorder,
	      onColumnReorderMove: this.props.onColumnReorderMove,
	      onColumnReorderEnd: this.props.onColumnReorderEnd,
	      isColumnReordering: isColumnReordering,
	      columnReorderingData: this.props.columnReorderingData,
	      rowIndex: rowIndex,
	      columnKey: columnProps.columnKey,
	      width: columnProps.width,
	      left: left,
	      cell: columnProps.cell,
	      columnGroupWidth: columnGroupWidth,
	      pureRendering: pureRendering,
	      visible: true
	    });
	  },
	  _getColumnsWidth: function _getColumnsWidth( /*array*/columns) /*number*/{
	    var width = 0;
	    for (var i = 0; i < columns.length; ++i) {
	      width += columns[i].props.width;
	    }
	    return width;
	  }
	});

	var FixedDataTableCellGroup = _React2.default.createClass({
	  displayName: 'FixedDataTableCellGroup',


	  /**
	   * PropTypes are disabled in this component, because having them on slows
	   * down the FixedDataTable hugely in DEV mode. You can enable them back for
	   * development, but please don't commit this component with enabled propTypes.
	   */
	  propTypes_DISABLED_FOR_PERFORMANCE: {
	    isScrolling: PropTypes.bool,
	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,

	    offsetLeft: PropTypes.number,

	    left: PropTypes.number,
	    /**
	     * Z-index on which the row will be displayed. Used e.g. for keeping
	     * header and footer in front of other rows.
	     */
	    zIndex: PropTypes.number.isRequired
	  },

	  shouldComponentUpdate: function shouldComponentUpdate( /*object*/nextProps) /*boolean*/{
	    return !nextProps.isScrolling || this.props.rowIndex !== nextProps.rowIndex || this.props.left !== nextProps.left;
	  },
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      offsetLeft: 0
	    };
	  },
	  render: function render() /*object*/{
	    var _props = this.props,
	        offsetLeft = _props.offsetLeft,
	        props = _objectWithoutProperties(_props, ['offsetLeft']);

	    var style = {
	      height: props.height,
	      width: props.width
	    };

	    if (DIR_SIGN === 1) {
	      style.left = offsetLeft;
	    } else {
	      style.right = offsetLeft;
	    }

	    var onColumnResize = props.onColumnResize ? this._onColumnResize : null;

	    return _React2.default.createElement(
	      'div',
	      {
	        style: style,
	        className: (0, _cx2.default)('fixedDataTableCellGroupLayout/cellGroupWrapper') },
	      _React2.default.createElement(FixedDataTableCellGroupImpl, _extends({}, props, {
	        onColumnResize: onColumnResize
	      }))
	    );
	  },
	  _onColumnResize: function _onColumnResize(
	  /*number*/left,
	  /*number*/width,
	  /*?number*/minWidth,
	  /*?number*/maxWidth,
	  /*string|number*/columnKey,
	  /*object*/event) {
	    this.props.onColumnResize && this.props.onColumnResize(this.props.offsetLeft, left - this.props.left + width, width, minWidth, maxWidth, columnKey, event);
	  }
	});

	module.exports = FixedDataTableCellGroup;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableHelper
	 * @typechecks
	 */

	'use strict';

	var _Locale = __webpack_require__(64);

	var _Locale2 = _interopRequireDefault(_Locale);

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _FixedDataTableColumnGroup = __webpack_require__(65);

	var _FixedDataTableColumnGroup2 = _interopRequireDefault(_FixedDataTableColumnGroup);

	var _FixedDataTableColumn = __webpack_require__(66);

	var _FixedDataTableColumn2 = _interopRequireDefault(_FixedDataTableColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DIR_SIGN = _Locale2.default.isRTL() ? -1 : +1;
	// A cell up to 5px outside of the visible area will still be considered visible
	var CELL_VISIBILITY_TOLERANCE = 5; // used for flyouts

	function renderToString(value) /*string*/{
	  if (value === null || value === undefined) {
	    return '';
	  } else {
	    return String(value);
	  }
	}

	/**
	 * Helper method to execute a callback against all columns given the children
	 * of a table.
	 * @param {?object|array} children
	 *    Children of a table.
	 * @param {function} callback
	 *    Function to excecute for each column. It is passed the column.
	 */
	function forEachColumn(children, callback) {
	  _React2.default.Children.forEach(children, function (child) {
	    if (child.type === _FixedDataTableColumnGroup2.default) {
	      forEachColumn(child.props.children, callback);
	    } else if (child.type === _FixedDataTableColumn2.default) {
	      callback(child);
	    }
	  });
	}

	/**
	 * Helper method to map columns to new columns. This takes into account column
	 * groups and will generate a new column group if its columns change.
	 * @param {?object|array} children
	 *    Children of a table.
	 * @param {function} callback
	 *    Function to excecute for each column. It is passed the column and should
	 *    return a result column.
	 */
	function mapColumns(children, callback) {
	  var newChildren = [];
	  _React2.default.Children.forEach(children, function (originalChild) {
	    var newChild = originalChild;

	    // The child is either a column group or a column. If it is a column group
	    // we need to iterate over its columns and then potentially generate a
	    // new column group
	    if (originalChild.type === _FixedDataTableColumnGroup2.default) {
	      var haveColumnsChanged = false;
	      var newColumns = [];

	      forEachColumn(originalChild.props.children, function (originalcolumn) {
	        var newColumn = callback(originalcolumn);
	        if (newColumn !== originalcolumn) {
	          haveColumnsChanged = true;
	        }
	        newColumns.push(newColumn);
	      });

	      // If the column groups columns have changed clone the group and supply
	      // new children
	      if (haveColumnsChanged) {
	        newChild = _React2.default.cloneElement(originalChild, {
	          children: newColumns
	        });
	      }
	    } else if (originalChild.type === _FixedDataTableColumn2.default) {
	      newChild = callback(originalChild);
	    }

	    newChildren.push(newChild);
	  });

	  return newChildren;
	}

	var FixedDataTableHelper = {
	  DIR_SIGN: DIR_SIGN,
	  CELL_VISIBILITY_TOLERANCE: CELL_VISIBILITY_TOLERANCE,
	  renderToString: renderToString,
	  forEachColumn: forEachColumn,
	  mapColumns: mapColumns
	};

	module.exports = FixedDataTableHelper;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Locale
	 */

	"use strict";

	// Hard code this for now.

	var Locale = {
	  isRTL: function isRTL() {
	    return false;
	  },
	  getDirection: function getDirection() {
	    return 'LTR';
	  }
	};

	module.exports = Locale;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _React2.default.PropTypes;

	/**
	 * Component that defines the attributes of a table column group.
	 */
	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumnGroup
	 * @typechecks
	 */

	var FixedDataTableColumnGroup = _React2.default.createClass({
	  displayName: 'FixedDataTableColumnGroup',

	  statics: {
	    __TableColumnGroup__: true
	  },

	  propTypes: {
	    /**
	     * The horizontal alignment of the table cell content.
	     */
	    align: PropTypes.oneOf(['left', 'center', 'right']),

	    /**
	     * Controls if the column group is fixed when scrolling in the X axis.
	     */
	    fixed: PropTypes.bool,

	    /**
	     * This is the header cell for this column group.
	     * This can either be a string or a React element. Passing in a string
	     * will render a default footer cell with that string. By default, the React
	     * element passed in can expect to receive the following props:
	     *
	     * ```
	     * props: {
	     *   height: number // (supplied from the groupHeaderHeight)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * You can also pass in a function that returns a react elemnt, with the
	     * props object above passed in as the first parameter.
	     */
	    header: PropTypes.oneOfType([PropTypes.node, PropTypes.func])

	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      fixed: false
	    };
	  },
	  render: function render() {
	    if (true) {
	      throw new Error('Component <FixedDataTableColumnGroup /> should never render');
	    }
	    return null;
	  }
	});

	module.exports = FixedDataTableColumnGroup;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _React2.default.PropTypes;

	/**
	 * Component that defines the attributes of table column.
	 */
	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumn
	 * @typechecks
	 */

	var FixedDataTableColumn = _React2.default.createClass({
	  displayName: 'FixedDataTableColumn',

	  statics: {
	    __TableColumn__: true
	  },

	  propTypes: {
	    /**
	     * The horizontal alignment of the table cell content.
	     */
	    align: PropTypes.oneOf(['left', 'center', 'right']),

	    /**
	     * Controls if the column is fixed when scrolling in the X axis.
	     */
	    fixed: PropTypes.bool,

	    /**
	     * The header cell for this column.
	     * This can either be a string a React element, or a function that generates
	     * a React Element. Passing in a string will render a default header cell
	     * with that string. By default, the React element passed in can expect to
	     * receive the following props:
	     *
	     * ```
	     * props: {
	     *   columnKey: string // (of the column, if given)
	     *   height: number // (supplied from the Table or rowHeightGetter)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * If you pass in a function, you will receive the same props object as the
	     * first argument.
	     */
	    header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

	    /**
	     * This is the body cell that will be cloned for this column.
	     * This can either be a string a React element, or a function that generates
	     * a React Element. Passing in a string will render a default header cell
	     * with that string. By default, the React element passed in can expect to
	     * receive the following props:
	     *
	     * ```
	     * props: {
	     *   rowIndex; number // (the row index of the cell)
	     *   columnKey: string // (of the column, if given)
	     *   height: number // (supplied from the Table or rowHeightGetter)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * If you pass in a function, you will receive the same props object as the
	     * first argument.
	     */
	    cell: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

	    /**
	     * This is the footer cell for this column.
	     * This can either be a string a React element, or a function that generates
	     * a React Element. Passing in a string will render a default header cell
	     * with that string. By default, the React element passed in can expect to
	     * receive the following props:
	     *
	     * ```
	     * props: {
	     *   columnKey: string // (of the column, if given)
	     *   height: number // (supplied from the Table or rowHeightGetter)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * If you pass in a function, you will receive the same props object as the
	     * first argument.
	     */
	    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

	    /**
	     * This is used to uniquely identify the column, and is not required unless
	     * you a resizing columns. This will be the key given in the
	     * `onColumnResizeEndCallback` on the Table.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

	    /**
	     * The pixel width of the column.
	     */
	    width: PropTypes.number.isRequired,

	    /**
	     * If this is a resizable column this is its minimum pixel width.
	     */
	    minWidth: PropTypes.number,

	    /**
	     * If this is a resizable column this is its maximum pixel width.
	     */
	    maxWidth: PropTypes.number,

	    /**
	     * The grow factor relative to other columns. Same as the flex-grow API
	     * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
	     * extra width and distribute it proportionally according to all columns'
	     * flexGrow values. Defaults to zero (no-flexing).
	     */
	    flexGrow: PropTypes.number,

	    /**
	     * Whether the column can be resized with the
	     * FixedDataTableColumnResizeHandle. Please note that if a column
	     * has a flex grow, once you resize the column this will be set to 0.
	     *
	     * This property only provides the UI for the column resizing. If this
	     * is set to true, you will need to set the onColumnResizeEndCallback table
	     * property and render your columns appropriately.
	     */
	    isResizable: PropTypes.bool,

	    /**
	     * Whether the column can be dragged to reorder.
	     */
	    isReorderable: PropTypes.bool,

	    /**
	     * Whether cells in this column can be removed from document when outside
	     * of viewport as a result of horizontal scrolling.
	     * Setting this property to true allows the table to not render cells in
	     * particular column that are outside of viewport for visible rows. This
	     * allows to create table with many columns and not have vertical scrolling
	     * performance drop.
	     * Setting the property to false will keep previous behaviour and keep
	     * cell rendered if the row it belongs to is visible.
	     */
	    allowCellsRecycling: PropTypes.bool,

	    /**
	     * Flag to enable performance check when rendering. Stops the component from
	     * rendering if none of it's passed in props have changed
	     */
	    pureRendering: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      allowCellsRecycling: false,
	      fixed: false
	    };
	  },
	  render: function render() {
	    if (true) {
	      throw new Error('Component <FixedDataTableColumn /> should never render');
	    }
	    return null;
	  }
	});

	module.exports = FixedDataTableColumn;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _FixedDataTableCellDefault = __webpack_require__(68);

	var _FixedDataTableCellDefault2 = _interopRequireDefault(_FixedDataTableCellDefault);

	var _FixedDataTableColumnReorderHandle = __webpack_require__(70);

	var _FixedDataTableColumnReorderHandle2 = _interopRequireDefault(_FixedDataTableColumnReorderHandle);

	var _FixedDataTableHelper = __webpack_require__(63);

	var _FixedDataTableHelper2 = _interopRequireDefault(_FixedDataTableHelper);

	var _FixedDataTableTranslateDOMPosition = __webpack_require__(50);

	var _FixedDataTableTranslateDOMPosition2 = _interopRequireDefault(_FixedDataTableTranslateDOMPosition);

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _joinClasses = __webpack_require__(69);

	var _joinClasses2 = _interopRequireDefault(_joinClasses);

	var _shallowEqual = __webpack_require__(71);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * Copyright Schrodinger, LLC
	                                                                                                                                                                                                                              * All rights reserved.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * This source code is licensed under the BSD-style license found in the
	                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree. An additional grant
	                                                                                                                                                                                                                              * of patent rights can be found in the PATENTS file in the same directory.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * @providesModule FixedDataTableCell
	                                                                                                                                                                                                                              * @typechecks
	                                                                                                                                                                                                                              */

	var DIR_SIGN = _FixedDataTableHelper2.default.DIR_SIGN;

	var PropTypes = _React2.default.PropTypes;


	var DEFAULT_PROPS = {
	  align: 'left',
	  highlighted: false
	};

	var FixedDataTableCell = _React2.default.createClass({
	  displayName: 'FixedDataTableCell',


	  /**
	   * PropTypes are disabled in this component, because having them on slows
	   * down the FixedDataTable hugely in DEV mode. You can enable them back for
	   * development, but please don't commit this component with enabled propTypes.
	   */
	  propTypes_DISABLED_FOR_PERFORMANCE: {
	    isScrolling: PropTypes.bool,
	    align: PropTypes.oneOf(['left', 'center', 'right']),
	    className: PropTypes.string,
	    highlighted: PropTypes.bool,
	    width: PropTypes.number.isRequired,
	    minWidth: PropTypes.number,
	    maxWidth: PropTypes.number,
	    height: PropTypes.number.isRequired,

	    cell: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),

	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

	    /**
	     * The row index that will be passed to `cellRenderer` to render.
	     */
	    rowIndex: PropTypes.number.isRequired,

	    /**
	     * Callback for when resizer knob (in FixedDataTableCell) is clicked
	     * to initialize resizing. Please note this is only on the cells
	     * in the header.
	     * @param number combinedWidth
	     * @param number left
	     * @param number width
	     * @param number minWidth
	     * @param number maxWidth
	     * @param number|string columnKey
	     * @param object event
	     */
	    onColumnResize: PropTypes.func,
	    onColumnReorder: PropTypes.func,

	    /**
	     * The left offset in pixels of the cell.
	     */
	    left: PropTypes.number,

	    /**
	     * Indicates if column should be rendered
	     */
	    visible: PropTypes.bool.isRequired,

	    /**
	     * Flag for enhanced performance check
	     */
	    pureRendering: PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isReorderingThisColumn: false,
	      displacement: 0,
	      reorderingDisplacement: 0
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    if (nextProps.isScrolling && this.props.rowIndex === nextProps.rowIndex && this.props.columnKey === nextProps.columnKey) {
	      return false;
	    }

	    if (!!(this.props.visible ^ nextProps.visible)) {
	      return true;
	    }

	    //Performance check not enabled
	    if (!nextProps.pureRendering) {
	      return true;
	    }

	    var _props = this.props,
	        oldCell = _props.cell,
	        oldIsScrolling = _props.isScrolling,
	        oldProps = _objectWithoutProperties(_props, ['cell', 'isScrolling']);

	    var newCell = nextProps.cell,
	        newIsScrolling = nextProps.isScrolling,
	        newProps = _objectWithoutProperties(nextProps, ['cell', 'isScrolling']);

	    if (!(0, _shallowEqual2.default)(oldProps, newProps)) {
	      return true;
	    }

	    if (!oldCell || !newCell || oldCell.type !== newCell.type) {
	      return true;
	    }

	    if (!(0, _shallowEqual2.default)(oldCell.props, newCell.props)) {
	      return true;
	    }

	    return false;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    var left = props.left + this.state.displacement;

	    var newState = {
	      isReorderingThisColumn: false
	    };

	    if (props.isColumnReordering) {
	      var originalLeft = props.columnReorderingData.originalLeft;
	      var reorderCellLeft = originalLeft + props.columnReorderingData.dragDistance;
	      var farthestPossiblePoint = props.columnGroupWidth - props.columnReorderingData.columnWidth;

	      // ensure the cell isn't being dragged out of the column group
	      reorderCellLeft = Math.max(reorderCellLeft, 0);
	      reorderCellLeft = Math.min(reorderCellLeft, farthestPossiblePoint);

	      if (props.columnKey === props.columnReorderingData.columnKey) {
	        newState.displacement = reorderCellLeft - props.left;
	        newState.isReorderingThisColumn = true;
	      } else {
	        var reorderCellRight = reorderCellLeft + props.columnReorderingData.columnWidth;
	        var reorderCellCenter = reorderCellLeft + props.columnReorderingData.columnWidth / 2;
	        var centerOfThisColumn = left + props.width / 2;

	        var cellIsBeforeOneBeingDragged = reorderCellCenter > centerOfThisColumn;
	        var cellWasOriginallyBeforeOneBeingDragged = originalLeft > props.left;
	        var changedPosition = false;

	        var dragPoint, thisCellPoint;
	        if (cellIsBeforeOneBeingDragged) {
	          if (reorderCellLeft < centerOfThisColumn) {
	            changedPosition = true;
	            if (cellWasOriginallyBeforeOneBeingDragged) {
	              newState.displacement = props.columnReorderingData.columnWidth;
	            } else {
	              newState.displacement = 0;
	            }
	          }
	        } else {
	          if (reorderCellRight > centerOfThisColumn) {
	            changedPosition = true;
	            if (cellWasOriginallyBeforeOneBeingDragged) {
	              newState.displacement = 0;
	            } else {
	              newState.displacement = props.columnReorderingData.columnWidth * -1;
	            }
	          }
	        }

	        if (changedPosition) {
	          if (cellIsBeforeOneBeingDragged) {
	            if (!props.columnReorderingData.columnAfter) {
	              props.columnReorderingData.columnAfter = props.columnKey;
	            }
	          } else {
	            props.columnReorderingData.columnBefore = props.columnKey;
	          }
	        } else if (cellIsBeforeOneBeingDragged) {
	          props.columnReorderingData.columnBefore = props.columnKey;
	        } else if (!props.columnReorderingData.columnAfter) {
	          props.columnReorderingData.columnAfter = props.columnKey;
	        }
	      }
	    } else {
	      newState.displacement = 0;
	    }

	    this.setState(newState);
	  },
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return DEFAULT_PROPS;
	  },
	  render: function render() /*object*/{
	    if (!this.props.visible) {
	      return null;
	    }

	    var _props2 = this.props,
	        height = _props2.height,
	        width = _props2.width,
	        columnKey = _props2.columnKey,
	        props = _objectWithoutProperties(_props2, ['height', 'width', 'columnKey']);

	    var style = {
	      height: height,
	      width: width
	    };

	    if (this.state.isReorderingThisColumn) {
	      style.transform = 'translateX(' + this.state.displacement + 'px) translateZ(0)';
	      style.zIndex = 1;
	    }

	    (0, _FixedDataTableTranslateDOMPosition2.default)(style, DIR_SIGN * props.left, 0, false);

	    var className = (0, _joinClasses2.default)((0, _cx2.default)({
	      'fixedDataTableCellLayout/main': true,
	      'fixedDataTableCellLayout/lastChild': props.lastChild,
	      'fixedDataTableCellLayout/alignRight': props.align === 'right',
	      'fixedDataTableCellLayout/alignCenter': props.align === 'center',
	      'public/fixedDataTableCell/alignRight': props.align === 'right',
	      'public/fixedDataTableCell/highlighted': props.highlighted,
	      'public/fixedDataTableCell/main': true,
	      'public/fixedDataTableCell/hasReorderHandle': !!props.onColumnReorder,
	      'public/fixedDataTableCell/reordering': this.state.isReorderingThisColumn
	    }), props.className);

	    var columnResizerComponent;
	    if (props.onColumnResize) {
	      var columnResizerStyle = {
	        height: height
	      };
	      columnResizerComponent = _React2.default.createElement(
	        'div',
	        {
	          className: (0, _cx2.default)('fixedDataTableCellLayout/columnResizerContainer'),
	          style: columnResizerStyle,
	          onMouseDown: this._onColumnResizerMouseDown },
	        _React2.default.createElement('div', {
	          className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/columnResizerKnob'), (0, _cx2.default)('public/fixedDataTableCell/columnResizerKnob')),
	          style: columnResizerStyle
	        })
	      );
	    }

	    var columnReorderComponent;
	    if (props.onColumnReorder) {
	      //header row
	      columnReorderComponent = _React2.default.createElement(_FixedDataTableColumnReorderHandle2.default, _extends({
	        columnKey: this.columnKey,
	        onMouseDown: this._onColumnReorderMouseDown,
	        height: height
	      }, this.props));
	    }

	    var cellProps = {
	      columnKey: columnKey,
	      height: height,
	      width: width
	    };

	    if (props.rowIndex >= 0) {
	      cellProps.rowIndex = props.rowIndex;
	    }

	    var content;
	    if (_React2.default.isValidElement(props.cell)) {
	      content = _React2.default.cloneElement(props.cell, cellProps);
	    } else if (typeof props.cell === 'function') {
	      content = props.cell(cellProps);
	    } else {
	      content = _React2.default.createElement(
	        _FixedDataTableCellDefault2.default,
	        cellProps,
	        props.cell
	      );
	    }

	    return _React2.default.createElement(
	      'div',
	      { className: className, style: style },
	      columnResizerComponent,
	      columnReorderComponent,
	      content
	    );
	  },
	  _onColumnResizerMouseDown: function _onColumnResizerMouseDown( /*object*/event) {
	    this.props.onColumnResize(this.props.left, this.props.width, this.props.minWidth, this.props.maxWidth, this.props.columnKey, event);
	  },
	  _onColumnReorderMouseDown: function _onColumnReorderMouseDown( /*object*/event) {
	    this.props.onColumnReorder(this.props.columnKey, this.props.width, this.props.left, event);
	  }
	});

	module.exports = FixedDataTableCell;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	var _joinClasses = __webpack_require__(69);

	var _joinClasses2 = _interopRequireDefault(_joinClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * Copyright Schrodinger, LLC
	                                                                                                                                                                                                                              * All rights reserved.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * This source code is licensed under the BSD-style license found in the
	                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree. An additional grant
	                                                                                                                                                                                                                              * of patent rights can be found in the PATENTS file in the same directory.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * @providesModule FixedDataTableCellDefault
	                                                                                                                                                                                                                              * @typechecks
	                                                                                                                                                                                                                              */

	var PropTypes = _React2.default.PropTypes;

	/**
	 * Component that handles default cell layout and styling.
	 *
	 * All props unless specified below will be set onto the top level `div`
	 * rendered by the cell.
	 *
	 * Example usage via from a `Column`:
	 * ```
	 * const MyColumn = (
	 *   <Column
	 *     cell={({rowIndex, width, height}) => (
	 *       <Cell
	 *         width={width}
	 *         height={height}
	 *         className="my-class">
	 *         Cell number: <span>{rowIndex}</span>
	*        </Cell>
	 *     )}
	 *     width={100}
	 *   />
	 * );
	 * ```
	 */

	var FixedDataTableCellDefault = _React2.default.createClass({
	  displayName: 'FixedDataTableCellDefault',

	  propTypes: {

	    /**
	     * Outer height of the cell.
	     */
	    height: PropTypes.number,

	    /**
	     * Outer width of the cell.
	     */
	    width: PropTypes.number,

	    /**
	     * Optional prop that if specified on the `Column` will be passed to the
	     * cell. It can be used to uniquely identify which column is the cell is in.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

	    /**
	     * Optional prop that represents the rows index in the table.
	     * For the 'cell' prop of a Column, this parameter will exist for any
	     * cell in a row with a positive index.
	     *
	     * Below that entry point the user is welcome to consume or
	     * pass the prop through at their discretion.
	     */
	    rowIndex: PropTypes.number
	  },

	  render: function render() {
	    //Remove some props like columnKey and rowIndex so we don't pass it into the div
	    var _props = this.props,
	        height = _props.height,
	        width = _props.width,
	        style = _props.style,
	        className = _props.className,
	        children = _props.children,
	        columnKey = _props.columnKey,
	        rowIndex = _props.rowIndex,
	        props = _objectWithoutProperties(_props, ['height', 'width', 'style', 'className', 'children', 'columnKey', 'rowIndex']);

	    var innerStyle = _extends({
	      height: height,
	      width: width
	    }, style);

	    return _React2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/wrap1'), (0, _cx2.default)('public/fixedDataTableCell/wrap1'), className),
	        style: innerStyle }),
	      _React2.default.createElement(
	        'div',
	        {
	          className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/wrap2'), (0, _cx2.default)('public/fixedDataTableCell/wrap2')) },
	        _React2.default.createElement(
	          'div',
	          {
	            className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/wrap3'), (0, _cx2.default)('public/fixedDataTableCell/wrap3')) },
	          _React2.default.createElement(
	            'div',
	            { className: (0, _cx2.default)('public/fixedDataTableCell/cellContent') },
	            children
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = FixedDataTableCellDefault;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */

	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMMouseMoveTracker = __webpack_require__(42);

	var _DOMMouseMoveTracker2 = _interopRequireDefault(_DOMMouseMoveTracker);

	var _Locale = __webpack_require__(64);

	var _Locale2 = _interopRequireDefault(_Locale);

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _ReactComponentWithPureRenderMixin = __webpack_require__(31);

	var _ReactComponentWithPureRenderMixin2 = _interopRequireDefault(_ReactComponentWithPureRenderMixin);

	var _clamp = __webpack_require__(60);

	var _clamp2 = _interopRequireDefault(_clamp);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is to be used with the FixedDataTable. It is a header icon
	 * that allows you to reorder the corresponding column.
	 *
	 * @providesModule FixedDataTableColumnReorderHandle
	 * @typechecks
	 */

	var PropTypes = _React2.default.PropTypes;


	var FixedDataTableColumnReorderHandle = _React2.default.createClass({
	  displayName: 'FixedDataTableColumnReorderHandle',

	  mixins: [_ReactComponentWithPureRenderMixin2.default],

	  propTypes: {

	    /**
	     * When resizing is complete this is called.
	     */
	    onColumnReorderEnd: PropTypes.func,

	    /**
	     * Column key for the column being reordered.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	  },

	  getInitialState: function getInitialState() /*object*/{
	    return {
	      dragDistance: 0
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/newProps) {},
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._mouseMoveTracker) {
	      cancelAnimationFrame(this.frameId);
	      this.frameId = null;
	      this._mouseMoveTracker.releaseMouseMoves();
	      this._mouseMoveTracker = null;
	    }
	  },
	  render: function render() /*object*/{
	    var style = {
	      height: this.props.height
	    };
	    return _React2.default.createElement('div', {
	      className: (0, _cx2.default)({
	        'fixedDataTableCellLayout/columnReorderContainer': true,
	        'fixedDataTableCellLayout/columnReorderContainer/active': false
	      }),
	      onMouseDown: this.onMouseDown,
	      style: style });
	  },
	  onMouseDown: function onMouseDown(event) {
	    var targetRect = event.target.getBoundingClientRect();

	    var mouseLocationInElement = event.clientX - targetRect.offsetLeft;
	    var mouseLocationInRelationToColumnGroup = mouseLocationInElement + event.target.parentElement.offsetLeft;

	    this._mouseMoveTracker = new _DOMMouseMoveTracker2.default(this._onMove, this._onColumnReorderEnd, document.body);
	    this._mouseMoveTracker.captureMouseMoves(event);
	    this.setState({
	      dragDistance: 0
	    });
	    this.props.onMouseDown({
	      columnKey: this.props.columnKey,
	      mouseLocation: {
	        dragDistance: 0,
	        inElement: mouseLocationInElement,
	        inColumnGroup: mouseLocationInRelationToColumnGroup
	      }
	    });

	    this._distance = 0;
	    this._animating = true;
	    this.frameId = requestAnimationFrame(this._updateState);
	  },
	  _onMove: function _onMove( /*number*/deltaX) {
	    this._distance = this.state.dragDistance + deltaX;
	  },
	  _onColumnReorderEnd: function _onColumnReorderEnd( /*boolean*/cancelReorder) {
	    this._animating = false;
	    cancelAnimationFrame(this.frameId);
	    this.frameId = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.props.columnReorderingData.cancelReorder = cancelReorder;
	    this.props.onColumnReorderEnd();
	  },
	  _updateState: function _updateState() {
	    if (this._animating) {
	      this.frameId = requestAnimationFrame(this._updateState);
	    }
	    this.setState({
	      dragDistance: this._distance
	    });
	    this.props.onColumnReorderMove(this._distance);
	  }
	});

	module.exports = FixedDataTableColumnReorderHandle;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMMouseMoveTracker = __webpack_require__(42);

	var _DOMMouseMoveTracker2 = _interopRequireDefault(_DOMMouseMoveTracker);

	var _Locale = __webpack_require__(64);

	var _Locale2 = _interopRequireDefault(_Locale);

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	var _ReactComponentWithPureRenderMixin = __webpack_require__(31);

	var _ReactComponentWithPureRenderMixin2 = _interopRequireDefault(_ReactComponentWithPureRenderMixin);

	var _clamp = __webpack_require__(60);

	var _clamp2 = _interopRequireDefault(_clamp);

	var _cx = __webpack_require__(49);

	var _cx2 = _interopRequireDefault(_cx);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is to be used with the FixedDataTable. It is a read line
	 * that when you click on a column that is resizable appears and allows
	 * you to resize the corresponding column.
	 *
	 * @providesModule FixedDataTableColumnResizeHandle
	 * @typechecks
	 */

	var PropTypes = _React2.default.PropTypes;


	var FixedDataTableColumnResizeHandle = _React2.default.createClass({
	  displayName: 'FixedDataTableColumnResizeHandle',

	  mixins: [_ReactComponentWithPureRenderMixin2.default],

	  propTypes: {
	    visible: PropTypes.bool.isRequired,

	    /**
	     * This is the height of the line
	     */
	    height: PropTypes.number.isRequired,

	    /**
	     * Offset from left border of the table, please note
	     * that the line is a border on diff. So this is really the
	     * offset of the column itself.
	     */
	    leftOffset: PropTypes.number.isRequired,

	    /**
	     * Height of the clickable region of the line.
	     * This is assumed to be at the top of the line.
	     */
	    knobHeight: PropTypes.number.isRequired,

	    /**
	     * The line is a border on a diff, so this is essentially
	     * the width of column.
	     */
	    initialWidth: PropTypes.number,

	    /**
	     * The minimum width this dragger will collapse to
	     */
	    minWidth: PropTypes.number,

	    /**
	     * The maximum width this dragger will collapse to
	     */
	    maxWidth: PropTypes.number,

	    /**
	     * Initial click event on the header cell.
	     */
	    initialEvent: PropTypes.object,

	    /**
	     * When resizing is complete this is called.
	     */
	    onColumnResizeEnd: PropTypes.func,

	    /**
	     * Column key for the column being resized.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	  },

	  getInitialState: function getInitialState() /*object*/{
	    return {
	      width: 0,
	      cursorDelta: 0
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/newProps) {
	    if (newProps.initialEvent && !this._mouseMoveTracker.isDragging()) {
	      this._mouseMoveTracker.captureMouseMoves(newProps.initialEvent);
	      this.setState({
	        width: newProps.initialWidth,
	        cursorDelta: newProps.initialWidth
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    this._mouseMoveTracker = new _DOMMouseMoveTracker2.default(this._onMove, this._onColumnResizeEnd, document.body);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._mouseMoveTracker.releaseMouseMoves();
	    this._mouseMoveTracker = null;
	  },
	  render: function render() /*object*/{
	    var style = {
	      width: this.state.width,
	      height: this.props.height
	    };
	    if (_Locale2.default.isRTL()) {
	      style.right = this.props.leftOffset;
	    } else {
	      style.left = this.props.leftOffset;
	    }
	    return _React2.default.createElement(
	      'div',
	      {
	        className: (0, _cx2.default)({
	          'fixedDataTableColumnResizerLineLayout/main': true,
	          'fixedDataTableColumnResizerLineLayout/hiddenElem': !this.props.visible,
	          'public/fixedDataTableColumnResizerLine/main': true
	        }),
	        style: style },
	      _React2.default.createElement('div', {
	        className: (0, _cx2.default)('fixedDataTableColumnResizerLineLayout/mouseArea'),
	        style: { height: this.props.height }
	      })
	    );
	  },
	  _onMove: function _onMove( /*number*/deltaX) {
	    if (_Locale2.default.isRTL()) {
	      deltaX = -deltaX;
	    }
	    var newWidth = this.state.cursorDelta + deltaX;
	    var newColumnWidth = (0, _clamp2.default)(newWidth, this.props.minWidth, this.props.maxWidth);

	    // Please note cursor delta is the different between the currently width
	    // and the new width.
	    this.setState({
	      width: newColumnWidth,
	      cursorDelta: newWidth
	    });
	  },
	  _onColumnResizeEnd: function _onColumnResizeEnd() {
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.props.onColumnResizeEnd(this.state.width, this.props.columnKey);
	  }
	});

	module.exports = FixedDataTableColumnResizeHandle;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableScrollHelper
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _PrefixIntervalTree = __webpack_require__(74);

	var _PrefixIntervalTree2 = _interopRequireDefault(_PrefixIntervalTree);

	var _clamp = __webpack_require__(60);

	var _clamp2 = _interopRequireDefault(_clamp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BUFFER_ROWS = 5;
	var NO_ROWS_SCROLL_RESULT = {
	  index: 0,
	  offset: 0,
	  position: 0,
	  contentHeight: 0
	};

	var FixedDataTableScrollHelper = function () {
	  function FixedDataTableScrollHelper(
	  /*number*/rowCount,
	  /*number*/defaultRowHeight,
	  /*number*/viewportHeight,
	  /*?function*/rowHeightGetter) {
	    _classCallCheck(this, FixedDataTableScrollHelper);

	    this._rowOffsets = _PrefixIntervalTree2.default.uniform(rowCount, defaultRowHeight);
	    this._storedHeights = new Array(rowCount);
	    for (var i = 0; i < rowCount; ++i) {
	      this._storedHeights[i] = defaultRowHeight;
	    }
	    this._rowCount = rowCount;
	    this._position = 0;
	    this._contentHeight = rowCount * defaultRowHeight;
	    this._defaultRowHeight = defaultRowHeight;
	    this._rowHeightGetter = rowHeightGetter ? rowHeightGetter : function () {
	      return defaultRowHeight;
	    };
	    this._viewportHeight = viewportHeight;
	    this.scrollRowIntoView = this.scrollRowIntoView.bind(this);
	    this.setViewportHeight = this.setViewportHeight.bind(this);
	    this.scrollBy = this.scrollBy.bind(this);
	    this.scrollTo = this.scrollTo.bind(this);
	    this.scrollToRow = this.scrollToRow.bind(this);
	    this.setRowHeightGetter = this.setRowHeightGetter.bind(this);
	    this.getContentHeight = this.getContentHeight.bind(this);
	    this.getRowPosition = this.getRowPosition.bind(this);

	    this._updateHeightsInViewport(0, 0);
	  }

	  _createClass(FixedDataTableScrollHelper, [{
	    key: 'setRowHeightGetter',
	    value: function setRowHeightGetter( /*function*/rowHeightGetter) {
	      this._rowHeightGetter = rowHeightGetter;
	    }
	  }, {
	    key: 'setViewportHeight',
	    value: function setViewportHeight( /*number*/viewportHeight) {
	      this._viewportHeight = viewportHeight;
	    }
	  }, {
	    key: 'getContentHeight',
	    value: function getContentHeight() /*number*/{
	      return this._contentHeight;
	    }
	  }, {
	    key: '_updateHeightsInViewport',
	    value: function _updateHeightsInViewport(
	    /*number*/firstRowIndex,
	    /*number*/firstRowOffset) {
	      var top = firstRowOffset;
	      var index = firstRowIndex;
	      while (top <= this._viewportHeight && index < this._rowCount) {
	        this._updateRowHeight(index);
	        top += this._storedHeights[index];
	        index++;
	      }
	    }
	  }, {
	    key: '_updateHeightsAboveViewport',
	    value: function _updateHeightsAboveViewport( /*number*/firstRowIndex) {
	      var index = firstRowIndex - 1;
	      while (index >= 0 && index >= firstRowIndex - BUFFER_ROWS) {
	        var delta = this._updateRowHeight(index);
	        this._position += delta;
	        index--;
	      }
	    }
	  }, {
	    key: '_updateRowHeight',
	    value: function _updateRowHeight( /*number*/rowIndex) /*number*/{
	      if (rowIndex < 0 || rowIndex >= this._rowCount) {
	        return 0;
	      }
	      var newHeight = this._rowHeightGetter(rowIndex);
	      if (newHeight !== this._storedHeights[rowIndex]) {
	        var change = newHeight - this._storedHeights[rowIndex];
	        this._rowOffsets.set(rowIndex, newHeight);
	        this._storedHeights[rowIndex] = newHeight;
	        this._contentHeight += change;
	        return change;
	      }
	      return 0;
	    }
	  }, {
	    key: 'getRowPosition',
	    value: function getRowPosition( /*number*/rowIndex) /*number*/{
	      this._updateRowHeight(rowIndex);
	      return this._rowOffsets.sumUntil(rowIndex);
	    }
	  }, {
	    key: 'scrollBy',
	    value: function scrollBy( /*number*/delta) /*object*/{
	      if (this._rowCount === 0) {
	        return NO_ROWS_SCROLL_RESULT;
	      }
	      var firstRow = this._rowOffsets.greatestLowerBound(this._position);
	      firstRow = (0, _clamp2.default)(firstRow, 0, Math.max(this._rowCount - 1, 0));
	      var firstRowPosition = this._rowOffsets.sumUntil(firstRow);
	      var rowIndex = firstRow;
	      var position = this._position;

	      var rowHeightChange = this._updateRowHeight(rowIndex);
	      if (firstRowPosition !== 0) {
	        position += rowHeightChange;
	      }
	      var visibleRowHeight = this._storedHeights[rowIndex] - (position - firstRowPosition);

	      if (delta >= 0) {

	        while (delta > 0 && rowIndex < this._rowCount) {
	          if (delta < visibleRowHeight) {
	            position += delta;
	            delta = 0;
	          } else {
	            delta -= visibleRowHeight;
	            position += visibleRowHeight;
	            rowIndex++;
	          }
	          if (rowIndex < this._rowCount) {
	            this._updateRowHeight(rowIndex);
	            visibleRowHeight = this._storedHeights[rowIndex];
	          }
	        }
	      } else if (delta < 0) {
	        delta = -delta;
	        var invisibleRowHeight = this._storedHeights[rowIndex] - visibleRowHeight;

	        while (delta > 0 && rowIndex >= 0) {
	          if (delta < invisibleRowHeight) {
	            position -= delta;
	            delta = 0;
	          } else {
	            position -= invisibleRowHeight;
	            delta -= invisibleRowHeight;
	            rowIndex--;
	          }
	          if (rowIndex >= 0) {
	            var change = this._updateRowHeight(rowIndex);
	            invisibleRowHeight = this._storedHeights[rowIndex];
	            position += change;
	          }
	        }
	      }

	      var maxPosition = this._contentHeight - this._viewportHeight;
	      position = (0, _clamp2.default)(position, 0, maxPosition);
	      this._position = position;
	      var firstRowIndex = this._rowOffsets.greatestLowerBound(position);
	      firstRowIndex = (0, _clamp2.default)(firstRowIndex, 0, Math.max(this._rowCount - 1, 0));
	      firstRowPosition = this._rowOffsets.sumUntil(firstRowIndex);
	      var firstRowOffset = firstRowPosition - position;

	      this._updateHeightsInViewport(firstRowIndex, firstRowOffset);
	      this._updateHeightsAboveViewport(firstRowIndex);

	      return {
	        index: firstRowIndex,
	        offset: firstRowOffset,
	        position: this._position,
	        contentHeight: this._contentHeight
	      };
	    }
	  }, {
	    key: '_getRowAtEndPosition',
	    value: function _getRowAtEndPosition( /*number*/rowIndex) /*number*/{
	      // We need to update enough rows above the selected one to be sure that when
	      // we scroll to selected position all rows between first shown and selected
	      // one have most recent heights computed and will not resize
	      this._updateRowHeight(rowIndex);
	      var currentRowIndex = rowIndex;
	      var top = this._storedHeights[currentRowIndex];
	      while (top < this._viewportHeight && currentRowIndex >= 0) {
	        currentRowIndex--;
	        if (currentRowIndex >= 0) {
	          this._updateRowHeight(currentRowIndex);
	          top += this._storedHeights[currentRowIndex];
	        }
	      }
	      var position = this._rowOffsets.sumTo(rowIndex) - this._viewportHeight;
	      if (position < 0) {
	        position = 0;
	      }
	      return position;
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo( /*number*/position) /*object*/{
	      if (this._rowCount === 0) {
	        return NO_ROWS_SCROLL_RESULT;
	      }
	      if (position <= 0) {
	        // If position less than or equal to 0 first row should be fully visible
	        // on top
	        this._position = 0;
	        this._updateHeightsInViewport(0, 0);

	        return {
	          index: 0,
	          offset: 0,
	          position: this._position,
	          contentHeight: this._contentHeight
	        };
	      } else if (position >= this._contentHeight - this._viewportHeight) {
	        // If position is equal to or greater than max scroll value, we need
	        // to make sure to have bottom border of last row visible.
	        var rowIndex = this._rowCount - 1;
	        position = this._getRowAtEndPosition(rowIndex);
	      }
	      this._position = position;

	      var firstRowIndex = this._rowOffsets.greatestLowerBound(position);
	      firstRowIndex = (0, _clamp2.default)(firstRowIndex, 0, Math.max(this._rowCount - 1, 0));
	      var firstRowPosition = this._rowOffsets.sumUntil(firstRowIndex);
	      var firstRowOffset = firstRowPosition - position;

	      this._updateHeightsInViewport(firstRowIndex, firstRowOffset);
	      this._updateHeightsAboveViewport(firstRowIndex);

	      return {
	        index: firstRowIndex,
	        offset: firstRowOffset,
	        position: this._position,
	        contentHeight: this._contentHeight
	      };
	    }

	    /**
	     * Allows to scroll to selected row with specified offset. It always
	     * brings that row to top of viewport with that offset
	     */

	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow( /*number*/rowIndex, /*number*/offset) /*object*/{
	      rowIndex = (0, _clamp2.default)(rowIndex, 0, Math.max(this._rowCount - 1, 0));
	      offset = (0, _clamp2.default)(offset, -this._storedHeights[rowIndex], 0);
	      var firstRow = this._rowOffsets.sumUntil(rowIndex);
	      return this.scrollTo(firstRow - offset);
	    }

	    /**
	     * Allows to scroll to selected row by bringing it to viewport with minimal
	     * scrolling. This that if row is fully visible, scroll will not be changed.
	     * If top border of row is above top of viewport it will be scrolled to be
	     * fully visible on the top of viewport. If the bottom border of row is
	     * below end of viewport, it will be scrolled up to be fully visible on the
	     * bottom of viewport.
	     */

	  }, {
	    key: 'scrollRowIntoView',
	    value: function scrollRowIntoView( /*number*/rowIndex) /*object*/{
	      rowIndex = (0, _clamp2.default)(rowIndex, 0, Math.max(this._rowCount - 1, 0));
	      var rowBegin = this._rowOffsets.sumUntil(rowIndex);
	      var rowEnd = rowBegin + this._storedHeights[rowIndex];
	      if (rowBegin < this._position) {
	        return this.scrollTo(rowBegin);
	      } else if (this._position + this._viewportHeight < rowEnd) {
	        var position = this._getRowAtEndPosition(rowIndex);
	        return this.scrollTo(position);
	      }
	      return this.scrollTo(this._position);
	    }
	  }]);

	  return FixedDataTableScrollHelper;
	}();

	module.exports = FixedDataTableScrollHelper;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PrefixIntervalTree
	 * 
	 * @typechecks
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _invariant = __webpack_require__(55);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var parent = function parent(node) {
	  return Math.floor(node / 2);
	};

	var Int32Array = global.Int32Array || function (size) {
	  var xs = [];
	  for (var i = size - 1; i >= 0; --i) {
	    xs[i] = 0;
	  }
	  return xs;
	};

	/**
	 * Computes the next power of 2 after or equal to x.
	 */
	function ceilLog2(x) {
	  var y = 1;
	  while (y < x) {
	    y *= 2;
	  }
	  return y;
	}

	/**
	 * A prefix interval tree stores an numeric array and the partial sums of that
	 * array. It is optimized for updating the values of the array without
	 * recomputing all of the partial sums.
	 *
	 *   - O(ln n) update
	 *   - O(1) lookup
	 *   - O(ln n) compute a partial sum
	 *   - O(n) space
	 *
	 * Note that the sequence of partial sums is one longer than the array, so that
	 * the first partial sum is always 0, and the last partial sum is the sum of the
	 * entire array.
	 */

	var PrefixIntervalTree = function () {
	  function PrefixIntervalTree(xs) {
	    _classCallCheck(this, PrefixIntervalTree);

	    /**
	     * Number of elements in the array
	     *
	     * @type {number}
	     * @private
	     */
	    this._size = xs.length;

	    /**
	     * Half the size of the heap. It is also the number of non-leaf nodes, and the
	     * index of the first element in the heap. Always a power of 2.
	     *
	     * @type {number}
	     * @private
	     */
	    this._half = ceilLog2(this._size);

	    /**
	     * Binary heap
	     *
	     * @type {!Array.<number>}
	     * @const
	     * @private
	     */
	    this._heap = new Int32Array(2 * this._half);

	    var i;
	    for (i = 0; i < this._size; ++i) {
	      this._heap[this._half + i] = xs[i];
	    }

	    for (i = this._half - 1; i > 0; --i) {
	      this._heap[i] = this._heap[2 * i] + this._heap[2 * i + 1];
	    }
	  }

	  _createClass(PrefixIntervalTree, [{
	    key: 'set',
	    value: function set(index, value) {
	      (0, _invariant2.default)(0 <= index && index < this._size, 'Index out of range %s', index);

	      var node = this._half + index;
	      this._heap[node] = value;

	      node = parent(node);
	      for (; node !== 0; node = parent(node)) {
	        this._heap[node] = this._heap[2 * node] + this._heap[2 * node + 1];
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get(index) {
	      (0, _invariant2.default)(0 <= index && index < this._size, 'Index out of range %s', index);

	      var node = this._half + index;
	      return this._heap[node];
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	      return this._size;
	    }

	    /**
	     * Returns the sum get(0) + get(1) + ... + get(end - 1).
	     */

	  }, {
	    key: 'sumUntil',
	    value: function sumUntil(end) {
	      (0, _invariant2.default)(0 <= end && end < this._size + 1, 'Index out of range %s', end);

	      if (end === 0) {
	        return 0;
	      }

	      var node = this._half + end - 1;
	      var sum = this._heap[node];
	      for (; node !== 1; node = parent(node)) {
	        if (node % 2 === 1) {
	          sum += this._heap[node - 1];
	        }
	      }

	      return sum;
	    }

	    /**
	     * Returns the sum get(0) + get(1) + ... + get(inclusiveEnd).
	     */

	  }, {
	    key: 'sumTo',
	    value: function sumTo(inclusiveEnd) {
	      (0, _invariant2.default)(0 <= inclusiveEnd && inclusiveEnd < this._size, 'Index out of range %s', inclusiveEnd);
	      return this.sumUntil(inclusiveEnd + 1);
	    }

	    /**
	     * Returns the sum get(begin) + get(begin + 1) + ... + get(end - 1).
	     */

	  }, {
	    key: 'sum',
	    value: function sum(begin, end) {
	      (0, _invariant2.default)(begin <= end, 'Begin must precede end');
	      return this.sumUntil(end) - this.sumUntil(begin);
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) <= t, or
	     * -1 if no such i exists.
	     */

	  }, {
	    key: 'greatestLowerBound',
	    value: function greatestLowerBound(t) {
	      if (t < 0) {
	        return -1;
	      }

	      var node = 1;
	      if (this._heap[node] <= t) {
	        return this._size;
	      }

	      while (node < this._half) {
	        var leftSum = this._heap[2 * node];
	        if (t < leftSum) {
	          node = 2 * node;
	        } else {
	          node = 2 * node + 1;
	          t -= leftSum;
	        }
	      }

	      return node - this._half;
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) < t, or
	     * -1 if no such i exists.
	     */

	  }, {
	    key: 'greatestStrictLowerBound',
	    value: function greatestStrictLowerBound(t) {
	      if (t <= 0) {
	        return -1;
	      }

	      var node = 1;
	      if (this._heap[node] < t) {
	        return this._size;
	      }

	      while (node < this._half) {
	        var leftSum = this._heap[2 * node];
	        if (t <= leftSum) {
	          node = 2 * node;
	        } else {
	          node = 2 * node + 1;
	          t -= leftSum;
	        }
	      }

	      return node - this._half;
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and t <= sumUntil(i), or
	     * size + 1 if no such i exists.
	     */

	  }, {
	    key: 'leastUpperBound',
	    value: function leastUpperBound(t) {
	      return this.greatestStrictLowerBound(t) + 1;
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and t < sumUntil(i), or
	     * size + 1 if no such i exists.
	     */

	  }, {
	    key: 'leastStrictUpperBound',
	    value: function leastStrictUpperBound(t) {
	      return this.greatestLowerBound(t) + 1;
	    }
	  }], [{
	    key: 'uniform',
	    value: function uniform(size, initialValue) {
	      var xs = [];
	      for (var i = size - 1; i >= 0; --i) {
	        xs[i] = initialValue;
	      }

	      return new PrefixIntervalTree(xs);
	    }
	  }, {
	    key: 'empty',
	    value: function empty(size) {
	      return PrefixIntervalTree.uniform(size, 0);
	    }
	  }]);

	  return PrefixIntervalTree;
	}();

	module.exports = PrefixIntervalTree;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableWidthHelper
	 * @typechecks
	 */

	'use strict';

	var _React = __webpack_require__(29);

	var _React2 = _interopRequireDefault(_React);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getTotalWidth( /*array*/columns) /*number*/{
	  var totalWidth = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    totalWidth += columns[i].props.width;
	  }
	  return totalWidth;
	}

	function getMaxVisibleColumns( /*array*/columns, /*number*/width) /*number*/{
	  var maxColumns = 0;
	  var currentWidth = 0;

	  var scrollableColumns = columns.filter(function (column) {
	    var fixed = column.props.fixed;
	    if (fixed) {
	      width -= column.props.width;
	    }
	    return !fixed;
	  });

	  var first = 0;
	  for (var i = 0; i < scrollableColumns.length; ++i) {
	    var columnWidth = scrollableColumns[i].props.width;
	    var firstColumnWidth = scrollableColumns[first].props.width;
	    while (currentWidth - firstColumnWidth - 1 > width) {
	      currentWidth -= scrollableColumns[first++].props.width;
	    }
	    currentWidth += columnWidth;
	    maxColumns = Math.max(maxColumns, i - first + 1);
	  }

	  //Max columns that will fit on screen
	  return maxColumns;
	}

	function getTotalFlexGrow( /*array*/columns) /*number*/{
	  var totalFlexGrow = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    totalFlexGrow += columns[i].props.flexGrow || 0;
	  }
	  return totalFlexGrow;
	}

	function distributeFlexWidth(
	/*array*/columns,
	/*number*/flexWidth) /*object*/{
	  if (flexWidth <= 0) {
	    return {
	      columns: columns,
	      width: getTotalWidth(columns)
	    };
	  }
	  var remainingFlexGrow = getTotalFlexGrow(columns);
	  var remainingFlexWidth = flexWidth;
	  var newColumns = [];
	  var totalWidth = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    var column = columns[i];
	    if (!column.props.flexGrow) {
	      totalWidth += column.props.width;
	      newColumns.push(column);
	      continue;
	    }
	    var columnFlexWidth = Math.floor(column.props.flexGrow / remainingFlexGrow * remainingFlexWidth);
	    var newColumnWidth = Math.floor(column.props.width + columnFlexWidth);
	    totalWidth += newColumnWidth;

	    remainingFlexGrow -= column.props.flexGrow;
	    remainingFlexWidth -= columnFlexWidth;

	    newColumns.push(_React2.default.cloneElement(column, { width: newColumnWidth }));
	  }

	  return {
	    columns: newColumns,
	    width: totalWidth
	  };
	}

	function adjustColumnGroupWidths(
	/*array*/columnGroups,
	/*number*/expectedWidth) /*object*/{
	  var allColumns = [];
	  var i;
	  for (i = 0; i < columnGroups.length; ++i) {
	    _React2.default.Children.forEach(columnGroups[i].props.children, function (column) {
	      allColumns.push(column);
	    });
	  }
	  var columnsWidth = getTotalWidth(allColumns);
	  var remainingFlexGrow = getTotalFlexGrow(allColumns);
	  var remainingFlexWidth = Math.max(expectedWidth - columnsWidth, 0);

	  var newAllColumns = [];
	  var newColumnGroups = [];

	  for (i = 0; i < columnGroups.length; ++i) {
	    var columnGroup = columnGroups[i];
	    var currentColumns = [];

	    _React2.default.Children.forEach(columnGroup.props.children, function (column) {
	      currentColumns.push(column);
	    });

	    var columnGroupFlexGrow = getTotalFlexGrow(currentColumns);
	    var columnGroupFlexWidth = Math.floor(columnGroupFlexGrow / remainingFlexGrow * remainingFlexWidth);

	    var newColumnSettings = distributeFlexWidth(currentColumns, columnGroupFlexWidth);

	    remainingFlexGrow -= columnGroupFlexGrow;
	    remainingFlexWidth -= columnGroupFlexWidth;

	    for (var j = 0; j < newColumnSettings.columns.length; ++j) {
	      newAllColumns.push(newColumnSettings.columns[j]);
	    }

	    newColumnGroups.push(_React2.default.cloneElement(columnGroup, { width: newColumnSettings.width }));
	  }

	  return {
	    columns: newAllColumns,
	    columnGroups: newColumnGroups
	  };
	}

	function adjustColumnWidths(
	/*array*/columns,
	/*number*/expectedWidth) /*array*/{
	  var columnsWidth = getTotalWidth(columns);
	  if (columnsWidth < expectedWidth) {
	    return distributeFlexWidth(columns, expectedWidth - columnsWidth).columns;
	  }
	  return columns;
	}

	var FixedDataTableWidthHelper = {
	  getTotalWidth: getTotalWidth,
	  getMaxVisibleColumns: getMaxVisibleColumns,
	  getTotalFlexGrow: getTotalFlexGrow,
	  distributeFlexWidth: distributeFlexWidth,
	  adjustColumnWidths: adjustColumnWidths,
	  adjustColumnGroupWidths: adjustColumnGroupWidths
	};

	module.exports = FixedDataTableWidthHelper;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright Schrodinger, LLC
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule debounceCore
	 * @typechecks
	 */

	/**
	 * Invokes the given callback after a specified number of milliseconds have
	 * elapsed, ignoring subsequent calls.
	 *
	 * For example, if you wanted to update a preview after the user stops typing
	 * you could do the following:
	 *
	 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
	 *
	 * The returned function has a reset method which can be called to cancel a
	 * pending invocation.
	 *
	 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
	 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
	 *
	 *   // later, to cancel pending calls
	 *   debouncedUpdatePreview.reset();
	 *
	 * @param {function} func - the function to debounce
	 * @param {number} wait - how long to wait in milliseconds
	 * @param {*} context - optional context to invoke the function in
	 * @param {?function} setTimeoutFunc - an implementation of setTimeout
	 *  if nothing is passed in the default setTimeout function is used
	  * @param {?function} clearTimeoutFunc - an implementation of clearTimeout
	 *  if nothing is passed in the default clearTimeout function is used
	 */
	function debounce(func, wait, context, setTimeoutFunc, clearTimeoutFunc) {
	  setTimeoutFunc = setTimeoutFunc || setTimeout;
	  clearTimeoutFunc = clearTimeoutFunc || clearTimeout;
	  var timeout;

	  function debouncer() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    debouncer.reset();

	    var callback = function callback() {
	      func.apply(context, args);
	    };
	    callback.__SMmeta = func.__SMmeta;
	    timeout = setTimeoutFunc(callback, wait);
	  }

	  debouncer.reset = function () {
	    clearTimeoutFunc(timeout);
	  };

	  return debouncer;
	}

	module.exports = debounce;

/***/ })
/******/ ])
});
;