package com.eci.cosw.springbootsecureapi.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletException;

import com.eci.cosw.springbootsecureapi.model.Task;

public class TaskServiceImpl implements TaskService {

    private List<Task> taskList = new ArrayList<>();

    @PostConstruct
    private void populateSampleData(){
        taskList.add(new Task("1","do something","diego@mail.com","ready","01/01/2022"));
        taskList.add(new Task("1","something else","angie@mail.com","late","01/01/2021"));
        taskList.add(new Task("1","study","juan@mail.com","almost","01/01/2021"));
    }

    @Override
    public List<Task> getTasks() {
        return taskList;
    }

    @Override
    public Task getTask(String id) {
        Task task = null;
        for(Task t: taskList){
            if(t.getId()==id){
                task = t;
                break;
            }
        }
        return task;
    }

    @Override
    public void addTask(Task task) {
        taskList.add(task);
        
    }

    @Override
    public List<Task> findTaskByUser(String email) throws ServletException {
        List<Task> temp = taskList;
        temp.removeIf(task -> (!task.getResponsible().equals(email)));
        return temp;
    }
    
}
