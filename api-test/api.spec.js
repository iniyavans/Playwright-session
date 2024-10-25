const { test, expect } = require('@playwright/test');

test('Fetch user posts - GET request', async ({ request }) => {
    // Send a GET request
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // Check if the request was successful
    expect(response.status()).toBe(200);

    // Parse response body as JSON
    const data = await response.json();

    // Assert that the data has expected properties
    expect(data).toHaveProperty('id', 1);

    expect(data.userId).toBe(1);
});

test('Create a new post - POST request', async ({ request }) => {
    const newPost = {
        title: 'New Post Title',
        body: 'This is a new post.',
        userId: 1
    };

    // Send a POST request
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: newPost
    });

    // Verify that the request was successful
    expect(response.status()).toBe(201);

    // Parse response body as JSON
    const data = await response.json();

    // Assert that the response contains the new post details
    expect(data.title).toBe(newPost.title);

});

test('Update an existing post - PUT request', async ({ request }) => {
    const updatedPost = {
        title: 'Updated Post Title',
        body: 'This post has been updated.'
    };

    // Send a PUT request
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: updatedPost
    });

    // Verify that the request was successful
    expect(response.status()).toBe(200);

    // Parse response body as JSON
    const data = await response.json();

    // Assert that the data contains updated details
    expect(data.title).toBe(updatedPost.title);
    
});

test('Delete a post - DELETE request', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    // Verify that the deletion was successful
    expect(response.status()).toBe(200);
});
