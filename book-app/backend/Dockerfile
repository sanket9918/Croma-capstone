FROM maven:3.9-amazoncorretto-21 AS builder
# Build stage

COPY src /usr/src/app/src
COPY pom.xml /usr/src/app

RUN mvn -f /usr/src/app/pom.xml clean package

FROM amazoncorretto:21-alpine3.19
# RUN addgroup -S spring && adduser -S spring -G spring
# USER spring:spring
ARG APP_JAR=bookapp-0.0.1-SNAPSHOT.jar
COPY --from=builder /usr/src/app/target/${APP_JAR} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
