//var Menu
var y= 200;
var opcao = 1;
//var escolha de tela
var tela=0;

//var cenário
var x=205;
var xfundo=0;
var yfundo=195;
var xfundo2=0;
var yfundo2=195;
var xfundo3=0;
var yfundo3=195;
var xfundo4=0;
var yfundo4=195;

//var personagem animação e posição
var pers=0;
var ypers=300;
var xpers=50;
//var multa
var xmulta=650;
var ymulta= 300;
var xmulta2=1000;
var ymulta2=340;
var xmulta3=600;
var ymulta3=260;
var xmulta4=620;
var ymulta4=300;
var xmulta5=660;
var ymulta5=340;
var xmulta6=650;
var ymulta6=260;
var xmulta7=620;
var ymulta7=300;
var xmulta8=710;
var ymulta8=340;
var xmulta11=710;
var ymulta11=260;
var xmulta10=620;
var ymulta10=300;
var xmulta9=710;
var ymulta9=340;
//var desc
var xdesc=750;
var ydesc=260;
var xdesc2=1050;
var ydesc2=300;
var xdesc3=700;
var ydesc3=260;
var xdesc4=750;
var ydesc4=300;
var xdesc5=700;
var ydesc5=260;
var xdesc6=750;
var ydesc6=300;
var xdesc7=750;
var ydesc7=300;
//var perg
var xperg=700;
var yperg=80;
var xperg2=700;
var yperg2=80;
var xperg3=700;
var yperg3=80;
var xperg4=700;
var yperg4=80;
//var resposta
var xdez= 2000;
var ydez= 340;
var xvinte= 2000;
var yvinte= 300;
var xquarenta= 2000;
var yquarenta= 260;
var x2100= 2000;
var y2100= 340;
var x900= 2000;
var y900= 300;
var x1000= 2000;
var y1000= 260;
var x1500= 2000;
var y1500= 340;
var x1250= 2000;
var y1250= 260;
var x1400= 2000;
var y1400= 300;
var x10= 2000;
var y10= 300;
var x90= 2000;
var y90= 260;
var x50= 2000;
var y50= 340;
//var perdeu
var xperdeu1=700;
var yperdeu1=0;
//fase 2
var ximg2=600;
//teclado
function keyPressed() { 
    //movimento no menu
  if (key =="ArrowUp" && y > 230){
  y=y-50
  opcao = opcao - 1;
    soundMenu.play();
   
   } 

  if (key == "ArrowDown" && y < 300) {
  y=y+50;
  opcao = opcao + 1;
   soundMenu.play();
   }
    //escolha de tela
  if (key == "Enter" && opcao==1) {
    tela=1;
 
  
   } 
  if (key == "Enter" && opcao==2) {
  tela=2;
  
   } 
  if (key == "Enter" && opcao==3) {
  tela=3;
    
   } 
   //movimento personagem Jogo
   if (key ==="ArrowUp" && ypers>260 && tela==1 ){
    ypers= ypers-40;
   
    } 

    if (key === "ArrowDown" && ypers<=340 && tela==1 ) {
    ypers= ypers+40;
    }
    if (key ==="ArrowUp" && ypers>260 && tela==4 ){
    ypers= ypers-40;
   
    } 

    if (key === "ArrowDown" && ypers<=340 && tela==4 ) {
    ypers= ypers+40;
    }
     if (key ==="ArrowUp" && ypers>260 && tela==5 ){
    ypers= ypers-40;
   
    } 

    if (key === "ArrowDown" && ypers<=340 && tela==5 ) {
    ypers= ypers+40;
    }
    if (key ==="ArrowUp" && ypers>260 && tela==6 ){
    ypers= ypers-40;
   
    } 

    if (key === "ArrowDown" && ypers<=340 && tela==6 ) {
    ypers= ypers+40;
    }
     }
