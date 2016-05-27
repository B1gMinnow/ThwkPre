function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr = [];
  for(var item of collection_a)
  	for(var i of collection_b)
  	{
  		if(item === i)
  		{
  			arr.push(item);
  			break;
  		}
  	}
  	return arr;
}

module.exports = collect_same_elements;
