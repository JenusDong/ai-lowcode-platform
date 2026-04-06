"use strict";var PluginEcharts=(()=>{var W=Object.create;var x=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var v=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports),ee=(o,s)=>{for(var e in s)x(o,e,{get:s[e],enumerable:!0})},J=(o,s,e,a)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of X(s))!Z.call(o,t)&&t!==e&&x(o,t,{get:()=>s[t],enumerable:!(a=Q(s,t))||a.enumerable});return o};var u=(o,s,e)=>(e=o!=null?W(Y(o)):{},J(s||!o||!o.__esModule?x(e,"default",{value:o,enumerable:!0}):e,o)),te=o=>J(x({},"__esModule",{value:!0}),o);var g=v((pe,w)=>{w.exports=Object.assign(window.React,{jsx:window.React.createElement,jsxs:window.React.createElement,Fragment:window.React.Fragment})});var P=v((ce,k)=>{k.exports=window.ReactECharts});var E=v((fe,T)=>{T.exports=window.echarts});var de={};ee(de,{DataEditorSetter:()=>R,EChartsArea:()=>_,EChartsBar:()=>U,EChartsBase:()=>h,EChartsFunnel:()=>H,EChartsGauge:()=>K,EChartsLine:()=>B,EChartsPie:()=>L,EChartsRadar:()=>G,EChartsScatter:()=>$,JSONPathSetter:()=>F,default:()=>se});var b=u(g());var V=u(P()),ae=u(E()),D=u(g()),h=({option:o={},style:s={height:"400px",width:"100%"},className:e,theme:a,notMerge:t=!1,lazyUpdate:r=!0,showLoading:d=!1,loadingOption:i,onChartReady:l,onClick:c})=>(0,D.jsx)(V.default,{echarts:ae,option:o,style:s,className:e,theme:a,notMerge:t,lazyUpdate:r,showLoading:d,loadingOption:i,onChartReady:l,onEvents:c?{click:c}:void 0});var A=u(g()),n=u(g());function oe(o){let s=[],e=o.split(".");for(let a of e){if(a==="")continue;let t=parseInt(a,10);s.push(isNaN(t)?a:t)}return s}function ne(o,s){let e=oe(s),a=o;for(let t of e){if(a==null)return;a=a[t]}return a}function S(o,s){if(!Array.isArray(s)||s.length===0)return;let e=s[0];(!o.series||!Array.isArray(o.series)||o.series.length===0)&&(e.xValue!==void 0&&e.yValue!==void 0?o.series=[{type:"scatter",data:[]}]:o.series=[{type:"line",data:[]}]);let a=o.series[0].type;if(a==="pie")o.series[0].data=s.map(t=>({name:t.name,value:t.value}));else if(a==="scatter")o.series[0].data=s.map(t=>[t.xValue,t.yValue]);else{let t=s.map(d=>d.name);if(o.xAxis?o.xAxis.data=t:o.xAxis={type:"category",data:t},o.yAxis||(o.yAxis={type:"value"}),o.series.length>1)for(let d=0;d<o.series.length;d++){let i=`value${d+1}`;e[i]!==void 0&&(o.series[d].data=s.map(l=>l[i]))}else e.value!==void 0&&(o.series[0].data=s.map(d=>d.value))}}var N={mode:"static",url:"",method:"GET",headers:'{"Content-Type":"application/json"}',body:"{}",dataPath:"data.list",refreshInterval:0,enabled:!0},C=class extends A.Component{constructor(e){super(e);this.refreshTimer=null;this.getOptionJson=()=>{let{field:e,value:a}=this.props;if(e&&typeof e.getPropValue=="function")try{let t=e.getPropValue("optionJson");if(t)return t}catch{}if(e&&typeof e.node=="object")try{if(typeof e.node.getPropValue=="function"){let r=e.node.getPropValue("optionJson");if(r)return r}let t=e.node.props?.optionJson;if(t)return t}catch{}if(typeof a=="string"&&a.trim().startsWith("{"))return a};this.getDataValue=()=>{let{defaultValue:e}=this.props,a=this.getOptionJson();if(!a&&e!==void 0)return e;if(a)try{let t=JSON.parse(a),r=t.series?.[0]?.type;if(r==="pie")return t.series?.[0]?.data||e;if(r==="scatter")return(t.series?.[0]?.data||[]).map((i,l)=>({name:`P${l+1}`,xValue:Array.isArray(i)?i[0]:i.xValue,yValue:Array.isArray(i)?i[1]:i.yValue}));{let d=t.xAxis?.data||[],i=t.series||[];if(d.length===0)return e;let l=[],c=i.length>1;for(let f=0;f<d.length;f++){let y={name:d[f]};if(c)for(let p=0;p<i.length;p++)i[p]?.data?.[f]!==void 0&&(y[`value${p+1}`]=i[p].data[f]);else i[0]?.data?.[f]!==void 0&&(y.value=i[0].data[f]);l.push(y)}return l}}catch{return e!==void 0?e:void 0}};this.formatEditorData=e=>{try{return typeof e=="string"?(JSON.parse(e),e):JSON.stringify(e,null,2)}catch{return""}};this.openModal=()=>{let e=this.getDataValue(),a=this.formatEditorData(e),t={...N};try{let r=this.getOptionJson();r&&(t=JSON.parse(r)._dataSource||{...N})}catch{}this.setState({modalVisible:!0,editorText:a,originalText:a,errorText:"",dataSource:t,activeTab:t.mode||"static",apiPreviewData:"",apiError:""})};this.closeModal=()=>{this.clearRefreshTimer(),this.setState({modalVisible:!1,editorText:"",originalText:"",errorText:"",apiLoading:!1})};this.clearRefreshTimer=()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null)};this.handleConfirm=()=>{let{editorText:e,dataSource:a}=this.state;if(a.mode==="api"){this.saveDataSource();return}try{let t=JSON.parse(e);this.setState({errorText:""});let r=this.getOptionJson();try{let d=r?JSON.parse(r):{};Array.isArray(t)&&(S(d,t),delete d._chartData);let i=JSON.stringify(d,null,2);this.applyOptionJson(i),this.closeModal()}catch(d){console.error("[DataEditorSetter] Failed to update:",d)}}catch(t){this.setState({errorText:"JSON \u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8BED\u6CD5\uFF1A"+String(t.message).substring(0,80)})}};this.saveDataSource=()=>{let{dataSource:e}=this.state,a=this.getOptionJson();try{let t=a?JSON.parse(a):{};t._dataSource={mode:"api",url:e.url,method:e.method,headers:e.headers,body:e.body,dataPath:e.dataPath,refreshInterval:e.refreshInterval,enabled:e.enabled};let r=JSON.stringify(t,null,2);this.applyOptionJson(r),this.setupAutoRefresh(e),this.closeModal()}catch(t){console.error("[DataEditorSetter] Failed to save data source:",t)}};this.applyOptionJson=e=>{let{field:a,onChange:t}=this.props;a&&typeof a.node=="object"&&a.node.setPropValue?a.node.setPropValue("optionJson",e):a&&typeof a.setPropValue=="function"?a.setPropValue("optionJson",e):t&&t(e),this.setState({lastOptionJson:e})};this.handleReset=()=>{let{initialDefaultValue:e}=this.state;if(e)try{let a=JSON.parse(e),t=this.getOptionJson(),r=t?JSON.parse(t):{};Array.isArray(a)&&(S(r,a),delete r._chartData);let d=JSON.stringify(r,null,2);this.applyOptionJson(d),this.setState({editorText:e,errorText:""})}catch{this.setState({editorText:e,errorText:""})}};this.setupAutoRefresh=e=>{this.clearRefreshTimer(),e.enabled&&e.mode==="api"&&e.refreshInterval&&e.refreshInterval>0&&(this.refreshTimer=setInterval(()=>{this.fetchApiData(!1)},e.refreshInterval*1e3))};this.fetchApiData=async(e=!0)=>{let{dataSource:a}=this.state;if(!a.url.trim()){this.setState({apiError:"\u8BF7\u8F93\u5165 API \u5730\u5740"});return}e&&this.setState({apiLoading:!0,apiError:""});try{let t={};try{t=JSON.parse(a.headers||"{}")}catch{t={"Content-Type":"application/json"}}let r={method:a.method,headers:t};a.method==="POST"&&a.body&&(r.body=a.body);let i=await(await fetch(a.url,r)).json(),l=a.dataPath&&a.dataPath.trim()?a.dataPath:"data.list",c=ne(i,l)||i,f=JSON.stringify(c,null,2);this.setState({apiPreviewData:JSON.stringify(i,null,2),apiLoading:!1,editorText:f,errorText:""})}catch(t){this.setState({apiError:`\u8BF7\u6C42\u5931\u8D25: ${t.message}`,apiLoading:!1})}};this.handleCancel=()=>{this.closeModal()};this.handleEditorChange=e=>{this.setState({editorText:e.target.value,errorText:""})};this.handleDsChange=(e,a)=>{this.setState(t=>({dataSource:{...t.dataSource,[e]:a}}))};this.handleApplyApiData=()=>{let{apiPreviewData:e,dataSource:a}=this.state;if(!e){this.setState({apiError:"\u6CA1\u6709\u53EF\u5E94\u7528\u7684\u6570\u636E\uFF0C\u8BF7\u5148\u83B7\u53D6\u6570\u636E"});return}try{let r=JSON.parse(e),d=a.dataPath&&a.dataPath.trim()?a.dataPath:"data.list",i=d.split(".").filter(Boolean);for(let l of i)if(r&&typeof r=="object"&&l in r)r=r[l];else{this.setState({errorText:`\u6570\u636E\u8DEF\u5F84 "${d}" \u63D0\u53D6\u5931\u8D25\uFF0C\u8DEF\u5F84\u4E0D\u5B58\u5728`});return}if(Array.isArray(r)){let l=this.getOptionJson(),c=l?JSON.parse(l):{};S(c,r),delete c._chartData;let f=JSON.stringify(c,null,2);this.applyOptionJson(f),this.closeModal()}else this.setState({errorText:"\u63D0\u53D6\u7684\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u671F\u671B\u6570\u7EC4"})}catch(t){this.setState({errorText:"API \u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u5F02\u5E38: "+String(t.message).substring(0,60)})}};this.state={modalVisible:!1,editorText:"",originalText:"",initialDefaultValue:e.defaultValue||"",initialized:!1,lastOptionJson:void 0,errorText:"",dataSource:{...N},apiPreviewData:"",apiLoading:!1,apiError:"",activeTab:"static"}}componentDidMount(){let e=this.getDataValue();this.setState({initialized:!0,lastOptionJson:this.getOptionJson()})}componentDidUpdate(e){let a=this.getOptionJson(),{lastOptionJson:t}=this.state;a!==t&&this.setState({lastOptionJson:a})}componentWillUnmount(){this.clearRefreshTimer()}renderLineNumbers(e){let a=e.split(`
`),t=String(a.length).length;return a.map((r,d)=>String(d+1).padStart(t," "))}render(){let{modalVisible:e,editorText:a,errorText:t,dataSource:r,apiPreviewData:d,apiLoading:i,apiError:l,activeTab:c}=this.state,f=a||"",y=this.renderLineNumbers(f);return(0,n.jsxs)("div",{className:"data-editor-setter",children:[(0,n.jsxs)("button",{type:"button",className:"data-editor-btn",onClick:this.openModal,children:[(0,n.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:4},children:[(0,n.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,n.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"\u7F16\u8F91\u6570\u636E"]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"data-editor-overlay",onClick:this.handleCancel}),(0,n.jsxs)("div",{className:"data-editor-modal",children:[(0,n.jsxs)("div",{className:"data-editor-header",children:[(0,n.jsx)("span",{className:"data-editor-title",children:"\u6570\u636E\u7F16\u8F91"}),(0,n.jsx)("button",{type:"button",className:"data-editor-close-btn",onClick:this.closeModal,children:"\u2715"})]}),(0,n.jsxs)("div",{className:"data-editor-tabs",children:[(0,n.jsx)("button",{type:"button",className:`data-editor-tab ${c==="static"?"active":""}`,onClick:()=>this.setState({activeTab:"static"}),children:"\u{1F4DD} \u9759\u6001\u6570\u636E"}),(0,n.jsx)("button",{type:"button",className:`data-editor-tab ${c==="api"?"active":""}`,onClick:()=>this.setState({activeTab:"api"}),children:"\u{1F517} API \u6570\u636E\u6E90"})]}),(0,n.jsx)("div",{className:"data-editor-body",children:c==="static"?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"data-editor-code-container",children:[(0,n.jsx)("div",{className:"data-editor-line-numbers",children:y.map((p,q)=>(0,n.jsx)("div",{className:"data-editor-line-num",children:p},q))}),(0,n.jsx)("textarea",{className:"data-editor-textarea",value:f,onChange:this.handleEditorChange,spellCheck:!1,autoFocus:!0})]}),t&&(0,n.jsx)("div",{className:"data-editor-error",children:t}),(0,n.jsx)("div",{className:"data-editor-actions",children:(0,n.jsx)("button",{type:"button",className:"data-editor-reset-btn",onClick:this.handleReset,disabled:!this.state.initialDefaultValue,children:"\u21BA \u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C"})})]}):(0,n.jsxs)("div",{className:"data-api-config",children:[(0,n.jsxs)("div",{className:"api-row",children:[(0,n.jsx)("label",{className:"api-label",children:"\u8BF7\u6C42\u5730\u5740"}),(0,n.jsx)("input",{type:"text",className:"api-input",value:r.url,placeholder:"https://api.example.com/data",onChange:p=>this.handleDsChange("url",p.target.value)})]}),(0,n.jsxs)("div",{className:"api-row-group",children:[(0,n.jsxs)("div",{className:"api-row-half",children:[(0,n.jsx)("label",{className:"api-label",children:"\u8BF7\u6C42\u65B9\u6CD5"}),(0,n.jsxs)("select",{className:"api-select",value:r.method,onChange:p=>this.handleDsChange("method",p.target.value),children:[(0,n.jsx)("option",{value:"GET",children:"GET"}),(0,n.jsx)("option",{value:"POST",children:"POST"})]})]}),(0,n.jsxs)("div",{className:"api-row-half",children:[(0,n.jsx)("label",{className:"api-label",children:"\u81EA\u52A8\u5237\u65B0(\u79D2)"}),(0,n.jsx)("input",{type:"number",className:"api-input-sm",value:r.refreshInterval||"",placeholder:"0=\u4E0D\u5237\u65B0",min:0,onChange:p=>this.handleDsChange("refreshInterval",parseInt(p.target.value)||0)})]})]}),(0,n.jsxs)("div",{className:"api-row",children:[(0,n.jsx)("label",{className:"api-label",children:"\u8BF7\u6C42\u5934 (JSON)"}),(0,n.jsx)("textarea",{className:"api-textarea-sm",value:r.headers,rows:2,onChange:p=>this.handleDsChange("headers",p.target.value)})]}),r.method==="POST"&&(0,n.jsxs)("div",{className:"api-row",children:[(0,n.jsx)("label",{className:"api-label",children:"\u8BF7\u6C42\u4F53 (JSON)"}),(0,n.jsx)("textarea",{className:"api-textarea-sm",value:r.body,rows:3,onChange:p=>this.handleDsChange("body",p.target.value)})]}),(0,n.jsxs)("div",{className:"api-row",children:[(0,n.jsx)("label",{className:"api-label",children:"\u6570\u636E\u8DEF\u5F84"}),(0,n.jsx)("input",{type:"text",className:"api-input",value:r.dataPath,placeholder:"\u9ED8\u8BA4: data.list",onChange:p=>this.handleDsChange("dataPath",p.target.value)})]}),(0,n.jsx)("div",{className:"api-actions",children:(0,n.jsx)("button",{type:"button",className:"api-fetch-btn",onClick:()=>this.fetchApiData(!0),disabled:i,children:i?"\u23F3 \u8BF7\u6C42\u4E2D...":"\u{1F680} \u6D4B\u8BD5\u83B7\u53D6"})}),l&&(0,n.jsx)("div",{className:"data-editor-error",children:l}),d&&(0,n.jsxs)("div",{className:"api-preview-section",children:[(0,n.jsxs)("div",{className:"api-preview-header",children:[(0,n.jsx)("span",{children:"API \u8FD4\u56DE\u6570\u636E\u9884\u89C8"}),(0,n.jsx)("button",{type:"button",className:"api-apply-btn",onClick:this.handleApplyApiData,children:"\u2713 \u5E94\u7528\u5230\u9759\u6001\u6570\u636E"})]}),(0,n.jsx)("pre",{className:"api-preview-data",children:d})]})]})}),(0,n.jsxs)("div",{className:"data-editor-footer",children:[(0,n.jsx)("button",{type:"button",className:"data-editor-confirm-btn",onClick:this.handleConfirm,children:"\u786E\u8BA4"}),(0,n.jsx)("button",{type:"button",className:"data-editor-cancel-btn",onClick:this.handleCancel,children:"\u53D6\u6D88"})]})]})]}),(0,n.jsx)("style",{children:`
          .data-editor-setter { display: inline-block; }
          .data-editor-btn {
            display: inline-flex; align-items: center; padding: 4px 12px; font-size: 13px;
            color: #fff; background-color: #1890ff; border: none; border-radius: 4px;
            cursor: pointer; transition: background-color 0.2s;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 22px;
          }
          .data-editor-btn:hover { background-color: #40a9ff; }
          .data-editor-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(0, 0, 0, 0.45); z-index: 10000; animation: fadeIn 0.2s ease;
          }
          .data-editor-modal {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 640px; max-height: 80vh; background: #fff; border-radius: 8px;
            box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15); z-index: 10001;
            display: flex; flex-direction: column; overflow: hidden;
            animation: slideIn 0.25s ease;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }
          .data-editor-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 16px 20px; border-bottom: 1px solid #f0f0f0;
          }
          .data-editor-title { font-size: 15px; font-weight: 600; color: #333; }
          .data-editor-close-btn {
            width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
            border: none; background: transparent; cursor: pointer; border-radius: 4px;
            color: #999; font-size: 16px; transition: all 0.2s;
          }
          .data-editor-close-btn:hover { background: #f5f5f5; color: #666; }

          .data-editor-tabs {
            display: flex; border-bottom: 1px solid #f0f0f0; padding: 0 20px;
          }
          .data-editor-tab {
            padding: 10px 18px; font-size: 13px; color: #666; background: transparent;
            border: none; cursor: pointer; position: relative; transition: all 0.2s;
            font-family: inherit;
          }
          .data-editor-tab.active {
            color: #1890ff; font-weight: 500;
          }
          .data-editor-tab.active::after {
            content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
            height: 2px; background: #1890ff;
          }
          .data-editor-tab:hover:not(.active) { color: #333; }

          .data-editor-body { flex: 1; overflow-y: auto; padding: 0; }
          .data-editor-code-container { display: flex; min-height: 340px; max-height: 480px; }
          .data-editor-line-numbers {
            flex-shrink: 0; width: 48px; padding: 12px 8px; background: #fafafa;
            border-right: 1px solid #f0f0f0; text-align: right; user-select: none; overflow: hidden;
          }
          .data-editor-line-num {
            font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
            font-size: 13px; line-height: 21px; color: #bbb; height: 21px;
          }
          .data-editor-textarea {
            flex: 1; padding: 12px 16px; border: none; outline: none; resize: none;
            font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
            font-size: 13px; line-height: 21px; color: #333; background: #fff; tab-size: 2;
          }
          .data-editor-error {
            padding: 10px 16px; background: #fff2f0; border-top: 1px solid #ffccc7;
            color: #ff4d4f; font-size: 13px; word-break: break-all;
          }
          .data-editor-actions {
            padding: 10px 16px; border-top: 1px solid #f0f0f0; display: flex; justify-content: flex-start;
          }
          .data-editor-reset-btn {
            padding: 6px 12px; font-size: 13px; color: #666; background: #fff;
            border: 1px solid #d9d9d9; border-radius: 4px; cursor: pointer; transition: all 0.2s; font-family: inherit;
          }
          .data-editor-reset-btn:hover:not(:disabled) { border-color: #1890ff; color: #1890ff; }
          .data-editor-reset-btn:disabled { opacity: 0.5; cursor: not-allowed; }
          .data-editor-footer {
            display: flex; justify-content: flex-end; gap: 8px; padding: 12px 20px;
            border-top: 1px solid #f0f0f0;
          }
          .data-editor-confirm-btn {
            padding: 6px 20px; font-size: 14px; color: #fff; background: #1890ff;
            border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s; font-family: inherit;
          }
          .data-editor-confirm-btn:hover { background: #40a9ff; }
          .data-editor-cancel-btn {
            padding: 6px 20px; font-size: 14px; color: #666; background: #fff;
            border: 1px solid #d9d9d9; border-radius: 4px; cursor: pointer; transition: all 0.2s; font-family: inherit;
          }
          .data-editor-cancel-btn:hover { border-color: #1890ff; color: #1890ff; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideIn {
            from { opacity: 0; transform: translate(-50%, -48%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
          }

          .data-api-config { padding: 16px 20px; }
          .api-row { margin-bottom: 14px; }
          .api-row-group { display: flex; gap: 12px; margin-bottom: 14px; }
          .api-row-half { flex: 1; }
          .api-label {
            display: block; font-size: 12px; color: #666; margin-bottom: 4px; font-weight: 500;
          }
          .api-input {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 13px; outline: none; transition: border-color 0.2s;
            font-family: inherit;
          }
          .api-input:focus { border-color: #1890ff; box-shadow: 0 0 0 2px rgba(24,144,255,0.1); }
          .api-input-sm {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 13px; outline: none;
          }
          .api-select {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 13px; outline: none; background: #fff;
          }
          .api-textarea-sm {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 12px; font-family: "SF Mono", Menlo, Consolas, monospace;
            resize: vertical; outline: none;
          }
          .api-actions { margin: 16px 0; }
          .api-fetch-btn {
            padding: 8px 20px; font-size: 13px; color: #fff; background: #52c41a;
            border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;
            font-family: inherit;
          }
          .api-fetch-btn:hover { background: #73d13d; }
          .api-fetch-btn:disabled { background: #bfbfbf; cursor: not-allowed; }
          .api-preview-section {
            margin-top: 16px; border: 1px solid #e8e8e8; border-radius: 6px; overflow: hidden;
          }
          .api-preview-header {
            display: flex; justify-content: space-between; align-items: center;
            padding: 8px 12px; background: #fafafa; border-bottom: 1px solid #e8e8e8;
            font-size: 12px; color: #666; font-weight: 500;
          }
          .api-apply-btn {
            padding: 3px 10px; font-size: 12px; color: #1890ff; background: #e6f7ff;
            border: 1px solid #91d5ff; border-radius: 3px; cursor: pointer; font-family: inherit;
          }
          .api-apply-btn:hover { background: #bae7ff; }
          .api-preview-data {
            margin: 0; padding: 12px; max-height: 200px; overflow: auto;
            font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 12px;
            line-height: 1.6; color: #333; background: #fff; white-space: pre-wrap;
            word-break: break-all;
          }
        `})]})}},R=C;var M=u(g()),m=u(g());function I(o){let s=[],e=o.split(".");for(let a of e){if(a==="")continue;let t=parseInt(a,10);s.push(isNaN(t)?a:t)}return s}function z(o,s){let e=I(s),a=o;for(let t of e){if(a==null)return;a=a[t]}return a}function re(o,s,e){let a=I(s),t=o;for(let d=0;d<a.length-1;d++){let i=a[d];if(t[i]===void 0||t[i]===null){let l=a[d+1];t[i]=typeof l=="number"?[]:{}}t=t[i]}let r=a[a.length-1];e==null||e===""?Array.isArray(t)?t.splice(Number(r),1):delete t[r]:t[r]=e}function j(o,s){if(o===s)return!0;if(typeof o!=typeof s||typeof o!="object"||o===null||s===null)return!1;let e=Object.keys(o),a=Object.keys(s);return e.length!==a.length?!1:e.every(t=>j(o[t],s[t]))}var O=class extends M.Component{constructor(e){super(e);this.getOptionJson=()=>{let{field:e}=this.props;if(e&&typeof e.node=="object")try{return e.node.props?.optionJson}catch(a){console.error("[JSONPathSetter] Failed to get optionJson from node:",a)}if(e&&typeof e.getPropValue=="function")return e.getPropValue("optionJson")};this.getValueFromOptionJson=e=>{let{jsonPath:a}=this.props;if(e)try{let t=JSON.parse(e);return z(t,a)}catch{return}};this.updateOptionJson=e=>{let{jsonPath:a}=this.props,t=this.getOptionJson();try{let r=t?JSON.parse(t):{},d=z(r,a);if(j(d,e))return;re(r,a,e);let i=JSON.stringify(r,null,2);this.setState({lastOptionJson:i});let{field:l,onChange:c}=this.props;l&&typeof l.node=="object"&&l.node.setPropValue?l.node.setPropValue("optionJson",i):l&&typeof l.setPropValue=="function"?l.setPropValue("optionJson",i):c(i)}catch(r){console.error("[JSONPathSetter] Failed to update optionJson:",r)}};this.handleChange=e=>{this.setState({inputValue:e}),this.updateOptionJson(e)};this.state={inputValue:void 0,initialized:!1,lastOptionJson:void 0}}componentDidMount(){let{defaultValue:e}=this.props,a=this.getOptionJson(),t=this.getValueFromOptionJson(a),r=t!==void 0?t:e;this.setState({inputValue:r,initialized:!0,lastOptionJson:a})}componentDidUpdate(e){let{defaultValue:a}=this.props,t=this.getOptionJson(),{lastOptionJson:r}=this.state;if(t!==r){let d=this.getValueFromOptionJson(t),i=d!==void 0?d:a;this.setState({inputValue:i,lastOptionJson:t})}}render(){let{setterType:e,placeholder:a,options:t}=this.props,{inputValue:r,initialized:d}=this.state;if(!d)return null;switch(e){case"BoolSetter":return(0,m.jsx)("input",{type:"checkbox",checked:r===!0,onChange:i=>this.handleChange(i.target.checked),style:{cursor:"pointer",width:"16px",height:"16px"}});case"NumberSetter":return(0,m.jsx)("input",{type:"number",value:r??"",placeholder:a,onChange:i=>this.handleChange(i.target.value?Number(i.target.value):void 0),style:{width:"100%",padding:"4px 8px",border:"1px solid #d9d9d9",borderRadius:4}});case"SelectSetter":return(0,m.jsxs)("select",{value:r??"",onChange:i=>this.handleChange(i.target.value),style:{width:"100%",padding:"4px 8px",border:"1px solid #d9d9d9",borderRadius:4,background:"#fff"},children:[(0,m.jsx)("option",{value:"",children:"\u8BF7\u9009\u62E9"}),t?.map((i,l)=>(0,m.jsx)("option",{value:i.value,children:i.label},l))]});default:return(0,m.jsx)("input",{type:"text",value:r??"",placeholder:a,onChange:i=>this.handleChange(i.target.value||void 0),style:{width:"100%",padding:"4px 8px",border:"1px solid #d9d9d9",borderRadius:4}})}}},F=O;var L=o=>b.default.createElement(h,{...o}),B=o=>b.default.createElement(h,{...o}),U=o=>b.default.createElement(h,{...o}),_=o=>b.default.createElement(h,{...o}),$=o=>b.default.createElement(h,{...o}),G=o=>b.default.createElement(h,{...o}),K=o=>b.default.createElement(h,{...o}),H=o=>b.default.createElement(h,{...o}),ie={EChartsPie:L,EChartsLine:B,EChartsBar:U,EChartsArea:_,EChartsScatter:$,EChartsRadar:G,EChartsGauge:K,EChartsFunnel:H,EChartsBase:h,version:"1.0.0",name:"plugin-echarts",description:"ECharts \u56FE\u8868\u7EC4\u4EF6\u5E93"},se=ie;return te(de);})();

