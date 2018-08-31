function Fill_values(int_Value)
{
	var index_Table = parseInt(int_Value) + 1;
	var innerhtml_Select_Resource = '';
	var xmlhttp = new XMLHttpRequest();
	
	
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var json_Import = JSON.parse(this.responseText);
		 
			for (var int_i = 2; int_i < 1000; int_i++)
			{
				
				if (json_Import['a'+int_i] !== undefined)
				{
					if (int_i != index_Table)
					{
						innerhtml_Select_Resource += '<option value="' + (int_i-1) + '">' + json_Import['a'+int_i] + '</option>';	
					}
					else
					{
						innerhtml_Select_Resource += '<option value="' + (int_i-1) + '" selected>' + json_Import['a'+int_i] + '</option>';	
					}
					
				}
			}
			
			document.getElementsByClassName("select_product")[0].innerHTML = '<select>' + innerhtml_Select_Resource + '</select>';
			document.getElementsByClassName("product_id")[0].innerHTML     = json_Import['b'+index_Table];
			document.getElementsByClassName("name")[0].innerHTML           = json_Import['c'+index_Table];
			document.getElementsByClassName("r_description")[0].innerHTML    = json_Import['d'+index_Table];
			document.getElementsByClassName("image")[0].src                = json_Import['e'+index_Table];
		}
   };
   
   xmlhttp.open("GET", "json_import.txt", true);
   xmlhttp.send();	
}