/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-skeletor-loader.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderComponent } from './ngx-skeletor-loader.component';
import { NGX_SKELETON_LOADER_CONFIG } from './ngx-skeletor-loader-config.types';
export class NgxSkeletonLoaderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNrZWxldG9uLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbGxtZW5kZXNuZXRvL1Byb2plY3RzL25neC1za2VsZXRvbi1sb2FkZXIvcHJvamVjdHMvbmd4LXNrZWxldG9uLWxvYWRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LXNrZWxldG9uLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQTJCLDBCQUEwQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPekcsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUNsQyxZQUFvQyxZQUFzQztRQUN4RSxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLGtJQUFrSSxDQUNuSSxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBeUM7UUFDdEQsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3ZFLENBQUM7SUFDSixDQUFDOzs7WUFuQkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3RDOzs7O1lBRW9ELHVCQUF1Qix1QkFBN0QsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ3hTa2VsZXRvbkxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXNrZWxldG9uLWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4U2tlbGV0b25Mb2FkZXJDb25maWcsIE5HWF9TS0VMRVRPTl9MT0FERVJfQ09ORklHIH0gZnJvbSAnLi9uZ3gtc2tlbGV0b24tbG9hZGVyLWNvbmZpZy50eXBlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neFNrZWxldG9uTG9hZGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOZ3hTa2VsZXRvbkxvYWRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neFNrZWxldG9uTG9hZGVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogTmd4U2tlbGV0b25Mb2FkZXJNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBcXGBOZ3hTa2VsZXRvbkxvYWRlck1vZHVsZVxcYCBpcyBhbHJlYWR5IGxvYWRlZCBhbmQgaXQgbWlnaHQgY2F1c2UgaXNzdWVzLiBUbyBhdm9pZCB0aGF0LCBpbXBvcnQgdGhlIG1vZHVsZSBvbmx5IG9uY2UgaW4geW91ciBhcHAuYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogUGFydGlhbDxOZ3hTa2VsZXRvbkxvYWRlckNvbmZpZz4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFNrZWxldG9uTG9hZGVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hTa2VsZXRvbkxvYWRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdYX1NLRUxFVE9OX0xPQURFUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19
