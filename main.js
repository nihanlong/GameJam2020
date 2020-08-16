

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Global.ts
var Global = window['Global']; 
var Global;
(function (Global) {
    Global.initWidth = 1280;
    Global.initHeight = 720;
})(Global || (Global = {}));
window["Global"] = Global;

// CONCATENATED MODULE: ./src/frameworks/events/LListener.ts
class LListener {
    constructor() {
        this.CLASS_NAME = "LListener";
        if (this._dispatcher == null) {
            this._dispatcher = new Laya.EventDispatcher();
        }
    }
    static getInstance() {
        if (this._instance == null)
            this._instance = new LListener();
        return this._instance;
    }
    addEventListener(type, listener, thisObject, useCapture = false, priority = 0) {
        this._dispatcher.on(type, thisObject, listener);
    }
    removeEventListener(type, listener, thisObject, useCapture = false) {
        this._dispatcher.off(type, thisObject, listener);
    }
    hasEventListener(type) {
        return this._dispatcher.hasListener(type);
    }
    dispatchEvent(type, data) {
        return this._dispatcher.event(type, data);
    }
}
window["LListener"] = LListener;
__reflect(LListener.prototype,"LListener",[]); 

// CONCATENATED MODULE: ./src/frameworks/events/EventUtils.ts

var EventUtils_EventUtils = window['EventUtils']; 
var EventUtils_EventUtils;
(function (EventUtils) {
    //派发事件
    function dispatchEvent(type, obj = null, bubbles = false, cancelable = false) {
        LListener.getInstance().dispatchEvent(type, obj);
    }
    EventUtils.dispatchEvent = dispatchEvent;
    //监听事件
    function addEventListener(type, thisObject, listener, useCapture = false, priority = 0) {
        LListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
    }
    EventUtils.addEventListener = addEventListener;
    function hasEventListener(type) {
        return LListener.getInstance().hasEventListener(type);
    }
    EventUtils.hasEventListener = hasEventListener;
    function removeEventListener(type, thisObject, listener, useCapture = false, priority = 0) {
        LListener.getInstance().removeEventListener(type, listener, thisObject);
    }
    EventUtils.removeEventListener = removeEventListener;
})(EventUtils_EventUtils || (EventUtils_EventUtils = {}));
window["EventUtils"] = EventUtils_EventUtils;

// CONCATENATED MODULE: ./src/frameworks/mvc/BaseView.ts

var Handler = Laya.Handler;
/*
* name;
*/
class BaseView_BaseView extends fairygui.Window {
    /**
     * 界面初始化
     * @param pkgName 包名
     * @param resName 界面名
     * @param isShowAni 界面打开是否显示动画
     */
    constructor(viewKey, viewName, isShowAni = false) {
        super();
        this._isShowAni = false;
        this.viewKey = viewKey;
        this.viewName = viewName;
        this._isShowAni = isShowAni;
        let pkgname = `res/ui/${this.viewKey}/${this.viewKey}`;
        let iUISource = {
            fileName: "",
            loaded: false,
            load: (callback, thisObj) => {
                fgui.UIPackage.loadPackage(pkgname, Laya.Handler.create(thisObj, callback));
            }
        };
        this.addUISource(iUISource);
    }
    /*界面初始化*/
    onInit() {
        super.onInit();
        this.parseUi();
    }
    //解析ui
    parseUi() {
        this.contentPane = fairygui.UIPackage.createObject(this.viewKey, this.viewName).asCom;
        for (var k of this.contentPane._children) {
            if (k.name == "item_panel") {
                for (var n of k["_children"]) {
                    this[n.name] = n;
                }
            }
            else {
                this[k.name] = k;
            }
        }
        for (var i of this.contentPane._controllers) {
            this[i.name] = i;
        }
        for (var j of this.contentPane._transitions) {
            this[j.name] = j;
        }
        this.setPivot(0.5, 0.5);
    }
    doShowAnimation() {
        if (this._isShowAni) {
            this.setScale(0.3, 0.3);
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 200, Laya.Ease.backInOut, Handler.create(this, this.doShowAnimationComplete));
        }
        else {
            this.doShowAnimationComplete();
        }
    }
    doShowAnimationComplete() {
        this.onShown();
        this.addDecoratorsEvent();
    }
    dispacheDataEvent(type, data = null) {
        EventUtils_EventUtils.dispatchEvent(type, data);
    }
    addDecoratorsEvent() {
        let _decorators = this._decorators || {};
        for (let type in _decorators) {
            let ins = _decorators[type];
            for (let interest of ins) {
                //onClick是点击事件
                if ("onClick" == type) {
                    this[interest.component] && this[interest.component].onClick(this, interest.handler, [interest.data || interest.component]);
                }
                else {
                    this.addDataEvent(type, this, interest.handler);
                }
            }
        }
        //临时处理关闭按钮事件
        if (this["btn_close"] && this["handleClose"]) {
            this["btn_close"].onClick(this, this["handleClose"]);
        }
    }
    removeDecoratorsEvent() {
        let _decorators = this._decorators || {};
        for (let type in _decorators) {
            let ins = _decorators[type];
            for (let interest of ins) {
                //onClick是按钮点击事件
                if ("onClick" == type) {
                    this[interest.component] && this[interest.component].offClick(this, interest.handler, [interest.component]);
                }
                else {
                    this.removeDataEvent(type, this, interest.handler);
                }
            }
        }
        //临时处理关闭按钮事件
        if (this["btn_close"] && this["handleClose"]) {
            this["btn_close"].offClick(this, this["handleClose"]);
        }
    }
    addDataEvent(type, thisObject, listener) {
        EventUtils_EventUtils.addEventListener(type, thisObject, listener);
    }
    removeDataEvent(type, thisObject, listener) {
        EventUtils_EventUtils.removeEventListener(type, thisObject, listener);
    }
    onHide() {
        this.destroy();
    }
    /* 销毁*/
    destroy() {
        this.removeDecoratorsEvent();
        Laya.Tween.clearTween(this);
        this.dispose();
    }
}
window["BaseView"] = BaseView_BaseView;
__reflect(BaseView_BaseView.prototype,"BaseView",[]); 

