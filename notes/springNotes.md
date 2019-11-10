`@SpringBootApplication` initializes component scan and spring boot auto configuration
`SpringApplication.run(className.class, args)` actually runs the app
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

### Forms
if you dont specify a http method on a form it defaults to Get
POST is more secure, wont send raw data over url, will be sent as body of request
if you have `@RequestMapping("/login")` and dont specify method itll be used for all http request types, get post etc

## Beans, injection, and autowiring
Normally the login service class would be tightly coupled to the login controller because the controller cant validate a login without an instance of the login service `LoginService service = new LoginService();`
In order to uncouple we will use `@Component` on the login service to tell spring that I want you to handle instantiation and injection of this object where I need it. Its a spring bean?
On the controller class we call 
```java 
@Autowired
LoginService service
```
to ask spring for an instance of the loginservice class. This is an example of the IOC. 
Service could be an interface
- @Autowired vs @Inject - autowired is a spring specific annotation and inject is a java annotation

### Injection
can be done by
- setter injection
- constructor injection - best type
- field injection

## Basic annotations
if bean is handling business logic use `@Service`
if bean is handling requests from the browser use `@Controller`
if bean is being used to save to the db use `@Repository`
`@Component` is generic for all 3 above - is a flag that says hey I want spring to handle this entity
`@Autowire` is a flag that will literally autowire it in, this includes dependancy injection and instantiation
`@SpringBootApplication` will start component scan in package and any sub packages
`@ComponentScan` will search for components and you can specify packages `@ComponentScan("com.test.pack1)` 
Component scan will happen from the start file down the package structure so if you move a bean out of that scan scope spring will not know where it went
Beans have types of packages such as com.test.pack1

## Sessions
Model and request fields are only within the scope of a particular request in order to access fields accross controllers and views we need to use a session
`@SessionAttributes("name")` will look at the model and if theres an attribute called name itll take that from the model and store it 

### Side notes
`required="required"` HTML5 attribute to make a form field required
- can either configure spring through xml, java via annotations or both
- can use TCP monitor plugin to see requests in intelliJ

## Serverside validation and comamnd beans/form backing beans
allows for binding of object/bean to a form for validation so you dont have to have a bunch of request params to pass through, just a single object
will be using bean validation api
using jstl to be able to bind fields in the jsp to the todo bean and binding the command bean in the htmld
```java
<form:form method="post" commandName="todo"> <!-- binds todo bean to this jsp -->
			<fieldset class="form-group">
				<form:label path="desc">Description: </form:label>
				<form:input path="desc" type="text" class="form-control" required="required"/> 
				<button type="submit" class="btn btn-success">Submit</button>
			</fieldset>
		</form:form>
```
Double binding - bean is mapped to form(jsp), and form is mapped to a bean
Validation changes need to be made to the all parts of the MVC

## SOLID Design Principles
![SOLID](https://devopedia.org/images/article/177/8101.1558682601.png)

## Interview Questions
[interview_questions](https://www.baeldung.com/spring-interview-questions)

## Spring Framework Configuration

### Spring Stereotypes
Examples `@Component, @Controller, @RestController (represents @Controller & @ResponseBody), @Repository, @Service`

### Component Scan
`@SpringBootApplication` triggers component scan from current package and down 
if you move code above the base package you can specify where to scan for beans by
it also is a replacement for `@Configuration`, `@EnableAutoConfiguration` and,  `@ComponentScan`
To show the auto config report start spring boot with --debug
You can exclude certain classes from auto config by doing @EnableAutoConfiguration(exclude={foo.class, bar.class})
```java
@SpringBootApplication
@ComponentScan(basePackages = {"clark.services", "clark.springframework"})
```
^ this will tell spring to scan in additional packages not below the current directory
### Spring Bean Scopes
- 7 scopes - singleton is default
- set either by xml in bean def or java @Scope annotation in config file
- Singleton - only one instance of the bean is created in the IOC container
- Prototype - a new instance is madde each time the bean is requested
- Request - single instance per http request, only valid in the context of a web aware spring app context
- Session - a single instance per http session, only valid in the context of a web aware spring app context 
- Global session - a single instance per global session, only used on a portlet context
- Application - bean is scoped to the lifecycle of the servlet context
- Websocket - scopes a sinle bean defininition to the lifecycle of a websocket 

## Hibernate
- 4 types of entity relationships: @OneToOne, @OneToMany, @ManyToMany, and @ManyToOne
- DDL = data definition language - aql language to define tables and such
- DML = Data manipulation language - sql language to manupulate those tables

Fetch types - Lazy and Eager
- Lazy will be retrieved only when its needed
- Eager will be retrieved on start

Cascade types control how changes are cascaded from parents to children
- no default cascade type
- Persist, merge, refresh, remove, detach, all
- default persistance strategy is a single table
	- can result in a lot of unused db columns
You can have jpa update timestamps with @CreationTimestamp and @UpdateTimestamp

## Lombok
- use @NoArgsContructor and @AllArgsConstructor with @Builder on data model object to get builder pattern
