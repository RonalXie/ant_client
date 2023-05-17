import request from "@/uitls/request";


export function insertArticle(data) {
    return request({
        url: '/article/save',
        method: 'post',
        data:data
    })
}
export function selectPage(data){
    return request({
        url:"/article/select",
        method:"get",
        params:data
    })
}

export function selectArticleBySid(sid){
    return request({
        url:`/article/select/${sid}`,
        method:"post"
    })
}

export function deleteArticleBySid(sid){
    return request({
        url:`/article/delete/${sid}`,
        method:'post'
    })
}

export function  updateArticle(data){
    return request({
        url:'/article/update',
        method:'post',
        data:data
    })
}
