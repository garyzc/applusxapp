export default (components=[]) => {
  let cs = components.map((component)=>{
    let filter = component.replace(/([A-Z])/g,function($1){
      return ($1 == component[0])?$1:'-'+$1
    }).toLowerCase();
    return require('axui/components/'+filter)
  })
  let obj = {}
  for(let c of cs) {
    obj[c.default.name] = c.default
  }
  console.log(obj)
  return obj
}