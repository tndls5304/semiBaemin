package com.kh.baemin.store.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kh.baemin.store.service.StoreMenuService;
import com.kh.baemin.store.vo.CategoryVo;

@WebServlet("/store/category_list")
public class StoreCategoryListController extends HttpServlet{
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		
	
	try {
		// TODO StoreNo
		
		CategoryVo vo = new CategoryVo();
	
		// TODO StoreNo
		String storeNo="1";
		
		StoreMenuService sms=new StoreMenuService();
		List<CategoryVo> categoryVolist=sms.selectCategoryList(storeNo);
		req.setAttribute("categoryVolist", categoryVolist);
		req.getRequestDispatcher("/WEB-INF/views/store/menu_edit.jsp").forward(req, resp);
	
	} catch (Exception e) {
		e.printStackTrace();
	}

	
}

@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	doGet(req, resp);
	}
}
