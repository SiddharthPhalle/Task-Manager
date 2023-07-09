# Task-Manager
Developed a Task manager web application which can be used to manage tasks. 
**Technologies used**: React, Redux, JavaScript, HTML, CSS, Bootsrap

Below are the application screenshots:

![Screenshot 2023-07-09 154859](https://github.com/SiddharthPhalle/Task-Manager/assets/73328750/b3d1710a-86be-4e8f-a95f-06a7808a5f9b)
![Screenshot 2023-07-09 154929](https://github.com/SiddharthPhalle/Task-Manager/assets/73328750/5d4a367f-825b-4387-b6f2-2d61f9840991)
When task is added and to be completed yet
![Screenshot 2023-07-09 155116](https://github.com/SiddharthPhalle/Task-Manager/assets/73328750/d801d601-3fc3-4a91-ac34-390ad7fec234)
Once marked completed can be seen in completed list with the toggle shown
![Screenshot 2023-07-09 155142](https://github.com/SiddharthPhalle/Task-Manager/assets/73328750/405a8a72-c3b1-485f-aaba-70f0277607f2)
Also added export button which helps to export the task to excel. 
![Screenshot 2023-07-09 155707](https://github.com/SiddharthPhalle/Task-Manager/assets/73328750/73b22a0e-33f3-4bf3-8774-e5dd1cb2e43d)

Explanation
In this project I have used componenents such as Forms, Modals, Cards etc. which can be reused going forward. Also Redux is used to manage the state of the application effectively. Once the task is created we will append object in "tasks" state using Redux store.
1) When marked completed we will make isCompleted as true so that task can be seen in completed list
2) When marked edited we will reuse same form used for creating new task and will edit the object
3) When maked deleted we will remove the particular object hab=ving same id
4) To export into excel react-csv package is used. We can export either all tasks or completed tasks depending on the status of toggle button 

**How to run in your local**
1) Download the zip or clone the repo
2) Open in your ide
3) do npm install
4) npm start
