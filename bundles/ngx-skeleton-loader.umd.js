(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('perf-marks/marks'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-skeletor-loader', ['exports', '@angular/core', 'perf-marks/marks', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-skeletor-loader'] = {}, global.ng.core, global.marks, global.ng.common));
}(this, (function (exports, core, marks, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-skeletor-loader-config.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NgxSkeletonLoaderConfig() { }
    if (false) {
        /** @type {?} */
        NgxSkeletonLoaderConfig.prototype.appearance;
        /** @type {?} */
        NgxSkeletonLoaderConfig.prototype.animation;
        /** @type {?} */
        NgxSkeletonLoaderConfig.prototype.theme;
        /** @type {?} */
        NgxSkeletonLoaderConfig.prototype.loadingText;
        /** @type {?} */
        NgxSkeletonLoaderConfig.prototype.count;
        /** @type {?} */
        NgxSkeletonLoaderConfig.prototype.ariaLabel;
    }
    /** @type {?} */
    var NGX_SKELETON_LOADER_CONFIG = new core.InjectionToken('ngx-skeletor-loader.config');

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-skeletor-loader.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSkeletonLoaderComponent = /** @class */ (function () {
        /**
         * @param {?=} config
         */
        function NgxSkeletonLoaderComponent(config) {
            var _a = config || {}, _b = _a.appearance, appearance = _b === void 0 ? 'line' : _b, _c = _a.animation, animation = _c === void 0 ? 'progress' : _c, _d = _a.theme, theme = _d === void 0 ? null : _d, _e = _a.loadingText, loadingText = _e === void 0 ? 'Loading...' : _e, _f = _a.count, count = _f === void 0 ? 1 : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? 'loading' : _g;
            this.appearance = appearance;
            this.animation = animation;
            this.theme = theme;
            this.loadingText = loadingText;
            this.count = count;
            this.items = [];
            this.ariaLabel = ariaLabel;
        }
        /**
         * @return {?}
         */
        NgxSkeletonLoaderComponent.prototype.ngOnInit = function () {
            marks.start('NgxSkeletonLoader:Rendered');
            marks.start('NgxSkeletonLoader:Loaded');
            this.validateInputValues();
        };
        /**
         * @private
         * @return {?}
         */
        NgxSkeletonLoaderComponent.prototype.validateInputValues = function () {
            // Checking if it's receiving a numeric value (string having ONLY numbers or if it's a number)
            if (!/^\d+$/.test("" + this.count)) {
                // Shows error message only in Development
                if (core.isDevMode()) {
                    console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\".");
                }
                this.count = 1;
            }
            this.items.length = this.count;
            /** @type {?} */
            var allowedAnimations = ['progress', 'progress-dark', 'pulse', 'false'];
            if (allowedAnimations.indexOf(String(this.animation)) === -1) {
                // Shows error message only in Development
                if (core.isDevMode()) {
                    console.error("`NgxSkeletonLoaderComponent` need to receive 'animation' as: " + allowedAnimations.join(', ') + ". Forcing default to \"progress\".");
                }
                this.animation = 'progress';
            }
            if (['circle', 'line', ''].indexOf(String(this.appearance)) === -1) {
                // Shows error message only in Development
                if (core.isDevMode()) {
                    console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or empty string. Forcing default to \"''\".");
                }
                this.appearance = '';
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxSkeletonLoaderComponent.prototype.ngOnChanges = function (changes) {
            // Avoiding multiple calls for the same input in case there's no changes in the fields
            // Checking if the fields that require validation are available and if they were changed
            // In case were not changed, we stop the function. Otherwise, `validateInputValues` will be called.
            if (['count', 'animation', 'appearance'].find(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return changes[key] && (changes[key].isFirstChange() || changes[key].previousValue === changes[key].currentValue); }))) {
                return;
            }
            this.validateInputValues();
        };
        /**
         * @return {?}
         */
        NgxSkeletonLoaderComponent.prototype.ngAfterViewInit = function () {
            marks.end('NgxSkeletonLoader:Rendered');
        };
        /**
         * @return {?}
         */
        NgxSkeletonLoaderComponent.prototype.ngOnDestroy = function () {
            marks.end('NgxSkeletonLoader:Loaded');
        };
        return NgxSkeletonLoaderComponent;
    }());
    NgxSkeletonLoaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-skeletor-loader',
                    template: "<span\n  *ngFor=\"let item of items\"\n  class=\"loader\"\n  [attr.aria-label]=\"ariaLabel\"\n  aria-busy=\"true\"\n  aria-valuemin=\"0\"\n  aria-valuemax=\"100\"\n  [attr.aria-valuetext]=\"loadingText\"\n  role=\"progressbar\"\n  tabindex=\"0\"\n  [ngClass]=\"{\n    circle: appearance === 'circle',\n    progress: animation === 'progress',\n    'progress-dark': animation === 'progress-dark',\n    pulse: animation === 'pulse'\n  }\"\n  [ngStyle]=\"theme\"\n>\n</span>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".loader{background:#eff1f6 no-repeat;border-radius:4px;box-sizing:border-box;display:inline-block;height:20px;margin-bottom:10px;overflow:hidden;position:relative;width:100%;will-change:transform}.loader:after,.loader:before{box-sizing:border-box}.loader.circle{border-radius:50%;height:40px;margin:5px;width:40px}.loader.progress,.loader.progress-dark{transform:translateZ(0)}.loader.progress-dark:after,.loader.progress-dark:before,.loader.progress:after,.loader.progress:before{box-sizing:border-box}.loader.progress-dark:before,.loader.progress:before{-webkit-animation:progress 2s ease-in-out infinite;animation:progress 2s ease-in-out infinite;background-size:200px 100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:200px;z-index:1}.loader.progress:before{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0))}.loader.progress-dark:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse{-webkit-animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;-webkit-animation-delay:.5s;animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}@media (prefers-reduced-motion:reduce){.loader.progress,.loader.progress-dark,.loader.pulse{-webkit-animation:none;animation:none}.loader.progress,.loader.progress-dark{background-image:none}}@-webkit-keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    NgxSkeletonLoaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [NGX_SKELETON_LOADER_CONFIG,] }, { type: core.Optional }] }
    ]; };
    NgxSkeletonLoaderComponent.propDecorators = {
        count: [{ type: core.Input }],
        loadingText: [{ type: core.Input }],
        appearance: [{ type: core.Input }],
        animation: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }],
        theme: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        NgxSkeletonLoaderComponent.ngAcceptInputType_count;
        /** @type {?} */
        NgxSkeletonLoaderComponent.ngAcceptInputType_animation;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.count;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.loadingText;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.appearance;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.animation;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.ariaLabel;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.theme;
        /** @type {?} */
        NgxSkeletonLoaderComponent.prototype.items;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-skeletor-loader.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSkeletonLoaderModule = /** @class */ (function () {
        /**
         * @param {?=} parentModule
         */
        function NgxSkeletonLoaderModule(parentModule) {
            if (parentModule) {
                throw new Error("`NgxSkeletonLoaderModule` is already loaded and it might cause issues. To avoid that, import the module only once in your app.");
            }
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgxSkeletonLoaderModule.forRoot = function (config) {
            return {
                ngModule: NgxSkeletonLoaderModule,
                providers: [{ provide: NGX_SKELETON_LOADER_CONFIG, useValue: config }],
            };
        };
        return NgxSkeletonLoaderModule;
    }());
    NgxSkeletonLoaderModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NgxSkeletonLoaderComponent],
                    imports: [common.CommonModule],
                    exports: [NgxSkeletonLoaderComponent],
                },] }
    ];
    /** @nocollapse */
    NgxSkeletonLoaderModule.ctorParameters = function () { return [
        { type: NgxSkeletonLoaderModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
    ]; };

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-skeletor-loader.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGX_SKELETON_LOADER_CONFIG = NGX_SKELETON_LOADER_CONFIG;
    exports.NgxSkeletonLoaderComponent = NgxSkeletonLoaderComponent;
    exports.NgxSkeletonLoaderModule = NgxSkeletonLoaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-skeletor-loader.umd.js.map
