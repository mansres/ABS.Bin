import{r as i,h as o}from"./p-9ac75b7d.js";const e=class{constructor(o){i(this,o)}componentWillLoad(){let i=this.match.params.id;i&&"new"==i.toLowerCase()&&(i=null),this.id=i}render(){return o("div",null,o("elsa-webhook-definition-editor-screen",{"webhook-definition-id":this.id}))}};export{e as elsa_studio_webhook_definitions_edit};