# What is Angular

- Front-end Framework
- HTML, CSS and TypeScript
- Compiling to JavaScript

## Templates

- Snippets HTML 
- Customs TAGS
- Components notation
```
    @components
```

## Single Page Applications (SPA)

- Application
- Clients side
- Async 

## Environment setup

- [Node.JS](https://nodejs.org/en/download/)
- npm (Node Package Manager)
- Typescript
- Angular CLI
- VSCODE
- Firebase

### Check setup 

```
    node -v && npm -v 
```

### npm commands installs

```
    npm install -g typescript &&
    npm install -g @angular/cli
    
```

## package.json 

- File dependence's project
- Load packages into project

# Create new projects

- Create a new Angular project

```
    ng new project_name
```

## Angular Architecture 

- Framework folders
- Source Code `/src` 
- folder `./scr/app` | main folder 
- folder `./e2e` | test files

## Start project

- compiling project and open it on browser
- localhost:4200
- Hot reload
```
    ng serve -o
```

## Unrestricted PowerShell

- Execute command into VSCODE 
- Set permission on PowerShell
```
    Get-ExecutionPolicy
    Set-ExecutionPolicy Unrestricted
```

## Understand tags components
`<app-root>`

- Components (HTML + CSS), Routes
- `app.component.ts`

### Component

- Configure a component
- Selector, templateUrl, styleUrls
- Properties components


## Install Bootstrap 

- Install dependence

`
    npm install bootstrap --save
`
- Import bootstrap into project (`./src/style.css`)
`@import 'bootstrap/dist/css/bootstrap.min.css'`