// CONCATENATED MODULE: ./src/frameworks/mvc/Decorator.ts
/**
 * 事件监听装饰器
 * 只会在init时，添加到事件监听列表
 * 在destory时，从事件监听列表中移除
 * @param {string} event                        关注的事件
 */
function decoratorEvent(event) {
    return function (target, key, value) {
        let _decorators = target._decorators;
        if (!_decorators) {
            target._decorators = _decorators = {};
        }
        let ins = _decorators[event];
        if (!ins) {
            ins = _decorators[event] = [];
        }
        ins.push({ handler: value.value });
    };
}
window["decoratorEvent"] = decoratorEvent;
/**
 * 点击事件装饰器
 * 只会在init时，添加到事件监听列表
 * 在destory时，从事件监听列表中移除
 * @param {string} component                    组件的名字
 */
function decoratorClick(component, data) {
    return function (target, key, value) {
        let _decorators = target._decorators;
        if (!_decorators) {
            target._decorators = _decorators = {};
        }
        let ins = _decorators["onClick"];
        if (!ins) {
            ins = _decorators["onClick"] = [];
        }
        ins.push({ handler: value.value, data, component });
    };
}
window["decoratorClick"] = decoratorClick;
var d_event = decoratorEvent;
var d_click = decoratorClick;

// CONCATENATED MODULE: ./src/frameworks/mvc/ChildBaseView.ts

class ChildBaseView_ChildBaseView extends fgui.GComponent {
    constructor() {
        super(...arguments);
        /** 全局事件容器*/
        this._globalEventdict = {};
    }
    constructFromXML(xml) {
        super.constructFromXML(xml);
        for (var k of this._children) {
            this[k.name] = k;
        }
        for (var i of this._controllers) {
            this[i.name] = i;
        }
        for (var j of this._transitions) {
            this[j.name] = j;
        }
        this.onInit();
    }
    onInit() {
        this.addDecoratorEvent();
    }
    dispacheDataEvent(type, data = null) {
        EventUtils_EventUtils.dispatchEvent(type, data);
    }
    addDecoratorEvent() {
        let _decorators = this._decorators || {};
        for (let type in _decorators) {
            let ins = _decorators[type];
            for (let decorator of ins) {
                //onClick是点击事件
                if ("onClick" == type) {
                    this[decorator.component] && this[decorator.component].onClick(this, decorator.handler, [decorator.data || decorator.component]);
                }
                else {
                    this.addDataEvent(type, this, decorator.handler);
                }
            }
        }
    }
    /**注册全局事件 */
    addDataEvent(type, thisObject, listener) {
        if (!this._globalEventdict.hasOwnProperty(type)) {
            EventUtils_EventUtils.addEventListener(type, thisObject, listener);
        }
    }
    /**移除全局事件*/
    removeDataEvent(type, thisObject, listener) {
        if (this._globalEventdict[type]) {
            EventUtils_EventUtils.removeEventListener(type, thisObject, listener);
            delete this._globalEventdict[type];
        }
    }
    removeDecoratorEvent() {
        let _decorators = this._decorators || {};
        for (let type in _decorators) {
            let ins = _decorators[type];
            for (let decorator of ins) {
                //onClick是按钮点击事件
                if ("onClick" == type) {
                    this[decorator.component] && this[decorator.component].offClick(this, decorator.handler);
                }
                else {
                    this.removeDataEvent(type, this, decorator.handler);
                }
            }
        }
    }
    dispose() {
        this.removeDecoratorEvent();
        this._displayObject && super.dispose();
    }
}
window["ChildBaseView"] = ChildBaseView_ChildBaseView;
__reflect(ChildBaseView_ChildBaseView.prototype,"ChildBaseView",[]); 

