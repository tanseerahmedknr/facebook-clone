package com.tanseer.facebookclone.service;

import com.tanseer.facebookclone.model.Post;

import java.util.List;

public interface PostService {

    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
