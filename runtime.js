function initComponent(name,data){
  const {template,style,script} = data;
  const $template = document.createElement('template');
  $template.setAttribute('id',`${name}-tpl`);
  $template.innerHTML = `<style>${style}</style>${template}`;
  
  document.body.appendChild($template);
  eval(script);
}
