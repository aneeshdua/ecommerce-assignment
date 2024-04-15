plugins {
	java
	id("org.springframework.boot") version "3.2.4"
	id("io.spring.dependency-management") version "1.1.4"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_21
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web:3.2.4")
	implementation("org.projectlombok:lombok:1.18.32")
	compileOnly("org.projectlombok:lombok:1.18.32")
	annotationProcessor("org.projectlombok:lombok:1.18.32")
	implementation("org.springframework:spring-web:6.1.6")
	runtimeOnly("com.h2database:h2")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.2")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

sourceSets {
	create("integrationTest") {
		compileClasspath += sourceSets["main"].output + sourceSets["test"].output
		runtimeClasspath += sourceSets["main"].output + sourceSets["test"].output
	}
}

tasks {
	val integrationTest by registering(Test::class) {
		testClassesDirs = sourceSets["integrationTest"].output.classesDirs
		classpath = sourceSets["integrationTest"].runtimeClasspath
		shouldRunAfter(test)
	}
}