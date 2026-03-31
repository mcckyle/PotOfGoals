//***************************************************************************************
//
//     Filename: Goal.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file contains the Goal entity.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "goals")
public class Goal
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank
    private String title;

    private String description;

    @Min(0)
    @Max(100)
    private Integer progress = 0;

    private boolean completed = false;

    private Instant createdAt = Instant.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Goal() {}

    public Goal(String title, String description, User user)
    {
        this.title = title;
        this.description = description;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getProgress() {
        return progress;
    }

    public void setProgress(Integer progress) {
        this.progress = progress;
        this.completed = progress >= 100;
    }

    public boolean isCompleted() {
        return completed;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public User getUser() {
        return user;
    }

    @Override
    public boolean equals(Object o)
    {
        if (o == null || getClass() != o.getClass()) return false;
        Goal goal = (Goal) o;
        return Objects.equals(id, goal.id) && Objects.equals(createdAt, goal.createdAt) && Objects.equals(user, goal.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, createdAt, user);
    }
}
