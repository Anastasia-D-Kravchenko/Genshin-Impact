var d = document,
	dataBox = d.querySelectorAll('.data-box'), 
	cartCont = d.getElementById('cart_content');
function getCartData(){ // catch LocalStorage
	return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){ // write LocalStorage
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
function addToCart(e){ // add object
	this.disabled = true;
	var cartData = getCartData() || {}, // new object or catch information
			parentBox = this.parentNode, // &quot parent
			dataId = this.getAttribute('data-id'), // I-D 
			dataTitle = parentBox.querySelector('.data_title').innerHTML, // T-I-T-L-E
      		dataImg = this.getAttribute('data-img'),  // I-M-G
			dataImg = '<img src="'+dataImg+'" id="im">';
	if(cartData.hasOwnProperty(dataId)){ // if != null -> +1 
		cartData[dataId][2] += 1;
	} else { // plus in the object
		cartData[dataId] = [dataImg, dataTitle, 1];
	}
	// LocalStorage update
	if(!setCartData(cartData)){
		this.disabled = false;
		// cartCont.innerHTML = 'Add';
	}
	return false;
}
for(var i = 0; i < dataBox.length; i++){// add
	addEvent(dataBox[i].querySelector('.add_data'), 'click', addToCart);
}
function openCart(e){// O-P-E-N
	var cartData = getCartData(), // catch an object
			totalItems = '',
			totalCount = 0;
	if(cartData !== null){ // if the object is
		totalItems = '<table class="shopping_list"><div id="wa">Wishbasket</div></tr>';
		for(var items in cartData){
			totalItems += '<tr id="mm">';
			for(var i = 0; i < cartData[items].length; i++){//damn
				if(i <= cartData[items].length-3){
					totalItems += '<td>' + cartData[items][i] + '</td>';
				}else if(i != cartData[items].length-2){
					totalItems += '<td>' + cartData[items][i] + '</td>';
				}else{
					totalItems += '<td style="width: 100%;">' + cartData[items][i] + '</td>';
				}
			}
			totalCount += cartData[items][2];
			totalItems += '<td><span class="del_item" data-id="'+ items +'">X</span></td>';
			totalItems += '</tr>';
		}
		if(totalCount != 0){
			totalItems += '<tr id="dfg"><td><strong>Total:</strong></td><td><span id="total_count">'+ totalCount +'</span>pcs.</td></tr>';
		}else{
			totalItems += "Houston we have a problem here nothing";
		}
		totalItems += '</table><div id="evry"><button id="clear_cart" onclick="openRes()">Calculate results</button>&nbsp;<button id="cose" onclick="cose()">Close cart</button> </div>';
		cartCont.innerHTML = totalItems;
		d.querySelector("#cart_content").style.padding = "0";
	} else { // if = null(nothing)
		cartCont.innerHTML = 'В корзине пусто!';
		d.querySelector("#cart_content").style.padding = "50px 0";
	}
	return false;
}
function closest(el, sel) { // it's need(find - parent object)
	if (el !== null)
	return el.matches(sel) ? el : (el.querySelector(sel) || closest(el.parentNode, sel));
}
function openRes(){
	// totalCount = parentBox.querySelector('#total_count').innerHTML;
	// if(totalCount != 0){
	// 	cartCont.innerHTML = '<img src="img/shans-vypadeniya-legi-v-genshin-impact-kak-vybit-legu_1.jpg" id="im">';
	// }else{
	// 	cartCont.innerHTML = 'You didn\'t choose enough characters';
	// }
	// location.href = 'file:///C:/Users/Admin/Documents/love%20school/indexLogin.html?';
}
// open
addEvent(d.getElementById('checkout'), 'click', openCart);
//results
// addEvent(d.getElementById('clear_cart'), 'click', openRes);
function op(){
	d.querySelector("#cart_content").style.display = "flex";
	d.querySelector(".jqcart-layout").style.display = "flex";
	d.querySelector("#clear_cart").classList.add("new");
	d.querySelector("#cose").classList.add("new1");
	d.querySelector("#evry").classList.add("cle");
	d.querySelector('html').style.overflowY = "hidden";
}
// close
function cose() {
	d.querySelector("#cart_content").style.display = "none";
	d.querySelector(".jqcart-layout").style.display = "none";
	d.querySelector("#clear_cart").classList.remove("new");
	d.querySelector("#cose").classList.remove("new1");
	d.querySelector("#evry").classList.remove("cle");
	d.querySelector('html').style.overflowY = 'scroll';
}
// delete 1 object
addEvent(d.body, 'click', function(e){
	if(e.target.className === 'del_item') {
		var dataId = e.target.getAttribute('data-id'),
		cartData = getCartData();
		if(cartData.hasOwnProperty(dataId)){
			var tr = closest(e.target, 'tr');
			tr.parentNode.removeChild(tr); // delete the string of the table
			var totalCountOutput = d.getElementById('total_count'); // recalculate 0.1
			totalCountOutput.textContent = +totalCountOutput.textContent - cartData[dataId][2]; // recalculate 0.2
			delete cartData[dataId]; // remove the object from all objects
			setCartData(cartData); // localStorage rerecorded
		}
	}openCart();
}, false);
// all delete if need
// addEvent(d.getElementById('С_Ю_Д_И'), 'click', function(e){
// 	localStorage.removeItem('cart');
//  localStorage.clear();
// 	cartCont.innerHTML = 'Empty cart';
// });