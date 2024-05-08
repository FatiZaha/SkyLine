FROM openjdk:latest

WORKDIR /app

COPY ./src/main/java/ /app

EXPOSE 8080

ENTRYPOINT ["java","-jar","BackendApplication.jar"]