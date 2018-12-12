# Start with a base image containing Java runtime
FROM java:8

# Add Maintainer Info
LABEL maintainer="m.k.selvakumar@gmail.com"

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8888 available to the world outside this container
EXPOSE 8888

# The application's jar file
ARG JAR_FILE=build/libs/gradle-boot-docker-k8s-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} gradle-boot-docker-k8s-0.0.1-SNAPSHOT.jar

# Run the jar file 
ENTRYPOINT ["java","-jar","/gradle-boot-docker-k8s-0.0.1-SNAPSHOT.jar"]