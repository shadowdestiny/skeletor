import { InjectionToken, isDevMode, Component, ChangeDetectionStrategy, Inject, Optional, Input, NgModule, SkipSelf } from '@angular/core';
import { start, end } from 'perf-marks/marks';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-skeleton-loader-config.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0, a1, a2, a3) { return { circle: a0, progress: a1, "progress-dark": a2, pulse: a3 }; };
function NgxSkeletonLoaderComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c0, ctx_r0.appearance === "circle", ctx_r0.animation === "progress", ctx_r0.animation === "progress-dark", ctx_r0.animation === "pulse"))("ngStyle", ctx_r0.theme);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r0.ariaLabel)("aria-valuetext", ctx_r0.loadingText);
} }
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
const NGX_SKELETON_LOADER_CONFIG = new InjectionToken('ngx-skeleton-loader.config');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-skeleton-loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSkeletonLoaderComponent {
    /**
     * @param {?=} config
     */
    constructor(config) {
        const { appearance = 'line', animation = 'progress', theme = null, loadingText = 'Loading...', count = 1, ariaLabel = 'loading', } = config || {};
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
    ngOnInit() {
        start('NgxSkeletonLoader:Rendered');
        start('NgxSkeletonLoader:Loaded');
        this.validateInputValues();
    }
    /**
     * @private
     * @return {?}
     */
    validateInputValues() {
        // Checking if it's receiving a numeric value (string having ONLY numbers or if it's a number)
        if (!/^\d+$/.test(`${this.count}`)) {
            // Shows error message only in Development
            if (isDevMode()) {
                console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'count' a numeric value. Forcing default to "1".`);
            }
            this.count = 1;
        }
        this.items.length = this.count;
        /** @type {?} */
        const allowedAnimations = ['progress', 'progress-dark', 'pulse', 'false'];
        if (allowedAnimations.indexOf(String(this.animation)) === -1) {
            // Shows error message only in Development
            if (isDevMode()) {
                console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${allowedAnimations.join(', ')}. Forcing default to "progress".`);
            }
            this.animation = 'progress';
        }
        if (['circle', 'line', ''].indexOf(String(this.appearance)) === -1) {
            // Shows error message only in Development
            if (isDevMode()) {
                console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'appearance' as: circle or line or empty string. Forcing default to "''".`);
            }
            this.appearance = '';
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Avoiding multiple calls for the same input in case there's no changes in the fields
        // Checking if the fields that require validation are available and if they were changed
        // In case were not changed, we stop the function. Otherwise, `validateInputValues` will be called.
        if (['count', 'animation', 'appearance'].find((/**
         * @param {?} key
         * @return {?}
         */
        key => changes[key] && (changes[key].isFirstChange() || changes[key].previousValue === changes[key].currentValue)))) {
            return;
        }
        this.validateInputValues();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        end('NgxSkeletonLoader:Rendered');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        end('NgxSkeletonLoader:Loaded');
    }
}
NgxSkeletonLoaderComponent.ɵfac = function NgxSkeletonLoaderComponent_Factory(t) { return new (t || NgxSkeletonLoaderComponent)(ɵngcc0.ɵɵdirectiveInject(NGX_SKELETON_LOADER_CONFIG, 8)); };
NgxSkeletonLoaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxSkeletonLoaderComponent, selectors: [["ngx-skeleton-loader"]], inputs: { appearance: "appearance", animation: "animation", theme: "theme", loadingText: "loadingText", count: "count", ariaLabel: "ariaLabel" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "loader", "aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "0", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], ["aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "0", 1, "loader", 3, "ngClass", "ngStyle"]], template: function NgxSkeletonLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxSkeletonLoaderComponent_span_0_Template, 1, 9, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".loader[_ngcontent-%COMP%]{background:#eff1f6 no-repeat;border-radius:4px;box-sizing:border-box;display:inline-block;height:20px;margin-bottom:10px;overflow:hidden;position:relative;width:100%;will-change:transform}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.loader.circle[_ngcontent-%COMP%]{border-radius:50%;height:40px;margin:5px;width:40px}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.loader.progress-dark[_ngcontent-%COMP%]:after, .loader.progress-dark[_ngcontent-%COMP%]:before, .loader.progress[_ngcontent-%COMP%]:after, .loader.progress[_ngcontent-%COMP%]:before{box-sizing:border-box}.loader.progress-dark[_ngcontent-%COMP%]:before, .loader.progress[_ngcontent-%COMP%]:before{-webkit-animation:progress 2s ease-in-out infinite;animation:progress 2s ease-in-out infinite;background-size:200px 100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:200px;z-index:1}.loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0))}.loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse[_ngcontent-%COMP%]{-webkit-animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;-webkit-animation-delay:.5s;animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}@media (prefers-reduced-motion:reduce){.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%], .loader.pulse[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{background-image:none}}@-webkit-keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}"], changeDetection: 0 });
/** @nocollapse */
NgxSkeletonLoaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGX_SKELETON_LOADER_CONFIG,] }, { type: Optional }] }
];
NgxSkeletonLoaderComponent.propDecorators = {
    count: [{ type: Input }],
    loadingText: [{ type: Input }],
    appearance: [{ type: Input }],
    animation: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    theme: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxSkeletonLoaderComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-skeleton-loader',
                template: "<span\n  *ngFor=\"let item of items\"\n  class=\"loader\"\n  [attr.aria-label]=\"ariaLabel\"\n  aria-busy=\"true\"\n  aria-valuemin=\"0\"\n  aria-valuemax=\"100\"\n  [attr.aria-valuetext]=\"loadingText\"\n  role=\"progressbar\"\n  tabindex=\"0\"\n  [ngClass]=\"{\n    circle: appearance === 'circle',\n    progress: animation === 'progress',\n    'progress-dark': animation === 'progress-dark',\n    pulse: animation === 'pulse'\n  }\"\n  [ngStyle]=\"theme\"\n>\n</span>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".loader{background:#eff1f6 no-repeat;border-radius:4px;box-sizing:border-box;display:inline-block;height:20px;margin-bottom:10px;overflow:hidden;position:relative;width:100%;will-change:transform}.loader:after,.loader:before{box-sizing:border-box}.loader.circle{border-radius:50%;height:40px;margin:5px;width:40px}.loader.progress,.loader.progress-dark{transform:translateZ(0)}.loader.progress-dark:after,.loader.progress-dark:before,.loader.progress:after,.loader.progress:before{box-sizing:border-box}.loader.progress-dark:before,.loader.progress:before{-webkit-animation:progress 2s ease-in-out infinite;animation:progress 2s ease-in-out infinite;background-size:200px 100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:200px;z-index:1}.loader.progress:before{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0))}.loader.progress-dark:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse{-webkit-animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;-webkit-animation-delay:.5s;animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}@media (prefers-reduced-motion:reduce){.loader.progress,.loader.progress-dark,.loader.pulse{-webkit-animation:none;animation:none}.loader.progress,.loader.progress-dark{background-image:none}}@-webkit-keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NGX_SKELETON_LOADER_CONFIG]
            }, {
                type: Optional
            }] }]; }, { appearance: [{
            type: Input
        }], animation: [{
            type: Input
        }], theme: [{
            type: Input
        }], loadingText: [{
            type: Input
        }], count: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }] }); })();
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
 * Generated from: lib/ngx-skeleton-loader.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSkeletonLoaderModule {
    /**
     * @param {?=} parentModule
     */
    constructor(parentModule) {
        console.log(parentModule, "mi error");
        if (parentModule) {
            throw new Error(`\`NgxSkeletonLoaderModule\` is already loaded and it might cause issues. To avoid that, import the module only once in your app.`);
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgxSkeletonLoaderModule,
            providers: [{ provide: NGX_SKELETON_LOADER_CONFIG, useValue: config }],
        };
    }
}
NgxSkeletonLoaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxSkeletonLoaderModule });
NgxSkeletonLoaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxSkeletonLoaderModule_Factory(t) { return new (t || NgxSkeletonLoaderModule)(ɵngcc0.ɵɵinject(NgxSkeletonLoaderModule, 12)); }, imports: [[CommonModule]] });
/** @nocollapse */
NgxSkeletonLoaderModule.ctorParameters = () => [
    { type: NgxSkeletonLoaderModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxSkeletonLoaderModule, { declarations: function () { return [NgxSkeletonLoaderComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgxSkeletonLoaderComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxSkeletonLoaderModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxSkeletonLoaderComponent],
                imports: [CommonModule],
                exports: [NgxSkeletonLoaderComponent]
            }]
    }], function () { return [{ type: NgxSkeletonLoaderModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-skeleton-loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NGX_SKELETON_LOADER_CONFIG, NgxSkeletonLoaderComponent, NgxSkeletonLoaderModule };

//# sourceMappingURL=ngx-skeleton-loader.js.map
