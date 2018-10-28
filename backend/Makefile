build:
	./gradlew clean build

test:
	./gradlew clean build test

execute-jar:
	java -jar ./build/libs/backend-0.0.1-SNAPSHOT.jar

run: test build execute-jar

deploy:
	git init && heroku git:remote -a kyle-gearhart-personal-blog && git add . && git commit -m 'deploy to Heroku' && git push heroku master -f && rm -rf .git/
