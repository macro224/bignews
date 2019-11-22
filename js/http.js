; (function (w) {
    var baseURL = 'http://localhost:8080/api/v1'
    var BigNew = {
        baseURL: baseURL,//基地址
        index_search: baseURL + '/index/search',//文章搜索
        index_category: baseURL + '/index/category',//文章类型
        index_hotpic: baseURL + '/index/hotpic',//热点图
        index_rank: baseURL + '/index/rank',//文章热门排行
        index_latest: baseURL + '/index/latest',//最新资讯
        index_latest_comment: baseURL + '/index/latest_comment',//最新评论
        index_attention: baseURL + '/index/attention',//焦点关注
        index_article: baseURL + '/index/article',//文章详细内容
        index_post_comment: baseURL + '/index/post_comment',//发表评论
        index_get_comment: baseURL + '/index/get_comment',//评论列表
    };
    //暴露接口
    w.BigNew = BigNew;
})(window);