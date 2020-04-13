<%@tag import="java.util.Date"%>
<%@ tag language="java" pageEncoding="UTF-8"%>


<%@ attribute name="color" required="true" %>
<%@ attribute name="size" required="true" %>

<p>A tag file is a source file that contains a fragment of JSP code that is reusable as a custom tag</p>
<div style="color:${color};font-size:${size}"><%=new Date()%></div>


<pre>&lt;%@ attribute name="greeting" required="true" %&gt;
&lt;%@ attribute name="name" required="true" %&gt;
&lt;h2&gt;&lt;font color="black"&gt;${greeting}, ${name}!&lt;/font&gt;&lt;/h2&gt;</pre>

<pre>
&lt;%@tag import="java.util.Date"%%&gt;
&lt;%@ tag language="java" pageEncoding="UTF-8"%&gt;


&lt;%@ attribute name="color" required="true" %&gt;
&lt;%@ attribute name="size" required="true" %&gt;

&lt;div style="color:${color};font-size:${size}"&gt;&lt;%=new Date()%&gt;&lt;/div&gt;

</pre>