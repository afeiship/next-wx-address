# next-wx-address
> Wechat api for address part.


## install:
```bash
npm install -S afeiship/next-wx-address --registry=https://registry.npm.taobao.org
```

## usage:
```js
import NxWxAddress from 'next-wx-address';

NxWxAddress.open().then(( { status, data })=>{
  let userName = data.userName; // 收货人姓名
  let postalCode = data.postalCode; // 邮编
  let provinceName = data.provinceName; // 国标收货地址第一级地址（省）
  let cityName = data.cityName; // 国标收货地址第二级地址（市）
  let countryName = data.countryName; // 国标收货地址第三级地址（国家）
  let detailInfo = data.detailInfo; // 详细收货地址信息
  let nationalCode = data.nationalCode; // 收货地址国家码
  let telNumber = data.telNumber; // 收货人手机号码
});
```
