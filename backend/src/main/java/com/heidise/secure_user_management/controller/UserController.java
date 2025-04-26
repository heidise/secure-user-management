package com.heidise.secure_user_management.controller;

import com.heidise.secure_user_management.model.UserModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    // Return all the users.
    @GetMapping
    public String getUsers() {
        return "Test: getUsers()";
    }

    // Get a certain user.
    @GetMapping("/{id}")
    public String getUser(@PathVariable Long id) {
        return "Getting an user with id: " + id;
    }

    // Creating a new user.
    // Change the requestbody type.
    @PostMapping
    public String addUser(@RequestBody String user) {
        return "Creating a new user";
    }

    // Delete a user.
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        return "Deleting an user with id: " + id;
    }

}
