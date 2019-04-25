webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".row-padding { margin-top:5px; }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [saveEnabled]=\"saveEnabled\"></app-navbar>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md\">\r\n      <app-defs (selectedEntry)=\"select($event)\" (selectedRoot)=\"selectRoot($event)\"></app-defs>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <app-editor [entry]=\"selected\" [root]=\"root\"></app-editor>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <input class=\"row-padding\" type=\"checkbox\" [(ngModel)]=\"showCompact\" />\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <app-walker-compat class=\"row-padding\" *ngIf=\"showCompact\"></app-walker-compat>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <app-walker class=\"row-padding\"></app-walker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.saveEnabled = false;
        this.showCompact = false;
    }
    AppComponent.prototype.select = function (entry) {
        this.selected = entry;
    };
    AppComponent.prototype.selectRoot = function (entry) {
        this.root = entry;
        this.saveEnabled = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defs_defs_component__ = __webpack_require__("./src/app/defs/defs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defs_dir_dir_component__ = __webpack_require__("./src/app/defs/dir/dir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defs_member_member_component__ = __webpack_require__("./src/app/defs/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loader_service__ = __webpack_require__("./src/app/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_editor_component__ = __webpack_require__("./src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__walker_walker_component__ = __webpack_require__("./src/app/walker/walker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__walker_walker_service__ = __webpack_require__("./src/app/walker/walker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__walker_compat_walker_compat_component__ = __webpack_require__("./src/app/walker-compat/walker-compat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__walker_compat_walker_compat_service__ = __webpack_require__("./src/app/walker-compat/walker-compat.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__defs_defs_component__["a" /* DefsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__defs_dir_dir_component__["a" /* DirComponent */],
                __WEBPACK_IMPORTED_MODULE_7__defs_member_member_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_9__editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__walker_walker_component__["a" /* WalkerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__walker_compat_walker_compat_component__["a" /* WalkerCompatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_11__walker_walker_service__["a" /* WalkerService */], __WEBPACK_IMPORTED_MODULE_13__walker_compat_walker_compat_service__["a" /* WalkerCompatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/defs/defs.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n    padding: 3px 10px\r\n}\r\nbutton {\r\n  float: left;\r\n  position: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/defs/defs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Definitions\r\n  </div>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li *ngFor=\"let entry of tableContent\" [class]=\"getClasses(entry)\" (click)=\"entry.type === 'member' ? click(entry) : false\">\r\n\r\n      <button *ngIf=\"entry.type === 'object'\" class=\"float-left btn btn-sm btn-primary\"\r\n              (click)=\"click(entry, $event);\" textContent=\"{{entry.expanded === true ? 'v': '>'}}\">></button>\r\n      <app-dir  *ngIf=\"entry.type === 'object'\" [entry]=\"entry\" (deleteEntry)=\"delete(entry);\" (createEntry)=\"create(entry)\"></app-dir>\r\n\r\n\r\n      <app-member *ngIf=\"entry.type === 'member'\" (click)=\"click(entry)\" [entry]=\"entry\" (deleteEntry)=\"delete(entry)\"></app-member>\r\n\r\n\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/defs/defs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_model__ = __webpack_require__("./src/app/member.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entry_model__ = __webpack_require__("./src/app/entry.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_service__ = __webpack_require__("./src/app/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefsComponent = (function () {
    function DefsComponent(loader) {
        this.deleteSource = false;
        this.tableContent = [];
        this.selectedEntry = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.selectedRoot = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        loader.definition.subscribe(this.displayDefinition.bind(this));
    }
    DefsComponent.prototype.ngOnInit = function () {
        document.body.addEventListener('keydown', this.keyDown.bind(this), false);
    };
    DefsComponent.prototype.keyDown = function (e) {
        e = e || window.event;
        var key = e.which || e.keyCode; // keyCode detection
        var shift = e.shiftKey;
        if (shift) {
            if (key === 67) {
                this.copyied = this.selected;
                this.deleteSource = false;
            }
            if (key === 88) {
                this.copyied = this.selected;
                this.deleteSource = true;
            }
            else if (key === 86) {
                var parent_1;
                if (this.selected.type === 'object') {
                    parent_1 = this.selected;
                }
                else {
                    parent_1 = this.getParent(this.root.value, this.selected);
                }
                if (this.copyied.type === 'object') {
                    var co = this.copyied;
                    if (co.expanded) {
                        this.hide(co);
                    }
                }
                var copy = Object(__WEBPACK_IMPORTED_MODULE_1__entry_model__["d" /* cloneEntry */])(this.copyied);
                if (this.deleteSource) {
                    this.delete(this.copyied);
                    this.copyied = copy;
                }
                if (parent_1.expanded) {
                    this.hide(parent_1);
                }
                parent_1.value.children.push(copy);
                this.expand(parent_1);
            }
        }
    };
    DefsComponent.prototype.displayDefinition = function (entry) {
        this.root = entry;
        this.addLayer(entry.value, 0);
        this.selectedRoot.emit(this.root);
        this.tableContent = [this.root];
    };
    DefsComponent.prototype.addLayer = function (obj, layer) {
        if (!layer) {
            layer = 0;
        }
        if (!obj.layer) {
            obj['layer'] = layer;
        }
        var value = obj.value;
        if (value && value.children && value.children.length) {
            value.children.forEach(function (element) {
                this.addLayer(element, layer + 1);
            }.bind(this));
        }
    };
    DefsComponent.prototype.click = function (entry, event) {
        if (entry.type === 'object') {
            this.toggle(entry);
        }
        this.select(entry);
    };
    DefsComponent.prototype.toggle = function (entry) {
        if (entry.expanded) {
            this.hide(entry);
        }
        else {
            this.expand(entry);
        }
    };
    DefsComponent.prototype.expand = function (entry) {
        var index = this.tableContent.indexOf(entry) + 1;
        var members = entry.value.children;
        for (var i = members.length - 1; i >= 0; i--) {
            members[i].layer = (entry.layer || 0) + 1;
            this.tableContent.splice(index, 0, members[i]);
        }
        entry.expanded = true;
    };
    DefsComponent.prototype.hide = function (entry) {
        for (var _i = 0, _a = entry.value.children; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.type === 'object') {
                if (e.expanded) {
                    this.hide(e);
                }
            }
            else {
                if (e === this.selected) {
                    this.unselect();
                }
            }
        }
        var index = this.tableContent.indexOf(entry) + 1;
        this.tableContent.splice(index, entry.value.children.length);
        entry.expanded = false;
    };
    DefsComponent.prototype.getClasses = function (entry) {
        if (entry.type === 'object') {
            return 'list-group-item list-group-item-action text-white bg-primary';
        }
        if (entry === this.selected) {
            return 'list-group-item list-group-item-action text-white bg-success';
        }
        else {
            return 'list-group-item list-group-item-action';
        }
    };
    DefsComponent.prototype.select = function (entry) {
        this.selected = entry;
        this.selectedEntry.emit(this.selected);
    };
    DefsComponent.prototype.unselect = function () {
        this.selected = undefined;
        this.selectedEntry.emit(this.selected);
    };
    DefsComponent.prototype.delete = function (entry) {
        if (entry === this.selected) {
            this.unselect();
        }
        // if is a parent and expanded. Hide it
        if (entry.expanded && entry.type === 'object') {
            this.hide(entry);
        }
        var index = this.tableContent.indexOf(entry);
        entry.value.clear();
        this.tableContent.splice(index, 1);
        var parent = this.getParent(this.root, entry);
        if (!parent) {
            return;
        }
        index = parent.value.children.indexOf(entry);
        parent.value.children.splice(index, 1);
        // the last member is selected (if user clicks the last element)
        if (index === parent.value.children.length && index > 0) {
            this.select(parent.value.children[index - 1]);
        }
        else {
            // otherwise, the children that took the delete def's place
            this.select(parent.value.children[index]);
        }
        if (parent.type === 'object') {
            // if there are no more children. Visually signify it is hidden.
            if (parent.value.children.length === 0) {
                parent.expanded = false;
            }
        }
    };
    DefsComponent.prototype.getParent = function (parent, searched) {
        for (var _i = 0, _a = parent.value.children; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry === searched) {
                return parent;
            }
            else if (entry.type === 'object') {
                var result = this.getParent(entry, searched);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    };
    DefsComponent.prototype.create = function (entry) {
        // hide it so it can refresh
        if (entry.expanded) {
            this.toggle(entry);
        }
        var memEntry = {
            type: 'select',
            pattern: '',
            from: {
                type: '',
                values: []
            }
        };
        var member = new __WEBPACK_IMPORTED_MODULE_0__member_model__["a" /* default */](memEntry, {
            type: 'static'
        });
        var aEntry = {
            type: 'member',
            name: '',
            layer: entry.layer + 1,
            value: member
        };
        var index = entry.value.children.push(aEntry);
        this.select(aEntry);
        if (!entry.expanded) {
            this.toggle(entry);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DefsComponent.prototype, "selectedEntry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DefsComponent.prototype, "selectedRoot", void 0);
    DefsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-defs',
            template: __webpack_require__("./src/app/defs/defs.component.html"),
            styles: [__webpack_require__("./src/app/defs/defs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__loader_service__["a" /* LoaderService */]])
    ], DefsComponent);
    return DefsComponent;
}());



/***/ }),

