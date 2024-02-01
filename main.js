"use strict";
(self["webpackChunkeuzan_ng"] = self["webpackChunkeuzan_ng"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_pages_sass_landing_one_sass_landing_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/sass-landing-one/sass-landing-one.component */ 774);
/* harmony import */ var _components_pages_app_landing_app_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/app-landing/app-landing.component */ 9560);
/* harmony import */ var _components_pages_app_landing_en_app_landing_en_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-landing-en.component */ 11);
/* harmony import */ var _components_pages_app_landing_ar_app_landing_ar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-landing-ar.component */ 5552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _components_pages_app_landing_app_landing_component__WEBPACK_IMPORTED_MODULE_1__.AppLandingComponent
}, {
  path: 'entreprise',
  component: _components_pages_sass_landing_one_sass_landing_one_component__WEBPACK_IMPORTED_MODULE_0__.SassLandingOneComponent
}, {
  path: 'fr',
  component: _components_pages_app_landing_app_landing_component__WEBPACK_IMPORTED_MODULE_1__.AppLandingComponent
}, {
  path: 'en',
  component: _components_pages_app_landing_en_app_landing_en_component__WEBPACK_IMPORTED_MODULE_2__.AppLandingEnComponent
}, {
  path: 'ar',
  component: _components_pages_app_landing_ar_app_landing_ar_component__WEBPACK_IMPORTED_MODULE_3__.AppLandingArComponent
}, {
  path: '**',
  component: _components_pages_app_landing_app_landing_component__WEBPACK_IMPORTED_MODULE_1__.AppLandingComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrolltop */ 815);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 6442);








class AppComponent {
  constructor(router, platform) {
    this.router = router;
    this.platform = platform;
  }
  ngOnInit() {
    this.recallJsFuntions();
  }
  recallJsFuntions() {
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel)).subscribe(event => {
      this.location = this.router.url;
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy
    }])],
    decls: 10,
    vars: 0,
    consts: [[1, "tab"], [1, "container"], [1, "row"], ["routerLink", "/", "routerLinkActive", "active", 1, "col-1"], ["routerLink", "/entreprise", 1, "col-1"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "ProBoutik");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "router-outlet")(8, "app-footer")(9, "ngx-scrolltop");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_6__.NgxScrollTopComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.tab[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-weight: bold;\n  padding: 9px;\n}\n\n.active[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-left: 15px;\n}\n\n.col-1[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: white;\n  margin-left: 15px;\n}\n.col-1[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: var(--primary);\n  border-radius: 100px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-weight: bold;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 100px;\n  color: var(--primary);\n  padding-left: 15px;\n  padding-right: 10px;\n  margin-left: 15px;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 767px) {\n  .tab[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLGFBQUE7RUFBTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4udGFiIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogOXB4O1xufVxuXG4uYWN0aXZlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jb2wtMSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICA7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnRhYiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-scrolltop */ 815);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_pages_sass_landing_one_sass_landing_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/sass-landing-one/sass-landing-one.component */ 774);
/* harmony import */ var _components_pages_app_landing_app_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/app-landing/app-landing.component */ 9560);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 7902);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 6442);
/* harmony import */ var _components_common_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/newsletter/newsletter.component */ 5242);
/* harmony import */ var _components_pages_app_landing_app_banner_app_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/app-landing/app-banner/app-banner.component */ 1869);
/* harmony import */ var _components_pages_app_landing_app_why_choose_app_why_choose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/app-landing/app-why-choose/app-why-choose.component */ 4473);
/* harmony import */ var _components_pages_app_landing_app_features_app_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/app-landing/app-features/app-features.component */ 837);
/* harmony import */ var _components_pages_app_landing_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/app-landing/app-screenshots/app-screenshots.component */ 8866);
/* harmony import */ var _components_pages_app_landing_app_how_to_use_app_how_to_use_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/app-landing/app-how-to-use/app-how-to-use.component */ 7446);
/* harmony import */ var _components_pages_app_landing_app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/app-landing/app-pricing/app-pricing.component */ 3386);
/* harmony import */ var _components_pages_app_landing_app_testimonials_app_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/app-landing/app-testimonials/app-testimonials.component */ 1133);
/* harmony import */ var _components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/modal/modal.component */ 677);
/* harmony import */ var _components_pages_app_landing_en_app_landing_en_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-landing-en.component */ 11);
/* harmony import */ var _components_pages_app_landing_en_app_banner_app_banner_en_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-banner/app-banner-en.component */ 3880);
/* harmony import */ var _components_pages_app_landing_en_app_features_app_features_component_en__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-features/app-features.component-en */ 9731);
/* harmony import */ var _components_pages_app_landing_en_app_why_choose_app_why_choose_component_en__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-why-choose/app-why-choose.component-en */ 2508);
/* harmony import */ var _components_pages_app_landing_en_app_pricing_app_pricing_component_en__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-pricing/app-pricing.component-en */ 783);
/* harmony import */ var _components_pages_app_landing_en_app_testimonials_app_testimonials_component_en__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/app-landing-en/app-testimonials/app-testimonials.component-en */ 2022);
/* harmony import */ var _components_pages_app_landing_ar_app_landing_ar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-landing-ar.component */ 5552);
/* harmony import */ var _components_pages_app_landing_ar_app_banner_app_banner_ar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-banner/app-banner-ar.component */ 8850);
/* harmony import */ var _components_pages_app_landing_ar_app_why_choose_app_why_choose_component_ar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-why-choose/app-why-choose.component-ar */ 887);
/* harmony import */ var _components_pages_app_landing_ar_app_features_app_features_component_ar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-features/app-features.component-ar */ 7672);
/* harmony import */ var _components_pages_app_landing_ar_app_pricing_app_pricing_component_ar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-pricing/app-pricing.component-ar */ 2195);
/* harmony import */ var _components_pages_app_landing_ar_app_testimonials_app_testimonials_component_ar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/app-landing-ar/app-testimonials/app-testimonials.component-ar */ 5806);
/* harmony import */ var _components_common_navbaren_navbar_component_en__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/common/navbaren/navbar.component-en */ 7539);
/* harmony import */ var _components_common_navbarar_navbar_component_ar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/common/navbarar/navbar.component-ar */ 7907);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 1699);


































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_32__.CarouselModule, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_33__.NgxScrollTopModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_pages_sass_landing_one_sass_landing_one_component__WEBPACK_IMPORTED_MODULE_2__.SassLandingOneComponent, _components_pages_app_landing_app_landing_component__WEBPACK_IMPORTED_MODULE_3__.AppLandingComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _components_common_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__.NewsletterComponent, _components_pages_app_landing_app_banner_app_banner_component__WEBPACK_IMPORTED_MODULE_7__.AppBannerComponent, _components_pages_app_landing_ar_app_banner_app_banner_ar_component__WEBPACK_IMPORTED_MODULE_22__.AppBannerArComponent, _components_pages_app_landing_en_app_banner_app_banner_en_component__WEBPACK_IMPORTED_MODULE_16__.AppBannerEnComponent, _components_pages_app_landing_app_why_choose_app_why_choose_component__WEBPACK_IMPORTED_MODULE_8__.AppWhyChooseComponent, _components_pages_app_landing_en_app_why_choose_app_why_choose_component_en__WEBPACK_IMPORTED_MODULE_18__.AppWhyChooseEnComponent, _components_pages_app_landing_ar_app_why_choose_app_why_choose_component_ar__WEBPACK_IMPORTED_MODULE_23__.AppWhyChooseArComponent, _components_pages_app_landing_app_features_app_features_component__WEBPACK_IMPORTED_MODULE_9__.AppFeaturesComponent, _components_pages_app_landing_en_app_features_app_features_component_en__WEBPACK_IMPORTED_MODULE_17__.AppFeaturesEnComponent, _components_pages_app_landing_ar_app_features_app_features_component_ar__WEBPACK_IMPORTED_MODULE_24__.AppFeaturesArComponent, _components_pages_app_landing_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_10__.AppScreenshotsComponent, _components_pages_app_landing_app_how_to_use_app_how_to_use_component__WEBPACK_IMPORTED_MODULE_11__.AppHowToUseComponent, _components_pages_app_landing_app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_12__.AppPricingComponent, _components_pages_app_landing_en_app_pricing_app_pricing_component_en__WEBPACK_IMPORTED_MODULE_19__.AppPricingEnComponent, _components_pages_app_landing_ar_app_pricing_app_pricing_component_ar__WEBPACK_IMPORTED_MODULE_25__.AppPricingArComponent, _components_pages_app_landing_app_testimonials_app_testimonials_component__WEBPACK_IMPORTED_MODULE_13__.AppTestimonialsComponent, _components_pages_app_landing_en_app_testimonials_app_testimonials_component_en__WEBPACK_IMPORTED_MODULE_20__.AppTestimonialsEnComponent, _components_pages_app_landing_ar_app_testimonials_app_testimonials_component_ar__WEBPACK_IMPORTED_MODULE_26__.AppTestimonialsArComponent, _components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__.ModalComponent, _components_pages_app_landing_en_app_landing_en_component__WEBPACK_IMPORTED_MODULE_15__.AppLandingEnComponent, _components_pages_app_landing_ar_app_landing_ar_component__WEBPACK_IMPORTED_MODULE_21__.AppLandingArComponent, _components_common_navbaren_navbar_component_en__WEBPACK_IMPORTED_MODULE_27__.NavbarEnComponent, _components_common_navbarar_navbar_component_ar__WEBPACK_IMPORTED_MODULE_28__.NavbarArComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_32__.CarouselModule, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_33__.NgxScrollTopModule]
  });
})();

/***/ }),

/***/ 6442:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


class FooterComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 50,
    vars: 1,
    consts: [[1, "container"], [1, "footer-area"], [1, "row"], [1, "col-lg-2", "col-sm-6"], [1, "pl-90", "logo"], ["src", "assets/img/app-landing/Lobo_Proboutik.png ", "alt", "logo ", 3, "width"], [1, "col-lg-3", "col-sm-6"], [1, "footer-widget", "pl-90"], ["href", "#"], [1, "flaticon-right"], [1, "col-lg-4", "col-sm-6"], ["src", "../../../../assets/img/app-landing/store.png", "alt", ""], ["href", "https://www.facebook.com/ProxalysSn", "target", "_blank"], ["href", "https://api.whatsapp.com/send?phone=%2B221760145096&data=ARDrn1NV9GMq4v2Ux_uUwALvi6vmy_CxyXmmKa9LjHe9hjcG4KcEUVoWMFp5V_wEIB1XCOdPNcnDztxxY9JMQQyvwFXmXZt1W87FYWwJaRkqXE-7UHyDJvVglD7teBeQ7WNgoC52kvLf4pdqyW_Qr_KlXA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2BnA3SQzE8ubaVF0En_Ydc7XK8g1u8mVuqNb71H2ule1L6AaY6X_5K4dQ", "target", "_blank"], ["href", "https://www.linkedin.com/company/proboutik/ ", "target", "_blank"], [1, "copyright-area"], [1, "lh-1", "float-start", "mt-5", "mb-5"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 0)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul")(12, "li")(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " thierno.sakho@proxalys.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " +221 77 253 15 09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Dakar S\u00E9n\u00E9gal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "div", 7)(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "T\u00E9l\u00E9charger l'application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6)(30, "div", 7)(31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "R\u00E9seaux Sociaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul")(34, "li")(35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15)(47, "div", 0)(48, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A9 2023 Proboutik. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 90);
      }
    },
    styles: [".footer-area[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-top: 2px solid BLACK;\n  padding-top: 85px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black);\n  margin-bottom: 30px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  display: flex;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: rgba(28, 28, 28, 0.8);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 154.5%;\n  \n\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 0;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  transition: var(--transition);\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--black);\n  transition: var(--transition);\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #513fcb;\n  margin-left: 2px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #513fcb;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  top: -2px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--black);\n  transition: var(--transition);\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #513fcb;\n  margin-left: 2px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #513fcb;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  top: -2px;\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: -2px;\n  font-size: 10px;\n  position: relative;\n  transition: var(--transition);\n}\n.footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.footer-area[_ngcontent-%COMP%]   .pl-90[_ngcontent-%COMP%] {\n  padding-left: 90px;\n}\n.footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-top: 100px;\n  border-top: 2px solid BLACK;\n}\n.footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black);\n  margin-bottom: 0;\n  text-align: end;\n}\n.footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #165885;\n}\n.footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   .lh-1[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  \n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  \n\n}\n\n@media only screen and (max-width: 767px) {\n  .footer-area[_ngcontent-%COMP%] {\n    padding-top: 200px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .pl-90[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 10px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    text-align: center;\n    margin-top: 18px;\n    line-height: 20px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .footer-area[_ngcontent-%COMP%] {\n    padding-top: 220px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .pl-90[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 36px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .footer-area[_ngcontent-%COMP%]   .copyright-area[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  color: var(--blue, #2A63E2);\n  text-align: center;\n  font-family: Open Sans;\n  font-size: 28px;\n  font-style: italic;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 2.52px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRVk7RUFDSSxtQkFBQTtBQUFoQjtBQUdRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQURaO0FBR1E7RUFDSSxhQUFBO0FBRFo7QUFFWTtFQUNJLGtCQUFBO0FBQWhCO0FBQ2dCO0VBQ0kscUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSw2QkFBQTtBQUNwQjtBQUdRO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURaO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFEWjtBQUVZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBaEI7QUFDZ0I7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0FBQ3BCO0FBQW9CO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRXhCO0FBQW9CO0VBQ0ksY0FBQTtBQUV4QjtBQUFvQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFFeEI7QUFDZ0I7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUNwQjtBQUFvQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUV4QjtBQUFvQjtFQUNJLGNBQUE7QUFFeEI7QUFBb0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRXhCO0FBQ2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksZ0JBQUE7QUFDcEI7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFHUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRFo7QUFFWTtFQUNJLG1CQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksY0FBQTtBQUNwQjtBQUdRO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBRFo7O0FBTUE7RUFDSTtJQUNJLGtCQUFBO0VBSE47RUFJTTtJQUNJLG1CQUFBO0VBRlY7RUFHVTtJQUNJLG1CQUFBO0VBRGQ7RUFJYztJQUNJLGtCQUFBO0VBRmxCO0VBTWM7SUFDSSxtQkFBQTtFQUpsQjtFQU9VO0lBQ0ksbUJBQUE7RUFMZDtFQU9VO0lBQ0ksbUJBQUE7RUFMZDtFQVFNO0lBQ0ksZUFBQTtFQU5WO0VBUU07SUFDSSxrQkFBQTtJQUNBLGdCQUFBO0VBTlY7RUFPVTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBTGQ7QUFDRjtBQVlBO0VBQ0k7SUFDSSxrQkFBQTtFQVZOO0VBV007SUFDSSxtQkFBQTtFQVRWO0VBVVU7SUFDSSxtQkFBQTtFQVJkO0VBV007SUFDSSxlQUFBO0VBVFY7RUFXTTtJQUNJLGdCQUFBO0VBVFY7RUFVVTtJQUNJLGVBQUE7RUFSZDtBQUNGO0FBYUE7RUFHWTtJQUNJLG1CQUFBO0VBYmQ7RUFnQmM7SUFDSSxlQUFBO0VBZGxCO0VBa0JNO0lBQ0ksZ0JBQUE7RUFoQlY7QUFDRjtBQXdCQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBdEJKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1hcmVhIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIEJMQUNLO1xuICAgIHBhZGRpbmctdG9wOiA4NXB4O1xuICAgIC5mb290ZXItd2lkZ2V0IHtcbiAgICAgICAgLmZvb3Rlci1sb2dvIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItbGluayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjgwKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTU0LjUlO1xuICAgICAgICAgICAgLyogMjcuODFweCAqL1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1MTNmY2I7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUxM2ZjYjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUxM2ZjYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTEzZmNiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBsLTkwIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICAgIH1cbiAgICAuY29weXJpZ2h0LWFyZWEge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgQkxBQ0s7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTY1ODg1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGgtMSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMwMDApO1xuICAgICAgICAgICAgLyogVGV4dC9TbWFsbC9Ob3JtYWwgKi9cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgICAvKiAyMXB4ICovXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuZm9vdGVyLWFyZWEge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gICAgICAgIC5mb290ZXItd2lkZ2V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyLWxvZ28ge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXItbGluayB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGwtOTAge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb3B5cmlnaHQtYXJlYSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuZm9vdGVyLWFyZWEge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjIwcHg7XG4gICAgICAgIC5mb290ZXItd2lkZ2V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGwtOTAge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb3B5cmlnaHQtYXJlYSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuZm9vdGVyLWFyZWEge1xuICAgICAgICAuZm9vdGVyLXdpZGdldCB7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvcHlyaWdodC1hcmVhIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge31cblxuLmxvZ28ge1xuICAgIGNvbG9yOiB2YXIoLS1ibHVlLCAjMkE2M0UyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi41MnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 677:
/*!************************************************************!*\
  !*** ./src/app/components/common/modal/modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComponent: () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);


class ModalComponent {
  constructor(modal) {
    this.modal = modal;
  }
  static #_ = this.ɵfac = function ModalComponent_Factory(t) {
    return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ModalComponent,
    selectors: [["app-modal"]],
    decls: 7,
    vars: 0,
    consts: [[1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "body"], ["frameborder", "0", "allow", "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "src", "assets/video/pub.mp4", 1, "embed-responsive-item"], ["videoIframe", ""]],
    template: function ModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_2_listener() {
          return ctx.modal.dismissAll("Close click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n.modal-body[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 996.755px;\n  height: 560.675px;\n  flex-shrink: 0;\n  border-radius: 25.835px;\n  border: 3.445px solid var(--ultra-light-grey, #DAE3EA);\n}\n.modal-body[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 25.835px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzREFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBR1oiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgLmJvZHkge1xuICAgICAgICB3aWR0aDogOTk2Ljc1NXB4O1xuICAgICAgICBoZWlnaHQ6IDU2MC42NzVweDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1LjgzNXB4O1xuICAgICAgICBib3JkZXI6IDMuNDQ1cHggc29saWQgdmFyKC0tdWx0cmEtbGlnaHQtZ3JleSwgI0RBRTNFQSk7XG4gICAgICAgIGlmcmFtZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1LjgzNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7902:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/services.service */ 8119);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);





function NavbarComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "sticky": a0
  };
};
class NavbarComponent {
  constructor(viewportScroller, router, service, platform) {
    this.viewportScroller = viewportScroller;
    this.router = router;
    this.service = service;
    this.platform = platform;
    this.classApplied = false;
    // Navbar Sticky
    this.isSticky = false;
    this.deviceInfo = '';
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {}
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log(this.deviceInfo);
    console.log('====================================');
  }
  selectLanguage(select) {
    this.router.navigateByUrl(select.value);
    console.log('====================================');
    console.log(select.value);
    console.log('====================================');
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
          return ctx.checkScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 47,
    vars: 8,
    consts: [[1, "div"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 3, "ngClass"], [1, "container"], ["routerLink", "/app-landing", 1, "navbar-brand"], ["src", "assets/img/app-landing/Lobo_Proboutik.png ", "alt", "logo ", 3, "width"], ["type", "button ", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent ", 1, "collapse", "navbar-collapse", "mb-3"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "navbar-nav", "ms-auto", "for-responsive"], [1, "navbar-btn"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["data-trigger-class", "li4-btn li4-btn--subtle js-tab-focus", 1, "language-picker", "js-language-picker"], ["action", "", 1, "language-picker__form"], ["name", "language-picker-select", "id", "language-picker-select", 3, "change"], ["select", ""], ["disabled", "", "selected", ""], ["value", "en"], ["value", "/"], ["value", "ar"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() {
          return ctx.toggleClass();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7)(9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_14_listener() {
          return ctx.onClick("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_17_listener() {
          return ctx.onClick("services");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 12)(20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_20_listener() {
          return ctx.onClick("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "A Propos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 14)(23, "li", 12)(24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_24_listener() {
          ctx.toggleClass();
          return ctx.onClick("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 12)(27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_27_listener() {
          ctx.toggleClass();
          return ctx.onClick("services");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 12)(30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_30_listener() {
          ctx.toggleClass();
          return ctx.onClick("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NavbarComponent_a_33_Template, 2, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NavbarComponent_a_34_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "form", 19)(37, "select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NavbarComponent_Template_select_change_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selectLanguage(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Lang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0639\u0631\u0628\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.classApplied);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 95px;\n  background: white !important;\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.150000006);\n  box-sizing: border-box;\n}\n.navbar.sticky[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n  position: fixed;\n  background-color: white !important;\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.150000006);\n  box-sizing: border-box;\n  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding-right: 17px;\n  padding-left: 17px;\n  padding-bottom: 17px;\n  padding-top: 17px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  left: 0;\n  width: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  height: 1px;\n  margin: auto;\n  position: absolute;\n  transition: var(--transition);\n  background-color: var(--whiteColor);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus::before {\n  width: 100%;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 10px 30px;\n  margin-left: 30px;\n  background-color: var(--primary);\n  color: white;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n\n@media only screen and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%] {\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--primary);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--primary);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--whiteColor);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--whiteColor);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--whiteColor);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--whiteColor);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.2em 0.5em 0.2em 1.5em;\n  border: solid thin var(--primary);\n  background-image: url(https://coothead.co.uk/images/world.png) !important;\n  background-repeat: no-repeat;\n  background-size: 0.8em auto;\n  background-position: 0.4em center;\n}\nselect[_ngcontent-%COMP%]:focus {\n  border: none;\n}\nselect[_ngcontent-%COMP%]::target-text {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0VBQUE7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0FBQVo7QUFJSTtFQUNJLFVBQUE7QUFGUjs7QUFRUTtFQUVRLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBTmhCO0FBU1k7RUFDSSxnQkFBQTtBQVBoQjtBQVNZO0VBQ0ksZUFBQTtBQVBoQjtBQVNZO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUGhCO0FBUWdCO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQU5wQjtBQVdvQjtFQUNJLFdBQUE7QUFUeEI7QUFjUTtFQUNJLGFBQUE7QUFaWjtBQWdCUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBRUkscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFmaEI7QUFrQlk7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFoQmhCOztBQXNCQTtFQUNJO0lBQ0ksTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBRUksNEJBQUE7SUFDQSwrQkFBQTtFQXBCVjtFQXlCTTtJQUNJLG1DQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUF2QlY7RUF3QlU7SUFFUSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBdkJsQjtFQTBCYztJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUF4QmxCO0VBMkJVO0lBQ0kseUJBQUE7RUF6QmQ7RUE0Qk07SUFDSSxtQ0FBQTtJQUVJLGlCQUFBO0lBQ0Esb0JBQUE7RUEzQmQ7RUErQk07SUFDSSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQTdCVjtFQThCVTtJQUNJLGVBQUE7RUE1QmQ7RUE2QmM7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsMEJBQUE7RUEzQmxCO0VBbUNzQjtJQUNJLHdCQUFBO0lBQ0EseUJBQUE7RUFqQzFCO0VBbUNzQjtJQUNJLFVBQUE7RUFqQzFCO0VBbUNzQjtJQUNJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0VBakMxQjtFQXNDVTtJQUNJLGNBQUE7RUFwQ2Q7QUFDRjtBQXlDQTtFQUNJO0lBRVEsNEJBQUE7SUFDQSwrQkFBQTtFQXhDVjtFQTZDTTtJQUNJLG1DQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUEzQ1Y7RUE0Q1U7SUFFUSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBM0NsQjtFQThDYztJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUE1Q2xCO0VBK0NVO0lBQ0kseUJBQUE7RUE3Q2Q7RUFnRE07SUFDSSxtQ0FBQTtJQUVJLGlCQUFBO0lBQ0Esb0JBQUE7RUEvQ2Q7RUFtRE07SUFDSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQWpEVjtFQWtEVTtJQUNJLGVBQUE7RUFoRGQ7RUFpRGM7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsNkJBQUE7RUEvQ2xCO0VBdURzQjtJQUNJLHdCQUFBO0lBQ0EseUJBQUE7RUFyRDFCO0VBdURzQjtJQUNJLFVBQUE7RUFyRDFCO0VBdURzQjtJQUNJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0VBckQxQjtFQTBEVTtJQUNJLGNBQUE7RUF4RGQ7QUFDRjtBQTZEQTtFQUNJO0lBRVEsNEJBQUE7SUFDQSwrQkFBQTtFQTVEVjtFQWlFTTtJQUNJLG1DQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUEvRFY7RUFnRVU7SUFFUSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBL0RsQjtFQWtFYztJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFoRWxCO0VBbUVVO0lBQ0kseUJBQUE7RUFqRWQ7RUFvRU07SUFDSSxtQ0FBQTtJQUVJLGlCQUFBO0lBQ0Esb0JBQUE7RUFuRWQ7RUF1RU07SUFDSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQXJFVjtFQXNFVTtJQUNJLGVBQUE7RUFwRWQ7RUFxRWM7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsNkJBQUE7RUFuRWxCO0VBMkVzQjtJQUNJLHdCQUFBO0lBQ0EseUJBQUE7RUF6RTFCO0VBMkVzQjtJQUNJLFVBQUE7RUF6RTFCO0VBMkVzQjtJQUNJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0VBekUxQjtFQThFVTtJQUNJLGNBQUE7RUE1RWQ7QUFDRjtBQXVGQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7QUFyRko7QUFzRkk7RUFDSSxZQUFBO0FBcEZSO0FBc0ZJO0VBQ0ksWUFBQTtBQXBGUiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMC40cmVtIDAuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUwMDAwMDA2KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIDtcbiAgICAmLnN0aWNreSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNHJlbSAwLjRyZW0gcmdiYSgwLCAwLCAwLCAwLjE1MDAwMDAwNik7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGFuaW1hdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQgMHMgbm9ybWFsIG5vbmUgMSBydW5uaW5nIGZhZGVJbkRvd247XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuLm5hdmJhci1saWdodCB7XG4gICAgLm5hdmJhci1uYXYge1xuICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxN3B4O1xuICAgICAgICAgICAgICAgIHRvcDogMTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmZvci1yZXNwb25zaXZlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdmJhci1idG4ge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgIGZhbWlseTogdmFyKC0taGVhZGluZ0ZvbnRGYW1pbHkpO1xuICAgICAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIC5uYXZiYXItbGlnaHQge1xuICAgICAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuZm9yLXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLmJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJi50b3AtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYubWlkZGxlLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYuYm90dG9tLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgIH1cbiAgICAubmF2YmFyLWxpZ2h0IHtcbiAgICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmZvci1yZXNwb25zaXZlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgICAgICAuYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICYudG9wLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLm1pZGRsZS1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmJvdHRvbS1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgLm5hdmJhci1saWdodCB7XG4gICAgICAgIC5uYXZiYXItbmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5mb3ItcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAuYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgICAgICAgLmJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLnRvcC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5taWRkbGUtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ib3R0b20tYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbnNlbGVjdCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtIDAuMmVtIDEuNWVtO1xuICAgIGJvcmRlcjogc29saWQgdGhpbiB2YXIoLS1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jb290aGVhZC5jby51ay9pbWFnZXMvd29ybGQucG5nICkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMC44ZW0gYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwLjRlbSBjZW50ZXI7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgJjo6dGFyZ2V0LXRleHQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7907:
/*!*******************************************************************!*\
  !*** ./src/app/components/common/navbarar/navbar.component-ar.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarArComponent: () => (/* binding */ NavbarArComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/services.service */ 8119);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);





function NavbarArComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavbarArComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "sticky": a0
  };
};
class NavbarArComponent {
  constructor(viewportScroller, router, service, platform) {
    this.viewportScroller = viewportScroller;
    this.router = router;
    this.service = service;
    this.platform = platform;
    this.classApplied = false;
    // Navbar Sticky
    this.isSticky = false;
    this.deviceInfo = '';
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  ngOnInit() {}
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log(this.deviceInfo);
    console.log('====================================');
  }
  selectLanguage(select) {
    this.router.navigateByUrl(select.value);
    console.log('====================================');
    console.log(select.value);
    console.log('====================================');
  }
  static #_ = this.ɵfac = function NavbarArComponent_Factory(t) {
    return new (t || NavbarArComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarArComponent,
    selectors: [["app-navbar-ar"]],
    hostBindings: function NavbarArComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavbarArComponent_scroll_HostBindingHandler($event) {
          return ctx.checkScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 47,
    vars: 8,
    consts: [[1, "div"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 3, "ngClass"], [1, "container"], ["routerLink", "/app-landing", 1, "navbar-brand"], ["src", "assets/img/app-landing/Lobo_Proboutik.png ", "alt", "logo ", 3, "width"], ["type", "button ", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent ", 1, "collapse", "navbar-collapse", "mb-3"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "navbar-nav", "ms-auto", "for-responsive"], [1, "navbar-btn"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["data-trigger-class", "li4-btn li4-btn--subtle js-tab-focus", 1, "language-picker", "js-language-picker"], ["action", "", 1, "language-picker__form"], ["name", "language-picker-select", "id", "language-picker-select", 3, "change"], ["select", ""], ["disabled", "", "selected", ""], ["value", "en"], ["value", "/"], ["value", "ar"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"]],
    template: function NavbarArComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_button_click_6_listener() {
          return ctx.toggleClass();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7)(9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_span_click_14_listener() {
          return ctx.onClick("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0628\u064A\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_span_click_17_listener() {
          return ctx.onClick("services");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u062E\u062F\u0645\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 12)(20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_span_click_20_listener() {
          return ctx.onClick("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0639\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 14)(23, "li", 12)(24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_span_click_24_listener() {
          ctx.toggleClass();
          return ctx.onClick("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 12)(27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_span_click_27_listener() {
          ctx.toggleClass();
          return ctx.onClick("services");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 12)(30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarArComponent_Template_span_click_30_listener() {
          ctx.toggleClass();
          return ctx.onClick("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NavbarArComponent_a_33_Template, 2, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NavbarArComponent_a_34_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "form", 19)(37, "select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NavbarArComponent_Template_select_change_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selectLanguage(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Lang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0639\u0631\u0628\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.classApplied);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 95px;\n  background: white !important;\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.150000006);\n  box-sizing: border-box;\n}\n.navbar.sticky[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n  position: fixed;\n  background-color: white !important;\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.150000006);\n  box-sizing: border-box;\n  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding-right: 17px;\n  padding-left: 17px;\n  padding-bottom: 17px;\n  padding-top: 17px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  left: 0;\n  width: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  height: 1px;\n  margin: auto;\n  position: absolute;\n  transition: var(--transition);\n  background-color: var(--whiteColor);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus::before {\n  width: 100%;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 10px 30px;\n  margin-left: 30px;\n  background-color: var(--primary);\n  color: white;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n\n@media only screen and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%] {\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--primary);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--primary);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--whiteColor);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--whiteColor);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--whiteColor);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--whiteColor);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.2em 0.5em 0.2em 1.5em;\n  border: solid thin var(--primary);\n  background-image: url(https://coothead.co.uk/images/world.png) !important;\n  background-repeat: no-repeat;\n  background-size: 0.8em auto;\n  background-position: 0.4em center;\n}\nselect[_ngcontent-%COMP%]:focus {\n  border: none;\n}\nselect[_ngcontent-%COMP%]::target-text {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRUFBQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7QUFBWjtBQUlJO0VBQ0ksVUFBQTtBQUZSOztBQVFRO0VBRVEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBU1k7RUFDSSxlQUFBO0FBUGhCO0FBU1k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFQaEI7QUFRZ0I7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0FBTnBCO0FBV29CO0VBQ0ksV0FBQTtBQVR4QjtBQWNRO0VBQ0ksYUFBQTtBQVpaO0FBZ0JRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFFSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWZoQjtBQWtCWTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQWhCaEI7O0FBc0JBO0VBQ0k7SUFDSSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFFSSw0QkFBQTtJQUNBLCtCQUFBO0VBcEJWO0VBeUJNO0lBQ0ksbUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQXZCVjtFQXdCVTtJQUVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUF2QmxCO0VBMEJjO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQXhCbEI7RUEyQlU7SUFDSSx5QkFBQTtFQXpCZDtFQTRCTTtJQUNJLG1DQUFBO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQTNCZDtFQStCTTtJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBN0JWO0VBOEJVO0lBQ0ksZUFBQTtFQTVCZDtFQTZCYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQTNCbEI7RUFtQ3NCO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQWpDMUI7RUFtQ3NCO0lBQ0ksVUFBQTtFQWpDMUI7RUFtQ3NCO0lBQ0kseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUFqQzFCO0VBc0NVO0lBQ0ksY0FBQTtFQXBDZDtBQUNGO0FBeUNBO0VBQ0k7SUFFUSw0QkFBQTtJQUNBLCtCQUFBO0VBeENWO0VBNkNNO0lBQ0ksbUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQTNDVjtFQTRDVTtJQUVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUEzQ2xCO0VBOENjO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQTVDbEI7RUErQ1U7SUFDSSx5QkFBQTtFQTdDZDtFQWdETTtJQUNJLG1DQUFBO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQS9DZDtFQW1ETTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBakRWO0VBa0RVO0lBQ0ksZUFBQTtFQWhEZDtFQWlEYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSw2QkFBQTtFQS9DbEI7RUF1RHNCO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQXJEMUI7RUF1RHNCO0lBQ0ksVUFBQTtFQXJEMUI7RUF1RHNCO0lBQ0kseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUFyRDFCO0VBMERVO0lBQ0ksY0FBQTtFQXhEZDtBQUNGO0FBNkRBO0VBQ0k7SUFFUSw0QkFBQTtJQUNBLCtCQUFBO0VBNURWO0VBaUVNO0lBQ0ksbUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQS9EVjtFQWdFVTtJQUVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUEvRGxCO0VBa0VjO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQWhFbEI7RUFtRVU7SUFDSSx5QkFBQTtFQWpFZDtFQW9FTTtJQUNJLG1DQUFBO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQW5FZDtFQXVFTTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBckVWO0VBc0VVO0lBQ0ksZUFBQTtFQXBFZDtFQXFFYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSw2QkFBQTtFQW5FbEI7RUEyRXNCO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQXpFMUI7RUEyRXNCO0lBQ0ksVUFBQTtFQXpFMUI7RUEyRXNCO0lBQ0kseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUF6RTFCO0VBOEVVO0lBQ0ksY0FBQTtFQTVFZDtBQUNGO0FBdUZBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5RUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtBQXJGSjtBQXNGSTtFQUNJLFlBQUE7QUFwRlI7QUFzRkk7RUFDSSxZQUFBO0FBcEZSIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwLjRyZW0gMC40cmVtIHJnYmEoMCwgMCwgMCwgMC4xNTAwMDAwMDYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgO1xuICAgICYuc3RpY2t5IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC40cmVtIDAuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUwMDAwMDA2KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYW5pbWF0aW9uOiA1MDBtcyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSAxIHJ1bm5pbmcgZmFkZUluRG93bjtcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4ubmF2YmFyLWxpZ2h0IHtcbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTdweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE3cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuZm9yLXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmF2YmFyLWJ0biB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgZmFtaWx5OiB2YXIoLS1oZWFkaW5nRm9udEZhbWlseSk7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgLm5hdmJhci1saWdodCB7XG4gICAgICAgIC5uYXZiYXItbmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5mb3ItcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAuYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgICAgICAgLmJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLnRvcC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5taWRkbGUtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ib3R0b20tYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIC5uYXZiYXItbGlnaHQge1xuICAgICAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuZm9yLXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLmJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJi50b3AtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYubWlkZGxlLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYuYm90dG9tLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgIH1cbiAgICAubmF2YmFyLWxpZ2h0IHtcbiAgICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmZvci1yZXNwb25zaXZlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgICAgICAuYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICYudG9wLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLm1pZGRsZS1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmJvdHRvbS1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge31cblxuc2VsZWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW0gMC4yZW0gMS41ZW07XG4gICAgYm9yZGVyOiBzb2xpZCB0aGluIHZhcigtLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nvb3RoZWFkLmNvLnVrL2ltYWdlcy93b3JsZC5wbmcgKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwLjhlbSBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAuNGVtIGNlbnRlcjtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAmOjp0YXJnZXQtdGV4dCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7539:
/*!*******************************************************************!*\
  !*** ./src/app/components/common/navbaren/navbar.component-en.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarEnComponent: () => (/* binding */ NavbarEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/services.service */ 8119);





function NavbarEnComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download for free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavbarEnComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download for free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "sticky": a0
  };
};
class NavbarEnComponent {
  constructor(platform, viewportScroller, router, service) {
    this.platform = platform;
    this.viewportScroller = viewportScroller;
    this.router = router;
    this.service = service;
    this.classApplied = false;
    // Navbar Sticky
    this.isSticky = false;
    this.deviceInfo = '';
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {}
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log(this.deviceInfo);
    console.log('====================================');
  }
  selectLanguage(select) {
    this.router.navigateByUrl(select.value);
    console.log('====================================');
    console.log(select.value);
    console.log('====================================');
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function NavbarEnComponent_Factory(t) {
    return new (t || NavbarEnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarEnComponent,
    selectors: [["app-navbar-en"]],
    hostBindings: function NavbarEnComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavbarEnComponent_scroll_HostBindingHandler($event) {
          return ctx.checkScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 47,
    vars: 8,
    consts: [[1, "div"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 3, "ngClass"], [1, "container"], ["routerLink", "/app-landing", 1, "navbar-brand"], ["src", "assets/img/app-landing/Lobo_Proboutik.png ", "alt", "logo ", 3, "width"], ["type", "button ", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent ", 1, "collapse", "navbar-collapse", "mb-3"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "navbar-nav", "ms-auto", "for-responsive"], [1, "navbar-btn"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["data-trigger-class", "li4-btn li4-btn--subtle js-tab-focus", 1, "language-picker", "js-language-picker"], ["action", "", 1, "language-picker__form"], ["name", "language-picker-select", "id", "language-picker-select", 3, "change"], ["select", ""], ["disabled", "", "selected", ""], ["value", "en"], ["value", "/"], ["value", "ar"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"]],
    template: function NavbarEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_button_click_6_listener() {
          return ctx.toggleClass();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7)(9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "ul", 11)(13, "li", 12)(14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_span_click_14_listener() {
          return ctx.onClick("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_span_click_17_listener() {
          return ctx.onClick("services");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 12)(20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_span_click_20_listener() {
          return ctx.onClick("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 14)(23, "li", 12)(24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_span_click_24_listener() {
          ctx.toggleClass();
          return ctx.onClick("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 12)(27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_span_click_27_listener() {
          ctx.toggleClass();
          return ctx.onClick("services");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 12)(30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarEnComponent_Template_span_click_30_listener() {
          ctx.toggleClass();
          return ctx.onClick("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NavbarEnComponent_a_33_Template, 2, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NavbarEnComponent_a_34_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "form", 19)(37, "select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NavbarEnComponent_Template_select_change_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selectLanguage(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Lang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0639\u0631\u0628\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.classApplied);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 95px;\n  background: white !important;\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.150000006);\n  box-sizing: border-box;\n}\n.navbar.sticky[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n  position: fixed;\n  background-color: white !important;\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.150000006);\n  box-sizing: border-box;\n  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding-right: 17px;\n  padding-left: 17px;\n  padding-bottom: 17px;\n  padding-top: 17px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  left: 0;\n  width: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  height: 1px;\n  margin: auto;\n  position: absolute;\n  transition: var(--transition);\n  background-color: var(--whiteColor);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus::before {\n  width: 100%;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 10px 30px;\n  margin-left: 30px;\n  background-color: var(--primary);\n  color: white;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n\n@media only screen and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%] {\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--primary);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--primary);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--whiteColor);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--whiteColor);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    background-color: var(--whiteColor);\n    padding: 10px 20px;\n    margin-top: 10px;\n    display: none;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--blackColor);\n    display: inline-block;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav.for-responsive[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%] {\n    background-color: var(--blackColor);\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: var(--whiteColor);\n    font-size: inherit;\n    box-shadow: unset;\n    border: none;\n    padding: 0;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n    width: 30px;\n    margin: 6px 0;\n    display: block;\n    background: var(--whiteColor);\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.top-bar[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.middle-bar[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .burger-menu[_ngcontent-%COMP%]   span.bottom-bar[_ngcontent-%COMP%] {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n    margin-top: 5px;\n  }\n  .navbar-light.active[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: block;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.2em 0.5em 0.2em 1.5em;\n  border: solid thin var(--primary);\n  background-image: url(https://coothead.co.uk/images/world.png) !important;\n  background-repeat: no-repeat;\n  background-size: 0.8em auto;\n  background-position: 0.4em center;\n}\nselect[_ngcontent-%COMP%]:focus {\n  border: none;\n}\nselect[_ngcontent-%COMP%]::target-text {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyZW4vbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRUFBQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7QUFBWjtBQUlJO0VBQ0ksVUFBQTtBQUZSOztBQVFRO0VBRVEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBU1k7RUFDSSxlQUFBO0FBUGhCO0FBU1k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFQaEI7QUFRZ0I7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0FBTnBCO0FBV29CO0VBQ0ksV0FBQTtBQVR4QjtBQWNRO0VBQ0ksYUFBQTtBQVpaO0FBZ0JRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFFSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWZoQjtBQWtCWTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQWhCaEI7O0FBc0JBO0VBQ0k7SUFDSSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFFSSw0QkFBQTtJQUNBLCtCQUFBO0VBcEJWO0VBeUJNO0lBQ0ksbUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQXZCVjtFQXdCVTtJQUVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUF2QmxCO0VBMEJjO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQXhCbEI7RUEyQlU7SUFDSSx5QkFBQTtFQXpCZDtFQTRCTTtJQUNJLG1DQUFBO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQTNCZDtFQStCTTtJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBN0JWO0VBOEJVO0lBQ0ksZUFBQTtFQTVCZDtFQTZCYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQTNCbEI7RUFtQ3NCO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQWpDMUI7RUFtQ3NCO0lBQ0ksVUFBQTtFQWpDMUI7RUFtQ3NCO0lBQ0kseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUFqQzFCO0VBc0NVO0lBQ0ksY0FBQTtFQXBDZDtBQUNGO0FBeUNBO0VBQ0k7SUFFUSw0QkFBQTtJQUNBLCtCQUFBO0VBeENWO0VBNkNNO0lBQ0ksbUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQTNDVjtFQTRDVTtJQUVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUEzQ2xCO0VBOENjO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQTVDbEI7RUErQ1U7SUFDSSx5QkFBQTtFQTdDZDtFQWdETTtJQUNJLG1DQUFBO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQS9DZDtFQW1ETTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBakRWO0VBa0RVO0lBQ0ksZUFBQTtFQWhEZDtFQWlEYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSw2QkFBQTtFQS9DbEI7RUF1RHNCO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQXJEMUI7RUF1RHNCO0lBQ0ksVUFBQTtFQXJEMUI7RUF1RHNCO0lBQ0kseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUFyRDFCO0VBMERVO0lBQ0ksY0FBQTtFQXhEZDtBQUNGO0FBNkRBO0VBQ0k7SUFFUSw0QkFBQTtJQUNBLCtCQUFBO0VBNURWO0VBaUVNO0lBQ0ksbUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQS9EVjtFQWdFVTtJQUVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUEvRGxCO0VBa0VjO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQWhFbEI7RUFtRVU7SUFDSSx5QkFBQTtFQWpFZDtFQW9FTTtJQUNJLG1DQUFBO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQW5FZDtFQXVFTTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBckVWO0VBc0VVO0lBQ0ksZUFBQTtFQXBFZDtFQXFFYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSw2QkFBQTtFQW5FbEI7RUEyRXNCO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQXpFMUI7RUEyRXNCO0lBQ0ksVUFBQTtFQXpFMUI7RUEyRXNCO0lBQ0kseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUF6RTFCO0VBOEVVO0lBQ0ksY0FBQTtFQTVFZDtBQUNGO0FBdUZBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5RUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtBQXJGSjtBQXNGSTtFQUNJLFlBQUE7QUFwRlI7QUFzRkk7RUFDSSxZQUFBO0FBcEZSIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwLjRyZW0gMC40cmVtIHJnYmEoMCwgMCwgMCwgMC4xNTAwMDAwMDYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgO1xuICAgICYuc3RpY2t5IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC40cmVtIDAuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUwMDAwMDA2KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYW5pbWF0aW9uOiA1MDBtcyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSAxIHJ1bm5pbmcgZmFkZUluRG93bjtcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4ubmF2YmFyLWxpZ2h0IHtcbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTdweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE3cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuZm9yLXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmF2YmFyLWJ0biB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgZmFtaWx5OiB2YXIoLS1oZWFkaW5nRm9udEZhbWlseSk7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG4gICAgLm5hdmJhci1saWdodCB7XG4gICAgICAgIC5uYXZiYXItbmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5mb3ItcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAuYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgICAgICAgLmJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLnRvcC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5taWRkbGUtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ib3R0b20tYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIC5uYXZiYXItbGlnaHQge1xuICAgICAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuZm9yLXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLmJ1cmdlci1tZW51IHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJi50b3AtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYubWlkZGxlLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYuYm90dG9tLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgIH1cbiAgICAubmF2YmFyLWxpZ2h0IHtcbiAgICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmZvci1yZXNwb25zaXZlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgICAgICAuYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICYudG9wLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLm1pZGRsZS1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmJvdHRvbS1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge31cblxuc2VsZWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW0gMC4yZW0gMS41ZW07XG4gICAgYm9yZGVyOiBzb2xpZCB0aGluIHZhcigtLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nvb3RoZWFkLmNvLnVrL2ltYWdlcy93b3JsZC5wbmcgKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwLjhlbSBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAuNGVtIGNlbnRlcjtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAmOjp0YXJnZXQtdGV4dCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5242:
/*!**********************************************************************!*\
  !*** ./src/app/components/common/newsletter/newsletter.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsletterComponent: () => (/* binding */ NewsletterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NewsletterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NewsletterComponent_Factory(t) {
    return new (t || NewsletterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NewsletterComponent,
    selectors: [["app-newsletter"]],
    decls: 19,
    vars: 0,
    consts: [[1, "newsletter"], [1, "container"], [1, "newsletter-area"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "newsletter-text"], [1, "newsletter-form"], ["type", "email", "placeholder", "enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "default-btn", "electronics-btn"], [1, "subscribe-shape"], ["src", "assets/img/shape/subscribe-shape.png", "alt", "shape"], ["src", "assets/img/shape/subscribe-shape-two.png", "alt", "shape"], ["src", "assets/img/shape/subscribe-shape-three.png", "alt", "shape"]],
    template: function NewsletterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Subscribe Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your newsletter can provide great value, beyond sales, by informing your buyers with exciting content that resonates with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10)(17, "img", 11)(18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".newsletter[_ngcontent-%COMP%] {\n  margin-bottom: -160px;\n  position: relative;\n  z-index: 1;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgb(0, 182, 238) 25%, rgb(8, 152, 231) 50%);\n  border-radius: 50px;\n  position: relative;\n  padding: 70px;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .subscribe-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .subscribe-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n  right: 100px;\n  animation: translateX 10s infinite linear;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .subscribe-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0;\n  right: 0;\n  animation: translateX 15s infinite linear;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .subscribe-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  right: 0;\n  top: 100px;\n  animation: translateY 5s infinite linear;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%] {\n  padding-right: 35px;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  color: var(--whiteColor);\n  text-transform: capitalize;\n  font-size: 28px;\n  font-weight: 600;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n  margin-bottom: 0;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%] {\n  position: relative;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: unset !important;\n  color: var(--whiteColor);\n  background: #5cc5f1;\n  border-radius: 30px;\n  padding: 0 20px;\n  height: 50px;\n  border: 0;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: var(--whiteColor);\n  opacity: 0.9;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 50px;\n  border-radius: 0 30px 30px 0;\n  border: 0;\n  color: #03abeb;\n  background: var(--whiteColor);\n  font-weight: 600;\n  padding: 0 50px;\n  font-family: var(--headingFontFamily);\n  transition: var(--transition);\n  border: 1px solid transparent;\n  z-index: 1;\n}\n.newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #5cc5f1;\n  color: var(--whiteColor);\n  border-left: 1px solid var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%] {\n    padding: 30px;\n    border-radius: 20px;\n    text-align: center;\n  }\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 300px;\n    margin: 0 auto 20px;\n  }\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: unset;\n    border-radius: 30px;\n  }\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    border: 0;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .newsletter[_ngcontent-%COMP%]   .newsletter-area[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n  .newsletter[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmV3c2xldHRlci9uZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0ksNkVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBRVk7RUFDSSxrQkFBQTtBQUFoQjtBQUVZO0VBQ0ksTUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUFoQjtBQUVZO0VBQ0ksTUFBQTtFQUNBLFFBQUE7RUFDQSx5Q0FBQTtBQUFoQjtBQUdZO0VBQ0ksUUFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQURoQjtBQUlRO0VBQ0ksbUJBQUE7QUFGWjtBQUlZO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBSHBCO0FBTVk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBSmhCO0FBT1E7RUFDSSxrQkFBQTtBQUxaO0FBT1k7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUxoQjtBQU9ZO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0FBTGhCO0FBT1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFMaEI7QUFPZ0I7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0NBQUE7QUFMcEI7O0FBWUE7RUFHUTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBWFY7RUFhVTtJQUNJLGdCQUFBO0VBWGQ7RUFhYztJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUFYbEI7RUFlYztJQUNJLG1CQUFBO0VBYmxCO0VBZWM7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFibEI7RUFla0I7SUFDSSxTQUFBO0VBYnRCO0FBQ0Y7QUF1QkE7RUFHUTtJQUNJLGFBQUE7RUF2QlY7RUF5Qk07SUFDSSxtQkFBQTtFQXZCVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3NsZXR0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IC0xNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5uZXdzbGV0dGVyLWFyZWEge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDE4MiwyMzgsMSkgMjUlLCByZ2JhKDgsMTUyLDIzMSwxKSA1MCUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDcwcHg7XG5cbiAgICAgICAgLnN1YnNjcmliZS1zaGFwZSB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDE1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmV3c2xldHRlci10ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmV3c2xldHRlci1mb3JtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVjYzVmMTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC45O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAzYWJlYjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ0ZvbnRGYW1pbHkpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVjYzVmMTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gICAgLm5ld3NsZXR0ZXIge1xuICAgICAgICAubmV3c2xldHRlci1hcmVhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5uZXdzbGV0dGVyLXRleHQgIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NsZXR0ZXItZm9ybSB7XG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjMwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcblxuICAgIC5uZXdzbGV0dGVyIHtcbiAgICAgICAgLm5ld3NsZXR0ZXItYXJlYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uZXdzbGV0dGVyLXRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8850:
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-ar/app-banner/app-banner-ar.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBannerArComponent: () => (/* binding */ AppBannerArComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/common/modal/modal.component */ 677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function AppBannerArComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerArComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerArComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerArComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppBannerArComponent {
  constructor(modalService, platform) {
    this.modalService = modalService;
    this.platform = platform;
  }
  ngOnInit() {}
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  openModal() {
    const modalREf = this.modalService.open(src_app_components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      centered: true,
      size: 'xl'
    });
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {} else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log('====================================');
  }
  static #_ = this.ɵfac = function AppBannerArComponent_Factory(t) {
    return new (t || AppBannerArComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppBannerArComponent,
    selectors: [["app-app-banner-ar"]],
    decls: 43,
    vars: 4,
    consts: [["id", "home", 1, "main-banner", "banner-bg-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container", "container1"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-sm-4"], [1, "banner-text"], [1, "animate__animated", "animate__backInLeft"], [1, "banner-btn", "animate__animated", "animate__backInLeft"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], [1, "col-lg-4", "col-sm-4"], ["data-aos", "zoom-out", "data-aos-delay", "300", 1, "banner-img", "text-end", "animated", "animate__heartBeat"], ["src", "assets/img/app-landing/welcome.png", "alt", "iphone"], [1, "container", "container2"], [1, "col-lg-8"], [1, "banner-text2"], [1, "banner-btn2"], [1, "col-lg-4"], [1, "banner-img2", "text-end"], [1, "container"], [1, "paragraph"], [1, "par"], [1, "video"], [1, "play"], ["data-bs-target", "#exampleModal", "xmlns", "http://www.w3.org/2000/svg", "width", "118", "height", "125", "viewBox", "0 0 118 125", "fill", "none", 3, "click"], ["d", "M109.051 48.4337C120.217 54.4869 120.217 70.5131 109.051 76.5663L23.6249 122.873C12.9639 128.652 1.70446e-06 120.933 1.55985e-06 108.807L4.55452e-07 16.1934C3.10845e-07 4.06696 12.964 -3.6518 23.6249 2.12715L109.051 48.4337Z", "fill", "white"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"]],
    template: function AppBannerArComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0623\u0637\u0644\u0642 \u0627\u0644\u0639\u0646\u0627\u0646 \u0644\u0646\u062C\u0627\u062D \u0639\u0645\u0644\u0643 \u0645\u0639 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u062A\u0637\u0628\u064A\u0642 ProBoutik");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0643\u062A\u0634\u0641 \u0643\u064A\u0641 \u064A\u0642\u0648\u0645 \u062A\u0637\u0628\u064A\u0642 ProBoutik \u0628\u062A\u062D\u062F\u064A\u062B \u0641\u0648\u0627\u062A\u064A\u0631\u0643\u060C \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u062A\u062F\u0641\u0642 \u0627\u0644\u0646\u0642\u062F\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0648\u0625\u0646\u0634\u0627\u0621 \u0639\u0644\u0627\u0642\u0627\u062A \u062F\u0627\u0626\u0645\u0629 \u0645\u0639 \u0639\u0645\u0644\u0627\u0626\u0643 \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0646\u0645\u0648 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppBannerArComponent_a_14_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppBannerArComponent_a_15_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 4)(21, "div", 15)(22, "div", 16)(23, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0623\u0637\u0644\u0642 \u0627\u0644\u0639\u0646\u0627\u0646 \u0644\u0646\u062C\u0627\u062D \u0639\u0645\u0644\u0643 \u0645\u0639 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u062A\u0637\u0628\u064A\u0642 ProBoutik");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0627\u0643\u062A\u0634\u0641 \u0643\u064A\u0641 \u064A\u0642\u0648\u0645 \u062A\u0637\u0628\u064A\u0642 ProBoutik \u0628\u062A\u062D\u062F\u064A\u062B \u0641\u0648\u0627\u062A\u064A\u0631\u0643\u060C \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u062A\u062F\u0641\u0642 \u0627\u0644\u0646\u0642\u062F\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0648\u0625\u0646\u0634\u0627\u0621 \u0639\u0644\u0627\u0642\u0627\u062A \u062F\u0627\u0626\u0645\u0629 \u0645\u0639 \u0639\u0645\u0644\u0627\u0626\u0643 \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0646\u0645\u0648 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppBannerArComponent_a_30_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AppBannerArComponent_a_31_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u064A\u0642\u062F\u0645 \u062A\u0637\u0628\u064A\u0642 ProBoutik \u062D\u0642\u0628\u0629 \u062C\u062F\u064A\u062F\u0629 \u0645\u0646 \u0627\u0644\u0628\u0633\u0627\u0637\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629. \u0642\u0645 \u0628\u0631\u0642\u0645\u0646\u0629 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u0643\u060C \u0648\u0627\u0633\u062A\u0641\u062F \u0645\u0646 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0644\u062A\u062C\u062F\u064A\u062F \u0627\u0644\u062A\u062F\u0641\u0642 \u0627\u0644\u0646\u0642\u062F\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0648\u062A\u062C\u0646\u0628 \u0627\u0644\u0636\u063A\u0648\u0637 \u0627\u0644\u0645\u0627\u0644\u064A\u0629. \u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u062D\u064A\u062B \u062A\u0635\u0628\u062D \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0642\u0648\u0629 \u062F\u0627\u0641\u0639\u0629 \u0644\u0644\u0646\u0645\u0648. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23)(40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppBannerArComponent_Template__svg_svg_click_41_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Work+Sans:wght@100;300&display=swap)[_ngcontent-%COMP%];.main-banner[_ngcontent-%COMP%] {\n  position: relative;\n  height: 900px;\n  overflow-x: hidden;\n  background-position: center center;\n  background-size: cover;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: flex;\n  width: 762.964px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 29.726px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  width: 916px;\n  color: var(--black, #25313C);\n  font-size: 75px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  margin-bottom: 30px;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 10px 30px;\n  background-color: var(--primary);\n  color: white;\n  line-height: 24px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%] {\n  font-family: var(--headingFontFamily);\n  color: var(--whiteColor);\n  background: transparent;\n  display: inline-block;\n  padding: 0;\n  border: 0;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 35px;\n  left: -5px;\n  top: 7px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 404.218px;\n  height: 538.701px;\n  flex-shrink: 0;\n  margin-left: 150px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n  content: \"\";\n  z-index: 1;\n  width: 800px;\n  right: -50px;\n  bottom: -10px;\n  height: 190px;\n  position: absolute;\n  border-radius: 30px;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFF 100%);\n  animation: translateX 6s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 140px;\n  left: -100px;\n  width: 220px;\n  animation-delay: 1s;\n  animation: translateY 4s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0px;\n  left: -25px;\n  width: 100px;\n  animation: translateY 4s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 100px;\n  right: 50px;\n  animation: translateX 6s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .paragraph[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .paragraph[_ngcontent-%COMP%]   .par[_ngcontent-%COMP%] {\n    text-align: center;\n    color: var(--black, #000);\n    font-size: 20px;\n    font-style: normal;\n    line-height: 150%;\n    width: 100%;\n    margin-bottom: 120px;\n    margin-top: 90px;\n    \n\n  }\n  .container1[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .container2[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 120px 0 45px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 20px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 80px;\n    padding: 10px 30px;\n    background-color: var(--primary);\n    color: white;\n    line-height: 24px;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 16px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: white;\n    color: var(--primary);\n    border: solid 1px var(--primary);\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 650px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    align-items: center;\n    gap: 29.726px;\n    text-align: center;\n    padding: 120px 0 45px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 5vw;\n    margin-bottom: 20px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    font-size: 5vw;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    z-index: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .main-banner[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #069ee8;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 120px 0 40px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 20px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0 auto 5px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .main-banner[_ngcontent-%COMP%] {\n    background: #03ABEB;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after, .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1550px) {\n  .main-banner[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 0;\n    left: -100px;\n    width: 245px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    left: 100px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    right: 150px;\n    top: 100px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    bottom: 100px;\n    right: 0;\n    max-width: 900px;\n    z-index: 1;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 100px;\n    right: 50px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    bottom: 55%;\n  }\n}\n.paragraph[_ngcontent-%COMP%] {\n  position: relative;\n}\n.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  width: 100%;\n  margin-bottom: 120px;\n  \n\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 651.06px;\n  flex-shrink: 0;\n  border-radius: 30px;\n  background: linear-gradient(0deg, rgba(42, 99, 226, 0.35) 0%, rgba(42, 99, 226, 0.35) 100%), url('image2.png'), lightgray 0px -22.506px/100% 103.457% no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 150px;\n}\n\n.container2[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1hci9hcHAtYmFubmVyL2FwcC1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVJLGtDQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFFUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFHWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FBRnBCO0FBS2dCO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSHBCO0FBTVk7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSmhCO0FBS2dCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFIcEI7QUFLZ0I7RUFDSSxnQkFBQTtBQUhwQjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTlI7QUFRUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtFQUNBLHdDQUFBO0FBTlo7QUFVUTtFQUNJLGtCQUFBO0FBUlo7QUFVUztFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFSWjtBQVVTO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFSWjtBQVVTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQVJaOztBQWFBO0VBQ0k7SUFDSSxrQkFBQTtFQVZOO0VBV007SUFDSSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFUVjtFQVlFO0lBQ0ksd0JBQUE7RUFWTjtFQVlFO0lBQ0kseUJBQUE7RUFWTjtFQVdNO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQVRWO0VBVVU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFSZDtFQVVVO0lBQ0ksbUJBQUE7RUFSZDtFQVVVO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFSZDtFQVlVO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUVJLGdCQUFBO0lBQ0EsZUFBQTtFQVhsQjtFQWNjO0lBQ0ksdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdDQUFBO0VBWmxCO0VBZ0JNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQWRWO0VBZVU7SUFDSSxhQUFBO0VBYmQ7RUFlVTtJQUNJLGFBQUE7RUFiZDtFQWVVO0lBQ0ksV0FBQTtFQWJkO0VBaUJFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFmTjtFQWdCTTtJQUNJLGFBQUE7RUFkVjtFQWdCTTtJQUNJLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUFkVjtFQWVVO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VBYmQ7RUFlVTtJQUNJLG1CQUFBO0lBQ0EsY0FBQTtFQWJkO0VBZVU7SUFDSSxXQUFBO0VBYmQ7RUFjYztJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBWmxCO0VBZ0JNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFkVjtFQWVVO0lBQ0ksYUFBQTtFQWJkO0VBZVU7SUFDSSxhQUFBO0VBYmQ7RUFlVTtJQUNJLFdBQUE7RUFiZDtBQUNGO0FBb0JBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUFsQk47RUFtQk07SUFDSSxhQUFBO0VBakJWO0VBbUJNO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQWpCVjtFQWtCVTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQWhCZDtFQWtCVTtJQUNJLGtCQUFBO0VBaEJkO0VBa0JVO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFoQmQ7RUFtQk07SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBakJWO0VBa0JVO0lBQ0ksYUFBQTtFQWhCZDtFQWtCVTtJQUNJLGFBQUE7RUFoQmQ7RUFrQlU7SUFDSSxXQUFBO0VBaEJkO0FBQ0Y7QUFxQkE7RUFDSTtJQUNJLG1CQUFBO0VBbkJOO0VBcUJVO0lBQ0ksZUFBQTtFQW5CZDtFQXFCVTtJQUVJLGFBQUE7RUFwQmQ7RUF1Qk07SUFDSSxVQUFBO0VBckJWO0VBc0JVO0lBQ0ksZUFBQTtFQXBCZDtFQXVCTTtJQUNJLGFBQUE7RUFyQlY7QUFDRjtBQTJCQTtFQUNJO0lBQ0ksY0FBQTtFQXpCTjtFQTJCVztJQUNHLE1BQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQXpCZDtFQTJCVztJQUNHLFdBQUE7RUF6QmQ7RUEyQlc7SUFDRyxZQUFBO0lBQ0EsVUFBQTtFQXpCZDtFQTZCVztJQUNHLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBM0JkO0VBNkJXO0lBQ0csYUFBQTtJQUNBLFdBQUE7RUEzQmQ7RUE2Qlc7SUFDRyxXQUFBO0VBM0JkO0FBQ0Y7QUFnQ0E7RUFDSSxrQkFBQTtBQTlCSjtBQStCSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQTdCUjs7QUFpQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksYUFBQTtBQTlCSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1Xb3JrK1NhbnM6d2dodEAxMDA7MzAwJmRpc3BsYXk9c3dhcCcpO1xuLm1haW4tYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA5MDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgICBwb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIDtcbiAgICAuYmFubmVyLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogNzYyLjk2NHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiAyOS43MjZweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogOTE2cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLWJ0biB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lci12aWRlbyB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFubmVyLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDQwNC4yMThweDtcbiAgICAgICAgaGVpZ2h0OiA1MzguNzAxcHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwLWxhbmRpbmcvd2VsY29tZS5wbmdcIik7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtNTBweDtcbiAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMCkgMCUsICNGRkYgMTAwJSk7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggNnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iYW5uZXItc2hhcGUge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIHRvcDogMTQwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggNnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnBhcmFncmFwaCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnBhciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMwMDApO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICAgIC8qIDYwcHggKi9cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGFpbmVyMSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjIge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAuYmFubmVyLXRleHQyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEyMHB4IDAgNDVweDtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyLWJ0bjIgYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLWJ0bjIge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1pbWcyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubWFpbi1iYW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItdGV4dCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAyOS43MjZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEyMHB4IDAgNDVweDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDV2d1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lci1idG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5tYWluLWJhbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzA2OWVlODtcbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDQwcHg7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyLWJ0biBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5tYWluLWJhbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwM0FCRUI7XG4gICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjo6YWZ0ZXIsXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci10ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItc2hhcGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU1MHB4KSB7XG4gICAgLm1haW4tYmFubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgIC5iYW5uZXItc2hhcGUge1xuICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItaW1hZ2UtdHdvIHtcbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGFyYWdyYXBoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICAgICAgICAvKiA2MHB4ICovXG4gICAgfVxufVxuXG4udmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjUxLjA2cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0MiwgOTksIDIyNiwgMC4zNSkgMCUsIHJnYmEoNDIsIDk5LCAyMjYsIDAuMzUpIDEwMCUpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2FwcC1sYW5kaW5nL2ltYWdlMi5wbmdcIiksIGxpZ2h0Z3JheSAwcHggLTIyLjUwNnB4IC8gMTAwJSAxMDMuNDU3JSBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4uY29udGFpbmVyMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 7672:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-ar/app-features/app-features.component-ar.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFeaturesArComponent: () => (/* binding */ AppFeaturesArComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function AppFeaturesArComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"\u0628\u0641\u0636\u0644 \u062A\u0637\u0628\u064A\u0642 ProBoutik\u060C \u0623\u0635\u0628\u062D \u0628\u0625\u0645\u0643\u0627\u0646\u064A \u0627\u0644\u0622\u0646 \u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629 \u0639\u0644\u0649 \u0639\u0645\u0644\u0627\u0626\u064A. \u0648\u062A\u0633\u0648\u062F \u0625\u062F\u0627\u0631\u062A\u064A \u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0627\u0644 \u0627\u0644\u0642\u064A\u0645\u0629. \u0648\u062A\u062A\u0645\u062A\u0639 \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0628\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629\u060C \u0648\u062A\u0648\u0641\u0631 \u0643\u0641\u0627\u0621\u0629 \u0644\u0627 \u0645\u062B\u064A\u0644 \u0644\u0647\u0627.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Moussa Ndiaye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0628\u0627\u0626\u0639 \u0627\u0644\u0642\u0645\u0627\u0634");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppFeaturesArComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"\u0645\u0646\u0630 \u0623\u0646 \u0627\u0633\u062A\u0641\u062F\u062A \u0645\u0646 \u062A\u0637\u0628\u064A\u0642 ProBoutik\u060C \u0627\u062E\u062A\u0641\u062A \u0645\u062E\u0627\u0648\u0641 \u0639\u0645\u0644\u0627\u0626\u064A \u0628\u0634\u0623\u0646 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A. \u0644\u0642\u062F \u062A\u063A\u064A\u0631\u062A \u0639\u0644\u0627\u0642\u062A\u064A \u0645\u0639\u0647\u0645\u060C \u0643\u0644 \u0634\u064A\u0621 \u0648\u0627\u0636\u062D \u0648\u0645\u0631\u0646. \u064A\u0645\u0643\u0646\u0646\u064A \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0627\u062A.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Awa Gueye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0628\u0627\u0626\u0639 \u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0627\u0644\u062A\u062C\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppFeaturesArComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"\u0644\u0642\u062F \u0645\u0646\u062D\u0646\u064A \u062A\u0637\u0628\u064A\u0642 ProBoutik \u0631\u0627\u062D\u0629 \u0628\u0627\u0644 \u0644\u0627 \u062A\u0642\u062F\u0631 \u0628\u062B\u0645\u0646. \u0641\u0623\u0646\u0627 \u0627\u0644\u0622\u0646 \u0623\u0645\u0646\u062D \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646 \u0628\u0633\u0647\u0648\u0644\u0629\u060C \u0645\u0639 \u0627\u0644\u0639\u0644\u0645 \u0623\u0646 \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u062A\u062A\u0645 \u0645\u0631\u0627\u0642\u0628\u062A\u0647\u0627 \u0639\u0646 \u0643\u062B\u0628. \u0648\u0642\u062F \u0632\u0627\u062F\u062A \u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u064A\u060C \u0645\u0645\u0627 \u0623\u062F\u0649 \u0625\u0644\u0649 \u0632\u064A\u0627\u062F\u0629 \u062D\u062C\u0645 \u0645\u0628\u064A\u0639\u0627\u062A\u064A.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Momodou Diallo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0635\u0627\u062D\u0628 \u0645\u062D\u0644 \u0628\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AppFeaturesArComponent {
  constructor() {
    this.screenshotSlider = {
      loop: true,
      margin: 30,
      dots: true,
      center: true,
      smartSpeed: 2000,
      navSpeed: 700,
      dotsSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppFeaturesArComponent_Factory(t) {
    return new (t || AppFeaturesArComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppFeaturesArComponent,
    selectors: [["app-app-features-ar"]],
    decls: 11,
    vars: 1,
    consts: [["id", "services", 1, "feature-section", "pt-100", "pb-70", "mb-5"], [1, "container"], ["data-wow-duration", "1s", 1, "section-title"], [3, "options"], ["carouselSlide", ""], ["data-wow-duration", "1s", 1, "card-temoin"], [1, "temoin"], [1, "div"], [1, "name"], [1, "prof"]],
    template: function AppFeaturesArComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0643\u0644\u0645\u062A\u0647\u0645\u060C \u0641\u062E\u0631\u0646\u0627:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0634\u0647\u0627\u062F\u0627\u062A \u0645\u0646 \u0645\u0633\u062A\u062E\u062F\u0645\u064A ProboutikApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppFeaturesArComponent_ng_template_8_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppFeaturesArComponent_ng_template_9_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppFeaturesArComponent_ng_template_10_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotSlider);
      }
    },
    dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
    styles: [".feature-section[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  padding: 65px 25px 35px;\n  border-radius: 20px 0 20px 0;\n  transition: var(--transition);\n  background: var(--whiteColor);\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: #0899e7;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor) !important;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]::after {\n  background: #44b8ef;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  z-index: 1;\n  line-height: 1;\n  font-size: 30px;\n  color: #9356f5;\n  position: relative;\n  margin-bottom: 45px;\n  display: inline-block;\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  top: -20px;\n  content: \"\";\n  left: -20px;\n  z-index: -1;\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  background: #e1d3f8;\n  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i.flaticon-credit-card[_ngcontent-%COMP%] {\n  color: #ca4774;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #0899e7;\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  background: #44b8ef;\n}\n\n@media only screen and (max-width: 767px) {\n  .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    padding: 60px 20px 30px;\n  }\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n\n.card-temoin[_ngcontent-%COMP%] {\n  display: flex;\n  height: 347px;\n  padding: 32px 32px 33px 32px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 34px;\n  flex: 1 0 0;\n  border-radius: 20px;\n  border: 2px solid var(--black, #25313C);\n}\n.card-temoin[_ngcontent-%COMP%]   .temoin[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 163.15%;\n  \n\n}\n.card-temoin[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #25313C;\n  font-family: Work Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150.6%;\n  \n\n}\n.card-temoin[_ngcontent-%COMP%]   .prof[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  \n\n  font-family: Work Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150.6%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1hci9hcHAtZmVhdHVyZXMvYXBwLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0RBQUE7QUFFUjtBQURRO0VBQ0ksbUJBQUE7QUFHWjtBQURRO0VBR0ksbUNBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUNRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFBWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrR0FBQTtVQUFBLDBGQUFBO0FBRWhCO0FBQVk7RUFDSSxjQUFBO0FBRWhCO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFDUTtFQUNJLDZCQUFBO0FBQ1o7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDUTs7O0VBR0ksd0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjs7QUFJQTtFQUVRO0lBQ0ksdUJBQUE7RUFGVjtBQUNGO0FBT0k7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUxSOztBQW1CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFoQko7QUFpQkk7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFmUjtBQWlCSTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZlI7QUFpQkk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZlIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS1zZWN0aW9uIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLmZlYXR1cmUtY2FyZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgcGFkZGluZzogNjVweCAyNXB4IDM1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMCAyMHB4IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDVweCAzMHB4IHJnYmEoNzIsIDczLCAxMjEsIC4xNSk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4OTllNztcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIGksXG4gICAgICAgICY6aG92ZXIgaDMsXG4gICAgICAgICY6aG92ZXIgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIGk6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NGI4ZWY7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzkzNTZmNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxZDNmODtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA3MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDcwJSwgNzAlIDEwMCUsIDMwJSAxMDAlLCAwJSA3MCUsIDAlIDMwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmZsYXRpY29uLWNyZWRpdC1jYXJkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NhNDc3NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwODk5ZTc7XG4gICAgICAgIGksXG4gICAgICAgIGgzLFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDRiOGVmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmZlYXR1cmUtc2VjdGlvbiB7XG4gICAgICAgIC5mZWF0dXJlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogUGFyYWdyYXBoICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgLyogMjkuMzY3cHggKi9cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5jYXJkLXRlbW9pbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDM0N3B4O1xuICAgIHBhZGRpbmc6IDMycHggMzJweCAzM3B4IDMycHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDM0cHg7XG4gICAgZmxleDogMSAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgLnRlbW9pbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2My4xNSU7XG4gICAgICAgIC8qIDI5LjM2N3B4ICovXG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6ICMyNTMxM0M7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwLjYlO1xuICAgICAgICAvKiAyNC4wOTZweCAqL1xuICAgIH1cbiAgICAucHJvZiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIC8qIGNhcHRpb24gKi9cbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAuNiU7XG4gICAgICAgIC8qIDIxLjA4NHB4ICovXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 5552:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-ar/app-landing-ar.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLandingArComponent: () => (/* binding */ AppLandingArComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_banner_app_banner_ar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-banner/app-banner-ar.component */ 8850);
/* harmony import */ var _app_why_choose_app_why_choose_component_ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-why-choose/app-why-choose.component-ar */ 887);
/* harmony import */ var _app_features_app_features_component_ar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-features/app-features.component-ar */ 7672);
/* harmony import */ var _app_pricing_app_pricing_component_ar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-pricing/app-pricing.component-ar */ 2195);
/* harmony import */ var _app_testimonials_app_testimonials_component_ar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-testimonials/app-testimonials.component-ar */ 5806);
/* harmony import */ var _common_navbarar_navbar_component_ar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/navbarar/navbar.component-ar */ 7907);







class AppLandingArComponent {
  static #_ = this.ɵfac = function AppLandingArComponent_Factory(t) {
    return new (t || AppLandingArComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppLandingArComponent,
    selectors: [["app-app-landing-ar"]],
    decls: 6,
    vars: 0,
    template: function AppLandingArComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar-ar")(1, "app-app-banner-ar")(2, "app-app-why-choose-ar")(3, "app-app-features-ar")(4, "app-app-pricing-ar")(5, "app-app-testimonials-ar");
      }
    },
    dependencies: [_app_banner_app_banner_ar_component__WEBPACK_IMPORTED_MODULE_0__.AppBannerArComponent, _app_why_choose_app_why_choose_component_ar__WEBPACK_IMPORTED_MODULE_1__.AppWhyChooseArComponent, _app_features_app_features_component_ar__WEBPACK_IMPORTED_MODULE_2__.AppFeaturesArComponent, _app_pricing_app_pricing_component_ar__WEBPACK_IMPORTED_MODULE_3__.AppPricingArComponent, _app_testimonials_app_testimonials_component_ar__WEBPACK_IMPORTED_MODULE_4__.AppTestimonialsArComponent, _common_navbarar_navbar_component_ar__WEBPACK_IMPORTED_MODULE_5__.NavbarArComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2195:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-ar/app-pricing/app-pricing.component-ar.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPricingArComponent: () => (/* binding */ AppPricingArComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function AppPricingArComponent_div_9_a_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingArComponent_div_9_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingArComponent_div_9_a_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingArComponent_div_9_a_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingArComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0634\u0647\u0631\u064A\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "990 FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " /\u0634\u0647\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0627\u0639\u062A\u0631\u0627\u0641 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0625\u062F\u0627\u0631\u0629 \u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629 \u0627\u0644\u0628\u0633\u064A\u0637\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u0637\u0644\u0628 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0630\u0645\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0648\u0627\u0644\u062F\u0627\u0626\u0646\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u062A\u0630\u0643\u064A\u0631 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0622\u0644\u064A \u0639\u0628\u0631 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0642\u0635\u064A\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u062A\u0642\u0627\u0631\u064A\u0631 \u0648\u0643\u0634\u0648\u0641\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u062A\u0637\u0628\u064A\u0642 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u063A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppPricingArComponent_div_9_a_37_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppPricingArComponent_div_9_a_38_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16)(40, "div", 10)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Annuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10 000 FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " /\u0633\u0646\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "ul")(49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0627\u0644\u0627\u0639\u062A\u0631\u0627\u0641 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u0625\u062F\u0627\u0631\u0629 \u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629 \u0627\u0644\u0628\u0633\u064A\u0637\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u0637\u0644\u0628 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0630\u0645\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0648\u0627\u0644\u062F\u0627\u0626\u0646\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u062A\u0630\u0643\u064A\u0631 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0622\u0644\u064A \u0639\u0628\u0631 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0642\u0635\u064A\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u062A\u0642\u0627\u0631\u064A\u0631 \u0648\u0643\u0634\u0648\u0641\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u062A\u0637\u0628\u064A\u0642 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u063A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AppPricingArComponent_div_9_a_74_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppPricingArComponent_div_9_a_75_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isIOS());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isIOS());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid());
  }
}
function AppPricingArComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 8)(2, "div", 20)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Personal Pack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "$30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Rapports et relev\u00E9s de compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Application Multilingue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13)(37, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20)(40, "div", 22)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Business Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "ul")(49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Trip Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Money Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13)(74, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24)(77, "div", 25)(78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "$90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 11)(85, "ul")(86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Trip Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Money Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13)(111, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
class AppPricingArComponent {
  constructor(platform) {
    this.platform = platform;
    // Tabs
    this.currentTab = 'tab1';
  }
  ngOnInit() {}
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function AppPricingArComponent_Factory(t) {
    return new (t || AppPricingArComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppPricingArComponent,
    selectors: [["app-app-pricing-ar"]],
    decls: 11,
    vars: 2,
    consts: [["id", "pricing", 1, "pricing-section"], [1, "container"], [1, "section-title"], [1, "pricing-tabs"], ["data-aos", "fade-left", 1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["id", "tab1", 1, "pane"], [1, "row"], ["data-aos", "zoom-in-up", "data-aos-duration", "3000", 1, "col-lg-6", "col-md-6"], [1, "price-card"], [1, "price-feature"], [1, "flaticon-checked"], [1, "price-btn"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["data-aos", "zoom-in-down", "data-aos-duration", "3000", 1, "col-lg-6", "col-md-6"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["id", "tab2", 1, "pane"], [1, "col-lg-4", "col-md-6"], ["routerLink", "/"], [1, "price-card", "active-price", "business-class"], [1, "flaticon-block"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "price-card", "premium"]],
    template: function AppPricingArComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0623\u062F\u0627\u0621 \u0628\u0633\u0639\u0631 \u0645\u0646\u062E\u0641\u0636:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u062A\u0637\u0628\u064A\u0642 ProBoutik \u064A\u062F\u0639\u0645\u0643 \u0641\u064A \u062A\u0646\u0645\u064A\u0629 \u0623\u0639\u0645\u0627\u0644\u0643 \u0645\u0642\u0627\u0628\u0644 990 \u0641\u0631\u0646\u0643 \u0634\u0647\u0631\u064A\u064B\u0627 \u0641\u0642\u0637. \u0627\u062E\u062A\u0631 \u0627\u0634\u062A\u0631\u0627\u0643\u064B\u0627 \u0634\u0647\u0631\u064A\u064B\u0627 \u0645\u064A\u0633\u0648\u0631 \u0627\u0644\u062A\u0643\u0644\u0641\u0629. \u0627\u0628\u062F\u0623 \u0628\u0634\u0647\u0631 \u0645\u062C\u0627\u0646\u064A \u062B\u0645 \u0642\u0645 \u0628\u0627\u0644\u062A\u0631\u0642\u064A\u0629 \u0625\u0644\u0649 \u0627\u0634\u062A\u0631\u0627\u0643 \u0628\u0642\u064A\u0645\u0629 990 \u0641\u0631\u0646\u0643 \u0634\u0647\u0631\u064A\u064B\u0627 \u0623\u0648 10000 \u0641\u0631\u0646\u0643 \u0633\u0646\u0648\u064A\u064B\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppPricingArComponent_div_9_Template, 76, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppPricingArComponent_div_10_Template, 113, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab2");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".pricing-section[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n  padding: 50px;\n  border: 1px solid black;\n  border-radius: 30px;\n  text-align: center;\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n  transition: var(--transition);\n  margin-bottom: 30px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #343d48;\n  font-size: 22px;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  margin-bottom: 0;\n  line-height: 1;\n  margin-bottom: 10px;\n  transition: var(--transition);\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 30px;\n  transition: var(--transition);\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin-top: 30px;\n  padding-left: 30px;\n  margin-bottom: 40px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #343d48;\n  margin-bottom: 20px;\n  transition: var(--transition);\n  display: block;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #32cd32;\n  transition: var(--transition);\n  font-size: 14px;\n  margin-right: 5px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--primary);\n  font-size: 16px;\n  color: white;\n  font-weight: 600;\n  padding: 15px 40px;\n  border-radius: 50px;\n  display: inline-block;\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n}\n.pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 14px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 14px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n    text-align: center;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 15px 40px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 50px 40px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1hci9hcHAtcHJpY2luZy9hcHAtcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQVFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5aO0FBUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5aO0FBT1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFRUTtFQUNJLGlCQUFBO0FBTlo7QUFPWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMaEI7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBSnBCO0FBS29CO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSHhCO0FBWWlCO0VBQ0csZ0JBQUE7QUFWcEI7QUFlWTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FBYmhCO0FBcUNJOzs7O0VBSUksd0JBQUE7QUFuQ1I7O0FBdUNBO0VBR1k7SUFDSSxtQkFBQTtFQXRDZDtFQXVDYztJQUNJLFVBQUE7SUFDQSxlQUFBO0VBckNsQjtFQXNDa0I7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUFwQ3RCO0VBeUNNO0lBQ0ksa0JBQUE7RUF2Q1Y7RUF3Q1U7SUFDSSxlQUFBO0VBdENkO0VBeUNjO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBdkNsQjtFQXdDa0I7SUFDSSxlQUFBO0VBdEN0QjtFQTBDVTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQXhDZDtBQUNGO0FBK0NBO0VBRVE7SUFDSSxrQkFBQTtFQTlDVjtFQWdEYztJQUNJLGVBQUE7RUE5Q2xCO0VBa0RjO0lBQ0ksa0JBQUE7RUFoRGxCO0FBQ0Y7QUFzREE7RUFFUTtJQUNJLGtCQUFBO0VBckRWO0VBdURjO0lBQ0ksZUFBQTtFQXJEbEI7RUFzRGtCO0lBQ0ksZUFBQTtFQXBEdEI7QUFDRjtBQStEQTtFQUNJLFdBQUE7QUE3REo7QUE4REk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE1RFI7QUE4REk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQTVEUiIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljaW5nLXNlY3Rpb24ge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAucHJpY2UtY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA1cHggMzBweCByZ2JhKDcyLCA3MywgMTIxLCAuMTUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLy8gJjpob3ZlciB7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjMDVhM2VhO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vICY6aG92ZXIgcCxcbiAgICAgICAgLy8gJjpob3ZlciBoMyxcbiAgICAgICAgLy8gJjpob3ZlciAucHJpY2UtZmVhdHVyZSB1bCBsaSxcbiAgICAgICAgLy8gJjpob3ZlciAucHJpY2UtZmVhdHVyZSB1bCBsaSBpIHtcbiAgICAgICAgLy8gICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzQzZDQ4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcmljZS1mZWF0dXJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzZDQ4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMmNkMzI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDUpLFxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDYpLFxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDcpLFxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcmljZS1idG4ge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA3cHggNXB4IDMwcHggcmdiYSg3MiwgNzMsIDEyMSwgLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnVzaW5lc3MtY2xhc3Mge1xuICAgICAgICAucHJpY2UtZmVhdHVyZSB7XG4gICAgICAgICAgICAvLyB1bCB7XG4gICAgICAgICAgICAvLyAgICAgIDpudGgtY2hpbGQoNSksXG4gICAgICAgICAgICAvLyAgICAgIDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgLy8gICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgOm50aC1jaGlsZCg3KSxcbiAgICAgICAgICAgIC8vICAgICAgOm50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJlbWl1bSB7XG4gICAgICAgIC5wcmljZS1mZWF0dXJlIHt9XG4gICAgfVxuICAgIC8vIC5hY3RpdmUtcHJpY2Uge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjMDVhM2VhO1xuICAgIC8vIH1cbiAgICAuYWN0aXZlLXByaWNlIHAsXG4gICAgLmFjdGl2ZS1wcmljZSBoMyxcbiAgICAuYWN0aXZlLXByaWNlIC5wcmljZS1mZWF0dXJlIHVsIGxpLFxuICAgIC5hY3RpdmUtcHJpY2UgLnByaWNlLWZlYXR1cmUgdWwgbGkgaSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucHJpY2luZy1zZWN0aW9uIHtcbiAgICAgICAgLnBsYW4tbGlzdCB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlLWZlYXR1cmUge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZS1idG4gYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAucHJpY2luZy1zZWN0aW9uIHtcbiAgICAgICAgLnByaWNlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAyMHB4O1xuICAgICAgICAgICAgLnByaWNlLWZlYXR1cmUge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZS1idG4ge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLnByaWNpbmctc2VjdGlvbiB7XG4gICAgICAgIC5wcmljZS1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgICAgICAgICAgIC5wcmljZS1mZWF0dXJlIHtcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogSGVhZGluZyAxICovXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvKiBUZXh0L01lZGl1bS9Ob3JtYWwgKi9cbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAvKiAyN3B4ICovXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5806:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-ar/app-testimonials/app-testimonials.component-ar.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTestimonialsArComponent: () => (/* binding */ AppTestimonialsArComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);





function AppTestimonialsArComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thierno Sakho");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0627\u0644\u0645\u0624\u0633\u0633 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u060C \u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u064A\u062A\u0645\u062A\u0639 \u0628\u062E\u0628\u0631\u0629 \u062A\u0632\u064A\u062F \u0639\u0646 15 \u0639\u0627\u0645\u064B\u0627 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0635\u0631\u0641\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0627\u0644\u0623\u0635\u063A\u0631 \u0648\u0635\u0646\u0627\u0639\u0629 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppTestimonialsArComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Abdoulaye FAYE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0627\u0644\u0645\u0624\u0633\u0633 \u0627\u0644\u0645\u0634\u0627\u0631\u0643 CTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u064A\u062A\u0645\u062A\u0639 \u0628\u062E\u0628\u0631\u0629 \u062A\u0632\u064A\u062F \u0639\u0646 7 \u0633\u0646\u0648\u0627\u062A \u0641\u064A \u0645\u062C\u0627\u0644 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0641\u064A \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648Saas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppTestimonialsArComponent_ng_template_13_Template(rf, ctx) {}
function AppTestimonialsArComponent_a_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppTestimonialsArComponent_a_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u062D\u0645\u064A\u0644 \u0645\u062C\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AppTestimonialsArComponent {
  constructor(platform) {
    this.platform = platform;
    this.testimonialSlides = {
      loop: true,
      margin: 30,
      dots: true,
      center: true,
      smartSpeed: 2000,
      navSpeed: 700,
      dotsSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {}
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function AppTestimonialsArComponent_Factory(t) {
    return new (t || AppTestimonialsArComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppTestimonialsArComponent,
    selectors: [["app-app-testimonials-ar"]],
    decls: 94,
    vars: 3,
    consts: [["id", "testimonials", 1, "testimonial-section", "mt-5", "mb-5"], [1, "container"], [1, "section-title"], [1, "foire"], [1, "row", "align-items-center", "mb-5"], [1, "mb-5"], [1, "testimonial-slider"], [3, "options"], ["carouselSlide", ""], [1, "mt-5"], [1, "rej-text"], [1, "navbar-btn"], ["routerLink", "/ "], [1, "foire", "mb-3"], ["id", "accordionExample", 1, "accordion", "mb-5"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingFour", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "accordion-button", "collapsed"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingFive", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "accordion-button", "collapsed"], ["id", "collapseFive", "aria-labelledby", "headingFive", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "section-title", "mt-5", "mb-5"], [1, "section-title", "mt-5"], [1, "rej"], [1, "navbar-btn-t"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], [1, "contact", "mt-5"], ["action", "", 1, "form"], [1, "form-group", "mb-3"], ["for", "nom"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "\u0627\u0643\u062A\u0628 \u0631\u0633\u0627\u0644\u0629 \u062A\u0635\u0648\u064A\u062A\u0643", 1, "form-control"], [1, "navbar-btn-t", "offset-4"], [1, "testimonial-item"], ["src", "assets/img/app-landing/ceo.png", "alt", "client image"], [1, "client-info"], ["src", "assets/img/app-landing/cto.png", "alt", "client image"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"]],
    template: function AppTestimonialsArComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0645\u062A\u062D\u062F\u0648\u0646 \u0628\u0631\u0624\u064A\u0629:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0627\u0643\u062A\u0634\u0641 \u0641\u0631\u064A\u0642 ProBoutik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppTestimonialsArComponent_ng_template_11_Template, 9, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppTestimonialsArComponent_ng_template_12_Template, 9, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppTestimonialsArComponent_ng_template_13_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "div", 2)(16, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062A\u062D\u0645\u0633:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0646\u0627 \u0648\u062C\u0644\u0628 \u062E\u0628\u0631\u062A\u0643 \u0644\u062A\u0634\u0643\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0646\u0636\u0645 \u0625\u0644\u064A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0623\u0633\u0626\u0644\u0629 \u0625\u0636\u0627\u0641\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "h2", 16)(28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 1. \u0645\u0627 \u0647\u0648 \u062A\u0637\u0628\u064A\u0642 \u0628\u0631\u0648\u0628\u0648\u062A\u064A\u0643 \u061F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u062A\u0637\u0628\u064A\u0642 ProBoutik \u0647\u0648 \u062A\u0637\u0628\u064A\u0642 \u062C\u0648\u0627\u0644 \u062B\u0648\u0631\u064A \u0645\u0635\u0645\u0645 \u0644\u0644\u062A\u062C\u0627\u0631 \u0627\u0644\u0635\u063A\u0627\u0631 \u0648\u062A\u062C\u0627\u0631 \u0627\u0644\u062A\u062C\u0632\u0626\u0629. \u0641\u0647\u0648 \u064A\u0642\u062F\u0645 \u062D\u0644\u0627\u064B \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0631\u0642\u0645\u0646\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0642\u062F \u0648\u062A\u0630\u0643\u064A\u0631\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0648\u063A\u064A\u0631 \u0630\u0644\u0643 \u0627\u0644\u0643\u062B\u064A\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "h2", 20)(35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2.\u0643\u064A\u0641 \u062A\u0639\u0645\u0644 \u0631\u0642\u0645\u0646\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A\u061F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u062A\u0639\u062F \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 ProBoutikApp \u0623\u0645\u0631\u064B\u0627 \u0628\u0633\u064A\u0637\u064B\u0627. \u064A\u0633\u062C\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u062C\u0645\u064A\u0639 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0645\u0624\u062C\u0644\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643\u060C \u0645\u0645\u0627 \u064A\u0636\u0645\u0646 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u0634\u0641\u0627\u0641 \u0648\u0625\u062F\u0627\u0631\u0629 \u0623\u0641\u0636\u0644 \u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0639\u0645\u0644\u0643. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "h2", 23)(42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 3. \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u064A \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0639\u0628\u0631 \u062A\u0637\u0628\u064A\u0642 ProBoutik\u061F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25)(45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u064A\u0642\u062F\u0645 \u062A\u0637\u0628\u064A\u0642 ProBoutik \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0629 \u0644\u0639\u0645\u0644\u0627\u0626\u0643 \u0641\u064A \u0634\u0643\u0644 \u0627\u0644\u0639\u0648\u0645\u0644\u0629 \u0627\u0644\u0635\u063A\u064A\u0631\u0629. \u064A\u062A\u064A\u062D \u0644\u0643 \u0630\u0644\u0643 \u062A\u062C\u062F\u064A\u062F \u062A\u062F\u0641\u0642\u0643 \u0627\u0644\u0646\u0642\u062F\u064A \u0648\u0645\u0648\u0627\u0635\u0644\u0629 \u0646\u0645\u0648\u0643\u060C \u0645\u0639 \u062A\u062C\u0646\u0628 \u0627\u0644\u0636\u063A\u0648\u0637 \u0627\u0644\u0645\u0627\u0644\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15)(48, "h2", 26)(49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 4. \u0643\u064A\u0641 \u062A\u0639\u0645\u0644 \u062A\u0630\u0643\u064A\u0631\u0627\u062A \u0627\u0644\u062F\u0641\u0639\u061F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28)(52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u062A\u0639\u0645\u0644 \u062A\u0630\u0643\u064A\u0631\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u0644\u062A\u0637\u0628\u064A\u0642 ProBoutik \u0639\u0644\u0649 \u062A\u0628\u0633\u064A\u0637 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644. \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u062A\u0630\u0643\u064A\u0631\u0627\u062A \u0625\u0644\u0649 \u0639\u0645\u0644\u0627\u0626\u0643 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0641\u0639\u060C \u0645\u0645\u0627 \u064A\u0648\u0641\u0631 \u062A\u062C\u0631\u0628\u0629 \u0633\u0644\u0633\u0629 \u0648\u0634\u0641\u0627\u0641\u0629 \u0644\u0644\u062C\u0645\u064A\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15)(55, "h2", 29)(56, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 5. \u0645\u0627 \u0647\u064A \u0642\u0637\u0627\u0639\u0627\u062A \u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u0641\u064A\u062F \u0645\u0646 \u062A\u0637\u0628\u064A\u0642 ProBoutik\u061F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31)(59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u064A\u0641\u064A\u062F ProBoutikApp \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u062A\u0646\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062A\u060C \u0645\u0646 \u0627\u0644\u0628\u064A\u0639 \u0628\u0627\u0644\u062A\u062C\u0632\u0626\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u063A\u0630\u064A\u0629 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32)(62, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0647\u0644 \u0644\u062F\u064A\u0643 \u0623\u0633\u0626\u0644\u0647 \u0623\u062E\u0631\u0649 \u061F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F\u060C \u0644\u0627 \u062A\u062A\u0631\u062F\u062F \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0646\u0627.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11)(67, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0627\u0646\u0636\u0645 \u0625\u0644\u064A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33)(70, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u062A\u0633\u0647\u064A\u0644 \u0625\u062F\u0627\u0631\u062A\u0643 \u0641\u064A \u0645\u062A\u0646\u0627\u0648\u0644 \u064A\u062F\u0643 \u0645\u0639 ProboutikApp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u062E\u0630 \u0632\u0645\u0627\u0645 \u0627\u0644\u0645\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u0622\u0646 \u0648\u0642\u0645 \u0628\u062A\u0646\u0632\u064A\u0644 \u062A\u0637\u0628\u064A\u0642 ProBoutik \u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0623\u0645\u062B\u0644.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppTestimonialsArComponent_a_75_Template, 2, 0, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AppTestimonialsArComponent_a_76_Template, 2, 0, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38)(78, "form", 39)(79, "div", 40)(80, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0627\u0633\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40)(84, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0628\u0631\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40)(88, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0631\u0633\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45)(92, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u0645\u0628\u0639\u0648\u062B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.testimonialSlides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAndroid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective],
    styles: [".testimonial-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  animation: pulse 4s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 95px;\n  left: 120px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  bottom: 120px;\n  left: 28%;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 60px;\n  left: 35%;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  left: 50%;\n  top: 140px;\n  max-width: 100px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  right: 20%;\n  top: 55px;\n  width: 55px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  right: 95px;\n  bottom: 80px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  padding: 45px 90px 45px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  width: 70px;\n  border-radius: 100px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 163.15%;\n  \n\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  \n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 165px;\n  right: 65px;\n  animation: translateX 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0;\n  left: 100px;\n  animation: translateY 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 55px;\n  right: 235px;\n  animation: translateX 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  top: 400px;\n  right: 10px;\n  animation: translateY 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  bottom: 55px;\n  right: 200px;\n  animation: translateX 5s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .testimonial-section[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]::before {\n    font-size: 30px;\n    top: 80px;\n    right: 20px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n    padding: 45px 20px 45px;\n    text-align: center;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto 10px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: auto;\n    max-width: 235px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 15%;\n    left: 15%;\n    max-width: 30px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 10%;\n    left: 27%;\n    max-width: 30px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    top: 10%;\n    left: 30%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n    left: 0;\n    top: 25%;\n    max-width: 50px;\n    right: 0;\n    margin: auto;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n    right: 20%;\n    top: 10%;\n    width: 40px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n    right: 10%;\n    bottom: 10%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n    padding: 45px 0px 0 0;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .testimonial-section[_ngcontent-%COMP%] {\n    padding-bottom: 90px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]::before {\n    font-size: 70px;\n    top: 80px;\n    right: 20px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 40px;\n    left: 28%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .rej-text[_ngcontent-%COMP%] {\n    font-size: 8vw;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 50px;\n    left: 80px;\n    max-width: 60px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 30px;\n    left: 28%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n    left: 0;\n    right: 0;\n    max-width: 60px;\n    margin: auto;\n    top: 80px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  flex: 1 0 0;\n}\n\n.foire[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n}\n\n.accordion[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.rej[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 130%;\n  \n\n}\n\n.rej-text[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n\n.navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 15px 32px;\n  margin-left: 30px;\n  color: var(--primary);\n  border: solid 2px var(--primary);\n  text-decoration: none;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  color: WHITE;\n  border: solid 1px var(--primary);\n}\n\n.navbar-btn-t[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 15px 32px;\n  margin-left: 30px;\n  background-color: var(--primary);\n  color: WHITE;\n  text-decoration: none;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-btn-t[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  border: solid 2px var(--primary);\n  border: solid 1px var(--primary);\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--black, #000);\n  background: var(--white, #FFF);\n  display: flex;\n  height: 48px;\n  padding: 12px;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n}\n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--black, #000);\n  background: var(--white, #FFF);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  \n\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1hci9hcHAtdGVzdGltb25pYWxzL2FwcC10ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQUVoQjtBQUFhO0VBQ0csU0FBQTtFQUNBLFdBQUE7QUFFaEI7QUFBYTtFQUNHLGFBQUE7RUFDQSxTQUFBO0FBRWhCO0FBQWE7RUFDRyxTQUFBO0VBQ0EsU0FBQTtBQUVoQjtBQUFhO0VBQ0csU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFhO0VBQ0csVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRWhCO0FBQWE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQUVoQjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUNRO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFBWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRWhCO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQURnQjtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdwQjtBQURnQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBR3BCO0FBQVk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUVoQjtBQUdRO0VBQ0ksa0JBQUE7QUFEWjtBQUdTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQURaO0FBR1M7RUFDRyxNQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBRFo7QUFHUztFQUNHLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFEWjtBQUdTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQURaO0FBR1M7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBRFo7O0FBTUE7RUFDSTtJQUNJLG9CQUFBO0VBSE47RUFJTTtJQUNJLGFBQUE7RUFGVjtFQUtVO0lBQ0ksZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBSGQ7RUFLVTtJQUNJLHVCQUFBO0lBQ0Esa0JBQUE7RUFIZDtFQUljO0lBQ0ksbUJBQUE7RUFGbEI7RUFJYztJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQUZsQjtFQVFjO0lBQ0ksZUFBQTtFQU5sQjtFQVFlO0lBQ0csUUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VBTmxCO0VBUWU7SUFDRyxXQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7RUFObEI7RUFRZTtJQUNHLFFBQUE7SUFDQSxTQUFBO0VBTmxCO0VBUWU7SUFDRyxPQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtFQU5sQjtFQVFlO0lBQ0csVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VBTmxCO0VBUWU7SUFDRyxVQUFBO0lBQ0EsV0FBQTtFQU5sQjtFQVdVO0lBQ0kscUJBQUE7RUFUZDtBQUNGO0FBZ0JBO0VBQ0k7SUFDSSxvQkFBQTtFQWROO0VBZU07SUFDSSxnQkFBQTtFQWJWO0VBZU07SUFDSSxhQUFBO0VBYlY7RUFnQlU7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFkZDtFQW1CZTtJQUNHLFlBQUE7SUFDQSxTQUFBO0VBakJsQjtBQUNGO0FBdUJBO0VBQ0k7SUFDSSxjQUFBO0VBckJOO0VBMEJlO0lBQ0csU0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VBeEJsQjtFQTBCZTtJQUNHLFlBQUE7SUFDQSxTQUFBO0VBeEJsQjtFQTBCZTtJQUNHLE9BQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VBeEJsQjtFQTRCTTtJQUNJLFdBQUE7RUExQlY7QUFDRjtBQW1DSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFqQ1I7QUFtQ0k7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFqQ1I7O0FBcUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWxDSjs7QUFxQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWxDSjs7QUFxQ0E7RUFDSSxZQUFBO0FBbENKOztBQXFDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFsQ0o7O0FBcUNBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFsQ0o7O0FBc0NJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFFSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXBDWjtBQXVDUTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBckNaOztBQTJDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFFSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXpDWjtBQTRDUTtFQUNJLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQTFDWjs7QUErQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTVDSjs7QUErQ0E7RUFDSSxVQUFBO0FBNUNKO0FBNkNJO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUEzQ1I7QUE2Q0k7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7QUEzQ1I7O0FBK0NBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQTVDSjs7QUErQ0E7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTVDSiIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0aW1vbmlhbC1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC50ZXN0aW1vbmlhbC1pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5jbGllbnQtaW1nIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDk1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyOCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdG9wOiAxNDBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCU7XG4gICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA5NXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudGVzdGltb25pYWwtc2xpZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAudGVzdGltb25pYWwtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDkwcHggNDVweCAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50LWluZm8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLyogSGVhZGluZyAzICovXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2My4xNSU7XG4gICAgICAgICAgICAgICAgICAgIC8qIDI5LjM2N3B4ICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLyogVGV4dC9SZWd1bGFyL05vcm1hbCAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAgICAgICAvKiAyNHB4ICovXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsLXNoYXBlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICB0b3A6IDE2NXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDY1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICByaWdodDogMjM1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgICA6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgIHRvcDogNDAwcHg7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgYm90dG9tOiA1NXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50ZXN0aW1vbmlhbC1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zbGlkZXIge1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCA0NXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGVzdGltb25pYWwtaW1nIHtcbiAgICAgICAgICAgIC5jbGllbnQtaW1nIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNyU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zbGlkZXIge1xuICAgICAgICAgICAgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMHB4IDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAudGVzdGltb25pYWwtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLXNoYXBlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLXNsaWRlciB7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLWltZyB7XG4gICAgICAgICAgICAuY2xpZW50LWltZyB7XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI4JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAucmVqLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDh2dztcbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsLXNlY3Rpb24ge1xuICAgICAgICAudGVzdGltb25pYWwtaW1nIHtcbiAgICAgICAgICAgIC5jbGllbnQtaW1nIHtcbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjglO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWNjb3JkaW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogUGFyYWdyYXBoICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgLyogMjkuMzY3cHggKi9cbiAgICB9XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgZmxleDogMSAwIDA7XG59XG5cbi5mb2lyZSB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGluZyAxICovXG4gICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5hY2NvcmRpb24ge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlaiB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGluZy9INCAqL1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAvKiA0MS42cHggKi9cbn1cblxuLnJlai10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBUZXh0L01lZGl1bS9Ob3JtYWwgKi9cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgLyogMjdweCAqL1xufVxuXG4ubmF2YmFyLWJ0biB7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250OiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogV0hJVEU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5hdmJhci1idG4tdCB7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiBXSElURTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250OiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLCAjRkZGKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLCAjRkZGKTtcbiAgICB9XG59XG5cbmxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMwMDApO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgLyogMjRweCAqL1xufVxuXG4uYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 887:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-ar/app-why-choose/app-why-choose.component-ar.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWhyChooseArComponent: () => (/* binding */ AppWhyChooseArComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 5144);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AppWhyChooseArComponent {
  constructor() {}
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppWhyChooseArComponent_Factory(t) {
    return new (t || AppWhyChooseArComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppWhyChooseArComponent,
    selectors: [["app-app-why-choose-ar"]],
    decls: 46,
    vars: 0,
    consts: [["id", "about", 1, "why-choose", "pt-100"], [1, "container"], [1, "row", "align-items-center", "mb-5", "why"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "col"], ["data-wow-duration", "2s", 1, "why-choose-text", "wow", "fadeInUp"], [1, "media", "d-flex"], [1, "media-body"], [1, "mt-0"], ["data-aos", "fade-left", "data-aos-duration", "3000", 1, "col-lg-4"], ["data-wow-duration", "1s", 1, "why-choose-img", "wow", "fadeInUp"], ["src", "assets/img/app-landing/Connexion01.png", "alt", "why choose image"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "row", "align-items-center", "why", "reverse"], [1, "col-lg-4"], ["src", "assets/img/app-landing/Home01.png", "alt", "why choose image"], [1, "col"], [1, "media-body", "offset-1"], ["src", "assets/img/app-landing/Envoyer01.png", "alt", "why choose image"], [1, "row", "align-items-center", "why", "reverse"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "col-lg-4"], ["data-aos", "fade-left", "data-aos-duration", "3000", 1, "col"]],
    template: function AppWhyChooseArComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u062A\u0633\u062C\u064A\u0644 \u0628\u0633\u064A\u0637\u060C \u062F\u0648\u0646 \u0642\u064A\u0648\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u062E\u0637\u0648\u0629 \u0623\u0648\u0644\u0649 \u0628\u062F\u0648\u0646 \u062A\u0639\u0642\u064A\u062F\u0627\u062A. \u0627\u0646\u0636\u0645 \u0625\u0644\u0649 ProBoutikApp \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643\u060C \u0648\u062A\u062C\u0646\u0628 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0643\u0644\u064A\u0629 \u0627\u0644\u0645\u0639\u0642\u062F\u0629. \u0623\u0635\u0628\u062D \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0633\u0647\u0644\u0627\u064B\u060C \u0645\u0645\u0627 \u064A\u0645\u0647\u062F \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u062A\u062C\u0631\u0628\u0629 \u0633\u0644\u0633\u0629 \u0645\u0646\u0630 \u0627\u0644\u0628\u062F\u0627\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 4)(19, "div", 5)(20, "div", 15)(21, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u062A\u062A\u0628\u0639 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \u062F\u0627\u0626\u0645\u0627 \u0641\u064A \u0627\u0644\u0645\u0639\u0631\u0641\u0629. \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u060C \u0648\u0639\u0631\u0636 \u062D\u0627\u0644\u0629 \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0631. \u0643\u0646 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639\u060C \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0632\u0645\u0627\u0645 \u0627\u0644\u0623\u0645\u0648\u0631\u060C \u0648\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0639\u0644\u0627\u0642\u0627\u062A \u0642\u0648\u064A\u0629 \u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062B\u0642\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u062A\u0630\u0643\u064A\u0631 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " \u0646\u0646\u0633\u0649 \u0627\u0644\u0645\u062E\u0627\u0648\u0641 \u062C\u0645\u0639. \u0623\u0631\u0633\u0644 \u062A\u0630\u0643\u064A\u0631\u0627\u062A \u062A\u0644\u0642\u0627\u0626\u064A\u0629 \u0628\u0627\u0644\u062F\u0641\u0639\u060C \u0645\u0645\u0627 \u064A\u0648\u0641\u0631 \u062A\u062C\u0631\u0628\u0629 \u0633\u0644\u0633\u0629 \u0644\u0643 \u0648\u0644\u0639\u0645\u0644\u0627\u0626\u0643. \u062A\u0628\u0633\u064A\u0637 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0648\u062A\u0639\u0632\u064A\u0632 \u0633\u0645\u0639\u062A\u0643. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8)(33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "div", 18)(37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 4)(41, "div", 5)(42, "div", 6)(43, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0642\u0645 \u0628\u0642\u064A\u0627\u062F\u0629 \u0646\u0645\u0648\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " \u0644\u0627 \u062A\u062F\u0639 \u0627\u0644\u0646\u0642\u062F \u064A\u0639\u064A\u0642\u0643. \u0627\u0633\u062A\u0641\u062F \u0645\u0646 \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A \u0644\u062A\u0637\u0628\u064A\u0642 ProBoutik \u0644\u062A\u062C\u062F\u064A\u062F \u0645\u0648\u0627\u0631\u062F\u0643 \u0627\u0644\u0645\u0627\u0644\u064A\u0629. \u0637\u0648\u0631 \u0646\u0641\u0633\u0643 \u062F\u0648\u0646 \u0639\u0627\u0626\u0642\u060C \u062D\u0642\u0642 \u0637\u0645\u0648\u062D\u0627\u062A\u0643 \u0628\u062B\u0642\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: [".why-choose[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n}\n.why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 60px;\n  text-align: start;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);\n  animation: translateY 10s infinite linear;\n  border-radius: 45px;\n  width: 90%;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why[_ngcontent-%COMP%] {\n  margin-bottom: 190px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  width: 750px;\n  color: var(--black, #25313C);\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  \n\n  font-size: 48px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: #0f2137;\n  padding: 0 30px 0;\n  margin-right: 25px;\n  border-radius: 50px;\n  display: inline-block;\n  border: 1px solid #0f2137;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 15px;\n  position: relative;\n  left: 0;\n  font-size: 30px;\n  line-height: 1;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 40px;\n  margin: 0 0 15px;\n  font-size: 14px;\n  line-height: 0;\n  top: -10px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  top: -13px;\n  font-size: 17px;\n  font-weight: 600;\n  position: relative;\n  padding-left: 40px;\n  transition: var(--transition);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--whiteColor);\n  border: 1px solid transparent;\n  background: linear-gradient(0deg, rgb(0, 183, 235) 0%, rgb(8, 152, 231) 100%);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgb(0, 183, 235) 0%, rgb(8, 152, 231) 100%);\n  border: 1px solid transparent;\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .reverse[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n  .why[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .why-choose[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .why-choose[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n    left: 10px;\n    top: 15px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n    height: 45px;\n    width: 45px;\n    left: -10px;\n    top: -10px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    font-size: 15px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    text-align: center;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 10px 0px;\n    margin-right: 5px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 20px;\n    line-height: 1;\n    left: -40px;\n    top: 12px;\n    left: 0;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding-left: 30px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding-left: 30px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n    max-width: 250px;\n    margin: auto;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .why-choose[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]::after {\n    z-index: -1;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    top: 20px;\n    left: 35px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 300px;\n    margin: 0 auto 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1hci9hcHAtd2h5LWNob29zZS9hcHAtd2h5LWNob29zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBRFE7RUFDSSw0Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBR1o7QUFDUTtFQUNJLG9CQUFBO0FBQ1o7QUFFWTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUFoQjtBQUNnQjtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDcEI7QUFHUTtFQUNJLGdCQUFBO0FBRFo7QUFFWTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFoQjtBQUNnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNwQjtBQUNnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNwQjtBQUNnQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZFQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSx3QkFBQTtBQUNwQjtBQUVZO0VBQ0ksNkVBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBQWhCO0FBRVk7RUFDSSx3QkFBQTtBQUFoQjtBQUVZO0VBQ0ksd0JBQUE7QUFBaEI7O0FBTUE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQUhOO0VBS0U7SUFDSSxrQkFBQTtFQUhOO0VBTU07SUFDSSxhQUFBO0VBSlY7RUFNTTtJQUNJLG1CQUFBO0VBSlY7RUFLVTtJQUNJLGVBQUE7RUFIZDtFQU1NO0lBQ0ksYUFBQTtFQUpWO0VBTU07SUFDSSxpQkFBQTtFQUpWO0VBS1U7SUFDSSxtQkFBQTtFQUhkO0VBSWM7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFGbEI7RUFHa0I7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBRHRCO0VBSWM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUFGbEI7RUFHa0I7SUFDSSxlQUFBO0VBRHRCO0VBS1U7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBSGQ7RUFJYztJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7RUFGbEI7RUFHa0I7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0VBRHRCO0VBR2tCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBRHRCO0VBR2tCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBRHRCO0VBTU07SUFDSSxnQkFBQTtJQUNBLFlBQUE7RUFKVjtFQUtVO0lBQ0ksYUFBQTtFQUhkO0FBQ0Y7QUFVQTtFQUVRO0lBQ0ksYUFBQTtFQVRWO0VBV007SUFDSSxXQUFBO0VBVFY7RUFXTTtJQUNJLG1CQUFBO0VBVFY7RUFhYztJQUNJLFNBQUE7SUFDQSxVQUFBO0VBWGxCO0VBYWM7SUFDSSxnQkFBQTtFQVhsQjtFQWVNO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBYlY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53aHktY2hvb3NlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICAgIC53aHktY2hvb3NlLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDQ4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2h5LWNob29zZS10ZXh0IHtcbiAgICAgICAgLndoeSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgICAgICAgICAgICAgIC8qIFBhcmFncmFwaCAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgICAgICAgICAvKiAyOS4zNjdweCAqL1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgICAgICAgICAgICAgLyogSGVhZGluZyAxICovXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLndoeS1jaG9vc2UtYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBmMjEzNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmMjEzNztcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMTgzLCAyMzUsIDEpIDAlLCByZ2JhKDgsIDE1MiwgMjMxLCAxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBoNSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDE4MywgMjM1LCAxKSAwJSwgcmdiYSg4LCAxNTIsIDIzMSwgMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSBoNSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucmV2ZXJzZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB9XG4gICAgLndoeSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLndoeS1jaG9vc2Uge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLndoeS1jaG9vc2UtdGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53aHktY2hvb3NlLWJ0biB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC53aHktY2hvb3NlLWltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC53aHktY2hvb3NlIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNTBweDtcbiAgICAgICAgfVxuICAgICAgICAud2h5LWNob29zZS10ZXh0IHtcbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAud2h5LWNob29zZS1pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge31cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 3880:
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-en/app-banner/app-banner-en.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBannerEnComponent: () => (/* binding */ AppBannerEnComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/common/modal/modal.component */ 677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function AppBannerEnComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerEnComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerEnComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerEnComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppBannerEnComponent {
  constructor(modalService, platform) {
    this.modalService = modalService;
    this.platform = platform;
  }
  ngOnInit() {}
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  openModal() {
    const modalREf = this.modalService.open(src_app_components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      centered: true,
      size: 'xl'
    });
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {} else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log('====================================');
  }
  static #_ = this.ɵfac = function AppBannerEnComponent_Factory(t) {
    return new (t || AppBannerEnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppBannerEnComponent,
    selectors: [["app-app-banner-en"]],
    decls: 43,
    vars: 4,
    consts: [["id", "home", 1, "main-banner", "banner-bg-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container", "container1"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-sm-4"], [1, "banner-text"], [1, "animate__animated", "animate__backInLeft"], [1, "banner-btn", "animate__animated", "animate__backInLeft"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], [1, "col-lg-4", "col-sm-4"], ["data-aos", "zoom-out", "data-aos-delay", "300", 1, "banner-img", "text-end", "animated", "animate__heartBeat"], ["src", "assets/img/app-landing/welcome.png", "alt", "iphone"], [1, "container", "container2"], [1, "col-lg-8"], [1, "banner-text2"], [1, "banner-btn2"], [1, "col-lg-4"], [1, "banner-img2", "text-end"], [1, "container"], [1, "paragraph"], [1, "par"], [1, "video"], [1, "play"], ["data-bs-target", "#exampleModal", "xmlns", "http://www.w3.org/2000/svg", "width", "118", "height", "125", "viewBox", "0 0 118 125", "fill", "none", 3, "click"], ["d", "M109.051 48.4337C120.217 54.4869 120.217 70.5131 109.051 76.5663L23.6249 122.873C12.9639 128.652 1.70446e-06 120.933 1.55985e-06 108.807L4.55452e-07 16.1934C3.10845e-07 4.06696 12.964 -3.6518 23.6249 2.12715L109.051 48.4337Z", "fill", "white"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"]],
    template: function AppBannerEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Unlock Your Business Success with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ProBoutik App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Discover how ProBoutik App modernizes your invoices, strengthens your cash flow through financing and creates lasting relationships with your customers for long-term growth. Take your business to the to the next level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppBannerEnComponent_a_14_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppBannerEnComponent_a_15_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 4)(21, "div", 15)(22, "div", 16)(23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Unlock Your Business Success with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "ProBoutik App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Discover how ProBoutik App modernizes your invoices, strengthens your cash flow through financing and creates lasting relationships with your customers for long-term growth. Take your business to the to the next level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppBannerEnComponent_a_30_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AppBannerEnComponent_a_31_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " ProBoutik App introduces a new era of simplicity and efficiency. Digitize your transactions, take advantage of financing to replenish your cash flow and avoid financial stress. Explore a future where business management becomes a driving force for growth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23)(40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppBannerEnComponent_Template__svg_svg_click_41_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Work+Sans:wght@100;300&display=swap)[_ngcontent-%COMP%];.main-banner[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  position: relative;\n  height: 900px;\n  background-position: center center;\n  background-size: cover;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: flex;\n  width: 762.964px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 29.726px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  width: 916px;\n  color: var(--black, #25313C);\n  font-size: 75px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  margin-bottom: 30px;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 10px 30px;\n  background-color: var(--primary);\n  color: white;\n  line-height: 24px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%] {\n  font-family: var(--headingFontFamily);\n  color: var(--whiteColor);\n  background: transparent;\n  display: inline-block;\n  padding: 0;\n  border: 0;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 35px;\n  left: -5px;\n  top: 7px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 404.218px;\n  height: 538.701px;\n  flex-shrink: 0;\n  margin-left: 150px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n  content: \"\";\n  z-index: 1;\n  width: 800px;\n  right: -50px;\n  bottom: -10px;\n  height: 190px;\n  position: absolute;\n  border-radius: 30px;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFF 100%);\n  animation: translateX 6s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 140px;\n  left: -100px;\n  width: 220px;\n  animation-delay: 1s;\n  animation: translateY 4s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0px;\n  left: -25px;\n  width: 100px;\n  animation: translateY 4s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 100px;\n  right: 50px;\n  animation: translateX 6s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .paragraph[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .paragraph[_ngcontent-%COMP%]   .par[_ngcontent-%COMP%] {\n    text-align: center;\n    color: var(--black, #000);\n    font-size: 20px;\n    font-style: normal;\n    line-height: 150%;\n    width: 100%;\n    margin-bottom: 120px;\n    margin-top: 90px;\n    \n\n  }\n  .container1[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .container2[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 120px 0 45px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 20px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 80px;\n    padding: 10px 30px;\n    background-color: var(--primary);\n    color: white;\n    line-height: 24px;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 16px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: white;\n    color: var(--primary);\n    border: solid 1px var(--primary);\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 800px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    align-items: center;\n    gap: 29.726px;\n    text-align: center;\n    padding: 120px 0 45px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 5vw;\n    margin-bottom: 20px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    font-size: 5vw;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    z-index: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .paragraph[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: var(--black, #000);\n    text-align: center;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: bold;\n    width: 100%;\n    margin-bottom: 120px;\n    \n\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .main-banner[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #069ee8;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 120px 0 40px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 20px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0 auto 5px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .main-banner[_ngcontent-%COMP%] {\n    background: #03ABEB;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after, .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1550px) {\n  .main-banner[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 0;\n    left: -100px;\n    width: 245px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    left: 100px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    right: 150px;\n    top: 100px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    bottom: 100px;\n    right: 0;\n    max-width: 900px;\n    z-index: 1;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 100px;\n    right: 50px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    bottom: 55%;\n  }\n}\n.paragraph[_ngcontent-%COMP%] {\n  position: relative;\n}\n.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  width: 100%;\n  margin-bottom: 120px;\n  \n\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 651.06px;\n  flex-shrink: 0;\n  border-radius: 30px;\n  background: linear-gradient(0deg, rgba(42, 99, 226, 0.35) 0%, rgba(42, 99, 226, 0.35) 100%), url('image2.png'), lightgray 0px -22.506px/100% 103.457% no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 150px;\n}\n\n.container2[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1lbi9hcHAtYmFubmVyL2FwcC1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVJLGtDQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFFUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFHWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FBRnBCO0FBS2dCO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSHBCO0FBTVk7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSmhCO0FBS2dCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFIcEI7QUFLZ0I7RUFDSSxnQkFBQTtBQUhwQjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTlI7QUFRUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtFQUNBLHdDQUFBO0FBTlo7QUFVUTtFQUNJLGtCQUFBO0FBUlo7QUFVUztFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFSWjtBQVVTO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFSWjtBQVVTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQVJaOztBQWFBO0VBQ0k7SUFDSSxrQkFBQTtFQVZOO0VBV007SUFDSSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFUVjtFQVlFO0lBQ0ksd0JBQUE7RUFWTjtFQVlFO0lBQ0kseUJBQUE7RUFWTjtFQVdNO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQVRWO0VBVVU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFSZDtFQVVVO0lBQ0ksbUJBQUE7RUFSZDtFQVVVO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFSZDtFQVlVO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUVJLGdCQUFBO0lBQ0EsZUFBQTtFQVhsQjtFQWNjO0lBQ0ksdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdDQUFBO0VBWmxCO0VBZ0JNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQWRWO0VBZVU7SUFDSSxhQUFBO0VBYmQ7RUFlVTtJQUNJLGFBQUE7RUFiZDtFQWVVO0lBQ0ksV0FBQTtFQWJkO0VBaUJFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFmTjtFQWdCTTtJQUNJLGFBQUE7RUFkVjtFQWdCTTtJQUNJLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUFkVjtFQWVVO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VBYmQ7RUFlVTtJQUNJLG1CQUFBO0lBQ0EsY0FBQTtFQWJkO0VBZVU7SUFDSSxXQUFBO0VBYmQ7RUFjYztJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBWmxCO0VBZ0JNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFkVjtFQWVVO0lBQ0ksYUFBQTtFQWJkO0VBZVU7SUFDSSxhQUFBO0VBYmQ7RUFlVTtJQUNJLFdBQUE7RUFiZDtFQWlCRTtJQUNJLGtCQUFBO0VBZk47RUFnQk07SUFDSSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxTQUFBO0VBZFY7QUFDRjtBQW9CQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0VBbEJOO0VBbUJNO0lBQ0ksYUFBQTtFQWpCVjtFQW1CTTtJQUNJLGtCQUFBO0lBQ0EscUJBQUE7RUFqQlY7RUFrQlU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFoQmQ7RUFrQlU7SUFDSSxrQkFBQTtFQWhCZDtFQWtCVTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBaEJkO0VBbUJNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQWpCVjtFQWtCVTtJQUNJLGFBQUE7RUFoQmQ7RUFrQlU7SUFDSSxhQUFBO0VBaEJkO0VBa0JVO0lBQ0ksV0FBQTtFQWhCZDtBQUNGO0FBcUJBO0VBQ0k7SUFDSSxtQkFBQTtFQW5CTjtFQXFCVTtJQUNJLGVBQUE7RUFuQmQ7RUFxQlU7SUFFSSxhQUFBO0VBcEJkO0VBdUJNO0lBQ0ksVUFBQTtFQXJCVjtFQXNCVTtJQUNJLGVBQUE7RUFwQmQ7RUF1Qk07SUFDSSxhQUFBO0VBckJWO0FBQ0Y7QUEyQkE7RUFDSTtJQUNJLGNBQUE7RUF6Qk47RUEyQlc7SUFDRyxNQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUF6QmQ7RUEyQlc7SUFDRyxXQUFBO0VBekJkO0VBMkJXO0lBQ0csWUFBQTtJQUNBLFVBQUE7RUF6QmQ7RUE2Qlc7SUFDRyxhQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQTNCZDtFQTZCVztJQUNHLGFBQUE7SUFDQSxXQUFBO0VBM0JkO0VBNkJXO0lBQ0csV0FBQTtFQTNCZDtBQUNGO0FBZ0NBO0VBQ0ksa0JBQUE7QUE5Qko7QUErQkk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUE3QlI7O0FBaUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0pBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBOUJKOztBQWlDQTtFQUNJLGFBQUE7QUE5QkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9V29yaytTYW5zOndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXAnKTtcbi5tYWluLWJhbm5lciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIHNpemU6IGNvdmVyO1xuICAgIH1cbiAgICA7XG4gICAgLmJhbm5lci10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDc2Mi45NjRweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMjkuNzI2cHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IDkxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1idG4ge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBzaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5uZXItdmlkZW8ge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nRm9udEZhbWlseSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhbm5lci1pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA0MDQuMjE4cHg7XG4gICAgICAgIGhlaWdodDogNTM4LjcwMXB4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2FwcC1sYW5kaW5nL3dlbGNvbWUucG5nXCIpO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICByaWdodDogLTUwcHg7XG4gICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDAlLCAjRkZGIDEwMCUpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDZzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFubmVyLXNoYXBlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICB0b3A6IDE0MHB4O1xuICAgICAgICAgICAgbGVmdDogLTEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDZzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5wYXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgICAvKiA2MHB4ICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lcjEge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgLmJhbm5lci10ZXh0MiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDQ1cHg7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lci1idG4yIGEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1idG4yIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItaW1nMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1haW4tYmFubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgICAgIC5iYW5uZXItc2hhcGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXRleHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMjkuNzI2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDQ1cHg7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1dndcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5uZXItYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLWltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFyYWdyYXBoIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gICAgICAgICAgICAvKiA2MHB4ICovXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLm1haW4tYmFubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDY5ZWU4O1xuICAgICAgICAuYmFubmVyLXNoYXBlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci10ZXh0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEyMHB4IDAgNDBweDtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5uZXItYnRuIGEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1pbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLm1haW4tYmFubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAzQUJFQjtcbiAgICAgICAgLmJhbm5lci1pbWcge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOjphZnRlcixcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXRleHQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHtcbiAgICAubWFpbi1iYW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1pbWFnZS10d28ge1xuICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wYXJhZ3JhcGgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gICAgICAgIC8qIDYwcHggKi9cbiAgICB9XG59XG5cbi52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2NTEuMDZweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDQyLCA5OSwgMjI2LCAwLjM1KSAwJSwgcmdiYSg0MiwgOTksIDIyNiwgMC4zNSkgMTAwJSksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwLWxhbmRpbmcvaW1hZ2UyLnBuZ1wiKSwgbGlnaHRncmF5IDBweCAtMjIuNTA2cHggLyAxMDAlIDEwMy40NTclIG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5jb250YWluZXIyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9731:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-en/app-features/app-features.component-en.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFeaturesEnComponent: () => (/* binding */ AppFeaturesEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function AppFeaturesEnComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"Thanks to ProBoutik App, I now control the amounts owed by my clients. Valuable peace of mind reigns in my management. Each transaction is transparent, offering unrivaled efficiency.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Moussa Ndiaye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "fabric seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppFeaturesEnComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"ProBoutik App has given me invaluable peace of mind. I now easily grant credit, knowing that each transaction is closely monitored. My credit sales have increased, boosting my turnover.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Awa Gueye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cosmetic product seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppFeaturesEnComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"ProBoutik App has given me invaluable peace of mind. I now easily grant credit, knowing that each transaction is closely monitored. My credit sales have increased, boosting my turnover.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Momodou Diallo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shopkeeper in M\u00E9dina");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AppFeaturesEnComponent {
  constructor() {
    this.screenshotSlider = {
      loop: true,
      margin: 30,
      dots: true,
      center: true,
      smartSpeed: 2000,
      navSpeed: 700,
      dotsSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppFeaturesEnComponent_Factory(t) {
    return new (t || AppFeaturesEnComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppFeaturesEnComponent,
    selectors: [["app-app-features-en"]],
    decls: 11,
    vars: 1,
    consts: [["id", "services", 1, "feature-section", "pt-100", "pb-70", "mb-5"], [1, "container"], ["data-wow-duration", "1s", 1, "section-title"], [3, "options"], ["carouselSlide", ""], ["data-wow-duration", "1s", 1, "card-temoin"], [1, "temoin"], [1, "div"], [1, "name"], [1, "prof"]],
    template: function AppFeaturesEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Their Word, Our Pride :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Testimonials from ProboutikApp users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppFeaturesEnComponent_ng_template_8_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppFeaturesEnComponent_ng_template_9_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppFeaturesEnComponent_ng_template_10_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotSlider);
      }
    },
    dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
    styles: [".feature-section[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  padding: 65px 25px 35px;\n  border-radius: 20px 0 20px 0;\n  transition: var(--transition);\n  background: var(--whiteColor);\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: #0899e7;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor) !important;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]::after {\n  background: #44b8ef;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  z-index: 1;\n  line-height: 1;\n  font-size: 30px;\n  color: #9356f5;\n  position: relative;\n  margin-bottom: 45px;\n  display: inline-block;\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  top: -20px;\n  content: \"\";\n  left: -20px;\n  z-index: -1;\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  background: #e1d3f8;\n  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i.flaticon-credit-card[_ngcontent-%COMP%] {\n  color: #ca4774;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #0899e7;\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  background: #44b8ef;\n}\n\n@media only screen and (max-width: 767px) {\n  .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    padding: 60px 20px 30px;\n  }\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n\n.card-temoin[_ngcontent-%COMP%] {\n  display: flex;\n  height: 347px;\n  padding: 32px 32px 33px 32px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 34px;\n  flex: 1 0 0;\n  border-radius: 20px;\n  border: 2px solid var(--black, #25313C);\n}\n.card-temoin[_ngcontent-%COMP%]   .temoin[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 163.15%;\n  \n\n}\n.card-temoin[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #25313C;\n  font-family: Work Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150.6%;\n  \n\n}\n.card-temoin[_ngcontent-%COMP%]   .prof[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  \n\n  font-family: Work Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150.6%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1lbi9hcHAtZmVhdHVyZXMvYXBwLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0RBQUE7QUFFUjtBQURRO0VBQ0ksbUJBQUE7QUFHWjtBQURRO0VBR0ksbUNBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUNRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFBWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrR0FBQTtVQUFBLDBGQUFBO0FBRWhCO0FBQVk7RUFDSSxjQUFBO0FBRWhCO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFDUTtFQUNJLDZCQUFBO0FBQ1o7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDUTs7O0VBR0ksd0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjs7QUFJQTtFQUVRO0lBQ0ksdUJBQUE7RUFGVjtBQUNGO0FBT0k7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUxSOztBQW1CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFoQko7QUFpQkk7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFmUjtBQWlCSTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZlI7QUFpQkk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZlIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS1zZWN0aW9uIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLmZlYXR1cmUtY2FyZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgcGFkZGluZzogNjVweCAyNXB4IDM1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMCAyMHB4IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDVweCAzMHB4IHJnYmEoNzIsIDczLCAxMjEsIC4xNSk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4OTllNztcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIGksXG4gICAgICAgICY6aG92ZXIgaDMsXG4gICAgICAgICY6aG92ZXIgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIGk6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NGI4ZWY7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzkzNTZmNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxZDNmODtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA3MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDcwJSwgNzAlIDEwMCUsIDMwJSAxMDAlLCAwJSA3MCUsIDAlIDMwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmZsYXRpY29uLWNyZWRpdC1jYXJkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NhNDc3NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwODk5ZTc7XG4gICAgICAgIGksXG4gICAgICAgIGgzLFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDRiOGVmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmZlYXR1cmUtc2VjdGlvbiB7XG4gICAgICAgIC5mZWF0dXJlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogUGFyYWdyYXBoICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgLyogMjkuMzY3cHggKi9cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5jYXJkLXRlbW9pbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDM0N3B4O1xuICAgIHBhZGRpbmc6IDMycHggMzJweCAzM3B4IDMycHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDM0cHg7XG4gICAgZmxleDogMSAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgLnRlbW9pbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2My4xNSU7XG4gICAgICAgIC8qIDI5LjM2N3B4ICovXG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6ICMyNTMxM0M7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwLjYlO1xuICAgICAgICAvKiAyNC4wOTZweCAqL1xuICAgIH1cbiAgICAucHJvZiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIC8qIGNhcHRpb24gKi9cbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAuNiU7XG4gICAgICAgIC8qIDIxLjA4NHB4ICovXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 11:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-en/app-landing-en.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLandingEnComponent: () => (/* binding */ AppLandingEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_banner_app_banner_en_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-banner/app-banner-en.component */ 3880);
/* harmony import */ var _app_why_choose_app_why_choose_component_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-why-choose/app-why-choose.component-en */ 2508);
/* harmony import */ var _app_features_app_features_component_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-features/app-features.component-en */ 9731);
/* harmony import */ var _app_pricing_app_pricing_component_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-pricing/app-pricing.component-en */ 783);
/* harmony import */ var _app_testimonials_app_testimonials_component_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-testimonials/app-testimonials.component-en */ 2022);
/* harmony import */ var _common_navbaren_navbar_component_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/navbaren/navbar.component-en */ 7539);







class AppLandingEnComponent {
  static #_ = this.ɵfac = function AppLandingEnComponent_Factory(t) {
    return new (t || AppLandingEnComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppLandingEnComponent,
    selectors: [["app-app-landing-en"]],
    decls: 6,
    vars: 0,
    template: function AppLandingEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar-en")(1, "app-app-banner-en")(2, "app-app-why-choose-en")(3, "app-app-features-en")(4, "app-app-pricing-en")(5, "app-app-testimonials-en");
      }
    },
    dependencies: [_app_banner_app_banner_en_component__WEBPACK_IMPORTED_MODULE_0__.AppBannerEnComponent, _app_why_choose_app_why_choose_component_en__WEBPACK_IMPORTED_MODULE_1__.AppWhyChooseEnComponent, _app_features_app_features_component_en__WEBPACK_IMPORTED_MODULE_2__.AppFeaturesEnComponent, _app_pricing_app_pricing_component_en__WEBPACK_IMPORTED_MODULE_3__.AppPricingEnComponent, _app_testimonials_app_testimonials_component_en__WEBPACK_IMPORTED_MODULE_4__.AppTestimonialsEnComponent, _common_navbaren_navbar_component_en__WEBPACK_IMPORTED_MODULE_5__.NavbarEnComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 783:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-en/app-pricing/app-pricing.component-en.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPricingEnComponent: () => (/* binding */ AppPricingEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function AppPricingEnComponent_div_9_a_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingEnComponent_div_9_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingEnComponent_div_9_a_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingEnComponent_div_9_a_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Download for Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingEnComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "$1.65");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " /Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Credit recognition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Customer portfolio management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Mini accounting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Request for financing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Real-time monitoring of receivables and payables");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Automated payment reminders via SMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Account reports and statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Multilingual Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppPricingEnComponent_div_9_a_37_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppPricingEnComponent_div_9_a_38_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16)(40, "div", 10)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$16.50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " /Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "ul")(49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Credit recognition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Customer portfolio management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Mini accounting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Request for financing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Real-time monitoring of receivables and payables");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Automated payment reminders via SMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Account reports and statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Multilingual Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AppPricingEnComponent_div_9_a_74_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppPricingEnComponent_div_9_a_75_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isIOS());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isIOS());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid());
  }
}
function AppPricingEnComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 8)(2, "div", 20)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Personal Pack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "$30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Rapports et relev\u00E9s de compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Application Multilingue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13)(37, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20)(40, "div", 22)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Business Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "ul")(49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Trip Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Money Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13)(74, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24)(77, "div", 25)(78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "$90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 11)(85, "ul")(86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Trip Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Money Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13)(111, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
class AppPricingEnComponent {
  constructor(platform) {
    this.platform = platform;
    // Tabs
    this.currentTab = 'tab1';
  }
  ngOnInit() {}
  isIOS() {
    return this.platform.IOS;
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  static #_ = this.ɵfac = function AppPricingEnComponent_Factory(t) {
    return new (t || AppPricingEnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppPricingEnComponent,
    selectors: [["app-app-pricing-en"]],
    decls: 11,
    vars: 2,
    consts: [["id", "pricing", 1, "pricing-section"], [1, "container"], [1, "section-title"], [1, "pricing-tabs"], ["data-aos", "fade-left", 1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["id", "tab1", 1, "pane"], [1, "row"], ["data-aos", "zoom-in-up", "data-aos-duration", "3000", 1, "col-lg-6", "col-md-6"], [1, "price-card"], [1, "price-feature"], [1, "flaticon-checked"], [1, "price-btn"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["data-aos", "zoom-in-down", "data-aos-duration", "3000", 1, "col-lg-6", "col-md-6"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["id", "tab2", 1, "pane"], [1, "col-lg-4", "col-md-6"], ["routerLink", "/"], [1, "price-card", "active-price", "business-class"], [1, "flaticon-block"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "price-card", "premium"]],
    template: function AppPricingEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Adopt Performance at a Low Price :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ProBoutik App supports you in growing your business for only $1.65 per month. Opt for an affordable monthly subscription. Start with a free month and then upgrade to a subscription of $1.65 per month or $16.50 per year. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppPricingEnComponent_div_9_Template, 76, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppPricingEnComponent_div_10_Template, 113, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab2");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".pricing-section[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n  padding: 50px;\n  border: 1px solid black;\n  border-radius: 30px;\n  text-align: center;\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n  transition: var(--transition);\n  margin-bottom: 30px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #343d48;\n  font-size: 22px;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  margin-bottom: 0;\n  line-height: 1;\n  margin-bottom: 10px;\n  transition: var(--transition);\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 30px;\n  transition: var(--transition);\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin-top: 30px;\n  padding-left: 30px;\n  margin-bottom: 40px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #343d48;\n  margin-bottom: 20px;\n  transition: var(--transition);\n  display: block;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #32cd32;\n  transition: var(--transition);\n  font-size: 14px;\n  margin-right: 5px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--primary);\n  font-size: 16px;\n  color: white;\n  font-weight: 600;\n  padding: 15px 40px;\n  border-radius: 50px;\n  display: inline-block;\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n}\n.pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 14px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 14px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n    text-align: center;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 15px 40px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 50px 40px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1lbi9hcHAtcHJpY2luZy9hcHAtcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQVFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5aO0FBUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5aO0FBT1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFRUTtFQUNJLGlCQUFBO0FBTlo7QUFPWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMaEI7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBSnBCO0FBS29CO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSHhCO0FBWWlCO0VBQ0csZ0JBQUE7QUFWcEI7QUFlWTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FBYmhCO0FBcUNJOzs7O0VBSUksd0JBQUE7QUFuQ1I7O0FBdUNBO0VBR1k7SUFDSSxtQkFBQTtFQXRDZDtFQXVDYztJQUNJLFVBQUE7SUFDQSxlQUFBO0VBckNsQjtFQXNDa0I7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUFwQ3RCO0VBeUNNO0lBQ0ksa0JBQUE7RUF2Q1Y7RUF3Q1U7SUFDSSxlQUFBO0VBdENkO0VBeUNjO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBdkNsQjtFQXdDa0I7SUFDSSxlQUFBO0VBdEN0QjtFQTBDVTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQXhDZDtBQUNGO0FBK0NBO0VBRVE7SUFDSSxrQkFBQTtFQTlDVjtFQWdEYztJQUNJLGVBQUE7RUE5Q2xCO0VBa0RjO0lBQ0ksa0JBQUE7RUFoRGxCO0FBQ0Y7QUFzREE7RUFFUTtJQUNJLGtCQUFBO0VBckRWO0VBdURjO0lBQ0ksZUFBQTtFQXJEbEI7RUFzRGtCO0lBQ0ksZUFBQTtFQXBEdEI7QUFDRjtBQStEQTtFQUNJLFdBQUE7QUE3REo7QUE4REk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE1RFI7QUE4REk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQTVEUiIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljaW5nLXNlY3Rpb24ge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAucHJpY2UtY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA1cHggMzBweCByZ2JhKDcyLCA3MywgMTIxLCAuMTUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLy8gJjpob3ZlciB7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjMDVhM2VhO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vICY6aG92ZXIgcCxcbiAgICAgICAgLy8gJjpob3ZlciBoMyxcbiAgICAgICAgLy8gJjpob3ZlciAucHJpY2UtZmVhdHVyZSB1bCBsaSxcbiAgICAgICAgLy8gJjpob3ZlciAucHJpY2UtZmVhdHVyZSB1bCBsaSBpIHtcbiAgICAgICAgLy8gICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzQzZDQ4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcmljZS1mZWF0dXJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzZDQ4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMmNkMzI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDUpLFxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDYpLFxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDcpLFxuICAgICAgICAgICAgICAgIC8vICA6bnRoLWNoaWxkKDgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcmljZS1idG4ge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA3cHggNXB4IDMwcHggcmdiYSg3MiwgNzMsIDEyMSwgLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnVzaW5lc3MtY2xhc3Mge1xuICAgICAgICAucHJpY2UtZmVhdHVyZSB7XG4gICAgICAgICAgICAvLyB1bCB7XG4gICAgICAgICAgICAvLyAgICAgIDpudGgtY2hpbGQoNSksXG4gICAgICAgICAgICAvLyAgICAgIDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgLy8gICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgOm50aC1jaGlsZCg3KSxcbiAgICAgICAgICAgIC8vICAgICAgOm50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJlbWl1bSB7XG4gICAgICAgIC5wcmljZS1mZWF0dXJlIHt9XG4gICAgfVxuICAgIC8vIC5hY3RpdmUtcHJpY2Uge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjMDVhM2VhO1xuICAgIC8vIH1cbiAgICAuYWN0aXZlLXByaWNlIHAsXG4gICAgLmFjdGl2ZS1wcmljZSBoMyxcbiAgICAuYWN0aXZlLXByaWNlIC5wcmljZS1mZWF0dXJlIHVsIGxpLFxuICAgIC5hY3RpdmUtcHJpY2UgLnByaWNlLWZlYXR1cmUgdWwgbGkgaSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucHJpY2luZy1zZWN0aW9uIHtcbiAgICAgICAgLnBsYW4tbGlzdCB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlLWZlYXR1cmUge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZS1idG4gYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAucHJpY2luZy1zZWN0aW9uIHtcbiAgICAgICAgLnByaWNlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAyMHB4O1xuICAgICAgICAgICAgLnByaWNlLWZlYXR1cmUge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZS1idG4ge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLnByaWNpbmctc2VjdGlvbiB7XG4gICAgICAgIC5wcmljZS1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgICAgICAgICAgIC5wcmljZS1mZWF0dXJlIHtcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogSGVhZGluZyAxICovXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvKiBUZXh0L01lZGl1bS9Ob3JtYWwgKi9cbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAvKiAyN3B4ICovXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2022:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-en/app-testimonials/app-testimonials.component-en.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTestimonialsEnComponent: () => (/* binding */ AppTestimonialsEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);




function AppTestimonialsEnComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thierno Sakho");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Co-founder ,CEO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "With over 15 years in the investment banking, microfinance, VC industry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppTestimonialsEnComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Abdoulaye FAYE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Co-founder CTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "With over 7 years of IT and Product Management on Fintech and Saas startups. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppTestimonialsEnComponent_ng_template_13_Template(rf, ctx) {}
class AppTestimonialsEnComponent {
  constructor(platform) {
    this.platform = platform;
    this.testimonialSlides = {
      loop: true,
      margin: 30,
      dots: true,
      center: true,
      smartSpeed: 2000,
      navSpeed: 700,
      dotsSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {}
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function AppTestimonialsEnComponent_Factory(t) {
    return new (t || AppTestimonialsEnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppTestimonialsEnComponent,
    selectors: [["app-app-testimonials-en"]],
    decls: 92,
    vars: 1,
    consts: [["id", "testimonials", 1, "testimonial-section", "mt-5", "mb-5"], [1, "container"], [1, "section-title"], [1, "foire"], [1, "row", "align-items-center", "mb-5"], [1, "mb-5"], [1, "testimonial-slider"], [3, "options"], ["carouselSlide", ""], [1, "mt-5"], [1, "rej-text"], [1, "navbar-btn"], ["routerLink", "/ "], [1, "foire", "mb-3"], ["id", "accordionExample", 1, "accordion", "mb-5"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingFour", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "accordion-button", "collapsed"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingFive", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "accordion-button", "collapsed"], ["id", "collapseFive", "aria-labelledby", "headingFive", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "section-title", "mt-5", "mb-5"], [1, "section-title", "mt-5"], [1, "rej"], [1, "navbar-btn-t"], [1, "contact", "mt-5"], ["action", "", 1, "form"], [1, "form-group", "mb-3"], ["for", "nom"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Message", 1, "form-control"], [1, "navbar-btn-t", "offset-4"], [1, "testimonial-item"], ["src", "assets/img/app-landing/ceo.png", "alt", "client image"], [1, "client-info"], ["src", "assets/img/app-landing/cto.png", "alt", "client image"]],
    template: function AppTestimonialsEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "United by a Vision :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Discover the ProBoutik's team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppTestimonialsEnComponent_ng_template_11_Template, 9, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppTestimonialsEnComponent_ng_template_12_Template, 9, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppTestimonialsEnComponent_ng_template_13_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "div", 2)(16, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Join our passionate team :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Explore our opportunities and bring your expertise to shape the future.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Join us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "h2", 16)(28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 1. What is ProBoutik App ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " ProBoutik App is a revolutionary mobile application designed for micro-merchants and retailers. It offers a complete solution for the digitalization of transactions, cash management, payment reminders and much more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "h2", 20)(35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2. How does the digitalization of transactions work ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Digitizing transactions with ProBoutikApp is simple. The application records all your deferred payment transactions, ensuring transparent traceability and better management of your business operations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "h2", 23)(42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 3. How can I benefit from financing via ProBoutik App? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25)(45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ProBoutik App offers financing based on credits granted to your customers in the form of micro-factoring. This allows you to replenish your cash flow and continue your growth, while avoiding financial stress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15)(48, "h2", 26)(49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 4. How do payment reminders work ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28)(52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " ProBoutik App's automatic payment reminders simplify collection. You can send reminders to your customers with a payment link, providing a smooth and transparent experience for everyone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15)(55, "h2", 29)(56, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 5. Which sectors of activity benefit from ProBoutik App ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31)(59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ProBoutikApp benefits a variety of sectors, from retail to food and services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32)(62, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "do you have any other questions ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "To learn more, do not hesitate to contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11)(67, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Join us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33)(70, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Facilitate Your Management at Your Fingertips with ProboutikApp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Take the initiative now and download ProBoutik App for optimized business management.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36)(76, "form", 37)(77, "div", 38)(78, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 38)(82, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38)(86, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43)(90, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.testimonialSlides);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective],
    styles: [".testimonial-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  animation: pulse 4s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 95px;\n  left: 120px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  bottom: 120px;\n  left: 28%;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 60px;\n  left: 35%;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  left: 50%;\n  top: 140px;\n  max-width: 100px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  right: 20%;\n  top: 55px;\n  width: 55px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  right: 95px;\n  bottom: 80px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  padding: 45px 90px 45px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  width: 70px;\n  border-radius: 100px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 163.15%;\n  \n\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  \n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 165px;\n  right: 65px;\n  animation: translateX 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0;\n  left: 100px;\n  animation: translateY 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 55px;\n  right: 235px;\n  animation: translateX 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  top: 400px;\n  right: 10px;\n  animation: translateY 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  bottom: 55px;\n  right: 200px;\n  animation: translateX 5s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .testimonial-section[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]::before {\n    font-size: 30px;\n    top: 80px;\n    right: 20px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n    padding: 45px 20px 45px;\n    text-align: center;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto 10px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: auto;\n    max-width: 235px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 15%;\n    left: 15%;\n    max-width: 30px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 10%;\n    left: 27%;\n    max-width: 30px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    top: 10%;\n    left: 30%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n    left: 0;\n    top: 25%;\n    max-width: 50px;\n    right: 0;\n    margin: auto;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n    right: 20%;\n    top: 10%;\n    width: 40px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n    right: 10%;\n    bottom: 10%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n    padding: 45px 0px 0 0;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .testimonial-section[_ngcontent-%COMP%] {\n    padding-bottom: 90px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]::before {\n    font-size: 70px;\n    top: 80px;\n    right: 20px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 40px;\n    left: 28%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .rej-text[_ngcontent-%COMP%] {\n    font-size: 8vw;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 50px;\n    left: 80px;\n    max-width: 60px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 30px;\n    left: 28%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n    left: 0;\n    right: 0;\n    max-width: 60px;\n    margin: auto;\n    top: 80px;\n  }\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  flex: 1 0 0;\n}\n\n.foire[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n}\n\n.accordion[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.rej[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 130%;\n  \n\n}\n\n.rej-text[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n\n.navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 15px 32px;\n  margin-left: 30px;\n  color: var(--primary);\n  border: solid 2px var(--primary);\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  color: WHITE;\n  border: solid 1px var(--primary);\n}\n\n.navbar-btn-t[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 15px 32px;\n  margin-left: 30px;\n  background-color: var(--primary);\n  color: WHITE;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-btn-t[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  border: solid 2px var(--primary);\n  border: solid 1px var(--primary);\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--black, #000);\n  background: var(--white, #FFF);\n  display: flex;\n  height: 48px;\n  padding: 12px;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n}\n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--black, #000);\n  background: var(--white, #FFF);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  \n\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1lbi9hcHAtdGVzdGltb25pYWxzL2FwcC10ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQUVoQjtBQUFhO0VBQ0csU0FBQTtFQUNBLFdBQUE7QUFFaEI7QUFBYTtFQUNHLGFBQUE7RUFDQSxTQUFBO0FBRWhCO0FBQWE7RUFDRyxTQUFBO0VBQ0EsU0FBQTtBQUVoQjtBQUFhO0VBQ0csU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFhO0VBQ0csVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRWhCO0FBQWE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQUVoQjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUNRO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFBWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRWhCO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQURnQjtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdwQjtBQURnQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBR3BCO0FBQVk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUVoQjtBQUdRO0VBQ0ksa0JBQUE7QUFEWjtBQUdTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQURaO0FBR1M7RUFDRyxNQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBRFo7QUFHUztFQUNHLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFEWjtBQUdTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQURaO0FBR1M7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBRFo7O0FBTUE7RUFDSTtJQUNJLG9CQUFBO0VBSE47RUFJTTtJQUNJLGFBQUE7RUFGVjtFQUtVO0lBQ0ksZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBSGQ7RUFLVTtJQUNJLHVCQUFBO0lBQ0Esa0JBQUE7RUFIZDtFQUljO0lBQ0ksbUJBQUE7RUFGbEI7RUFJYztJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQUZsQjtFQVFjO0lBQ0ksZUFBQTtFQU5sQjtFQVFlO0lBQ0csUUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VBTmxCO0VBUWU7SUFDRyxXQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7RUFObEI7RUFRZTtJQUNHLFFBQUE7SUFDQSxTQUFBO0VBTmxCO0VBUWU7SUFDRyxPQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtFQU5sQjtFQVFlO0lBQ0csVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VBTmxCO0VBUWU7SUFDRyxVQUFBO0lBQ0EsV0FBQTtFQU5sQjtFQVdVO0lBQ0kscUJBQUE7RUFUZDtBQUNGO0FBZ0JBO0VBQ0k7SUFDSSxvQkFBQTtFQWROO0VBZU07SUFDSSxnQkFBQTtFQWJWO0VBZU07SUFDSSxhQUFBO0VBYlY7RUFnQlU7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFkZDtFQW1CZTtJQUNHLFlBQUE7SUFDQSxTQUFBO0VBakJsQjtBQUNGO0FBdUJBO0VBQ0k7SUFDSSxjQUFBO0VBckJOO0VBMEJlO0lBQ0csU0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VBeEJsQjtFQTBCZTtJQUNHLFlBQUE7SUFDQSxTQUFBO0VBeEJsQjtFQTBCZTtJQUNHLE9BQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VBeEJsQjtBQUNGO0FBbUNJO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpDUjtBQW1DSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQWpDUjs7QUFxQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBbENKOztBQXFDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBbENKOztBQXFDQTtFQUNJLFlBQUE7QUFsQ0o7O0FBcUNBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWxDSjs7QUFxQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQWxDSjs7QUFzQ0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFFSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXBDWjtBQXVDUTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBckNaOztBQTJDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBRUkscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF6Q1o7QUE0Q1E7RUFDSSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUExQ1o7O0FBK0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE1Q0o7O0FBK0NBO0VBQ0ksVUFBQTtBQTVDSjtBQTZDSTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBM0NSO0FBNkNJO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0FBM0NSOztBQStDQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUE1Q0o7O0FBK0NBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE1Q0oiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdGltb25pYWwtc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAudGVzdGltb25pYWwtaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuY2xpZW50LWltZyB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOiA5NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjglO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAzNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogMTQwcHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgICAgICByaWdodDogMjAlO1xuICAgICAgICAgICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgICAgICAgICByaWdodDogOTVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsLXNsaWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogNDVweCA5MHB4IDQ1cHggMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWVudC1pbmZvIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyZXksICM2RDdEOEIpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC8qIEhlYWRpbmcgMyAqL1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjMuMTUlO1xuICAgICAgICAgICAgICAgICAgICAvKiAyOS4zNjdweCAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8qIFRleHQvUmVndWxhci9Ob3JtYWwgKi9cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgICAgICAgLyogMjRweCAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50ZXN0aW1vbmlhbC1zaGFwZSB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgdG9wOiAxNjVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIzNXB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICB0b3A6IDQwMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVkgNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgICA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgIGJvdHRvbTogNTVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWCA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAudGVzdGltb25pYWwtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAudGVzdGltb25pYWwtc2hhcGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudGVzdGltb25pYWwtc2xpZGVyIHtcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogODBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbC1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDIwcHggNDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLWltZyB7XG4gICAgICAgICAgICAuY2xpZW50LWltZyB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjclO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwJVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGVzdGltb25pYWwtc2xpZGVyIHtcbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbC1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDBweCAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnRlc3RpbW9uaWFsLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zbGlkZXIge1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1pbWcge1xuICAgICAgICAgICAgLmNsaWVudC1pbWcge1xuICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyOCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLnJlai10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XG4gICAgfVxuICAgIC50ZXN0aW1vbmlhbC1zZWN0aW9uIHtcbiAgICAgICAgLnRlc3RpbW9uaWFsLWltZyB7XG4gICAgICAgICAgICAuY2xpZW50LWltZyB7XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI4JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge31cblxuLnNlY3Rpb24tdGl0bGUge1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmV5LCAjNkQ3RDhCKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvKiBQYXJhZ3JhcGggKi9cbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNjMuMTUlO1xuICAgICAgICAvKiAyOS4zNjdweCAqL1xuICAgIH1cbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICBmbGV4OiAxIDAgMDtcbn1cblxuLmZvaXJlIHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBIZWFkaW5nIDEgKi9cbiAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmFjY29yZGlvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ucmVqIHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBIZWFkaW5nL0g0ICovXG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIC8qIDQxLjZweCAqL1xufVxuXG4ucmVqLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIFRleHQvTWVkaXVtL05vcm1hbCAqL1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAvKiAyN3B4ICovXG59XG5cbi5uYXZiYXItYnRuIHtcbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250OiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogV0hJVEU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5hdmJhci1idG4tdCB7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiBXSElURTtcbiAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgZmFtaWx5OiB2YXIoLS1oZWFkaW5nRm9udEZhbWlseSk7XG4gICAgICAgICAgICB3ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2ssICMwMDApO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSwgI0ZGRik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2ssICMwMDApO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSwgI0ZGRik7XG4gICAgfVxufVxuXG5sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIC8qIDI0cHggKi9cbn1cblxuLmFjY29yZGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 2508:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing-en/app-why-choose/app-why-choose.component-en.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWhyChooseEnComponent: () => (/* binding */ AppWhyChooseEnComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 5144);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AppWhyChooseEnComponent {
  constructor() {}
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppWhyChooseEnComponent_Factory(t) {
    return new (t || AppWhyChooseEnComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppWhyChooseEnComponent,
    selectors: [["app-app-why-choose-en"]],
    decls: 46,
    vars: 0,
    consts: [["id", "about", 1, "why-choose", "pt-100"], [1, "container"], [1, "row", "align-items-center", "mb-5", "why"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "col"], ["data-wow-duration", "2s", 1, "why-choose-text", "wow", "fadeInUp"], [1, "media", "d-flex"], [1, "media-body"], [1, "mt-0"], ["data-aos", "fade-left", "data-aos-duration", "3000", 1, "col-lg-4"], ["data-wow-duration", "1s", 1, "why-choose-img", "wow", "fadeInUp"], ["src", "assets/img/app-landing/Connexion01.png", "alt", "why choose image"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "row", "align-items-center", "why", "reverse"], [1, "col-lg-4"], ["src", "assets/img/app-landing/Home01.png", "alt", "why choose image"], [1, "col"], [1, "media-body", "offset-1"], ["src", "assets/img/app-landing/Envoyer01.png", "alt", "why choose image"], [1, "row", "align-items-center", "why", "reverse"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "col-lg-4"], ["data-aos", "fade-left", "data-aos-duration", "3000", 1, "col"]],
    template: function AppWhyChooseEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Simple registration, without constraints");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " A first step without complications. Join ProBoutikApp with your phone number, avoiding complex formalities. Registration becomes easy, paving the way for a seamless experience right from the start. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 4)(19, "div", 5)(20, "div", 15)(21, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Real-time Tracking :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Always in the know. Access real-time monitoring, viewing the status of each transaction instantly. Be in the know, stay in control, and build strong, trusting relationships ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Automatic Payment Reminders :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Forget collection worries. Send automated payment reminders, providing a seamless experience for you and your customers. Simplify the process, boost your reputation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8)(33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "div", 18)(37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 4)(41, "div", 5)(42, "div", 6)(43, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Drive Your Growth with Integrated Financing :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Don't let cash hold you back. Benefit from ProBoutik App's strategic financing to replenish your financial resources. Develop yourself without hindrance, realize your ambitions with confidence. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: [".why-choose[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n}\n.why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 60px;\n  text-align: start;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);\n  animation: translateY 10s infinite linear;\n  border-radius: 45px;\n  width: 90%;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why[_ngcontent-%COMP%] {\n  margin-bottom: 190px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  width: 750px;\n  color: var(--black, #25313C);\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  \n\n  font-size: 48px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: #0f2137;\n  padding: 0 30px 0;\n  margin-right: 25px;\n  border-radius: 50px;\n  display: inline-block;\n  border: 1px solid #0f2137;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 15px;\n  position: relative;\n  left: 0;\n  font-size: 30px;\n  line-height: 1;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 40px;\n  margin: 0 0 15px;\n  font-size: 14px;\n  line-height: 0;\n  top: -10px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  top: -13px;\n  font-size: 17px;\n  font-weight: 600;\n  position: relative;\n  padding-left: 40px;\n  transition: var(--transition);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--whiteColor);\n  border: 1px solid transparent;\n  background: linear-gradient(0deg, rgb(0, 183, 235) 0%, rgb(8, 152, 231) 100%);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgb(0, 183, 235) 0%, rgb(8, 152, 231) 100%);\n  border: 1px solid transparent;\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .reverse[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n  .why[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .why-choose[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .why-choose[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n    left: 10px;\n    top: 15px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n    height: 45px;\n    width: 45px;\n    left: -10px;\n    top: -10px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    font-size: 15px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    text-align: center;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 10px 0px;\n    margin-right: 5px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 20px;\n    line-height: 1;\n    left: -40px;\n    top: 12px;\n    left: 0;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding-left: 30px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding-left: 30px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n    max-width: 250px;\n    margin: auto;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .why-choose[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]::after {\n    z-index: -1;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    top: 20px;\n    left: 35px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 300px;\n    margin: 0 auto 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy1lbi9hcHAtd2h5LWNob29zZS9hcHAtd2h5LWNob29zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBRFE7RUFDSSw0Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBR1o7QUFDUTtFQUNJLG9CQUFBO0FBQ1o7QUFFWTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUFoQjtBQUNnQjtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDcEI7QUFHUTtFQUNJLGdCQUFBO0FBRFo7QUFFWTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFoQjtBQUNnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNwQjtBQUNnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNwQjtBQUNnQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZFQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSx3QkFBQTtBQUNwQjtBQUVZO0VBQ0ksNkVBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBQWhCO0FBRVk7RUFDSSx3QkFBQTtBQUFoQjtBQUVZO0VBQ0ksd0JBQUE7QUFBaEI7O0FBTUE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQUhOO0VBS0U7SUFDSSxrQkFBQTtFQUhOO0VBTU07SUFDSSxhQUFBO0VBSlY7RUFNTTtJQUNJLG1CQUFBO0VBSlY7RUFLVTtJQUNJLGVBQUE7RUFIZDtFQU1NO0lBQ0ksYUFBQTtFQUpWO0VBTU07SUFDSSxpQkFBQTtFQUpWO0VBS1U7SUFDSSxtQkFBQTtFQUhkO0VBSWM7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFGbEI7RUFHa0I7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBRHRCO0VBSWM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUFGbEI7RUFHa0I7SUFDSSxlQUFBO0VBRHRCO0VBS1U7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBSGQ7RUFJYztJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7RUFGbEI7RUFHa0I7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0VBRHRCO0VBR2tCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBRHRCO0VBR2tCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBRHRCO0VBTU07SUFDSSxnQkFBQTtJQUNBLFlBQUE7RUFKVjtFQUtVO0lBQ0ksYUFBQTtFQUhkO0FBQ0Y7QUFVQTtFQUVRO0lBQ0ksYUFBQTtFQVRWO0VBV007SUFDSSxXQUFBO0VBVFY7RUFXTTtJQUNJLG1CQUFBO0VBVFY7RUFhYztJQUNJLFNBQUE7SUFDQSxVQUFBO0VBWGxCO0VBYWM7SUFDSSxnQkFBQTtFQVhsQjtFQWVNO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBYlY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53aHktY2hvb3NlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICAgIC53aHktY2hvb3NlLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDQ4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2h5LWNob29zZS10ZXh0IHtcbiAgICAgICAgLndoeSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgICAgICAgICAgICAgIC8qIFBhcmFncmFwaCAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgICAgICAgICAvKiAyOS4zNjdweCAqL1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgICAgICAgICAgICAgLyogSGVhZGluZyAxICovXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLndoeS1jaG9vc2UtYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBmMjEzNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmMjEzNztcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMTgzLCAyMzUsIDEpIDAlLCByZ2JhKDgsIDE1MiwgMjMxLCAxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBoNSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDE4MywgMjM1LCAxKSAwJSwgcmdiYSg4LCAxNTIsIDIzMSwgMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSBoNSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucmV2ZXJzZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB9XG4gICAgLndoeSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLndoeS1jaG9vc2Uge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLndoeS1jaG9vc2UtdGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53aHktY2hvb3NlLWJ0biB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC53aHktY2hvb3NlLWltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC53aHktY2hvb3NlIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNTBweDtcbiAgICAgICAgfVxuICAgICAgICAud2h5LWNob29zZS10ZXh0IHtcbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAud2h5LWNob29zZS1pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge31cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 1869:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-banner/app-banner.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBannerComponent: () => (/* binding */ AppBannerComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/common/modal/modal.component */ 677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function AppBannerComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppBannerComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppBannerComponent {
  constructor(modalService, platform) {
    this.modalService = modalService;
    this.platform = platform;
    this.deviceInfo = '';
  }
  ngOnInit() {}
  openModal() {
    const modalREf = this.modalService.open(src_app_components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      centered: true,
      size: 'xl'
    });
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      this.deviceInfo = "Vous utilisez un appareil Android.";
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log(this.deviceInfo);
    console.log('====================================');
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function AppBannerComponent_Factory(t) {
    return new (t || AppBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppBannerComponent,
    selectors: [["app-app-banner"]],
    decls: 43,
    vars: 4,
    consts: [["id", "home", 1, "main-banner", "banner-bg-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container", "container1"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-sm-4"], [1, "banner-text"], [1, "animate__animated", "animate__backInLeft"], [1, "banner-btn", "animate__animated", "animate__backInLeft"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], [1, "col-lg-4", "col-sm-4"], ["data-aos", "zoom-out", "data-aos-delay", "300", 1, "banner-img", "text-end", "animated", "animate__heartBeat"], ["src", "assets/img/app-landing/welcome.png", "alt", "iphone"], [1, "container", "container2"], [1, "col-lg-8"], [1, "banner-text2"], [1, "banner-btn2"], [1, "col-lg-4"], [1, "banner-img2", "text-end"], [1, "container"], [1, "paragraph"], [1, "par"], [1, "video"], [1, "play"], ["data-bs-target", "#exampleModal", "xmlns", "http://www.w3.org/2000/svg", "width", "118", "height", "125", "viewBox", "0 0 118 125", "fill", "none", 3, "click"], ["d", "M109.051 48.4337C120.217 54.4869 120.217 70.5131 109.051 76.5663L23.6249 122.873C12.9639 128.652 1.70446e-06 120.933 1.55985e-06 108.807L4.55452e-07 16.1934C3.10845e-07 4.06696 12.964 -3.6518 23.6249 2.12715L109.051 48.4337Z", "fill", "white"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"]],
    template: function AppBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "D\u00E9bloquez Votre Succ\u00E8s Commercial avec");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ProBoutik App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "D\u00E9couvrez comment ProBoutik App modernise vos factures, renforce votre tr\u00E9sorerie \u00E0 travers du financement et cr\u00E9e des relations durables avec vos clients pour une croissance \u00E0 long terme. Faites passer votre entreprise au niveau sup\u00E9rieur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppBannerComponent_a_14_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppBannerComponent_a_15_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 4)(21, "div", 15)(22, "div", 16)(23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "D\u00E9bloquez Votre Succ\u00E8s Commercial avec");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " ProBoutik App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "D\u00E9couvrez comment ProBoutik App modernise vos factures, renforce votre tr\u00E9sorerie \u00E0 travers du financement et cr\u00E9e des relations durables avec vos clients pour une croissance \u00E0 long terme. Faites passer votre entreprise au niveau sup\u00E9rieur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppBannerComponent_a_30_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AppBannerComponent_a_31_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " ProBoutik App introduit une nouvelle \u00E8re de simplicit\u00E9 et d'efficacit\u00E9. Digitalisez vos transactions, profitez du financement pour reconstituer votre tr\u00E9sorerie et \u00E9viter les tensions financi\u00E8res. Explorez un avenir o\u00F9 la gestion commerciale devient une force motrice de croissance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23)(40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppBannerComponent_Template__svg_svg_click_41_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIOS());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Work+Sans:wght@100;300&display=swap)[_ngcontent-%COMP%];.main-banner[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  position: relative;\n  height: 900px;\n  background-position: center center;\n  background-size: cover;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: flex;\n  width: 762.964px;\n  flex-direction: column;\n  gap: 29.726px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  width: 916px;\n  color: var(--black, #25313C);\n  font-size: 75px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  margin-bottom: 30px;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 10px 30px;\n  background-color: var(--primary);\n  color: white;\n  line-height: 24px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 16px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%] {\n  font-family: var(--headingFontFamily);\n  color: var(--whiteColor);\n  background: transparent;\n  display: inline-block;\n  padding: 0;\n  border: 0;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 35px;\n  left: -5px;\n  top: 7px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 404.218px;\n  height: 538.701px;\n  flex-shrink: 0;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n  content: \"\";\n  z-index: 1;\n  width: 500px;\n  right: -50px;\n  bottom: -10px;\n  height: 190px;\n  position: absolute;\n  border-radius: 30px;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFF 100%);\n  animation: translateX 6s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 150px;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 140px;\n  left: -100px;\n  width: 220px;\n  animation-delay: 1s;\n  animation: translateY 4s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0px;\n  left: -25px;\n  width: 100px;\n  animation: translateY 4s infinite linear;\n}\n.main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 100px;\n  right: 50px;\n  animation: translateX 6s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .paragraph[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .paragraph[_ngcontent-%COMP%]   .par[_ngcontent-%COMP%] {\n    text-align: center;\n    color: var(--black, #000);\n    font-size: 20px;\n    font-style: normal;\n    line-height: 150%;\n    width: 100%;\n    margin-bottom: 120px;\n    margin-top: 90px;\n    \n\n  }\n  .container1[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .container2[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 120px 0 45px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 20px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-text2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 80px;\n    padding: 10px 30px;\n    background-color: var(--primary);\n    color: white;\n    line-height: 24px;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 16px;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-btn2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: white;\n    color: var(--primary);\n    border: solid 1px var(--primary);\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .container2[_ngcontent-%COMP%]   .banner-img2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 650px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    display: flex;\n    width: 762.964px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 29.726px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: bold;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 2vw;\n    margin-bottom: 20px;\n    text-align: center;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n    text-decoration: none;\n    margin-bottom: 25px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    z-index: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]::after {\n    content: \"\";\n    z-index: 1;\n    width: 800px;\n    right: -50px;\n    bottom: -10px;\n    height: 190px;\n    position: absolute;\n    border-radius: 30px;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFF 100%);\n    animation: translateX 6s infinite linear;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .main-banner[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #069ee8;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 120px 0 40px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 20px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0 auto 5px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n    position: relative;\n    max-width: 200px;\n    z-index: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]::after {\n    content: \"\";\n    z-index: 1;\n    width: 800px;\n    right: -50px;\n    bottom: -10px;\n    height: 190px;\n    position: absolute;\n    border-radius: 30px;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFF 100%);\n    animation: translateX 6s infinite linear;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .main-banner[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1550px) {\n  .main-banner[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 0;\n    left: -100px;\n    width: 245px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    left: 100px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    right: 150px;\n    top: 100px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    bottom: 100px;\n    right: 0;\n    max-width: 900px;\n    z-index: 1;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 100px;\n    right: 50px;\n  }\n  .main-banner[_ngcontent-%COMP%]   .banner-image-two[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    bottom: 55%;\n  }\n}\n.paragraph[_ngcontent-%COMP%] {\n  position: relative;\n}\n.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  width: 100%;\n  margin-bottom: 120px;\n  \n\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 651.06px;\n  flex-shrink: 0;\n  border-radius: 30px;\n  background: linear-gradient(0deg, rgba(42, 99, 226, 0.35) 0%, rgba(42, 99, 226, 0.35) 100%), url('image2.png'), lightgray 0px -22.506px/100% 103.457% no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 150px;\n}\n\n.container2[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtYmFubmVyL2FwcC1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVJLGtDQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBRFI7QUFFUTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRVE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFaO0FBR1k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FBRnBCO0FBS2dCO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSHBCO0FBTVk7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSmhCO0FBS2dCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFIcEI7QUFLZ0I7RUFDSSxnQkFBQTtBQUhwQjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5SO0FBUVE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUVBQUE7RUFDQSx3Q0FBQTtBQU5aO0FBVVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBUlo7QUFVUztFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFSWjtBQVVTO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFSWjtBQVVTO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQVJaOztBQWFBO0VBQ0k7SUFDSSxrQkFBQTtFQVZOO0VBV007SUFDSSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFUVjtFQVlFO0lBQ0ksd0JBQUE7RUFWTjtFQVlFO0lBQ0kseUJBQUE7RUFWTjtFQVdNO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQVRWO0VBVVU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFSZDtFQVVVO0lBQ0ksbUJBQUE7RUFSZDtFQVVVO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFSZDtFQVlVO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUVJLGdCQUFBO0lBQ0EsZUFBQTtFQVhsQjtFQWNjO0lBQ0ksdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdDQUFBO0VBWmxCO0VBZ0JNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQWRWO0VBZVU7SUFDSSxhQUFBO0VBYmQ7RUFlVTtJQUNJLGFBQUE7RUFiZDtFQWVVO0lBQ0ksV0FBQTtFQWJkO0VBaUJFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFmTjtFQWdCTTtJQUNJLGFBQUE7RUFkVjtFQWdCTTtJQUNJLGFBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFkVjtFQWVVO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFiZDtFQWVVO0lBQ0ksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQWJkO0VBZ0JjO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0VBZGxCO0VBa0JNO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFoQlY7RUFpQlU7SUFDSSxhQUFBO0VBZmQ7RUFpQlU7SUFDSSxhQUFBO0VBZmQ7RUFpQlU7SUFDSSxXQUFBO0VBZmQ7QUFDRjtBQW9CQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQWxCTjtFQW1CTTtJQUNJLFdBQUE7RUFqQlY7RUFrQlU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUVBQUE7SUFDQSx3Q0FBQTtFQWhCZDtBQUNGO0FBcUJBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUFuQk47RUFvQk07SUFDSSxhQUFBO0VBbEJWO0VBb0JNO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQWxCVjtFQW1CVTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQWpCZDtFQW1CVTtJQUNJLGtCQUFBO0VBakJkO0VBbUJVO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFqQmQ7RUFvQk07SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBbEJWO0VBbUJVO0lBQ0ksV0FBQTtFQWpCZDtFQW1CVTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5RUFBQTtJQUNBLHdDQUFBO0VBakJkO0FBQ0Y7QUFzQkE7RUFHWTtJQUNJLGVBQUE7RUF0QmQ7RUF5Qk07SUFDSSxVQUFBO0VBdkJWO0VBd0JVO0lBQ0ksZUFBQTtFQXRCZDtFQXlCTTtJQUNJLGFBQUE7RUF2QlY7QUFDRjtBQTZCQTtFQUNJO0lBQ0ksY0FBQTtFQTNCTjtFQTZCVztJQUNHLE1BQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQTNCZDtFQTZCVztJQUNHLFdBQUE7RUEzQmQ7RUE2Qlc7SUFDRyxZQUFBO0lBQ0EsVUFBQTtFQTNCZDtFQStCVztJQUNHLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBN0JkO0VBK0JXO0lBQ0csYUFBQTtJQUNBLFdBQUE7RUE3QmQ7RUErQlc7SUFDRyxXQUFBO0VBN0JkO0FBQ0Y7QUFrQ0E7RUFDSSxrQkFBQTtBQWhDSjtBQWlDSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQS9CUjs7QUFtQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFoQ0o7O0FBbUNBO0VBQ0ksYUFBQTtBQWhDSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1Xb3JrK1NhbnM6d2dodEAxMDA7MzAwJmRpc3BsYXk9c3dhcCcpO1xuLm1haW4tYmFubmVyIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgICBwb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIDtcbiAgICAuYmFubmVyLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogNzYyLjk2NHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDI5LjcyNnB4O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiA5MTZweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgICAgICBmb250LXNpemU6IDc1cHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItYnRuIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lci12aWRlbyB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFubmVyLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDQwNC4yMThweDtcbiAgICAgICAgaGVpZ2h0OiA1MzguNzAxcHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2FwcC1sYW5kaW5nL3dlbGNvbWUucG5nXCIpO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICByaWdodDogLTUwcHg7XG4gICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDAlLCAjRkZGIDEwMCUpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDZzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFubmVyLXNoYXBlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICB0b3A6IDE0MHB4O1xuICAgICAgICAgICAgbGVmdDogLTEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDZzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5wYXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgICAvKiA2MHB4ICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lcjEge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgLmJhbm5lci10ZXh0MiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDQ1cHg7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lci1idG4yIGEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1idG4yIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItaW1nMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1haW4tYmFubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNjUwcHg7XG4gICAgICAgIC5iYW5uZXItc2hhcGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiA3NjIuOTY0cHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAyOS43MjZweDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lci1idG4ge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1pbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDAlLCAjRkZGIDEwMCUpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWCA2cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5tYWluLWJhbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzA2OWVlODtcbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDQwcHg7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyLWJ0biBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDAlLCAjRkZGIDEwMCUpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWCA2cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAubWFpbi1iYW5uZXIge1xuICAgICAgICAuYmFubmVyLWltZyB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXRleHQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHtcbiAgICAubWFpbi1iYW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgLmJhbm5lci1zaGFwZSB7XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1pbWFnZS10d28ge1xuICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wYXJhZ3JhcGgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gICAgICAgIC8qIDYwcHggKi9cbiAgICB9XG59XG5cbi52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2NTEuMDZweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDQyLCA5OSwgMjI2LCAwLjM1KSAwJSwgcmdiYSg0MiwgOTksIDIyNiwgMC4zNSkgMTAwJSksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwLWxhbmRpbmcvaW1hZ2UyLnBuZ1wiKSwgbGlnaHRncmF5IDBweCAtMjIuNTA2cHggLyAxMDAlIDEwMy40NTclIG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5jb250YWluZXIyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 837:
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-features/app-features.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFeaturesComponent: () => (/* binding */ AppFeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function AppFeaturesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"Gr\u00E2ce \u00E0 ProBoutik App, je ma\u00EEtrise d\u00E9sormais les montants dus par mes clients. Une tranquillit\u00E9 d'esprit pr\u00E9cieuse r\u00E8gne dans ma gestion. Chaque transaction est transparente, offrant une efficacit\u00E9 sans \u00E9gale.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Moussa Ndiaye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vendeur de tissus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppFeaturesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"Depuis que je profite de ProBoutik App, les inqui\u00E9tudes li\u00E9es aux paiements de mes clientes ont disparu. Ma relation avec elles s'est transform\u00E9e, tout est clair et fluide. Je peux me concentrer sur l'essentiel.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Awa Gueye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vendeuse de produit cosm\u00E9tics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppFeaturesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"ProBoutik App m'a apport\u00E9 une tranquillit\u00E9 d'esprit inestimable. J'accorde maintenant ais\u00E9ment du cr\u00E9dit, sachant que chaque transaction est suivie de pr\u00E8s. Mes ventes \u00E0 cr\u00E9dit ont augment\u00E9, stimulant ainsi mon chiffre d'affaires.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Momodou Diallo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Boutiquier \u00E0 M\u00E9dina");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AppFeaturesComponent {
  constructor() {
    this.screenshotSlider = {
      loop: true,
      margin: 30,
      dots: true,
      center: true,
      smartSpeed: 2000,
      navSpeed: 700,
      dotsSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppFeaturesComponent_Factory(t) {
    return new (t || AppFeaturesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppFeaturesComponent,
    selectors: [["app-app-features"]],
    decls: 11,
    vars: 1,
    consts: [["id", "services", 1, "feature-section", "pt-100", "pb-70", "mb-5"], [1, "container"], ["data-wow-duration", "1s", 1, "section-title"], [3, "options"], ["carouselSlide", ""], ["data-wow-duration", "1s", 1, "card-temoin"], [1, "temoin"], [1, "div"], [1, "name"], [1, "prof"]],
    template: function AppFeaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Leur Parole, Notre Fiert\u00E9 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T\u00E9moignages des utilisateurs de ProboutikApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppFeaturesComponent_ng_template_8_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppFeaturesComponent_ng_template_9_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppFeaturesComponent_ng_template_10_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotSlider);
      }
    },
    dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
    styles: [".feature-section[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  padding: 65px 25px 35px;\n  border-radius: 20px 0 20px 0;\n  transition: var(--transition);\n  background: var(--whiteColor);\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: #0899e7;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor) !important;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]::after {\n  background: #44b8ef;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  z-index: 1;\n  line-height: 1;\n  font-size: 30px;\n  color: #9356f5;\n  position: relative;\n  margin-bottom: 45px;\n  display: inline-block;\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  top: -20px;\n  content: \"\";\n  left: -20px;\n  z-index: -1;\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  background: #e1d3f8;\n  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i.flaticon-credit-card[_ngcontent-%COMP%] {\n  color: #ca4774;\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #0899e7;\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.feature-section[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  background: #44b8ef;\n}\n\n@media only screen and (max-width: 767px) {\n  .feature-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    padding: 60px 20px 30px;\n  }\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n\n.card-temoin[_ngcontent-%COMP%] {\n  display: flex;\n  height: 347px;\n  padding: 32px 32px 33px 32px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 34px;\n  flex: 1 0 0;\n  border-radius: 20px;\n  border: 2px solid var(--black, #25313C);\n}\n.card-temoin[_ngcontent-%COMP%]   .temoin[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 163.15%;\n  \n\n}\n.card-temoin[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #25313C;\n  font-family: Work Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150.6%;\n  \n\n}\n.card-temoin[_ngcontent-%COMP%]   .prof[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  \n\n  font-family: Work Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150.6%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtZmVhdHVyZXMvYXBwLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0RBQUE7QUFFUjtBQURRO0VBQ0ksbUJBQUE7QUFHWjtBQURRO0VBR0ksbUNBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUNRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFBWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrR0FBQTtVQUFBLDBGQUFBO0FBRWhCO0FBQVk7RUFDSSxjQUFBO0FBRWhCO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFDUTtFQUNJLDZCQUFBO0FBQ1o7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDUTs7O0VBR0ksd0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjs7QUFJQTtFQUVRO0lBQ0ksdUJBQUE7RUFGVjtBQUNGO0FBT0k7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUxSOztBQW1CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFoQko7QUFpQkk7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFmUjtBQWlCSTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZlI7QUFpQkk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZlIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS1zZWN0aW9uIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLmZlYXR1cmUtY2FyZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgcGFkZGluZzogNjVweCAyNXB4IDM1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMCAyMHB4IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDVweCAzMHB4IHJnYmEoNzIsIDczLCAxMjEsIC4xNSk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4OTllNztcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIGksXG4gICAgICAgICY6aG92ZXIgaDMsXG4gICAgICAgICY6aG92ZXIgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIGk6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NGI4ZWY7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzkzNTZmNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxZDNmODtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA3MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDcwJSwgNzAlIDEwMCUsIDMwJSAxMDAlLCAwJSA3MCUsIDAlIDMwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmZsYXRpY29uLWNyZWRpdC1jYXJkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NhNDc3NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwODk5ZTc7XG4gICAgICAgIGksXG4gICAgICAgIGgzLFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDRiOGVmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmZlYXR1cmUtc2VjdGlvbiB7XG4gICAgICAgIC5mZWF0dXJlLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogUGFyYWdyYXBoICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgLyogMjkuMzY3cHggKi9cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5jYXJkLXRlbW9pbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDM0N3B4O1xuICAgIHBhZGRpbmc6IDMycHggMzJweCAzM3B4IDMycHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDM0cHg7XG4gICAgZmxleDogMSAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgLnRlbW9pbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2My4xNSU7XG4gICAgICAgIC8qIDI5LjM2N3B4ICovXG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6ICMyNTMxM0M7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwLjYlO1xuICAgICAgICAvKiAyNC4wOTZweCAqL1xuICAgIH1cbiAgICAucHJvZiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIC8qIGNhcHRpb24gKi9cbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAuNiU7XG4gICAgICAgIC8qIDIxLjA4NHB4ICovXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 7446:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-how-to-use/app-how-to-use.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppHowToUseComponent: () => (/* binding */ AppHowToUseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function AppHowToUseComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppHowToUseComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppHowToUseComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AppHowToUseComponent {
  constructor() {
    this.howToUseSlider = {
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      center: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        992: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppHowToUseComponent_Factory(t) {
    return new (t || AppHowToUseComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppHowToUseComponent,
    selectors: [["app-app-how-to-use"]],
    decls: 58,
    vars: 1,
    consts: [[1, "how-use", "pt-100"], [1, "container"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-wow-duration", "1s", 1, "col-lg-6", "col-md-6", "col-sm-6", "wow", "fadeInUp"], [1, "how-use-card", "how-card-one"], [1, "flaticon-coding"], [1, "how-use-card", "how-card-two"], [1, "flaticon-settings"], [1, "how-use-card", "how-card-three"], [1, "flaticon-map"], [1, "how-use-card", "how-card-four"], [1, "flaticon-ticket"], ["data-wow-duration", "1s", 1, "col-lg-4", "offset-lg-2", "wow", "fadeInUp"], [1, "how-use-slider"], [3, "options"], ["carouselSlide", ""], [1, "how-use-img"], ["src", "assets/img/app-landing/1.png", "alt", "iphone"]],
    template: function AppHowToUseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How To Use?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4 Simple Steps to Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Here is a tutorial on how you can operate this app easily and effortlessly reserve your tickets for your awaited trip. Follow the given instruction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "div", 3)(12, "div", 5)(13, "div", 6)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Installation First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Easily install the app in your device from the app store or download it online.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5)(23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Give your identification and information in the app to help us recognize you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5)(26, "div", 8)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Set Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5)(33, "div", 10)(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Set Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5)(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Type your destination and also put the date of when you want to leave for the destination.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Finally, pay your bill and confirm your booking for the ticket and the ticket will be all yours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5)(46, "div", 12)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Book Your Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14)(53, "div", 15)(54, "owl-carousel-o", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AppHowToUseComponent_ng_template_55_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AppHowToUseComponent_ng_template_56_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppHowToUseComponent_ng_template_57_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.howToUseSlider);
      }
    },
    dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
    styles: [".how-use[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.how-use[_ngcontent-%COMP%]::before {\n  left: 0;\n  top: 250px;\n  opacity: 0.5;\n  content: \"\";\n  width: 190px;\n  height: 250px;\n  position: absolute;\n  background-position: center center;\n  background-size: cover;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-card[_ngcontent-%COMP%] {\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n  background: var(--whiteColor);\n  margin-bottom: 30px;\n  border-radius: 20px;\n  text-align: center;\n  position: relative;\n  padding: 45px 30px;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 25px;\n  font-size: 30px;\n  font-weight: 700;\n  position: absolute;\n  display: inline-block;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  display: inline-block;\n  margin-bottom: 15px;\n  line-height: 1;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-one[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f6c2c2;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-one[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, rgb(202, 71, 117) 0%, rgb(229, 79, 80) 100%);\n  background-clip: text;\n  -moz-background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-two[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f8e0b3;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-two[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, rgb(231, 160, 25) 0%, rgb(253, 194, 81) 100%);\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -webkit-background-clip: text;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-three[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #9959fe;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-three[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, rgb(138, 80, 229) 0%, rgb(153, 89, 255) 100%);\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -webkit-background-clip: text;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-four[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8ddf7;\n}\n.how-use[_ngcontent-%COMP%]   .how-card-four[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, rgb(1, 180, 237) 0%, rgb(8, 153, 231) 100%);\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -webkit-background-clip: text;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]::before {\n  top: -50px;\n  left: -55px;\n  z-index: -1;\n  content: \"\";\n  width: 195px;\n  height: 195px;\n  position: absolute;\n  border-radius: 50px;\n  background: #bfe8ff;\n  animation: translateX 10s infinite linear;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]::after {\n  content: \"\";\n  z-index: -1;\n  width: 285px;\n  right: -50px;\n  height: 224px;\n  bottom: 105px;\n  position: absolute;\n  animation: translateY 10s infinite linear;\n  background-position: center center;\n  background-size: cover;\n}\n.how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 45px;\n  width: 100%;\n}\n\n@media only screen and (max-width: 767px) {\n  .how-use[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .how-use[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .how-use[_ngcontent-%COMP%]   .how-use-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .how-use[_ngcontent-%COMP%]   .how-use-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .how-use[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 0 10px;\n  }\n  .how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]::after, .how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .how-use[_ngcontent-%COMP%]   .how-use-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: unset;\n    margin: auto;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .how-use[_ngcontent-%COMP%]   .how-use-slider[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtaG93LXRvLXVzZS9hcHAtaG93LXRvLXVzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFSSxrQ0FBQTtFQUNBLHNCQUFBO0FBQ1o7QUFHSTtFQUNJLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFaO0FBRVE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBWjtBQUVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBSVE7RUFDSSxnRkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBRlo7QUFNUTtFQUNJLGNBQUE7QUFKWjtBQU1RO0VBQ0ksaUZBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUpaO0FBUVE7RUFDSSxjQUFBO0FBTlo7QUFRUTtFQUNJLGlGQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFOWjtBQVVRO0VBQ0ksY0FBQTtBQVJaO0FBVVE7RUFDSSwrRUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBUlo7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQVRSO0FBVVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQVJaO0FBVVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBRUksa0NBQUE7RUFDQSxzQkFBQTtBQVRoQjtBQWFRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBWFo7O0FBZ0JBO0VBRVE7SUFDSSxhQUFBO0VBZFY7RUFpQlU7SUFDSSxlQUFBO0VBZmQ7RUFtQlU7SUFDSSxlQUFBO0VBakJkO0VBbUJVO0lBQ0ksZUFBQTtFQWpCZDtFQW9CTTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBbEJWO0VBb0JNOztJQUVJLGFBQUE7RUFsQlY7RUFvQk07SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFsQlY7QUFDRjtBQXdCQTtFQUdZO0lBQ0ksYUFBQTtFQXhCZDtBQUNGO0FBNkJBO0VBR1k7SUFDSSxhQUFBO0VBN0JkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG93LXVzZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBzaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIC5ob3ctdXNlLWNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiA3cHggNXB4IDMwcHggcmdiYSg3MiwgNzMsIDEyMSwgLjE1KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA0NXB4IDMwcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ob3ctY2FyZC1vbmUge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjZjMmMyO1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyMDIsIDcxLCAxMTcsIDEpIDAlLCByZ2JhKDIyOSwgNzksIDgwLCAxKSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhvdy1jYXJkLXR3byB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmOGUwYjM7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDIzMSwgMTYwLCAyNSwgMSkgMCUsIHJnYmEoMjUzLCAxOTQsIDgxLCAxKSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhvdy1jYXJkLXRocmVlIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzk5NTlmZTtcbiAgICAgICAgfVxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMTM4LCA4MCwgMjI5LCAxKSAwJSwgcmdiYSgxNTMsIDg5LCAyNTUsIDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaG93LWNhcmQtZm91ciB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNhOGRkZjc7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDEsIDE4MCwgMjM3LCAxKSAwJSwgcmdiYSg4LCAxNTMsIDIzMSwgMSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ob3ctdXNlLXNsaWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRvcDogLTUwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtNTVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMTk1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5NXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZmU4ZmY7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggMTBzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgd2lkdGg6IDI4NXB4O1xuICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMjRweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVkgMTBzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBzaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmhvdy11c2Uge1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhvdy11c2UtY2FyZCB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ob3ctdXNlLXNsaWRlcjo6YWZ0ZXIsXG4gICAgICAgIC5ob3ctdXNlLXNsaWRlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmhvdy11c2UtaW1nIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmhvdy11c2Uge1xuICAgICAgICAuaG93LXVzZS1zbGlkZXIge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuaG93LXVzZSB7XG4gICAgICAgIC5ob3ctdXNlLXNsaWRlciB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU1MHB4KSB7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9560:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-landing.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLandingComponent: () => (/* binding */ AppLandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar/navbar.component */ 7902);
/* harmony import */ var _app_banner_app_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-banner/app-banner.component */ 1869);
/* harmony import */ var _app_why_choose_app_why_choose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-why-choose/app-why-choose.component */ 4473);
/* harmony import */ var _app_features_app_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-features/app-features.component */ 837);
/* harmony import */ var _app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-pricing/app-pricing.component */ 3386);
/* harmony import */ var _app_testimonials_app_testimonials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-testimonials/app-testimonials.component */ 1133);







class AppLandingComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AppLandingComponent_Factory(t) {
    return new (t || AppLandingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppLandingComponent,
    selectors: [["app-app-landing"]],
    decls: 6,
    vars: 0,
    template: function AppLandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar")(1, "app-app-banner")(2, "app-app-why-choose")(3, "app-app-features")(4, "app-app-pricing")(5, "app-app-testimonials");
      }
    },
    dependencies: [_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _app_banner_app_banner_component__WEBPACK_IMPORTED_MODULE_1__.AppBannerComponent, _app_why_choose_app_why_choose_component__WEBPACK_IMPORTED_MODULE_2__.AppWhyChooseComponent, _app_features_app_features_component__WEBPACK_IMPORTED_MODULE_3__.AppFeaturesComponent, _app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_4__.AppPricingComponent, _app_testimonials_app_testimonials_component__WEBPACK_IMPORTED_MODULE_5__.AppTestimonialsComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3386:
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-pricing/app-pricing.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPricingComponent: () => (/* binding */ AppPricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function AppPricingComponent_div_9_a_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingComponent_div_9_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingComponent_div_9_a_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingComponent_div_9_a_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppPricingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mensuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "990 FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " /Mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Constatation de cr\u00E9dits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Gestion portefeuille clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Mini comptabilit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Demande de financement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Suivi en temps r\u00E9els des cr\u00E9ances et des dettes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rappels automatis\u00E9s de paiements via sms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Rapports et relev\u00E9s de compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Application Multilingue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppPricingComponent_div_9_a_37_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppPricingComponent_div_9_a_38_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16)(40, "div", 10)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Annuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10 000 FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " /An");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "ul")(49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Constatation de cr\u00E9dits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Gestion portefeuille clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Mini comptabilit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Demande de financement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Suivi en temps r\u00E9els des cr\u00E9ances et des dettes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Rappels automatis\u00E9s de paiements via sms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Rapports et relev\u00E9s de compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Application Multilingue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AppPricingComponent_div_9_a_74_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppPricingComponent_div_9_a_75_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isIOS());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isIOS());
  }
}
function AppPricingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 8)(2, "div", 20)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Personal Pack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "$30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Rapports et relev\u00E9s de compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Application Multilingue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13)(37, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "S'abonner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20)(40, "div", 22)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Business Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "ul")(49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Trip Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Money Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13)(74, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "S'abonner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24)(77, "div", 25)(78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "$90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " /Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 11)(85, "ul")(86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Limited Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Available Trip History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Only 1 offer/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Special Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " No Free Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Trip Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Money Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13)(111, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "S'abonner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
class AppPricingComponent {
  constructor(platform) {
    this.platform = platform;
    // Tabs
    this.currentTab = 'tab1';
    this.deviceInfo = '';
  }
  ngOnInit() {}
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/windows/i.test(userAgent)) {
      this.deviceInfo = "Vous utilisez un appareil Windows.";
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log(this.deviceInfo);
    console.log('====================================');
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function AppPricingComponent_Factory(t) {
    return new (t || AppPricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppPricingComponent,
    selectors: [["app-app-pricing"]],
    decls: 11,
    vars: 2,
    consts: [[1, "container"], ["id", "pricing", 1, "pricing-section"], [1, "section-title"], [1, "pricing-tabs"], ["data-aos", "fade-left", 1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["id", "tab1", 1, "pane"], [1, "row"], ["data-aos", "zoom-in-up", "data-aos-duration", "3000", 1, "col-lg-6", "col-md-6"], [1, "price-card"], [1, "price-feature"], [1, "flaticon-checked"], [1, "price-btn"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], ["data-aos", "zoom-in-down", "data-aos-duration", "3000", 1, "col-lg-6", "col-md-6"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"], ["id", "tab2", 1, "pane"], [1, "col-lg-4", "col-md-6"], ["routerLink", "/"], [1, "price-card", "active-price", "business-class"], [1, "flaticon-block"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "price-card", "premium"]],
    template: function AppPricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Adoptez la Performance \u00E0 Petit Prix :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ProBoutik App vous accompagne dans la croissance de votre entreprise pour seulement 990fr par mois. Optez pour un abonnement mensuel abordable. Commencez avec un mois gratuit et passez ensuite \u00E0 l'abonnement \u00E0 990fr par mois ou \u00E0 10000fr par an. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppPricingComponent_div_9_Template, 76, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppPricingComponent_div_10_Template, 113, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab2");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".pricing-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n  padding: 50px;\n  border: 1px solid black;\n  border-radius: 30px;\n  text-align: center;\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n  transition: var(--transition);\n  margin-bottom: 30px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #343d48;\n  font-size: 22px;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  margin-bottom: 0;\n  line-height: 1;\n  margin-bottom: 10px;\n  transition: var(--transition);\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 30px;\n  transition: var(--transition);\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin-top: 30px;\n  padding-left: 30px;\n  margin-bottom: 40px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #343d48;\n  margin-bottom: 20px;\n  transition: var(--transition);\n  display: block;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #32cd32;\n  transition: var(--transition);\n  font-size: 14px;\n  margin-right: 5px;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--primary);\n  font-size: 16px;\n  color: white;\n  font-weight: 600;\n  padding: 15px 40px;\n  border-radius: 50px;\n  display: inline-block;\n  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);\n}\n.pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%]   .active-price[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 14px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .plan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 14px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n    text-align: center;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 15px 40px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%] {\n    padding: 50px 40px;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .pricing-section[_ngcontent-%COMP%]   .price-card[_ngcontent-%COMP%]   .price-feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtcHJpY2luZy9hcHAtcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQVFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5aO0FBUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5aO0FBT1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFRUTtFQUNJLGlCQUFBO0FBTlo7QUFPWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMaEI7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBSnBCO0FBS29CO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSHhCO0FBWWlCO0VBQ0csZ0JBQUE7QUFWcEI7QUFlWTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FBYmhCO0FBcUNJOzs7O0VBSUksd0JBQUE7QUFuQ1I7O0FBdUNBO0VBR1k7SUFDSSxtQkFBQTtFQXRDZDtFQXVDYztJQUNJLFVBQUE7SUFDQSxlQUFBO0VBckNsQjtFQXNDa0I7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUFwQ3RCO0VBeUNNO0lBQ0ksa0JBQUE7RUF2Q1Y7RUF3Q1U7SUFDSSxlQUFBO0VBdENkO0VBeUNjO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBdkNsQjtFQXdDa0I7SUFDSSxlQUFBO0VBdEN0QjtFQTBDVTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQXhDZDtBQUNGO0FBK0NBO0VBRVE7SUFDSSxrQkFBQTtFQTlDVjtFQWdEYztJQUNJLGVBQUE7RUE5Q2xCO0VBa0RjO0lBQ0ksa0JBQUE7RUFoRGxCO0FBQ0Y7QUFzREE7RUFFUTtJQUNJLGtCQUFBO0VBckRWO0VBdURjO0lBQ0ksZUFBQTtFQXJEbEI7RUFzRGtCO0lBQ0ksZUFBQTtFQXBEdEI7QUFDRjtBQStEQTtFQUNJLFdBQUE7QUE3REo7QUE4REk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE1RFI7QUE4REk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQTVEUiIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljaW5nLXNlY3Rpb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLnByaWNlLWNhcmQge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3gtc2hhZG93OiA3cHggNXB4IDMwcHggcmdiYSg3MiwgNzMsIDEyMSwgLjE1KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIC8vICY6aG92ZXIge1xuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogIzA1YTNlYTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyAmOmhvdmVyIHAsXG4gICAgICAgIC8vICY6aG92ZXIgaDMsXG4gICAgICAgIC8vICY6aG92ZXIgLnByaWNlLWZlYXR1cmUgdWwgbGksXG4gICAgICAgIC8vICY6aG92ZXIgLnByaWNlLWZlYXR1cmUgdWwgbGkgaSB7XG4gICAgICAgIC8vICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzM0M2Q0ODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nRm9udEZhbWlseSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJpY2UtZmVhdHVyZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM0M2Q0ODtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzJjZDMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgOm50aC1jaGlsZCg1KSxcbiAgICAgICAgICAgICAgICAvLyAgOm50aC1jaGlsZCg2KSxcbiAgICAgICAgICAgICAgICAvLyAgOm50aC1jaGlsZCg3KSxcbiAgICAgICAgICAgICAgICAvLyAgOm50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJpY2UtYnRuIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogN3B4IDVweCAzMHB4IHJnYmEoNzIsIDczLCAxMjEsIC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1c2luZXNzLWNsYXNzIHtcbiAgICAgICAgLnByaWNlLWZlYXR1cmUge1xuICAgICAgICAgICAgLy8gdWwge1xuICAgICAgICAgICAgLy8gICAgICA6bnRoLWNoaWxkKDUpLFxuICAgICAgICAgICAgLy8gICAgICA6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgIDpudGgtY2hpbGQoNyksXG4gICAgICAgICAgICAvLyAgICAgIDpudGgtY2hpbGQoOCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByZW1pdW0ge1xuICAgICAgICAucHJpY2UtZmVhdHVyZSB7fVxuICAgIH1cbiAgICAvLyAuYWN0aXZlLXByaWNlIHtcbiAgICAvLyAgICAgYmFja2dyb3VuZDogIzA1YTNlYTtcbiAgICAvLyB9XG4gICAgLmFjdGl2ZS1wcmljZSBwLFxuICAgIC5hY3RpdmUtcHJpY2UgaDMsXG4gICAgLmFjdGl2ZS1wcmljZSAucHJpY2UtZmVhdHVyZSB1bCBsaSxcbiAgICAuYWN0aXZlLXByaWNlIC5wcmljZS1mZWF0dXJlIHVsIGxpIGkge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnByaWNpbmctc2VjdGlvbiB7XG4gICAgICAgIC5wbGFuLWxpc3Qge1xuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcmljZS1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZS1mZWF0dXJlIHtcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2UtYnRuIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnByaWNpbmctc2VjdGlvbiB7XG4gICAgICAgIC5wcmljZS1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgICAgICAgICAgIC5wcmljZS1mZWF0dXJlIHtcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2UtYnRuIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5wcmljaW5nLXNlY3Rpb24ge1xuICAgICAgICAucHJpY2UtY2FyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDQwcHg7XG4gICAgICAgICAgICAucHJpY2UtZmVhdHVyZSB7XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU1MHB4KSB7fVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaDIge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8qIEhlYWRpbmcgMSAqL1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogVGV4dC9NZWRpdW0vTm9ybWFsICovXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgLyogMjdweCAqL1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 8866:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-screenshots/app-screenshots.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppScreenshotsComponent: () => (/* binding */ AppScreenshotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function AppScreenshotsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppScreenshotsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppScreenshotsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppScreenshotsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppScreenshotsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppScreenshotsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AppScreenshotsComponent {
  constructor() {
    this.screenshotSlider = {
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      center: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppScreenshotsComponent_Factory(t) {
    return new (t || AppScreenshotsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppScreenshotsComponent,
    selectors: [["app-app-screenshots"]],
    decls: 24,
    vars: 1,
    consts: [["id", "screenshots", 1, "screenshots-section", "ptb-100"], [1, "container", "mt-5"], [1, "section-title"], [1, "screenshot-slider"], ["data-wow-duration", "1s", 3, "options"], ["carouselSlide", ""], [1, "screenshot-shape"], ["src", "assets/img/shape/1.png", "alt", "shape"], ["src", "assets/img/shape/2.png", "alt", "shape"], ["src", "assets/img/shape/3.png", "alt", "shape"], ["src", "assets/img/shape/4.png", "alt", "shape"], ["src", "assets/img/shape/5.png", "alt", "shape"], ["src", "assets/img/shape/6.png", "alt", "shape"], [1, "screenshoot-img"], ["src", "assets/img/app-landing/1.png", "alt", "app-screenshot"], ["src", "assets/img/app-landing/2.png", "alt", "app-screenshot"], ["src", "assets/img/app-landing/3.png", "alt", "app-screenshot"], ["src", "assets/img/app-landing/4.png", "alt", "app-screenshot"], ["src", "assets/img/app-landing/5.png", "alt", "app-screenshot"]],
    template: function AppScreenshotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Screenshots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Have Look at Our App Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Grab a look at our outstanding and stunning App Interfaces which is easy to use and very easily manageable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppScreenshotsComponent_ng_template_11_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppScreenshotsComponent_ng_template_12_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppScreenshotsComponent_ng_template_13_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppScreenshotsComponent_ng_template_14_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppScreenshotsComponent_ng_template_15_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppScreenshotsComponent_ng_template_16_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7)(19, "img", 8)(20, "img", 9)(21, "img", 10)(22, "img", 11)(23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotSlider);
      }
    },
    dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
    styles: [".screenshots-section[_ngcontent-%COMP%] {\n  background: #e2f4fe;\n  padding-bottom: 90px;\n  position: relative;\n}\n.screenshots-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-slider[_ngcontent-%COMP%]   .screenshoot-img[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-slider[_ngcontent-%COMP%]   .screenshoot-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 35px;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 40px;\n  left: 100px;\n  animation: translateX 10s infinite linear;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 200px;\n  left: 150px;\n  animation: translateY 10s infinite linear;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 100px;\n  left: 300px;\n  animation: translateX 10s infinite linear;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  right: 300px;\n  top: 20px;\n  animation: translateY 10s infinite linear;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  right: 400px;\n  top: 270px;\n  animation: translateX 10s infinite linear;\n}\n.screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  right: 100px;\n  top: 100px;\n  animation: translateY 10s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .screenshots-section[_ngcontent-%COMP%] {\n    padding-bottom: 40px;\n  }\n  .screenshots-section[_ngcontent-%COMP%]   .screenshot-slider[_ngcontent-%COMP%]   .screenshoot-img[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .screenshots-section[_ngcontent-%COMP%]   .screenshot-slider[_ngcontent-%COMP%]   .screenshoot-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: unset;\n    margin: auto;\n  }\n  .screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .screenshots-section[_ngcontent-%COMP%] {\n    padding-bottom: 60px;\n  }\n  .screenshots-section[_ngcontent-%COMP%]   .screenshot-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtc2NyZWVuc2hvdHMvYXBwLXNjcmVlbnNob3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7QUFFUTtFQUNJLG1CQUFBO0FBQVo7QUFFWTtFQUNJLG1CQUFBO0FBQWhCO0FBS1E7RUFDSSxrQkFBQTtBQUhaO0FBS1E7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBSFo7QUFLUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFIWjtBQUtRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQUhaO0FBS1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0FBSFo7QUFLUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7QUFIWjtBQUtRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQUhaOztBQVFBO0VBRUk7SUFDSSxvQkFBQTtFQU5OO0VBU1U7SUFDSSxnQkFBQTtFQVBkO0VBU2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFQbEI7RUFXTTtJQUNJLGFBQUE7RUFUVjtBQUNGO0FBZ0JBO0VBRUk7SUFDSSxvQkFBQTtFQWZOO0VBaUJNO0lBQ0ksYUFBQTtFQWZWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NyZWVuc2hvdHMtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2UyZjRmZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgfVxuICAgIC5zY3JlZW5zaG90LXNsaWRlciB7XG4gICAgICAgIC5zY3JlZW5zaG9vdC1pbWcge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNjcmVlbnNob3Qtc2hhcGUge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIDpudGgtY2hpbGQoMSl7XG4gICAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWCAxMHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIDpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVkgMTBzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICA6bnRoLWNoaWxkKDMpe1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgOm50aC1jaGlsZCg0KXtcbiAgICAgICAgICAgIHJpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSAxMHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIDpudGgtY2hpbGQoNSl7XG4gICAgICAgICAgICByaWdodDogNDAwcHg7XG4gICAgICAgICAgICB0b3A6IDI3MHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgOm50aC1jaGlsZCg2KXtcbiAgICAgICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVkgMTBzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gICAgLnNjcmVlbnNob3RzLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcblxuICAgICAgICAuc2NyZWVuc2hvdC1zbGlkZXIge1xuICAgICAgICAgICAgLnNjcmVlbnNob290LWltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zY3JlZW5zaG90LXNoYXBlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcblxuICAgIC5zY3JlZW5zaG90cy1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG5cbiAgICAgICAgLnNjcmVlbnNob3Qtc2hhcGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 1133:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-testimonials/app-testimonials.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTestimonialsComponent: () => (/* binding */ AppTestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);





function AppTestimonialsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thierno Sakho");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Co-founder ,CEO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "With over 15 years in the investment banking, microfinance, VC industry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppTestimonialsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Abdoulaye FAYE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Co-founder CTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "With over 7 years of IT and Product Management on Fintech and Saas startups. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppTestimonialsComponent_ng_template_13_Template(rf, ctx) {}
function AppTestimonialsComponent_a_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppTestimonialsComponent_a_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E9l\u00E9charger gratuitement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AppTestimonialsComponent {
  constructor(platform) {
    this.platform = platform;
    this.deviceInfo = '';
    this.testimonialSlides = {
      loop: true,
      margin: 30,
      dots: true,
      center: true,
      smartSpeed: 2000,
      navSpeed: 700,
      dotsSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {}
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {} else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
      this.deviceInfo = "Vous utilisez un iPhone ou un autre appareil iOS.";
    } else if (/windows/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    } else {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.proxalys.merchant.mobile.app.merchantapp';
    }
    console.log('====================================');
    console.log(this.deviceInfo);
    console.log('====================================');
  }
  isAndroid() {
    return this.platform.ANDROID;
  }
  isIOS() {
    return this.platform.IOS;
  }
  static #_ = this.ɵfac = function AppTestimonialsComponent_Factory(t) {
    return new (t || AppTestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppTestimonialsComponent,
    selectors: [["app-app-testimonials"]],
    decls: 94,
    vars: 3,
    consts: [["id", "testimonials", 1, "testimonial-section", "mt-5", "mb-5"], [1, "container"], [1, "section-title"], [1, "foire"], [1, "row", "mb-5"], [1, "mb-5"], [1, "testimonial-slider"], [3, "options"], ["carouselSlide", ""], [1, "mt-5"], [1, "rej-text"], [1, "navbar-btn"], ["routerLink", "/ "], [1, "foire", "mb-3"], ["id", "accordionExample", 1, "accordion", "mb-5"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingFour", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "accordion-button", "collapsed"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingFive", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "accordion-button", "collapsed"], ["id", "collapseFive", "aria-labelledby", "headingFive", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "section-title", "mt-5", "mb-5"], [1, "section-title", "mt-5"], [1, "rej"], [1, "navbar-btn-t"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share", 4, "ngIf"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053", 4, "ngIf"], [1, "contact", "mt-5"], ["action", "", 1, "form"], [1, "form-group", "mb-3"], ["for", "nom"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Ecrivez votre message", 1, "form-control"], [1, "navbar-btn-t", "offset-4"], [1, "testimonial-item"], ["src", "assets/img/app-landing/ceo.png", "alt", "client image"], [1, "client-info"], ["src", "assets/img/app-landing/cto.png", "alt", "client image"], ["href", "https://play.google.com/store/apps/details?id=com.mng.merchant.pro.btk.proboutik_v2&pcampaignid=web_share"], ["href", "https://apps.apple.com/fr/app/proboutik/id6475403053"]],
    template: function AppTestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Unis par une Vision :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "D\u00E9couvrez l'\u00C9quipe ProBoutik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppTestimonialsComponent_ng_template_11_Template, 9, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppTestimonialsComponent_ng_template_12_Template, 9, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppTestimonialsComponent_ng_template_13_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "div", 2)(16, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rejoignez Notre \u00C9quipe Passionn\u00E9e :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Explorez nos opportunit\u00E9s et apportez votre expertise pour fa\u00E7onner l'avenir.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rejoignez-nous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Foire aux Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "h2", 16)(28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 1. Qu'est-ce que ProBoutik App ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " ProBoutik App est une application mobile r\u00E9volutionnaire con\u00E7ue pour les micro-marchands et les retailers. Elle offre une solution compl\u00E8te pour la digitalisation des transactions, la gestion de la tr\u00E9sorerie, les rappels de paiements et bien plus encore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "h2", 20)(35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2. Comment fonctionne la digitalisation des transactions ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " La digitalisation des transactions avec ProBoutikApp est simple. L'application enregistre toutes vos transactions \u00E0 paiement diff\u00E9r\u00E9, garantissant une tra\u00E7abilit\u00E9 transparente et une meilleure gestion de vos op\u00E9rations commerciales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "h2", 23)(42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 3. Comment puis-je b\u00E9n\u00E9ficier du financement via ProBoutik App ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25)(45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ProBoutik App offre un financement bas\u00E9 sur les cr\u00E9dits octroy\u00E9s \u00E0 vos clients sous forme de micro-affacturage. Cela vous permet de reconstituer votre tr\u00E9sorerie et de poursuivre votre croissance, tout en \u00E9vitant les tensions financi\u00E8res. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15)(48, "h2", 26)(49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 4. Comment les rappels de paiements fonctionnent-ils ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28)(52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Les rappels de paiements automatiques de ProBoutik App simplifient le recouvrement. Vous pouvez envoyer des rappels \u00E0 vos clients avec un lien de paiement, offrant une exp\u00E9rience fluide et transparente pour tous. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15)(55, "h2", 29)(56, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 5. Quels secteurs d'activit\u00E9 b\u00E9n\u00E9ficient de ProBoutik App ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31)(59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ProBoutikApp profite \u00E0 une vari\u00E9t\u00E9 de secteurs, de la vente au d\u00E9tail \u00E0 l'alimentation en passant par les services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32)(62, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Vous avez d'autres questions ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "N'h\u00E9sitez pas \u00E0 nous contacter pour obtenir des r\u00E9ponses d\u00E9taill\u00E9es.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11)(67, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Rejoignez-nous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33)(70, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Facilitez Votre Gestion au Bout de Vos Doigts avec ProboutikApp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Prenez l'initiative d\u00E8s maintenant et t\u00E9l\u00E9chargez ProBoutik App pour une gestion commerciale optimis\u00E9e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppTestimonialsComponent_a_75_Template, 2, 0, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AppTestimonialsComponent_a_76_Template, 2, 0, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38)(78, "form", 39)(79, "div", 40)(80, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40)(84, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40)(88, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45)(92, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.testimonialSlides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAndroid());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIOS());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective],
    styles: [".testimonial-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  animation: pulse 4s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 95px;\n  left: 120px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  bottom: 120px;\n  left: 28%;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 60px;\n  left: 35%;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  left: 50%;\n  top: 140px;\n  max-width: 100px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  right: 20%;\n  top: 55px;\n  width: 55px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  right: 95px;\n  bottom: 80px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%] {\n  position: relative;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  padding: 45px 90px 45px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  width: 70px;\n  border-radius: 100px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 163.15%;\n  \n\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  text-align: center;\n  \n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  top: 165px;\n  right: 65px;\n  animation: translateX 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  top: 0;\n  left: 100px;\n  animation: translateY 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  top: 55px;\n  right: 235px;\n  animation: translateX 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  top: 400px;\n  right: 10px;\n  animation: translateY 5s infinite linear;\n}\n.testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  bottom: 55px;\n  right: 200px;\n  animation: translateX 5s infinite linear;\n}\n\n@media only screen and (max-width: 767px) {\n  .testimonial-section[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]::before {\n    font-size: 30px;\n    top: 80px;\n    right: 20px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n    padding: 45px 20px 45px;\n    text-align: center;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto 10px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: auto;\n    max-width: 235px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 15%;\n    left: 15%;\n    max-width: 30px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 10%;\n    left: 27%;\n    max-width: 30px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n    top: 10%;\n    left: 30%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n    left: 0;\n    top: 25%;\n    max-width: 50px;\n    right: 0;\n    margin: auto;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n    right: 20%;\n    top: 10%;\n    width: 40px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n    right: 10%;\n    bottom: 10%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n    padding: 45px 0px 0 0;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .testimonial-section[_ngcontent-%COMP%] {\n    padding-bottom: 90px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]::before {\n    font-size: 70px;\n    top: 80px;\n    right: 20px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 40px;\n    left: 28%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .rej-text[_ngcontent-%COMP%] {\n    font-size: 8vw;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    top: 50px;\n    left: 80px;\n    max-width: 60px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    bottom: 30px;\n    left: 28%;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n    left: 0;\n    right: 0;\n    max-width: 60px;\n    margin: auto;\n    top: 80px;\n  }\n  .testimonial-section[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grey, #6D7D8B);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  flex: 1 0 0;\n}\n\n.foire[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-family: Work Sans;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n}\n\n.accordion[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.rej[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 130%;\n  \n\n}\n\n.rej-text[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  text-align: center;\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  \n\n}\n\n.navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 15px 32px;\n  margin-left: 30px;\n  color: var(--primary);\n  border: solid 2px var(--primary);\n  text-decoration: none;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  color: WHITE;\n  border: solid 1px var(--primary);\n}\n\n.navbar-btn-t[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 15px 32px;\n  margin-left: 30px;\n  background-color: var(--primary);\n  color: WHITE;\n  text-decoration: none;\n  font-family: var(--headingFontFamily);\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar-btn-t[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  border: solid 2px var(--primary);\n  border: solid 1px var(--primary);\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--black, #000);\n  background: var(--white, #FFF);\n  display: flex;\n  height: 48px;\n  padding: 12px;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n}\n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--black, #000);\n  background: var(--white, #FFF);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--black, #000);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 150%;\n  \n\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  font-family: Work Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtdGVzdGltb25pYWxzL2FwcC10ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFFaEI7QUFBYTtFQUNHLFNBQUE7RUFDQSxXQUFBO0FBRWhCO0FBQWE7RUFDRyxhQUFBO0VBQ0EsU0FBQTtBQUVoQjtBQUFhO0VBQ0csU0FBQTtFQUNBLFNBQUE7QUFFaEI7QUFBYTtFQUNHLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFBYTtFQUNHLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQUFhO0VBQ0csV0FBQTtFQUNBLFlBQUE7QUFFaEI7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFDUTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNaO0FBQVk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUVoQjtBQUFZO0VBQ0ksbUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHcEI7QUFEZ0I7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUdwQjtBQUFZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFFaEI7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFHUztFQUNHLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUFEWjtBQUdTO0VBQ0csTUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQURaO0FBR1M7RUFDRyxTQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBRFo7QUFHUztFQUNHLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUFEWjtBQUdTO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQURaOztBQU1BO0VBQ0k7SUFDSSxvQkFBQTtFQUhOO0VBSU07SUFDSSxhQUFBO0VBRlY7RUFLVTtJQUNJLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQUhkO0VBS1U7SUFDSSx1QkFBQTtJQUNBLGtCQUFBO0VBSGQ7RUFJYztJQUNJLG1CQUFBO0VBRmxCO0VBSWM7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUFGbEI7RUFRYztJQUNJLGVBQUE7RUFObEI7RUFRZTtJQUNHLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtFQU5sQjtFQVFlO0lBQ0csV0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VBTmxCO0VBUWU7SUFDRyxRQUFBO0lBQ0EsU0FBQTtFQU5sQjtFQVFlO0lBQ0csT0FBQTtJQUNBLFFBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7RUFObEI7RUFRZTtJQUNHLFVBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtFQU5sQjtFQVFlO0lBQ0csVUFBQTtJQUNBLFdBQUE7RUFObEI7RUFXVTtJQUNJLHFCQUFBO0VBVGQ7QUFDRjtBQWdCQTtFQUNJO0lBQ0ksb0JBQUE7RUFkTjtFQWVNO0lBQ0ksZ0JBQUE7RUFiVjtFQWVNO0lBQ0ksYUFBQTtFQWJWO0VBZ0JVO0lBQ0ksZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBZGQ7RUFtQmU7SUFDRyxZQUFBO0lBQ0EsU0FBQTtFQWpCbEI7QUFDRjtBQXVCQTtFQUNJO0lBQ0ksY0FBQTtFQXJCTjtFQTBCZTtJQUNHLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQXhCbEI7RUEwQmU7SUFDRyxZQUFBO0lBQ0EsU0FBQTtFQXhCbEI7RUEwQmU7SUFDRyxPQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQXhCbEI7RUE0Qk07SUFDSSxXQUFBO0VBMUJWO0FBQ0Y7QUFtQ0k7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNSO0FBbUNJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBakNSOztBQXFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFsQ0o7O0FBcUNBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFsQ0o7O0FBcUNBO0VBQ0ksWUFBQTtBQWxDSjs7QUFxQ0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBbENKOztBQXFDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBbENKOztBQXNDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBRUkscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFwQ1o7QUF1Q1E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQXJDWjs7QUEyQ0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUkscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF6Q1o7QUE0Q1E7RUFDSSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUExQ1o7O0FBK0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE1Q0o7O0FBK0NBO0VBQ0ksVUFBQTtBQTVDSjtBQTZDSTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBM0NSO0FBNkNJO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0FBM0NSOztBQStDQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUE1Q0o7O0FBK0NBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE1Q0oiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdGltb25pYWwtc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC50ZXN0aW1vbmlhbC1pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5jbGllbnQtaW1nIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDk1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyOCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICA6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdG9wOiAxNDBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCU7XG4gICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA5NXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudGVzdGltb25pYWwtc2xpZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAudGVzdGltb25pYWwtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDkwcHggNDVweCAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50LWluZm8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLyogSGVhZGluZyAzICovXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2My4xNSU7XG4gICAgICAgICAgICAgICAgICAgIC8qIDI5LjM2N3B4ICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMDAwKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLyogVGV4dC9SZWd1bGFyL05vcm1hbCAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAgICAgICAvKiAyNHB4ICovXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsLXNoYXBlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICB0b3A6IDE2NXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDY1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICByaWdodDogMjM1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHRyYW5zbGF0ZVggNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgICA6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgIHRvcDogNDAwcHg7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlWSA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgIDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgYm90dG9tOiA1NXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50ZXN0aW1vbmlhbC1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zaGFwZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zbGlkZXIge1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCA0NXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGVzdGltb25pYWwtaW1nIHtcbiAgICAgICAgICAgIC5jbGllbnQtaW1nIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNyU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50ZXN0aW1vbmlhbC1zbGlkZXIge1xuICAgICAgICAgICAgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMHB4IDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAudGVzdGltb25pYWwtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLXNoYXBlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLXNsaWRlciB7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLWltZyB7XG4gICAgICAgICAgICAuY2xpZW50LWltZyB7XG4gICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI4JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAucmVqLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDh2dztcbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsLXNlY3Rpb24ge1xuICAgICAgICAudGVzdGltb25pYWwtaW1nIHtcbiAgICAgICAgICAgIC5jbGllbnQtaW1nIHtcbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjglO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWNjb3JkaW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHt9XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjaywgIzI1MzEzQyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSwgIzZEN0Q4Qik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLyogUGFyYWdyYXBoICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgLyogMjkuMzY3cHggKi9cbiAgICB9XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgZmxleDogMSAwIDA7XG59XG5cbi5mb2lyZSB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGluZyAxICovXG4gICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5hY2NvcmRpb24ge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlaiB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGluZy9INCAqL1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAvKiA0MS42cHggKi9cbn1cblxuLnJlai10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBUZXh0L01lZGl1bS9Ob3JtYWwgKi9cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgLyogMjdweCAqL1xufVxuXG4ubmF2YmFyLWJ0biB7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250OiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogV0hJVEU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5hdmJhci1idG4tdCB7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiBXSElURTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250OiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhcigtLWhlYWRpbmdGb250RmFtaWx5KTtcbiAgICAgICAgICAgIHdlaWdodDogNjAwO1xuICAgICAgICAgICAgc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLCAjRkZGKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgIzAwMCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLCAjRkZGKTtcbiAgICB9XG59XG5cbmxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMwMDApO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgLyogMjRweCAqL1xufVxuXG4uYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 4473:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/app-landing/app-why-choose/app-why-choose.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWhyChooseComponent: () => (/* binding */ AppWhyChooseComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 5144);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AppWhyChooseComponent {
  constructor() {}
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppWhyChooseComponent_Factory(t) {
    return new (t || AppWhyChooseComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppWhyChooseComponent,
    selectors: [["app-app-why-choose"]],
    decls: 46,
    vars: 0,
    consts: [["id", "about", 1, "why-choose", "pt-100"], [1, "container"], [1, "row", "align-items-center", "mb-5", "why"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "col"], ["data-wow-duration", "2s", 1, "why-choose-text", "wow", "fadeInUp"], [1, "media", "d-flex"], [1, "media-body"], [1, "mt-0"], ["data-aos", "fade-left", "data-aos-duration", "3000", 1, "col-lg-4"], ["data-wow-duration", "1s", 1, "why-choose-img", "wow", "fadeInUp"], ["src", "assets/img/app-landing/Connexion01.png", "alt", "why choose image"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "row", "align-items-center", "why", "reverse"], [1, "col-lg-4"], ["src", "assets/img/app-landing/Home01.png", "alt", "why choose image"], [1, "col"], [1, "media-body", "offset-1"], ["src", "assets/img/app-landing/Envoyer01.png", "alt", "why choose image"], [1, "row", "align-items-center", "why", "reverse"], ["data-aos", "fade-right", "data-aos-duration", "3000", 1, "col-lg-4"], ["data-aos", "fade-left", "data-aos-duration", "3000", 1, "col"]],
    template: function AppWhyChooseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Inscription Simple, Sans Contraintes :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Un premier pas sans complications. Rejoignez ProBoutikApp avec votre num\u00E9ro de t\u00E9l\u00E9phone, \u00E9vitant les formalit\u00E9s complexes. L'inscription devient ais\u00E9e, ouvrant la voie \u00E0 une exp\u00E9rience fluide d\u00E8s le d\u00E9part. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 4)(19, "div", 5)(20, "div", 15)(21, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Suivi en Temps R\u00E9el :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Toujours dans le savoir. Acc\u00E9dez \u00E0 un suivi en temps r\u00E9el, visualisant l'\u00E9tat de chaque transaction instantan\u00E9ment. Soyez au courant, restez en contr\u00F4le, et cr\u00E9ez des relations de confiance solides. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Rappels de Paiement Automatiques :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Oubliez les soucis de recouvrement. Envoyez des rappels de paiement automatis\u00E9s, offrant une exp\u00E9rience sans faille \u00E0 vous et vos clients. Simplifiez le processus, renforcez votre r\u00E9putation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8)(33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "div", 18)(37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 4)(41, "div", 5)(42, "div", 6)(43, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Stimulez Votre Croissance avec un Financement Int\u00E9gr\u00E9 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Ne laissez pas la tr\u00E9sorerie vous freiner. B\u00E9n\u00E9ficiez du financement strat\u00E9gique de ProBoutik App pour reconstituer vos ressources financi\u00E8res. D\u00E9veloppez-vous sans entraves, r\u00E9alisez vos ambitions avec confiance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: [".why-choose[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  position: relative;\n}\n.why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 60px;\n  text-align: start;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);\n  animation: translateY 10s infinite linear;\n  border-radius: 45px;\n  width: 90%;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why[_ngcontent-%COMP%] {\n  margin-bottom: 190px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  width: 750px;\n  color: var(--black, #25313C);\n  \n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 163.15%;\n  \n\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--black, #25313C);\n  \n\n  font-size: 48px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: #0f2137;\n  padding: 0 30px 0;\n  margin-right: 25px;\n  border-radius: 50px;\n  display: inline-block;\n  border: 1px solid #0f2137;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 15px;\n  position: relative;\n  left: 0;\n  font-size: 30px;\n  line-height: 1;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 40px;\n  margin: 0 0 15px;\n  font-size: 14px;\n  line-height: 0;\n  top: -10px;\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  top: -13px;\n  font-size: 17px;\n  font-weight: 600;\n  position: relative;\n  padding-left: 40px;\n  transition: var(--transition);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--whiteColor);\n  border: 1px solid transparent;\n  background: linear-gradient(0deg, rgb(0, 183, 235) 0%, rgb(8, 152, 231) 100%);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgb(0, 183, 235) 0%, rgb(8, 152, 231) 100%);\n  border: 1px solid transparent;\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n.why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--whiteColor);\n}\n\n@media only screen and (max-width: 767px) {\n  .reverse[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n  .why[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .why-choose[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .why-choose[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n    left: 10px;\n    top: 15px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n    height: 45px;\n    width: 45px;\n    left: -10px;\n    top: -10px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    font-size: 15px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    text-align: center;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 10px 0px;\n    margin-right: 5px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 20px;\n    line-height: 1;\n    left: -40px;\n    top: 12px;\n    left: 0;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding-left: 30px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .why-choose-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding-left: 30px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n    max-width: 250px;\n    margin: auto;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .why-choose[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .why-choose[_ngcontent-%COMP%]::after {\n    z-index: -1;\n  }\n  .why-choose[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    margin: 0 auto 50px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    top: 20px;\n    left: 35px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-text[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n  .why-choose[_ngcontent-%COMP%]   .why-choose-img[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 300px;\n    margin: 0 auto 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHAtbGFuZGluZy9hcHAtd2h5LWNob29zZS9hcHAtd2h5LWNob29zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBRFE7RUFDSSw0Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBR1o7QUFDUTtFQUNJLG9CQUFBO0FBQ1o7QUFFWTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUFoQjtBQUNnQjtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDcEI7QUFHUTtFQUNJLGdCQUFBO0FBRFo7QUFFWTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFoQjtBQUNnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNwQjtBQUNnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNwQjtBQUNnQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZFQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSx3QkFBQTtBQUNwQjtBQUVZO0VBQ0ksNkVBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBQWhCO0FBRVk7RUFDSSx3QkFBQTtBQUFoQjtBQUVZO0VBQ0ksd0JBQUE7QUFBaEI7O0FBTUE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQUhOO0VBS0U7SUFDSSxrQkFBQTtFQUhOO0VBTU07SUFDSSxhQUFBO0VBSlY7RUFNTTtJQUNJLG1CQUFBO0VBSlY7RUFLVTtJQUNJLGVBQUE7RUFIZDtFQU1NO0lBQ0ksYUFBQTtFQUpWO0VBTU07SUFDSSxpQkFBQTtFQUpWO0VBS1U7SUFDSSxtQkFBQTtFQUhkO0VBSWM7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFGbEI7RUFHa0I7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBRHRCO0VBSWM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUFGbEI7RUFHa0I7SUFDSSxlQUFBO0VBRHRCO0VBS1U7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBSGQ7RUFJYztJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7RUFGbEI7RUFHa0I7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0VBRHRCO0VBR2tCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBRHRCO0VBR2tCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBRHRCO0VBTU07SUFDSSxnQkFBQTtJQUNBLFlBQUE7RUFKVjtFQUtVO0lBQ0ksYUFBQTtFQUhkO0FBQ0Y7QUFVQTtFQUVRO0lBQ0ksYUFBQTtFQVRWO0VBV007SUFDSSxXQUFBO0VBVFY7RUFXTTtJQUNJLG1CQUFBO0VBVFY7RUFhYztJQUNJLFNBQUE7SUFDQSxVQUFBO0VBWGxCO0VBYWM7SUFDSSxnQkFBQTtFQVhsQjtFQWVNO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBYlY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53aHktY2hvb3NlIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICAgIC53aHktY2hvb3NlLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDQ4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVZIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2h5LWNob29zZS10ZXh0IHtcbiAgICAgICAgLndoeSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMyNTMxM0MpO1xuICAgICAgICAgICAgICAgIC8qIFBhcmFncmFwaCAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYzLjE1JTtcbiAgICAgICAgICAgICAgICAvKiAyOS4zNjdweCAqL1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMjUzMTNDKTtcbiAgICAgICAgICAgICAgICAgICAgLyogSGVhZGluZyAxICovXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLndoeS1jaG9vc2UtYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBmMjEzNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmMjEzNztcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMTgzLCAyMzUsIDEpIDAlLCByZ2JhKDgsIDE1MiwgMjMxLCAxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBoNSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDE4MywgMjM1LCAxKSAwJSwgcmdiYSg4LCAxNTIsIDIzMSwgMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSBoNSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucmV2ZXJzZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB9XG4gICAgLndoeSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLndoeS1jaG9vc2Uge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLndoeS1jaG9vc2UtdGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53aHktY2hvb3NlLWJ0biB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC53aHktY2hvb3NlLWltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC53aHktY2hvb3NlIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNTBweDtcbiAgICAgICAgfVxuICAgICAgICAud2h5LWNob29zZS10ZXh0IHtcbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAud2h5LWNob29zZS1pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7fVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge30iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 774:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/sass-landing-one/sass-landing-one.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SassLandingOneComponent: () => (/* binding */ SassLandingOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SassLandingOneComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SassLandingOneComponent_Factory(t) {
    return new (t || SassLandingOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SassLandingOneComponent,
    selectors: [["app-sass-landing-one"]],
    decls: 2,
    vars: 0,
    consts: [[1, "maintenance"], ["src", "../../../../assets/img/app-landing/maintenance.jpg", "height", "10", "alt", ""]],
    template: function SassLandingOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8119:
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesService: () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ServicesService {
  constructor() {
    this.deviceInfo = '';
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      this.deviceInfo = "Vous utilisez un appareil Android.";
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      this.deviceInfo = "Vous utilisez un iPhone ou un autre appareil iOS.";
    } else if (/windows/i.test(userAgent)) {
      this.deviceInfo = "Vous utilisez un appareil Windows.";
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      this.deviceInfo = "Vous utilisez un MacBook ou un autre appareil macOS.";
    } else {
      this.deviceInfo = "Vous utilisez un autre type d'appareil.";
    }
  }
  static #_ = this.ɵfac = function ServicesService_Factory(t) {
    return new (t || ServicesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ServicesService,
    factory: ServicesService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map