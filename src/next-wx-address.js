(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx = global.wx;

  var NxWxAddress = nx.declare('nx.WxAddress', {
    statics: {
      open: function(){
        wx.ready(function () {
          return new Promise(function(resove, reject){
            wx.openAddress(
              nx.mix( inOptions, {
                success: function( data ){
                  resove( { status:'success', data: data} );
                },
                fail: function( data ){
                  resove( { status:'fail', data: data} );
                },
                complete: function( data ){
                  resolve( { status:'complete', data: data } )
                }
              })
            )
          });
        });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxAddress;
  }

}());
