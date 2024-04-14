FROM gradle:8.5.0-jdk21 as build

WORKDIR /build

COPY . .

WORKDIR /build

RUN gradle bootJar

FROM openjdk:21-jdk

WORKDIR /app

COPY --from=build /build/build/libs/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]