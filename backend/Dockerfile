# Use a lightweight Java image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
# removed COPY target/secure-user-management-0.0.1-SNAPSHOT.jar app.jar

# Copy the Maven wrapper files and source code into the container
COPY .mvn .mvn
COPY mvnw mvnw
COPY pom.xml .

# Copy the backend code
COPY src /app/src

# Expose the port your app runs on
EXPOSE 8080

# Command to run the app
# Removed ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["./mvnw", "spring-boot:run"]