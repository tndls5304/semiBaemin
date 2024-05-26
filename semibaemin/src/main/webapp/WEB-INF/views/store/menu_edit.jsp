<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 글씨체 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="/app/resources/css/store/menu_edit.css">
  <script defer src="/app/resources/js/store/menu_edit.js"></script>
 
</head>
<body>
    <aside>
      <nav>
        <ul>
            
            <li><a href=""><h1>사장님 페이지</h1></a></li>
            <li><a href="">스토어 허가 신청</a></li>
            <li><a href="">주문관리🕗</a></li>
            <li><a href="">스토어 관리</a></li>
            <li><a href="">회원관리</a></li>
            <li><a href="">음식메뉴편집</a></li>
            <li><a href="">매출관리</a></li>
            <li><a href="">리뷰관리</a></li>
            <li><a href="">
             <button>로그아웃</button></a></li>

        </ul>
    </nav>
    </aside>
<main>
<div class="header">
 	 <h2>음식 메뉴편집🍴🍴</h2>
	 <div>  
			<form action="/app/store/category_delete" id="deleteForm" method="post">
						 <input type="hidden" name="categoryNoText" id="submitCategoryNoText">
				        <button type="button" onclick="showSelectionEdit()">선택수정</button>
				        <td class="menu" ><button type="submit" class="delete-Button" onclick="showSelectionDelete()">선택삭제</button></td>
			</form>
	</div>
</div>
         
   

    <!-- -------------------------카테고리 추가 시 화면에 나타나는 테이블(❗❗❗나중에 JSTL로 하기) --------------------- -->
<c:if test="${!empty categoryVolist}">
  <c:forEach var="categoryVo" items="${categoryVolist}">
   
	   <table id="plusTable" class="plus-table">
		      <tr>
		            <th class="select">선택</th>
		            <th  colspan="3" name>카테고리</th>
		            <th class="display">노출여부</th>
		            <th class="edit" ></th>
		            <th class="edit" ></th>
		      </tr>
		
		
	
		
		      <tr>
		           <form action="/app/store/category_delete" method="post">
			          <td><input type="checkbox" name="checkbox" id="checkCategoryNo-${categoryVo.no}"  data-type="category" data-name="${categoryVo.name}"  ></td>
			          <td class="category"  colspan="3">${categoryVo.name}
			          	<input type="hidden" name="categoryNoText" value="${categoryVo.no}"></td>
			          <td  class="category">${categoryVo.viewYn}</td> 
			          <td  class="category" id="categoryEdit"> <button onclick="tableShowCategoryEdit(${categoryVo.no})">수정</button></td>
			          <td  class="category"><button type="submit" class="delete-Button" >삭제</button></td>
					</form>
		      </tr>
		
		      <tr>
			          <th></th>
			          <th>메뉴<button class="menuPlus-button" onclick="showMenuPlus()">추가</button></th>
			          <th>메뉴가격</th>
			          <th>사진</th>
			          <th>노출여부</th>
				      <th></th>
				       <th></th>
		  	  </tr> 
	   		 <!--- 추가적인 행 필요 시 이곳에 삽입 ----->
	   </table>
   </c:forEach>
</c:if>
    <button class="category-plus" onclick="showCategoryRegist()" >카테고리추가</button>



</main>
    <!------------------------------ hidden 모달창-------------------------------------------->



                
    <!--  체크박스 누르고 카테고리변경클릭시 뜨는 창   showCategoryEdit()        -->     
                
   <form action="/app/store/category_edit" id="categoryEditForm" method="POST">
      <div id="categoryEditBlock" class="categoryEdit-block">
        <div class="detail-content">
         <p>카테고리 수정하기</p>
     
                 <p>NAME(20글자이내)   :
                     <input type="text" name="name" id="categoryEditNaming" value="" maxlength='20' /></p>
                     <div id="errorMsg-categoryName" class="errorMsgCategoryName"></div>     
              
                     <p>노출여부  :
                       <select name="viewYn">
                         <option value="Y">Y</option>
                         <option value="N">N</option>
                      </select>  
               		 </p>
               		   <input name="categoryNoText" type="text" id="modalCategoryNo" value="">
       </div>
        <div class="detail-delete">
                 <button type="submit" id="categoryEditDelete-click" onclick="categoryEditDelete()">등록</button>  
        </div>
 </div>




    </form>
  





      <!--  카테고리등록 클릭시 뜨는 모달창   showCategoryRegist()        -->     
                
     <div id="categoryRegistBlock" class="categoryRegist-block">
          <form action="/app/store/category_add" method="post" >
	            <div class="detail-content">
	                       <p>카테고리 추가 </p>
	                       <p> NAME:
	                            <input name="name" type="text" value="" id="categoryPlusName"  maxlength='20' required>
	                            </p>  <h5>(20글자이내)</h5>
	                        노출여부  :
	                           <select name="viewYn">
	                                <option value="Y">Y</option>
	                                <option value="N">N</option>
	                           </select>  
	            </div>
	            <div class="detail-delete">
	                  <button type="submit">등록</button>   
	            </div>
          </form>
      </div>

<!-- 메뉴 수정 클릭시 뜨는 창 showMenuEdit()-->
  
<div id="menuEditBlock" class="menuEdit-block">
        <form action="url" method="post" class="menu-form">
          <div>
              <p>메뉴 변경</p>
              <p>name(20글자이내): </p>
              <p> <input type="text" class="menuEdit-naming" id="menuEditnaming"  value=""  maxlength='20' ></p>
            <div id="errorMsg-menuName" class="errorMsgMenu"></div>
              <p>price  : <input type="number" id="menuEditPrice" value="" ></p>
            <div id="errorMsg-menuPrice" class="errorMsgMenu"></div>
              <p>사 진  : <img src="" id="menuEditImg" ></p>
              <p><button type="button">삭제</button> <button type="button">추가</button></p>
          
              <p>노출여부  :
                    <select name="" id="">
                      <option value="Y">Y</option>
                      <option value="N">N</option>
                  </select>
            </p>
          
          
                </div>
          
          <div class="detail-delete">
              <button id="menuEditRegister-click" onclick="menuEditRegister()" type="submit">등록</button>
          </div>
        </form>
  </div>


  <!-- 메뉴 추가 클릭시 뜨는 창  showMenuPlus()-->
  <form action="/" method="post" id="menuPlusForm">
        <div id="menuPlusBlock" class="menuPlus-block">
          <div>
              <p>메뉴 추가</p>
              <p>name :  <input name="name" type="text" id="menuPlusName" required></p>
              <p>price  : <input name="price" type="number" id="menuPlusPrice" required></p>
              <p>사 진  : <img  name="" src="">
              			<button type="button" >추가</button> <button type="button">취소</button></p>
          
              <p>노출여부  :
                <select name="">
                      <option value="">Y</option>
                      <option value="">N</option>
                </select>  
              </p>
          </div>
              <div class="detail-delete">
                <button onclick="menuPlusDelete()" type="submit">등록</button>  
            </div>
        </div>
  </form>

    
</body>
</html>
