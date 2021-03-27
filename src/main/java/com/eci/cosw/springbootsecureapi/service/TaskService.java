package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Task;

import java.util.List;

import javax.servlet.ServletException;


public interface TaskService{
    List<Task> getTasks();

    Task getTask( String id );

    void addTask( Task task );

    List<Task> findTaskByUser( String email )throws ServletException;
}
