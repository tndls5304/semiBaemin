
function showDetails() {
	var detailBlock = document.getElementById("detailBlock");
	if (detailBlock.style.display === "none" || detailBlock.style.display === "") {
		detailBlock.style.display = "block";
	} else {
		detailBlock.style.display = "none";
	}
}


function detailDelete() {
	detailBlock.style.display = "none";
}

// 카테고리 수정시에 나오는 모달창  showCategoryEdit()  ----------------------------------


//tag 요소는 
//   <td><input type="checkbox" name="checkbox" data-type="category" data-name="반반피자" ></td>
function showCategoryEdit(tag) {
	var categoryEditBlock = document.getElementById("categoryEditBlock");
	if (categoryEditBlock.style.display === "none" || categoryEditBlock.style.display === "") {
		categoryEditBlock.style.display = "block";

		//모달창에서  수정전에 기본으로 넣어줄 카테고리 이름 
		var categoryEditNaming = categoryEditBlock.querySelector('#categoryEditNaming');
		var dataName = tag.getAttribute("data-name");
		categoryEditNaming.value = dataName;

		var modalCategoryNo = categoryEditBlock.querySelector('#modalCategoryNo');
		var checkCategoryNo = tag.getAttribute("id");
		modalCategoryNo.value = checkCategoryNo;

	} else {
		categoryEditBlock.style.display = "none";
	}
}

function categoryEditDelete() {
	categoryEditBlock.style.display = "none"; categoryEditDelete - click
}


// 테이블에서 카테고리 수정시 나오는 모달창 tableShowCategoryEdit()----------------------------
function tableShowCategoryEdit(no) {

	var tag = document.querySelector("#checkCategoryNo-" + no);
	showCategoryEdit(tag);
}





// 메뉴 체크박스에서 선택수정을 클릭했을떄 모달 창 나오게하는 showMenuEdit ----------------------


//  전달받은 tag는
//  <td><input type="checkbox" name="checkbox" data-type="menu" 
//data-name="불고기피자메뉴" data-price="19000" data-src="/수인img/카테고리-돈까스회일식.png"></td>


function showMenuEdit(
) {
	//  메뉴수정 모달창 띄우기 
	var menuEditBlock = document.getElementById("menuEditBlock");
	if (menuEditBlock.style.display === "none" || menuEditBlock.style.display === "") {
		menuEditBlock.style.display = "block";

		//메뉴수정 모달창에서 input 태그는?   
		// <p>name :  <input type="text" id="menuEditnaming"  value=""></p>

		var menuEditnaming = menuEditBlock.querySelector('#menuEditnaming');

		//(화면 )체크박스 태그 요소안에서 data-name의 값을 가져와서 
		// -----> (모달창) 에 넣어줌
		var dataName = tag.getAttribute("data-name")
		menuEditnaming.value = dataName;



		//체크박스요소에서 가격을 받아서 모달창에기본값으로 넣어주기
		var dataPrice = tag.getAttribute("data-price");
		//menuEditPrice 요소는??  <input type="text" id="menuEditPrice" value=""> 를들고옴..
		menuEditPrice = menuEditBlock.querySelector("#menuEditPrice");
		menuEditPrice.value = dataPrice;

		//체크박스요소에서 이미지경로를 받아서 모달창에 기본값으로넣어주기 
		var dataImg = tag.getAttribute("data-img");

		var menuEditImg = menuEditBlock.querySelector("#menuEditImg");
		menuEditImg.src = dataImg;

	} else {
		menuEditBlock.style.display = "none";
	}
}

// 메뉴변경 모달창에서 등록버튼 누르면 동작!!!!! 

function menuEditDelete() {

	// menuEditBlock.style.display="none";



}


//테이블에서 바로 메뉴 수정 버튼을 클릭할때 작동 tableShowMenuEdit()
function tableShowMenuEdit(no) {
	var noTag = document.querySelector("#menu-no");
	showMenuEdit(noTag);
}



//카테고리 등록 showCategoryRegist()  
function showCategoryRegist() {
	var categoryRegistBlock = document.getElementById("categoryRegistBlock");
	if (categoryRegistBlock.style.display === "none" || categoryRegistBlock.style.display === "") {
		categoryRegistBlock.style.display = "table";
	} else {
		categoryRegistBlock.style.display = "none";
	}
}

