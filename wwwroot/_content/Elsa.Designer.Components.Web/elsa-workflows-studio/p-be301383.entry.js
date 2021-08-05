import{r as t,c as e,h as s,H as i}from"./p-9ac75b7d.js";import{a}from"./p-52f280e6.js";import{E as o}from"./p-80452beb.js";import{e as n}from"./p-adbb57a5.js";import{a as l}from"./p-f0c26962.js";import"./p-ab6c762d.js";import{s as r}from"./p-5afacdf3.js";import{T as c}from"./p-7fe465ee.js";import{T as h}from"./p-fc89621a.js";import{W as d}from"./p-dc36c952.js";import{r as u}from"./p-dfca8bd9.js";import{l as f}from"./p-b03b50df.js";import"./p-bd8b186e.js";import"./p-c912e9a0.js";import"./p-83f217d4.js";const p={en:{default:{Publishing:"Publishing...",Published:"Published",ActivityContextMenu:{Edit:"Edit",Delete:"Delete"}}},"nl-NL":{default:{Publishing:"Publiceren...",Published:"Gepubliceerd",ActivityContextMenu:{Edit:"Bewerken",Delete:"Verwijderen"}}}},w=class{constructor(i){t(this,i),this.workflowSaved=e(this,"workflowSaved",7),this.activityContextMenuState={shown:!1,x:0,y:0,activity:null},this.t=e=>this.i18next.t(e),this.onUpdateWorkflowSettings=async e=>{this.updateWorkflowDefinition(e),await this.saveWorkflowInternal(this.workflowModel)}}async getServerUrl(){return this.serverUrl}async getWorkflowDefinitionId(){return this.workflowDefinition.definitionId}async exportWorkflow(){const e=l(this.serverUrl),t=this.workflowDefinition,i={version:t.version},o=await e.workflowDefinitionsApi.export(t.definitionId,i);var s;s={contentType:"application/json",fileName:o.fileName},function(e,t){const i=document.createElement("a");i.href=e,i.download=null!=t.fileName?t.fileName:"",i.click(),i.remove()}(window.URL.createObjectURL(o.data),s)}async importWorkflow(e){const t=l(this.serverUrl);this.importing=!0,this.imported=!1,this.networkError=null;try{const i=await t.workflowDefinitionsApi.import(this.workflowDefinition.definitionId,e);this.workflowDefinition=i,this.workflowModel=this.mapWorkflowModel(i),this.importing=!1,this.imported=!0,setTimeout((()=>this.imported=!1),500),n.emit(o.WorkflowImported,this,this.workflowDefinition)}catch(e){console.error(e),this.importing=!1,this.imported=!1,this.networkError=e.message,setTimeout((()=>this.networkError=null),1e4)}}async workflowDefinitionIdChangedHandler(e){const t=e;let i=w.createWorkflowDefinition();i.definitionId=t;const o=l(this.serverUrl);if(t&&t.length>0)try{i=await o.workflowDefinitionsApi.getByDefinitionAndVersion(t,{isLatest:!0})}catch(e){console.warn("The specified workflow definition does not exist. Creating a new one.")}this.updateWorkflowDefinition(i)}async serverUrlChangedHandler(e){e&&e.length>0&&(await this.loadActivityDescriptors(),await this.loadWorkflowStorageDescriptors())}async monacoLibPathChangedHandler(e){r.monacoLibPath=e}async workflowChangedHandler(e){const t=e.detail;await this.saveWorkflowInternal(t)}async componentWillLoad(){this.i18next=await f(this.culture,p),await this.serverUrlChangedHandler(this.serverUrl),await this.workflowDefinitionIdChangedHandler(this.workflowDefinitionId),await this.monacoLibPathChangedHandler(this.monacoLibPath)}async componentDidLoad(){this.designer||(this.designer=this.el.querySelector("elsa-designer-tree"),this.designer.model=this.workflowModel)}connectedCallback(){n.on(o.UpdateWorkflowSettings,this.onUpdateWorkflowSettings)}disconnectedCallback(){n.detach(o.UpdateWorkflowSettings,this.onUpdateWorkflowSettings)}async loadActivityDescriptors(){const e=l(this.serverUrl);r.activityDescriptors=await e.activitiesApi.list()}async loadWorkflowStorageDescriptors(){const e=l(this.serverUrl);r.workflowStorageDescriptors=await e.workflowStorageProvidersApi.list()}updateWorkflowDefinition(e){this.workflowDefinition=e,this.workflowModel=this.mapWorkflowModel(e)}async publishWorkflow(){this.publishing=!0,await this.saveWorkflow(!0),this.publishing=!1,n.emit(o.WorkflowPublished,this,this.workflowDefinition)}async unPublishWorkflow(){this.unPublishing=!0,await this.unpublishWorkflow(),this.unPublishing=!1,n.emit(o.WorkflowRetracted,this,this.workflowDefinition)}async saveWorkflow(e){await this.saveWorkflowInternal(null,e)}async saveWorkflowInternal(e,t){if(!this.serverUrl||0==this.serverUrl.length)return;e=e||this.workflowModel;const i=l(this.serverUrl);let o=this.workflowDefinition;const s={workflowDefinitionId:o.definitionId||this.workflowDefinitionId,contextOptions:o.contextOptions,deleteCompletedInstances:o.deleteCompletedInstances,description:o.description,displayName:o.displayName,isSingleton:o.isSingleton,name:o.name,tag:o.tag,channel:o.channel,persistenceBehavior:o.persistenceBehavior,publish:t||!1,variables:o.variables,activities:e.activities.map((e=>({activityId:e.activityId,type:e.type,name:e.name,displayName:e.displayName,description:e.description,persistWorkflow:e.persistWorkflow,loadWorkflowContext:e.loadWorkflowContext,saveWorkflowContext:e.saveWorkflowContext,properties:e.properties,propertyStorageProviders:e.propertyStorageProviders}))),connections:e.connections.map((e=>({sourceActivityId:e.sourceId,targetActivityId:e.targetId,outcome:e.outcome})))};this.saving=!t,this.publishing=t;try{console.debug("Saving workflow..."),o=await i.workflowDefinitionsApi.save(s),this.workflowDefinition=o,this.workflowModel=this.mapWorkflowModel(o),this.saving=!1,this.saved=!t,this.publishing=!1,setTimeout((()=>this.saved=!1),500),this.workflowSaved.emit(o)}catch(e){console.error(e),this.saving=!1,this.saved=!1,this.networkError=e.message,setTimeout((()=>this.networkError=null),1e4)}}async unpublishWorkflow(){const e=l(this.serverUrl),t=this.workflowDefinition.definitionId;this.unPublishing=!0;try{this.workflowDefinition=await e.workflowDefinitionsApi.retract(t),this.unPublishing=!1,this.unPublished=!0,setTimeout((()=>this.unPublished=!1),500)}catch(e){console.error(e),this.unPublishing=!1,this.unPublished=!1,this.networkError=e.message,setTimeout((()=>this.networkError=null),2e3)}}mapWorkflowModel(e){return{activities:e.activities.map(this.mapActivityModel),connections:e.connections.map(this.mapConnectionModel),persistenceBehavior:e.persistenceBehavior}}mapActivityModel(e){const t=r.activityDescriptors.find((t=>t.type==e.type));return{activityId:e.activityId,description:e.description,displayName:e.displayName,name:e.name,type:e.type,properties:e.properties,outcomes:[...t?t.outcomes:["Done"]],persistWorkflow:e.persistWorkflow,saveWorkflowContext:e.saveWorkflowContext,loadWorkflowContext:e.loadWorkflowContext,propertyStorageProviders:e.propertyStorageProviders}}mapConnectionModel(e){return{sourceId:e.sourceActivityId,targetId:e.targetActivityId,outcome:e.outcome}}handleContextMenuChange(e){this.activityContextMenuState=e}onShowWorkflowSettingsClick(){n.emit(o.ShowWorkflowSettings)}async onPublishClicked(){await this.publishWorkflow()}async onUnPublishClicked(){await this.unPublishWorkflow()}async onExportClicked(){await this.exportWorkflow()}async onImportClicked(e){await this.importWorkflow(e)}async onDeleteActivityClick(e){e.preventDefault(),await this.designer.removeActivity(this.activityContextMenuState.activity),this.handleContextMenuChange({x:0,y:0,shown:!1,activity:null})}async onEditActivityClick(e){e.preventDefault(),await this.designer.showActivityEditor(this.activityContextMenuState.activity,!0),this.handleContextMenuChange({x:0,y:0,shown:!1,activity:null})}onActivityContextMenuButtonClicked(e){this.activityContextMenuState=e.detail}render(){return s(i,{class:"elsa-flex elsa-flex-col elsa-w-full",ref:e=>this.el=e},s(c.Provider,{state:{serverUrl:this.serverUrl,workflowDefinitionId:this.workflowDefinition.definitionId}},this.renderCanvas(),this.renderActivityPicker(),this.renderActivityEditor()))}renderCanvas(){return s("div",{class:"elsa-flex-1 elsa-flex elsa-relative"},s("elsa-designer-tree",{model:this.workflowModel,mode:d.Edit,activityContextMenuButton:()=>'<div class="context-menu-wrapper elsa-flex-shrink-0">\n            <button aria-haspopup="true"\n                    class="elsa-w-8 elsa-h-8 elsa-inline-flex elsa-items-center elsa-justify-center elsa-text-gray-400 elsa-rounded-full elsa-bg-transparent hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-text-gray-500 focus:elsa-bg-gray-100 elsa-transition elsa-ease-in-out elsa-duration-150">\n              <svg class="elsa-h-6 elsa-w-6 elsa-text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"\n                   stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                <path stroke="none" d="M0 0h24v24H0z"/>\n                <circle cx="5" cy="12" r="1"/>\n                <circle cx="12" cy="12" r="1"/>\n                <circle cx="19" cy="12" r="1"/>\n              </svg>\n            </button>\n          </div>',onActivityContextMenuButtonClicked:e=>this.onActivityContextMenuButtonClicked(e),activityContextMenu:this.activityContextMenuState,enableMultipleConnectionsFromSingleSource:!1,class:"elsa-flex-1",ref:e=>this.designer=e}),this.renderWorkflowSettingsButton(),this.renderActivityContextMenu(),s("elsa-workflow-settings-modal",{workflowDefinition:this.workflowDefinition}),s("elsa-workflow-definition-editor-notifications",null),s("div",{class:"elsa-fixed elsa-bottom-10 elsa-right-12"},s("div",{class:"elsa-flex elsa-items-center elsa-space-x-4"},this.renderSavingIndicator(),this.renderNetworkError(),this.renderPublishButton())))}renderActivityContextMenu(){const e=this.t;return s("div",{"data-transition-enter":"elsa-transition elsa-ease-out elsa-duration-100","data-transition-enter-start":"elsa-transform elsa-opacity-0 elsa-scale-95","data-transition-enter-end":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave":"elsa-transition elsa-ease-in elsa-duration-75","data-transition-leave-start":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave-end":"elsa-transform elsa-opacity-0 elsa-scale-95",class:(this.activityContextMenuState.shown?"":"hidden")+" context-menu elsa-z-10 elsa-mx-3 elsa-w-48 elsa-mt-1 elsa-rounded-md elsa-shadow-lg elsa-absolute",style:{left:`${this.activityContextMenuState.x}px`,top:this.activityContextMenuState.y-64+"px"},ref:e=>u(this,e,(()=>{this.handleContextMenuChange({x:0,y:0,shown:!1,activity:null})}))},s("div",{class:"elsa-rounded-md elsa-bg-white elsa-shadow-xs",role:"menu","aria-orientation":"vertical","aria-labelledby":"pinned-project-options-menu-0"},s("div",{class:"elsa-py-1"},s("a",{onClick:e=>this.onEditActivityClick(e),href:"#",class:"elsa-block elsa-px-4 elsa-py-2 elsa-text-sm elsa-leading-5 elsa-text-gray-700 hover:elsa-bg-gray-100 hover:elsa-text-gray-900 focus:elsa-outline-none focus:elsa-bg-gray-100 focus:elsa-text-gray-900",role:"menuitem"},e("ActivityContextMenu.Edit"))),s("div",{class:"elsa-border-t elsa-border-gray-100"}),s("div",{class:"elsa-py-1"},s("a",{onClick:e=>this.onDeleteActivityClick(e),href:"#",class:"elsa-block elsa-px-4 elsa-py-2 elsa-text-sm elsa-leading-5 elsa-text-gray-700 hover:elsa-bg-gray-100 hover:elsa-text-gray-900 focus:elsa-outline-none focus:elsa-bg-gray-100 focus:elsa-text-gray-900",role:"menuitem"},e("ActivityContextMenu.Delete")))))}renderActivityPicker(){return s("elsa-activity-picker-modal",null)}renderActivityEditor(){return s("elsa-activity-editor-modal",{culture:this.culture})}renderWorkflowSettingsButton(){return s("button",{onClick:()=>this.onShowWorkflowSettingsClick(),type:"button",class:"workflow-settings-button elsa-fixed elsa-top-20 elsa-right-12 elsa-inline-flex elsa-items-center elsa-p-2 elsa-rounded-full elsa-border elsa-border-transparent elsa-bg-white shadow elsa-text-gray-400 hover:elsa-text-blue-500 focus:elsa-text-blue-500 hover:elsa-ring-2 hover:elsa-ring-offset-2 hover:elsa-ring-blue-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",class:"elsa-h-8 elsa-w-8"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})))}renderWorkflowSettingsModal(){}renderSavingIndicator(){if(this.publishing)return;const e=this.t,t=this.unPublishing?e("Unpublishing..."):this.unPublished?e("Unpublished"):this.saving?"Saving...":this.saved?"Saved":this.importing?"Importing...":this.imported?"Imported":null;return t?s("div",null,s("span",{class:"elsa-text-gray-400 elsa-text-sm"},t)):void 0}renderNetworkError(){if(this.networkError)return s("div",null,s("span",{class:"elsa-text-rose-400 elsa-text-sm"},"An error occurred: ",this.networkError))}renderPublishButton(){return s("elsa-workflow-publish-button",{publishing:this.publishing,workflowDefinition:this.workflowDefinition,onPublishClicked:()=>this.onPublishClicked(),onUnPublishClicked:()=>this.onUnPublishClicked(),onExportClicked:()=>this.onExportClicked(),onImportClicked:e=>this.onImportClicked(e.detail),culture:this.culture})}static createWorkflowDefinition(){return{definitionId:null,version:1,activities:[],connections:[],persistenceBehavior:a.WorkflowBurst}}static get watchers(){return{workflowDefinitionId:["workflowDefinitionIdChangedHandler"],serverUrl:["serverUrlChangedHandler"],monacoLibPath:["monacoLibPathChangedHandler"]}}};h.injectProps(w,["serverUrl","culture","monacoLibPath"]);export{w as elsa_workflow_definition_editor_screen};