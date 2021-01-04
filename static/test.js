;(function () {
  var _getScript = function (url, callback) {
    var head = document.getElementsByTagName('head')[0],
      js = document.createElement('script')

    js.setAttribute('type', 'text/javascript')
    js.setAttribute('src', url)

    head.appendChild(js)

    //执行回调
    var callbackFn = function () {
      if (typeof callback === 'function') {
        callback()
      }
    }

    if (document.all) {
      //IE
      js.onreadystatechange = function () {
        if (js.readyState == 'loaded' || js.readyState == 'complete') {
          callbackFn()
        }
      }
    } else {
      js.onload = function () {
        callbackFn()
      }
    }
  }

  var appid = 'cyveE4NfD'
  var conf = 'prod_d45b7b2be546d1b53965e43c14716a17'
  //   https://changyan.sohu.com/upload/changyan.js
  _getScript('https://changyan.sohu.com/upload/changyan.js', function () {
    console.log('config')
    window.changyan.api.config({ appid: appid, conf: conf })
  })
//   window.onbeforeunload = function () {
//     console.log('leave');
//   }
})()