// CONCATENATED MODULE: ./src/frameworks/mvc/PageList.ts
class PageList extends fairygui.GComponent {
    /**
     *
     * @param list
     * @param refreshFun 刷新调用的方法
     */
    constructor(list, refreshFun) {
        super();
        this.list = list;
        this.refreshFun = refreshFun;
        this.list.setVirtual();
        this.listHander = Laya.Handler.create(this, this.listItemRender, null, false);
        this.list.itemRenderer = this.listHander;
    }
    listItemRender(index, _item) {
        if (this._data && this._data[index]) {
            _item && _item.updateVO && _item.updateVO(this._data[index]);
        }
    }
    /**
     * list 赋值
     * @param {T[]} [data]
     */
    setData(data) {
        this._data = data;
        if (!data || !data.length) {
            this.dispose();
            this.list.numItems = 0;
            return;
        }
        this.list.numItems = data.length;
    }
    dispose() {
        this._data = undefined;
    }
}
window["PageList"] = PageList;
__reflect(PageList.prototype,"PageList",[]); 

// CONCATENATED MODULE: ./src/module/poker/ItemPoker.ts


class ItemPoker_ItemPoker extends ChildBaseView_ChildBaseView {
    onInit() {
        super.onInit();
        this.listBuff = new PageList(this.list_buff);
    }
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
        this.c_level.selectedIndex = vo.level - 1;
        let arr = [];
        if (vo.as)
            arr.push({ type: 1, level: vo.level, value: vo.as });
        if (vo.ms)
            arr.push({ type: 2, level: vo.level, value: vo.ms });
        this.listBuff.setData(arr);
    }
}
ItemPoker_ItemPoker.url = "ui://1xwgtad0q7052";
window["ItemPoker"] = ItemPoker_ItemPoker;
__reflect(ItemPoker_ItemPoker.prototype,"ItemPoker",[]); 

// CONCATENATED MODULE: ./src/module/GameEvent.ts
var GameEvent = window['GameEvent']; 
var GameEvent;
(function (GameEvent) {
    GameEvent.UpdateList = "UpdateList";
})(GameEvent || (GameEvent = {}));
window["GameEvent"] = GameEvent;

// CONCATENATED MODULE: ./src/DataConfig.ts
var DataConfig = window['DataConfig']; 
var DataConfig;
(function (DataConfig) {
    /**初始金币 */
    DataConfig.initialGold = 30;
    /**最大关卡数 */
    DataConfig.maxLevel = 1;
    /**默认cd帧数（60帧1秒） */
    DataConfig.defaultCD = 100;
    /**不同等级卡牌加成属性 */
    DataConfig.buffMap = {
        1: 10,
        2: 20,
        3: 30
    };
    /**商店升级价格 */
    DataConfig.shopUpgradeMap = {
        1: 10
    };
    /**as是攻速，单位是帧，cd时间为（defaultCD-as）/60 */
    /**ms是移速，单位是像素，每次左右移动ms像素 */
    /**猫初始属性 */
    DataConfig.weapon1 = {
        type: 1,
        as: 30,
        ms: 50
    };
    /**狗初始属性 */
    DataConfig.weapon2 = {
        type: 2,
        as: 20,
        ms: 100
    };
    /**哈士奇初始属性 */
    DataConfig.weapon3 = {
        type: 3,
        as: 10,
        ms: 150
    };
})(DataConfig || (DataConfig = {}));
window["DataConfig"] = DataConfig;

// CONCATENATED MODULE: ./src/module/poker/PokerManager.ts



