(function(){
  function _0xclean(_0xval){return parseFloat((_0xval+"").replace(/,/g,""))||0;}
  function _0xcalcBuy(){
    let _0xnum1=_0xclean(document.getElementById("buyPrice").value);
    let _0xmid=parseFloat(document.getElementById("buyTax").value);
    let _0xnum2=_0xclean(document.getElementById("buyPcs").value);
    let _0xres=Math.floor(_0xnum1/(1+_0xmid)*_0xnum2);
    document.getElementById("buyResult").value=_0xres;
  }
  function _0xcalcSell(){
    let _0xnum1=_0xclean(document.getElementById("sellPrice").value);
    let _0xmid=parseFloat(document.getElementById("sellTax").value);
    let _0xnum2=_0xclean(document.getElementById("sellPcs").value);
    let _0xres=Math.floor((_0xnum1*2)/_0xmid/_0xnum2);
    document.getElementById("sellResult").value=_0xres;
  }
  function _0xcopy(_0xid){
    let _0xfield=document.getElementById(_0xid);
    _0xfield.select();
    _0xfield.setSelectionRange(0,99999);
    navigator.clipboard.writeText(_0xfield.value).then(()=>{
      let _0xbtn=_0xfield.nextElementSibling;
      _0xbtn.textContent="Copied!";
      setTimeout(()=>_0xbtn.textContent="Copy",1500);
    });
  }
  window["calculateBuying"]=_0xcalcBuy;
  window["calculateSelling"]=_0xcalcSell;
  window["copyResult"]=_0xcopy;
})();
