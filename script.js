window.onload = () => {
  // #image1に画像を描画
  drawConcat();

  // #image2にテキストを描画
  drawImage1();
  drawImage2();

  // 「+」ボタンを押したら合成
  document.querySelector("#btn-concat").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image1"]);
  });

  // 「消しゴム」ボタンを押したらクリア
  document.querySelector("#btn-eraser").addEventListener("click", ()=>{
    eraseCanvas("#concat");
  });

};

/**
 * [onload] うな重の画像を描画
 */
function drawConcat(){
  const Nui = new Image();
  Nui.src = "images/nui.PNG";
  Nui.onload = () =>{
    const canvas = document.querySelector("#concat");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Nui, 0, 0, canvas.width, canvas.height);
  }
}

/**
 * [onload] 洋服を描画
 */
function drawImage1(){
   const Body1 = new Image();
  Body1.src = "images/body01.PNG";
  Body1.onload = () =>{
    const canvas = document.querySelector("#image1");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body1, 0, 0, canvas.width, canvas.height);
  }
}

function drawImage2(){
   const Leg1 = new Image();
  Leg1.src = "images/leg01.PNG";
  Leg1.onload = () =>{
    const canvas = document.querySelector("#image2");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg1, 0, 0, canvas.width, canvas.height);
  }
}




/**
 * Canvas合成
 *
 * @param {string} base 合成結果を描画するcanvas(id)
 * @param {array} asset 合成する素材canvas(id)
 * @return {void}
 */
 async function concatCanvas(base, asset){
  const canvas = document.querySelector(base);
  const ctx = canvas.getContext("2d");

  for(let i=0; i<asset.length; i++){
    const image2 = await getImagefromCanvas(asset[i]);
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  }
}

/**
 * Canvasをすべて削除する
 *
 * @param {string} target 対象canvasのid
 * @return {void}
 */
function eraseCanvas(target){
  const Nui = new Image();
  Nui.src = "images/nui.PNG";
  Nui.onload = () =>{
    const canvas = document.querySelector("#concat");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Nui, 0, 0, canvas.width, canvas.height);
    }

//   const canvas = document.querySelector(target);
//   const ctx = canvas.getContext("2d");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Canvasを画像として取得
 *
 * @param {string} id  対象canvasのid
 * @return {object}
 */
function getImagefromCanvas(id){
  return new Promise((resolve, reject) => {
    const image = new Image();
    const ctx = document.querySelector(id).getContext("2d");
    image.onload = () => resolve(image);
    image.onerror = (e) => reject(e);
    image.src = ctx.canvas.toDataURL();
  });
}
