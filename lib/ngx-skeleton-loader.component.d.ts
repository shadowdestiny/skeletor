import { OnInit, OnDestroy, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgxSkeletonLoaderConfig, NgxSkeletonLoaderConfigTheme } from './ngx-skeletor-loader-config.types';
import * as ɵngcc0 from '@angular/core';
export declare class NgxSkeletonLoaderComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    static ngAcceptInputType_count: number | string;
    static ngAcceptInputType_animation: boolean | string;
    count: NgxSkeletonLoaderConfig['count'];
    loadingText: NgxSkeletonLoaderConfig['loadingText'];
    appearance: NgxSkeletonLoaderConfig['appearance'];
    animation: NgxSkeletonLoaderConfig['animation'];
    ariaLabel: NgxSkeletonLoaderConfig['ariaLabel'];
    theme: NgxSkeletonLoaderConfigTheme;
    items: Array<any>;
    constructor(config?: NgxSkeletonLoaderConfig);
    ngOnInit(): void;
    private validateInputValues;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxSkeletonLoaderComponent, [{ optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgxSkeletonLoaderComponent, "ngx-skeletor-loader", never, { "appearance": "appearance"; "animation": "animation"; "theme": "theme"; "loadingText": "loadingText"; "count": "count"; "ariaLabel": "ariaLabel"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNrZWxldG9uLWxvYWRlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibmd4LXNrZWxldG9uLWxvYWRlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFNrZWxldG9uTG9hZGVyQ29uZmlnLCBOZ3hTa2VsZXRvbkxvYWRlckNvbmZpZ1RoZW1lIH0gZnJvbSAnLi9uZ3gtc2tlbGV0b24tbG9hZGVyLWNvbmZpZy50eXBlcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ3hTa2VsZXRvbkxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb3VudDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbmltYXRpb246IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgY291bnQ6IE5neFNrZWxldG9uTG9hZGVyQ29uZmlnWydjb3VudCddO1xuICAgIGxvYWRpbmdUZXh0OiBOZ3hTa2VsZXRvbkxvYWRlckNvbmZpZ1snbG9hZGluZ1RleHQnXTtcbiAgICBhcHBlYXJhbmNlOiBOZ3hTa2VsZXRvbkxvYWRlckNvbmZpZ1snYXBwZWFyYW5jZSddO1xuICAgIGFuaW1hdGlvbjogTmd4U2tlbGV0b25Mb2FkZXJDb25maWdbJ2FuaW1hdGlvbiddO1xuICAgIGFyaWFMYWJlbDogTmd4U2tlbGV0b25Mb2FkZXJDb25maWdbJ2FyaWFMYWJlbCddO1xuICAgIHRoZW1lOiBOZ3hTa2VsZXRvbkxvYWRlckNvbmZpZ1RoZW1lO1xuICAgIGl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IE5neFNrZWxldG9uTG9hZGVyQ29uZmlnKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgdmFsaWRhdGVJbnB1dFZhbHVlcztcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19