<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<jsp:directive.include file="header.jspf" />

<jsp:directive.include file="navbar.jspf" />

<div class="w-75 m-auto">

	<h4 class="mt-3 mb-3">Customer Contact Form</h4>

	<c:forEach var="error" items="${errors}">
		<div class="d-block invalid-feedback">${error}</div>
	</c:forEach>

	<form method="post" action="form-validation">
		<div class="form-group mt-3">
			<label for="name">*Name</label>
			<input type="text" class="form-control" id="name" name="name"
				placeholder="John H Smith">
		</div>
		<div class="form-group">
			<label>*Gender</label>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="gender"
					id="gender-male" value="Male">
				<label class="form-check-label mr-5" for="gender-male">Male</label>
				<input class="form-check-input" type="radio" name="gender"
					id="gender-female" value="Female">
				<label class="form-check-label" for="gender-female">Female</label>
			</div>
		</div>
		<div class="form-group">
			<label for="category">*Category</label>
			<select class="form-control" id="category" name="category">
				<option value="">select</option>
				<option value="Feedback">Feedback</option>
				<option value="Inquiry">Inquiry</option>
				<option value="Complaint">Complaint</option>
			</select>
		</div>
		<div class="form-group">
			<label for="message">*Message</label>
			<textarea class="form-control" id="message" name="message" rows="3"></textarea>
		</div>
		<div class="form-group">
			<button type="submit" class=" w-100 btn btn-primary">Submit</button>
		</div>
	</form>

</div>

<jsp:directive.include file="footer.jspf" />