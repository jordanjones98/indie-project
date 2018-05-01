webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts"
	],
	"../event/event.module": [
		"../../../../../src/app/event/event.module.ts"
	],
	"../user/user.module": [
		"../../../../../src/app/user/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index_component__ = __webpack_require__("../../../../../src/app/admin/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_add_event_add_event_component__ = __webpack_require__("../../../../../src/app/admin/events/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_view_events_view_events_component__ = __webpack_require__("../../../../../src/app/admin/events/view-events/view-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_edit_event_edit_event_component__ = __webpack_require__("../../../../../src/app/admin/events/edit-event/edit-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_add_class_add_class_component__ = __webpack_require__("../../../../../src/app/admin/classes/add-class/add-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classes_view_classes_view_classes_component__ = __webpack_require__("../../../../../src/app/admin/classes/view-classes/view-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_edit_class_edit_class_component__ = __webpack_require__("../../../../../src/app/admin/classes/edit-class/edit-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_view_users_view_users_component__ = __webpack_require__("../../../../../src/app/admin/users/view-users/view-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */]
    },
    {
        path: 'events/add',
        component: __WEBPACK_IMPORTED_MODULE_3__events_add_event_add_event_component__["a" /* AddEventComponent */]
    },
    {
        path: 'events/view',
        component: __WEBPACK_IMPORTED_MODULE_4__events_view_events_view_events_component__["a" /* ViewEventsComponent */]
    },
    {
        path: 'events/edit/:slug',
        component: __WEBPACK_IMPORTED_MODULE_5__events_edit_event_edit_event_component__["a" /* EditEventComponent */]
    },
    {
        path: 'classes/add',
        component: __WEBPACK_IMPORTED_MODULE_6__classes_add_class_add_class_component__["a" /* AddClassComponent */]
    },
    {
        path: 'classes/view',
        component: __WEBPACK_IMPORTED_MODULE_7__classes_view_classes_view_classes_component__["a" /* ViewClassesComponent */]
    },
    {
        path: 'classes/edit/:slug',
        component: __WEBPACK_IMPORTED_MODULE_8__classes_edit_class_edit_class_component__["a" /* EditClassComponent */]
    },
    {
        path: 'users/view',
        component: __WEBPACK_IMPORTED_MODULE_9__users_view_users_view_users_component__["a" /* ViewUsersComponent */]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_index_component__ = __webpack_require__("../../../../../src/app/admin/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_add_event_add_event_component__ = __webpack_require__("../../../../../src/app/admin/events/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_edit_event_edit_event_component__ = __webpack_require__("../../../../../src/app/admin/events/edit-event/edit-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_event_form_event_form_component__ = __webpack_require__("../../../../../src/app/admin/events/event-form/event-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_view_events_view_events_component__ = __webpack_require__("../../../../../src/app/admin/events/view-events/view-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__classes_class_form_class_form_component__ = __webpack_require__("../../../../../src/app/admin/classes/class-form/class-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_add_class_add_class_component__ = __webpack_require__("../../../../../src/app/admin/classes/add-class/add-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classes_edit_class_edit_class_component__ = __webpack_require__("../../../../../src/app/admin/classes/edit-class/edit-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_view_classes_view_classes_component__ = __webpack_require__("../../../../../src/app/admin/classes/view-classes/view-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_view_users_view_users_component__ = __webpack_require__("../../../../../src/app/admin/users/view-users/view-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_5__events_add_event_add_event_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_edit_event_edit_event_component__["a" /* EditEventComponent */],
                __WEBPACK_IMPORTED_MODULE_7__events_event_form_event_form_component__["a" /* EventFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__events_view_events_view_events_component__["a" /* ViewEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__classes_class_form_class_form_component__["a" /* ClassFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__classes_add_class_add_class_component__["a" /* AddClassComponent */],
                __WEBPACK_IMPORTED_MODULE_11__classes_edit_class_edit_class_component__["a" /* EditClassComponent */],
                __WEBPACK_IMPORTED_MODULE_12__classes_view_classes_view_classes_component__["a" /* ViewClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__users_view_users_view_users_component__["a" /* ViewUsersComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/classes/add-class/add-class.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/classes/add-class/add-class.component.html":
/***/ (function(module, exports) {

module.exports = "<class-form [_class]=\"_class\" updateForm=\"false\"></class-form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/classes/add-class/add-class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Class__ = __webpack_require__("../../../../../src/app/entity/Class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddClassComponent = /** @class */ (function () {
    function AddClassComponent() {
        this._class = new __WEBPACK_IMPORTED_MODULE_1__entity_Class__["a" /* Class */]();
    }
    AddClassComponent.prototype.ngOnInit = function () {
    };
    AddClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-class',
            template: __webpack_require__("../../../../../src/app/admin/classes/add-class/add-class.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/classes/add-class/add-class.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddClassComponent);
    return AddClassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/classes/class-form/class-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/classes/class-form/class-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #classForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" required [(ngModel)]=\"_class.className\">\n  </div>\n\n  <button type=\"button\" (click)=\"performAction()\" class=\"btn btn-success\">Submit</button>\n\n  <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\" style=\"float:right\"\n    *ngIf=\"updateForm\">Delete</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/classes/class-form/class-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_Class__ = __webpack_require__("../../../../../src/app/entity/Class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_class_service__ = __webpack_require__("../../../../../src/app/services/class.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassFormComponent = /** @class */ (function () {
    function ClassFormComponent(classService, router) {
        this.classService = classService;
        this.router = router;
    }
    ClassFormComponent.prototype.ngOnInit = function () {
    };
    ClassFormComponent.prototype.performAction = function () {
        if (this.updateForm) {
            this.update();
        }
        else {
            this.add();
        }
        this.router.navigate(['/admin/classes/view']);
    };
    ClassFormComponent.prototype.add = function () {
        var _this = this;
        this.classService.add(this._class).subscribe(function (data) {
            _this._class = _this.classService.createObject(data);
        });
    };
    ClassFormComponent.prototype.update = function () {
        this.classService.update(this._class).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__entity_Class__["a" /* Class */])
    ], ClassFormComponent.prototype, "_class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ClassFormComponent.prototype, "updateForm", void 0);
    ClassFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'class-form',
            template: __webpack_require__("../../../../../src/app/admin/classes/class-form/class-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/classes/class-form/class-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ClassFormComponent);
    return ClassFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/classes/edit-class/edit-class.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/classes/edit-class/edit-class.component.html":
/***/ (function(module, exports) {

module.exports = "<class-form [_class]=\"_class\" updateForm=\"true\"></class-form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/classes/edit-class/edit-class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditClassComponent = /** @class */ (function () {
    function EditClassComponent(data) {
        this.data = data;
        this._class = this.data.storage;
    }
    EditClassComponent.prototype.ngOnInit = function () {
    };
    EditClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-class',
            template: __webpack_require__("../../../../../src/app/admin/classes/edit-class/edit-class.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/classes/edit-class/edit-class.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_Data__["a" /* Data */]])
    ], EditClassComponent);
    return EditClassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/classes/view-classes/view-classes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/classes/view-classes/view-classes.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n    <th>Name</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let class of classes\" (click)=\"viewClass(class)\">\n      <td>\n        {{ class.className }}\n      </td>\n    <tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/classes/view-classes/view-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_class_service__ = __webpack_require__("../../../../../src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewClassesComponent = /** @class */ (function () {
    function ViewClassesComponent(classService, data, router) {
        this.classService = classService;
        this.data = data;
        this.router = router;
    }
    ViewClassesComponent.prototype.ngOnInit = function () {
        this.getClasses();
    };
    ViewClassesComponent.prototype.getClasses = function () {
        var _this = this;
        this.classService.getAllClasses()
            .subscribe(function (data) { _this.classes = _this.classService.createObject(data); }, function (error) { return console.log(error); });
    };
    ViewClassesComponent.prototype.viewClass = function (_class) {
        this.data.storage = _class;
        this.router.navigate(['admin/classes/edit', _class.slug]);
    };
    ViewClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-classes',
            template: __webpack_require__("../../../../../src/app/admin/classes/view-classes/view-classes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/classes/view-classes/view-classes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_class_service__["a" /* ClassService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewClassesComponent);
    return ViewClassesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/events/add-event/add-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/events/add-event/add-event.component.html":
/***/ (function(module, exports) {

module.exports = "<event-form [event]=\"event\" [updateForm]=\"updateForm\"></event-form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/events/add-event/add-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Event__ = __webpack_require__("../../../../../src/app/entity/Event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEventComponent = /** @class */ (function () {
    function AddEventComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_1__entity_Event__["a" /* Event */]();
        this.updateForm = false;
    }
    AddEventComponent.prototype.ngOnInit = function () {
    };
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-event',
            template: __webpack_require__("../../../../../src/app/admin/events/add-event/add-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/events/add-event/add-event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/events/edit-event/edit-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/events/edit-event/edit-event.component.html":
/***/ (function(module, exports) {

module.exports = "<event-form [event]=\"event\" [updateForm]=\"updateForm\"></event-form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/events/edit-event/edit-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditEventComponent = /** @class */ (function () {
    function EditEventComponent(data) {
        this.data = data;
        this.updateForm = true;
        this.event = this.data.storage;
    }
    EditEventComponent.prototype.ngOnInit = function () {
    };
    EditEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-event',
            template: __webpack_require__("../../../../../src/app/admin/events/edit-event/edit-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/events/edit-event/edit-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_Data__["a" /* Data */]])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/events/event-form/event-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/events/event-form/event-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #eventForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" required [(ngModel)]=\"event.name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">About:</label>\n    <input type=\"text\" name=\"about\" id=\"about\" class=\"form-control\" required [(ngModel)]=\"event.about\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">date:</label>\n    <input type=\"text\" name=\"date\" id=\"date\" class=\"form-control\" required [(ngModel)]=\"event.date\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">slug:</label>\n    <input type=\"text\" name=\"slug\" id=\"slug\" class=\"form-control\" required [(ngModel)]=\"event.slug\">\n  </div>\n\n\n  <h3>Classes</h3>\n  <div *ngFor=\"let _class of classes\">\n    <input type=\"checkbox\" value=\"{{ _class.slug }}\" (click)=\"addOrRemoveClass(_class)\"\n        [checked]=\"isInEvent(_class)\"> {{ _class.className }}\n  </div>\n\n  <br/>\n\n  <button type=\"button\" (click)=\"performAction()\" class=\"btn btn-success\">Submit</button>\n\n  <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\" style=\"float:right\"\n      *ngIf=\"updateForm\">Delete</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/events/event-form/event-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Event__ = __webpack_require__("../../../../../src/app/entity/Event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_class_service__ = __webpack_require__("../../../../../src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventFormComponent = /** @class */ (function () {
    function EventFormComponent(eventService, classService, router) {
        this.eventService = eventService;
        this.classService = classService;
        this.router = router;
    }
    EventFormComponent.prototype.ngOnInit = function () {
        this.getAllClasses();
    };
    EventFormComponent.prototype.performAction = function () {
        if (this.updateForm) {
            this.update();
        }
        else {
            this.add();
        }
    };
    EventFormComponent.prototype.add = function () {
        var _this = this;
        this.eventService.add(this.event).subscribe(function (data) {
            _this.router.navigate(['/admin/events/view']);
        });
    };
    EventFormComponent.prototype.update = function () {
        var _this = this;
        this.eventService.update(this.event).subscribe(function (data) {
            _this.router.navigate(['/admin/events/view']);
        });
    };
    EventFormComponent.prototype.delete = function () {
        this.eventService.delete(this.event).subscribe();
        this.router.navigate(['/admin/events/view']);
    };
    EventFormComponent.prototype.getAllClasses = function () {
        var _this = this;
        this.classService.getAllClasses().subscribe(function (data) { _this.classes = _this.classService.createObject(data); }, function (error) { return console.log(error); });
    };
    EventFormComponent.prototype.addOrRemoveClass = function (_class) {
        var _this = this;
        var inEvent = false;
        if (this.event.classes == undefined) {
            this.event.classes = [];
        }
        this.event.classes.forEach(function (eventClass, index) {
            if (eventClass.id == _class.id) {
                _this.event.classes.splice(index, 1);
                inEvent = true;
                return;
            }
        });
        if (!inEvent) {
            this.event.classes.push(_class);
        }
    };
    EventFormComponent.prototype.isInEvent = function (_class) {
        if (!this.updateForm) {
            return false;
        }
        for (var _i = 0, _a = this.event.classes; _i < _a.length; _i++) {
            var eventClass = _a[_i];
            if (eventClass.id == _class.id) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entity_Event__["a" /* Event */])
    ], EventFormComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EventFormComponent.prototype, "updateForm", void 0);
    EventFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'event-form',
            template: __webpack_require__("../../../../../src/app/admin/events/event-form/event-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/events/event-form/event-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_3__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], EventFormComponent);
    return EventFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/events/view-events/view-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/events/view-events/view-events.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n    <th>Name</th>\n    <th>Date</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let event of events\" (click)=\"viewEvent(event)\">\n      <td>\n        {{ event.name }}\n      </td>\n      <td>\n        {{ event.date }}\n      </td>\n    <tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/events/view-events/view-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewEventsComponent = /** @class */ (function () {
    function ViewEventsComponent(eventService, router, data) {
        this.eventService = eventService;
        this.router = router;
        this.data = data;
    }
    ViewEventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    ViewEventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getAllEvents()
            .subscribe(function (data) { _this.events = _this.eventService.createObject(data); }, function (error) { return console.log("HTTP ERROR: " + error); });
    };
    ViewEventsComponent.prototype.viewEvent = function (event) {
        this.data.storage = event;
        this.router.navigate(['admin/events/edit', event.slug]);
    };
    ViewEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-events',
            template: __webpack_require__("../../../../../src/app/admin/events/view-events/view-events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/events/view-events/view-events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Data__["a" /* Data */]])
    ], ViewEventsComponent);
    return ViewEventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"events/add\">Add Event</button>\n<button routerLink=\"events/view\">View Events</button>\n\n<button routerLink=\"classes/add\">Add Class</button>\n<button routerLink=\"classes/view\">View Classes</button>\n\n<button routerLink=\"users/view\">View Users</button>\n"

/***/ }),

/***/ "../../../../../src/app/admin/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/admin/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/view-users/view-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-btn {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/view-users/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<strong>Because of the nature of how users register for this application users\ninformation can not be updated</strong>\n<br>\n\n<table class=\"table table-hover\">\n  <thead>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Email</th>\n    <th>Phone Number</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>\n        {{ user.firstName }}\n      </td>\n      <td>\n        {{ user.lastName }}\n      </td>\n      <td>\n        {{ user.email }}\n      </td>\n      <td>\n        {{ user.phoneNumber }}\n      </td>\n      <td>\n        <button type=\"button\" (click)=\"updateAdmin(user)\"\n            *ngIf=\"!user.admin; else removeAdmin\" class=\"btn btn-sm btn-warning custom-btn\">\n            Add Admin</button>\n        <ng-template #removeAdmin>\n          <button type=\"button\" (click)=\"updateAdmin(user)\"\n              *ngIf=\"user.admin\" class=\"btn btn-sm btn-warning custom-btn\">\n                  Remove Admin</button>\n        </ng-template>\n      </td>\n    <tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/view-users/view-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewUsersComponent = /** @class */ (function () {
    function ViewUsersComponent(userService, userProvider) {
        this.userService = userService;
        this.userProvider = userProvider;
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        console.log("Show User");
        console.log(this.userProvider.user);
    };
    ViewUsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = _this.userService.createObject(data);
        });
    };
    ViewUsersComponent.prototype.updateAdmin = function (user) {
        this.userService.updateAdmin(user).subscribe();
        this.getUsers();
    };
    ViewUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-users',
            template: __webpack_require__("../../../../../src/app/admin/users/view-users/view-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/view-users/view-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_User__["a" /* UserProvider */]])
    ], ViewUsersComponent);
    return ViewUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-8 offset-md-2\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_event_module__ = __webpack_require__("../../../../../src/app/event/event.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_bar_navigation_bar_component__ = __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_admin_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_class_service__ = __webpack_require__("../../../../../src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyCen_FJ-_VeBA12enUNE_JNhj20I_947cA",
    authDomain: "houndshobbiesregister.firebaseapp.com",
    databaseURL: "https://houndshobbiesregister.firebaseio.com",
    storageBucket: "houndshobbiesregister.appspot.com",
    messagingSenderId: "1057354111665"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6__event_event_module__["EventModule"],
                __WEBPACK_IMPORTED_MODULE_7__admin_admin_module__["AdminModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_17__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_21__services_class_service__["a" /* ClassService */],
                __WEBPACK_IMPORTED_MODULE_22__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_16__services_admin_auth_guard_service__["a" /* AdminAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_Data__["a" /* Data */],
                __WEBPACK_IMPORTED_MODULE_20__providers_User__["a" /* UserProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/entity/Class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript__ = __webpack_require__("../../../../json2typescript/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json2typescript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Class = /** @class */ (function () {
    function Class() {
        this.className = undefined;
        this.id = undefined;
        this.slug = undefined;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("className", String),
        __metadata("design:type", String)
    ], Class.prototype, "className", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("id", Number),
        __metadata("design:type", Number)
    ], Class.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("slug", String),
        __metadata("design:type", String)
    ], Class.prototype, "slug", void 0);
    Class = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonObject"]
    ], Class);
    return Class;
}());



/***/ }),

/***/ "../../../../../src/app/entity/Event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript__ = __webpack_require__("../../../../json2typescript/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Class__ = __webpack_require__("../../../../../src/app/entity/Class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Event = /** @class */ (function () {
    function Event() {
        this.id = undefined;
        this.name = undefined;
        this.about = undefined;
        this.date = undefined;
        this.slug = undefined;
        this.classes = undefined;
        this.truncateAbout = undefined;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("id", Number, false),
        __metadata("design:type", Number)
    ], Event.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("name", String),
        __metadata("design:type", String)
    ], Event.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("about", String),
        __metadata("design:type", String)
    ], Event.prototype, "about", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("date", String),
        __metadata("design:type", String)
    ], Event.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("slug", String),
        __metadata("design:type", String)
    ], Event.prototype, "slug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("classes", [__WEBPACK_IMPORTED_MODULE_1__Class__["a" /* Class */]]),
        __metadata("design:type", Array)
    ], Event.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("truncateAbout", String),
        __metadata("design:type", String)
    ], Event.prototype, "truncateAbout", void 0);
    Event = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonObject"]
    ], Event);
    return Event;
}());



/***/ }),

/***/ "../../../../../src/app/entity/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript__ = __webpack_require__("../../../../json2typescript/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("../../../../../src/app/entity/Event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User = /** @class */ (function () {
    function User() {
        this.id = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.email = undefined;
        this.phoneNumber = undefined;
        this.admin = undefined;
        this.slug = undefined;
        this.events = undefined;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("id", Number),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("firstName", String),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("lastName", String),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("email", String),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("phoneNumber", Number),
        __metadata("design:type", Number)
    ], User.prototype, "phoneNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("admin", Boolean),
        __metadata("design:type", Boolean)
    ], User.prototype, "admin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("slug", String),
        __metadata("design:type", String)
    ], User.prototype, "slug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("events", [__WEBPACK_IMPORTED_MODULE_1__Event__["a" /* Event */]]),
        __metadata("design:type", Array)
    ], User.prototype, "events", void 0);
    User = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonObject"]
    ], User);
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-index/event-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  margin-bottom: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-index/event-index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center header\">Upcoming Events</h1>\n<div class=\"row\">\n  <div class=\"col-md-4 card-wrapper\" *ngFor=\"let event of events\">\n    <event-card [event]=\"event\"></event-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-index/event-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventIndexComponent = /** @class */ (function () {
    function EventIndexComponent(eventService) {
        this.eventService = eventService;
    }
    EventIndexComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventIndexComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getAllEvents()
            .subscribe(function (data) { _this.events = _this.eventService.createObject(data); }, function (error) { return console.log("HTTP ERROR: " + error); });
    };
    EventIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-index',
            template: __webpack_require__("../../../../../src/app/event/event-index/event-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-index/event-index.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]])
    ], EventIndexComponent);
    return EventIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view_component__ = __webpack_require__("../../../../../src/app/event/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_index_event_index_component__ = __webpack_require__("../../../../../src/app/event/event-index/event-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/event/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__event_index_event_index_component__["a" /* EventIndexComponent */]
    },
    {
        path: ':slug',
        component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */]
    },
    {
        path: ':slug/register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    }
];
var EventRoutingModule = /** @class */ (function () {
    function EventRoutingModule() {
    }
    EventRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], EventRoutingModule);
    return EventRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_routing_module__ = __webpack_require__("../../../../../src/app/event/event-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view_component__ = __webpack_require__("../../../../../src/app/event/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_index_event_index_component__ = __webpack_require__("../../../../../src/app/event/event-index/event-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/event/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__event_routing_module__["a" /* EventRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__event_index_event_index_component__["a" /* EventIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */]
            ]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "../../../../../src/app/event/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Select your classes</h4>\n<div *ngFor=\"let class of event.classes\">\n  <input type=\"checkbox\" value=\"class.slug\" (click)=\"addClass(class)\" />\n  {{ class.className }}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Event__ = __webpack_require__("../../../../../src/app/entity/Event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.addClass = function (eventClass) {
        console.log(eventClass);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entity_Event__["a" /* Event */])
    ], RegisterComponent.prototype, "event", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("../../../../../src/app/event/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".event-name {\n  float: left;\n}\n\n.event-date {\n  float: right;\n  padding-top: 5px;\n}\n\n.event-wrapper {\n}\n\n.classDiv {\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1 class=\"event-name\">{{ event.name }}</h1>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <h3>About</h3>\n\n    <strong>Date: {{ event.date }}</strong>\n    <br/>\n\n    <p>{{ event.about }}</p>\n\n    <div *ngIf=\"isLoggedIn(); else notLoggedIn\">\n      <button class=\"btn btn-success\" (click)=\"registerUser()\" *ngIf=\"user != undefined && !userRegisteredForEvent(); else unRegister\">Register</button>\n\n      <ng-template #unRegister>\n        <button class=\"btn btn-warning\" (click)=\"unregisterEvent()\">Unregister</button>\n      </ng-template>\n    </div>\n\n    <ng-template #notLoggedIn>\n      <strong>You must be logged in to register for an event.</strong>\n    </ng-template>\n  </div>\n  <div class=\"col-md-5\">\n    <h3>Classes</h3>\n    <div class=\"classDiv\" *ngFor=\"let class of event.classes\">\n      {{ class.className }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewComponent = /** @class */ (function () {
    function ViewComponent(eventService, userService, data, activatedRoute, router, userProvider) {
        var _this = this;
        this.eventService = eventService;
        this.userService = userService;
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userProvider = userProvider;
        this.register = false;
        /**
         * Make sure not only that it exists, but it has a name
         * (So we can be sure it is an event)
         */
        //if (this.data.storage.name !== null) {
        if (this.data.storage.name !== undefined) {
            this.event = this.data.storage;
        }
        else {
            this.activatedRoute.params.subscribe(function (params) {
                var slug = params['slug'];
                console.log(slug);
                _this.eventService.getEventBySlug(slug).subscribe(function (data) {
                    _this.event = _this.eventService.createObject(data);
                    _this.addEventToData();
                });
            });
        }
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.user = this.userProvider.user;
    };
    ViewComponent.prototype.registerUser = function () {
        this.user.events.push(this.event);
        this.userService.addOrRemoveEvent(this.user).subscribe();
    };
    ViewComponent.prototype.addEventToData = function () {
        this.data.storage = this.event;
    };
    ViewComponent.prototype.userRegisteredForEvent = function () {
        var _this = this;
        var eventFound = false;
        this.userProvider.user.events.forEach(function (_event) {
            if (_this.event.id == _event.id) {
                eventFound = true;
            }
        });
        if (eventFound) {
            return true;
        }
        else {
            return false;
        }
    };
    ViewComponent.prototype.unregisterEvent = function () {
        var index = this.user.events.indexOf(this.event);
        this.user.events.splice(index, 1);
        this.userService.addOrRemoveEvent(this.user).subscribe();
    };
    ViewComponent.prototype.isLoggedIn = function () {
        if (this.userProvider.user != null) {
            return true;
        }
        else {
            return false;
        }
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/event/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/view/view.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__providers_User__["a" /* UserProvider */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2.header {\n  text-align: center !important;\n}\n\np.about {\n\n}\n\nh2.call-to-action {\n  margin-top: 35px;\n}\n\ndiv.about {\n  margin-bottom: 25px;\n  padding-bottom: 15px;\n}\n\ndiv.about-card {\n  background-color: #5881d3 !important;\n  color: white;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"main-header\">\n  Burlington Hobbies\n</h1>\n<div class=\"about-wrapper\">\n  <div class=\"col-md-8 offset-md-2 about\">\n    <h2 class=\"header\">About</h2>\n    Burlington Hobbies has been in business since 2012, and has had an RC Race Track\n    since 2014. Since opening the track has held\n    over 100 events, and hosted over 1,000 racers.\n  </div>\n</div>\n\n<div class=\"row about-card-wrapper\">\n  <div class=\"col-md-4 about-card\">\n    <p class=\"header\">Rookie Racers</p>\n    <p class=\"description\">Join us every Wednesday for rookie racers and get help\n    from our experienced staff, and other drivers. Learn how to setup, tune, and\n    drive your vehicle. After some practice we run a race with those who show up.</p>\n  </div>\n  <div class=\"col-md-4 about-card\">\n    <p class=\"header\">Friday Night Racing</p>\n    <p class=\"description\">Join us every Friday at 7 for a fun night of racing!\n    Club racing is open to the public, and rental are available. Bring what you\n    have, any classes with enough drivers will be ran.</p>\n  </div>\n  <div class=\"col-md-4 about-card\">\n    <p class=\"header\">Summer Series</p>\n    <p class=\"description\">Join us for our Summer Series starting June 6th! This\n    will be a 12 race event where each position gets a certain amount of points.\n    The driver with the most amount of points at the end of the series wins.</p>\n  </div>\n</div>\n\n<div class=\"row view-events-wrapper\">\n  <div class=\"col-md-12\">\n    <h2 class=\"call-to-action\">Ready to have some fun?</h2>\n    <button class=\"btn btn-large btn-success\" routerLink=\"/events\">View Our Events</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(eventService) {
        this.eventService = eventService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    IndexComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getAllEvents()
            .subscribe(function (data) { _this.events = _this.eventService.createObject(data); }, function (error) { return console.log("HTTP ERROR: " + error); });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #5881d3 !important;\n}\n\nnav {\n  margin-bottom: 25px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Burlington Hobbies</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngFor=\"let link of links\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"link.routerLink\"\n            *ngIf=\"showAdminLink(link)\">{{ link.linkName }}</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav mr-auto navbar-right\">\n      <li *ngIf=\"isLoggedIn(); else login\">\n        <a class=\"nav-link\" routerLink=\"user\">{{ userProvider.user?.firstName }} {{ userProvider.user?.lastName }}</a>\n      </li>\n      <li *ngIf=\"isLoggedIn()\">\n        <a class=\"nav-link\" (click)=\"logout()\" style=\"float:right\">Logout</a>\n      </li>\n\n      <ng-template #login>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"loginUser()\">Login</a>\n        </li>\n      </ng-template>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(authService, router, userProvider) {
        this.authService = authService;
        this.router = router;
        this.userProvider = userProvider;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.links = [
            {
                "routerLink": "events",
                "linkName": "Events",
                "admin": false
            },
            {
                "routerLink": "admin",
                "linkName": "Admin",
                "admin": true
            }
        ];
    };
    NavigationBarComponent.prototype.loginUser = function () {
        this.authService.signInWithGoogle();
    };
    NavigationBarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavigationBarComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    NavigationBarComponent.prototype.showAdminLink = function (link) {
        if (link.admin) {
            if (this.userProvider.user != null && this.userProvider.user.admin) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    NavigationBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation-bar',
            template: __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__providers_User__["a" /* UserProvider */]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/Data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
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

var Data = /** @class */ (function () {
    function Data() {
    }
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "../../../../../src/app/providers/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
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

var UserProvider = /** @class */ (function () {
    function UserProvider() {
        this.user = null;
    }
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Application Routes
 */
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__index_index_component__["a" /* IndexComponent */]
    },
    {
        path: 'user',
        loadChildren: '../user/user.module#UserModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'events',
        loadChildren: '../event/event.module#EventModule'
    },
    {
        path: 'admin',
        loadChildren: '../admin/admin.module#AdminModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_admin_auth_guard_service__["a" /* AdminAuthGuardService */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(router, userProvider) {
        this.router = router;
        this.userProvider = userProvider;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        if (this.userProvider.user !== null && this.userProvider.user.admin) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AdminAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__providers_User__["a" /* UserProvider */]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * This function makes a get request to the given url
     * @param url the URL to send the request too
     * @return Observable the response observale
     */
    ApiService.prototype.getRequest = function (url) {
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* retry */])(3));
    };
    /**
     * This function makes a POST request to the given URL, with the given data
     * @param url the URL to send the request too
     * @param data the data to send with the API call
     * @return Observable the response observale
     */
    ApiService.prototype.postRequest = function (url, data) {
        return this.http.post(url, data, this.httpOptions);
    };
    ApiService.prototype.deleteRequest = function (url, data) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            }),
            body: data
        };
        return this.http.delete(url, options);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, userProvider) {
        this.router = router;
        this.userProvider = userProvider;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.userProvider.user != null) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__providers_User__["a" /* UserProvider */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_User__ = __webpack_require__("../../../../../src/app/providers/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { firebase } from '@firebase/app';



var AuthService = /** @class */ (function () {
    function AuthService(af, userProvider, userService) {
        var _this = this;
        this.af = af;
        this.userProvider = userProvider;
        this.userService = userService;
        this.user = this.af.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                _this.userService.getUser(_this.userDetails.email, _this.userDetails.displayName).subscribe(function (data) {
                    _this.userProvider.user = _this.userService.createObject(data);
                });
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInWithGoogle = function () {
        return this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userProvider.user == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this.userProvider.user = null;
        return this.af.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__providers_User__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/class.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_json2typescript__ = __webpack_require__("../../../../json2typescript/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Class__ = __webpack_require__("../../../../../src/app/entity/Class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassService = /** @class */ (function () {
    function ClassService(apiService) {
        this.apiService = apiService;
    }
    ClassService.prototype.getAllClasses = function () {
        return this.apiService.getRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/classes");
    };
    ClassService.prototype.update = function (_class) {
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/classes/update", JSON.stringify(_class));
    };
    ClassService.prototype.add = function (_class) {
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/classes/insert", JSON.stringify(_class));
    };
    ClassService.prototype.createObject = function (response) {
        var jsonConvert = new __WEBPACK_IMPORTED_MODULE_2_json2typescript__["JsonConvert"]();
        jsonConvert.ignorePrimitiveChecks = false;
        jsonConvert.valueCheckingMode = __WEBPACK_IMPORTED_MODULE_2_json2typescript__["ValueCheckingMode"].ALLOW_NULL;
        try {
            return jsonConvert.deserialize(response, __WEBPACK_IMPORTED_MODULE_3__entity_Class__["a" /* Class */]);
        }
        catch (e) {
            console.log(e);
        }
    };
    ClassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_json2typescript__ = __webpack_require__("../../../../json2typescript/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Event__ = __webpack_require__("../../../../../src/app/entity/Event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventService = /** @class */ (function () {
    function EventService(apiService) {
        this.apiService = apiService;
    }
    EventService.prototype.getAllEvents = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint);
        return this.apiService.getRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/events");
    };
    EventService.prototype.getEventBySlug = function (slug) {
        return this.apiService.getRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/events/" + slug);
    };
    EventService.prototype.createObject = function (response) {
        var jsonConvert = new __WEBPACK_IMPORTED_MODULE_2_json2typescript__["JsonConvert"]();
        jsonConvert.ignorePrimitiveChecks = false;
        jsonConvert.valueCheckingMode = __WEBPACK_IMPORTED_MODULE_2_json2typescript__["ValueCheckingMode"].ALLOW_NULL;
        try {
            return jsonConvert.deserialize(response, __WEBPACK_IMPORTED_MODULE_3__entity_Event__["a" /* Event */]);
        }
        catch (e) {
            console.log(e);
        }
    };
    EventService.prototype.add = function (event) {
        var jsonEvent = JSON.stringify(event);
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/events/insert", jsonEvent);
    };
    EventService.prototype.update = function (event) {
        var jsonEvent = JSON.stringify(event);
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/events/update", jsonEvent);
    };
    EventService.prototype.delete = function (event) {
        return this.apiService.deleteRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/events/delete", event);
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_json2typescript__ = __webpack_require__("../../../../json2typescript/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_User__ = __webpack_require__("../../../../../src/app/entity/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
    }
    UserService.prototype.getAllUsers = function () {
        return this.apiService.getRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users");
    };
    UserService.prototype.getUserBySlug = function (slug) {
        return this.apiService.getRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/" + slug);
    };
    UserService.prototype.add = function (user) {
        var jsonUser = JSON.stringify(user);
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/insert", jsonUser);
    };
    UserService.prototype.update = function (user) {
        var jsonUser = JSON.stringify(user);
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/update", jsonUser);
    };
    UserService.prototype.delete = function (user) {
        var jsonUser = JSON.stringify(user);
        return this.apiService.deleteRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/delete", jsonUser);
    };
    UserService.prototype.getUser = function (email, fullName) {
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/create-or-return", {
            "email": email,
            "fullName": fullName
        });
    };
    UserService.prototype.createObject = function (response) {
        var jsonConvert = new __WEBPACK_IMPORTED_MODULE_2_json2typescript__["JsonConvert"]();
        jsonConvert.ignorePrimitiveChecks = false;
        jsonConvert.valueCheckingMode = __WEBPACK_IMPORTED_MODULE_2_json2typescript__["ValueCheckingMode"].ALLOW_NULL;
        try {
            return jsonConvert.deserialize(response, __WEBPACK_IMPORTED_MODULE_3__entity_User__["a" /* User */]);
        }
        catch (e) {
            console.log(e);
        }
    };
    UserService.prototype.addOrRemoveEvent = function (user) {
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/" + user.slug + "/add-or-remove-event", JSON.stringify(user));
    };
    UserService.prototype.updateAdmin = function (user) {
        return this.apiService.postRequest(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/users/" + user.slug + "/admin", JSON.stringify(user));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/event-card/event-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container {\n  background-color: rgb(207, 215, 232, 0.8);\n  border-radius: 2px;\n}\n\n.custom-card {\n  min-height: 300px;\n  margin-bottom: 15px;\n  border-radius: 2px;\n  padding: 15px;\n}\n\n.custom-card:hover {\n  cursor: pointer;\n  background-color: #e9eef7;\n  -webkit-transition: -webkit-box-shadow .2s;\n  transition: -webkit-box-shadow .2s;\n  transition: box-shadow .2s;\n  transition: box-shadow .2s, -webkit-box-shadow .2s;\n  -webkit-transition: box-shadow .2s;\n  -webkit-box-shadow: 2px 2px 10px 1px #888888;\n          box-shadow: 2px 2px 10px 1px #888888;\n}\n\n.custom-card:hover .classes {\n  display: block;\n}\n\n.event-name {\n  font-size: 25px;\n}\n\n.classes {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/event-card/event-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n  <div class=\"custom-card\" (click)=\"goToEvent()\">\n    <div class=\"card-content\">\n      <h1 class=\"event-name\">{{ event.name }}</h1>\n      <p>{{ event.date }}</p>\n      <p>{{ event.truncateAbout }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/event-card/event-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Data__ = __webpack_require__("../../../../../src/app/providers/Data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventCardComponent = /** @class */ (function () {
    function EventCardComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    EventCardComponent.prototype.ngOnInit = function () {
    };
    EventCardComponent.prototype.goToEvent = function () {
        this.data.storage = this.event;
        this.router.navigate(['/events/', this.event.slug]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EventCardComponent.prototype, "event", void 0);
    EventCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'event-card',
            template: __webpack_require__("../../../../../src/app/shared/event-card/event-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/event-card/event-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__providers_Data__["a" /* Data */]])
    ], EventCardComponent);
    return EventCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_card_event_card_component__ = __webpack_require__("../../../../../src/app/shared/event-card/event-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_card_event_card_component__["a" /* EventCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__event_card_event_card_component__["a" /* EventCardComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
    production: false,
    apiEndpoint: "http://192.168.1.34:8888/api"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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