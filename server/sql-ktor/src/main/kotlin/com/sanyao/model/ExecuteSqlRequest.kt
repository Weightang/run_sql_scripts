package com.sanyao.model

data class ExecuteSqlRequest(
    var id:Int=0, // id0
    var title:String="", // 标题
    var version:String="", // 本次更新版本
    var sqlSake:String="",  // 本次运行脚本的目的
    var sqlContext:String="", // sql内容
    var connectName:String="", // 连接的数据库
    var sqlState:Int=0, // 0 未运行，1 运行成功，2 运行失败





)
