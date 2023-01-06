package com.tanseer.facebookclone.controller;

import com.tanseer.facebookclone.model.Post;
import com.tanseer.facebookclone.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

// calling UI application for that cross-origin, value = URL of application
@CrossOrigin(value = "http://localhost:3000")
@RestController
// v1 is version 1
@RequestMapping("/api/v1/post")
public class PostController {

    //    Controller need object of service
    private PostService postService;

    //    Constructor injection
    public PostController(PostService postService) {
        this.postService = postService;
    }

    //  Mapping the form data fields from UI to backend
    @PostMapping
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception {
        String strPost = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");

        // Creating object of post
        Post post = Post.builder()
                .post(strPost)
                .name(name)
                .email(email)
                .file(file)
                .profilePic(profilePic)
                .timeStamp(new Date().toString())
                .build();

        // Passing the above post to addPost Method in service
        post = postService.addPost(post);
        return post;

    }

    @GetMapping
    public List<Post> getPost(){
        return postService.getPost();
    }
}
