package com.njs.services;

import com.njs.ppmtool.Project;
import com.njs.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdate(Project project){
        return projectRepository.save(project);
    }

}
