import{r as e,h as s}from"./p-9ac75b7d.js";import"./p-fe704386.js";import{G as l}from"./p-7518f8d9.js";import{l as a}from"./p-b03b50df.js";import{T as t}from"./p-fc89621a.js";import"./p-bd8b186e.js";import"./p-83f217d4.js";const o={en:{default:{Title:"Workflow Definitions",CreateButton:"Create Workflow"}},"nl-NL":{default:{Title:"Workflow Definities",CreateButton:"Nieuwe Workflow"}}},r=class{constructor(s){e(this,s)}async componentWillLoad(){this.i18next=await a(this.culture,o)}render(){const e=this.basePath,a=l(this.i18next);return s("div",null,s("div",{class:"elsa-border-b elsa-border-gray-200 elsa-px-4 elsa-py-4 sm:elsa-flex sm:elsa-items-center sm:elsa-justify-between sm:elsa-px-6 lg:elsa-px-8 elsa-bg-white"},s("div",{class:"elsa-flex-1 elsa-min-w-0"},s("h1",{class:"elsa-text-lg elsa-font-medium elsa-leading-6 elsa-text-gray-900 sm:elsa-truncate"},s(a,{label:"Title"}))),s("div",{class:"elsa-mt-4 elsa-flex sm:elsa-mt-0 sm:elsa-ml-4"},s("stencil-route-link",{url:`${e}/workflow-definitions/new`,class:"elsa-order-0 elsa-inline-flex elsa-items-center elsa-px-4 elsa-py-2 elsa-border elsa-border-transparent elsa-shadow-sm elsa-text-sm elsa-font-medium elsa-rounded-md elsa-text-white elsa-bg-blue-600 hover:elsa-bg-blue-700 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-order-1 sm:elsa-ml-3"},s(a,{label:"CreateButton"})))),s("elsa-workflow-definitions-list-screen",null))}};t.injectProps(r,["culture","basePath"]);export{r as elsa_studio_workflow_definitions_list};