//imagens e sons
function preload() {
  img = loadImage('menu.jpg');
  imgFundo= loadImage('fundo.jpg');
  imgFundo2= loadImage('fundo2.jpg');
  imgFundo3= loadImage('fundo3.jpg');
  imgFundo4= loadImage('fundo3.jpg');
  imgUm=loadImage('fase1.jpg');
  imgDois=loadImage('fase2.jpg')
  imgTres=loadImage('fase3.jpg');
  imgQuatro=loadImage('fase4.jpg')
  imgFim=loadImage('fim.jpg')
  imgAum=loadImage('aumento.png');
  imgAum2=loadImage('aumento.png');
  imgAum3=loadImage('aumento.png');
  imgAum4=loadImage('aumento.png');
  imgAum5=loadImage('aumento.png');
  imgAum6=loadImage('aumento.png');
  imgAum7=loadImage('aumento.png');
  imgAum8=loadImage('aumento.png');
  imgAum9=loadImage('aumento.png');
  imgAum10=loadImage('aumento.png');
  imgAum11=loadImage('aumento.png');
  imgDesc=loadImage('desconto.png');
  imgDesc2=loadImage('desconto.png');
  imgDesc3=loadImage('desconto.png');
  imgDesc4=loadImage('desconto.png');
  imgDesc5=loadImage('desconto.png');
  imgDesc6=loadImage('desconto.png');
  imgDesc7=loadImage('desconto.png');
  imgPers1=loadImage('pers1.png');
  imgPers2=loadImage('pers2.png');
  imgPerdeu1=loadImage('Perdeu1.jpg');
  imgDez=loadImage('dez.png');
  imgVinte=loadImage('vinte.png');
  imgQuarenta=loadImage('quarenta.png');
  img1000=loadImage('mil.png');
  img2100=loadImage('doismilecem.png');
  img900=loadImage('novecentos.png');
  img1500=loadImage('1500.png');
  img1400=loadImage('1400.png');
  img1250=loadImage('1250.png');
  img10=loadImage('dez.png');
  img50= loadImage('50.png');
  img90= loadImage('90.png');
  imgCreditos=loadImage('creditos.jpg');
  soundMenu=loadSound('soundclick.mp3');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //MENU
   if(tela==0){
   background(220);
   image(img,0,0);
   rect(x, y, 170, 40);
   textSize(25);
   fill(0, 102, 103, 180);
   textFont('Fantasy');
   text('Jogar', 260, 230);
   text('Instruções', 240, 280);
   text('Créditos', 250, 330);
    if(mouseX>205 && mouseX<375 && mouseY>200 && mouseY<240){
     //escolha de tela com mouse   
      rect(205,200,170,40);
       if (mouseIsPressed){
           tela=1;
           soundMenu.play();
       
       }
     }
      if(mouseX>205 && mouseX<375 && mouseY>250 && mouseY<290){
          rect(205,250,170,40);
          if (mouseIsPressed){
             tela=2;
             soundMenu.play();  
          }
       }
      if(mouseX>205 && mouseX<375 && mouseY>300 && mouseY<340){
          rect(205,300,170,40);
          if (mouseIsPressed){
              tela=3;
              soundMenu.play();
          }
  
      }

}

  //JOGO
  if(tela==1){ 
    //Imagens
    image(imgUm,0,0);
    image(imgFundo, xfundo, yfundo);
    image(imgAum, xmulta,ymulta);
    image(imgAum2, xmulta2,ymulta2);
    image(imgDesc, xdesc, ydesc);
    image(imgDesc2, xdesc2, ydesc2);
    image(imgDez, xdez, ydez);
    image(imgVinte, xvinte, yvinte);
    image(imgQuarenta, xquarenta, yquarenta);
    text('Qual o preço de um bolo que custava R$50.00 \n'+'e está na promoção com     desconto de 20%?', xperg, yperg);
    
    //Animação cenário
   if(xfundo<width){
      xfundo-=1;
    }
    xdez-=1.5;
    xvinte-=1.5;
    xquarenta-=1.5;
    //animação personagem
   pers++;
   if(pers%2==0){
      image(imgPers1,xpers,ypers);
    }else{
         image(imgPers2,xpers,ypers);
    }
    //Inimigo notificação de multa
    if(xmulta<700){
       xmulta-=2;
    }
    if(xmulta2<1050){
       xmulta2-=3;
    }
    //Cupom de desconto
    if(xdesc<850){
       xdesc-=2;
    } 
    if(xdesc2<1100){
       xdesc2-=2;
    } 
    //choque
    if(xpers===xdesc && ypers===ydesc||xpers===xdesc2 &&ypers===ydesc2){
       xperg=20;
       yperg=80;
    }

    if(xpers===xmulta && ypers===ymulta||xpers===xmulta2 && ypers===ymulta2){
       alert("Não foi dessa vez. Você é capaz, tente novamente!")
       tela=0
    }
    //Resposta

     if(xpers===xdez && ypers===ydez||xpers===xvinte &&ypers===yvinte ){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0;
     }
     if(xpers===xquarenta && ypers===yquarenta){
        tela=4;
     }
  }
    //Fase2//
    if(tela===4){
    image(imgDois,0,0);
    image(imgFundo2, xfundo2, yfundo2);
    image(imgAum3, xmulta3, ymulta3);
    image(imgAum4, xmulta4,ymulta4);
    image(imgAum5, xmulta5,ymulta5);
    image(imgDesc3, xdesc3, ydesc3);
    image(imgDesc4, xdesc4, ydesc4);
    image(img2100, x2100, y2100);
    image(img900, x900, y900);
    image(img1000, x1000, y1000);
    text('Qual o preço final de um sapato que custava R$3000,00 \n'+'e está na promoção com desconto de 70%?', xperg2, yperg2);
    
     //Animação cenário
   if(xfundo2<width){
      xfundo2-=1;
   }
   x2100-=1; 
   x900-=1;
   x1000-=1;
    
    //animação personagem
  pers++;
  if(pers%2==0){
      image(imgPers1,xpers,ypers);
  }else{
        image(imgPers2,xpers,ypers);
  }
    //Inimigo notificação de multa
  if(xmulta3<700){
      xmulta3-=3;
  }
  if(xmulta4<700){
      xmulta4-=3;
  }
  if(xmulta5<700){
     xmulta5-=2;
  }
    //Cupom de desconto
  if(xdesc3<800){
     xdesc3-=3;
  } 
  if(xdesc4<800){
     xdesc4-=1;
  } 
    //choque
   if(xpers===xdesc3 && ypers===ydesc3||xpers===xdesc4 &&ypers===ydesc4){
      xperg3=20;
      yperg3=80;
   }

    if(xpers===xmulta3 && ypers===ymulta3||xpers===xmulta4 && ypers===ymulta4||xpers===xmulta5 && ypers===ymulta5){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0
    }
    //Resposta

     if(xpers===x1000 && ypers===y1000||xpers===x2100 &&ypers===y2100 ){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0;
     }
     if(xpers===x900 && ypers===y900){
        tela=5;
     }
    
  }

   //Fase3//
    if(tela===5){
    image(imgTres,0,0);
    image(imgFundo3, xfundo3, yfundo3);
    image(imgAum6, xmulta6, ymulta6);
    image(imgAum7, xmulta7,ymulta7);
    image(imgAum8, xmulta8,ymulta8);
    image(imgDesc5, xdesc5, ydesc5);
    image(imgDesc6, xdesc6, ydesc6);
    image(img1250, x1250, y1250);
    image(img1400, x1400, y1400);
    image(img1500, x1500, y1500);
    text('O preço de um sofá sofreu um aumento de 25%,\n'+'antes do aumento custava R$1000,00.\n'+'Quanto está custando o sofá depois do aumento?', xperg3, yperg3);
    
     //Animação cenário
   if(xfundo3<width){
      xfundo3-=1;
   }
   x1250-=1; 
   x1400-=1;
   x1500-=1;
    
    //animação personagem
  pers++;
  if(pers%2==0){
      image(imgPers1,xpers,ypers);
  }else{
        image(imgPers2,xpers,ypers);
  }
    //Inimigo notificação de multa
  if(xmulta6<700){
      xmulta6-=2;
  }
  if(xmulta7<700){
      xmulta7-=3;
  }
  if(xmulta8<700){
     xmulta8-=1;
  }
    //Cupom de desconto
  if(xdesc5<800){
     xdesc5-=2;
  } 
  if(xdesc6<800){
     xdesc6-=2;
  } 
    //choque
   if(xpers===xdesc5 && ypers===ydesc5||xpers===xdesc6 &&ypers===ydesc6){
      xperg4=20;
      yperg4=80;
   }

    if(xpers===xmulta6 && ypers===ymulta6||xpers===xmulta7 && ypers===ymulta7||xpers===xmulta8 && ypers===ymulta8){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0
    }
    //Resposta

     if(xpers===x1400 && ypers===y1400||xpers===x1500 &&ypers===y1500 ){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0;
     }
     if(xpers===x1250 && ypers===y1250){
        tela=6;
     }
    
  }
     //Fase4//
    if(tela===6){
    image(imgQuatro,0,0);
    image(imgFundo4, xfundo4, yfundo4);
    image(imgAum9, xmulta9, ymulta9);
    image(imgAum10, xmulta10,ymulta10);
    image(imgAum11, xmulta11,ymulta11);
    image(imgDesc7, xdesc7, ydesc7);
    image(img10, x10, y10);
    image(img50, x50, y50);
    image(img90, x90, y90);
    text('Um anel custa R$100 e você tem 10% de desconto.\n'+'Quao o valor de desconto em reais?', xperg4, yperg4);
    
     //Animação cenário
   if(xfundo4<width){
      xfundo4-=1;
   }
   x90-=3; 
   x10-=3;
   x50-=3;
    
    //animação personagem
  pers++;
  if(pers%2==0){
      image(imgPers1,xpers,ypers);
  }else{
        image(imgPers2,xpers,ypers);
  }
    //Inimigo notificação de multa
  if(xmulta9<700){
      xmulta9-=3;
  }
  if(xmulta10<700){
      xmulta10-=2;
  }
  if(xmulta11<700){
     xmulta11-=1;
  }
    //Cupom de desconto
  if(xdesc7<800){
     xdesc7-=1;
  } 
  
    //choque
   if(xpers===xdesc7 && ypers===ydesc7){
      xperg5=20;
      yperg5=80;
   }

    if(xpers===xmulta9 && ypers===ymulta9||xpers===xmulta10 && ypers===ymulta10||xpers===xmulta11 && ypers===ymulta11){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0
    }
    //Resposta

     if(xpers===x90 && ypers===y90||xpers===x50 &&ypers===y50 ){
        alert("Não foi dessa vez. Você é capaz, tente novamente!")
        tela=0;
     }
     if(xpers===x10 && ypers===y10){
        tela=7;
     }
    
  }
if(tela===7){
  image(imgFim,0,0);
}
//INSTRUÇÕES
if(tela===2){
   background(220);
   textSize(20);
   text('INSTRUÇÕES',50,50);
   text('O jogador precisa pular toda vez que ver uma notificação de multa, ou perde moeda e retorna uma fase. Ganha 1 moeda quando recolhe todos os cupons de desconto da fase, e assim passa de fase. Para pular, aperta Up(seta para cima).',50,100, 500,350);
  text('A Notificação de Multa:',50,250);
  text('O Cupom de Desconto:',350,250);
  image(imgAum,110,260);
  image(imgDesc,410,260);
  text('BACK',68,375);
  if(mouseX>50 && mouseX<130 && mouseY>350 && mouseY<385){
     rect(54,350,80,35);
    if (mouseIsPressed){
     soundMenu.play();  
     tela=0;
  }
  }
}

//CRÉDITOS
if(tela==3){
  background(220);
  textSize(20);
  text('CRÉDITOS',50,50);
  image(imgCreditos,50,80);
  text('Valério Gutemberg de Medeiros Júnior. É professor do IFRN com doutorado em Sistemas e Computação pela Universidade Federal do Rio Grande do Norte. Após a conclusão do doutorado, realizou estágio supervisionado pela universidade francesa de Aix-Marseille em parceria com a companhia ClearSy. Têm experiência na área de desenvolvimento de software, com ênfase em sistema de informação, atuando principalmente em problemas da industria.',160,80, 400,350);
  
  text('BACK',68,375);
   if(mouseX>50 && mouseX<130 && mouseY>350 && mouseY<385){
  rect(54,350,80,35);
  if (mouseIsPressed){
  soundMenu.play();  
  tela=0;
  }
  }
}
}