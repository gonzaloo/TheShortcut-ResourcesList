function Post_json()
{
  
  var data_Table = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Catalogue example").getRange(1,1,1000,8).getDisplayValues();

  var url = "https://www.inskon.fi/tests/post_json_catalogue.php"; 

  var json_Table_data = {};
  
  for (var int_i= 0; int_i < 1000; int_i++)
  {
    if (data_Table[int_i][0] != "")
    {          
       json_Table_data["a" + (int_i+1)] = data_Table[int_i][0];
       json_Table_data["b" + (int_i+1)] = data_Table[int_i][1];
       json_Table_data["c" + (int_i+1)] = data_Table[int_i][2];
       json_Table_data["d" + (int_i+1)] = data_Table[int_i][3];
       json_Table_data["e" + (int_i+1)] = data_Table[int_i][4];
       json_Table_data["f" + (int_i+1)] = data_Table[int_i][5];
       json_Table_data["g" + (int_i+1)] = data_Table[int_i][6];
       json_Table_data["h" + (int_i+1)] = data_Table[int_i][7];   
     }    
  }
 
  var options = {'method' : 'post','payload' : json_Table_data};
  
  var result = UrlFetchApp.fetch(url, options);
  
  if (result.getResponseCode() == 200) 
  {   
     Browser.msgBox(result.getContentText());
  }  
  
}