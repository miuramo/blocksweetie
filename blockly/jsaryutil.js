/*
  javascript object to html attributes

  ex: { key: "value", hoge: "moge" }  =>  key="value", hoge="moge"
*/
var jsary2html = function(ary){
  var out = [];
  Object.keys(ary).forEach(function(key){
     out.push(key+'="'+ary[key]+'"');
  });
  return out.join(" ");
}
/*
  javascript object to php array

  ex: { key: "value", hoge: "moge" }  =>  ["key"=>"value", "hoge"=>"moge"]
*/
var jsary2php = function(ary){
  var out = [];
  Object.keys(ary).forEach(function(key){
      out.push('"'+key+'"=>"'+ary[key]+'"');
  });
  return "["+out.join(",")+"]";
}
/*
  append php array to javascript object

  ex: ary = {}, value_attr = ["key"=>"value", "hoge"=>"moge"]
  returns { key: "value", hoge: "moge" }
*/
var jsappend = function(ary, value_attr){
    if (value_attr.length > 0) {
	value_attr = value_attr.replace(/\[/,"");
	value_attr = value_attr.replace(/\]/,"");
	value_attr = value_attr.replace(/"/g,"");
	value_attr = value_attr.replace(/'/g,"");
	value_attr = value_attr.replace(/\>/g,"");
	var sp = value_attr.split(",");
	for( var itm of sp ){
	    if (itm.match(/=/)){
		var sp2 = itm.split("=");
		ary[sp2[0].trim()] = sp2[1].trim();
	    }
	}
    }
    return ary;
}
