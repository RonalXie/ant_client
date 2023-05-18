import request from "@/uitls/request";


export function insertArticle(data) {
    return request({
        url: '/article/save',
        method: 'post',
        data:data
    })
}
export function selectPage(pageParams){
    return request({
        url:"/article/select",
        method:"post",
        params:pageParams,
    })
}

export function selectTop(pageParams){
    return request({
        url:"/article/select",
        method:"post",
        params:pageParams,
        data:{
            top:true
        }
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

export function selectHot(){
    return request({
        url:'/article/hot',
        method:"post"
    })
}
