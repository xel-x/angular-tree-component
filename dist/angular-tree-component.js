var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular/dist/lib/mobx-angular';
import { TREE_ACTIONS } from './models/tree-options.model';
import { KEYS } from './constants/keys';
import { TreeModel } from './models/tree.model';
import { TreeNode } from './models/tree-node.model';
import { TreeDraggedElement } from './models/tree-dragged-element.model';
import { TreeVirtualScroll } from './models/tree-virtual-scroll.model';
import { LoadingComponent } from './components/loading.component';
import { TreeComponent } from './components/tree.component';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeContent } from './components/tree-node-content.component';
import { TreeNodeDropSlot } from './components/tree-node-drop-slot.component';
import { TreeNodeExpanderComponent } from './components/tree-node-expander.component';
import { TreeNodeChildrenComponent } from './components/tree-node-children.component';
import { TreeNodeCollectionComponent } from './components/tree-node-collection.component';
import { TreeNodeWrapperComponent } from './components/tree-node-wrapper.component';
import { TreeViewportComponent } from './components/tree-viewport.component';
import { TreeNodeCheckboxComponent } from './components/tree-node-checkbox.component';
import { TreeDropDirective } from './directives/tree-drop.directive';
import { TreeDragDirective } from './directives/tree-drag.directive';
import { TreeAnimateOpenDirective } from './directives/tree-animate-open.directive';
import './polyfills';
var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule_1 = TreeModule;
    TreeModule.forRoot = function () {
        return {
            ngModule: TreeModule_1,
            providers: [TreeDraggedElement]
        };
    };
    var TreeModule_1;
    TreeModule = TreeModule_1 = __decorate([
        NgModule({
            declarations: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeNodeCheckboxComponent,
                TreeAnimateOpenDirective
            ],
            exports: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeNodeCheckboxComponent,
                TreeAnimateOpenDirective
            ],
            imports: [
                CommonModule,
                MobxAngularModule
            ],
            providers: []
        })
    ], TreeModule);
    return TreeModule;
}());
export { TreeModule };
export { TreeModel, TreeNode, TreeDraggedElement, TreeVirtualScroll, TREE_ACTIONS, KEYS, LoadingComponent, TreeAnimateOpenDirective, TreeComponent, TreeNodeComponent, TreeNodeWrapperComponent, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent, TreeNodeCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9hbmd1bGFyLXRyZWUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RSxPQUFPLEVBQWtDLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTNGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEYsT0FBTyxhQUFhLENBQUM7QUF5Q3JCO0lBQUE7SUFPQSxDQUFDO21CQVBZLFVBQVU7SUFDZCxrQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDLENBQUM7SUFDSixDQUFDOztJQU5VLFVBQVU7UUF2Q3RCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsZ0JBQWdCO2dCQUNoQiwyQkFBMkI7Z0JBQzNCLHFCQUFxQjtnQkFDckIsd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBQ3pCLHdCQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsZ0JBQWdCO2dCQUNoQiwyQkFBMkI7Z0JBQzNCLHFCQUFxQjtnQkFDckIsd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBQ3pCLHdCQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztPQUNXLFVBQVUsQ0FPdEI7SUFBRCxpQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLFVBQVU7QUFTdkIsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUVqQixZQUFZLEVBQ1osSUFBSSxFQUtKLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsYUFBYSxFQUNiLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUN6QixnQkFBZ0IsRUFDaEIsMkJBQTJCLEVBQzNCLHFCQUFxQixFQUNyQix5QkFBeUIsRUFFMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9ieEFuZ3VsYXJNb2R1bGUgfSBmcm9tICdtb2J4LWFuZ3VsYXIvZGlzdC9saWIvbW9ieC1hbmd1bGFyJztcblxuaW1wb3J0IHsgSUFjdGlvbkhhbmRsZXIsIElBY3Rpb25NYXBwaW5nLCBUUkVFX0FDVElPTlMgfSBmcm9tICcuL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgSUFsbG93RHJhZ0ZuLCBJQWxsb3dEcm9wRm4sIElUcmVlT3B0aW9ucywgSVRyZWVTdGF0ZSB9IGZyb20gJy4vZGVmcy9hcGknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4vbW9kZWxzL3RyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVWaWV3cG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJlZS1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmVlRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWFuaW1hdGUtb3Blbi5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNvbnRlbnQsXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICBUcmVlRHJvcERpcmVjdGl2ZSxcbiAgICBUcmVlRHJhZ0RpcmVjdGl2ZSxcbiAgICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQsXG4gICAgVHJlZU5vZGVEcm9wU2xvdCxcbiAgICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgVHJlZVZpZXdwb3J0Q29tcG9uZW50LFxuICAgIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50LFxuICAgIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNvbnRlbnQsXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICBUcmVlRHJvcERpcmVjdGl2ZSxcbiAgICBUcmVlRHJhZ0RpcmVjdGl2ZSxcbiAgICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQsXG4gICAgVHJlZU5vZGVEcm9wU2xvdCxcbiAgICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgVHJlZVZpZXdwb3J0Q29tcG9uZW50LFxuICAgIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50LFxuICAgIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1vYnhBbmd1bGFyTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJlZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RyZWVEcmFnZ2VkRWxlbWVudF1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRyZWVNb2RlbCxcbiAgVHJlZU5vZGUsXG4gIFRyZWVEcmFnZ2VkRWxlbWVudCxcbiAgVHJlZVZpcnR1YWxTY3JvbGwsXG4gIElUcmVlT3B0aW9ucyxcbiAgVFJFRV9BQ1RJT05TLFxuICBLRVlTLFxuICBJQWN0aW9uTWFwcGluZyxcbiAgSUFjdGlvbkhhbmRsZXIsXG4gIElBbGxvd0Ryb3BGbixcbiAgSUFsbG93RHJhZ0ZuLFxuICBMb2FkaW5nQ29tcG9uZW50LFxuICBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmUsXG4gIFRyZWVDb21wb25lbnQsXG4gIFRyZWVOb2RlQ29tcG9uZW50LFxuICBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQsXG4gIFRyZWVOb2RlQ29udGVudCxcbiAgVHJlZURyb3BEaXJlY3RpdmUsXG4gIFRyZWVEcmFnRGlyZWN0aXZlLFxuICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxuICBUcmVlTm9kZURyb3BTbG90LFxuICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXG4gIFRyZWVWaWV3cG9ydENvbXBvbmVudCxcbiAgVHJlZU5vZGVDaGVja2JveENvbXBvbmVudCxcbiAgSVRyZWVTdGF0ZVxufTtcbiJdfQ==