class PokerManager_PokerManager {
    constructor() {
        this.index = 1;
        this.shopLevel = 1;
        /**购买所需金币 */
        this.buyGold = 3;
        /**刷新所需金币 */
        this.refreshGold = 1;
        this.selectPokerVO = [];
        this.resetInfo();
    }
    /**生成牌 */
    generatePoker() {
        let arr = [];
        for (let i = 0; i < 2 + this.shopLevel; i++) {
            let poker = this.generateSinglePoker();
            arr.push(poker);
        }
        this.selectPokerVO = arr;
    }
    generateSinglePoker() {
        let id = this.index++;
        let type = Math.ceil(Math.random() * 3);
        let level = Math.ceil(Math.random() * this.shopLevel);
        let as = 0;
        let ms = 0;
        let value = DataConfig.buffMap[level];
        if (Math.random() > 0.5) {
            as = value;
        }
        else {
            ms = value;
        }
        let vo = { id, type, level, as, ms };
        return vo;
    }
    onUpgrade() {
        let value = DataConfig.shopUpgradeMap[this.shopLevel];
        if (value && this.curGold >= value) {
            this.curGold -= value;
            this.shopLevel++;
        }
    }
    /**买了一张牌 */
    onBuyPoker(e) {
        if (this.curGold >= this.buyGold) {
            this.curGold -= this.buyGold;
            this.onAddPoker(e);
            return true;
        }
        console.log("金币不足");
        return false;
    }
    /**将买的牌加到手牌 */
    onAddPoker(e) {
        let vo = e.vo;
        for (let i of this.selectPokerVO) {
            if (i.id == vo.id) {
                this.removeVO(this.selectPokerVO, i);
            }
        }
        let weapon = this["weapon" + vo.type];
        weapon.as += vo.as;
        weapon.ms += vo.ms;
        this.dispatchEvent(GameEvent.UpdateList);
    }
    /**刷新牌 */
    onRefreshPoker() {
        if (this.curGold >= this.refreshGold) {
            this.curGold -= this.refreshGold;
            return true;
        }
        console.log("金币不足");
        return false;
    }
    removeVO(arr, vo) {
        let index = arr.indexOf(vo);
        arr.splice(index, 1);
    }
    resetInfo() {
        this.curGold = DataConfig.initialGold;
        this.selectPokerVO = [];
        this.initWeapon();
    }
    initWeapon() {
        this.weapon1 = DataConfig.weapon1;
        this.weapon2 = DataConfig.weapon2;
        this.weapon3 = DataConfig.weapon3;
    }
    /**抛事件 */
    dispatchEvent(type, data = null) {
        EventUtils_EventUtils.dispatchEvent(type, data);
    }
}
window["PokerManager"] = PokerManager_PokerManager;
__reflect(PokerManager_PokerManager.prototype,"PokerManager",[]); 

// CONCATENATED MODULE: ./src/module/play/ItemRole.ts

class ItemRole_ItemRole extends ChildBaseView_ChildBaseView {
    updateVO(vo) {
        this.vo = vo;
    }
    updateHP(value) {
        this.txt_hp.text = value + "";
    }
}
ItemRole_ItemRole.url = "ui://30r1uzq1royc4";
window["ItemRole"] = ItemRole_ItemRole;
__reflect(ItemRole_ItemRole.prototype,"ItemRole",[]); 

// CONCATENATED MODULE: ./src/module/play/ItemWeapon.ts


class ItemWeapon_ItemWeapon extends ChildBaseView_ChildBaseView {
    constructor() {
        super(...arguments);
        this.isCD = false;
    }
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
    }
    set selected(selected) {
        if (selected) {
            //创建一个发光滤镜
            let filter = new Laya.GlowFilter("#ffff00", 10, 0, 0);
            //设置滤镜集合为发光滤镜
            this.filters = [filter];
        }
        else {
            this.filters = [];
        }
    }
    moveToLeft() {
        this.x -= this.vo.ms / 10;
        this.scaleX = 1;
    }
    moveToRight() {
        this.x += this.vo.ms / 10;
        this.scaleX = -1;
    }
    addCD() {
        this.isCD = true;
        let time = DataConfig.defaultCD / this.vo.as;
        fgui.GTween.to(1, 0, time).setTarget(this.img_cd, "scaleY").onComplete(() => {
            this.isCD = false;
        });
    }
}
ItemWeapon_ItemWeapon.url = "ui://30r1uzq1royc1";
window["ItemWeapon"] = ItemWeapon_ItemWeapon;
__reflect(ItemWeapon_ItemWeapon.prototype,"ItemWeapon",[]); 

// CONCATENATED MODULE: ./src/module/play/ItemBullte.ts


class ItemBullte_ItemBullte extends ChildBaseView_ChildBaseView {
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
    }
    onUpdate() {
        this.y -= 1;
        if (this.y + this.height <= 0) {
            getSinglon(GameControl_GameControl).removeBullte(this);
            this.dispose();
        }
    }
}
ItemBullte_ItemBullte.url = "ui://30r1uzq1royc3";
window["ItemBullte"] = ItemBullte_ItemBullte;
__reflect(ItemBullte_ItemBullte.prototype,"ItemBullte",[]); 

// CONCATENATED MODULE: ./src/module/play/ItemMonster.ts


class ItemMonster_ItemMonster extends ChildBaseView_ChildBaseView {
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
    }
    onUpdate() {
        this.y += 1;
        if (this.y > 500) {
            getSinglon(GameControl_GameControl).onInjured(30);
            getSinglon(GameControl_GameControl).removeMonster(this);
            this.dispose();
        }
    }
}
ItemMonster_ItemMonster.url = "ui://30r1uzq1royc2";
window["ItemMonster"] = ItemMonster_ItemMonster;
__reflect(ItemMonster_ItemMonster.prototype,"ItemMonster",[]); 

// CONCATENATED MODULE: ./src/managers/SoundssManager.ts
var SoundssManager_Handler = Laya.Handler;
window["Handler"] = SoundssManager_Handler;
var SoundManager = Laya.SoundManager;
window["SoundManager"] = SoundManager;
class SoundssManager {
    init() {
    }
    setMute(muted) {
        SoundManager.muted = muted;
    }
    /**播放背景音乐 */
    onPlayMusic() {
        SoundManager.playMusic("res/sound/background_0.mp3", 0);
    }
    /**播放音效 */
    onPlaySound(name) {
        SoundManager.playSound("res/sound/" + name + ".mp3", 1);
    }
}
window["SoundssManager"] = SoundssManager;
__reflect(SoundssManager.prototype,"SoundssManager",[]); 

