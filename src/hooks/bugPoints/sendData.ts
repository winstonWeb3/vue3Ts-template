const sendData = (params: object) => {
  // const sendScript = document.createElement('script');
  // console.log(params);
  // const requestAddress = `https://concis.org.cn:9999/saveComponentLog?info=${JSON.stringify(
  //   params
  // )}`;
  // console.log(requestAddress)
  // sendScript.src = requestAddress;
  // sendScript.async = true;
  // document.body.appendChild(sendScript);
  // return new Promise((resolve, reject) => {
  //   sendScript.onload = () => {
  //     try {
  //       document.body.removeChild(sendScript);
  //       resolve('');
  //     } catch (e) {
  //       reject(e);
  //     }
  //   };
  // });
  let args = ''
  for(let i in params){
    if(args != ''){
      args += '&'
    }
    args += i + '=' +params[i]
  }
  console.log(args)
  // 通过伪装Image对象，请求后端脚本
  let img = new Image(1,1)
  let src = 'https://concis.org.cn:9999/saveComponentLog/log.gif?args=' + encodeURIComponent(args)
  img.src = src
};
export default sendData;
