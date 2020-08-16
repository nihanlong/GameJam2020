(function () {
    'use strict';

    var Global;
    (function (Global) {
        Global.initWidth = 1280;
        Global.initHeight = 720;
    })(Global || (Global = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

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

    var EventUtils;
    (function (EventUtils) {
        function dispatchEvent(type, obj = null, bubbles = false, cancelable = false) {
            LListener.getInstance().dispatchEvent(type, obj);
        }
        EventUtils.dispatchEvent = dispatchEvent;
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
    })(EventUtils || (EventUtils = {}));

    var Handler = Laya.Handler;
    class BaseView extends fairygui.Window {
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
        onInit() {
            super.onInit();
            this.parseUi();
        }
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
            EventUtils.dispatchEvent(type, data);
        }
        addDecoratorsEvent() {
            let _decorators = this._decorators || {};
            for (let type in _decorators) {
                let ins = _decorators[type];
                for (let interest of ins) {
                    if ("onClick" == type) {
                        if (interest.component == "") {
                            this.onClick(this, interest.handler, [interest.data || interest.component]);
                        }
                        else {
                            this[interest.component] && this[interest.component].onClick(this, interest.handler, [interest.data || interest.component]);
                        }
                    }
                    else {
                        this.addDataEvent(type, this, interest.handler);
                    }
                }
            }
            if (this["btn_close"] && this["handleClose"]) {
                this["btn_close"].onClick(this, this["handleClose"]);
            }
        }
        removeDecoratorsEvent() {
            let _decorators = this._decorators || {};
            for (let type in _decorators) {
                let ins = _decorators[type];
                for (let interest of ins) {
                    if ("onClick" == type) {
                        this[interest.component] && this[interest.component].offClick(this, interest.handler, [interest.component]);
                    }
                    else {
                        this.removeDataEvent(type, this, interest.handler);
                    }
                }
            }
            if (this["btn_close"] && this["handleClose"]) {
                this["btn_close"].offClick(this, this["handleClose"]);
            }
        }
        addDataEvent(type, thisObject, listener) {
            EventUtils.addEventListener(type, thisObject, listener);
        }
        removeDataEvent(type, thisObject, listener) {
            EventUtils.removeEventListener(type, thisObject, listener);
        }
        onHide() {
            this.destroy();
        }
        destroy() {
            this.removeDecoratorsEvent();
            Laya.Tween.clearTween(this);
            this.dispose();
        }
    }

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
    var d_event = decoratorEvent;
    var d_click = decoratorClick;

    class ChildBaseView extends fgui.GComponent {
        constructor() {
            super(...arguments);
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
            EventUtils.dispatchEvent(type, data);
        }
        addDecoratorEvent() {
            let _decorators = this._decorators || {};
            for (let type in _decorators) {
                let ins = _decorators[type];
                for (let decorator of ins) {
                    if ("onClick" == type) {
                        this[decorator.component] && this[decorator.component].onClick(this, decorator.handler, [decorator.data || decorator.component]);
                    }
                    else {
                        this.addDataEvent(type, this, decorator.handler);
                    }
                }
            }
        }
        addDataEvent(type, thisObject, listener) {
            if (!this._globalEventdict.hasOwnProperty(type)) {
                EventUtils.addEventListener(type, thisObject, listener);
            }
        }
        removeDataEvent(type, thisObject, listener) {
            if (this._globalEventdict[type]) {
                EventUtils.removeEventListener(type, thisObject, listener);
                delete this._globalEventdict[type];
            }
        }
        removeDecoratorEvent() {
            let _decorators = this._decorators || {};
            for (let type in _decorators) {
                let ins = _decorators[type];
                for (let decorator of ins) {
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

    class PageList extends fairygui.GComponent {
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

    class ItemPoker extends ChildBaseView {
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
    ItemPoker.url = "ui://1xwgtad0q7052";

    var GameEvent;
    (function (GameEvent) {
        GameEvent.UpdateList = "UpdateList";
    })(GameEvent || (GameEvent = {}));

    var DataConfig;
    (function (DataConfig) {
        DataConfig.initialGold = 30;
        DataConfig.maxLevel = 1;
        DataConfig.defaultCD = 180;
        DataConfig.buffMap = {
            1: 1,
            2: 2,
            3: 3
        };
        DataConfig.shopUpgradeMap = {
            1: 10
        };
        DataConfig.weapon1 = {
            type: 1,
            as: 1,
            ms: 5
        };
        DataConfig.weapon2 = {
            type: 2,
            as: 2,
            ms: 5
        };
        DataConfig.weapon3 = {
            type: 3,
            as: 3,
            ms: 3
        };
    })(DataConfig || (DataConfig = {}));

    class PokerManager {
        constructor() {
            this.index = 1;
            this.shopLevel = 1;
            this.buyGold = 3;
            this.refreshGold = 1;
            this.selectPokerVO = [];
            this.resetInfo();
        }
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
        onBuyPoker(e) {
            if (this.curGold >= this.buyGold) {
                this.curGold -= this.buyGold;
                this.onAddPoker(e);
                return true;
            }
            console.log("金币不足");
            return false;
        }
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
        dispatchEvent(type, data = null) {
            EventUtils.dispatchEvent(type, data);
        }
    }

    class ItemRole extends ChildBaseView {
        updateVO(vo) {
            this.vo = vo;
        }
        updateHP(value) {
            this.txt_hp.text = value + "";
        }
    }
    ItemRole.url = "ui://30r1uzq1royc4";

    class ItemWeapon extends ChildBaseView {
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
                let filter = new Laya.GlowFilter("#ffff00", 10, 0, 0);
                this.filters = [filter];
            }
            else {
                this.filters = [];
            }
        }
        moveToLeft() {
            this.x -= this.vo.ms;
            this.scaleX = 1;
        }
        moveToRight() {
            this.x += this.vo.ms;
            this.scaleX = -1;
        }
        addCD() {
            this.isCD = true;
            let time = (DataConfig.defaultCD - this.vo.as * 10) / 60;
            fgui.GTween.to(1, 0, time).setTarget(this.img_cd, "scaleY").onComplete(() => {
                this.isCD = false;
            });
        }
    }
    ItemWeapon.url = "ui://30r1uzq1royc1";

    class ItemBullte extends ChildBaseView {
        updateVO(vo) {
            this.vo = vo;
            this.c_type.selectedIndex = vo.type - 1;
        }
        onUpdate() {
            this.y -= 1;
            if (this.y + this.height <= 0) {
                getSinglon(GameControl).removeBullte(this);
                this.dispose();
            }
        }
    }
    ItemBullte.url = "ui://30r1uzq1royc3";

    class ItemMonster extends ChildBaseView {
        updateVO(vo) {
            this.vo = vo;
            this.c_type.selectedIndex = vo.type - 1;
        }
        onUpdate() {
            this.y += 1;
            if (this.y > 500) {
                getSinglon(GameControl).onInjured(30);
                getSinglon(GameControl).removeMonster(this);
                this.dispose();
            }
        }
    }
    ItemMonster.url = "ui://30r1uzq1royc2";

    var Handler$1 = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    class SoundssManager {
        init() {
        }
        setMute(muted) {
            SoundManager.muted = muted;
        }
        onPlayMusic() {
            SoundManager.playMusic("res/sound/background_0.mp3", 0);
        }
        onPlaySound(name) {
            SoundManager.playSound("res/sound/" + name + ".mp3", 1);
        }
    }

    class ResultView extends BaseView {
        constructor() {
            super("result", "resultview", true);
        }
        onInit() {
            super.onInit();
        }
        onShown() {
            this.c_type.selectedIndex = getSinglon(GameControl).isWin ? 0 : 2;
        }
        onClick() {
        }
        onHide() {
            super.onHide();
        }
    }
    __decorate([
        d_click("")
    ], ResultView.prototype, "onClick", null);

    class GameControl {
        constructor() {
            this.MAX_WEAPON_COUNT = 3;
            this.GAMT_TIME = 60 * 50;
            this.curLevel = 1;
            this.startTime = 0;
            this.hasInit = false;
            this.createBoxInterval = 5000;
            this._time = 0;
            this.bulletArr = [];
            this.monsterArr = [];
            this._curWeaponIndex = 1;
            this._hp = 0;
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
                case 32:
                    this.onAttack();
                    break;
                case 37:
                    this.moveToLeft();
                    break;
                case 38:
                    this.changePrevWeapon();
                    break;
                case 39:
                    this.moveToRight();
                    break;
                case 40:
                    this.changeNextWeapon();
                    break;
                default:
                    break;
            }
        }
        startGame() {
            this.initInfo();
            Laya.timer.frameLoop(1, this, this.onUpdate);
            let pokerManager = getSinglon(PokerManager);
            this.weapon1.updateVO(pokerManager.weapon1);
            this.weapon2.updateVO(pokerManager.weapon2);
            this.weapon3.updateVO(pokerManager.weapon3);
        }
        initInfo() {
            if (this.hasInit)
                return;
            this.playView = getSinglon(PlayView);
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
            let now = Date.now();
            if (now - this._time > this.createBoxInterval) {
                this._time = now;
                this.createBox();
            }
            this.updateView();
            this.checkHit();
        }
        createBox() {
            let monster = fgui.UIPackage.createObjectFromURL(ItemMonster.url);
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
            let bullet = fgui.UIPackage.createObjectFromURL(ItemBullte.url);
            bullet.x = this.weapon.x + this.weapon.width / 2 - bullet.width / 2;
            bullet.y = this.weapon.y - bullet.height;
            let vo = { type: this.curWeaponIndex };
            bullet.updateVO(vo);
            this.bulletArr.push(bullet);
            this.playView.addChild(bullet);
            this.weapon.addCD();
        }
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
            getSinglon(ResultView).show();
        }
        onFaild() {
            this.isWin = false;
            getSinglon(ResultView).show();
        }
        stopGame() {
            Laya.timer.clearAll(this);
            this.curWeaponIndex = 1;
            this.createBoxInterval = 1000;
            this.startTime = 0;
        }
    }

    class PlayView extends BaseView {
        constructor() {
            super("play", "playview");
            fgui.UIObjectFactory.setPackageItemExtension(ItemRole.url, ItemRole);
            fgui.UIObjectFactory.setPackageItemExtension(ItemWeapon.url, ItemWeapon);
            fgui.UIObjectFactory.setPackageItemExtension(ItemBullte.url, ItemBullte);
            fgui.UIObjectFactory.setPackageItemExtension(ItemMonster.url, ItemMonster);
        }
        onInit() {
            super.onInit();
        }
        onShown() {
            getSinglon(GameControl).startGame();
        }
        onHide() {
            super.onHide();
        }
    }

    class ItemBuff extends ChildBaseView {
        updateVO(vo) {
            this.vo = vo;
            this.c_type.selectedIndex = vo.type - 1;
            this.c_level.selectedIndex = vo.level - 1;
            this.txt_buff.setVar("value", vo.value + "").flushVars();
        }
    }
    ItemBuff.url = "ui://1xwgtad0nwnn4";

    class ItemWeaponPoker extends ChildBaseView {
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
    ItemWeaponPoker.url = "ui://1xwgtad0nwnn3";

    class ItemBuff2 extends ChildBaseView {
        updateVO(vo) {
            this.vo = vo;
            this.c_type.selectedIndex = vo.type - 1;
            this.c_level.selectedIndex = vo.level - 1;
            this.txt_buff.setVar("value", vo.value + "").flushVars();
        }
    }
    ItemBuff2.url = "ui://1xwgtad0nwnn5";

    class PokerView extends BaseView {
        constructor() {
            super("poker", "pokerview");
            fgui.UIObjectFactory.setPackageItemExtension(ItemPoker.url, ItemPoker);
            fgui.UIObjectFactory.setPackageItemExtension(ItemBuff.url, ItemBuff);
            fgui.UIObjectFactory.setPackageItemExtension(ItemBuff2.url, ItemBuff2);
            fgui.UIObjectFactory.setPackageItemExtension(ItemWeaponPoker.url, ItemWeaponPoker);
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
            if (!getSinglon(PokerManager).onRefreshPoker())
                return;
            this.showGold();
            this.showSelectPoker();
        }
        showSelectPoker() {
            getSinglon(PokerManager).generatePoker();
            this.listSelect.setData(getSinglon(PokerManager).selectPokerVO);
        }
        selectPoker(e) {
            let manager = getSinglon(PokerManager);
            if (!manager.onBuyPoker(e))
                return;
            this.showGold();
        }
        updateList() {
            let manager = getSinglon(PokerManager);
            this.listSelect.setData(manager.selectPokerVO);
            this.weapon1.updateVO(manager.weapon1);
            this.weapon2.updateVO(manager.weapon2);
            this.weapon3.updateVO(manager.weapon3);
        }
        showGold() {
            this.txt_gold.setVar("value", getSinglon(PokerManager).curGold + "").flushVars();
        }
        onUpgrade() {
            getSinglon(PokerManager).onUpgrade();
            this.showGold();
        }
        onStart() {
            getSinglon(PokerView).hide();
            getSinglon(PlayView).show();
        }
        onHide() {
            super.onHide();
        }
    }
    __decorate([
        d_click('btn_refresh')
    ], PokerView.prototype, "onRefresh", null);
    __decorate([
        d_event(GameEvent.UpdateList)
    ], PokerView.prototype, "updateList", null);
    __decorate([
        d_click("btn_upgrade")
    ], PokerView.prototype, "onUpgrade", null);
    __decorate([
        d_click("btn_start")
    ], PokerView.prototype, "onStart", null);

    class MainView extends BaseView {
        constructor() {
            super("main", "mainview");
        }
        onInit() {
            super.onInit();
        }
        onShown() {
        }
        onStart() {
            getSinglon(PokerView).show();
            getSinglon(MainView).hide();
        }
        onHide() {
            super.onHide();
        }
    }
    __decorate([
        d_click("btn_start")
    ], MainView.prototype, "onStart", null);

    var CacheKey;
    (function (CacheKey) {
        CacheKey.Data = "data";
        CacheKey.Max_Score = "score";
    })(CacheKey || (CacheKey = {}));

    class CacheManager extends Laya.EventDispatcher {
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
        saveSvrData() {
            Laya.LocalStorage.setJSON(CacheKey.Data, this.gameData);
        }
        getSvrData() {
            this.gameData = Laya.LocalStorage.getJSON(CacheKey.Data) || {};
        }
    }
    var getGameData = getSinglon(CacheManager).getInfo;
    var saveGameData = getSinglon(CacheManager).addInfo;

    class GameMain {
        constructor() {
            this.uiArr = ["play", "poker", "result"];
            this.loadCount = 0;
        }
        initGame() {
            getSinglon(CacheManager).getSvrData();
            this.initInfo();
        }
        initInfo() {
            getSinglon(SoundssManager).onPlayMusic();
            for (let i of this.uiArr) {
                let pkgname = `res/ui/${i}/${i}`;
                fgui.UIPackage.loadPackage(pkgname, Laya.Handler.create(this, this.onLoadComplete));
            }
        }
        onLoadComplete() {
            this.loadCount++;
            if (this.loadCount >= this.uiArr.length) {
                getSinglon(MainView).show();
            }
        }
    }

    class GameLayerManager {
        constructor() {
            this.background = new fairygui.GComponent();
            this.mainuiLyaer = new fairygui.GComponent();
            this.uiLayer = new fairygui.GComponent();
            this.topLayer = new fairygui.GComponent();
            this.effectLayer = new fairygui.GComponent();
            this.guideLayer = new fairygui.GComponent();
            this.maxTopLayer = new fairygui.GComponent();
        }
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

    var Stage = Laya.Stage;
    class Main {
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
            getSinglon(GameLayerManager).initlayer();
            getSinglon(GameMain).initGame();
        }
    }
    new Main();

}());
