build-backend:
	pushd ./personal-website-java-spring-backend/ && make build && popd

build-frontend:
	pushd ./frontend/ && make build && popd

clear-old-frontend-build-artifacts:
	rm -rf ./personal-website-java-spring-backend/src/main/resources/static/*

move-frontend-build-artifacts-into-server:
	mv ./frontend/dist/* ./personal-website-java-spring-backend/src/main/resources/static/

build: build-frontend clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend

test-frontend:
	pushd ./frontend/ && make test && popd

test-backend:
	pushd ./personal-website-java-spring-backend/ && make test && popd

test: test-frontend test-backend

run-backend:
	pushd ./personal-website-java-spring-backend/ && make run && popd

run: test build run-backend

deploy-backend:
	pushd ./personal-website-java-spring-backend/ && make deploy && popd

deploy: test build deploy-backend
