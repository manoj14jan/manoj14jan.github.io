<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<jsp:directive.include file="header.jspf" />

<jsp:directive.include file="navbar.jspf" />


<div class="card w-75 mt-3 ml-auto mr-auto">
	<h5 class="card-header">Thank you! Your message has been received
		as follows</h5>
	<div class="card-body">
		<h5 class="card-title">Name: ${param.name}</h5>
		<p class="card-text">Gender: ${param.gender}</p>
		<p class="card-text">Category: ${param.category}</p>
		<p class="card-text">Message: ${param.message}</p>
		Please feel free to
		<a href="contact-us-form.jsp">Contact Us</a>
		again
	</div>
</div>

<jsp:directive.include file="footer.jspf" />