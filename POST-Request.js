//script no Apps Script do google sheets para enviar requisição http através de um botão que invoca a função btn


//essa função vai ser ativada quando o botão da planilha do google for ativado
function btn() {
  var ativo = SpreadsheetApp.getActiveSpreadsheet();
  chamar();
  
  //vai exibir mensagem de alerta dizendo que a função chamar não caiu em exception
  SpreadsheetApp.getUi().alert("funcionou");
  return
}

function chamar () {
  
  //aqui é o body da requisição
  var data = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  };
  
  //aqui é o header
  var headers = {
    "Authorization": "value",
    "Content-type" : "application/json"
  };

  var payload = {
    "data" : Utilities.jsonStringify(data),
  };
  var options = {
    "method" : "post",
    "headers" : headers,
    "payload" : Utilities.jsonStringify(data),
    "muteHttpExceptions": false
  };
  Logger.log(options);
  
  var url = "https://minha-url";
  var response = UrlFetchApp.fetch(url, options);
  var result = response.getContentText();
  Logger.log(result);
  SpreadsheetApp.getUi().alert(result);
  
}