// CONCATENATED MODULE: ./src/module/result/ResultView.ts



class ResultView_ResultView extends BaseView_BaseView {
    constructor() {
        super("result", "resultview", true);
    }
    onInit() {
        super.onInit();
    }
    onShown() {
        this.c_type.selectedIndex = getSinglon(GameControl_GameControl).isWin ? 0 : 2;
        if (getSinglon(GameControl_GameControl).isWin) {
            getSinglon(SoundssManager).onPlaySound("success");
        }
        this.onClick(this, this.click);
    }
    click() {
        console.log("click");
    }
    onHide() {
        this.offClick(this, this.click);
        this.c_type.selectedIndex = 3;
        super.onHide();
    }
}
window["ResultView"] = ResultView_ResultView;
__reflect(ResultView_ResultView.prototype,"ResultView",[]); 

// CONCATENATED MODULE: ./src/module/control/GameControl.ts






class GameControl_GameControl {
    constructor() {
        this.MAX_WEAPON_COUNT = 3;
        this.GAMT_TIME = 60 * 100;
        /**当前关卡 */
        this.curLevel = 1;
        this.startTime = 0;
        this.hasInit = false;
        /**间隔多少毫秒创建一个下跌的容器*/
        this.createBoxInterval = 3000;
        /**开始时间*/
        this._time = 0;
        this.bulletArr = [];
        this.monsterArr = [];
        this._curWeaponIndex = 1;
        this._hp = 0;
        /**
        * 碰撞检测
        * @param {Sprite Object} sprite2
        */
        this.hitTest = (bullet, monster) => {
            let bx = bullet.x;
            let by = bullet.y;
            let bw = bullet.width;
            let bh = bullet.height;
            let mx = monster.x;
            let my = monster.y;
            let mw = monster.width;
            let mh = monster.height;
            return this.cross(bx, bx + bw, by, by + bh, mx, mx + mw, my, my + mh);
        };
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
    }
    get weapon() {
        return this["weapon" + this.curWeaponIndex];
        ;
    }
    set curWeaponIndex(value) {
        this.weapon.selected = false;
        this._curWeaponIndex = value;
        this.weapon.selected = true;
    }
    get curWeaponIndex() {
        return this._curWeaponIndex;
    }
    set hp(value) {
        this._hp = value;
        this.role.updateHP(value);
    }
    get hp() {
        return this._hp;
    }
    onKeyDown(e) {
        var codeNum = e.keyCode;
        switch (codeNum) {
            case 32: //Space
                this.onAttack();
                break;
            case 37: //Left
                this.moveToLeft();
                break;
            case 38: //Up
                this.changePrevWeapon();
                break;
            case 39: //Right
                this.moveToRight();
                break;
            case 40: //Down
                this.changeNextWeapon();
                break;
            default:
                break;
        }
    }
    startGame() {
        this.initInfo();
        Laya.timer.frameLoop(1, this, this.onUpdate);
        let pokerManager = getSinglon(PokerManager_PokerManager);
        this.weapon1.updateVO(pokerManager.weapon1);
        this.weapon2.updateVO(pokerManager.weapon2);
        this.weapon3.updateVO(pokerManager.weapon3);
    }
    initInfo() {
        if (this.hasInit)
            return;
        this.playView = getSinglon(PlayView_PlayView);
        this.role = this.playView.role;
        this.weapon1 = this.playView.weapon1;
        this.weapon2 = this.playView.weapon2;
        this.weapon3 = this.playView.weapon3;
        this.weapon1.selected = true;
        this.hp = 1;
    }
    onUpdate() {
        this.startTime++;
        let percent = this.startTime / this.GAMT_TIME;
        this.playView.progress.update(percent * 100);
        this.role.x += this.playView.progress.width / this.GAMT_TIME;
        if (percent >= 1) {
            this.onSuccess();
            this.stopGame();
            return;
        }
        //每间隔一段时间创建一个盒子
        let now = Date.now();
        if (now - this._time > this.createBoxInterval) {
            this._time = now;
            this.createBox();
        }
        this.updateView();
        this.checkHit();
    }
    createBox() {
        let monster = fgui.UIPackage.createObjectFromURL(ItemMonster_ItemMonster.url);
        monster.x = Math.random() * 1000 + 100;
        monster.y = -monster.height;
        let vo = { type: Math.ceil(Math.random() * 2) };
        monster.updateVO(vo);
        this.monsterArr.push(monster);
        this.playView.addChild(monster);
    }
    updateView() {
        for (let i of this.playView._children) {
            if (i["onUpdate"]) {
                i["onUpdate"]();
            }
        }
    }
    checkHit() {
        for (let i of this.bulletArr) {
            for (let j of this.monsterArr) {
                if (this.hitTest(i, j)) {
                    // 不是全能且类型不同，只清除子弹
                    if (i.vo.type != 3 && i.vo.type != j.vo.type) {
                        this.bulletArr.remove(i);
                        i.dispose();
                    }
                    else {
                        getSinglon(SoundssManager).onPlaySound("destroy");
                        this.bulletArr.remove(i);
                        this.monsterArr.remove(j);
                        i.dispose();
                        j.dispose();
                    }
                }
            }
        }
    }
    cross(startx, endx, starty, endy, skinstartx, skinendx, skinstarty, skinendy) {
        let boolx = ((skinstartx > startx && skinstartx < endx) || (skinendx > startx && skinendx < endx)) || (startx > skinstartx && startx < skinendx && endx > skinstartx && endx < skinendx);
        let booly = ((skinstarty > starty && skinstarty < endy) || (skinendy > starty && skinendy < endy)) || (starty > skinstarty && starty < skinendy && endy > skinstarty && endy < skinendy);
        return boolx && booly;
    }
    changePrevWeapon() {
        this.curWeaponIndex = (this.curWeaponIndex - 1) || this.MAX_WEAPON_COUNT;
    }
    changeNextWeapon() {
        this.curWeaponIndex = ((this.curWeaponIndex + 1) % (this.MAX_WEAPON_COUNT + 1)) || 1;
    }
    moveToLeft() {
        this.weapon.moveToLeft();
    }
    moveToRight() {
        this.weapon.moveToRight();
    }
    onAttack() {
        if (this.weapon.isCD)
            return;
        let bullet = fgui.UIPackage.createObjectFromURL(ItemBullte_ItemBullte.url);
        bullet.x = this.weapon.x + this.weapon.width / 2 - bullet.width / 2;
        bullet.y = this.weapon.y - bullet.height;
        // let vo = { type: this.weapon.vo.type };
        let vo = { type: this.curWeaponIndex };
        bullet.updateVO(vo);
        this.bulletArr.push(bullet);
        this.playView.addChild(bullet);
        this.weapon.addCD();
    }
    /**受伤 */
    onInjured(value) {
        this.hp -= value;
        if (this.hp < 0) {
            this.onFaild();
            this.stopGame();
        }
    }
    removeBullte(item) {
        this.bulletArr.remove(item);
    }
    removeMonster(item) {
        this.monsterArr.remove(item);
    }
    onSuccess() {
        this.isWin = true;
        getSinglon(ResultView_ResultView).show();
    }
    onFaild() {
        this.isWin = false;
        getSinglon(ResultView_ResultView).show();
    }
    stopGame() {
        Laya.timer.clearAll(this);
        this.curWeaponIndex = 1;
        this.createBoxInterval = 1000;
        this.startTime = 0;
    }
}
window["GameControl"] = GameControl_GameControl;
__reflect(GameControl_GameControl.prototype,"GameControl",[]); 

