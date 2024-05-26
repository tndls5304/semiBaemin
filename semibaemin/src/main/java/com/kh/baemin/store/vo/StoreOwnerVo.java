package com.kh.baemin.store.vo;

import javax.servlet.http.Part;

public class StoreOwnerVo {
	private String id;
	private String pwd;
	private String pwdCheck;
	private String name;
	private String phone;
	private String companyResitrationNumber;
	private String profile;
	private String storeInforNo;
	public StoreOwnerVo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StoreOwnerVo(String id, String pwd, String pwdCheck, String name, String phone,
			String companyResitrationNumber, String profile, String storeInforNo) {
		super();
		this.id = id;
		this.pwd = pwd;
		this.pwdCheck = pwdCheck;
		this.name = name;
		this.phone = phone;
		this.companyResitrationNumber = companyResitrationNumber;
		this.profile = profile;
		this.storeInforNo = storeInforNo;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getPwdCheck() {
		return pwdCheck;
	}
	public void setPwdCheck(String pwdCheck) {
		this.pwdCheck = pwdCheck;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getCompanyResitrationNumber() {
		return companyResitrationNumber;
	}
	public void setCompanyResitrationNumber(String companyResitrationNumber) {
		this.companyResitrationNumber = companyResitrationNumber;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public String getStoreInforNo() {
		return storeInforNo;
	}
	public void setStoreInforNo(String storeInforNo) {
		this.storeInforNo = storeInforNo;
	}
	@Override
	public String toString() {
		return "StoreOwnerVo [id=" + id + ", pwd=" + pwd + ", pwdCheck=" + pwdCheck + ", name=" + name + ", phone="
				+ phone + ", companyResitrationNumber=" + companyResitrationNumber + ", profile=" + profile
				+ ", storeInforNo=" + storeInforNo + "]";
	}
	

	
	
	
}
