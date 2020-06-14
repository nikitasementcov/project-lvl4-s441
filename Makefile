install:
	npm install

start:
	heroku local -f Procfile

start-backend:
	npx nodemon --exec npx babel-node server/bin/slack.js

start-frontend:
	npx webpack -w

build:
	rm -rf dist
	make build-server
	make build-app

build-server:
	npx babel server --out-dir dist --source-maps inline
	cp -r server/views dist/views

build-app:
	npx webpack -p --env production

lint:
	npx eslint ./src --ext .js,.jsx

test:
	npx jest

test-watch:
	npx jest --watchAll

.PHONY: test
