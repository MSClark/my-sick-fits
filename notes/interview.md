# Topics

## Tibco

## SQL
[w2schools](https://www.w3schools.com/sql/sql_join.asp)
### sample questions
1.  return employee record with highest salary
```sql
select * from employee where salary = (select Max(salary) from employee) 
```
2. select higtest salary in employee table
```sql
select Max(salary) from employee 
```
3. select 2nd highest salary from employee table
```sql
select Max(salary) from employee where salary Not In(select Max(salary) from employee)
```
4. select range of employee based on id
```sql
select * from employee where employee_id between 2003 and 2008
```
5. return employee name, highest salary in department
```sql
select e.first_name, e.last_name, e.salary, d.department_name 
from Employee e Inner Join Department d ON (e.department_id = d.department_id) 
where salary IN (select Max(salary) from employee)
/*e. and d. are variables referring to the two tables of employee and department*/
```
6. return highest salary, employee name, department name for each department
```sql
select e.first_name, e.last_name, e.salary, d.department_name
from Employee e Inner Join Department d ON(e.department_id = d.department_id)
where salary IN (select Max(salary) from employee group by department_id)
```

### Joins
### Functions

## Redhat

### Pipe
### Grep
### ps
### installing programs
### less
### vim

### Common linux questions
* to see the kernal version and information use `uname -a`
* current ip address `ifconfig` or `ip addr show`
* check for free disk space `df -ah` disk free
* manage services on a system old- `service udev status/start/stop` new- `systemctl status udev` udev is the name of the service 
* check size of directory `du -sh dirname` du = disk use 
* check for open ports `netstat -tulpn` 0.0.0.0:* means all public addresses
* check cpu usage on a process `ps aux | grep nginx` or `top` or `htop` with install
* mount usb `mount `absolute addr to device and where you want to mount it ex. `mount /dev/sta2 /mnt` mount cmd on its own will show mounted partitions
* `man command` to get to manpages
## CI/CD tools (jenkins)

## General Notes