// CONCATENATED MODULE: ./src/module/play/PlayView.ts






class PlayView_PlayView extends BaseView_BaseView {
    constructor() {
        super("play", "playview");
        fgui.UIObjectFactory.setPackageItemExtension(ItemRole_ItemRole.url, ItemRole_ItemRole);
        fgui.UIObjectFactory.setPackageItemExtension(ItemWeapon_ItemWeapon.url, ItemWeapon_ItemWeapon);
        fgui.UIObjectFactory.setPackageItemExtension(ItemBullte_ItemBullte.url, ItemBullte_ItemBullte);
        fgui.UIObjectFactory.setPackageItemExtension(ItemMonster_ItemMonster.url, ItemMonster_ItemMonster);
    }
    onInit() {
        super.onInit();
    }
    onShown() {
        getSinglon(GameControl_GameControl).startGame();
    }
    onHide() {
        super.onHide();
    }
}
window["PlayView"] = PlayView_PlayView;
__reflect(PlayView_PlayView.prototype,"PlayView",[]); 

// CONCATENATED MODULE: ./src/module/poker/ItemBuff.ts

class ItemBuff_ItemBuff extends ChildBaseView_ChildBaseView {
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
        this.c_level.selectedIndex = vo.level - 1;
        this.txt_buff.setVar("value", vo.value + "").flushVars();
    }
}
ItemBuff_ItemBuff.url = "ui://1xwgtad0nwnn4";
window["ItemBuff"] = ItemBuff_ItemBuff;
__reflect(ItemBuff_ItemBuff.prototype,"ItemBuff",[]); 

// CONCATENATED MODULE: ./src/module/poker/ItemWeaponPoker.ts


