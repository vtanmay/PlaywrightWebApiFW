import {expect, test} from '@playwright/test'

let AUTH_TOKEN = {Authorization : 'Bearer 84eb6cbec898e575697821f685098eed0ba4f3b3931cc3331e48c7a653923630'};

test('verify get user api', async({request})=>{
    let response = await request.get('https://gorest.co.in/public/v2/users/',{
        headers: AUTH_TOKEN
});
    console.log(response.status());
    console.log(response.statusText());
    let jsonBody = await response.json();
    console.log(jsonBody);
})

test('get a particular user', async({request})=>{
    let response =  await request.get('https://gorest.co.in/public/v2/users/8637785', {
        headers : AUTH_TOKEN
    });
    
    console.log(response.status());
    console.log(response.statusText());
    let jsonBody = await response.json();
    console.log(jsonBody);
})

test('testing a post call', async({request})=>{
    // JS object 
    let user = {
    name: "Banya QA",
    email: `Banya_${Date.now()}@tmail.com`,
    gender: "male",
    status: "active"
}

// JS object --> JSON string - serialization / marshalling - post call does auto serialization.
    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data : user
    });
    console.log(response.status());
    let jsonBody = console.log(await response.json());
    console.log(jsonBody);

    // get user and verify.
    //request.get('https://gorest.co.in/public/v2/users/8638111')
})