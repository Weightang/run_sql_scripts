package com.sanyao

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.sanyao.plugins.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "192.168.90.233", module = Application::module)
            .start(wait = true)
}

fun Application.module() {
    configureSerialization()
    configureDatabases()
    configureRouting()
}
