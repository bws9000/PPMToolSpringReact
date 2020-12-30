package com.njs.services;

import com.njs.exceptions.ProjectIdException;
import com.njs.ppmtool.Project;
import com.njs.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdate(Project project) {

        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID " + project.getProjectIdentifier().toUpperCase() + " already exists");
        }
    }

    public Project findProjectByIdentifier(String id) {
        Project project = projectRepository.findByProjectIdentifier(id.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID '" + id + "' does not exist");

        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteProjectById(String id){
        Project p = projectRepository.findByProjectIdentifier(id.toUpperCase());
        if(p == null){
            throw new ProjectIdException("Delete Error: ID: " + id + " doesn't exist.");
        }
        projectRepository.delete(p);
    }

}
