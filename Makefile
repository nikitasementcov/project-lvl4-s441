install:
	npm install

start:
	heroku local -f Procfile

start-backend:
	npx nodemon --exec npx babel-node server/bin/slack.js

start-frontend:
	npx webpack-dev-server

build:
	rm -rf dist
	npm run build

lint:
	npx eslint ./src --ext .js,.jsx

test:
	npx jest

test-watch:
	npx jest --watchAll

.PHONY: test
