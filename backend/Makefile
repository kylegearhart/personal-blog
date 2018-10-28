build:
	./gradlew clean build

test:
	./gradlew clean build test

execute-jar:
	java -jar ./build/libs/backend-0.0.1-SNAPSHOT.jar

run: test build execute-jar

deploy:
	git add . && git push heroku master
