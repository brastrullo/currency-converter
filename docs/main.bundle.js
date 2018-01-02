webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main\" style=\"text-align:center\">\n  <h1 class=\"app-main-title\">{{ title }}</h1>\n\n  <p class=\"app-main-instructions\">Type in amount and set currency:</p>\n\n  <currency-component></currency-component>\n  <currency-component></currency-component>\n  <currency-component></currency-component>\n\n  <small class=\"app-main-disclaimer\"><a target=\"_blank\" rel=\"noopener\" href=\"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html\">Disclaimer</a></small>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-main {\n  font-family: Arial;\n  font-size: 1em;\n  max-width: 20em;\n  margin: 0 auto;\n  box-sizing: border-box; }\n\n.app-main-title {\n  text-transform: uppercase; }\n\n.app-main-disclaimer {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Currency Converter';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_service__ = __webpack_require__("../../../../../src/app/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currency_currency_component__ = __webpack_require__("../../../../../src/app/currency/currency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_input_select_currency_input_select_component__ = __webpack_require__("../../../../../src/app/currency-input-select/currency-input-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__currency_currency_component__["a" /* CurrencyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__currency_input_select_currency_input_select_component__["a" /* CurrencyInputSelectComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__currency_service__["a" /* CurrencyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/currency-input-select/currency-input-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"currency-input-select\">\n  <input #input type=\"number\" placeholder=\"0.00\" \n    [ngModel]=\"inputValue\" \n    [attr.id]=\"inputId\" \n    [name]=\"name\" \n    (focusout)=\"focusEvent($event)\"\n    (click)=\"input.select()\"\n    (input)=\"onKeyup($event)\">\n  <select \n    [ngModel]=\"selectedRate\" \n    [name]=\"name\" \n    (ngModelChange)=\"onSelect($event)\">\n    <option>{{ selectedRate }}</option>\n    <option *ngFor=\"let i of currencyArr\" [ngValue]=i>{{ i.code }}</option>\n  </select>\n</div>"

/***/ }),