function categoryPlusRquest() {
	// categoryRegistBlock.style.display="none";
	// plusTable.style.display="table"


}



// 메뉴 추가 
function showMenuPlus() {
	var menuPlusBlock = document.getElementById("menuPlusBlock");
	if (menuPlusBlock.style.display === "none" || menuPlusBlock.style.display === "") {
		menuPlusBlock.style.display = "block";
	} else {
		menuPlusBlock.style.display = "none";
	}
}


function menuPlusDelete() {
	var plusTable = document.querySelector("#plusTable");
	plusTable.style.display = "none";
}





// 체크박스 클릭후 선택수정 버튼 클릭했을때 동작하는 함수 ----------------------------
function showSelectionEdit() {


	//name이 체크박스인 모든요소를 들고옴
	var checkboxTags = document.getElementsByName('checkbox');

	for (var idx = 0; idx < checkboxTags.length; idx++) {

		// 체크박스 정보
		var checkboxTag = checkboxTags[idx]

		if (checkboxTag.checked) {
			//체크박스의 데이터 타입 가져옴  data-type= category/menu 요소 중에 하나일것    data-name="카테고리이름 or 메뉴이름"
			var checkboxType = checkboxTag.getAttribute('data-type');
			// var checkboxDataName = checkboxTag.getAttribute('data-name');

			if (checkboxType == 'category') {
				showCategoryEdit(checkboxTag);
			} else {
				showMenuEdit(checkboxTag);
			}
			return;
		}
	}
}





//카테고리 이름 입력안했을떄 뜨는 경고
document.querySelector("#categoryEditNaming").addEventListener("keyup", function() {

	// 카테고리 수정하고 제출전에 스페이스바 없애기
	var categoryEditNaming = document.querySelector("#categoryEditNaming")
	SpaceDeleteCategoryNaming = categoryEditNaming.value.trim();
	categoryEditNaming.value = SpaceDeleteCategoryNaming;

	isValid = true;
	if (categoryEditNaming.value === null || categoryEditNaming.value === "") {

		document.querySelector("#errorMsg-categoryName").innerText = "입력되지 않았습니다!!!";


		var categoryEditDeleteClick = document.querySelector("#categoryEditDelete-click");
		categoryEditDeleteClick.disabled = true;

		isValid = false;

	}

	if (isValid) {


		var categoryEditDeleteClick = document.querySelector("#categoryEditDelete-click");
		categoryEditDeleteClick.disabled = false;
		document.querySelector("#errorMsg-categoryName").innerText = "";

		//  document.querySelector("#categoryEditForm").submit();

	}

}

)

// const menuForm = document.querySelector(".menu-form");

// menuForm.addEventListener("submit", (e) => {
//   const menuEditName = document.querySelector(".menuEdit-naming").value;
//   const menuEditPrice = document.querySelector("#menuEditPrice").value;
//   const publicYn = document.querySelector("#publicYn").value;

//   if(!menuEditName) {
//     e.preventDefault();
//     alert("이름 쓰셔야합니다");
//   }

//   if (!menuEditPrice) {
//     e.preventDefault();
//     alert("가격 쓰셔야합니다");
//   }

// })



// 메뉴변경 모달창에서 메뉴 이름을 아무것도 입력안하면 버튼동작  못하게 하고 빨간글씨로 경고메세지
let isMenuNameEdit = true;
var menuEditnaming = document.querySelector("#menuEditnaming");

menuEditnaming.addEventListener("keyup", function() {
	// 제출전에 스페이스바 없애기
	var SpaceDeleteMenuNameEdit = menuEditnaming.value.trim();
	menuEditnaming.value = SpaceDeleteMenuNameEdit;


	if (menuEditnaming.value === null || menuEditnaming.value === "") {
		document.querySelector("#errorMsg-menuName").innerText = "메뉴를 입력해주세요❗❗❗";


		isMenuNameEdit = false;

		document.querySelector("#menuEditRegister-click").disabled = true;

	} else {
		document.querySelector("#errorMsg-menuName").innerText = "";
		isMenuNameEdit = true;

	}

	menuEditState();
})