/***/ "./src/app/defs/dir/dir.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    left: 0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/defs/dir/dir.component.html":
/***/ (function(module, exports) {

module.exports = "<a textContent=\"{{entry.name.padStart(entry.name.length + entry.layer * 2, '\\u00A0')}}\"></a>\r\n\r\n<button class=\"float-right btn btn-sm btn-primary\" (click)=\"delete()\">-</button>\r\n<button class=\"float-right btn btn-sm btn-primary\" (click)=\"create()\">+</button>\r\n"

/***/ }),

/***/ "./src/app/defs/dir/dir.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirComponent = (function () {
    function DirComponent() {
        this.deleteEntry = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.createEntry = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    DirComponent.prototype.ngOnInit = function () {
    };
    DirComponent.prototype.update = function () {
    };
    DirComponent.prototype.delete = function () {
        this.deleteEntry.emit();
    };
    DirComponent.prototype.create = function () {
        this.createEntry.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DirComponent.prototype, "entry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DirComponent.prototype, "deleteEntry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DirComponent.prototype, "createEntry", void 0);
    DirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dir',
            template: __webpack_require__("./src/app/defs/dir/dir.component.html"),
            styles: [__webpack_require__("./src/app/defs/dir/dir.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirComponent);
    return DirComponent;
}());



/***/ }),

