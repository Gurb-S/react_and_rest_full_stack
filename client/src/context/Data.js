const api = (path, method = 'GET',body = null, requireAuth = false, credentials = null) => {
    const url = 'http://localhost:5000/api' + path;

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    };

    if(body !== null){
        options.body = JSON.stringify(body);
    }

    if(requireAuth){
        const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
        options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    return fetch(url, options);
}

export const getUser = async(username, password) =>{
    const response = await api(`/users`, 'GET', null, true, { username, password });
    if(response.status === 200) {
        return response.json().then(data => data);
    }
    else if(response.status === 401) {
        return null;
    }
    else{
        throw new Error();
    }
}

export const createUser = async(user) => {
    const response = await api('/users', 'POST', user);
    if(response.status === 201) {
        return response.status;
    }
    else if(response.status === 400){
        return response.json().then( data =>{
            return data.errors;
        });
    }
    else {
        throw new Error()
    }
}

export const getAllCourses = async() => {
    const response = await api('/courses', 'GET');
        if (response.status === 200) {
            return response.json().then(data => data);
        }
        else if(response.status === 400){
            return null;
        }
        else {
            throw new Error();
        }
}

export const getCourse = async(id) => {
    const response = await api(`/courses/${id}`, 'GET');
        if(response.status === 200){
            return response.json().then(data => data);
        }
        else if(response.status === 400){
            return null;
        }
        else {
            throw new Error();
        }
}

export const createCourse = async(data,username, password) => {
    const response = await api(`/courses`, 'POST', data, true, {username, password});
    if(response.status === 201){
        return response.status;
    }
    else{
        return response.json().then( data => data)
    }
}

export const updateCourse = async(id,data, username, password) => {
    const response = await api(`/courses/${id}`, 'PUT', data, true, {username, password});
        if(response.status === 204){
            return response.status;
        }
        else if(response.status === 403){
            return response.json().then( data => data)
        }
        else if(response.status === 400){
            return response.json().then( data => data)
        }
        else {
            throw new Error();
        }
}

export const deleteCourse = async(id, username, password) => {
    const response = await api(`/courses/${id}`, 'DELETE', null, true, { username, password });
    if(response.status === 204){
        return null;
    }
    else if(response.status === 403){
        return response.status;
    }
    else{
        throw new Error();
    }
}

