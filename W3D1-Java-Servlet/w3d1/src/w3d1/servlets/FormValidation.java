package w3d1.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FormValidation
 */
@WebServlet("/form-validation")
public class FormValidation extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FormValidation() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String[] errors = new String[4];

		String name = request.getParameter("name");
		String gender = request.getParameter("gender");
		String category = request.getParameter("category");
		String message = request.getParameter("message");
		
		if(name == null || name.isBlank()) {
			errors[0]= "Name is missing";
		}
		
		if(gender == null || gender.isBlank()) {
			errors[1]= "Gender is missing";
		}
		
		if(category == null || category.isBlank()) {
			errors[2]= "Category is missing";
		}
		
		if(message == null || message.isBlank()) {
			errors[3]= "Message is missing";
		}

		request.setAttribute("errors", errors);

		for(String error:errors) {
			if(error!=null) {
				request.getRequestDispatcher("/contact-us-form").forward(request, response);
				return;
			}
		}

		response.sendRedirect("http://localhost:8080/w3d1/thank-you?name="+name+"&gender="+gender+"&category="+category+"&message="+message);

	}

}
