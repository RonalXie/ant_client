import request from "@/uitls/request";

export function insertCategory(category){
    return request({
        url:"/category/save",
        method:"post",
        data:category,
    })
}

export function getCategories(){
    return request({
        url:"/category/list",
        method:"get"
    })
}

export function selectPage(pageParams){
    return request({
        url:"/category/select",
        method:"post",
        params:pageParams,
    })
}
