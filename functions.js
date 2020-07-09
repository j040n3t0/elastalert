dados(); // Utilizada para os dados ficticios
var time = 3000;
setInterval(timeRefresh, time);
var resultado = [];
    
function timeRefresh(newDados){
      //var response = 'dados'; //Requisição
      resultado = [];
      
      //console.log(newDados);
      var request = localStorage.getItem("dadosIndex");
      //console.log(request);
      
      var newDados = [
        {index:'NewIndex', campo: 'João', status: '1'},
        {index:'NewIndex2', campo: 'Maria', status: '1'},
      /*{index:'NewIndex3', campo: 'Teste', status: '0'}*/]
      
      newDados.map((row) => { 
        // Fazer requisição pra cada linha e coloca os dados em repsonse;
        response = `Campo consultado = ${row.campo}`;
        resultado.push(response);
        
      })  
      
      console.log(resultado);
      //createTable(response);      Testando
    }
   
  


  function dados(newData){
  // Salva o resulada da requisição na variavel dados
    var dados = [
      {index:'NewIndex', campo: 'João', status: '1'},
      {index:'NewIndex2', campo: 'Maria', status: '1'},
      {index:'NewIndex3', campo: 'Teste', status: '0'}]
                   
      if(newData){
        var newIndex = document.getElementById('index').value;
        var newCampo = document.getElementById('campo').value;
        var auxNewStatus = document.getElementById('status').value;
        var newStatus = '0';
        if(auxNewStatus == 'on'){
          newStatus = '1';
        }

        dados.push({index: newIndex, campo: newCampo, status: newStatus});
      }
      
     // Filtra status 1
     var newDados =  dados.filter(function(data) {
      return data.status == '1';
    });

    //console.log(newDados)
    timeRefresh(newDados);
    
     
      var dadosJson = JSON.stringify(newDados);
      localStorage.setItem("dadosIndex", dadosJson);

    createTable(dados);
  }

  function createTable(dados){
    var table = document.querySelector("table");    
    var bodyTableOld = document.querySelector("tbody");
    table.removeChild(bodyTableOld);

    var bodyTable = document.createElement("tbody");
    table.appendChild(bodyTable);

    var newTeste = localStorage.getItem("dadosIndex");    
   
    dados.map((row) => {
      var newIndex = row.index;  
      var newCampo = row.campo;
      var newStatus = row.status;            
             
      // Cria uma linha
      var row = document.createElement("tr");

      // Cria as colunas
      var collumnIndex = document.createElement("td");
      var collumnCampo = document.createElement("td");
      var collumnStatus = document.createElement("td");
       
      // Inseris os dados nas variaveis da coluna
      var textIndex = document.createTextNode(newIndex);            
      var textCampo = document.createTextNode(newCampo);
      var textStatus = document.createTextNode(newStatus);
       
      collumnIndex.appendChild(textIndex);
      collumnCampo.appendChild(textCampo);
      collumnStatus.appendChild(textStatus);
     
      // Adiciona as colunas na linha
      row.appendChild(collumnIndex);
      row.appendChild(collumnCampo);
      row.appendChild(collumnStatus);
     
      // Adiciona a linha na tbody
      bodyTable.appendChild(row);
    })        
  }        
  // createTable();