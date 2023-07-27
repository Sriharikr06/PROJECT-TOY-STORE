package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int uid;
	private String username;
	private String mail;
	private String password;
	private String mobile;
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public UModel(int uid, String username, String mail, String password, String mobile) {
		super();
		this.uid = uid;
		this.username = username;
		this.mail = mail;
		this.password = password;
		this.mobile = mobile;
	}
	
	public UModel() {
		
	}

}
