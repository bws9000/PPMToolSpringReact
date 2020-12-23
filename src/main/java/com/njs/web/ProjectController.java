package com.njs.web;

import com.njs.ppmtool.Project;
import com.njs.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("/project")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project) {
        Project result = projectService.saveOrUpdate(project);
        return ResponseEntity.ok().body(result);
    }
}