// // 메뉴변경 모달창에서 가격을 아무것도 안누르면 버튼동작 못하게 하고   빨간글씨로 경고메세지
let isMenuPriceEdit = true;

var menuEditPrice = document.querySelector("#menuEditPrice");
menuEditPrice.addEventListener("keyup", function() {
	console.log("namingvalue:", menuEditnaming.value);

	if (menuEditPrice.value === null || menuEditPrice.value === "") {
		document.querySelector("#errorMsg-menuPrice").innerText = "가격을 입력하셔야 합니다❗❗❗"
		document.querySelector("#menuEditRegister-click").disabled = true;
		isMenuPriceEdit = false;

	} else {
		document.querySelector("#errorMsg-menuPrice").innerText = ""
		isMenuPriceEdit = true;

	}

	menuEditState();
})

//버튼 누르기전에 메뉴이름과 가격 입력했을때 버튼 활성화 시켜주깅~
function menuEditState() {
	console.log("과연");

	// 둘다 true
	if (isMenuNameEdit && isMenuPriceEdit) {
		document.querySelector("#menuEditRegister-click").disabled = false;
		// menuEditBlock.style.display="none";
		console.log("되나요");
	}
}


// 제출할때 이벤트리스너 달고 띄어쓰기 있는 부분 삭제하고 제출하기 
//스페이스바는 제출할때 없애주는것!!!!!!!!!!!!!!!!!!!!!
var menuPlusForm = document.querySelector("#menuPlusForm");
menuPlusForm.addEventListener("submit", function() {

	var menuPlusName = document.querySelector("#menuPlusName");

	var SpaceDeleteMenuPlusName = menuPlusName.value.trim();



	menuPlusName.value = SpaceDeleteMenuPlusName;

	console.log(menuPlusName);


})


// 카테고리 추가버튼 누르고  이름적는칸에  스페이스바 적었을때 없애주기

var menuPlusName = document.querySelector("#menuPlusName");
menuPlusName.addEventListener("keyup", function() {

	var SpaceDeleteMenuPlusName = menuPlusName.value.trim();
	menuPlusName.value = SpaceDeleteMenuPlusName;

})







//체크박스 체크후 선택 삭제 버튼 클릭시 작동-------------------------------
function showSelectionDelete() {
	if (confirm("정말로 삭제하시겠습니까?")) {

		//name이 체크박스인 모든요소를 들고옴 체크박스가 메뉴인지 카테고리인지 구분하기위함
		var checkboxTags = document.getElementsByName('checkbox');

		for (var idx = 0; idx < checkboxTags.length; idx++) {

			// 체크박스 정보
			var checkboxTag = checkboxTags[idx]

			if (checkboxTag.checked) {
				//체크박스의 데이터 타입 가져옴  data-type= category/menu 요소 중에 하나일것    data-name="카테고리이름 or 메뉴이름"
				var checkboxType = checkboxTag.getAttribute('data-type');
				// var checkboxDataName = checkboxTag.getAttribute('data-name');

				if (checkboxType === 'category') {
					showCategoryDelete(checkboxTag);
					
				} else {
					showMenuDelete(checkboxTag);
				}
				return; // 첫 번째 체크된 항목을 처리한 후 함수 종료
			}
		}
	} else {
		// 사용자가 취소를 선택한 경우
		return;
	}
}

//체크후-> 선택삭제  체크박스가 카테고리라면?
//tag 요소는 요런거...
//   <td><input type="checkbox" name="checkbox" id="checkCategoryNo-${categoryVo.no}"  data-type="category" data-name="${categoryVo.name}"  ></td>
function showCategoryDelete(tag) {

	var categoryNoText = tag.getAttribute("id"); //체크박스의 아이디 속성을 가져와서 

	var submitCategoryNoText=document.querySelector("#submitCategoryNoText"); //폼태그로 제출할 태그의 밸류값에 넣어주기 여기에 카테고리 번호가 포함된 문자가 있다
	submitCategoryNoText.value=categoryNoText;
}


