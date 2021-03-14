// フォームの要素を取得
let button = document.getElementById("button");
let form = document.getElementById("form");
let textarea = document.getElementById('textarea');

// 文字数制限
let maxTextNum = textarea.getAttribute('maxlength');

// 残り時間
let reminingTimeNum = 120;

/* 要素の追加 ***************/
// 残り文字数を表示する要素の追加
let textMessage = document.createElement('div');
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

// 残り時間を表示する要素の追加
let timeMessage = document.createElement('div');
parent.insertBefore(timeMessage, null);


// イベント処理
// お問い合わせボタンを押した時
button.addEventListener('click', function() {
	form.style.display = 'block';

	// タイマー処理で残り時間を表示
	let timerId = setInterval(function() {
		timeMessage.innerHTML = '<p>制限時間:' + reminingTimeNum + '秒</p>';
		if (reminingTimeNum <= 0) {
			alert('制限時間終了');
			clearInterval(timerId);
		}
		reminingTimeNum--;
	}, 1000);
});

//これがまさにイベントリスナーとHTML,CSSの操作を組み合わせたJavaScriptをJavaScriptたらしめる処理
//DOM操作とイベント処理がJavaScriptをJavaScriptたらしめている

// テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function() {
  let currentTextNum = textarea.value.length;
  textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力できます。</p>';
});
