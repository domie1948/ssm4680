const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmv0lc9/",
            name: "ssmv0lc9",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmv0lc9/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园活动资讯网"
        } 
    }
}
export default base
