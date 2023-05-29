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
        url:"/article/searchPageInfo",
        method:"post",
        params:pageParams,
    })
}

export function selectTop(){
    return request({
        url:"/article/searchBase",
        method:"post",
        data:{
            top:true
        }
    })
}

export function selectArticleById(id){
    return request({
        url:`/article/searchArticleInfo`,
        method:"post",
        data:{
            id:id
        }
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
        url:'/article/searchBase',
        method:"post",
        params:{
            sort:'views'+' '+'desc'
        }
    })
}

export function selectRecent(){
    return request({
        url:'/article/searchBase',
        method:"post",
        params:{
            sort:'create_time'+' '+'desc'
        }
    })
}

