package com.kh.baemin.store.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.kh.baemin.store.service.StoreMenuService;
import com.kh.baemin.store.vo.CategoryVo;
import com.kh.baemin.store.vo.StoreOwnerVo;

@WebServlet("/store/category_add")
public class StoreCategoryAddController extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		try {
			
			//TODO StoreNo
			String name=req.getParameter("name");
			String viewYn=req.getParameter("viewYn");
	
			
			CategoryVo vo=new CategoryVo();
			vo.setName(name);
			vo.setViewYn(viewYn);
			//TODO StoreNo
			vo.setStoreNo("1");

			 StoreMenuService sms=new  StoreMenuService();;
			int result=sms.categoryAdd(vo);
			
			if(result==1) {
				req.setAttribute("resultMsg", "카테고리 추가 성공!");
			}else {
				req.setAttribute("resultMsg", "카테고리 추가 실패!ㅜㅜ");
			}
			resp.sendRedirect("/app/store/category_list");
			
		}
		catch(Exception e){
			e.printStackTrace();
			System.out.println(e.getMessage());
			req.setAttribute("errMsg", e.getMessage());
			req.getRequestDispatcher("/WEB-INF/views/common/error.jsp").forward(req, resp);
		}
	}
}
