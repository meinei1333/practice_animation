/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	var renderer, stage, x$, movie;
	renderer = PIXI.autoDetectRenderer(800, 600);
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();
	x$ = PIXI.loader;
	x$.add('./asset/cs6/supermode.json');
	x$.load(onAssetsLoaded);
	movie = {};
	function onAssetsLoaded(){
	  var frames, i$, i, tempStr, movie;
	  frames = [];
	  for (i$ = 1; i$ <= 47; ++i$) {
	    i = i$;
	    tempStr = i < 10
	      ? "0" + i
	      : i.toString();
	    frames.push(PIXI.Texture.fromFrame("SuperMode_" + tempStr + ".png"));
	    movie = new PIXI.extras.MovieClip(frames);
	  }
	  movie.animationSpeed = 0.3;
	  movie.play();
	  stage.addChild(movie);
	  animate();
	}
	function animate(){
	  movie.rotation += 0.01;
	  renderer.render(stage);
	  requestAnimationFrame(animate);
	}
	//# sourceMappingURL=/Users/Taphy/Documents/workspace/practice_animation/node_modules/livescript-loader/index.js!/Users/Taphy/Documents/workspace/practice_animation/ls/index.ls.map


/***/ }
/******/ ]);