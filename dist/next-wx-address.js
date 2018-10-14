(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = (global.wx = global.wx);

  var NxWxAddress = nx.declare('nx.WxAddress', {
    statics: {
      open: function() {
        return new Promise(function(resolve, reject) {
          if (global.__WEIXIN_READY___) {
            wx.openAddress(
              nx.mix(inOptions, {
                success: function(data) {
                  resolve({ status: 'success', data: data });
                },
                fail: function(data) {
                  resolve({ status: 'fail', data: data });
                },
                complete: function(data) {
                  resolve({ status: 'complete', data: data });
                }
              })
            );
          } else {
            reject({ status: 'fail', msg: '微信SDK还未初始化' });
          }
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxAddress;
  }
})();
