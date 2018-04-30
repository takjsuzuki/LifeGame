<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LifeGameWithCanvas</title>




<script>
  function CountAlive (x,y,Lx,Ly,array){
  var AliveCells = -array[x][y];

  for(let i = 0; i < 3; i++) {
		     for(let j = 0; j < 3; j++) {
  					var xn = (x+i-1+Lx)%Lx;
  					var yn = (y+j-1+Ly)%Ly;
  					<!-- document.write("xn = "+xn+" "); -->
  					<!-- document.write("yn = "+yn+" \n"); -->
					if(array[xn][yn] == 1){
					AliveCells += 1
					}
  					}
  		     }

  // document.write("Alive = "+AliveCells)
  return AliveCells;
  
  }
</script>


<script>
  function Fate (present,AliveCells){
  var next = 0;
  if (present == 0){
  if (AliveCells == 3){
  next = 1;
  }
  }
  else{
  if(AliveCells == 2 || AliveCells == 3)
  next = 1;
  }
  return next
  }
</script>

<script>
  function Forward(Lx,Ly,array) {


      // Initialization
      for (  var i = 0;  i < Lx;  i++  ) {
	  for (  var j = 0;  j < Ly;  j++  ) {
	      array[i][j] = Math.round(Math.random());
	  }
      }
      
      
  // for (  let i = 0;  i < Lx;  i++  ) {
  // 			 for (  let j = 0;  j < Ly;  j++  ) {
  // 						array[i][j] = Fate (array[i][j],CountAlive(i,j,Lx,Ly,array));
  // 						}
      //  						}
      return array;
      
  }

  
</script>




<script>
  function Draw(context,array){
  cellsize = 10;
  for (let i=0;i<10;i++){
		   for(let j=0;j<10;j++){
				   if(array[i][j] == 0){
				   context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤
				   }
				   else{
				   context.fillStyle = 'rgb(00,00,255)'; //塗りつぶしの色は赤
				   }
				   context.fillRect(cellsize*i,cellsize*j,cellsize,cellsize);
				   }
				   }

  return 0;
  }
</script>




<script>
  function drawLoopSquare() {
    /* Canvas要素の定義など */
    var cs  = document.getElementById('myCanvas');
    var ctx = cs.getContext('2d');
    var w = cs.width;
    var h = cs.height;
    var x = 0;

    /* 描画フロー */
    function render() {
        // Canvas全体をクリア
        ctx.clearRect(0, 0, w, h);

        // 要素を描画する
        ctx.beginPath();
        ctx.strokeRect(x, 0, 10, 10);

        // 要素を動かす
        // 四角形のx座標がCanvasの横幅を超えたら初期位置(x座標を0)へ
        // そうでなければ、x座標を1増やす
        if (x > cs.width) {
            x = 0;
        } else {
            x += 1;
        }

        // このrender関数を繰り返す
        // 下記どちらかを使った場合は、外側でrender()を実行する※1（もしくは即時実行）
        // setTimeout(render, 100);
        // requestAnimationFrame(render);
    }
    /* ※1 */
    // render();

    /* render()関数を繰り返す */
    /* setTimeout、requestAnimationFrameではなく、setIntervalを使う場合 */
    setInterval(render, 100);
}
</script>


// //<script>
// <script type="text/javascript">
//   function render(context,Lx,Ly,Width,Height,array){

//       context.clearRect(0, 0, Width, Height);
      
//       Draw(context,array);
//       document.write(array);
//       Forward(Lx,Ly,array);
//       document.write(array);
//   }
// </script>

//<script>
<script type="text/javascript">
  function render(context,Lx,Ly,Width,Height,array){

      document.write("1");
  }
</script>




<script type="text/javascript">

<!--
function Loop() {



// //描画コンテキストの取得
// var canvas = document.getElementById('LifeGame');
// if (canvas.getContext) {

// var context = canvas.getContext('2d');
// var Width = canvas.width;
// var Height = canvas.height;
// context.clearRect(0, 0, Width, Height);

// var Lx = 10
// var Ly = 10
// var array = new Array(Lx);
// for(let y = 0; y < Ly; y++) {
//   array[y] = new Array(Lx).fill(0);
// }

// // Initialization
// for (  var i = 0;  i < Lx;  i++  ) {
// for (  var j = 0;  j < Ly;  j++  ) {
// array[i][j] = Math.round(Math.random());
// }
// }


//render(context, Width, Height,Lx,Ly,array);
//setInterval(render.bind(undefined, context, Width, Height,Lx,Ly,array), 100);


// Draw(context,array);





}
}
//-->
</script>

</head>
<body onLoad="Loop()">
<h2>LifeGameWithCanvas</h2>
<canvas id="LifeGame" style="background-color:yellow;">
図形を表示するには、canvasタグをサポートしたブラウザが必要です。
</canvas>
</body>
</html>
