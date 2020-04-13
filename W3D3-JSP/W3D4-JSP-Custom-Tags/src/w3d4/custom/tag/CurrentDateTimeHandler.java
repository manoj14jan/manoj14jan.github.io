package w3d4.custom.tag;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

public class CurrentDateTimeHandler extends TagSupport{
	
	private String color;
	private String size;
	
	
	
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 2150116248782697870L;

	@Override
	public int doStartTag() throws JspException {
		String style ="";
		
		if(color!=null) {
			style +="color:"+color+";";
		}
		if(size!=null) {
			style +="font-size:"+size+";";
		}
		
		JspWriter out =  pageContext.getOut();
		try {
			LocalDate dNow = LocalDate.now();
			String now = dNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"));
			out.println("<div style=\""+style+"\">"+now +"</div>");
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return SKIP_BODY;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

}
