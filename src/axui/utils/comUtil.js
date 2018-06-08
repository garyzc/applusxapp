/**
 * Created by zhuchen on 2018/2/6.
 */
/**
 * 唯一ID
 * @param len
 * @param radix
 * @returns {string}
 */
export const uuid = (len=8, radix=16) => {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  var uuid = [], i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random()*16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

/**
 * 订阅
 * @type {{subscribe, publish, off}}
 */
export const PubSub  = (function() {
  var queue = {};
  var subscribe = function(event, fn) {
    if (!queue[event]) queue[event] = [];
    queue[event].push(fn);
  }
  var publish = function(event,data) {
    var eventQueue = queue[event],
      len = eventQueue.length;
    if (eventQueue) {
      eventQueue.forEach(function(item, index) {
        item(data);
      });
    }
  }
  var off = function(event, fn) {
    var eventQueue = queue[event];
    if (eventQueue) {
      queue[event] = eventQueue.filter(function(item) {
        return item !== fn;
      });
    }
  }
  return {
    subscribe: subscribe,
    publish: publish,
    off: off
  }
}())

/**
 * 检测碰撞
 * @type {{rect}}
 */
export const Collision  = (function() {
  let rect = (ax,ay,aw,ah,bx,by,bw,bh,reduce_a=0,reduce_b=0) => {
    if (by + bh < ay || // is the bottom b above the top of a?
      by > ay + ah || // is the top of b below bottom of a?
      bx + bw < ax || // is the right of b to the left of a?
      bx > ax + aw) // is the left of b to the right of a?
    {
      return false;
    }else{
      return true;
    }
  }
  return {
    rect : rect
  }
}())

export const Trim  = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
export const lTrim  = (str) => {
  return str.replace(/(^\s*)/g,"");
}
export const rTrim  = (str) => {
  return str.replace(/(\s*$)/g,"");
}

class QDom {

  constructor(queryselect) {
    this.qel = (this.isDom(queryselect))?queryselect:document.querySelector(queryselect)
    if(typeof queryselect == 'undefined') {
      this.qel = ''
    }

  }

  isDom (obj) {
    return ( typeof HTMLElement === 'object' ) ?
      (obj instanceof HTMLElement):
      (obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string')
  }

  after(value) {

  }

  before(value) {

  }

  insertBefore (newEl) {
    if(!this.qel) return false
    var parentEl = newEl.parentNode;
    parentEl.insertBefore(this.qel, newEl)
  }

  insertAfter (newEl)  {
    if(!this.qel) return false
    var parentEl = newEl.parentNode

    if(parentEl.lastChild == newEl)
    {
      parentEl.appendChild(this.qel);
    }else
    {
      parentEl.insertBefore(this.qel,newEl.nextSibling)
    }
  }



  // insertBefore (newEl) {
  //   if(!this.qel) return false
  //   var parentEl = this.qel.parentNode;
  //   parentEl.insertBefore(newEl, this.qel)
  // }
  //
  // insertAfter (newEl)  {
  //   if(!this.qel) return false
  //   var parentEl = this.qel.parentNode
  //
  //   if(parentEl.lastChild == this.qel)
  //   {
  //     parentEl.appendChild(newEl);
  //   }else
  //   {
  //     parentEl.insertBefore(newEl,this.qel.nextSibling)
  //   }
  // }

  parents(queryselect) {
    let result = this.findParents(queryselect)
    this.qel = result
    return this
  }

  findParents  (queryselect,parentNode='',result='')  {
    if(parentNode == '') {
      parentNode = this.qel
    }
    if(parentNode.classList.contains(queryselect)) {
      result =  parentNode
    } else {
      if(parentNode.parentNode) {
        result =  this.findParents(queryselect,parentNode.parentNode,result)
      }
    }
    return result
  }

  find(query) {
    let r = this.qel.querySelectorAll(query)
    this.qel = r
    // console.log(this.qel)
    return this
  }

  attr(name,value) {
    this.each((item)=>{
      item.setAttribute(name,value)
    })
  }

  size(){
    return this.qel.length
  }

  hide() {
    this.qel.style.display = 'none'
  }

  show() {
    this.qel.style.display = 'block'
  }

  each(callback) {
    if(this.qel.length) {
      for(let i=0; i<this.qel.length; i++) {
        callback(this.qel[i],i)
      }
    } else {
      callback(this.qel,0)
    }

  }

  query  (queryselect)  {
    this.qel = (this.isDom(queryselect))?this.qel:document.querySelector(queryselect)
    return this
  }

  addClass  (className='')  {
    this.qel.classList.add(className)
    return this
  }

  removeClass  (className='')  {
    this.qel.classList.remove(className)
    return this
  }

  clone  (bool=false)  {
    if(this.qel.length >= 1) {
      return new Qdom(this.qel[0].cloneNode(bool))
    } else {
      return new Qdom(this.qel.cloneNode(bool))
    }

  }

  append(dom) {
    if(dom instanceof QDom) dom = dom['qel']
    if(typeof dom == 'string') dom = this.parseToDom(dom)
    this.qel.appendChild(dom);
  }

  appendTo(dom) {
    if(dom instanceof QDom) dom = dom['qel']
    if(typeof dom == 'string') dom = this.parseToDom(dom)
    dom.appendChild(this.qel);
  }

  remove  (selecter='')  {
    if(this.qel) {
      if(this.qel.length) {
        for(let i=0;i<=this.qel.length;i++) {
          this.qel[i].parentNode.removeChild(this.qel[i])
        }
      } else {
        this.qel.parentNode.removeChild(this.qel)
      }
    }

  }

  parseToDom(str) {
    let div = document.createElement("div")
    if(typeof str == 'string') div.innerHTML = str
    return div.childNodes
  }

  parent() {
    this.qel = this.qel.parentNode
    return this
  }

}

export const Qdom = (queryselect) => {
  return new QDom(queryselect)
}

