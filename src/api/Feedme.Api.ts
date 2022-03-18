const _path = 'https://secure-brushlands-80295.herokuapp.com/api';

async function postDataJson(url: string, data: object) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });

    return response;
}

async function postFormData(url: string, data: FormData) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',

        body: data,
    });

    return response;
}

async function getData(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    });

    return response;
}
export const setRecepieLike = async (value: boolean, id: string) => {
    const res = getData(_path + '/recepie/like/' + id).then((res) => res);
    const data = await (await res).json();
    return { value: data.value, currentLikesCounter: data.counter };
};

export const setCookbookLike = async (value: boolean, id: string) => {
    const res = getData(_path + '/cookbook/like/' + id).then((res) => res);
    const data = await (await res).json();

    return { value: data.value, currentLikesCounter: data.counter };
};

export const signIn = async (email: string, password: string) => {
    const res = postDataJson(_path + '/auth/sign-in', {
        email: email,
        password: password,
    });

    return res;
};
export const signUp = async (
    email: string,
    username: string,
    password: string,
    repeatPassword: string,
) => {
    const res = postDataJson(_path + '/auth/sign-up', {
        email: email,
        username: username,
        password: password,
        repeatPassword: repeatPassword,
    });

    return res;
};
export const signInWithCookie = async () => {
    const res = getData(_path + '/auth/tokenAuth');

    return res;
};

export const getAllRecepies = async () => {
    const res = getData(_path + '/recepie/get');
    console.log(await res);
    return res;
};

export const deleteRecepie = async (id: string) => {
    const res = getData(_path + '/recepie/delete/' + id);

    return res;
};

export const cloneRecepie = async (id: string) => {
    const res = getData(_path + '/recepie/addtosave/' + id);
    //console.log(await (await res).json());
    return res;
};

export const getAllCookbooks = async () => {
    const res = getData(_path + '/cookbook/get');
    //console.log(await res);
    return res;
};

export const deleteCookbook = async (id: string) => {
    const res = getData(_path + '/cookbook/delete/' + id);

    return res;
};

export const cloneCookbook = async (id: string) => {
    const res = getData(_path + '/cookbook/addtosave/' + id);
    //console.log(await (await res).json());
    return res;
};

export const getUserCookbooks = async (id: string) => {
    const res = getData(_path + '/user/getcookbooks/' + id);

    return res;
};
export const getUserRecepies = async (id: string) => {
    const res = getData(_path + '/user/getrecepies/' + id);

    return res;
};

export const getUserById = async (id: string) => {
    const res = getData(_path + '/user/get/' + id);

    return res;
};

export const getUsers = async () => {
    const res = getData(_path + '/user/get');

    return res;
};

export const updateUserImage = async (data: File) => {
    const formData = new FormData();
    formData.append('image', data);

    const res = postFormData(_path + '/user/changeimage', formData);

    return res;
};

export const updataUserText = async (data: string) => {
    const res = postDataJson(_path + '/user/changeusertext', {
        newUserText: data,
    });

    return res;
};
export const updataUserEmail = async (data: string) => {
    const res = postDataJson(_path + '/user/changeemail', { newEmail: data });

    return res;
};

export const updataUserPassword = async (data: string) => {
    const res = postDataJson(_path + '/user/changepassword', {
        newPassword: data,
    });

    return res;
};

export const updataUserName = async (data: string) => {
    const res = postDataJson(_path + '/user/changename', { newName: data });

    return res;
};

export const deleteUser = async () => {
    const res = getData(_path + '/user/deleteuser');

    return res;
};

export const getRecepieById = async (id: string) => {
    const res = getData(_path + '/recepie/get/' + id);

    return res;
};

export const sendRecepieComment = async (id: string, text: string) => {
    const res = postDataJson(_path + '/recepie/addcomment', {
        recepieId: id,
        commentText: text,
    });

    return res;
};

export const sendCookbookComment = async (id: string, text: string) => {
    const res = postDataJson(_path + '/cookbook/addcomment', {
        cookbookId: id,
        commentText: text,
    });

    return res;
};

export const getCookbookById = async (id: string) => {
    const res = getData(_path + '/cookbook/get/' + id);

    return res;
};

export const createNewRecpeie = async (
    image: File,
    title: string,
    ingredients: string[],
    directions: string[],
    description: string,
    cookingTime: number,
) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('directions', JSON.stringify(directions));
    formData.append('description', description);
    formData.append('cookingTime', cookingTime.toString());

    const res = postFormData(_path + '/recepie/create', formData);

    return res;
};

export const createNewCookbook = async (
    image: File,
    title: string,
    isVegatarian: boolean,
    isWithoutEggs: boolean,
    isWithoutMilk: boolean,
    description: string,
    recepieIdList: string[],
) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('isVegatarian', isVegatarian.toString());
    formData.append('isWithoutEggs', isWithoutEggs.toString());
    formData.append('isWithoutMilk', isWithoutMilk.toString());
    formData.append('description', description);
    formData.append('recepieIdList', JSON.stringify(recepieIdList));

    const res = postFormData(_path + '/cookbook/create', formData);

    return res;
};

export const updateCookbook = async (
    cookbookId: string,
    image?: File,
    title?: string,
    isVegatarian?: boolean,
    isWithoutEggs?: boolean,
    isWithoutMilk?: boolean,
    description?: string,
    recepieIdList?: string[],
) => {
    const formData = new FormData();
    formData.append('cookbookId', cookbookId);
    if (image) {
        formData.append('image', image);
    }
    if (title) {
        formData.append('title', title);
    }
    if (isVegatarian) {
        formData.append('isVegatarian', isVegatarian.toString());
    }
    if (isWithoutEggs) {
        formData.append('isWithoutEggs', isWithoutEggs.toString());
    }
    if (isWithoutMilk) {
        formData.append('isWithoutMilk', isWithoutMilk.toString());
    }
    if (description) {
        formData.append('description', description);
    }
    if (recepieIdList) {
        formData.append('recepieIdList', JSON.stringify(recepieIdList));
    }

    const res = postFormData(_path + '/cookbook/update', formData);

    return res;
};
