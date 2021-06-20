// 	function aString(texto, txt){

// 4	  if(txt.length == 0){
// 5	    return txt=texto
// 6	    }
// 7	  return txt=txt+','+texto
// 8	  }
export default function toTxt(text, txt) {
	if (text.length === 0) {
		return txt;
	}
	return text + ',' + txt;
}
