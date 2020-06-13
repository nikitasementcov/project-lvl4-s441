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
	npm run build

lint:
	npm run lint

test:
	npm run test

test-watch:
	npx jest --watchAll

.PHONY: test
