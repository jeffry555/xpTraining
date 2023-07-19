(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width:100%;\n    height: 100%;\n    position: fixed;\n    background-image: linear-gradient(to top right, #E0EAFC, #CFDEF3);\n    margin: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpRUFBaUU7SUFDakUsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0UwRUFGQywgI0NGREVGMyk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <app-header></app-header>\n        <div class=\"col-9 content\">\n                 <router-outlet></router-outlet>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showSideNav = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_gateway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.gateway */ "./src/app/game/game.gateway.ts");
/* harmony import */ var _game_http_game_gateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/http.game.gateway */ "./src/app/game/http.game.gateway.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material.module */ "./src/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");








// ng import { RankedGameComponent } from './game/ranked-game/ranked-game.component';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                // RankedGameComponent,
                _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_13__["LeaderboardComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"] // must be last to facilitate subrouting
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]
            ],
            providers: [
                _game_http_game_gateway__WEBPACK_IMPORTED_MODULE_7__["HttpGameGateway"],
                { provide: _game_game_gateway__WEBPACK_IMPORTED_MODULE_6__["GameGateway"], useClass: _game_http_game_gateway__WEBPACK_IMPORTED_MODULE_7__["HttpGameGateway"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");





var routes = [
    { path: '', redirectTo: 'leaderboard', pathMatch: "full" },
    { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
    { path: 'play', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: '**', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".throw-container{\n    padding-top: 20px;\n}\n\n.mat-select-custom{\n    background-color: #182848;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    height: 36px;\n}\n\n.container{\n    width: 50%;\n    margin: auto;\n    /* background-image: linear-gradient(to top right, #ECE9E6, #FFFFFF); */\n\n    padding-top: 100px;\n}\n\n.toggle{\n    padding: 24px 5px 24px 5px;\n}\n\nmat-slide-toggle {\n    padding-left: 8px;\n}\n\n.player-container{\n    display: flex;\n    \n}\n\n.name{\n    flex: 0 0 50%;\n    padding: 8px 24px 8px 24px;\n}\n\n.throw{\n    /* border: 1px solid #696969; */\n    /* flex: 0 0 40%; */\n    width: 40%;\n    padding: 8px 24px 8px 24px;\n}\n\n.submit-button[disabled]{\n    background-color: #182848;\n    opacity: 0.8;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1RUFBdUU7O0lBRXZFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhyb3ctY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubWF0LXNlbGVjdC1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4Mjg0ODtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xufVxuXG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0VDRTlFNiwgI0ZGRkZGRik7ICovXG5cbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi50b2dnbGV7XG4gICAgcGFkZGluZzogMjRweCA1cHggMjRweCA1cHg7XG59XG5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnBsYXllci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cblxuLm5hbWV7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBwYWRkaW5nOiA4cHggMjRweCA4cHggMjRweDtcbn1cbi50aHJvd3tcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjNjk2OTY5OyAqL1xuICAgIC8qIGZsZXg6IDAgMCA0MCU7ICovXG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiA4cHggMjRweCA4cHggMjRweDtcbn1cblxuLnN1Ym1pdC1idXR0b25bZGlzYWJsZWRde1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODI4NDg7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=toggle>\n    <mat-label for=\"gameModeToggle\" *ngIf=\"isPracticeGame === false\">Ranked</mat-label>\n    <mat-label for=\"gameModeToggle\" *ngIf=\"isPracticeGame === true\">Practice</mat-label>\n    <mat-slide-toggle id=\"gameModeToggle\" [checked]=\"isPracticeGame\" (change)=\"flipToggle()\"></mat-slide-toggle> <!-- container centers content on large screens -->\n  </div>\n\n  \n  <div class=\"row\" [formGroup]=\"gameForm\"> \n               <!-- responsive row has 12 columns by default -->\n    <div class=\"player-container\">    \n    <ng-container *ngIf=\"isPracticeGame === false\">\n          <div class=\"name\">\n              <mat-label for=\"player1Name\">Player 1 Name</mat-label>\n              <mat-select id=\"player1Name\" formControlName=\"selectedPlayer1\" class=\"mat-select-custom\">\n                <mat-option *ngFor=\"let player of playerList\" [value]=\"player\">\n                  {{player.name}}\n                </mat-option>\n              </mat-select>\n          </div>\n      </ng-container>\n      \n      <div class=\"throw\">\n        <mat-label for=\"player1Throw\">Throw</mat-label>\n        <mat-select id=\"player1Throw\" formControlName=\"player1Throw\" class=\"mat-select-custom\">\n          <mat-option [value]=\"undefined\">Select a value</mat-option>\n          <mat-option *ngFor=\"let p1Throw of throwTypes\" [value]=\"p1Throw\">\n            {{throwLocalization[p1Throw]}}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n\n    <div class=\"player-container\">    \n\n    <ng-container *ngIf=\"isPracticeGame === false\">\n        <div class=\"name\">\n          <mat-label for=\"player2Name\">Player 2 Name</mat-label>\n          <mat-select id=\"player2Name\" formControlName=\"selectedPlayer2\" class=\"mat-select-custom\">\n            <mat-option *ngFor=\"let player of playerList\" [value]=\"player\">\n              {{player.name}}\n            </mat-option>\n          </mat-select>\n        </div>\n      </ng-container>\n\n      <div class=\"throw\">\n        <mat-label for=\"player2Throw\">Throw</mat-label>\n        <mat-select id=\"player2Throw\" formControlName=\"player2Throw\" class=\"mat-select-custom\">\n          <mat-option [value]=\"undefined\">Select a value</mat-option>\n          <mat-option *ngFor=\"let p2Throw of throwTypes\" [value]=\"p2Throw\">\n            {{throwLocalization[p2Throw]}}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\" >\n      <button id=\"submit-ranked\" mat-raised-button color=\"primary\" *ngIf=\"isPracticeGame === false\" [disabled]=\"!gameForm.valid\" (click)=\"processRankedGame()\" class=\"submit-button\">Submit</button>\n      <button id=\"submit-practice\" mat-raised-button color=\"primary\" *ngIf=\"isPracticeGame === true\" [disabled]=\"!gameForm.valid\" (click)=\"processPracticeGame()\" class=\"submit-button\">Submit</button>\n      \n      <p id=\"game-outcome\">{{mostRecentOutcome}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/app/game/game.ts");
/* harmony import */ var _game_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.gateway */ "./src/app/game/game.gateway.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var GameComponent = /** @class */ (function () {
    function GameComponent(gameGateway, fb) {
        this.gameGateway = gameGateway;
        this.fb = fb;
        this.throwTypes = Object.keys(_game__WEBPACK_IMPORTED_MODULE_2__["Throw"]).map(function (value) { return _game__WEBPACK_IMPORTED_MODULE_2__["Throw"][value]; });
        this.throwLocalization = _game__WEBPACK_IMPORTED_MODULE_2__["throwLocalization"];
        this.mostRecentOutcome = '';
        this.playerList = [];
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isPracticeGame = false;
    }
    GameComponent.prototype.ngOnDestroy = function () {
        this._destroy.next();
        this._destroy.complete();
    };
    GameComponent.prototype.ngOnInit = function () {
        this.playerList = [];
        this.createForm();
        this.getPlayers();
        // this.gameForm.get('player1Throw').pipe(takeUntill(this._destroy)).valueChanges.subscribe(x =>{
        //   console.log(x);
        // this.gameForm.get('pgagdsg').validator;
        // this.gameForm.updateValueAndValidity()
        // })
        this.updateValidator();
    };
    GameComponent.prototype.createForm = function () {
        this.gameForm = this.fb.group({
            selectedPlayer1: [null],
            selectedPlayer2: [null],
            player1Throw: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            player2Throw: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    GameComponent.prototype.getValue = function (name) {
        return this.gameForm.get(name).value;
    };
    GameComponent.prototype.processRankedGame = function () {
        var _this = this;
        this.mostRecentOutcome = '';
        this.rankedGameRequest = new _game_gateway__WEBPACK_IMPORTED_MODULE_3__["PlayGameRequest"](this.getValue('selectedPlayer1'), this.getValue('selectedPlayer2'), this.getValue('player1Throw'), this.getValue('player2Throw'));
        this.gameGateway.playGame(this.rankedGameRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy)).subscribe(function (gameResult) {
            _this.mostRecentOutcome = gameResult.outcome;
        });
    };
    GameComponent.prototype.processPracticeGame = function () {
        var _this = this;
        this.mostRecentOutcome = '';
        this.practiceGameRequest = new _game_gateway__WEBPACK_IMPORTED_MODULE_3__["PlayPracticeGameRequest"](this.getValue('player1Throw'), this.getValue('player2Throw'));
        this.gameGateway.playPracticeGame(this.practiceGameRequest).subscribe(function (gameResult) {
            _this.mostRecentOutcome = gameResult.outcome;
        });
    };
    GameComponent.prototype.flipToggle = function () {
        this.isPracticeGame = !this.isPracticeGame;
        this.updateValidator();
    };
    GameComponent.prototype.updateValidator = function () {
        if (this.isPracticeGame == false) {
            // console.log("Real");
            this.gameForm.get('selectedPlayer1').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.gameForm.get('selectedPlayer2').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        }
        else {
            // console.log("Practice");
            this.gameForm.get('selectedPlayer1').clearValidators();
            this.gameForm.get('selectedPlayer1').updateValueAndValidity();
            this.gameForm.get('selectedPlayer2').clearValidators();
            this.gameForm.get('selectedPlayer2').updateValueAndValidity();
        }
        // this.gameForm.updateValueAndValidity();
    };
    GameComponent.prototype.getPlayers = function () {
        var _this = this;
        this.gameGateway.getPlayers().subscribe(function (returnedPlayers) {
            for (var i = 0; i < returnedPlayers.length; i++) {
                _this.playerList.push(returnedPlayers[i]);
            }
            _this.playerList = _this.playerList.sort(function (a, b) { return a.name.localeCompare(b.name); });
            console.log('got players', _this.playerList);
        });
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_gateway__WEBPACK_IMPORTED_MODULE_3__["GameGateway"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/game.gateway.ts":
/*!**************************************!*\
  !*** ./src/app/game/game.gateway.ts ***!
  \**************************************/
/*! exports provided: GameGateway, PlayPracticeGameRequest, PlayPracticeGameResponse, PlayGameRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameGateway", function() { return GameGateway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPracticeGameRequest", function() { return PlayPracticeGameRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPracticeGameResponse", function() { return PlayPracticeGameResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayGameRequest", function() { return PlayGameRequest; });
var GameGateway = /** @class */ (function () {
    function GameGateway() {
    }
    return GameGateway;
}());

var PlayPracticeGameRequest = /** @class */ (function () {
    function PlayPracticeGameRequest(player1Throw, player2Throw) {
        this.player1Throw = player1Throw;
        this.player2Throw = player2Throw;
    }
    return PlayPracticeGameRequest;
}());

var PlayPracticeGameResponse = /** @class */ (function () {
    function PlayPracticeGameResponse(outcome) {
        this.outcome = outcome;
    }
    return PlayPracticeGameResponse;
}());

var PlayGameRequest = /** @class */ (function () {
    function PlayGameRequest(player1, player2, player1Throw, player2Throw) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Throw = player1Throw;
        this.player2Throw = player2Throw;
    }
    return PlayGameRequest;
}());



/***/ }),

/***/ "./src/app/game/game.ts":
/*!******************************!*\
  !*** ./src/app/game/game.ts ***!
  \******************************/
/*! exports provided: Throw, throwLocalization, Outcome, Result, outcomeLocatization, Player, GameResult, PlayerStat, GameRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Throw", function() { return Throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwLocalization", function() { return throwLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outcome", function() { return Outcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outcomeLocatization", function() { return outcomeLocatization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResult", function() { return GameResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStat", function() { return PlayerStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRecord", function() { return GameRecord; });
var _a, _b;
var Throw;
(function (Throw) {
    Throw["Rock"] = "ROCK";
    Throw["Paper"] = "PAPER";
    Throw["Scissors"] = "SCISSORS";
})(Throw || (Throw = {}));
var throwLocalization = (_a = {},
    _a[Throw.Rock] = 'Rock',
    _a[Throw.Paper] = 'Paper',
    _a[Throw.Scissors] = 'Scissors',
    _a);
var Outcome;
(function (Outcome) {
    Outcome["P1Wins"] = "P1_WINS";
    Outcome["P2Wins"] = "P2_WINS";
    Outcome["Tie"] = "TIE";
})(Outcome || (Outcome = {}));
var Result;
(function (Result) {
    Result["Won"] = "WON";
    Result["Loss"] = "LOSS";
    Result["Tie"] = "TIE";
})(Result || (Result = {}));
var outcomeLocatization = (_b = {},
    _b[Outcome.P1Wins] = 'Player 1 Wins',
    _b[Outcome.P2Wins] = 'Player 2 Wins',
    _b[Outcome.Tie] = 'Tie',
    _b);
var Player = /** @class */ (function () {
    function Player(name, id) {
        this.name = name;
        this.id = id;
    }
    return Player;
}());

var GameResult = /** @class */ (function () {
    function GameResult(player1, player2, p1Throw, p2Throw, outcome) {
        this.player1 = player1;
        this.player2 = player2;
        this.p1Throw = p1Throw;
        this.p2Throw = p2Throw;
        this.outcome = outcome;
    }
    return GameResult;
}());

var PlayerStat = /** @class */ (function () {
    function PlayerStat(player, gamesWon, gamesLost, gamesTied, gamesPlayed, winPercentage, rocksThrown, papersThrown, scissorsThrown, rockPercent, paperPercent, scissorsPercent) {
        this.player = player;
        this.gamesWon = gamesWon;
        this.gamesLost = gamesLost;
        this.gamesTied = gamesTied;
        this.gamesPlayed = gamesPlayed;
        this.winPercentage = winPercentage;
        this.rocksThrown = rocksThrown;
        this.papersThrown = papersThrown;
        this.scissorsThrown = scissorsThrown;
        this.rockPercent = rockPercent;
        this.paperPercent = paperPercent;
        this.scissorsPercent = scissorsPercent;
    }
    return PlayerStat;
}());

var GameRecord = /** @class */ (function () {
    function GameRecord(gameResultId, player, opponent, result, playerThrow, opponentThrow) {
        this.gameResultId = gameResultId;
        this.player = player;
        this.opponent = opponent;
        this.result = result;
        this.playerThrow = playerThrow;
        this.opponentThrow = opponentThrow;
    }
    return GameRecord;
}());



/***/ }),

/***/ "./src/app/game/http.game.gateway.ts":
/*!*******************************************!*\
  !*** ./src/app/game/http.game.gateway.ts ***!
  \*******************************************/
/*! exports provided: HttpGameGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpGameGateway", function() { return HttpGameGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpGameGateway = /** @class */ (function () {
    function HttpGameGateway(http) {
        this.http = http;
    }
    HttpGameGateway.prototype.playPracticeGame = function (request) {
        return this.http.post('http://localhost:8080/api/gameResults/practice', request);
    };
    HttpGameGateway.prototype.playGame = function (request) {
        return this.http.post('http://localhost:8080/api/gameResults', request);
    };
    HttpGameGateway.prototype.getPlayers = function () {
        return this.http.get('http://localhost:8080/api/gameResults/playerList');
    };
    HttpGameGateway.prototype.getPlayerStats = function () {
        return this.http.get('http://localhost:8080/api/gameResults/playerStats');
    };
    HttpGameGateway.prototype.getPlayerGameRecords = function (playerId) {
        return this.http.get('http://localhost:8080/api/gameResults/playerGameRecords/' + playerId);
    };
    HttpGameGateway = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpGameGateway);
    return HttpGameGateway;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-items{\n    list-style-type: none;\n    display: inline-flex;\n}\n\n.align-right{\n    position: absolute;\n    right: 10px;\n}\n\n.crm-navigation-bar{\n    background-image: linear-gradient(to top right, #4b6cb7, #182848);\n\n}\n\n.content {\n    margin: auto;\n    margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpRUFBaUU7O0FBRXJFOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWl0ZW1ze1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmFsaWduLXJpZ2h0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbn1cblxuLmNybS1uYXZpZ2F0aW9uLWJhcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjNGI2Y2I3LCAjMTgyODQ4KTtcblxufVxuXG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"crm-navigation-bar\">\n\n    <mat-toolbar-row>\n  \n      <button mat-icon-button id=\"hamburger-stack\" (click)=\"toggleSidenav()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n  \n      <span class=\"toolbar-title\"> Rock, Paper & Scissors</span>\n  \n      <div class=\"align-right\">\n  \n        <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n  \n          <li fxHide.xs>\n            <button mat-icon-button>\n              <mat-icon>settings</mat-icon>\n            </button>\n          </li>\n  \n          <li fxHide.xs>\n            <button mat-icon-button>\n              <mat-icon>help_outline</mat-icon>\n            </button>\n          </li>\n  \n          <li>\n            <button mat-icon-button [matMenuTriggerFor]=\"auth\">\n              <mat-icon>person_outline</mat-icon>\n            </button>\n            <mat-menu #auth=\"matMenu\">\n              <button mat-menu-item (click)=\"logout()\">\n                <mat-icon>exit_to_app</mat-icon>\n                <span>Sign out</span>\n              </button>\n            </mat-menu>\n          </li>\n  \n        </ul>\n  \n      </div>\n  \n    </mat-toolbar-row>\n  \n  </mat-toolbar>\n\n  <app-sidebar  *ngIf=\"showSideNav\" (closeSideNav)=\"showSideNav = !showSideNav\" ></app-sidebar>\n  <!-- <div class=\"col-9 content\">\n      <router-outlet></router-outlet>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.showSideNav = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSidenav = function () {
        this.showSideNav = !this.showSideNav;
        console.log(this.showSideNav);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".refresh{\n    margin-top: 24px;\n}\n.leaderboard-container{\n    text-align: center;\n    padding-top: 50px;\n}\ntable{\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmcmVzaHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmxlYWRlcmJvYXJkLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG50YWJsZXtcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leaderboard-container\">\n<p>\n  LEADER BOARD\n</p>\n<style type=\"text/css\">\n  .tg  {border-collapse:collapse;border-spacing:0;}\n  .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n  .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n  .tg .tg-w3z3{font-weight:bold;font-size:15px;font-family:\"Trebuchet MS\", Helvetica, sans-serif !important;;text-align:left;vertical-align:top}\n  .tg .tg-wt0f{font-weight:bold;font-size:15px;font-family:\"Trebuchet MS\", Helvetica, sans-serif !important;;text-align:left;vertical-align:middle}\n  </style>\n  \n  <ng-container *ngIf=\"selectedPlayer === -1\">\n    <table class=\"tg\">\n      <tr>\n        <th class=\"tg-w3z3\">Player</th>\n        <th class=\"tg-w3z3\">Winning Percentage</th>\n        <th class=\"tg-w3z3\">Number of Games</th>\n        <th class=\"tg-w3z3\">Wins</th>\n        <th class=\"tg-w3z3\">Losses</th>\n        <th class=\"tg-w3z3\">Ties</th>\n        <th class=\"tg-w3z3\">Rocks Thrown (%)</th>\n        <th class=\"tg-w3z3\">Papers Thrown (%)</th>\n        <th class=\"tg-w3z3\">Scissors Thrown (%)</th>\n      </tr>\n      <ng-container >\n        <tr *ngFor=\"let playerStat of playerStats\"  >\n          <td> <button (click)=\"showPlayer( playerStat.player.id )\" > {{playerStat.player.name}} </button>   </td>\n          <td class=\"ps-winpercent-{{playerStat.player.id}}\" >{{playerStat.winPercentage}}</td>\n          <td>{{playerStat.gamesPlayed}}</td>\n          <td>{{playerStat.gamesWon}}</td>\n          <td>{{playerStat.gamesLost}}</td>\n          <td>{{playerStat.gamesTies}}</td>\n          <td>{{playerStat.rockPercent}}</td>\n          <td>{{playerStat.paperPercent}}</td>\n          <td>{{playerStat.scissorsPercent}}</td>\n        </tr>\n      </ng-container>\n      \n    </table>\n    <button class=\"refresh\" (click)=\"getPlayerStats()\" >Refresh</button>\n</ng-container>\n\n<ng-container *ngIf=\"selectedPlayer != -1\">\n  <table class=\"tg\">\n    <tr>\n      <th class=\"tg-w3z3\">Opponent</th>\n      <th class=\"tg-w3z3\">Result</th>\n      <th class=\"tg-w3z3\">Player Throw</th>\n      <th class=\"tg-w3z3\">Opponent Throw</th>\n    </tr>\n    <ng-container >\n      <tr *ngFor=\"let gameRecord of gameRecords\"  >\n        <td>{{gameRecord.opponent.name}}</td>\n        <td>{{gameRecord.result}}</td>\n        <td>{{gameRecord.playerThrow}}</td>\n        <td>{{gameRecord.opponentThrow}}</td>\n      </tr>\n    </ng-container>\n    \n  </table>\n  <button (click)=\"showPlayer(-1)\" >Back</button>\n</ng-container>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_game_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/game.gateway */ "./src/app/game/game.gateway.ts");



var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(gameGateway) {
        this.gameGateway = gameGateway;
        this.playerStats = [];
        this.gameRecords = [];
        this.selectedPlayer = -1;
        this.playerStats = [];
        this.gameRecords = [];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.getPlayerStats();
    };
    LeaderboardComponent.prototype.showPlayer = function (playerId) {
        console.log('Click - Player: ', playerId);
        this.selectedPlayer = playerId;
        if (playerId === -1) {
            this.getPlayerStats();
        }
        else {
            this.getGameRecords();
        }
    };
    LeaderboardComponent.prototype.getPlayerStats = function () {
        var _this = this;
        this.playerStats = [];
        this.gameGateway.getPlayerStats().subscribe(function (returnedPlayerStats) {
            for (var i = 0; i < returnedPlayerStats.length; i++) {
                _this.playerStats.push(returnedPlayerStats[i]);
            }
            // this.playerList = this.playerList.sort((a,b) => a.name.localeCompare(b.name));
            console.log('got player Stats', _this.playerStats);
        });
    };
    LeaderboardComponent.prototype.getGameRecords = function () {
        var _this = this;
        this.gameRecords = [];
        this.gameGateway.getPlayerGameRecords(this.selectedPlayer).subscribe(function (returnedGameRecords) {
            for (var i = 0; i < returnedGameRecords.length; i++) {
                _this.gameRecords.push(returnedGameRecords[i]);
            }
            // this.playerList = this.playerList.sort((a,b) => a.name.localeCompare(b.name));
            console.log('got player game records', _this.gameRecords);
        });
    };
    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/leaderboard/leaderboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_game_gateway__WEBPACK_IMPORTED_MODULE_2__["GameGateway"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .sidebar-container {\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n}\n\n.sidenav-drawer {\n    background-color: white;\n    height: 100%;\n    width: 125px;\n}\n\n.sidenav-drawer2 {\n    height: 50%;\n    width: 70px;\n} */\n\n\n\n.mat-sidenav-container {\n    height: 100%;\n    width: 320px;\n    position: absolute;\n    z-index: 999999;\n    background-image: linear-gradient(to top right, #4b6cb7, #182848);\n  }\n\n\n\n.mat-sidenav-content {\n    width: 320px;\n  }\n\n\n\n.toolbar-title {\n    margin: 0 16px 0 16px;\n  }\n\n\n\n.mat-subheader {\n    font-size: 18px;\n    font-weight: 900;\n  }\n\n\n\n.app-nav-list-icon {\n    margin: 0 12px 0 12px;\n  }\n\n\n\n.list-item-active {\n    font-weight: bold;\n    color: mat-color(#4b6cb7, darker) !important;\n    background: rgba(0, 0, 0, 0.04);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHOzs7O0FBSUg7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUVBQWlFO0VBQ25FOzs7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7Ozs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7OztBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7OztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOzs7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnNpZGViYXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaWRlbmF2LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMjVweDtcbn1cblxuLnNpZGVuYXYtZHJhd2VyMiB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDcwcHg7XG59ICovXG5cblxuXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzRiNmNiNywgIzE4Mjg0OCk7XG4gIH1cbiAgXG4gIC5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cbiAgXG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMTZweCAwIDE2cHg7XG4gIH1cbiAgXG4gIC5tYXQtc3ViaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuICBcbiAgLmFwcC1uYXYtbGlzdC1pY29uIHtcbiAgICBtYXJnaW46IDAgMTJweCAwIDEycHg7XG4gIH1cblxuICAubGlzdC1pdGVtLWFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigjNGI2Y2I3LCBkYXJrZXIpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <mat-sidenav-container #sidebar autosize>\n      <mat-sidenav> \n         \n      </mat-sidenav>\n    <mat-sidenav-content mode=\"over\" role=\"navigation\">\n      <mat-nav-list>\n        <h2 matSubheader> Games </h2>\n\n        <a mat-list-item routerLink=\"/\" style=\"height: 0;\"></a>\n\n        <a mat-list-item routerLink=\"/leaderboard\" routerLinkActive=\"list-item-active\" (click)=\"closeSideNav.emit()\">\n          <mat-icon matListIcon class=\"app-nav-list-icon\">bar_chart</mat-icon>\n          Leaderboard\n        </a>\n        <br />\n        <a mat-list-item routerLink=\"/play\" routerLinkActive=\"list-item-active\" (click)=\"closeSideNav.emit()\">\n          <mat-icon matListIcon class=\"app-nav-list-icon\">games</mat-icon>\n          Play Game\n        </a>\n      </mat-nav-list>\n    </mat-sidenav-content>\n   </mat-sidenav-container>\n\n\n   <!-- <mat-sidenav-container style=\"height: 300px;\" *ngIf=\"isDisplayed\">\n      <mat-sidenav #sidenav mode=\"over\" [opened]=\"toggled\" class=\"sidenav\" style=\"width: 200px;\">\n        <p>Sidenav</p>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <p>Sidenav content hidden behing the sidenav.</p>\n      </mat-sidenav-content>\n    </mat-sidenav-container>   -->"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.closeSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        console.log("opened side bar component");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SidebarComponent.prototype, "closeSideNav", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/material.module.ts":
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");


// Import as needed


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeffry.richards/projects/innerSource7_23/javaxptraining/RPS-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map