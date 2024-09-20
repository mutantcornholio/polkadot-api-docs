import{u as s,j as e}from"./index-Cl4Cja76.js";const t={title:"Chain-specific docs",description:"undefined"};function i(a){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"chain-specific-docs",children:["Chain-specific docs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chain-specific-docs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[`Aside from generic documentation for polkadot-api, we also provide generated documentation for well-known chains, based
on the metadata.`,e.jsx(n.br,{}),`
`,"With these, you can search for apis like ",e.jsx(n.code,{children:"limited_teleport_assets"}),`, their type parameters, and the docs that
metadata provide for them.`]}),`
`,e.jsxs(n.p,{children:["You can also generate the same documentation for any chain, using ",e.jsx(n.code,{children:"papi-generate-docs"}),` binary, provided by
`,e.jsx(n.code,{children:"@polkadot-api/docgen"})," package:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"npm install polkadot-api @polkadot-api/docgen"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"papi add <...>"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"papi-generate-docs --config <path-to-papi-config> --output <docs_directory>"})})]})})]})}function o(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{o as default,t as frontmatter};