// Merge default export with named exports
if (PluginEcharts.default) {
  var merged = Object.assign({}, PluginEcharts.default, PluginEcharts);
  delete merged.default;
  PluginEcharts = merged;
}
if (typeof window !== 'undefined') {
  window.PluginEcharts = PluginEcharts;
  console.log('[PluginEcharts] Registered:', Object.keys(PluginEcharts));

  if (PluginEcharts.DataEditorSetter && window.AliLowCodeEngine && window.AliLowCodeEngine.setters) {
    window.AliLowCodeEngine.setters.registerSetter('DataEditorSetter', PluginEcharts.DataEditorSetter);
    console.log('[PluginEcharts] Registered DataEditorSetter');
  }
  if (PluginEcharts.JSONPathSetter && window.AliLowCodeEngine && window.AliLowCodeEngine.setters) {
    window.AliLowCodeEngine.setters.registerSetter('JSONPathSetter', PluginEcharts.JSONPathSetter);
    console.log('[PluginEcharts] Registered JSONPathSetter');
  }

  function registerToRenderer() {
    if (typeof window === 'undefined') return false;

    function tryRegister(win, source) {
      if (!win || !win.SimulatorRenderer || !win.SimulatorRenderer._components) {
        return false;
      }

      var components = ['EChartsPie', 'EChartsLine', 'EChartsBar', 'EChartsArea', 'EChartsScatter', 'EChartsRadar', 'EChartsGauge', 'EChartsFunnel', 'EChartsBase'];
      var registered = [];
      components.forEach(function(name) {
        if (PluginEcharts[name]) {
          win.SimulatorRenderer._components[name] = PluginEcharts[name];
          registered.push(name);
        }
      });

      if (registered.length > 0) {
        console.log('[PluginEcharts] Registered ' + registered.join(', ') + ' to ' + source);
        return true;
      }
      return false;
    }

    tryRegister(window, 'main window');

    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      try {
        if (iframe.contentWindow) {
          tryRegister(iframe.contentWindow, 'iframe');
        }
      } catch (e) {
        console.log('[PluginEcharts] Cannot access iframe:', e);
      }
    });

    return true;
  }

  setTimeout(registerToRenderer, 0);
  setTimeout(registerToRenderer, 100);
  setTimeout(registerToRenderer, 500);
  setTimeout(registerToRenderer, 1000);
  setTimeout(registerToRenderer, 2000);
  setTimeout(registerToRenderer, 3000);

  if (window.addEventListener) {
    window.addEventListener('load', registerToRenderer);
  }
}