/***/ "./src/app/defs/member/member.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/defs/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<a textContent=\"{{(entry.name.padStart(entry.name.length + entry.layer * 5, '\\u00A0'))}}\"></a>\r\n\r\n<button class=\"float-right btn btn-sm btn-light\" (click)=\"delete()\">-</button>\r\n"

/***/ }),

/***/ "./src/app/defs/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberComponent = (function () {
    function MemberComponent() {
        this.deleteEntry = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    MemberComponent.prototype.ngOnInit = function () { };
    MemberComponent.prototype.delete = function () {
        this.deleteEntry.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], MemberComponent.prototype, "entry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MemberComponent.prototype, "deleteEntry", void 0);
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-member',
            template: __webpack_require__("./src/app/defs/member/member.component.html"),
            styles: [__webpack_require__("./src/app/defs/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/dir.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dir; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entry_model__ = __webpack_require__("./src/app/entry.model.ts");

var Dir = (function () {
    function Dir(type, name, children) {
        if (children === void 0) { children = []; }
        this.type = type;
        this.name = name;
        this.children = children;
    }
    Dir.prototype.clone = function () {
        var newChildren = this.children.map(function (e) {
            var newChild = Object(__WEBPACK_IMPORTED_MODULE_0__entry_model__["d" /* cloneEntry */])(e);
            return newChild;
        });
        return new Dir(this.type, this.name, newChildren);
    };
    Dir.prototype.getAllChildrenMembers = function () {
        var children = [];
        this.children.forEach(function (child) {
            if (child.value instanceof Dir) {
                children.push.apply(children, child.value.getAllChildrenMembers());
            }
            else {
                children.push(child);
            }
        });
        return children;
    };
    Dir.prototype.clear = function () {
        this.children.forEach(function (e) { return e.value.clear(); });
        this.children = [];
    };
    return Dir;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = ".row-padding { margin-top:5px; }"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Properties <a *ngIf=\"entry\">{{getTitle()}}</a>\r\n  </div>\r\n  <div class=\"card-body\"  *ngIf=\"entry\">\r\n    <div class=\"form-group\">\r\n      <label for=\"type\">Type</label>\r\n      <select id=\"type\" [(ngModel)]=\"entry.type\" class=\"form-control form-control-sm\" (change)=\"onTypeChange($event)\">\r\n        <option>object</option>\r\n        <option>member</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" id=\"name\" (change)=\"onNameChange($event)\" class=\"form-control form-control-sm\" placeholder=\"Name\" [(ngModel)]=\"entry.name\">\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"entry.type === 'member'\">\r\n      <label for=\"reftype\">Reftype</label>\r\n      <select id=\"reftype\" class=\"form-control form-control-sm\" [(ngModel)]=\"entry.value.leaf.type\">\r\n        <option>static</option>\r\n        <option>dynamic</option>\r\n        <option>raw</option>\r\n      </select>\r\n      <div class=\"form-group\" *ngIf=\"entry.value.leaf.type != 'raw'\">\r\n        <label for=\"parent\">Parent</label>\r\n        <input type=\"text\" id=\"parent\" class=\"form-control form-control-sm\" placeholder=\"Parent\" [(ngModel)]=\"entry.value.leaf.parent\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"card\" *ngIf=\"entry.type === 'member'\">\r\n      <div class=\"card-header\">\r\n        Compiled\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"ctype\" class=\"col-form-label-sm\">Type</label>\r\n          <select id=\"ctype\" class=\"form-control form-control-sm\" disabled [(ngModel)]=\"entry.value.entry.type\">\r\n            <option selected>select</option>\r\n            <option>fixed</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pattern\" class=\"col-form-label-sm\">Pattern</label>\r\n          <input type=\"text\" id=\"pattern\" class=\"form-control form-control-sm\" [(ngModel)]=\"entry.value.entry.pattern\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"nodeType\" class=\"col-form-label-sm\">Node type</label>\r\n          <input type=\"text\" id=\"nodeType\" class=\"form-control form-control-sm\" [(ngModel)]=\"entry.value.entry.from.type\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"values\" class=\"col-form-label-sm\">Values</label>\r\n          <div id=\"values\">\r\n            <div class=\"form-row row-padding\" *ngFor=\"let kv of entry.value.entry.from.values; let i = index\">\r\n              <div class=\"col\">\r\n                  <select id=\"subval\" class=\"form-control form-control-sm\" [(ngModel)]=\"kv.type\">\r\n                    <option selected></option>\r\n                    <option>dynamic</option>\r\n                  </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Name\" [(ngModel)]=\"kv.name\">\r\n              </div>\r\n              <div class=\"col\" *ngIf=\"kv.type !== 'dynamic'\">\r\n                <input  type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Value\" [(ngModel)]=\"kv.value\">\r\n              </div>\r\n              <div class=\"col\" *ngIf=\"kv.type === 'dynamic'\">\r\n                <select *ngIf=\"kv.type === 'dynamic'\" for=\"\" id=\"subval\" class=\"form-control form-control-sm\" [(ngModel)]=\"kv.value\">\r\n                  <option *ngFor=\"let entryName of allEntryNames\">\r\n                    {{entryName}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-auto\">\r\n                <input type=\"button\" class=\"form-control btn btn-danger btn-sm\" value=\"-\" (click)=\"remove(i)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success btn-sm float-right\" (click)=\"add()\">+</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dir_model__ = __webpack_require__("./src/app/dir.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_model__ = __webpack_require__("./src/app/member.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var EditorComponent = (function () {
    function EditorComponent() {
        this.nameChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.allObjectNames = [];
        this.allEntryNames = [];
    }
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent.prototype.ngOnChanges = function (_a) {
        var root = _a.root, entry = _a.entry, rest = __rest(_a, ["root", "entry"]);
        var rootEntry = null;
        if (root && root.currentValue) {
            rootEntry = root.currentValue;
            // create a list of names for every entry
            console.log('The root changed');
            this.getAllPaths(rootEntry, this.allObjectNames);
            console.log('All paths', this.allObjectNames);
        }
        console.log("I changed!", arguments);
        if (entry) {
            console.log(rootEntry);
            this.allEntryNames.splice(0);
            this.getEntryNames(this.root, this.allEntryNames);
            console.log('All Entry Names', this.allEntryNames);
        }
    };
    EditorComponent.prototype.onNameChange = function (event) {
        var value = this.entry.value;
        value.name = event.target.value;
        if (this.entry.type === 'member') {
            value.leaf.name = value.name;
        }
    };
    EditorComponent.prototype.onTypeChange = function (event) {
        // remove all fields
        var oldEntry = this.entry.value.clone();
        this.entry.value.clear();
        delete this.entry.value;
        var type = this.entry.type = event.target.value;
        if (type === 'member') {
            var memEntry = {
                type: 'select',
                pattern: '',
                from: {
                    type: '',
                    values: []
                }
            };
            var leaf = {
                type: 'static',
                name: oldEntry.name,
                parent: ''
            };
            this.entry.value = new __WEBPACK_IMPORTED_MODULE_2__member_model__["a" /* default */](memEntry, leaf);
        }
        else if (type === 'object') {
            this.entry.value = new __WEBPACK_IMPORTED_MODULE_0__dir_model__["a" /* Dir */](type, oldEntry.name);
        }
        oldEntry.clear();
    };
    EditorComponent.prototype.getAllEntryNames = function () {
        return this.allEntryNames.filter(function (e) { return !!e; });
    };
    EditorComponent.prototype.getTitle = function () {
        return '(' + this.getPath(this.root, this.entry) + ')';
    };
    EditorComponent.prototype.getAllPaths = function (entry, arr, current) {
        if (arr === void 0) { arr = []; }
        if (current === void 0) { current = ''; }
        if (current.length) {
            current += '.' + entry.name;
        }
        else {
            current = entry.name;
        }
        var dir = entry.value;
        for (var _i = 0, _a = dir.children; _i < _a.length; _i++) {
            var aEntry = _a[_i];
            if (aEntry.type === 'member') {
                arr.push(current + '.' + aEntry.name);
            }
            else if (aEntry.type === 'object') {
                this.getAllPaths(aEntry, arr, current);
            }
        }
    };
    EditorComponent.prototype.getEntryNames = function (entry, arr) {
        if (arr === void 0) { arr = []; }
        if (!entry)
            return;
        var dir = entry.value;
        for (var _i = 0, _a = dir.children; _i < _a.length; _i++) {
            var aEntry = _a[_i];
            if (aEntry.type === 'member') {
                arr.push(aEntry.name || "");
            }
            else if (aEntry.type === 'object') {
                this.getEntryNames(aEntry, arr);
            }
        }
    };
    EditorComponent.prototype.getPath = function (entry, currentEntry, current) {
        if (current === void 0) { current = ''; }
        if (current.length) {
            current += '.' + entry.name;
        }
        else {
            current = entry.name;
        }
        if (entry !== currentEntry) {
            var dir = entry.value;
            for (var _i = 0, _a = dir.children; _i < _a.length; _i++) {
                var aEntry = _a[_i];
                if (aEntry.type === 'member') {
                    if (aEntry === currentEntry) {
                        return current + '.' + aEntry.name;
                    }
                }
                else if (aEntry.type === 'object') {
                    var result = this.getPath(aEntry, currentEntry, current);
                    if (result) {
                        return result;
                    }
                    else {
                        return current + '.' + aEntry.name;
                    }
                }
            }
            return current;
        }
    };
    EditorComponent.prototype.remove = function (i) {
        this.entry.value.entry.from.values.splice(i, 1);
    };
    EditorComponent.prototype.add = function () {
        this.entry.value.entry.from.values.push({ name: '', value: '' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "entry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "nameChange", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/entry.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MergeEntries */
/* harmony export (immutable) */ __webpack_exports__["d"] = cloneEntry;
/* harmony export (immutable) */ __webpack_exports__["b"] = ConvertFromOldDefJson;
/* harmony export (immutable) */ __webpack_exports__["e"] = convert2;
/* harmony export (immutable) */ __webpack_exports__["a"] = ConvertEntryToDefJson;
/* harmony export (immutable) */ __webpack_exports__["c"] = CreateEntry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dir_model__ = __webpack_require__("./src/app/dir.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_model__ = __webpack_require__("./src/app/member.model.ts");


function MergeEntries() {
    function a() { }
}
function cloneEntry(oldEntry) {
    return { type: oldEntry.type,
        name: oldEntry.name,
        layer: oldEntry.layer,
        value: oldEntry.value.clone(),
        expanded: oldEntry.expanded
    };
}
function ConvertFromOldDefJson(def) {
    var tree = {};
    var entries = [];
    initObject(tree);
    convert(tree, entries, def);
    return { tree: tree, entries: entries };
}
function initObject(obj) {
    obj.type = '';
    obj.name = '';
    obj.children = [];
}
function convert2(entries) {
    var newEntries = {};
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        newEntries[entry.name] = entry;
    }
    return newEntries;
}
function convert(tree, entries, def, layer) {
    if (layer === void 0) { layer = 0; }
    if (def.type === 'object') {
        // this is broken
        var obj = {};
        if (layer === 0) {
            obj = tree;
        }
        initObject(obj);
        obj.type = def.type;
        obj.name = def.name;
        for (var _i = 0, _a = def.members; _i < _a.length; _i++) {
            var child = _a[_i];
            convert(obj, entries, child, layer + 1);
        }
        if (layer > 0) {
            tree.children.push(obj);
        }
    }
    else if (def.type === 'member') {
        var entryObject = {};
        entryObject.name = def.name;
        for (var _b = 0, _c = Object.keys(def.compiled); _b < _c.length; _b++) {
            var key = _c[_b];
            entryObject[key] = def.compiled[key];
        }
        entries.push(entryObject);
        var memberObject = {};
        var typeChoices = [{
                old: 'raw',
                'new': 'raw'
            }, {
                old: 'var',
                'new': 'static',
                'parent': true
            }, {
                old: 'ref',
                'new': 'dynamic',
                'parent': true
            }];
        var defConfig = typeChoices.filter(function (type) { return type.old === def.refType; }).pop();
        memberObject.name = def.name;
        memberObject.type = defConfig['new'];
        if (defConfig['parent'] && def['parent']) {
            memberObject.parent = def['parent'];
        }
        tree.children.push(memberObject);
    }
}
function ConvertEntryToDefJson(tree, output, layer) {
    if (output === void 0) { output = {}; }
    if (layer === void 0) { layer = 0; }
    if (layer === 0) {
        output.tree = {};
        output.entries = {};
    }
    if (tree.type === 'object') {
        var value = tree.value;
        output.tree.name = value.name;
        output.tree.type = 'object';
        output.tree.children = value.children
            .map(function (e) {
            var obj = {
                entries: {},
                tree: {},
            };
            ConvertEntryToDefJson(e, obj, layer + 1);
            console.log(obj.entries);
            Object.assign(output.entries, obj.entries);
            return obj.tree;
        });
    }
    else if (tree.type === 'member') {
        var value = tree.value;
        output.entries[tree.name] = value.entry;
        output.tree = value.leaf;
        delete value.leaf;
    }
}
function CreateEntry(tree, entries, layer) {
    if (tree === void 0) { tree = {}; }
    if (entries === void 0) { entries = {}; }
    if (layer === void 0) { layer = 0; }
    var mainEntry = {
        name: tree.name,
        layer: layer
    };
    if (tree.type === 'object') {
        mainEntry.type = 'object';
        var children = tree.children.map(function (e) { return CreateEntry(e, entries, layer + 1); });
        var dir = new __WEBPACK_IMPORTED_MODULE_0__dir_model__["a" /* Dir */](tree.type, tree.name, children);
        mainEntry.value = dir;
    }
    else {
        var entry = entries[tree.name];
        if (entry) {
            mainEntry.type = 'member';
            var leaf = {
                type: tree.type,
                name: tree.name,
                parent: tree.parent
            };
            var member = new __WEBPACK_IMPORTED_MODULE_1__member_model__["a" /* default */](entry, leaf);
            mainEntry.value = member;
        }
    }
    return mainEntry;
}


/***/ }),

/***/ "./src/app/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entry_model__ = __webpack_require__("./src/app/entry.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dir_model__ = __webpack_require__("./src/app/dir.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BLACKLIST = ['layer', 'expanded', 'prettyName'];
var LoaderService = (function () {
    function LoaderService() {
        this.definition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.code = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        if (true) {
            this.fs = __webpack_require__("./node_modules/node-libs-browser/mock/empty.js");
        }
    }
    LoaderService.prototype.openFileDialouge = function (callback, accept) {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = accept;
        input.onchange = callback;
        input.click();
    };
    LoaderService.prototype.readFile = function (file, callback) {
        var reader = new FileReader();
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsText(file);
        if (file.name.endsWith('.db')) {
            this.definitionName = file.name;
        }
    };
    LoaderService.prototype.createDefinition = function () {
        this.definitionName = 'New File.db';
        this.definitionNode = {
            type: 'object',
            name: 'cc',
            layer: 0,
            expanded: false,
            value: new __WEBPACK_IMPORTED_MODULE_2__dir_model__["a" /* Dir */]('object', 'cc')
        };
        this.definition.emit(this.definitionNode);
    };
    LoaderService.prototype.loadDefinition = function (data) {
        var definitionFile = JSON.parse(data);
        // convert to v2
        if (definitionFile.members) {
            console.clear();
            console.log('v1 -> v2');
            console.log('Old file', definitionFile);
            definitionFile = Object(__WEBPACK_IMPORTED_MODULE_1__entry_model__["b" /* ConvertFromOldDefJson */])(definitionFile);
            console.log('New file', definitionFile);
        }
        // convert to v3
        if (Array.isArray(definitionFile.entries)) {
            console.log('v2 -> v3');
            definitionFile.entries = Object(__WEBPACK_IMPORTED_MODULE_1__entry_model__["e" /* convert2 */])(definitionFile.entries);
            console.log(definitionFile);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1__entry_model__["c" /* CreateEntry */])(definitionFile.tree, definitionFile.entries);
    };
    LoaderService.prototype.mergeDefinitions = function () {
        var _this = this;
        this.openFileDialouge(function (ev) {
            return _this.readFile(ev.target.files[0], function (data) {
                var inDefNode = _this.loadDefinition(data);
                var oldDefNode = _this.definitionNode;
                // MergeEntries(oldDefNode, inDefNode);
                // this.definition.emit(this.definitionNode);
            });
        }, '.db');
    };
    LoaderService.prototype.openDefinition = function () {
        var _this = this;
        this.openFileDialouge(function (ev) {
            return _this.readFile(ev.target.files[0], function (data) {
                _this.definitionNode = _this.loadDefinition(data);
                _this.definition.emit(_this.definitionNode);
            });
        }, '.db');
    };
    LoaderService.prototype.openCode = function () {
        var _this = this;
        this.openFileDialouge(function (ev) {
            return _this.readFile(ev.target.files[0], function (data) {
                return _this.code.emit(data);
            });
        }, '.js');
    };
    LoaderService.prototype.save = function () {
        // const content = JSON.stringify(this.definitionNode, (key, value) => BLACKLIST.indexOf(key) < 0 ? value : undefined, 4);
        var output = {};
        var clone = Object(__WEBPACK_IMPORTED_MODULE_1__entry_model__["d" /* cloneEntry */])(this.definitionNode);
        Object(__WEBPACK_IMPORTED_MODULE_1__entry_model__["a" /* ConvertEntryToDefJson */])(clone, output);
        var entries = Object.keys(output.entries)
            .sort()
            .reduce(function (obj, value, index, arr) {
            obj[value] = output.entries[value];
            return obj;
        }, {});
        output.entries = entries;
        output = JSON.stringify(output, undefined, 4);
        if (this.fs && this.fs.writeFileSync) {
            this.saveFile(this.definitionName, output);
        }
        else {
            this.downloadFile(this.definitionName, output);
        }
    };
    LoaderService.prototype.downloadFile = function (name, content) {
        var blob = new Blob([content], { type: 'application/json' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    LoaderService.prototype.saveFile = function (name, content) {
        this.fs.writeFileSync(name, content);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/member.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Member = (function () {
    function Member(entry, leaf) {
        this.entry = entry;
        this.leaf = leaf;
    }
    Member.prototype.clone = function () {
        var newMemberEntry = JSON.parse(JSON.stringify(this.entry));
        var newLeaf = JSON.parse(JSON.stringify(this.leaf));
        return new Member(newMemberEntry, newLeaf);
    };
    Member.prototype.clear = function () {
        this.entry = {};
        this.leaf = {};
    };
    return Member;
}());
/* harmony default export */ __webpack_exports__["a"] = (Member);


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"#\">Definitions</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" (click)=\"createDefinition()\">\r\n              New\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarLoadDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Load\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarLoadDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"openDefinition()\">Definition</a>\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"openCode()\">CrossCode</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarMergeDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Merge\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarMergeDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"mergeDefinitions()\">Definition</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a [class]=\"saveEnabled ? 'nav-link' : 'nav-link disabled'\" href=\"#\" (click)=\"save()\">Save</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("./src/app/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(loader) {
        this.saveEnabled = false;
        this.loader = loader;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.createDefinition = function () {
        this.loader.createDefinition();
    };
    NavbarComponent.prototype.openDefinition = function () {
        this.loader.openDefinition();
    };
    NavbarComponent.prototype.mergeDefinitions = function () {
        // this.loader.openFileDialouge()
        // this.loader.loadDefinition();
    };
    NavbarComponent.prototype.openCode = function () {
        this.loader.openCode();
    };
    NavbarComponent.prototype.save = function () {
        if (this.saveEnabled) {
            this.loader.save();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "saveEnabled", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/walker-compat/walker-compat.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/walker-compat/walker-compat.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea (input)=\"onInput($event.target.value)\" rows=\"20\" cols=\"200\"></textarea>\n<button (click)=\"onLoadClick()\">LOAD</button>\n"

/***/ }),

/***/ "./src/app/walker-compat/walker-compat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkerCompatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__walker_compat_walker_compat_service__ = __webpack_require__("./src/app/walker-compat/walker-compat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalkerCompatComponent = (function () {
    function WalkerCompatComponent(walkerCompatService) {
        this.rawStringCode = '';
        this.service = walkerCompatService;
    }
    WalkerCompatComponent.prototype.ngOnInit = function () {
        this.service.status.emit({
            visible: true
        });
    };
    WalkerCompatComponent.prototype.onInput = function (code) {
        this.rawStringCode = code;
    };
    WalkerCompatComponent.prototype.onLoadClick = function () {
        this.service.code.emit(this.rawStringCode);
    };
    WalkerCompatComponent.prototype.ngOnDestroy = function () {
        this.service.status.emit({
            visible: false
        });
    };
    WalkerCompatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-walker-compat',
            template: __webpack_require__("./src/app/walker-compat/walker-compat.component.html"),
            styles: [__webpack_require__("./src/app/walker-compat/walker-compat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__walker_compat_walker_compat_service__["a" /* WalkerCompatService */]])
    ], WalkerCompatComponent);
    return WalkerCompatComponent;
}());



/***/ }),

/***/ "./src/app/walker-compat/walker-compat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkerCompatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalkerCompatService = (function () {
    function WalkerCompatService() {
        this.code = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.status = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    WalkerCompatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WalkerCompatService);
    return WalkerCompatService;
}());



/***/ }),

/***/ "./src/app/walker/walker.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/walker/walker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"tree || treeCompact\">\r\n  <div class=\"card-header\">\r\n    Find definition\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"perNode\">Per node</label>\r\n      <input type=\"number\" id=\"perNode\" class=\"form-control form-control-sm\" placeholder=\"2\" [(ngModel)]=\"perNode\" [readOnly]=\"searching\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"steps\">Steps</label>\r\n      <input type=\"number\" id=\"steps\" class=\"form-control form-control-sm\" placeholder=\"10\" [(ngModel)]=\"steps\" [readOnly]=\"searching\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"depth\">Depth</label>\r\n      <input type=\"number\" id=\"depth\" class=\"form-control form-control-sm\" placeholder=\"20\" [(ngModel)]=\"depth\" [readOnly]=\"searching\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pattern\">Pattern</label>\r\n      <input type=\"text\" id=\"pattern\" class=\"form-control form-control-sm\" [(ngModel)]=\"pattern\" [readOnly]=\"searching\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"searched\">Searched</label>\r\n      <input type=\"text\" id=\"searched\" class=\"form-control form-control-sm\" [(ngModel)]=\"searched\" [readOnly]=\"searching\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-sm float-right\" (click)=\"search()\">Search</button>\r\n\r\n    <div class=\"form-group\"></div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"result\">\r\n      <label>Result</label>\r\n      <label for=\"pattern\">Pattern</label>\r\n      <input type=\"text\" id=\"pattern\" class=\"form-control form-control-sm\" [(ngModel)]=\"result.pattern\" [readOnly]=\"searching\">\r\n      <label for=\"value\">Pattern</label>\r\n      <input type=\"text\" id=\"value\" class=\"form-control form-control-sm\" [(ngModel)]=\"result.value\" [readOnly]=\"searching\">\r\n      <label for=\"type\">Type</label>\r\n      <input type=\"text\" id=\"type\" class=\"form-control form-control-sm\" [(ngModel)]=\"result.type\" [readOnly]=\"searching\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/walker/walker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__walker_service__ = __webpack_require__("./src/app/walker/walker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__walker_compat_walker_compat_service__ = __webpack_require__("./src/app/walker-compat/walker-compat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_service__ = __webpack_require__("./src/app/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var WalkerComponent = (function () {
    function WalkerComponent(loader, walker, walkerCompact) {
        var _this = this;
        this.perNode = 2;
        this.steps = 5;
        this.depth = 20;
        this.searching = false;
        this.useSnippit = false;
        this.resultFound = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.walker = walker;
        loader.code.subscribe(function (code) {
            console.log("Parsing..");
            _this.tree = acorn.parse(code);
            console.log("Parsed");
        });
        walkerCompact.status.subscribe(function (newState) {
            _this.useSnippit = newState.visible;
            console.log("Just in news: walkerCompact is", newState.visible);
        });
        walkerCompact.code.subscribe(function (code) {
            // TODO: account for errors
            console.log('Parsing snippit');
            _this.treeCompact = acorn.parse(code);
            console.log(_this.treeCompact);
            console.log('Parsed!');
        });
    }
    WalkerComponent.prototype.search = function () {
        this.result = null;
        this.searching = true;
        var doSearch = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.result = this.walker.search(this.useSnippit ? this.treeCompact : this.tree, this.searched, this.pattern, this.depth, this.perNode, this.steps);
                    this.searching = false;
                    return [2 /*return*/];
                });
            });
        }.bind(this);
        doSearch();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], WalkerComponent.prototype, "resultFound", void 0);
    WalkerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-walker',
            template: __webpack_require__("./src/app/walker/walker.component.html"),
            styles: [__webpack_require__("./src/app/walker/walker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_0__walker_service__["a" /* WalkerService */], __WEBPACK_IMPORTED_MODULE_1__walker_compat_walker_compat_service__["a" /* WalkerCompatService */]])
    ], WalkerComponent);
    return WalkerComponent;
}());



/***/ }),

/***/ "./src/app/walker/walker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalkerService = (function () {
    function WalkerService() {
    }
    WalkerService.prototype.search = function (tree, searched, pattern, depth, perNode, steps) {
        console.log("Searching..");
        var result = null;
        acorn.walk.fullAncestor(tree, function (node, state, ancestor, type) {
            if (result)
                return;
            var res = this.searchNode(node, perNode, pattern);
            if (res >= 0) {
                for (var i = 0; (ancestor.length - steps + (perNode - res) - i) >= 0; i++)
                    if (ancestor[ancestor.length - steps + (perNode - res) - i].type) {
                        result = ancestor[ancestor.length - steps + (perNode - res) - i];
                        return;
                    }
                console.warn("Could not find fitting node");
                if (ancestor.length - steps < 0)
                    result = ancestor[0];
                else
                    result = ancestor[ancestor.length - steps];
            }
        }.bind(this));
        console.log(result);
        if (result) {
            var value = { pattern: "", value: "", type: "" };
            this.findValues(result, 0, "", value, searched, pattern, depth);
            this.stripValues(value, result);
            console.log("pattern: " + value.pattern);
            console.log("value: " + value.value);
            console.log("type: " + value.type);
            return value;
        }
        return undefined;
    };
    WalkerService.prototype.stripValues = function (value, node) {
        var pattern = value.pattern.split('.');
        var v = value.value.split('.');
        var lastValidNode = node;
        value.type = node.type;
        while (pattern.length > 0 && v.length > 0 && pattern[0] === v[0]) {
            node = node[v[0]];
            pattern.shift();
            v.shift();
            if (node.type) {
                value.pattern = pattern.join('.');
                value.value = v.join('.');
                value.type = node.type;
            }
        }
    };
    WalkerService.prototype.findValues = function (node, i, path, result, searched, pattern, depth) {
        if (!node)
            return;
        for (var key in node) {
            if (node[key] === searched) {
                result.pattern = path + key;
            }
            else if (node[key] === pattern) {
                result.value = path + key;
            }
            else if (i <= depth) {
                this.findValues(node[key], i + 1, path + key + ".", result, searched, pattern, depth);
            }
        }
    };
    WalkerService.prototype.searchNode = function (n, layers, pattern) {
        if (layers < 0)
            return -1;
        if (n === pattern)
            return layers;
        if (typeof (n) === "function")
            return -1;
        for (var key in n) {
            var s = this.searchNode(n[key], layers - 1, pattern);
            if (s > -1)
                return s;
        }
        return -1;
    };
    WalkerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WalkerService);
    return WalkerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map