/***/ "../../../../../src/app/currency-input-select/currency-input-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".currency-input-select {\n  margin: .25em .5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currency-input-select/currency-input-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyInputSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyInputSelectComponent = (function () {
    function CurrencyInputSelectComponent() {
        this.onKeyupFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onSelectFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onFocusFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.inputId = this.name;
    }
    CurrencyInputSelectComponent.prototype.focusEvent = function (e) {
        this.onFocusFn.emit(e);
    };
    CurrencyInputSelectComponent.prototype.onKeyup = function (e) {
        console.log(e);
        this.onKeyupFn.emit(e);
    };
    CurrencyInputSelectComponent.prototype.onSelect = function (e) {
        console.log(e);
        this.onSelectFn.emit(e);
    };
    CurrencyInputSelectComponent.prototype.ngOnChanges = function () {
        this.selectedRate = this.model.selectedRate;
        this.inputValue = this.model.inputValue;
    };
    CurrencyInputSelectComponent.prototype.ngOnInit = function () {
        this.name = "currency-" + this.model.name;
        this.selectedRate = this.model.selectedRate;
        this.inputValue = this.model.inputValue;
        this.allowedRates = this.model.allowedRates;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CurrencyInputSelectComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], CurrencyInputSelectComponent.prototype, "currencyArr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CurrencyInputSelectComponent.prototype, "onKeyupFn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CurrencyInputSelectComponent.prototype, "onSelectFn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CurrencyInputSelectComponent.prototype, "onFocusFn", void 0);
    CurrencyInputSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'currency-input-select',
            template: __webpack_require__("../../../../../src/app/currency-input-select/currency-input-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currency-input-select/currency-input-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyInputSelectComponent);
    return CurrencyInputSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/currency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
    }
    CurrencyService.prototype.getRates = function (base) {
        var apiUrl = "https://api.fixer.io/latest";
        var RATES = [];
        apiUrl = apiUrl + "?base=" + base;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(fetch(apiUrl)
            .then(function (res) { return res.json(); })
            .then(function (data) { return data.rates; }));
    };
    ;
    CurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "../../../../../src/app/currency/currency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"currency-component\">\n\n  <currency-input-select \n    [model]=\"baseObject\" \n    [currencyArr]=\"arrBase\" \n    (onFocusFn)=\"focusEvent($event)\" \n    (onKeyupFn)=\"onKeyupBase($event.target.value)\" \n    (onSelectFn)=\"onSelectBase($event)\"\n  ></currency-input-select>\n  <currency-input-select \n    [model]=\"convertObject\" \n    [currencyArr]=\"arrConvert\" \n    (onFocusFn)=\"focusEvent($event)\" \n    (onKeyupFn)=\"onKeyupConvert($event.target.value)\" \n    (onSelectFn)=\"onSelectConvert($event)\"\n  ></currency-input-select>\n\n  <button class=\"swap-rates\" (click)=\"swapRates([selectedBase, selectedConvert])\">Swap Rates</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".currency-component {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  margin: .5em auto; }\n\n.swap-rates {\n  margin: .5em auto 1em;\n  max-width: 7em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_service__ = __webpack_require__("../../../../../src/app/currency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyComponent = (function () {
    function CurrencyComponent(currencyService) {
        this.currencyService = currencyService;
        this.selectedBase = 'CAD';
        this.selectedConvert = 'USD';
        this.allowedRates = ['CAD', 'USD', 'EUR'];
    }
    CurrencyComponent.prototype.getRates = function () {
        var _this = this;
        this.currencyService.getRates(this.selectedBase)
            .subscribe(function (data) {
            var arr = [];
            Object.entries(data).forEach(function (key, i) {
                arr.push({ 'id': i + 1, 'code': key[0], 'rate': Number(key[1]) });
            });
            _this.arrBase = arr.filter(function (rate) { return rate.code !== _this.selectedConvert; });
            _this.arrConvert = arr.filter(function (rate) { return rate.code !== _this.selectedBase; });
            _this.currencyRate = _this.arrConvert.filter(function (rates) { return rates.code === _this.selectedConvert; })[0].rate;
            console.log(_this.selectedBase + " to " + _this.selectedConvert + " = " + _this.currencyRate);
        });
    };
    CurrencyComponent.prototype.clearInputs = function () {
        this.inputBase = "";
        this.inputConvert = "";
    };
    CurrencyComponent.prototype.focusEvent = function (e) {
        var input = e.target.value;
        switch (true) {
            case (input == 0):
                e.target.value = "";
                break;
            case (input != 0 && input.indexOf('.00') !== -1):
                break;
            case (input != 0 && Number(input) % 1 === 0):
                e.target.value += ".00";
                break;
            default:
                break;
        }
    };
    CurrencyComponent.prototype.swapRates = function (e) {
        var _this = this;
        var inputs = [this.inputBase, this.inputConvert];
        inputs = inputs.map(function (n) { return n ? _this.formatNumber(n) : "0.00"; });
        this.selectedBase = e[1];
        this.selectedConvert = e[0];
        this.inputBase = inputs[1];
        this.inputConvert = inputs[0];
        console.log(inputs);
        this.getRates();
    };
    CurrencyComponent.prototype.onSelectBase = function (base) {
        this.selectedBase = base['code'];
        this.getRates();
        this.clearInputs();
    };
    CurrencyComponent.prototype.onSelectConvert = function (convert) {
        var _this = this;
        this.selectedConvert = convert['code'];
        this.currencyRate = convert['rate'];
        this.arrBase = this.arrBase.filter(function (rate) { return rate.code !== _this.selectedConvert; });
        this.arrConvert = this.arrConvert.filter(function (rate) { return rate.code !== _this.selectedBase; });
        console.log(this.selectedBase + " to " + this.selectedConvert + " = " + this.currencyRate);
        this.clearInputs();
    };
    CurrencyComponent.prototype.onKeyupBase = function (e) {
        e = Math.abs(e);
        this.inputBase = e;
        this.inputConvert = this.formatNumber((this.currencyRate * Number(e)));
    };
    CurrencyComponent.prototype.onKeyupConvert = function (e) {
        e = Math.abs(e);
        this.inputConvert = e;
        this.inputBase = this.formatNumber((e / this.currencyRate));
    };
    CurrencyComponent.prototype.formatNumber = function (num) {
        return (Number(num) * 100 / 100).toFixed(2);
    };
    CurrencyComponent.prototype.ngOnInit = function () {
        this.getRates();
        this.baseObject = {
            name: 'base',
            selectedRate: this.selectedBase,
            inputValue: this.inputBase,
            allowedRates: this.allowedRates,
            onKeyup: this.onKeyupBase,
            onSelect: this.onSelectBase,
        };
        this.convertObject = {
            name: 'convert',
            selectedRate: this.selectedConvert,
            inputValue: this.inputConvert,
            allowedRates: this.allowedRates,
            onKeyup: this.onKeyupConvert,
            onSelect: this.onSelectBase,
        };
    };
    CurrencyComponent.prototype.ngDoCheck = function () {
        this.baseObject = {
            selectedRate: this.selectedBase,
            inputValue: this.inputBase,
            allowedRates: this.allowedRates,
        };
        this.convertObject = {
            name: 'convert',
            selectedRate: this.selectedConvert,
            inputValue: this.inputConvert,
            allowedRates: this.allowedRates,
        };
    };
    CurrencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'currency-component',
            template: __webpack_require__("../../../../../src/app/currency/currency.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currency/currency.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map