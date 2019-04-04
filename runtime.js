/**
 * @function initComponent 初始化组件
 * @param {string} name 组件名称
 * @param {Object} data 
 * @param {string} data.template 组件模板结构
 * @param {string} data.style 组件CSS代码
 * @param {string} data.script 组件JavaScript代码
 */
function initComponent(name,data){
  const {template,style,script} = data;
  const $template = document.createElement('template');
  $template.setAttribute('id',`${name}-tpl`);
  $template.innerHTML = `<style>${style}</style>${template}`;
  
  document.body.appendChild($template);
  eval(script);
}
