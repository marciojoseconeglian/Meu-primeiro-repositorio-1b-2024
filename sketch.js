let palavra ; 
  function setup() {
  createCanvas(400, 400);
  let palavras = ["Marcio", "Coneglian", "aluno"];
    
    palavra= random(palavras);
  }
  function inicializaCores(){background(220);//cor de fundo
  fill("red");//peenchimento
  textSize(70);//tamanho da fonte
  textAlign(CENTER,CENTER);//alinha o texto ao centro, tanto na vertical quanto na horizontal



  }
  function draw() {
    
  inicializaCores();
  
  let quantidade = map(mouseX,0,width,0, palavra.length)
  let parcial = palavra.substring(quantidade);
 text(parcial,200,200);//exibe na tela a variavel palavra
 
}
