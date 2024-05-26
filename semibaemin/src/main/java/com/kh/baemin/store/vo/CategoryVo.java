package com.kh.baemin.store.vo;

public class CategoryVo {
	  
	private String no;
	private String name;
	private String viewYn;
	private String storeNo;
	public CategoryVo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CategoryVo(String no, String name, String viewYn, String storeNo) {
		super();
		this.no = no;
		this.name = name;
		this.viewYn = viewYn;
		this.storeNo = storeNo;
	}
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getViewYn() {
		return viewYn;
	}
	public void setViewYn(String viewYn) {
		this.viewYn = viewYn;
	}
	public String getStoreNo() {
		return storeNo;
	}
	public void setStoreNo(String storeNo) {
		this.storeNo = storeNo;
	}
	@Override
	public String toString() {
		return "CategoryVo [no=" + no + ", name=" + name + ", viewYn=" + viewYn + ", storeNo=" + storeNo + "]";
	}
	
	
	
	
	
}
