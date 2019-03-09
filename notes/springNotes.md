## Basic pom.xml notes
spring boot starter parent `<parent>` in pom file specifies version of dependencies default plugins, jave version and is used in a hierarchal way in that it in herits from other sources
spring boot starter web - provides dependencies needed to run web apps such as validation, logging, data binding, tomcat etc. 
## Spring MVC Request Flow
DispatcherServlet receives HTTP Request.
DispatcherServlet identifies the right Controller based on the URL.
Controller executes Business Logic.
Controller returns a) Model b) View Name Back to DispatcherServlet.
DispatcherServlet identifies the correct view (ViewResolver).
DispatcherServlet makes the model available to view and executes it.
DispatcherServlet returns HTTP Response Back.
Front Controller = Dispacher servlet
Flow : http://docs.spring.io/spring-framework/docs/2.0.8/reference/images/mvc.png
![Flow](http://docs.spring.io/spring-framework/docs/2.0.8/reference/images/mvc.png)

