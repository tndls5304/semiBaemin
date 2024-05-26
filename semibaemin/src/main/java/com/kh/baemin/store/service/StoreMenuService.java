package com.kh.baemin.store.service;

import static com.kh.baemin.db.SqlSessionTemplate.getSqlSession;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.kh.baemin.store.dao.StoreMenuDao;
import com.kh.baemin.store.vo.CategoryVo;

public class StoreMenuService {

	private final StoreMenuDao dao;

	public StoreMenuService() {
		this.dao = new StoreMenuDao();
	}

	public int categoryAdd(CategoryVo vo) throws Exception {
		// 비지니스로직

		if (vo.getName().length() > 60) {
			throw new Exception("카테고리 이름이 너무 깁니다 60글자 이하로 적어주세요");
		}

		if (vo.getName() == null || vo.getName().trim().isEmpty()) {
			throw new Exception("카테고리 이름은 스페이스바 제외 1글자 이상으로 써주세요 .");
		}

		if (!"Y".equals(vo.getViewYn()) && !"N".equals(vo.getViewYn())) {
			throw new Exception("노출여부는 Y 혹은 N중에 선택해주셔야 합니다.");
		}

		// dao호출

		SqlSession ss = getSqlSession();
		int result = dao.categoryAdd(ss, vo);

		if (result == 1) {
			ss.commit();
		} else {
			ss.rollback();
		}
		ss.close();
		return result;
	}

	public List<CategoryVo> selectCategoryList(String storeNo) throws Exception {
		SqlSession ss = getSqlSession();

		List<CategoryVo> categoryVoList = dao.selectCategoryList(ss,storeNo);

		ss.close();
		System.out.println(categoryVoList);
		return categoryVoList;

	}

	public int categoryEdit(CategoryVo vo) throws Exception {
		// 비지니스로직

		if (vo.getName().length() > 60) {
			throw new Exception("카테고리 이름이 너무 깁니다 60글자 이하로 적어주세요");
		}

		if (vo.getName() == null || vo.getName().trim().isEmpty()) {
			throw new Exception("카테고리 이름은 스페이스바 제외 1글자 이상으로 써주세요 .");
		}

		if (!"Y".equals(vo.getViewYn()) && !"N".equals(vo.getViewYn())) {
			throw new Exception("노출여부는 Y 혹은 N중에 선택해주셔야 합니다.");
		}

		// dao호출
		SqlSession ss = getSqlSession();
		int result = dao.categoryEdit(ss, vo);

		if (result == 1) {
			ss.commit();
		} else {
			ss.rollback();
		}
		ss.close();

		return result;
	}

	public int categoryDelete(CategoryVo vo) throws Exception {
		SqlSession ss = getSqlSession();
		int result = dao.categoryDelete(ss, vo);
		if (result == 1) {
			ss.commit();
		} else {
			ss.rollback();
		}
		ss.close();
		return result;
	}

}
