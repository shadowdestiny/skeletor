import { InjectionToken, isDevMode, Component, ChangeDetectionStrategy, Inject, Optional, Input, NgModule, SkipSelf } from '@angular/core';
import { start, end } from 'perf-marks/marks';
import { CommonModule } from '@angular/common';

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
const NGX_SKELETON_LOADER_CONFIG = new InjectionToken('ngx-skeletor-loader.config');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-skeletor-loader.component.ts
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
NgxSkeletonLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-skeletor-loader',
                template: "<span\n  *ngFor=\"let item of items\"\n  class=\"loader\"\n  [attr.aria-label]=\"ariaLabel\"\n  aria-busy=\"true\"\n  aria-valuemin=\"0\"\n  aria-valuemax=\"100\"\n  [attr.aria-valuetext]=\"loadingText\"\n  role=\"progressbar\"\n  tabindex=\"0\"\n  [ngClass]=\"{\n    circle: appearance === 'circle',\n    progress: animation === 'progress',\n    'progress-dark': animation === 'progress-dark',\n    pulse: animation === 'pulse'\n  }\"\n  [ngStyle]=\"theme\"\n>\n</span>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".loader{background:#eff1f6 no-repeat;border-radius:4px;box-sizing:border-box;display:inline-block;height:20px;margin-bottom:10px;overflow:hidden;position:relative;width:100%;will-change:transform}.loader:after,.loader:before{box-sizing:border-box}.loader.circle{border-radius:50%;height:40px;margin:5px;width:40px}.loader.progress,.loader.progress-dark{transform:translateZ(0)}.loader.progress-dark:after,.loader.progress-dark:before,.loader.progress:after,.loader.progress:before{box-sizing:border-box}.loader.progress-dark:before,.loader.progress:before{-webkit-animation:progress 2s ease-in-out infinite;animation:progress 2s ease-in-out infinite;background-size:200px 100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:200px;z-index:1}.loader.progress:before{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0))}.loader.progress-dark:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse{-webkit-animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;-webkit-animation-delay:.5s;animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}@media (prefers-reduced-motion:reduce){.loader.progress,.loader.progress-dark,.loader.pulse{-webkit-animation:none;animation:none}.loader.progress,.loader.progress-dark{background-image:none}}@-webkit-keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}"]
            }] }
];
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
NgxSkeletonLoaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxSkeletonLoaderComponent],
                imports: [CommonModule],
                exports: [NgxSkeletonLoaderComponent],
            },] }
];
/** @nocollapse */
NgxSkeletonLoaderModule.ctorParameters = () => [
    { type: NgxSkeletonLoaderModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

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

export { NGX_SKELETON_LOADER_CONFIG, NgxSkeletonLoaderComponent, NgxSkeletonLoaderModule };
//# sourceMappingURL=ngx-skeletor-loader.js.map
