// アルバムデータの作成
let album = [
  {src: 'img/1.jpg', msg: '山道のみどり'}, // album[0]
  {src: 'img/2.jpg', msg: '階段きつかった'},
  {src: 'img/3.jpg', msg: '!'},
  {src: 'img/4.jpg', msg: 'ロープウェイ'},
  {src: 'img/5.jpg', msg: 'お蕎麦'},
  ];

// 最初のデータの表示をしておく
let mainImage = document.createElement('img'); // img要素を作成
mainImage.setAttribute('src', album[0].src); // src属性をセット
mainImage.setAttribute('alt', album[0].msg); // alt属性をセット
// setAttributeってなんだっけ？
// 要素.setAttribute('属性名', '属性値');属性の指定

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++){
	let thumbImage = document.createElement('img');
	thumbImage.setAttribute('src', album[i].src);
	thumbImage.setAttribute('alt', album[i].msg);
	// この段階でthumbImageが完成したので、HTMLの枠の方に挿入する
	thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメイン画像にする
thumbFlame.addEventListener('click', function(event) {
	if (event.target.src) {
		mainImage.src = event.target.src;
		mainMsg.innerText = event.target.alt;
	}
});
