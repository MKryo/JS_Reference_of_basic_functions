let practice = document.getElementById("practice"); // window.document.getElementByIdの略
practice.innerHTML = '<h1>れんしゅう</h1>';
practice.style.backgroundColor = '#999999';
practice.style.fontSize = '30px';
practice.style.color = '#ffffff';

// 要素の追加
let first = document.createElement('div'); //引数はタグの指定
first.setAttribute('id', 'first'); //タグの属性はidで名前はfirst
first.innerHTML = '<p>要素を追加</p>'; //内容
practice.insertBefore(first, null);

//さらに要素を追加
let second = document.createElement('div');
second.setAttribute('id', 'second');
second.innerHTML = 'Ahoy!';
practice.insertBefore(second, first);

//要素を削除
let parent = first.parentElement; //子要素から親要素を取得
parent.removeChild(first); //引数に指定した子要素を削除