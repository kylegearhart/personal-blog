.PHONY: e2e

build:
	ng build --configuration=local

build-prod:
	ng build --prod --configuration=prod

unit:
	ng test --watch=false

e2e:
	ng e2e --base-url=http://localhost:8080

test:	unit e2e

run:
	ng serve

