import { baseUrl } from "./trackApi"
export async function registrationApi({ email, password, username }) {
    const response = await fetch(baseUrl + '/user/signup/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            username: username,
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    if(response.ok) {
        return response.json()
    } else if (response.status === 400) {
        throw new Error('Такой пользователь уже существует')
    } else if (response.status === 500) {
        throw new Error ('Сервер сломался')
    }
}

export async function loginApi({ email, password }) {
    const response = await fetch(baseUrl + '/user/login/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    if(response.ok) {
        return response.json()
    } else if (response.status === 400) {
        throw new Error('Не передан пароль')
    } else if (response.status === 500) {
        throw new Error ('Сервер сломался')
    } else if (response.status === 401) {
        throw new Error ('Пользователь с таким email или паролем не найден')
    }
}