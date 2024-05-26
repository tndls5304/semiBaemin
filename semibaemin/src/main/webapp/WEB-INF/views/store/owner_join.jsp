<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>사장 회원가입</title>
    <!-- 글씨체 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
 
   <link rel="stylesheet" href="/app/resources/css/store/owner_join.css">
   <script src="/app/resources/js/store/owner_join.js"></script>
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
                 <button>로그인</button></a></li>
            </ul>
        </nav>
    </aside>
 
    <main>
    
    <c:if test="${not empty resultMsg }">
  	 alert('${resultMsg}');
    </c:if>
    
        <div class="mainjoin"><h1>사장 회원가입 📃</h1></div>
        <form id="signupForm" action="/app/store/store_owner_join" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="id"><h3>아이디</h3> </label>
                <input type="text" id="id"  name="id" class="id-input" placeholder="아이디 입력">
                <button class="id-button">중복검사</button>
                <div class="error-message" id="id-error"></div>
            </div>
            <div class="form-group">
                <label for="password"><h3>비밀번호</h3> </label>
                <input type="password" id="password" name="password" placeholder="비밀번호 입력">
                <div class="error-message" id="password-error"></div>
            </div>
            <div class="form-group">
                <label for="passwordCheck"><h3>비밀번호 확인</h3> </label>
                <input type="password" id="password-check" name="pwdCheck" placeholder="비밀번호 확인">
                <div class="error-message" id="passwordCheck-error"></div>
                <div class="error-message" id="password-mismatch-error"></div>
            </div>
            <div class="form-group">
                <label for="name"><h3>이름</h3></label>
                <input type="text" id="name" name="name" placeholder="이름 입력">
                <div class="error-message" id="name-error"></div>
            </div>
            <div class="form-group">
                <label for="phone"><h3>휴대폰번호</h3></label>
                <input type="number" id="phone" name="phone" placeholder="휴대폰번호는 숫자로만 입력해주세요">
                <div class="error-message" id="phone-error"></div>
            </div>
            <div class="form-group">
                <label for="crn"><h3>사업자 등록 번호</h3></label>
                 <input type="number"  id="crn" name="companyResitrationNumber" placeholder="사업자등록번호는 숫자로만 11자 입력해주세요">
                <div class="error-message" id="crn-error"></div>
            </div>

            <div class="form-group">
                <label for="file-upload" class="custom-file-upload">
                    <h3>사장 프로필 사진</h3>
                </label>
                <input id="file-upload" type="file" name="profile" onchange="previewImage(event)">
                <div class="error-message" id="file-error"></div>
            </div>

            <div id="reviewPreviewImage" class="form-group"></div>
            <div class="btncenter">
                <button type="button" onclick="validateForm()">회원가입하기</button>
            </div>
        </form>
    </main>

    
</body>
</html>