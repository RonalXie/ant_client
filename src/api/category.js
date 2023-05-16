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