class ItemWeaponPoker_ItemWeaponPoker extends ChildBaseView_ChildBaseView {
    onInit() {
        super.onInit();
        this.listBuff = new PageList(this.list_buff);
    }
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
        let arr = [];
        if (vo.as)
            arr.push({ type: 1, level: 2, value: vo.as });
        if (vo.ms)
            arr.push({ type: 2, level: 2, value: vo.ms });
        this.listBuff.setData(arr);
    }
}
ItemWeaponPoker_ItemWeaponPoker.url = "ui://1xwgtad0nwnn3";
window["ItemWeaponPoker"] = ItemWeaponPoker_ItemWeaponPoker;
__reflect(ItemWeaponPoker_ItemWeaponPoker.prototype,"ItemWeaponPoker",[]); 

// CONCATENATED MODULE: ./src/module/poker/ItemBuff2.ts

class ItemBuff2_ItemBuff2 extends ChildBaseView_ChildBaseView {
    updateVO(vo) {
        this.vo = vo;
        this.c_type.selectedIndex = vo.type - 1;
        this.c_level.selectedIndex = vo.level - 1;
        this.txt_buff.setVar("value", vo.value + "").flushVars();
    }
}
ItemBuff2_ItemBuff2.url = "ui://1xwgtad0nwnn5";
window["ItemBuff2"] = ItemBuff2_ItemBuff2;
__reflect(ItemBuff2_ItemBuff2.prototype,"ItemBuff2",[]); 

// CONCATENATED MODULE: ./src/module/poker/PokerView.ts










class PokerView_PokerView extends BaseView_BaseView {
    constructor() {
        super("poker", "pokerview");
        fgui.UIObjectFactory.setPackageItemExtension(ItemPoker_ItemPoker.url, ItemPoker_ItemPoker);
        fgui.UIObjectFactory.setPackageItemExtension(ItemBuff_ItemBuff.url, ItemBuff_ItemBuff);
        fgui.UIObjectFactory.setPackageItemExtension(ItemBuff2_ItemBuff2.url, ItemBuff2_ItemBuff2);
        fgui.UIObjectFactory.setPackageItemExtension(ItemWeaponPoker_ItemWeaponPoker.url, ItemWeaponPoker_ItemWeaponPoker);
    }
    onInit() {
        super.onInit();
        this.listSelect = new PageList(this.list_select);
        this.list_select.on(fairygui.Events.CLICK_ITEM, this, this.selectPoker);
    }
    onShown() {
        this.showSelectPoker();
        this.showGold();
        this.updateList();
    }
    onRefresh() {
        // 扣金币
        if (!getSinglon(PokerManager_PokerManager).onRefreshPoker())
            return;
        this.showGold();
        this.showSelectPoker();
    }
    showSelectPoker() {
        getSinglon(PokerManager_PokerManager).generatePoker();
        this.listSelect.setData(getSinglon(PokerManager_PokerManager).selectPokerVO);
    }
    /**选中牌 */
    selectPoker(e) {
        let manager = getSinglon(PokerManager_PokerManager);
        // 扣金币
        if (!manager.onBuyPoker(e))
            return;
        this.showGold();
    }
    updateList() {
        let manager = getSinglon(PokerManager_PokerManager);
        this.listSelect.setData(manager.selectPokerVO);
        this.weapon1.updateVO(manager.weapon1);
        this.weapon2.updateVO(manager.weapon2);
        this.weapon3.updateVO(manager.weapon3);
    }
    showGold() {
        this.txt_gold.setVar("value", getSinglon(PokerManager_PokerManager).curGold + "").flushVars();
    }
    onUpgrade() {
        getSinglon(PokerManager_PokerManager).onUpgrade();
        this.showGold();
    }
    onStart() {
        getSinglon(PokerView_PokerView).hide();
        getSinglon(PlayView_PlayView).show();
    }
    onHide() {
        super.onHide();
    }
}
__decorate([
    d_click('btn_refresh')
], PokerView_PokerView.prototype, "onRefresh", null);
__decorate([
    d_event(GameEvent.UpdateList)
], PokerView_PokerView.prototype, "updateList", null);
__decorate([
    d_click("btn_upgrade")
], PokerView_PokerView.prototype, "onUpgrade", null);
__decorate([
    d_click("btn_start")
], PokerView_PokerView.prototype, "onStart", null);
window["PokerView"] = PokerView_PokerView;
__reflect(PokerView_PokerView.prototype,"PokerView",[]); 

// CONCATENATED MODULE: ./src/module/main/MainView.ts



class MainView_MainView extends BaseView_BaseView {
    constructor() {
        super("main", "mainview");
    }
    onInit() {
        super.onInit();
    }
    onShown() {
    }
    onStart() {
        getSinglon(PokerView_PokerView).show();
        getSinglon(MainView_MainView).hide();
    }
    onHide() {
        super.onHide();
    }
}
__decorate([
    d_click("btn_start")
], MainView_MainView.prototype, "onStart", null);
window["MainView"] = MainView_MainView;
__reflect(MainView_MainView.prototype,"MainView",[]); 

