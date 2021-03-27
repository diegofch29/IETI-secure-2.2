package com.eci.cosw.springbootsecureapi.model;

public class Task {

    private String id;
    private String description;
    private String responsible;
    private String status;
    private String dueDate;

    public Task() {
    }
    

    public Task(String id,String description, String responsible, String status, String dueDate) {
        this.id = id;
        this.description = description;
        this.responsible = responsible;
        this.status = status;
        this.dueDate = dueDate;
    }
    

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getResponsible() {
        return this.responsible;
    }

    public void setResponsible(String responsible) {
        this.responsible = responsible;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDueDate() {
        return this.dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }
    

    
}
