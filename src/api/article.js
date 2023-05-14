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