// CONCATENATED MODULE: ./src/module/CacheKey.ts
var CacheKey = window['CacheKey']; 
var CacheKey;
(function (CacheKey) {
    CacheKey.Data = "data";
    CacheKey.Max_Score = "score";
})(CacheKey || (CacheKey = {}));
window["CacheKey"] = CacheKey;

// CONCATENATED MODULE: ./src/managers/CacheManager.ts

/*
* 本地数据缓存管理器
*/
class CacheManager_CacheManager extends Laya.EventDispatcher {
    constructor() {
        super(...arguments);
        this.gameData = {};
        this.addInfo = (key, value) => {
            this.gameData[key] = value;
            this.saveSvrData();
        };
        this.getInfo = (key) => {
            return this.gameData[key];
        };
    }
    init() {
    }
    /**
     * 添加缓存数据
     */
    saveSvrData() {
        Laya.LocalStorage.setJSON(CacheKey.Data, this.gameData);
    }
    /**
     * 获取缓存数据
     */
    getSvrData() {
        this.gameData = Laya.LocalStorage.getJSON(CacheKey.Data) || {};
    }
}
window["CacheManager"] = CacheManager_CacheManager;
__reflect(CacheManager_CacheManager.prototype,"CacheManager",[]); 
var getGameData = getSinglon(CacheManager_CacheManager).getInfo;
var saveGameData = getSinglon(CacheManager_CacheManager).addInfo;

// CONCATENATED MODULE: ./src/GameMain.ts



class GameMain_GameMain {
    constructor() {
        this.uiArr = ["play", "poker", "result"];
        this.loadCount = 0;
    }
    initGame() {
        getSinglon(CacheManager_CacheManager).getSvrData();
        this.initInfo();
    }
    initInfo() {
        getSinglon(SoundssManager).onPlayMusic();
        // getSinglon(GameControl).startGame();
        // getSinglon(PlayView).show();
        // getSinglon(MainView).show();
        // getSinglon(PokerView).show();
        for (let i of this.uiArr) {
            let pkgname = `res/ui/${i}/${i}`;
            fgui.UIPackage.loadPackage(pkgname, Laya.Handler.create(this, this.onLoadComplete));
        }
    }
    onLoadComplete() {
        this.loadCount++;
        if (this.loadCount >= this.uiArr.length) {
            getSinglon(MainView_MainView).show();
        }
    }
}
window["GameMain"] = GameMain_GameMain;
__reflect(GameMain_GameMain.prototype,"GameMain",[]); 

// CONCATENATED MODULE: ./src/managers/GameLayerManager.ts
/*
* name;
*/
class GameLayerManager {
    constructor() {
        /**
         * 背景层
         */
        this.background = new fairygui.GComponent();
        /**主场景 ui层 */
        this.mainuiLyaer = new fairygui.GComponent();
        /**
         * ui层
         */
        this.uiLayer = new fairygui.GComponent();
        /**
         * 弹窗层 如 设置之类的
         */
        this.topLayer = new fairygui.GComponent();
        /**
         * 特效层
         */
        this.effectLayer = new fairygui.GComponent();
        /**
         * 引导层
         */
        this.guideLayer = new fairygui.GComponent();
        /**
         * 最顶层
         */
        this.maxTopLayer = new fairygui.GComponent();
    }
    //初始化层级
    initlayer() {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.GRoot.inst.addChild(this.background);
        fairygui.GRoot.inst.addChild(this.mainuiLyaer);
        fairygui.GRoot.inst.addChild(this.uiLayer);
        fairygui.GRoot.inst.addChild(this.topLayer);
        fairygui.GRoot.inst.addChild(this.guideLayer);
        fairygui.GRoot.inst.addChild(this.maxTopLayer);
    }
}
window["GameLayerManager"] = GameLayerManager;
__reflect(GameLayerManager.prototype,"GameLayerManager",[]); 

// CONCATENATED MODULE: ./src/Main.ts
__webpack_require__(0);
var Stage = Laya.Stage;



class Main_Main {
    constructor() {
        Laya.init(Global.initWidth, Global.initHeight, Laya.WebGL);
        Laya.alertGlobalError(true);
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Stage.ALIGN_LEFT;
        Laya.stage.alignV = Stage.ALIGN_TOP;
        Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        Laya.stage.frameRate = Stage.FRAME_FAST;
        Laya.stage.bgColor = "#FFFFFF";
        this.initGame();
    }
    initGame() {
        fairygui.UIConfig.packageFileExtension = "bin";
        fairygui.UIConfig.textureLinearSampling = true;
        fairygui.UIConfig.defaultFont = "黑体";
        fairygui.UIConfig.buttonSound = "ui://main/fall";
        ;
        // fairygui.UIConfig.modalLayerColor = "rgba(0,0,0,0.8)";
        getSinglon(GameLayerManager).initlayer();
        getSinglon(GameMain_GameMain).initGame();
    }
}
window["Main"] = Main_Main;
__reflect(Main_Main.prototype,"Main",[]); 
//激活启动类
new Main_Main();


/***/ })
/******/ ]);