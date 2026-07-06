FROM eclipse-temurin:17-jdk As builder

WORKDIR /app

COPY pom.xml .

COPY mvnw .

COPY .mvn .mvn

RUN ./mvnw dependency:go-offline

COPY src ./src

RUN ./mvnw clean package -DskipTests

#stage2

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=builder /app/target/backend-0.0.1-SNAPSHOT.jar /app/backend.jar

EXPOSE 8080

CMD ["java","-jar","/app/backend.jar"]