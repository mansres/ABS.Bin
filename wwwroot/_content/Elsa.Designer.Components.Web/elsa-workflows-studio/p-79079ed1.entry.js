import{r as e,h as t,H as s}from"./p-9ac75b7d.js";import{c as r}from"./p-c912e9a0.js";import{a as o,S as i}from"./p-52f280e6.js";import{a}from"./p-f0c26962.js";import{s as n}from"./p-5afacdf3.js";import{W as l}from"./p-dc36c952.js";import{T as c}from"./p-fc89621a.js";import"./p-bd8b186e.js";import"./p-80452beb.js";import"./p-adbb57a5.js";import"./p-83f217d4.js";const p=class{constructor(t){e(this,t)}async getServerUrl(){return this.serverUrl}async workflowDefinitionIdChangedHandler(e){const t=e;let r={id:null,version:1,activities:[],connections:[],persistenceBehavior:o.WorkflowBurst,customAttributes:{data:{}},persistWorkflow:!1,isLatest:!1,isPublished:!1,loadWorkflowContext:!1,isSingleton:!1,saveWorkflowContext:!1,variables:{data:{}},type:null,inputProperties:{data:{}},outputProperties:{data:{}},propertyStorageProviders:{}};const s=a(this.serverUrl);if(t&&t.length>0)try{r=await s.workflowRegistryApi.get(t,{isLatest:!0})}catch(e){console.warn("The specified workflow blueprint does not exist. Creating a new one.")}this.updateModels(r)}async serverUrlChangedHandler(e){e&&e.length>0&&await this.loadActivityDescriptors()}async componentWillLoad(){await this.serverUrlChangedHandler(this.serverUrl),await this.workflowDefinitionIdChangedHandler(this.workflowDefinitionId)}componentDidLoad(){this.designer||(this.designer=this.el.querySelector("elsa-designer-tree"),this.designer.model=this.workflowModel)}async loadActivityDescriptors(){const e=a(this.serverUrl);n.activityDescriptors=await e.activitiesApi.list()}updateModels(e){this.workflowBlueprint=e,this.workflowModel=this.mapWorkflowModel(e)}mapWorkflowModel(e){return{activities:e.activities.filter((t=>t.parentId==e.id||!t.parentId)).map(this.mapActivityModel),connections:e.connections.map(this.mapConnectionModel),persistenceBehavior:e.persistenceBehavior}}mapActivityModel(e){const t=n.activityDescriptors.find((t=>t.type==e.type)),o=r.map(e.inputProperties.data,((e,r)=>{const o=t.inputProperties.find((e=>e.name==r)).defaultSyntax||i.Literal,s={};return s[o]=e,{name:r,expressions:s,syntax:o}}));return{activityId:e.id,description:e.description,displayName:e.displayName||e.name||e.type,name:e.name,type:e.type,properties:o,outcomes:[...t.outcomes],persistWorkflow:e.persistWorkflow,saveWorkflowContext:e.saveWorkflowContext,loadWorkflowContext:e.loadWorkflowContext,propertyStorageProviders:e.propertyStorageProviders}}mapConnectionModel(e){return{sourceId:e.sourceActivityId,targetId:e.targetActivityId,outcome:e.outcome}}render(){return t(s,{class:"elsa-flex elsa-flex-col elsa-w-full elsa-relative",ref:e=>this.el=e},this.renderCanvas())}renderCanvas(){return t("div",{class:"elsa-flex-1 elsa-flex"},t("elsa-designer-tree",{model:this.workflowModel,class:"elsa-flex-1",ref:e=>this.designer=e,mode:l.Blueprint}))}static get watchers(){return{workflowDefinitionId:["workflowDefinitionIdChangedHandler"],serverUrl:["serverUrlChangedHandler"]}}};c.injectProps(p,["serverUrl","culture"]);export{p as elsa_workflow_blueprint_viewer_screen};