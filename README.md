# server_pi

### Устанавливаем все необходимое
`npm install --global yarn <если еще не установлен> `   
`cd step_5 `   
`yarn install `   
[Docker desktop](https://www.docker.com/products/docker-desktop/) <если еще не установлен> 
### Работа с докером
`docker-compose build `    
`docker-compose up `  


<p align="left">
  <img src="screenshot.png" width="600" title="hover text">
</p>

### curl - на маке предустановлен, работа через консоль. 
#### Но можно вводить и через браузер
`curl -i localhost:4000/createEmployee `      
`curl -i localhost:4000/employees    `      
`curl -i localhost:4000/employeeById/<cюда _id сотрудника>   `       
`curl -i localhost:4000/deleteEmployeeById/<cюда _id сотрудника>  `        
`curl -i localhost:4000/deleteEmployees    `      
`curl -i localhost:4000/createGrade    `      
`curl -i localhost:4000/grades `      
`curl -i localhost:4000/gradeById/<cюда _id грейда> `      
`curl -i localhost:4000/deleteGradeById/<cюда _id грейда>`       
`curl -i localhost:4000/deleteGrades`      


### Немного о структуре данных
Данные лежат в [new_file.sql](new_file.sql).  
В папку models добавляется модель данных (каркас таблицы). Поле _id создается mongodb автоматически, и у него свой отдельный тип данных.  
В папке [controllers](step_5/controllers) прописываются функции, которые будут забираться router-ом в [server.js](step_5/server.js)

Сейчас создаются [dummy-data](step_5/dummy_data/db.js) для удобства отладки.

### Требования
https://docs.google.com/document/d/18rbnDhDa8y0yuUUje21dGH9x_Pa29aVdGpy7zm1px7c/edit?usp=sharing

### Выбор стека технологий для реализации
<img width="564" alt="image" src="https://user-images.githubusercontent.com/62689637/200595575-300bdd65-cf05-44f4-bf37-4318ad480aef.png">

### Метод работы команды
#### Мы используем Feature Branch Workflow
В своей простейшей форме репозиторий мог бы иметь основную ветку со стабильным, доступным кодом и другими ветками для разных фич (или багов, или улучшений), которые можно бы было интегрировать в главную ветку. То есть репозиторий будет иметь второстепенную основную ветку (dev) которая будет хранить тестируемый стабильный код для отправки пользователям, когда он будет слит с main. В этом случае ветка с фичами будет слита с dev, а не с main.

Этот подход больше подходит нашей команде, потому что наш проект находится в продолжительной разработке и нам нужно  будет добавить набор фич до следующего релиза. Эти фичи назначены разным разработчикам, которые создают отдельную ветку для каждой опубликованной фичи до того, как она будет слита с dev для тестирования. Когда мы будем готовы к релизу, dev сольется с main.

### План работы 
При создании изменений создается новый бранч под именем непосредственно изменения, вносится необходимое изменение и они сохраняются. Далее если команда согласна с этими изменениями происходит объединение веток с main.

### Состав комманды
Группа: ПИ19-1        
Каменчук Виктория        
Петров Анна        
Деревянкин Александр        
Хватов Артур        
