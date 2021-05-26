window.onload = () => {
  // #image1に画像を描画
  drawConcat();

  // #image2にテキストを描画
  drawImage1();
  drawImage102();
  drawImage103();
  drawImage104();
  drawImage105();
  drawImage106();
  drawImage107();
  drawImage108();
  drawImage109();
  drawImage110();
  drawImage111();
  drawImage112();
  drawImage113();
  drawImage114();
  drawImage115();
  drawImage2();
  drawImage202();
  drawImage203();
  drawImage204();
  drawImage205();
  drawImage206();
  
  
   // 「消しゴム」ボタンを押したらクリア
  document.querySelector("#btn-eraser").addEventListener("click", ()=>{
    eraseCanvas("#concat");
  });

  // 「+」ボタンを押したら合成
  document.querySelector("#btn-concat").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image1"]);
    });
  document.querySelector("#btn-concat102").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image102"]);
    });
  document.querySelector("#btn-concat103").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image103"]);
    });
  document.querySelector("#btn-concat104").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image104"]);
    });
  document.querySelector("#btn-concat105").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image105"]);
    });
  document.querySelector("#btn-concat106").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image106"]);
    });
  document.querySelector("#btn-concat107").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image107"]);
    });
  document.querySelector("#btn-concat108").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image108"]);
    });
  document.querySelector("#btn-concat109").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image109"]);
    });
  document.querySelector("#btn-concat110").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image110"]);
    });
  document.querySelector("#btn-concat111").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image111"]);
    });
  document.querySelector("#btn-concat112").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image112"]);
    });
  document.querySelector("#btn-concat113").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image113"]);
    });
  document.querySelector("#btn-concat114").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image114"]);
    });
  document.querySelector("#btn-concat115").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image115"]);
    });
    
   document.querySelector("#btn-concat2").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image2"]);
  });
  document.querySelector("#btn-concat202").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image202"]);
  });
  document.querySelector("#btn-concat203").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image203"]);
  });
  document.querySelector("#btn-concat204").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image204"]);
  });
  document.querySelector("#btn-concat205").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image205"]);
  });
  document.querySelector("#btn-concat206").addEventListener("click", ()=>{
    concatCanvas("#concat", ["#image206"]);
  });


};

/**
 * [onload] ぬいぐるみ画像を描画
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
function drawImage102(){
   const Body2 = new Image();
  Body2.src = "images/body02.PNG";
  Body2.onload = () =>{
    const canvas = document.querySelector("#image102");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body2, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage103(){
   const Body3 = new Image();
  Body3.src = "images/body03.PNG";
  Body3.onload = () =>{
    const canvas = document.querySelector("#image103");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body3, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage104(){
   const Body4 = new Image();
  Body4.src = "images/body04.PNG";
  Body4.onload = () =>{
    const canvas = document.querySelector("#image104");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body4, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage105(){
   const Body5 = new Image();
  Body5.src = "images/body05.PNG";
  Body5.onload = () =>{
    const canvas = document.querySelector("#image105");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body5, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage106(){
   const Body6 = new Image();
  Body6.src = "images/body06.PNG";
  Body6.onload = () =>{
    const canvas = document.querySelector("#image106");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body6, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage107(){
   const Body7 = new Image();
  Body7.src = "images/body07.PNG";
  Body7.onload = () =>{
    const canvas = document.querySelector("#image107");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body7, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage108(){
   const Body8 = new Image();
  Body8.src = "images/body08.PNG";
  Body8.onload = () =>{
    const canvas = document.querySelector("#image108");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body8, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage109(){
   const Body9 = new Image();
  Body9.src = "images/body09.PNG";
  Body9.onload = () =>{
    const canvas = document.querySelector("#image109");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body9, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage110(){
   const Body10 = new Image();
  Body10.src = "images/body10.PNG";
  Body10.onload = () =>{
    const canvas = document.querySelector("#image110");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body10, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage111(){
   const Body11 = new Image();
  Body11.src = "images/body11.PNG";
  Body11.onload = () =>{
    const canvas = document.querySelector("#image111");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body11, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage112(){
   const Body12 = new Image();
  Body12.src = "images/body12.PNG";
  Body12.onload = () =>{
    const canvas = document.querySelector("#image112");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body12, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage113(){
   const Body13 = new Image();
  Body13.src = "images/body13.PNG";
  Body13.onload = () =>{
    const canvas = document.querySelector("#image113");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body13, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage114(){
   const Body14 = new Image();
  Body14.src = "images/body14.PNG";
  Body14.onload = () =>{
    const canvas = document.querySelector("#image114");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body14, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage115(){
   const Body15 = new Image();
  Body15.src = "images/body15.PNG";
  Body15.onload = () =>{
    const canvas = document.querySelector("#image115");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Body15, 0, 0, canvas.width, canvas.height);
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
function drawImage202(){
   const Leg2 = new Image();
  Leg2.src = "images/leg02.PNG";
  Leg2.onload = () =>{
    const canvas = document.querySelector("#image202");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg2, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage203(){
   const Leg3 = new Image();
  Leg3.src = "images/leg03.PNG";
  Leg3.onload = () =>{
    const canvas = document.querySelector("#image203");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg3, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage204(){
   const Leg4 = new Image();
  Leg4.src = "images/leg04.PNG";
  Leg4.onload = () =>{
    const canvas = document.querySelector("#image204");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg4, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage205(){
   const Leg5 = new Image();
  Leg5.src = "images/leg05.PNG";
  Leg5.onload = () =>{
    const canvas = document.querySelector("#image205");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg5, 0, 0, canvas.width, canvas.height);
  }
}
function drawImage206(){
   const Leg6 = new Image();
  Leg6.src = "images/leg06.PNG";
  Leg6.onload = () =>{
    const canvas = document.querySelector("#image206");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(Leg6, 0, 0, canvas.width, canvas.height);
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
    const image1 = await getImagefromCanvas(asset[i]);
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
//   const Nui = new Image();
//   Nui.src = "images/nui.PNG";
//   Nui.onload = () =>{
//     const canvas = document.querySelector("#concat");
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(Nui, 0, 0, canvas.width, canvas.height);
//     }

  const canvas = document.querySelector(target);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
